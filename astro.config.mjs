// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this repo from a /notaris-pranata-partners/ subpath.
// Only the GH Pages workflow sets GITHUB_PAGES=true, so `astro dev`,
// `astro build` locally, and the Netlify build all keep base "/".
const isGhPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGhPages
    ? 'https://rimba-maker.github.io'
    : 'https://notaris-pranata-partners.netlify.app',
  base: isGhPages ? '/notaris-pranata-partners/' : '/',
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
