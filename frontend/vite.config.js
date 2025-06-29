import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        // 🌞 Light Mode
        primary: '#4e89ff',
        secondary: '#1f2937',
        accent: '#10b981',
        background: '#f9fafb',
        text: '#1f2937',

        // 🌙 Dark Mode Overrides (via custom classes)
        dark: {
          primary: '#60a5fa',     // lighter blue
          secondary: '#d1d5db',   // light gray text
          accent: '#22d3ee',      // cyan
          background: '#0f172a',  // deep slate
          text: '#e2e8f0'         // light slate text
        }
      },
    },
  },
  plugins: [tailwindcss(),],
})