# Aquarela 60+ — Site do Programa de Extensão Universitária

Site institucional do Programa Aquarela 60+, uma iniciativa do Núcleo de Arte e Cultura (NAC) da Universidade Metodista de São Paulo que promove arte, educação e cultura para pessoas 60+.

**Produção:** https://aquarela60.com

## Stack

| Camada | Tecnologia |
|---|---|
| App | Next.js 15 (standalone, React 19) |
| CSS | Tailwind CSS v4 (`@theme` com paleta customizada) |
| Fontes | Playfair Display + DM Sans (via `next/font/google`) |
| Proxy | nginx (gzip, cache de assets, security headers) |
| Tunnel | Cloudflare Tunnel (compartilhado no host) |
| CI/CD | GitHub Actions (self-hosted runner no T110 II) |
| Runtime | Docker + Compose |
| Node | 20 (`.nvmrc`) |

## Fluxo de rede

```
Internet → Cloudflare → Tunnel (cloudflared no host) → localhost:3003 → nginx:80 → app:3003
```

O nginx expõe a porta `3003` no host. O Cloudflare Tunnel roda no host (compartilhado entre projetos, cada site numa porta diferente) e roteia `aquarela60.com → http://localhost:3003`.

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Home — hero, stats, sobre, oficinas, depoimentos, contato |
| `/sobre` | História, missão/visão/valores, linha do tempo, equipe |
| `/oficinas` | Categorias de oficinas, grade completa com horários |
| `/noticias` | Blog com posts (placeholder, preparado para MDX) |
| `/noticias/[slug]` | Post individual (placeholder para MDX) |
| `/contato` | Contato, mapa, formulário com redirect para WhatsApp |
| `/api/health` | Health check para CI/CD |

## Recursos implementados

- **SEO:** sitemap.xml, robots.txt, favicon SVG, Open Graph tags, meta tags por página
- **Acessibilidade (público 60+):** font-size 18px base, contraste WCAG AA, touch targets 44px, focus-visible, aria-labels, labels nos inputs
- **Formulário de contato:** client component que monta mensagem e redireciona para WhatsApp do NAC
- **WhatsApp flutuante:** botão fixo no canto inferior direito
- **Design system:** paleta Aquarela (laranja, amarelo, verde, creme, marrom) via `@theme` do Tailwind v4
- **Imagens:** `next/image` com `remotePatterns` para Unsplash

## Primeiros passos

### Desenvolvimento local

```bash
nvm use            # Node 20 (definido no .nvmrc)
npm install
npm run dev        # http://localhost:3000
```

### Build de produção

```bash
npm run build
node .next/standalone/server.js   # http://localhost:3000
```

### Docker

```bash
docker compose up -d --build      # http://localhost:3003
docker compose logs -f            # ver logs
docker compose down               # parar
```

## Estrutura do projeto

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline CI/CD (self-hosted runner)
├── nginx/
│   └── nginx.conf                  # Proxy reverso, gzip, cache, security headers
├── src/
│   ├── app/
│   │   ├── api/health/route.ts     # Health check
│   │   ├── contato/page.tsx        # Página de contato
│   │   ├── noticias/page.tsx       # Lista de notícias
│   │   ├── noticias/[slug]/page.tsx# Post individual
│   │   ├── oficinas/page.tsx       # Grade de oficinas
│   │   ├── sobre/page.tsx          # Sobre o programa
│   │   ├── page.tsx                # Home
│   │   ├── layout.tsx              # Layout raiz (fonts, header, footer)
│   │   ├── globals.css             # Tailwind v4 @theme + estilos base
│   │   ├── icon.svg                # Favicon
│   │   ├── sitemap.ts              # Sitemap XML automático
│   │   └── robots.ts               # Robots.txt
│   ├── components/
│   │   ├── Header.tsx              # Navegação (desktop + mobile)
│   │   ├── Footer.tsx              # Rodapé
│   │   ├── ContactForm.tsx         # Formulário → WhatsApp
│   │   └── WhatsAppButton.tsx      # Botão flutuante
│   └── lib/
│       └── data.ts                 # Dados do site (NAC, oficinas, stats, etc.)
├── public/                         # Assets estáticos
├── docker-compose.yml              # App + nginx (porta 3003)
├── Dockerfile                      # Multi-stage build (deps → builder → runner)
├── next.config.mjs                 # standalone + remotePatterns
├── postcss.config.mjs              # @tailwindcss/postcss
└── tsconfig.json
```

## Deploy (CI/CD)

A cada push na `main`, o GitHub Actions workflow:

1. Faz checkout do código
2. Cria `.env` de produção
3. Builda a imagem Docker
4. Derruba containers antigos (`docker compose down`)
5. Sobe novos containers (`docker compose up -d`)
6. Aguarda health check (`/api/health`) responder na porta 3003
7. Limpa imagens e build cache antigos (roda sempre, mesmo com falha)

### Pré-requisitos no servidor

- Docker e Docker Compose instalados
- GitHub Actions self-hosted runner configurado e rodando
- Cloudflare Tunnel (`cloudflared`) rodando no host com rota `aquarela60.com → http://localhost:3003`

### Variables/Secrets no repositório GitHub

| Tipo | Nome | Descrição |
|---|---|---|
| Variable | `APP_NAME` | Prefixo dos containers (default: `aquarela60`) |

## Portas

| Serviço | Porta interna | Porta no host |
|---|---|---|
| Next.js (app) | 3003 | — (rede interna Docker) |
| nginx | 80 | 3003 |

## Comandos úteis

```bash
# Desenvolvimento
npm run dev                        # Dev server com hot reload
npm run build                      # Build de produção
npm run lint                       # ESLint

# Docker
docker compose up -d --build       # Build e subir
docker compose logs -f app         # Logs da app
docker compose down                # Parar tudo
docker image prune -f              # Limpar imagens não usadas

# Verificar saúde
curl http://localhost:3003/api/health
```

## Pendências (segundo ciclo)

- [ ] Blog MDX: configurar `@next/mdx`, criar `src/content/` com posts `.mdx`, alimentar `/noticias`
- [ ] Lighthouse: rodar auditoria e otimizar para score 90+ em todas as categorias
- [ ] Equipe: adicionar fotos e informações dos coordenadores/professores (aguardando material do NAC)
- [ ] Depoimentos reais: substituir placeholders (aguardando material do NAC)
