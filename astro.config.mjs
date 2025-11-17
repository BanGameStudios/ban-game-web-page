// @ts-check
import { defineConfig } from 'astro/config';
import { redirects } from './src/data/redirects.js';

const redirectMap = Object.fromEntries(
  redirects.map(({ id, url }) => [`/${id}`, url])
);

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/': '/es/',
    ...redirectMap
  }
});