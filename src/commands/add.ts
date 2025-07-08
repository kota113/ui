// src/commands/add.ts
import {
  REGISTRY,
  getComponent,
  resolveAllDependencies,
} from '../registry/index.js';
import { logger } from '../utils/logger.js';
import {
  validateProjectStructure,
  installComponent,
  checkComponentConflicts,
  updateComponentsIndex,
} from '../utils/registry.js';
import {
  installPackageDependencies,
  checkExistingDependencies,
} from '../utils/dependencies.js';
import { detectPackageManagerFromInvocation } from '../utils/package-manager.js';
import { getComponentTemplate } from '../utils/registry.js';
import { writeFile, fileExists, createDirectory } from '../utils/filesystem.js';
import path from 'path';
import inquirer from 'inquirer';
import ora from 'ora';

interface AddCommandOptions {
  overwrite?: boolean;
  dryRun?: boolean;
  yes?: boolean;
  npm?: boolean;
  yarn?: boolean;
  pnpm?: boolean;
  bun?: boolean;
}

export async function addCommand(
  components: string[],
  options: AddCommandOptions
): Promise<void> {
  try {
    const projectPath = process.cwd();

    // Validate project structure
    const isValidProject = await validateProjectStructure(projectPath);
    if (!isValidProject) {
      logger.error(
        'This command must be run in a valid React Native/Expo project'
      );
      process.exit(1);
    }

    // If no components specified, show interactive selection
    if (components.length === 0) {
      components = await selectComponentsInteractively();
    }

    // Validate components exist in registry
    const invalidComponents = components.filter((name) => !getComponent(name));
    if (invalidComponents.length > 0) {
      logger.error(`Unknown components: ${invalidComponents.join(', ')}`);
      logger.info('Available components:');
      Object.values(REGISTRY)
        .filter((comp) => comp.type === 'registry:ui')
        .forEach((comp) => logger.plain(`  ${comp.name}`));
      process.exit(1);
    }

    // Determine package manager
    const packageManager = getPackageManager(options);

    // Resolve all dependencies for requested components
    const allComponentsToInstall = new Set<string>();
    const allPackageDependencies = new Set<string>();
    const allHookDependencies = new Set<string>();
    const allThemeDependencies = new Set<string>();

    for (const componentName of components) {
      const dependencies = resolveAllDependencies(componentName);
      dependencies.forEach((dep) => allComponentsToInstall.add(dep));

      // Collect all package dependencies
      dependencies.forEach((dep) => {
        const component = getComponent(dep);
        if (component) {
          (component.dependencies || []).forEach((pkgDep) =>
            allPackageDependencies.add(pkgDep)
          );
          (component.hooks || []).forEach((hook) =>
            allHookDependencies.add(hook)
          );
          (component.theme || []).forEach((theme) =>
            allThemeDependencies.add(theme)
          );
        }
      });
    }

    // Check for conflicts
    const { conflicts } = await checkComponentConflicts(
      Array.from(allComponentsToInstall),
      projectPath,
      REGISTRY
    );

    if (conflicts.length > 0 && !options.overwrite) {
      logger.warn('The following files already exist:');
      conflicts.forEach(({ component, files }) => {
        logger.plain(`  ${component}:`);
        files.forEach((file) => logger.plain(`    ${file}`));
      });

      if (!options.yes) {
        const { shouldContinue } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'shouldContinue',
            message: 'Do you want to overwrite existing files?',
            default: false,
          },
        ]);

        if (!shouldContinue) {
          logger.info('Operation cancelled');
          process.exit(0);
        }
      }

      options.overwrite = true;
    }

    // Show dry run information
    if (options.dryRun) {
      logger.info('Dry run - would install the following:');
      logger.plain(
        `Components: ${Array.from(allComponentsToInstall).join(', ')}`
      );

      if (allPackageDependencies.size > 0) {
        logger.plain(
          `Package dependencies: ${Array.from(allPackageDependencies).join(
            ', '
          )}`
        );
      }

      if (allHookDependencies.size > 0) {
        logger.plain(
          `Hook dependencies: ${Array.from(allHookDependencies).join(', ')}`
        );
      }

      if (allThemeDependencies.size > 0) {
        logger.plain(
          `Theme dependencies: ${Array.from(allThemeDependencies).join(', ')}`
        );
      }

      return;
    }

    // Install package dependencies
    const packageDepsArray = Array.from(allPackageDependencies);
    const missingPackageDeps = checkExistingDependencies(
      packageDepsArray,
      projectPath
    );

    if (missingPackageDeps.length > 0) {
      logger.info(
        `Installing package dependencies: ${missingPackageDeps.join(', ')}`
      );
      await installPackageDependencies(
        missingPackageDeps,
        projectPath,
        packageManager
      );
    }

    // Install hook dependencies
    await installHookDependencies(
      Array.from(allHookDependencies),
      projectPath,
      options
    );

    // Install theme dependencies
    await installThemeDependencies(
      Array.from(allThemeDependencies),
      projectPath,
      options
    );

    // Install components
    const spinner = ora('Installing components...').start();
    const installedComponents: string[] = [];

    try {
      for (const componentName of Array.from(allComponentsToInstall)) {
        const component = getComponent(componentName);
        if (!component) continue;

        await installComponent(component, projectPath, {
          overwrite: options.overwrite,
          dryRun: false,
        });

        installedComponents.push(componentName);
      }

      spinner.succeed('Components installed successfully!');
    } catch (error) {
      spinner.fail('Failed to install components');
      throw error;
    }

    // Update components index
    await updateComponentsIndex(projectPath, installedComponents);

    // Show success message
    logger.success(`Successfully added ${components.length} component(s):`);
    components.forEach((name) => logger.plain(`  ✓ ${name}`));

    if (installedComponents.length > components.length) {
      const additionalComponents = installedComponents.filter(
        (name) => !components.includes(name)
      );
      logger.info(
        `Also installed dependencies: ${additionalComponents.join(', ')}`
      );
    }

    logger.newline();
    logger.info('Next steps:');
    logger.plain('  Import components from @/components/ui');
    logger.plain('  Check the documentation for usage examples');
  } catch (error) {
    logger.error('Failed to add components:', error);
    process.exit(1);
  }
}

async function selectComponentsInteractively(): Promise<string[]> {
  const availableComponents = Object.values(REGISTRY)
    .filter((comp) => comp.type === 'registry:ui')
    .map((comp) => ({
      name: `${comp.name} - ${comp.description}`,
      value: comp.name,
    }));

  const { selectedComponents } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedComponents',
      message: 'Select components to add:',
      choices: availableComponents,
      pageSize: 15,
    },
  ]);

  if (selectedComponents.length === 0) {
    logger.error('No components selected');
    process.exit(1);
  }

  return selectedComponents;
}

function getPackageManager(options: AddCommandOptions) {
  if (options.npm) return 'npm';
  if (options.yarn) return 'yarn';
  if (options.pnpm) return 'pnpm';
  if (options.bun) return 'bun';

  return detectPackageManagerFromInvocation();
}

async function installHookDependencies(
  hooks: string[],
  projectPath: string,
  options: AddCommandOptions
): Promise<void> {
  if (hooks.length === 0) return;

  const hooksDir = path.join(projectPath, 'hooks');
  await createDirectory(hooksDir);

  for (const hookName of hooks) {
    const hookPath = path.join(hooksDir, `${hookName}.ts`);

    if ((await fileExists(hookPath)) && !options.overwrite) {
      if (!options.yes) {
        const { shouldOverwrite } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'shouldOverwrite',
            message: `Hook ${hookName} already exists. Overwrite?`,
            default: false,
          },
        ]);

        if (!shouldOverwrite) {
          logger.info(`Skipping hook: ${hookName}`);
          continue;
        }
      }
    }

    try {
      const hookTemplate = await getComponentTemplate(
        `templates/hooks/${hookName}.ts`
      );
      await writeFile(hookPath, hookTemplate);
      logger.success(`Added hook: ${hookName}`);
    } catch (error) {
      logger.warn(`Failed to install hook ${hookName}:`, error);
    }
  }
}

async function installThemeDependencies(
  themes: string[],
  projectPath: string,
  options: AddCommandOptions
): Promise<void> {
  if (themes.length === 0) return;

  const themeDir = path.join(projectPath, 'theme');
  await createDirectory(themeDir);

  for (const themeName of themes) {
    const themePath = path.join(themeDir, `${themeName}.ts`);

    if ((await fileExists(themePath)) && !options.overwrite) {
      if (!options.yes) {
        const { shouldOverwrite } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'shouldOverwrite',
            message: `Theme ${themeName} already exists. Overwrite?`,
            default: false,
          },
        ]);

        if (!shouldOverwrite) {
          logger.info(`Skipping theme: ${themeName}`);
          continue;
        }
      }
    }

    try {
      const themeTemplate = await getComponentTemplate(
        `templates/theme/${themeName}.ts`
      );
      await writeFile(themePath, themeTemplate);
      logger.success(`Added theme: ${themeName}`);
    } catch (error) {
      logger.warn(`Failed to install theme ${themeName}:`, error);
    }
  }
}
