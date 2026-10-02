// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jess-ariya.github.io',
  trailingSlash: 'always',
  redirects: {
    '/home': '/',
    '/resume': '/#about',
    '/3dprints': '/#play',
    '/sillyprojects': '/#play',
  },
});
