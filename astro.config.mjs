// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon({
    iconDir: "src/icons/",
  })],

  vite: {
      plugins: [tailwindcss()],
  },

  output: 'server',
  adapter: vercel()
});