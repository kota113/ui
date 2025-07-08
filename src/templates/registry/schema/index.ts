export interface ComponentDependency {
  name: string;
  version: string;
}

export interface ComponentFile {
  type: string;
  path: string;
  target: string;
}

export interface ComponentRegistry {
  name: string;
  description: string;
  type: string;
  category?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  hooks?: string[];
  theme?: string[];
  files: ComponentFile[];
  preview?: {
    light: string;
    dark: string;
  };
}

export type Registry = Record<string, ComponentRegistry>;
