# Após a Queda

Blog estático em Astro para ensaios teológicos, antropológicos e filosóficos sobre pecado original, autoridade, abuso espiritual, consciência e relações humanas após a Queda.

## Stack

- Astro
- TypeScript
- Conteúdo em Markdown
- RSS e sitemap
- Deploy recomendado: Cloudflare Pages

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Workers (Static Assets)

Configuração sugerida no fluxo "Connect git repo or use template":

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config wrangler.jsonc`
- Root directory: vazio
- Node.js version: atual LTS
- Domínio customizado: `aposaqueda.com.br`

O arquivo `wrangler.jsonc` na raiz aponta o diretório de assets para `./dist`.

## Conteúdo

Ensaios ficam em `src/content/essays`. Cada arquivo Markdown deve incluir:

```yaml
---
title: "Título"
description: "Descrição curta"
pubDate: 2026-05-26
categories:
  - Autoridade
readingTime: "8 min"
draft: false
---
```
