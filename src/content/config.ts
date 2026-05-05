import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  category: z.enum([
    'project-showcase',
    'critical-eye',
    'method-notes',
    'material-studies',
    'curated',
  ]),
  publishDate: z.coerce.date(),
  readingTime: z.number().int().positive(),
  tags: z.array(z.string()),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  draft: z.boolean().default(false),
  // slug do post equivalente no outro idioma (para o language toggle no post)
  translationSlug: z.string().optional(),
});

const postsEn = defineCollection({
  type: 'content',
  schema: postSchema,
});

const postsPt = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  'posts-en': postsEn,
  'posts-pt': postsPt,
};
