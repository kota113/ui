// src/commands/add.ts
import { Option } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import ora from 'ora';
import chalk from 'chalk';
import prompts from 'prompts';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { logger } from '../utils/logger.js';
import { validateProjectStructure } from '../utils/registry.js';
import {
  detectPackageManagerFromInvocation,
  validatePackageManager,
  PackageManager,
} from '../utils/package-manager.js';
import {
  installPackageDependencies,
  getDependencyInfo,
} from '../utils/dependencies.js';
import {
  getComponent,
  getComponentInfo,
  listComponents,
  searchComponents,
  resolveAllDependencies,
} from '../registry/index.js';
import { ComponentRegistry } from '../registry/schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  components: string[],
  options: AddOptions
): Promise<void> {
  try {
    const projectPath = process.cwd();

    // Validate project structure
    const isValidProject = await validateProjectStructure(projectPath);
    if (!isValidProject) {
      logger.error(
        'This command must be run from a React Native/Expo project root'
      );
      process.exit(1);
    }

    // Determine package manager
    const packageManager = getPackageManager(options);

    // If no components specified, show available components
    if (components.length === 0) {
      await showAvailableComponents();
      return;
    }

    // Resolve and validate components
    const resolvedComponents = await resolveComponents(components);

    if (resolvedComponents.length === 0) {
      logger.error('No valid components found to install');
      process.exit(1);
    }

    // Check for conflicts
    const conflicts = await checkForConflicts(resolvedComponents, projectPath);
    if (conflicts.length > 0 && !options.overwrite) {
      await handleConflicts(conflicts, options);
      return;
    }

    // Show installation summary
    if (!options.yes && !options.dryRun) {
      const shouldContinue = await showInstallationSummary(
        resolvedComponents,
        packageManager
      );
      if (!shouldContinue) {
        logger.info('Installation cancelled');
        return;
      }
    }

    // Install components
    await installComponents(
      resolvedComponents,
      projectPath,
      packageManager,
      options
    );

    logger.success('Components installed successfully!');

    // Show next steps
    showNextSteps(resolvedComponents);
  } catch (error) {
    logger.error('Failed to add components:', error);
    process.exit(1);
  }
}

function getPackageManager(options: AddOptions): PackageManager {
  if (options.npm) return 'npm';
  if (options.yarn) return 'yarn';
  if (options.pnpm) return 'pnpm';
  if (options.bun) return 'bun';

  return detectPackageManagerFromInvocation();
}

async function showAvailableComponents(): Promise<void> {
  const components = listComponents();

  if (components.length === 0) {
    logger.info('No components available');
    return;
  }

  logger.header('Available Components');

  const choices = components.map((comp) => ({
    title: comp.name,
    description: comp.description,
    value: comp.name,
  }));

  const response = await prompts({
    type: 'multiselect',
    name: 'selectedComponents',
    message: 'Select components to install:',
    choices,
    hint: '- Space to select. Return to submit',
  });

  if (response.selectedComponents && response.selectedComponents.length > 0) {
    // Re-run add command with selected components
    await addCommand(response.selectedComponents, {});
  }
}

async function resolveComponents(
  componentNames: string[]
): Promise<ComponentRegistry[]> {
  const resolved: ComponentRegistry[] = [];
  const allDependencies = new Set<string>();

  for (const name of componentNames) {
    const component = getComponent(name);

    if (!component) {
      // Try to search for similar components
      const suggestions = searchComponents(name);
      if (suggestions.length > 0) {
        logger.error(`Component "${name}" not found. Did you mean:`);
        suggestions.slice(0, 3).forEach((comp) => {
          logger.plain(`  ${comp.name} - ${comp.description}`);
        });
      } else {
        logger.error(`Component "${name}" not found`);
      }
      continue;
    }

    // Resolve all dependencies for this component
    const dependencies = resolveAllDependencies(name);
    dependencies.forEach((dep) => allDependencies.add(dep));
  }

  // Get component objects for all resolved dependencies
  for (const depName of allDependencies) {
    const component = getComponent(depName);
    if (component) {
      resolved.push(component);
    }
  }

  return resolved;
}

async function checkForConflicts(
  components: ComponentRegistry[],
  projectPath: string
): Promise<Array<{ component: string; files: string[] }>> {
  const conflicts: Array<{ component: string; files: string[] }> = [];

  for (const component of components) {
    const conflictingFiles: string[] = [];

    for (const file of component.files) {
      const targetPath = path.join(projectPath, file.target);

      if (await fs.pathExists(targetPath)) {
        conflictingFiles.push(file.target);
      }
    }

    if (conflictingFiles.length > 0) {
      conflicts.push({
        component: component.name,
        files: conflictingFiles,
      });
    }
  }

  return conflicts;
}

async function handleConflicts(
  conflicts: Array<{ component: string; files: string[] }>,
  options: AddOptions
): Promise<void> {
  logger.warn('The following files already exist:');

  conflicts.forEach((conflict) => {
    logger.plain(`\n${chalk.yellow(conflict.component)}:`);
    conflict.files.forEach((file) => {
      logger.plain(`  ${file}`);
    });
  });

  if (!options.yes) {
    const response = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: 'Would you like to overwrite existing files?',
      initial: false,
    });

    if (!response.overwrite) {
      logger.info(
        'Installation cancelled. Use --overwrite to replace existing files.'
      );
      return;
    }
  }

  // Continue with overwrite
  options.overwrite = true;
}

async function showInstallationSummary(
  components: ComponentRegistry[],
  packageManager: PackageManager
): Promise<boolean> {
  const uiComponents = components.filter((c) => c.type === 'registry:ui');
  const examples = components.filter((c) => c.type === 'registry:example');

  logger.header('Installation Summary');

  if (uiComponents.length > 0) {
    logger.info('UI Components:');
    uiComponents.forEach((comp) => {
      logger.plain(`  ${chalk.green('+')} ${comp.name}`);
    });
  }

  if (examples.length > 0) {
    logger.info('\nExamples:');
    examples.forEach((comp) => {
      logger.plain(`  ${chalk.blue('+')} ${comp.name}`);
    });
  }

  // Show package dependencies
  const allPackageDeps = new Set<string>();
  components.forEach((comp) => {
    comp.dependencies?.forEach((dep) => allPackageDeps.add(dep));
  });

  if (allPackageDeps.size > 0) {
    logger.info('\nPackage Dependencies:');
    Array.from(allPackageDeps).forEach((dep) => {
      logger.plain(`  ${chalk.cyan('+')} ${dep}`);
    });
  }

  const response = await prompts({
    type: 'confirm',
    name: 'continue',
    message: 'Continue with installation?',
    initial: true,
  });

  return response.continue;
}

async function installComponents(
  components: ComponentRegistry[],
  projectPath: string,
  packageManager: PackageManager,
  options: AddOptions
): Promise<void> {
  const spinner = ora('Installing components...').start();

  try {
    // Collect all package dependencies
    const allPackageDeps = new Set<string>();
    components.forEach((comp) => {
      comp.dependencies?.forEach((dep) => allPackageDeps.add(dep));
    });

    // Install package dependencies first
    if (allPackageDeps.size > 0) {
      spinner.text = 'Installing package dependencies...';
      await installPackageDependencies(
        Array.from(allPackageDeps),
        projectPath,
        packageManager
      );
    }

    // Install component files
    spinner.text = 'Installing component files...';

    for (const component of components) {
      await installComponentFiles(component, projectPath, options);
    }

    // Install hooks and theme files
    await installHooksAndTheme(components, projectPath, options);

    spinner.succeed('All components installed successfully!');
  } catch (error) {
    spinner.fail('Failed to install components');
    throw error;
  }
}

async function installComponentFiles(
  component: ComponentRegistry,
  projectPath: string,
  options: AddOptions
): Promise<void> {
  for (const file of component.files) {
    const sourcePath = path.resolve(__dirname, '../../', file.path);
    const targetPath = path.join(projectPath, file.target);

    // Ensure target directory exists
    await fs.ensureDir(path.dirname(targetPath));

    // Check if source file exists
    if (!(await fs.pathExists(sourcePath))) {
      logger.warn(`Template file not found: ${file.path}`);
      continue;
    }

    if (options.dryRun) {
      logger.info(`Would install: ${file.target}`);
      continue;
    }

    // Copy file
    await fs.copy(sourcePath, targetPath);
    logger.success(`Added ${file.target}`);
  }
}

async function installHooksAndTheme(
  components: ComponentRegistry[],
  projectPath: string,
  options: AddOptions
): Promise<void> {
  const allHooks = new Set<string>();
  const allTheme = new Set<string>();

  components.forEach((comp) => {
    comp.hooks?.forEach((hook) => allHooks.add(hook));
    comp.theme?.forEach((theme) => allTheme.add(theme));
  });

  // Install hooks
  for (const hook of allHooks) {
    const hookPath = `src/templates/hooks/${hook}.ts`;
    const targetPath = path.join(projectPath, `hooks/${hook}.ts`);

    await copyTemplateFile(hookPath, targetPath, options);
  }

  // Install theme files
  for (const theme of allTheme) {
    const themePath = `src/templates/theme/${theme}.ts`;
    const targetPath = path.join(projectPath, `theme/${theme}.ts`);

    await copyTemplateFile(themePath, targetPath, options);
  }
}

async function copyTemplateFile(
  sourcePath: string,
  targetPath: string,
  options: AddOptions
): Promise<void> {
  const fullSourcePath = path.resolve(__dirname, '../../', sourcePath);

  if (!(await fs.pathExists(fullSourcePath))) {
    return; // Skip if template doesn't exist
  }

  if (options.dryRun) {
    logger.info(`Would install: ${path.relative(process.cwd(), targetPath)}`);
    return;
  }

  await fs.ensureDir(path.dirname(targetPath));
  await fs.copy(fullSourcePath, targetPath);
  logger.success(`Added ${path.relative(process.cwd(), targetPath)}`);
}

function showNextSteps(components: ComponentRegistry[]): void {
  const uiComponents = components.filter((c) => c.type === 'registry:ui');

  if (uiComponents.length === 0) return;

  logger.header('Next Steps');

  logger.info('You can now import and use the components in your project:');
  logger.newline();

  uiComponents.forEach((comp) => {
    logger.plain(
      `import { ${pascalCase(comp.name)} } from '@/components/ui/${comp.name}';`
    );
  });

  logger.newline();
  logger.info(
    'For usage examples, check out the demo files or visit the documentation.'
  );
}

function pascalCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
