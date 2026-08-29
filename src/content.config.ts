import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    navLabel: z.string(),
    description: z.string(),
    order: z.number(),
    translationStatus: z.enum(['official', 'draft']),
    updatedAt: z.string(),
    showInNav: z.boolean().default(true),
  }),
});

export const collections = { pages };
