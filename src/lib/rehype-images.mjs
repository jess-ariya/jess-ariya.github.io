// Case-study markup polish: serve the optimized copy of each image (see scripts/optimize-images.mjs)
// with intrinsic size, and lazy-load images and embedded iframes.
import { readFileSync } from 'node:fs';

function loadManifest() {
  try {
    return JSON.parse(readFileSync('public/_opt/manifest.json', 'utf8'));
  } catch {
    return {};
  }
}

export default function rehypeImages() {
  return (tree) => {
    const manifest = loadManifest();
    const walk = (node) => {
      if (node.type === 'element') {
        const p = node.properties ?? {};
        if (node.tagName === 'img') {
          const hit = manifest[p.src];
          if (hit) Object.assign(p, { src: hit.src, width: hit.width, height: hit.height });
          p.loading ??= 'lazy';
          p.decoding ??= 'async';
        }
        if (node.tagName === 'video' && manifest[p.poster]) p.poster = manifest[p.poster].src;
        if (node.tagName === 'iframe') p.loading ??= 'lazy';
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
