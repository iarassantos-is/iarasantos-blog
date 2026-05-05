# IARA SANTOS — Setup & Deploy

Este documento te leva do **zero** até o **site no ar** em `iarasantos.com`. Foi escrito para alguém que nunca fez deploy. Cada passo tem o que clicar e o que esperar.

**Tempo total estimado:** 1h30 (a maior parte é esperando coisa terminar).

> **Importante**: Você só precisa fazer isso uma vez. Depois, publicar um post novo é abrir `iarasantos.com/admin`, escrever, e clicar Publish.

---

## Visão geral do que vamos montar

```
[ Você escreve no /admin ]
           ↓
[ Decap CMS salva no GitHub ]
           ↓
[ Cloudflare Pages detecta a mudança ]
           ↓
[ Roda `npm run build` automaticamente ]
           ↓
[ Site novo no ar em iarasantos.com ]
```

Tudo gratuito, exceto o domínio (que você já comprou).

---

## Parte 1 — Subir o código pro GitHub (≈15 min)

GitHub é onde o código do site vai morar. Pense nele como um Google Drive especializado em código.

### 1.1 Criar conta GitHub
1. Vá em https://github.com/signup
2. Use o e-mail `iarasantos.is@icloud.com` (o mesmo do Cloudflare)
3. Username sugerido: `iarasantos`. Se estiver pego, use `iarasantosdesign` ou `iarasantos-studio`
4. Confirme o e-mail

### 1.2 Instalar GitHub Desktop
Não vamos usar terminal. GitHub Desktop é uma interface visual.

1. Baixe em https://desktop.github.com
2. Instale e abra
3. Faça login com a conta que você acabou de criar

### 1.3 Criar o repositório

1. No GitHub Desktop: **File → New repository**
2. Preencha:
   - **Name:** `iarasantos-blog`
   - **Local path:** escolha onde no seu computador (ex.: `Documentos/`)
   - **Initialize with README:** ✅ marcado
   - **Git ignore:** Node
3. Clique **Create repository**
4. No GitHub Desktop, clique **Publish repository** (botão azul no topo)
5. Na janela: **deixe "Keep this code private" desmarcado** (precisa ser público para o plano gratuito do Decap CMS funcionar)
6. Clique **Publish repository**

✅ Você agora tem um repositório vazio em `https://github.com/SEU-USUARIO/iarasantos-blog`

### 1.4 Copiar os arquivos do site para o repositório

1. Abra o **arquivo zip** que veio junto com este SETUP (`iarasantos-blog.zip`)
2. Extraia o conteúdo
3. Você vai ver uma pasta `iarasantos-blog` com vários arquivos dentro
4. **Copie todo o conteúdo de dentro dessa pasta** (não a pasta em si — só o que está dentro)
5. **Cole** dentro da pasta `iarasantos-blog` que o GitHub Desktop criou (deve sobrescrever o README)

### 1.5 Editar 1 arquivo antes de fazer commit

Abra o arquivo `public/admin/config.yml` em qualquer editor (Bloco de Notas serve).

Encontre essa linha:
```yaml
repo: SEU-USUARIO-GITHUB/iarasantos-blog
```

Troque `SEU-USUARIO-GITHUB` pelo seu username real do GitHub (sem `@`, sem espaços). Salve.

Exemplo: se seu username é `iarasantos`, fica `repo: iarasantos/iarasantos-blog`

### 1.6 Subir os arquivos pro GitHub

1. Volte pro GitHub Desktop
2. Você vai ver uma lista enorme de arquivos novos no painel da esquerda
3. No canto inferior esquerdo:
   - **Summary:** escreva `Initial site setup`
   - Clique **Commit to main**
4. No topo, clique **Push origin**

✅ Tudo no GitHub. Confira em `https://github.com/SEU-USUARIO/iarasantos-blog` — você deve ver as pastas `src/`, `public/`, etc.

---

## Parte 2 — Subir o site no ar (Cloudflare Pages, ≈15 min)

### 2.1 Conectar Cloudflare Pages ao GitHub

1. Faça login em https://dash.cloudflare.com (com a mesma conta `iarasantos.is@icloud.com`)
2. No menu da esquerda: **Workers & Pages**
3. Clique **Create application** → aba **Pages** → **Connect to Git**
4. **Connect GitHub** → autorize o Cloudflare a ver seus repos
5. Selecione `iarasantos-blog`
6. Clique **Begin setup**

### 2.2 Configurar o build

Preencha exatamente assim:

| Campo | Valor |
|---|---|
| **Project name** | `iarasantos-blog` |
| **Production branch** | `main` |
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory (advanced)** | (deixe em branco) |
| **Environment variables** | adicione **uma variável**: `NODE_VERSION` = `20` |

Clique **Save and Deploy**.

Espere ~2 minutos. Quando aparecer **Success!**, clique no link gerado (algo como `iarasantos-blog.pages.dev`). **Você verá seu site funcionando.** 🎉

### 2.3 Conectar o domínio iarasantos.com

1. Ainda no projeto Pages no Cloudflare, vá em **Custom domains**
2. **Set up a custom domain** → digite `iarasantos.com` → **Continue**
3. Como o domínio já está no Cloudflare, ele se conecta automaticamente. Clique **Activate domain**
4. **Repita** para `www.iarasantos.com` (Cloudflare vai criar um redirect automático)

Espere ~5 minutos. Acesse https://iarasantos.com — site no ar com domínio próprio. ✅

---

## Parte 3 — Habilitar o painel /admin (≈20 min)

O painel `/admin` deixa você editar posts visualmente sem mexer em código. Para funcionar, ele precisa de OAuth para autenticar com GitHub. A forma mais fácil é via **Netlify Identity** (gratuito, só usaremos a parte de auth).

### 3.1 Criar conta Netlify

1. Vá em https://app.netlify.com/signup
2. Clique **Sign up with GitHub** (use a mesma conta GitHub que você criou)
3. Autorize

### 3.2 Criar um "site" Netlify só pra OAuth

Calma — não vamos hospedar nada lá. Só usar o serviço de autenticação.

1. No dashboard Netlify: **Add new site** → **Deploy manually**
2. Crie uma pasta vazia chamada `oauth-bridge` no seu computador
3. Crie dentro dela um arquivo chamado `index.html` com o texto: `oauth bridge`
4. Arraste essa pasta pra área indicada no Netlify
5. Quando publicar, anote a URL gerada (algo como `https://random-name-12345.netlify.app`)

### 3.3 Configurar OAuth no GitHub

1. Vá em https://github.com/settings/developers
2. **OAuth Apps → New OAuth App**
3. Preencha:
   - **Application name:** `IARA SANTOS Admin`
   - **Homepage URL:** `https://iarasantos.com`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
4. Clique **Register application**
5. **Copie** o `Client ID`
6. Clique **Generate a new client secret** e **copie** o secret também (só aparece uma vez)

### 3.4 Adicionar as credenciais no Netlify

1. No Netlify, abra seu site `oauth-bridge`
2. **Site configuration → Access & security → OAuth → Install provider**
3. **Provider:** GitHub
4. Cole o **Client ID** e **Client Secret** que você copiou
5. Clique **Install**

### 3.5 Atualizar a URL do OAuth no admin (se necessário)

O `config.yml` já está apontando para `https://api.netlify.com` — não precisa mudar nada se você seguiu o fluxo padrão acima.

### 3.6 Testar

1. Acesse `https://iarasantos.com/admin`
2. Clique **Login with GitHub**
3. Autorize
4. ✅ Você deve ver o painel com as duas coleções: "Writing — English" e "Publicações — Português"

---

## Parte 4 — Newsletter (Buttondown, 5 min)

O footer já tem o formulário da newsletter pronto. Só precisa criar a conta.

1. Vá em https://buttondown.com/register
2. Username: `iarasantos` (mesmo que está em `src/components/Newsletter.astro`)
3. Plano gratuito = até 100 inscritos. Suficiente pra começar.

Se você escolher um username diferente, edite `src/components/Newsletter.astro` e troque a linha:
```astro
const buttondownUsername = 'iarasantos';
```

Faça commit no GitHub Desktop e o site se atualiza sozinho em 2 minutos.

---

## Parte 5 — Formulário de contato (Formspree, 5 min)

A página `/contact` tem um formulário. Para receber as respostas no e-mail:

1. Vá em https://formspree.io e crie conta gratuita (50 envios/mês — mais que suficiente)
2. **New form** → escolha "Contact" → copie o **endpoint** gerado (algo como `https://formspree.io/f/abc123xyz`)
3. Edite os arquivos `src/pages/contact.astro` e `src/pages/pt/contact.astro`
4. Em ambos, troque:
   ```astro
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   pelo endpoint que você copiou
5. Commit + push pelo GitHub Desktop

---

## Como publicar um post novo (fluxo do dia a dia)

Depois de tudo configurado, o fluxo de publicação é:

1. Acesse `https://iarasantos.com/admin`
2. Clique **New Post (EN)** ou **New Post (PT)**
3. Escreva normalmente — campos guiam você (título, categoria, tags, capa, corpo do post)
4. Marque ou desmarque **Draft** para controlar quando publicar
5. Clique **Publish** (ou **Save** para deixar como rascunho)
6. Em ~2 minutos o post está no ar em `iarasantos.com`

**Importante para SEO/i18n:** quando publicar EN + PT da mesma matéria, preencha o campo `translationSlug` em cada um com o slug do outro. Isso permite que o toggle de idioma funcione corretamente entre eles (essa parte ainda é opcional — o toggle global no header funciona sem isso).

---

## Estrutura de pastas (referência)

```
iarasantos-blog/
├── src/
│   ├── pages/              # cada arquivo aqui = uma rota do site
│   │   ├── index.astro     # /
│   │   ├── about.astro     # /about
│   │   ├── contact.astro   # /contact
│   │   ├── curated.astro   # /curated
│   │   ├── 404.astro       # página de erro
│   │   ├── blog/[slug].astro   # gera /blog/qualquer-coisa
│   │   ├── tags/[tag].astro    # gera /tags/qualquer-tag
│   │   ├── rss.xml.ts          # feed RSS
│   │   └── pt/                 # versão PT — espelho da EN
│   ├── content/
│   │   ├── posts-en/       # ← seus posts em inglês ficam aqui
│   │   └── posts-pt/       # ← seus posts em português aqui
│   ├── layouts/            # estrutura visual base + post
│   ├── components/         # Header, Footer, PostCard, Search, Newsletter
│   ├── i18n/               # traduções de UI
│   ├── styles/global.css   # toda a paleta + tipografia
│   └── utils/posts.ts      # helpers para listar posts
├── public/
│   ├── admin/              # painel Decap CMS
│   ├── images/             # imagens dos posts
│   ├── fonts/              # (vazia — usa Google Fonts; pode adicionar depois)
│   └── favicon.svg
├── astro.config.mjs        # config principal do Astro
├── package.json            # lista de dependências
└── SETUP.md                # este arquivo
```

---

## Personalização rápida

### Trocar uma cor da paleta
Abra `src/styles/global.css`. As cores estão no topo, dentro de `:root`. Por exemplo, para mudar o tom do bronze:
```css
--bronze: #8B7355;   /* esse aqui */
```

### Trocar a tagline
Em `src/i18n/ui.ts`, edite as linhas:
```ts
'home.tagline': 'Interiors and light, considered.',
'footer.tagline': 'Interiors and light, considered.',
```

### Adicionar links sociais
Em `src/components/Footer.astro`, troque os `https://www.linkedin.com/` e `https://www.instagram.com/` pelos URLs reais.

### Adicionar fotos auto-hospedadas (em vez de upload pelo CMS)
Coloque arquivos em `public/images/` e referencie no markdown com `/images/nome.jpg`.

---

## Checklist final pós-setup

- [ ] Site abre em `https://iarasantos.com`
- [ ] Toggle EN/PT funciona no header
- [ ] Painel `/admin` abre e faz login com GitHub
- [ ] Formulário de contato envia e-mail (faça um teste)
- [ ] Newsletter signup vai pra sua conta Buttondown
- [ ] Editou um post pelo `/admin` e ele apareceu no site
- [ ] Submeter sitemap ao Google Search Console (https://search.google.com/search-console — adicionar propriedade, enviar `https://iarasantos.com/sitemap-index.xml`)
- [ ] Adicionar Google Analytics (opcional — ver Parte 6 abaixo)

---

## Parte 6 — Google Analytics (opcional, 5 min)

1. Vá em https://analytics.google.com → criar conta → criar propriedade `iarasantos.com`
2. Copie o ID (`G-XXXXXXXXXX`)
3. Edite `src/layouts/BaseLayout.astro` e antes de `</head>` cole:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
   (troque `G-XXXXXXXXXX` pelo seu ID real)
4. Commit + push.

---

## Quando algo der errado

| Sintoma | O que verificar |
|---|---|
| Site não atualiza após commit | **Cloudflare Pages → Deployments**: o deploy pode ter falhado. Veja o log. |
| `/admin` mostra erro de login | A URL OAuth callback do GitHub precisa ser exatamente `https://api.netlify.com/auth/done` |
| Imagens uploadadas pelo CMS não aparecem | Confira se foram pra `public/images/posts/` (verifique pelo GitHub) |
| Build falha com erro de package | Apague `node_modules/` localmente, rode `npm install`, commit |
| Quero rodar localmente para testar | `npm run dev` no terminal — abre em `localhost:4321` |

---

## Custos recorrentes

| Serviço | Custo | Quando aumenta |
|---|---|---|
| Domínio Cloudflare | ~US$ 10/ano | Renovação anual |
| Cloudflare Pages | Gratuito | Acima de 500 builds/mês ou 100k requisições — improvável você atingir |
| GitHub | Gratuito | Repos públicos não têm limite |
| Netlify (só auth) | Gratuito | n/a |
| Buttondown | Gratuito até 100 inscritos | US$ 9/mês acima |
| Formspree | Gratuito até 50 envios/mês | US$ 10/mês acima |
| **Total ano 1** | **~US$ 10** | |

---

## Quando ligar de volta para a próxima fase

Quando este setup estiver no ar (mesmo só com o post de welcome), avisa que eu sigo com:

1. **Escrita do Post 1** (Quiet Luxury, Loud Light) em EN + PT
2. **Geração dos diagramas autorais** (planta, lighting layers, mood board)
3. Preparação do calendário de publicação dos 5 posts iniciais

— Iara, tá no ar.
