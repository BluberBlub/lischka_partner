// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lischka-partner.de',
  integrations: [react(), sitemap()],

  image: {
    domains: ["www.lischka-partner.de"],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});