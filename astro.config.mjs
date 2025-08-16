import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: './',
  },
  integrations: [tailwind(), robotsTxt()],
  site: 'https://samuelmedina07.github.io/samuel-porfolio/',
  base: '/samuel-porfolio/',
  outDir: 'docs' // good for GitHub Pages if you're using the main branch
});