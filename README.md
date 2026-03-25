# 🚀 Next.js Template — ByteLair

Template de produção para apps Next.js com Docker, nginx e Cloudflare Tunnel.

## Stack

| Camada | Tecnologia |
|---|---|
| App | Next.js 15 (standalone) |
| Proxy | nginx |
| Túnel | Cloudflare Tunnel (cloudflared) |
| CI/CD | GitHub Actions (self-hosted runner) |
| Runtime | Docker + Compose |

## Fluxo de rede

```
Internet → Cloudflare → Tunnel (cloudflared) → nginx:80 → app:3000
```

Nenhuma porta é exposta diretamente ao host. Tudo trafega pela rede interna Docker.

## Primeiros passos

### 1. Clonar e configurar

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
cp .env.example .env
```

Edite o `.env` com suas variáveis.

### 2. Criar o Cloudflare Tunnel

1. Acesse [Cloudflare Zero Trust](https://one.dash.cloudflare.com) → **Networks → Tunnels**
2. Crie um novo tunnel → copie o token
3. Configure a rota pública: `seu-dominio.com` → `http://nginx:80`
4. Cole o token em `CLOUDFLARE_TUNNEL_TOKEN` no `.env`

### 3. Subir localmente

```bash
docker compose up -d
```

### 4. CI/CD com GitHub Actions

**Pré-requisitos no servidor:**
- Docker instalado
- GitHub Actions runner self-hosted configurado e rodando

**Secrets/Variables necessários no repositório:**

| Tipo | Nome | Valor |
|---|---|---|
| Variable | `APP_NAME` | Nome único do app (ex: `meu-app`) |
| Secret | `CLOUDFLARE_TUNNEL_TOKEN` | Token do Cloudflare Tunnel |

A cada push na `main`, o workflow:
1. Builda a imagem Docker
2. Derruba os containers antigos
3. Sobe os novos containers
4. Valida via `/api/health`
5. Limpa imagens antigas

## Estrutura do projeto

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD
├── nginx/
│   └── nginx.conf              # Proxy reverso → app:3000
├── src/
│   └── app/
│       ├── api/
│       │   └── health/
│       │       └── route.ts    # Health check para o CI
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── .env.example
├── docker-compose.yml          # App + nginx + cloudflared
├── Dockerfile                  # Multi-stage build (deps/builder/runner)
└── next.config.mjs             # output: standalone
```

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `APP_NAME` | Prefixo dos containers Docker |
| `CLOUDFLARE_TUNNEL_TOKEN` | Token do tunnel no Cloudflare Zero Trust |

## Comandos úteis

```bash
# Subir em produção
docker compose up -d

# Ver logs
docker compose logs -f

# Rebuild manual
docker compose up -d --build

# Parar tudo
docker compose down
```
