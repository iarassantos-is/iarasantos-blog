import type { Locale } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return first === 'pt' ? 'pt' : 'en';
}

export function localizePath(path: string, locale: Locale): string {
  // path sempre começa com '/'
  if (locale === 'en') return path;
  if (path === '/') return '/pt';
  return `/pt${path}`;
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
