// =============================================================
// IARA SANTOS — UI strings translation
// Strings que aparecem na navegação, footer, listas, etc.
// O conteúdo dos posts vem do CMS (não está aqui).
// =============================================================

export type Locale = 'en' | 'pt';

export const ui = {
  en: {
    // navigation
    'nav.blog':       'Blog',
    'nav.portfolios': 'Portfolios',
    'nav.about':      'About',
    'nav.curated':    'Curated',
    'nav.contact':    'Contact',
    'nav.toggle':     'PT',
    'nav.toggleAria': 'Switch to Portuguese',

    // home
    'home.tagline':  'Interiors and light, considered.',
    'home.latest':   'Latest writing',
    'home.allPosts': 'All writing',
    'home.viewAll':  'View all writing',

    // post / listing
    'post.minRead':   'min read',
    'post.related':   'Related writing',
    'post.share':     'Share',
    'post.byline':    'By Iara Santos',
    'post.tags':      'Tags',
    'post.category':  'Category',
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
    'about.issaTeaser': 'Discover my project management app',
    'about.issaCta':    'See ISSA Project →',

    // contact
    'contact.title':     'Get in touch',
    'contact.intro':     'For new opportunities, project conversations, or correspondence.',
    'contact.email':     'Email',
    'contact.whatsapp':  'WhatsApp',
    'contact.linkedin':  'LinkedIn',
    'contact.location':  'Location',

    // search
    'search.placeholder': 'Search by topic, project, material…',
    'search.empty':       'No writing matches that search yet.',

    // footer
    'footer.copy':    '© 2026 Iara Santos. All rights reserved.',
    'footer.tagline': 'Interiors and light, considered.',
    'footer.based':   'Based in Belo Horizonte, Brazil — open to remote and relocation. Available across US time zones.',
  },

  pt: {
    'nav.blog':       'Blog',
    'nav.portfolios': 'Portfólio',
    'nav.about':      'Sobre',
    'nav.curated':    'Curadoria',
    'nav.contact':    'Contato',
    'nav.toggle':     'EN',
    'nav.toggleAria': 'Trocar para inglês',

    'home.tagline':  'Interiores e luz, com intenção.',
    'home.latest':   'Publicações recentes',
    'home.allPosts': 'Todas as publicações',
    'home.viewAll':  'Ver todas',

    'post.minRead':   'min de leitura',
    'post.related':   'Leituras relacionadas',
    'post.share':     'Compartilhar',
    'post.byline':    'Por Iara Santos',
    'post.tags':      'Tags',
    'post.category':  'Categoria',
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
    'about.issaTeaser': 'Conheça meu aplicativo de gestão de projetos',
    'about.issaCta':    'Ver ISSA Project →',

    'contact.title':     'Entre em contato',
    'contact.intro':     'Para novas oportunidades, conversas sobre projetos ou correspondência.',
    'contact.email':     'E-mail',
    'contact.whatsapp':  'WhatsApp',
    'contact.linkedin':  'LinkedIn',
    'contact.location':  'Localização',

    'search.placeholder': 'Buscar por tema, projeto, material…',
    'search.empty':       'Nenhuma publicação encontrada.',

    'footer.copy':    '© 2026 Iara Santos. Todos os direitos reservados.',
    'footer.tagline': 'Interiores e luz, com intenção.',
    'footer.based':   'Baseada em Belo Horizonte, Brasil — aberta a oportunidades remotas e relocation. Disponível em fusos horários dos EUA.',
  },
} as const;

export type UIKey = keyof typeof ui.en;

export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key];
}

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'pt' : 'en');

export const localePathPrefix = (locale: Locale): string => (locale === 'en' ? '' : '/pt');
