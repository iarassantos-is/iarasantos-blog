import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostsByLocale } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPostsByLocale('en');

  return rss({
    title: 'IARA SANTOS — Interiors and light, considered.',
    description:
      'Notes from a practice that treats interior design and lighting as one discipline.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}`,
      categories: post.data.tags,
    })),
    customData: `<language>en-US</language>`,
  });
}
