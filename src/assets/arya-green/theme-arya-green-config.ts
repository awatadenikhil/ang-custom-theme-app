import { BasePreset } from "../../app/BasePreset";


export const ThemeAryaGreenConfig = {
    preset: BasePreset, // Custom theme preset
    options: {
      darkModeSelector: '.app-dark', // Enables dark mode for `.app-dark`
      cssLayer: {
        name: 'primeng',
        order: 'primeng, custom-arya-green', // Custom theme order
      },
    },
  };
  