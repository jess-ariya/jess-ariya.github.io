// @ts-check
import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';
import rehypeImages from './src/lib/rehype-images.mjs';

export default defineConfig({
  site: 'https://jess-ariya.github.io',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-light' },
    // rehype-raw parses the inline HTML in case studies so rehypeImages can see those <img> tags.
    rehypePlugins: [rehypeRaw, rehypeImages],
  },
  redirects: {
    '/home': '/',
    '/resume': '/#about',
    '/3dprints': '/#play',
    '/sillyprojects': '/#play',
  },
});
