// src/utils/registry.ts (Enhanced version)
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ComponentRegistry, ComponentDependency } from '../registry/schema.js';
import {
  readFile,
  writeFile,
  fileExists,
  createDirectory,
} from './filesystem.js';
import { logger } from './logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getComponentTemplate(filePath: string): Promise<string> {
  const templatePath = path.resolve(__dirname, '../../', filePath);

  if (!(await fileExists(templatePath))) {
    throw new Error(`Template file not found: ${filePath}`);
  }

  return await readFile(templatePath);
}

export async function installComponent(
  component: ComponentRegistry,
  targetPath: string,
  options: {
    overwrite?: boolean;
    dryRun?: boolean;
  } = {}
): Promise<void> {
  const { overwrite = false, dryRun = false } = options;

  // Check if component files already exist
  const existingFiles: string[] = [];

  for (const file of component.files) {
    const filePath = path.join(targetPath, file.target || file.path);
    if (await fileExists(filePath)) {
      existingFiles.push(filePath);
    }
  }

  if (existingFiles.length > 0 && !overwrite) {
    logger.warn(`The following files already exist for ${component.name}:`);
    existingFiles.forEach((file) =>
      logger.plain(`  ${path.relative(targetPath, file)}`)
    );
    logger.plain(`Use --overwrite to replace existing files`);
    return;
  }

  if (dryRun) {
    logger.info(
      `Dry run - would install ${component.name} with the following files:`
    );
    component.files.forEach((file) => {
      const targetFile = file.target || file.path;
      logger.plain(`  ${targetFile}`);
    });
    return;
  }

  // Install component files
  for (const file of component.files) {
    try {
      await installComponentFile(component);
    } catch (error) {
      logger.error(`Failed to install ${file.target || file.path}:`, error);
      throw error;
    }
  }
}

async function installComponentFile(
  component: ComponentRegistry
): Promise<void> {
  const targetFilePath = `components/ui/${component.name}.tsx`;

  const filePath = path.resolve(
    __dirname,
    `../../templates/components/ui/${component.name}.tsx`
  );

  // Get the template content
  const templateContent = await getComponentTemplate(filePath);

  // Process template with any necessary replacements
  const processedContent = processTemplate(templateContent, {
    componentName: component.name,
    // Add other template variables as needed
  });

  // Ensure the target directory exists
  await createDirectory(path.dirname(targetFilePath));

  // Write the processed content to the target file
  await writeFile(targetFilePath, processedContent);
  logger.success(`Added ${component.name}`);
}

function processTemplate(
  template: string,
  variables: Record<string, string>
): string {
  let processed = template;

  // Replace template variables
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    processed = processed.replace(regex, value);
  });

  return processed;
}

export function resolveComponentDependencies(
  componentName: string,
  registry: Record<string, ComponentRegistry>
): string[] {
  const visited = new Set<string>();
  const resolved: string[] = [];
  const visiting = new Set<string>();

  function resolve(name: string) {
    if (visited.has(name)) return;

    if (visiting.has(name)) {
      throw new Error(`Circular dependency detected: ${name}`);
    }

    visiting.add(name);

    const component = registry[name];
    if (!component) {
      logger.warn(`Component dependency not found: ${name}`);
      visiting.delete(name);
      return;
    }

    // Resolve registry dependencies first
    const deps = component.registryDependencies || [];
    for (const dep of deps) {
      resolve(dep);
    }

    visiting.delete(name);
    visited.add(name);
    resolved.push(name);
  }

  resolve(componentName);
  return resolved;
}

export function convertDependenciesToComponentDependencies(
  dependencies: string[]
): ComponentDependency[] {
  return dependencies.map((dep) => {
    // Handle version specifications
    if (dep.includes('@')) {
      const parts = dep.split('@');
      const name = parts.slice(0, -1).join('@'); // Handle scoped packages
      const version = parts[parts.length - 1];
      return { name, version };
    }

    // Default to latest version
    return { name: dep, version: 'latest' };
  });
}

export async function validateProjectStructure(
  projectPath: string
): Promise<boolean> {
  const requiredFiles = ['package.json', 'app.json'];

  for (const file of requiredFiles) {
    const filePath = path.join(projectPath, file);
    if (!(await fileExists(filePath))) {
      logger.error(`Required file not found: ${file}`);
      return false;
    }
  }

  // Check if it's a React Native/Expo project
  try {
    const packageJsonPath = path.join(projectPath, 'package.json');
    const packageJson = JSON.parse(await readFile(packageJsonPath));

    const hasReactNative =
      packageJson.dependencies?.['react-native'] ||
      packageJson.devDependencies?.['react-native'];
    const hasExpo =
      packageJson.dependencies?.['expo'] ||
      packageJson.devDependencies?.['expo'];

    if (!hasReactNative && !hasExpo) {
      logger.error("This doesn't appear to be a React Native or Expo project");
      return false;
    }
  } catch (error) {
    logger.error('Failed to validate project structure:', error);
    return false;
  }

  return true;
}

export async function updateComponentsIndex(
  projectPath: string,
  components: string[]
): Promise<void> {
  const indexPath = path.join(projectPath, 'components/ui/index.ts');

  try {
    // Ensure components/ui directory exists
    await createDirectory(path.dirname(indexPath));

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

export async function checkComponentConflicts(
  components: string[],
  projectPath: string
): Promise<{
  conflicts: Array<{
    component: string;
    files: string[];
  }>;
}> {
  const conflicts: Array<{
    component: string;
    files: string[];
  }> = [];

  for (const componentName of components) {
    const component = getComponent(componentName);
    if (!component) continue;

    const conflictingFiles: string[] = [];

    for (const file of component.files) {
      const targetPath = file.target || file.path;
      const fullPath = path.join(projectPath, targetPath);

      if (await fileExists(fullPath)) {
        conflictingFiles.push(targetPath);
      }
    }

    if (conflictingFiles.length > 0) {
      conflicts.push({
        component: componentName,
        files: conflictingFiles,
      });
    }
  }

  return { conflicts };
}

export function getComponentsByType(
  type: 'registry:ui' | 'registry:example'
): ComponentRegistry[] {
  return Object.values(REGISTRY)
    .filter((comp) => comp.type === type)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getComponentExamples(
  componentName: string
): ComponentRegistry[] {
  return Object.values(REGISTRY)
    .filter(
      (comp) =>
        comp.type === 'registry:example' && comp.name.startsWith(componentName)
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Import the registry - this assumes it's properly exported
import { REGISTRY, getComponent } from '../registry/index.js';
