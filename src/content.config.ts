import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Project case studies, ported from the old Jekyll site. `permalink` keeps old URLs working.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string(),
    tagline: z.string(),
    colour: z.string(),
    /** Cover image in src/assets/work/; shared with the Work islet preview so it can morph between pages. */
    cover: z.string().optional(),
    role: z.string().optional(),
    stack: z.string().optional(),
    when: z.string().optional(),
    problem: z.string().optional(),
    process: z.string().optional(),
    outcome: z.string().optional(),
  }),
});

export const collections = { pages };
