import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Blog posts — one Markdown/MDX file per post in src/content/blog/. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Publications — structured data in src/content/publications/.
 * One .yaml/.json file per entry. A malformed entry (missing title/year,
 * wrong type) fails the build, so bad data never ships.
 */
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml,json}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(['conference', 'journal', 'workshop', 'preprint', 'thesis']).default('conference'),
    url: z.url().optional(), // landing page / publisher
    pdf: z.string().optional(), // path or URL to the PDF
    doi: z.string().optional(),
    code: z.url().optional(),
    abstract: z.string().optional(),
    selected: z.boolean().default(false), // highlight on home/research
  }),
});

export const collections = { blog, publications };
