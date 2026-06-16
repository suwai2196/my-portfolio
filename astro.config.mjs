// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Update this to your final deployed URL (used for sitemap, canonical URLs, RSS).
  site: 'https://suwaimyo.com',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), icon()],
});
