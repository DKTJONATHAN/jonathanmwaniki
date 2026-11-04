# Portfolio website — Cloudflare Workers

This is an isolated portfolio microsite. It does not replace the repository's existing root website or news publishing system.

## Local preview
```bash
cd portfolio-site
npx wrangler dev
```

## Deploy
Create a Cloudflare Worker named `jonathan-mwaniki-portfolio`, connect this repository with the build/deploy directory set to `portfolio-site`, or deploy from this directory with:
```bash
npx wrangler deploy
```
The included Worker serves static assets and `/health`. Attach the intended portfolio hostname to this Worker only after confirming DNS and route ownership. Do not route the root news website to this Worker by mistake.

No R2 bucket is required for the initial static portfolio. If future project imagery needs private storage, create an R2 bucket and bind it as `PORTFOLIO_MEDIA`; serve private files through authenticated Worker endpoints. Never put R2 keys in browser code.

Before launch: run link checks, review the real project URLs, verify contact details, test mobile and keyboard use, inspect console errors and run Lighthouse.