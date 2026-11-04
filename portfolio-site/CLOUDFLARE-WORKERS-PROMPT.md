# Cloudflare Workers build prompt — Jonathan Mwaniki portfolio

Build and deploy the portfolio in this repository's isolated `portfolio-site/` directory as a Cloudflare Workers website. Do not replace or alter the existing news homepage, publishing routes, admin panel, APIs, sitemap, robots.txt, service worker, or editorial automation.

## Product and design
Use the supplied `index.html`, `style.css`, and `main.js` as the starting point. Preserve its editorial art direction: warm paper, ink, restrained rust accent, oversized Manrope display type, DM Mono metadata, asymmetric project layouts and typographic contrast. No gradients, generic card grids, glassmorphism, floating blobs, fake metrics, invented testimonials, fake client logos or AI-generated claims. Use actual repository screenshots/assets only after checking them; do not invent project outcomes. Ensure links, contact details and project statuses are factual. Review every project URL and mark unavailable features honestly.

## Cloudflare architecture
- Cloudflare Workers with Static Assets serving `./public` (or the chosen build output) and a Worker entrypoint for any future API.
- Include `wrangler.jsonc` with a unique Worker name, compatibility date current at implementation, `assets.directory`, `assets.binding`, and SPA fallback only if appropriate. Prefer direct static route delivery; don't route news URLs into the portfolio.
- Use R2 only for portfolio-owned image assets if needed. Binding name `PORTFOLIO_MEDIA`; bucket name supplied by owner. Never expose R2 credentials or allow public arbitrary uploads. Prefer build-time optimized static assets for the initial portfolio.
- Add `/health` JSON endpoint, secure headers, correct MIME types, cache immutable assets, no cache for HTML if content must update quickly.
- Add exact Cloudflare dashboard setup and `wrangler secret` instructions; no secrets in git.

## Quality and delivery
Run production build, type/lint checks if a framework is introduced, link checks, mobile/desktop browser review, keyboard-only review, contrast review, reduced-motion review and Lighthouse performance/accessibility/SEO checks. Test 320px, 375px, 768px, 1024px and 1440px. No horizontal overflow, broken images, dead buttons or console errors. Add a checklist with evidence and leave boxes unchecked when not tested. Do not deploy, merge or change DNS without owner approval. Provide exact Worker deployment steps and a rollback plan.