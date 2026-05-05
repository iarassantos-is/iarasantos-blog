import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostsByLocale } from '../../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPostsByLocale('pt');

  return rss({
    title: 'IARA SANTOS — Interiores e luz, com intenção.',
    description:
      'Apontamentos de um ofício que trata interiores e iluminação como uma só disciplina.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/pt/blog/${post.slug}`,
      categories: post.data.tags,
    })),
    customData: `<language>pt-BR</language>`,
  });
}
