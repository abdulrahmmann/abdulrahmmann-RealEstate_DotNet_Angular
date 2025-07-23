import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#0a0f1f'
    },
    success: { DEFAULT: 'var(--color-success)' },
    info: { DEFAULT: 'var(--color-info)' },
    warning: { DEFAULT: 'var(--color-warning)' },
    danger: { DEFAULT: 'var(--color-danger)' },
    surface: {
      DEFAULT: 'var(--color-light)', // background for cards/inputs/etc.
    },
    colorScheme: {
      light: {
        primary: {
          color: 'var(--color-primary)',
          inverseColor: '#ffffff',
          hoverColor: '#1e293b',
          activeColor: '#334155'
        },
        highlight: {
          background: 'var(--color-primary)',
          focusBackground: '#1e293b',
          color: '#ffffff',
          focusColor: '#ffffff'
        },
        surface: {
          background: 'var(--color-light)',
          border: '#e2e8f0',
          color: '#0f172a'
        },
        field: {
          background: '#ffffff', // ✅ Force light input background
          borderColor: '#cbd5e1', // Slate-300
          textColor: '#0f172a',   // Slate-900
          placeholderColor: '#94a3b8', // Slate-400
          hoverBorderColor: '#94a3b8',
          focusBorderColor: 'var(--color-primary)',
          focusRingColor: 'var(--color-primary)'
        }
      }
    }
  }
});
