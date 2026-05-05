# IARA SANTOS — Blog

> Interiors and light, considered.

A personal practice journal on interior design, lighting, and project management.
Built with [Astro](https://astro.build), edited via [Decap CMS](https://decapcms.org), hosted on [Cloudflare Pages](https://pages.cloudflare.com).

## 🚀 Como começar

**Primeira vez configurando o site?** Abra o arquivo [`SETUP.md`](./SETUP.md) — ele te leva do zero ao site no ar em iarasantos.com com explicações para não-técnicos.

## Comandos locais

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências (rodar uma vez) |
| `npm run dev` | Roda o site localmente em `localhost:4321` |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Visualiza a versão de produção localmente |

## Como publicar um post

Abra `https://iarasantos.com/admin`, escreva, clique Publish. O site se atualiza sozinho em ~2 minutos.

Detalhes completos no [SETUP.md](./SETUP.md).

## Estrutura

```
src/
  pages/      ← rotas
  content/    ← posts (markdown)
  layouts/    ← Base e Post
  components/ ← Header, Footer, PostCard, Search, Newsletter
  styles/     ← global.css com tokens visuais
  i18n/       ← traduções de UI EN/PT
public/
  admin/      ← painel Decap CMS
```

## Stack

- Astro 4.16 (SSG)
- Decap CMS 3.x (editor visual)
- GitHub (controle de versão)
- Cloudflare Pages (hosting + CDN)
- Buttondown (newsletter)
- Formspree (formulário de contato)

— Iara
