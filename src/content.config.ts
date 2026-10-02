import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Long-form project pages, ported from the old Jekyll site. `permalink` keeps old URLs working.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
  }),
});

export const collections = { pages };
