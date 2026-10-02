// Makes web-sized WebP copies of the images used in case studies (src/content/pages/*.md).
// Originals in public/ stay untouched; copies go to public/_opt/ (gitignored) with a manifest
// that the rehype plugin uses to swap sources and add dimensions. Runs before dev and build.
import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MAX_WIDTH = 1600;
const pagesDir = 'src/content/pages';
const outRoot = 'public/_opt';

const sources = new Set();
for (const file of await readdir(pagesDir)) {
  if (!file.endsWith('.md')) continue;
  const text = await readFile(path.join(pagesDir, file), 'utf8');
  for (const [, src] of text.matchAll(/(?:src|poster)="(\/assets\/img\/[^"]+\.(?:png|jpe?g))"/gi)) sources.add(src);
}

const manifest = {};
for (const src of sources) {
  const input = path.join('public', src);
  const out = path.join(outRoot, src.replace(/\.[^.]+$/, '.webp'));
  const fresh = await stat(out).then((o) => stat(input).then((i) => o.mtimeMs >= i.mtimeMs)).catch(() => false);
  if (!fresh) {
    await mkdir(path.dirname(out), { recursive: true });
    await sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  }
  const { width, height } = await sharp(out).metadata();
  manifest[src] = { src: '/' + path.relative('public', out), width, height };
}

await writeFile(path.join(outRoot, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`optimize-images: ${sources.size} images ready`);
