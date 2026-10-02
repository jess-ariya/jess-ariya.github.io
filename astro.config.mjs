// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jess-ariya.github.io',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
  redirects: {
    '/home': '/',
    '/resume': '/#about',
    '/3dprints': '/#play',
    '/sillyprojects': '/#play',
  },
});
