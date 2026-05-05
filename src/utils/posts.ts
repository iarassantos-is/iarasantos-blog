import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export type PostEn = CollectionEntry<'posts-en'>;
export type PostPt = CollectionEntry<'posts-pt'>;
export type AnyPost = PostEn | PostPt;

export async function getPostsByLocale(locale: Locale): Promise<AnyPost[]> {
  const collection = locale === 'en' ? 'posts-en' : 'posts-pt';
  const posts = await getCollection(collection, ({ data }) => !data.draft);
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
