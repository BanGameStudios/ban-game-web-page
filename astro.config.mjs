// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/uuhcm2-equipos': 'https://docs.google.com/spreadsheets/d/1DM2jeYv_dnYzctMA4YQT7rjAxwsOeaYI10SPptW27Eo/edit?usp=sharing'
  }
});