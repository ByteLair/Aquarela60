# Aquarela 60+

Site institucional do Programa Aquarela 60+, iniciativa do Núcleo de Arte e Cultura (NAC) da Universidade Metodista de São Paulo.

**Produção:** https://aquarela60.com

## Stack

**On-Premisse**

| Camada | Tecnologia |
|---|---|
| App | Next.js 15 (standalone, React 19) |
| CSS | Tailwind CSS v4 |
| CI/CD | GitHub Actions (self-hosted runner no C220 M3) |
| Registry | GitHub Container Registry (ghcr.io) |
| Orquestração | Kubernetes v1.32 |
| Ingress | NGINX Ingress Controller + MetalLB |
| Tunnel | Cloudflare Tunnel (bytelair_entrance) |

## Fluxo de deploy

push main → GitHub Actions (C220 runner) → docker build → push ghcr.io → kubectl rollout → Kubernetes RollingUpdate → pod novo sobe → pod antigo desce

## Fluxo de rede

Internet → Cloudflare → bytelair_entrance tunnel → NGINX Ingress (10.10.10.200) → Service → Pod

## Secrets necessários

| Nome | Descrição |
|---|---|
| `KUBECONFIG` | kubeconfig do cluster em base64 | 

