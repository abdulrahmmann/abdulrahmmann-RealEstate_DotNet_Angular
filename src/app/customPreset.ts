import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f1f5f9',   // Softest gray-blue
      100: '#e2e8f0',
      200: '#cbd5e1',
      300: '#94a3b8',
      400: '#64748b',
      500: '#475569',   // Used for borders or subtle elements
      600: '#334155',   // Secondary active elements
      700: '#1e293b',   // Darker buttons or card backgrounds
      800: '#1e293b',   // Secondary dark
      900: '#0f172a',   // Main color (your chosen color)
      950: '#0a0f1f'    // Deepest background or hover states
    },
    colorScheme: {
      light: {
        primary: {
          color: '#0f172a',           // main text/icon color
          inverseColor: '#ffffff',    // text on primary backgrounds
          hoverColor: '#1e293b',      // hover variant
          activeColor: '#334155'      // active state
        },
        highlight: {
          background: '#0f172a',      // background for active/selected
          focusBackground: '#1e293b', // focus ring or highlight bg
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      }
    }
  }
});
