import { ComponentRegistry } from './templates/registry/schema/index.js';

// Import all component registries
import { accordionRegistry } from './templates/registry/accordion.js';
import { actionSheetRegistry } from './templates/registry/action-sheet.js';
import { alertRegistry } from './templates/registry/alert.js';
import { audioPlayerRegistry } from './templates/registry/audio-player.js';
import { audioRecorderRegistry } from './templates/registry/audio-recorder.js';
import { audioWaveformRegistry } from './templates/registry/audio-waveform.js';
import { avatarRegistry } from './templates/registry/avatar.js';
import { badgeRegistry } from './templates/registry/badge.js';
import { bottomSheetRegistry } from './templates/registry/bottom-sheet.js';
import { buttonRegistry } from './templates/registry/button.js';
import { cameraPreviewRegistry } from './templates/registry/camera-preview.js';
import { cameraRegistry } from './templates/registry/camera.js';
import { cardRegistry } from './templates/registry/card.js';
import { carouselRegistry } from './templates/registry/carousel.js';
import { checkboxRegistry } from './templates/registry/checkbox.js';
import { collapsibleRegistry } from './templates/registry/collapsible.js';
import { colorPickerRegistry } from './templates/registry/color-picker.js';
import { comboboxRegistry } from './templates/registry/combobox.js';
import { datePickerRegistry } from './templates/registry/date-picker.js';
import { filePickerRegistry } from './templates/registry/file-picker.js';
import { galleryRegistry } from './templates/registry/gallery.js';
import { helloWaveRegistry } from './templates/registry/hello-wave.js';
import { iconRegistry } from './templates/registry/icon.js';
import { imageRegistry } from './templates/registry/image.js';
import { inputOtpRegistry } from './templates/registry/input-otp.js';
import { linkRegistry } from './templates/registry/link.js';
import { mediaPickerRegistry } from './templates/registry/media-picker.js';
import { modeToggleRegistry } from './templates/registry/mode-toggle.js';
import { onboardingRegistry } from './templates/registry/onboarding.js';
import { parallaxScrollViewRegistry } from './templates/registry/parallax-scrollview.js';
import { pickerRegistry } from './templates/registry/picker.js';
import { popoverRegistry } from './templates/registry/popover.js';
import { progressRegistry } from './templates/registry/progress.js';
import { radioRegistry } from './templates/registry/radio.js';
import { scrollViewRegistry } from './templates/registry/scroll-view.js';
import { searchbarRegistry } from './templates/registry/searchbar.js';
import { shareRegistry } from './templates/registry/share.js';
import { sheetRegistry } from './templates/registry/sheet.js';
import { skeletonRegistry } from './templates/registry/skeleton.js';
import { spinnerRegistry } from './templates/registry/spinner.js';
import { switchRegistry } from './templates/registry/switch.js';
import { tableRegistry } from './templates/registry/table.js';
import { tabsRegistry } from './templates/registry/tabs.js';
import { textRegistry } from './templates/registry/text.js';
import { toastRegistry } from './templates/registry/toast.js';
import { toggleRegistry } from './templates/registry/toggle.js';
import { videoRegistry } from './templates/registry/video.js';
import { viewRegistry } from './templates/registry/view.js';
import { separatorRegistry } from './templates/registry/separator.js';
import { themeRegistry } from './templates/registry/theme/index.js';
import { hooksRegistry } from './templates/registry/hooks/index.js';

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
  ...themeRegistry,
  ...hooksRegistry,
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
