import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export type PostEn = CollectionEntry<'posts-en'>;
export type PostPt = CollectionEntry<'posts-pt'>;
export type AnyPost = PostEn | PostPt;

// ============================================================
// AGENDAMENTO DE POSTS
//
// Um post só aparece no site quando as DUAS condições valem:
//   1. draft: false            (não é rascunho)
//   2. publishDate <= agora    (a data já chegou)
//
// Post com publishDate no futuro fica invisível: não aparece na
// home, não aparece nas listagens, não gera a página /blog/slug
// e não entra no RSS nem no sitemap.
//
// Quem faz o post entrar no ar na data marcada é o rebuild
// automático (.github/workflows/scheduled-publish.yml).
//
// Em `npm run dev` (local) os posts agendados APARECEM, para você
// conseguir revisar antes. No site publicado, não.
// ============================================================

const SHOW_SCHEDULED_POSTS = import.meta.env.DEV;

export function isPublished(data: { draft: boolean; publishDate: Date }): boolean {
  if (data.draft) return false;
  if (SHOW_SCHEDULED_POSTS) return true;
  // Comparação em milissegundos (UTC). Funciona mesmo com o build
  // do Cloudflare rodando em UTC e a publishDate escrita em -03:00.
  return data.publishDate.valueOf() <= Date.now();
}

export async function getPostsByLocale(locale: Locale): Promise<AnyPost[]> {
  const collection = locale === 'en' ? 'posts-en' : 'posts-pt';
  const posts = await getCollection(collection, ({ data }) => isPublished(data));
  return posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function getPostsByCategory(locale: Locale, category: string): Promise<AnyPost[]> {
  const all = await getPostsByLocale(locale);
  return all.filter((p) => p.data.category === category);
}

export async function getPostsByTag(locale: Locale, tag: string): Promise<AnyPost[]> {
  const all = await getPostsByLocale(locale);
  return all.filter((p) => p.data.tags.includes(tag));
}

export function getRelatedPosts(current: AnyPost, all: AnyPost[], limit = 2): AnyPost[] {
  // mesmos tags primeiro, depois mesma categoria
  const others = all.filter((p) => p.slug !== current.slug);
  const sameTagPosts = others.filter((p) =>
    p.data.tags.some((t) => current.data.tags.includes(t))
  );
  const sameCategory = others.filter((p) => p.data.category === current.data.category);

  const seen = new Set<string>();
  const ordered: AnyPost[] = [];
  for (const p of [...sameTagPosts, ...sameCategory]) {
    if (!seen.has(p.slug)) {
      seen.add(p.slug);
      ordered.push(p);
      if (ordered.length >= limit) break;
    }
  }
  return ordered;
}

export function buildSearchString(post: AnyPost): string {
  return [
    post.data.title,
    post.data.subtitle ?? '',
    post.data.description,
    post.data.category,
    ...post.data.tags,
  ].join(' ');
}
