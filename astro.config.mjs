import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  outDir: 'docs', // bien para GitHub Pages si usas rama main
  site: 'https://samuelmedina07.github.io',
  base: '/samuel-porfolio/',
})

