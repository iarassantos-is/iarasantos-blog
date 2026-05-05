// =============================================================
// IARA SANTOS — UI strings translation
// Strings que aparecem na navegação, footer, listas, etc.
// O conteúdo dos posts vem do CMS (não está aqui).
// =============================================================

export type Locale = 'en' | 'pt';

export const ui = {
  en: {
    // navigation
    'nav.blog':     'Blog',
    'nav.about':    'About',
    'nav.curated':  'Curated',
    'nav.contact':  'Contact',
    'nav.toggle':   'PT',
    'nav.toggleAria': 'Switch to Portuguese',

    // home
    'home.tagline': 'Interiors and light, considered.',
    'home.latest':  'Latest writing',
    'home.allPosts': 'All writing',
    'home.viewAll': 'View all writing',

    // post / listing
    'post.minRead': 'min read',
    'post.related': 'Related writing',
    'post.share':   'Share',
    'post.byline':  'By Iara Santos',
    'post.tags':    'Tags',
    'post.category': 'Category',
    'post.published': 'Published',

    // categories
    'cat.project-showcase':  'Project showcase',
    'cat.critical-eye':      'Critical eye',
    'cat.method-notes':      'Method notes',
    'cat.material-studies':  'Material studies',
    'cat.curated':           'Curated',

    // newsletter
    'newsletter.title':       'A monthly note',
    'newsletter.body':        'Occasional writing on interiors, light, and the practice of building beautiful spaces. Sent only when there is something worth saying.',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.cta':         'Subscribe',
    'newsletter.success':     'You\'re in. Check your inbox to confirm.',
    'newsletter.error':       'Something went wrong. Please try again.',

    // about
    'about.title': 'About',
    'about.cv':    'Download CV',

    // contact
    'contact.title':  'Get in touch',
    'contact.intro':  'For project inquiries, collaborations, or correspondence.',
    'contact.email':  'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.instagram': 'Instagram',

    // search
    'search.placeholder': 'Search by topic, project, material…',
    'search.empty':       'No writing matches that search yet.',

    // footer
    'footer.copy':    '© 2026 Iara Santos. All rights reserved.',
    'footer.tagline': 'Interiors and light, considered.',
    'footer.based':   'Based in São Paulo. Working with clients across the Americas.',
  },

  pt: {
    'nav.blog':     'Blog',
    'nav.about':    'Sobre',
    'nav.curated':  'Curadoria',
    'nav.contact':  'Contato',
    'nav.toggle':   'EN',
    'nav.toggleAria': 'Trocar para inglês',

    'home.tagline': 'Interiores e luz, com intenção.',
    'home.latest':  'Publicações recentes',
    'home.allPosts': 'Todas as publicações',
    'home.viewAll': 'Ver todas',

    'post.minRead': 'min de leitura',
    'post.related': 'Leituras relacionadas',
    'post.share':   'Compartilhar',
    'post.byline':  'Por Iara Santos',
    'post.tags':    'Tags',
    'post.category': 'Categoria',
    'post.published': 'Publicado em',

    'cat.project-showcase':  'Projeto',
    'cat.critical-eye':      'Olhar crítico',
    'cat.method-notes':      'Método',
    'cat.material-studies':  'Estudos de material',
    'cat.curated':           'Curadoria',

    'newsletter.title':       'Uma nota mensal',
    'newsletter.body':        'Textos esporádicos sobre interiores, luz e o ofício de construir espaços bem pensados. Enviado só quando há algo a dizer.',
    'newsletter.placeholder': 'seu@email.com',
    'newsletter.cta':         'Inscrever',
    'newsletter.success':     'Pronto. Confira sua caixa de entrada para confirmar.',
    'newsletter.error':       'Algo deu errado. Tente novamente.',

    'about.title': 'Sobre',
    'about.cv':    'Baixar CV',

    'contact.title':  'Entre em contato',
    'contact.intro':  'Para projetos, colaborações ou correspondência.',
    'contact.email':  'E-mail',
    'contact.linkedin': 'LinkedIn',
    'contact.instagram': 'Instagram',

    'search.placeholder': 'Buscar por tema, projeto, material…',
    'search.empty':       'Nenhuma publicação encontrada.',

    'footer.copy':    '© 2026 Iara Santos. Todos os direitos reservados.',
    'footer.tagline': 'Interiores e luz, com intenção.',
    'footer.based':   'Baseada em São Paulo. Atendo clientes em toda as Américas.',
  },
} as const;

export type UIKey = keyof typeof ui.en;

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'pt' : 'en');

export const localePathPrefix = (locale: Locale): string => (locale === 'en' ? '' : '/pt');
