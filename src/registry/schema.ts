// src/registry/schema.ts

export interface ComponentFile {
  path: string;
  type: string;
  target?: string;
}

export interface ComponentDependency {
  name: string;
  version: string;
  dev?: boolean;
}

export interface ComponentRegistry {
  name: string;
  description: string;
  type: string;
  category?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: ComponentFile[];
  preview?: {
    light: string;
    dark: string;
  };
  docs?: string;
  source?: string;
}

export interface RegistryItem {
  name: string;
  description: string;
  dependencies: ComponentDependency[];
  registryDependencies: string[];
  files: ComponentFile[];
  type: string;
  category?: string;
}

export type Registry = Record<string, ComponentRegistry>;
