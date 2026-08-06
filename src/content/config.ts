import { defineCollection, z } from 'astro:content';

/* Uma imagem do carrossel do fim do post.
   src é obrigatório; alt e caption são opcionais mas recomendados. */
const galleryImage = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

/* Uma linha do bloco de créditos: rótulo + valor, com link opcional. */
const creditItem = z.object({
  label: z.string(),
  value: z.string(),
  url: z.string().optional(),
});

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

  /* ---------- capa de fora a fora ---------- */
  // 'overlay' = título sobre a imagem (padrão)
  // 'below'   = imagem limpa, título abaixo (para renders sem área calma)
  heroStyle: z.enum(['overlay', 'below']).default('overlay'),
  // ponto focal da capa, no formato do CSS object-position: 'center', 'top',
  // '50% 30%', 'right bottom'. Serve para o corte não comer o que importa.
  coverFocus: z.string().default('center'),

  /* ---------- carrossel do fim do post ---------- */
  gallery: z.array(galleryImage).optional(),
  galleryTitle: z.string().optional(),

  /* ---------- ficha de créditos ---------- */
  credits: z.array(creditItem).optional(),
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
