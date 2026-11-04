# Jonathan Mwaniki portfolio — React + Cloudflare Workers

A standalone React 19 + Vite portfolio. It is deliberately isolated from the repository's existing root website and publishing workflows.

## Local development
```bash
npm install
npm run dev
``

## Build and deploy
```bash
npm run build
npx wrangler dev
npx wrangler deploy
``
Wrangler serves Vite's `dist/` output through Cloudflare Workers Static Assets. The Worker exposes `/health`. Deploy this Worker to a dedicated portfolio hostname or explicitly configured route; do not point it at news/article routes or replace the root publishing website unintentionally.

No R2 bucket is required for the initial portfolio. If private portfolio uploads are added later, bind an R2 bucket as `PORTFOLIO_MEDIA` and serve objects through authenticated Worker routes. Never expose R2 credentials in browser code.

Before production: verify project URLs and descriptions, run link and accessibility checks, test 320px–1440px, inspect browser console, and run Lighthouse.