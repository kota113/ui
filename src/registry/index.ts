// src/registry/index.ts
import { ComponentRegistry } from './schema.js';

// Import all component registries
import { accordionRegistry } from './accordion.js';
import { actionSheetRegistry } from './action-sheet.js';
import { alertRegistry } from './alert.js';
import { audioPlayerRegistry } from './audio-player.js';
import { audioRecorderRegistry } from './audio-recorder.js';
import { audioWaveformRegistry } from './audio-waveform.js';
import { avatarRegistry } from './avatar.js';
import { badgeRegistry } from './badge.js';
import { bottomSheetRegistry } from './bottom-sheet.js';
import { buttonRegistry } from './button.js';
import { cameraPreviewRegistry } from './camera-preview.js';
import { cameraRegistry } from './camera.js';
import { cardRegistry } from './card.js';
import { carouselRegistry } from './carousel.js';
import { checkboxRegistry } from './checkbox.js';
import { collapsibleRegistry } from './collapsible.js';
import { colorPickerRegistry } from './color-picker.js';
import { comboboxRegistry } from './combobox.js';
import { datePickerRegistry } from './date-picker.js';
import { filePickerRegistry } from './file-picker.js';
import { galleryRegistry } from './gallery.js';
import { helloWaveRegistry } from './hello-wave.js';
import { iconRegistry } from './icon.js';
import { imageRegistry } from './image.js';
import { inputOtpRegistry } from './input-otp.js';
import { linkRegistry } from './link.js';
import { mediaPickerRegistry } from './media-picker.js';
import { modeToggleRegistry } from './mode-toggle.js';
import { onboardingRegistry } from './onboarding.js';
import { parallaxScrollViewRegistry } from './parallax-scrollview.js';
import { pickerRegistry } from './picker.js';
import { popoverRegistry } from './popover.js';
import { progressRegistry } from './progress.js';
import { radioRegistry } from './radio.js';
import { scrollViewRegistry } from './scroll-view.js';
import { searchbarRegistry } from './searchbar.js';
import { shareRegistry } from './share.js';
import { sheetRegistry } from './sheet.js';
import { skeletonRegistry } from './skeleton.js';
import { spinnerRegistry } from './spinner.js';
import { switchRegistry } from './switch.js';
import { tableRegistry } from './table.js';
import { tabsRegistry } from './tabs.js';
import { textRegistry } from './text.js';
import { toastRegistry } from './toast.js';
import { toggleRegistry } from './toggle.js';
import { videoRegistry } from './video.js';
import { viewRegistry } from './view.js';
import { separatorRegistry } from './separator.js';

export const REGISTRY: Record<string, ComponentRegistry> = {
  ...accordionRegistry,
  ...actionSheetRegistry,
  ...alertRegistry,
  ...audioPlayerRegistry,
  ...audioRecorderRegistry,
  ...audioWaveformRegistry,
  ...avatarRegistry,
  ...badgeRegistry,
  ...bottomSheetRegistry,
  ...buttonRegistry,
  ...cameraPreviewRegistry,
  ...cameraRegistry,
  ...cardRegistry,
  ...carouselRegistry,
  ...checkboxRegistry,
  ...collapsibleRegistry,
  ...colorPickerRegistry,
  ...comboboxRegistry,
  ...datePickerRegistry,
  ...filePickerRegistry,
  ...galleryRegistry,
  ...helloWaveRegistry,
  ...iconRegistry,
  ...imageRegistry,
  ...inputOtpRegistry,
  ...linkRegistry,
  ...mediaPickerRegistry,
  ...modeToggleRegistry,
  ...onboardingRegistry,
  ...parallaxScrollViewRegistry,
  ...pickerRegistry,
  ...popoverRegistry,
  ...progressRegistry,
  ...radioRegistry,
  ...scrollViewRegistry,
  ...searchbarRegistry,
  ...shareRegistry,
  ...sheetRegistry,
  ...skeletonRegistry,
  ...spinnerRegistry,
  ...switchRegistry,
  ...tableRegistry,
  ...tabsRegistry,
  ...textRegistry,
  ...toastRegistry,
  ...toggleRegistry,
  ...videoRegistry,
  ...viewRegistry,
  ...separatorRegistry,
};

// Component categories for organization
export const COMPONENT_CATEGORIES = {
  ui: 'UI Components',
  layout: 'Layout Components',
  form: 'Form Components',
  media: 'Media Components',
  navigation: 'Navigation Components',
  feedback: 'Feedback Components',
  data: 'Data Display Components',
  other: 'Other Components',
} as const;

export type ComponentCategory = keyof typeof COMPONENT_CATEGORIES;

// Helper functions for component registry
export function getComponent(name: string): ComponentRegistry | undefined {
  return REGISTRY[name];
}

export function listComponents(): ComponentRegistry[] {
  return Object.values(REGISTRY)
    .filter((comp) => comp.type === 'registry:ui')
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function searchComponents(query: string): ComponentRegistry[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(REGISTRY)
    .filter(
      (comp) =>
        comp.type === 'registry:ui' &&
        (comp.name.toLowerCase().includes(lowerQuery) ||
          comp.description.toLowerCase().includes(lowerQuery) ||
          comp.category?.toLowerCase().includes(lowerQuery))
    )
    .sort((a, b) => {
      // Prioritize exact matches
      const aExact = a.name.toLowerCase() === lowerQuery;
      const bExact = b.name.toLowerCase() === lowerQuery;
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;

      // Then prioritize name matches over description matches
      const aNameMatch = a.name.toLowerCase().includes(lowerQuery);
      const bNameMatch = b.name.toLowerCase().includes(lowerQuery);
      if (aNameMatch && !bNameMatch) return -1;
      if (!aNameMatch && bNameMatch) return 1;

      // Finally sort alphabetically
      return a.name.localeCompare(b.name);
    });
}

export function getComponentsByCategory(category: string): ComponentRegistry[] {
  return Object.values(REGISTRY)
    .filter((comp) => comp.type === 'registry:ui' && comp.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getComponentDependencies(name: string): string[] {
  const component = getComponent(name);
  if (!component) return [];

  return component.registryDependencies || [];
}

export function resolveAllDependencies(name: string): string[] {
  const visited = new Set<string>();
  const resolved: string[] = [];

  function resolve(componentName: string) {
    if (visited.has(componentName)) return;
    visited.add(componentName);

    const component = getComponent(componentName);
    if (!component) return;

    // Resolve dependencies first
    const deps = component.registryDependencies || [];
    for (const dep of deps) {
      resolve(dep);
    }

    resolved.push(componentName);
  }

  resolve(name);
  return resolved;
}

export function getComponentInfo(name: string): {
  component: ComponentRegistry | undefined;
  dependencies: string[];
  allDependencies: string[];
  packageDependencies: string[];
} {
  const component = getComponent(name);
  if (!component) {
    return {
      component: undefined,
      dependencies: [],
      allDependencies: [],
      packageDependencies: [],
    };
  }

  const dependencies = component.registryDependencies || [];
  const allDependencies = resolveAllDependencies(name);
  const packageDependencies = component.dependencies || [];

  return {
    component,
    dependencies,
    allDependencies,
    packageDependencies,
  };
}

export function validateRegistryIntegrity(): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  Object.entries(REGISTRY).forEach(([key, component]) => {
    // Check if component name matches key
    if (component.name !== key) {
      errors.push(
        `Component key "${key}" doesn't match component name "${component.name}"`
      );
    }

    // Check if registry dependencies exist
    component.registryDependencies?.forEach((dep) => {
      if (!REGISTRY[dep]) {
        errors.push(
          `Component "${key}" depends on non-existent component "${dep}"`
        );
      }
    });

    // Check if component has files
    if (!component.files || component.files.length === 0) {
      warnings.push(`Component "${key}" has no files defined`);
    }

    // Check if component has description
    if (!component.description) {
      warnings.push(`Component "${key}" has no description`);
    }

    // Check if component has category
    if (!component.category) {
      warnings.push(`Component "${key}" has no category`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
