// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon({
    include: {
      // Include only three `mdi` icons in the bundle
      mdi: ['account', 'account-plus', 'account-minus'],
      // Include all `uis` icons
      uis: ['*']
    }
  })],

  vite: {
      plugins: [tailwindcss()],
  },

  output: 'server',
  adapter: vercel()
});