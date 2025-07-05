import inquirer from 'inquirer';
import ora from 'ora';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { logger } from '../utils/logger.js';
import {
  validateProjectName,
  validateProjectPath,
  sanitizeProjectName,
} from '../utils/validation.js';
import { copyTemplate, replaceInFile } from '../utils/filesystem.js';
import {
  detectPackageManagerFromInvocation,
  installDependencies,
  getRunCommand,
  type PackageManager,
} from '../utils/package-manager.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface InitOptions {
  template?: string;
  npm?: boolean;
  yarn?: boolean;
  pnpm?: boolean;
  bun?: boolean;
  skipInstall?: boolean;
}

export async function initCommand(
  projectName?: string,
  options: InitOptions = {}
) {
  // Show the banner first
  logger.banner();
  logger.header('🚀 Welcome to BNA - Expo React Native Starter');

  try {
    // Get project name
    let finalProjectName = projectName;
    let useCurrentDirectory = false;

    if (!finalProjectName) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is your project name?',
          default: 'bna-app',
          validate: (input: string) => {
            if (input === '.') {
              return true; // Allow current directory
            }
            const validation = validateProjectName(input);
            return (
              validation.valid || validation.message || 'Invalid project name'
            );
          },
        },
      ]);
      finalProjectName = answers.projectName;
    }

    // Check if user wants to use current directory
    if (finalProjectName === '.') {
      useCurrentDirectory = true;
      const currentDirName = path.basename(process.cwd());

      // Validate current directory name as project name
      const nameValidation = validateProjectName(currentDirName);
      if (!nameValidation.valid) {
        logger.error(
          `Current directory name "${currentDirName}" is not a valid project name.`
        );
        logger.error(nameValidation.message!);

        // Ask for a different project name
        const answers = await inquirer.prompt([
          {
            type: 'input',
            name: 'projectName',
            message: 'Please enter a valid project name:',
            default: 'bna-app',
            validate: (input: string) => {
              const validation = validateProjectName(input);
              return (
                validation.valid || validation.message || 'Invalid project name'
              );
            },
          },
        ]);
        finalProjectName = answers.projectName;
      } else {
        finalProjectName = currentDirName;
      }
    }

    // Validate and sanitize project name
    const nameValidation = validateProjectName(finalProjectName ?? 'bna');
    if (!nameValidation.valid) {
      logger.error(nameValidation.message!);
      process.exit(1);
    }

    const sanitizedName = sanitizeProjectName(finalProjectName ?? 'bna');
    let projectPath: string;

    if (useCurrentDirectory) {
      projectPath = process.cwd();

      // Check if current directory is empty or only contains safe files
      const files = fs.readdirSync(projectPath);
      const safeFiles = [
        '.git',
        '.gitignore',
        'README.md',
        'LICENSE',
        '.DS_Store',
      ];
      const conflictingFiles = files.filter(
        (file) => !safeFiles.includes(file)
      );

      if (conflictingFiles.length > 0) {
        logger.warn('Current directory is not empty. Found:');
        conflictingFiles.forEach((file) => logger.plain(`  ${file}`));

        const { proceed } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'proceed',
            message: 'Continue anyway?',
            default: false,
          },
        ]);

        if (!proceed) {
          logger.info('Initialization cancelled.');
          process.exit(0);
        }
      }
    } else {
      projectPath = path.resolve(process.cwd(), sanitizedName);

      // Validate project path
      const pathValidation = validateProjectPath(projectPath);
      if (!pathValidation.valid) {
        logger.error(pathValidation.message!);
        process.exit(1);
      }
    }

    // Determine package manager based on CLI flags or invocation method
    let packageManager: PackageManager;

    if (options.npm) packageManager = 'npm';
    else if (options.yarn) packageManager = 'yarn';
    else if (options.pnpm) packageManager = 'pnpm';
    else if (options.bun) packageManager = 'bun';
    else {
      // Detect from how the CLI was invoked
      packageManager = detectPackageManagerFromInvocation();
      logger.info(`Detected package manager: ${packageManager}`);
    }

    // Create project
    const spinner = ora('Creating your BNA project...').start();

    try {
      // Copy template files
      const templatePath = path.resolve(__dirname, '../../templates/start');
      await copyTemplate(templatePath, projectPath);

      // Update package.json
      await updatePackageJson(projectPath, sanitizedName);

      // Update app.json
      await updateAppJson(projectPath, sanitizedName);

      spinner.succeed('Project created successfully!');

      // Install dependencies
      if (!options.skipInstall) {
        await installDependencies(projectPath, packageManager);
      }

      // Show success message
      showSuccessMessage(
        sanitizedName,
        packageManager,
        options.skipInstall ?? false,
        useCurrentDirectory
      );
    } catch (error) {
      spinner.fail('Failed to create project');
      throw error;
    }
  } catch (error) {
    logger.error('An error occurred:', error);
    process.exit(1);
  }
}

async function updatePackageJson(
  projectPath: string,
  projectName: string
): Promise<void> {
  const packageJsonPath = path.join(projectPath, 'package.json');
  await replaceInFile(packageJsonPath, {
    '"name": "init"': `"name": "${projectName}"`,
    '"init"': `"${projectName}"`,
  });
}

async function updateAppJson(
  projectPath: string,
  projectName: string
): Promise<void> {
  const appJsonPath = path.join(projectPath, 'app.json');
  await replaceInFile(appJsonPath, {
    '"name": "init"': `"name": "${projectName}"`,
    '"slug": "init"': `"slug": "${projectName}"`,
    '"scheme": "init"': `"scheme": "${projectName}"`,
  });
}

function showSuccessMessage(
  projectName: string,
  packageManager: PackageManager,
  skipInstall: boolean,
  useCurrentDirectory: boolean
): void {
  logger.newline();
  logger.success(`🎉 Successfully created ${projectName}!`);
  logger.newline();

  logger.info('Next steps:');

  if (!useCurrentDirectory) {
    logger.plain(`  cd ${projectName}`);
  }

  if (skipInstall) {
    const installCommand =
      packageManager === 'npm'
        ? 'npm install'
        : packageManager === 'yarn'
        ? 'yarn'
        : packageManager === 'bun'
        ? 'bun install'
        : 'pnpm install';

    logger.plain(`  ${installCommand}`);
  }

  logger.plain(`  ${getRunCommand(packageManager, 'start')}`);
  logger.newline();

  logger.info('Available commands:');
  logger.plain(
    `  ${getRunCommand(
      packageManager,
      'start'
    )}    Start the development server`
  );
  logger.plain(`  ${getRunCommand(packageManager, 'android')}  Run on Android`);
  logger.plain(`  ${getRunCommand(packageManager, 'ios')}      Run on iOS`);
  logger.plain(`  ${getRunCommand(packageManager, 'web')}      Run on Web`);
  logger.newline();

  logger.info('Happy coding! 🚀');
}
