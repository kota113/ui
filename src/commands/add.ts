// src/commands/add.ts
import inquirer from 'inquirer';
import ora from 'ora';
import chalk from 'chalk';
import path from 'path';
import {
  getComponent,
  getComponentInfo,
  resolveAllDependencies,
  searchComponents,
  listComponents,
} from '../registry/index.js';
import {
  validateProjectStructure,
  installComponent,
} from '../utils/registry.js';
import {
  installPackageDependencies,
  getDependencyInfo,
} from '../utils/dependencies.js';
import {
  detectPackageManagerFromInvocation,
  PackageManager,
} from '../utils/package-manager.js';
import { logger } from '../utils/logger.js';
import { fileExists } from '../utils/filesystem.js';

interface AddOptions {
  overwrite?: boolean;
  dryRun?: boolean;
  yes?: boolean;
  npm?: boolean;
  yarn?: boolean;
  pnpm?: boolean;
  bun?: boolean;
}

export async function addCommand(
  componentNames: string[],
  options: AddOptions
): Promise<void> {
  try {
    const cwd = process.cwd();

    // Validate project structure
    const spinner = ora('Validating project structure...').start();
    const isValidProject = await validateProjectStructure(cwd);

    if (!isValidProject) {
      spinner.fail('Invalid project structure');
      logger.error(
        'This command must be run in a React Native/Expo project directory'
      );
      process.exit(1);
    }
    spinner.succeed('Project structure validated');

    // Determine package manager
    const packageManager = getPackageManager(options);
    logger.info(`Using ${packageManager} as package manager`);

    // Handle component selection
    const componentsToAdd = await getComponentsToAdd(componentNames, options);

    if (componentsToAdd.length === 0) {
      logger.warn('No components selected to add');
      return;
    }

    // Resolve all dependencies
    const allComponents = new Set<string>();
    const allPackageDependencies = new Set<string>();

    for (const componentName of componentsToAdd) {
      const dependencies = resolveAllDependencies(componentName);
      dependencies.forEach((dep) => allComponents.add(dep));

      // Collect package dependencies
      const componentInfo = getComponentInfo(componentName);
      if (componentInfo.component?.dependencies) {
        componentInfo.component.dependencies.forEach((dep) =>
          allPackageDependencies.add(dep)
        );
      }
    }

    const componentsList = Array.from(allComponents);
    const packageDependencies = Array.from(allPackageDependencies);

    // Show summary
    await showInstallationSummary(
      componentsList,
      packageDependencies,
      cwd,
      options
    );

    // Confirm installation (unless --yes flag is used)
    if (!options.yes && !options.dryRun) {
      const { proceed } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'proceed',
          message: 'Proceed with installation?',
          default: true,
        },
      ]);

      if (!proceed) {
        logger.info('Installation cancelled');
        return;
      }
    }

    if (options.dryRun) {
      logger.info('Dry run completed - no files were modified');
      return;
    }

    // Install package dependencies first
    if (packageDependencies.length > 0) {
      logger.info('Installing package dependencies...');
      await installPackageDependencies(
        packageDependencies,
        cwd,
        packageManager
      );
    }

    // Install components
    logger.info('Installing components...');
    for (const componentName of componentsList) {
      const component = getComponent(componentName);
      if (component) {
        await installComponent(component, cwd, {
          overwrite: options.overwrite,
          dryRun: options.dryRun,
        });
      }
    }

    // Update components index
    await updateComponentsIndex(cwd, componentsList);

    logger.success('✅ Components added successfully!');
    logger.info('');
    logger.info('Next steps:');
    logger.plain('  1. Import the components in your app');
    logger.plain('  2. Check the documentation for usage examples');
  } catch (error) {
    logger.error('Failed to add components:', error);
    process.exit(1);
  }
}

async function getComponentsToAdd(
  componentNames: string[],
  options: AddOptions
): Promise<string[]> {
  // If no components specified, show interactive selection
  if (componentNames.length === 0) {
    return await selectComponentsInteractively();
  }

  // Validate provided component names
  const validComponents: string[] = [];
  const invalidComponents: string[] = [];

  for (const name of componentNames) {
    const component = getComponent(name);
    if (component && component.type === 'registry:ui') {
      validComponents.push(name);
    } else {
      invalidComponents.push(name);
    }
  }

  // Handle invalid components
  if (invalidComponents.length > 0) {
    logger.error('Invalid component names:');
    invalidComponents.forEach((name) => logger.plain(`  ${name}`));
    logger.info('');

    // Suggest similar components
    for (const invalidName of invalidComponents) {
      const suggestions = searchComponents(invalidName).slice(0, 3);
      if (suggestions.length > 0) {
        logger.info(`Did you mean one of these for "${invalidName}"?`);
        suggestions.forEach((comp) =>
          logger.plain(`  ${comp.name} - ${comp.description}`)
        );
        logger.info('');
      }
    }

    if (validComponents.length === 0) {
      process.exit(1);
    }
  }

  return validComponents;
}

async function selectComponentsInteractively(): Promise<string[]> {
  const availableComponents = listComponents();

  if (availableComponents.length === 0) {
    logger.error('No components available in registry');
    process.exit(1);
  }

  const choices = availableComponents.map((comp) => ({
    name: `${comp.name} - ${comp.description}`,
    value: comp.name,
  }));

  const { selectedComponents } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedComponents',
      message: 'Select components to add:',
      choices,
      pageSize: 10,
      validate: (input) => {
        if (input.length === 0) {
          return 'Please select at least one component';
        }
        return true;
      },
    },
  ]);

  return selectedComponents;
}

async function showInstallationSummary(
  components: string[],
  packageDependencies: string[],
  projectPath: string,
  options: AddOptions
): Promise<void> {
  logger.header('Installation Summary');

  // Show components to be added
  logger.info('Components to add:');
  for (const componentName of components) {
    const component = getComponent(componentName);
    if (component) {
      logger.plain(`  ${chalk.cyan(componentName)} - ${component.description}`);
    }
  }

  // Show package dependencies
  if (packageDependencies.length > 0) {
    const { missing, existing } = getDependencyInfo(
      packageDependencies,
      projectPath
    );

    if (missing.length > 0) {
      logger.info('');
      logger.info('Package dependencies to install:');
      missing.forEach((dep) => logger.plain(`  ${chalk.yellow(dep)}`));
    }

    if (existing.length > 0) {
      logger.info('');
      logger.info('Package dependencies already installed:');
      existing.forEach((dep) => logger.plain(`  ${chalk.green(dep)}`));
    }
  }

  // Show files that will be created/modified
  logger.info('');
  logger.info('Files to be created:');

  for (const componentName of components) {
    const component = getComponent(componentName);
    if (component) {
      for (const file of component.files) {
        const targetPath = file.target || file.path;
        const fullPath = path.join(projectPath, targetPath);
        const exists = await fileExists(fullPath);

        if (exists && !options.overwrite) {
          logger.plain(
            `  ${chalk.yellow(
              targetPath
            )} (exists - use --overwrite to replace)`
          );
        } else {
          logger.plain(`  ${chalk.green(targetPath)}`);
        }
      }
    }
  }

  logger.info('');
}

function getPackageManager(options: AddOptions): PackageManager {
  // Check explicit package manager flags
  if (options.npm) return 'npm';
  if (options.yarn) return 'yarn';
  if (options.pnpm) return 'pnpm';
  if (options.bun) return 'bun';

  // Auto-detect from invocation
  return detectPackageManagerFromInvocation();
}

async function updateComponentsIndex(
  projectPath: string,
  components: string[]
): Promise<void> {
  const indexPath = path.join(projectPath, 'components/ui/index.ts');

  try {
    // Check if index file exists
    const indexExists = await fileExists(indexPath);

    if (!indexExists) {
      // Create new index file
      const exports = components
        .map((name) => `export * from './${name}';`)
        .join('\n');

      await writeFile(indexPath, exports + '\n');
      logger.success('Created components/ui/index.ts');
    } else {
      // Read existing index file
      const existingContent = await readFile(indexPath);

      // Add new exports that don't already exist
      const newExports: string[] = [];

      for (const component of components) {
        const exportLine = `export * from './${component}';`;
        if (!existingContent.includes(exportLine)) {
          newExports.push(exportLine);
        }
      }

      if (newExports.length > 0) {
        const updatedContent =
          existingContent + '\n' + newExports.join('\n') + '\n';
        await writeFile(indexPath, updatedContent);
        logger.success('Updated components/ui/index.ts');
      }
    }
  } catch (error) {
    logger.warn('Failed to update components index:', error);
  }
}

// Helper function imports (these should be imported from your utils)
import { writeFile, readFile } from '../utils/filesystem.js';
