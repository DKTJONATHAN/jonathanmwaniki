# Cloudflare Worker deployment prompt — jmportfolio

Build and deploy the existing portfolio as a React 19 + Vite application on Cloudflare Workers. The project is already componentised under `portfolio-site/src/components/`. Preserve the editorial visual direction and do not replace it with a generic template.

## Current deployment layout
- Cloudflare Worker name: `jmportfolio`
- Repository root is the Cloudflare build root.
- Root `package.json` runs `npm --prefix portfolio-site install && npm --prefix portfolio-site run build`.
- Vite app: `portfolio-site/`
- Vite output: `portfolio-site/dist/`
- Worker entry: `portfolio-site/worker.js`
- Root Wrangler config: `wrangler.jsonc`
- Static assets binding: `ASSETS`

## Cloudflare build settings
Use build command `npm run build` and deploy command `npx wrangler deploy --config wrangler.jsonc`. Do not select Next.js, do not run `bunx next build`, and do not use `.next` as an output directory. The explicit Wrangler configuration is authoritative.

## Runtime and security
Serve Vite's built assets through the existing Worker and preserve its `/health` endpoint and security headers. Confirm correct SPA fallback, content types, cache headers and CSP for the portfolio's external fonts and project imagery. Do not expose secrets in browser code. No R2 bucket is required for the current static portfolio.

If owner-managed private media uploads are added later, create a private R2 bucket binding such as `PORTFOLIO_MEDIA` and authenticated Worker upload/read routes. Do not use R2 for static build assets and do not expose credentials or raw private object URLs.

## Validation
Run clean install, Vite production build, Wrangler dry-run, preview through Wrangler, route/link checks, keyboard/focus review, mobile widths 320/375/768 and desktop 1024/1440, console check and Lighthouse. Confirm project links and contact email. Never replace the existing news publishing routes or deploy this portfolio to a hostname that serves another product.

Do not change production DNS or deploy without explicit release approval.