# Jonathan Mwaniki — Portfolio Design Brief (2026)

## Scope and safety

- Redesign the existing personal portfolio page only.
- Preserve the news homepage, article routes, publishing scripts, admin tools, SEO files and existing deployments.
- Use an isolated branch until the page is reviewed and tested.
- Reuse verified project assets already in the repository where they are genuinely representative.
- Do not invent clients, testimonials, awards, revenue, user counts, years of experience or performance results.

## Positioning

Present Jonathan as an independent digital product builder in Kenya who takes ideas through product design, frontend implementation, integrations and deployment. Use only skills and responsibilities supported by actual repositories. Avoid claiming seniority, agency scale or client outcomes that have not been verified.

## Visual direction: The Working Folio

A precise, editorial portfolio that feels like a carefully assembled design/engineering folio rather than a SaaS landing-page template.

- Light, neutral canvas with a restrained ink / mineral / signal-blue palette.
- A distinctive display typeface paired with a highly readable body face; no default Poppins + gradient treatment.
- Strong left alignment, intentional whitespace and a clear grid.
- Real project screenshots and artifacts carry the visual weight.
- Work is presented as a varied editorial index, not identical rounded cards.
- One memorable interaction at most; all other motion is quiet and action-led.
- No gradient washes, glassmorphism, floating blobs, fake dashboard mockups, emoji iconography or repeated hover animations.
- No decorative counters or claims without evidence.
- No third-party ad scripts or monetisation blocks on the portfolio.

## Content architecture

1. Hero: one clear statement of the work and audience.
2. Selected work: a small number of strong, real case studies.
3. Case-study detail: problem, intended audience, contribution, real features, stack, constraints and current status.
4. Capabilities: only demonstrated skills.
5. About: concise, factual biography and relevant learning / background.
6. Contact: working email, GitHub, LinkedIn and WhatsApp links.
7. Optional writing / notes section only if it has real articles worth reading.

## Existing material to review

The current `portfolio.html` includes generic service copy, a Poppins + gradient treatment, multiple advertising scripts, old project screenshots, and an unverified “5+ years” experience claim. Remove or verify these before publishing. Keep the news homepage separate.

## Reusable component sources

- shadcn/ui: copy only the components actually needed; maintain local ownership.
- Radix UI or Base UI: accessible interaction primitives.
- Lucide: consistent, labelled icons.
- Motion: only for a deliberate, user-triggered interaction; respect reduced motion.
- Vercel Web Interface Guidelines: interaction, accessibility, layout and performance review.
- Anthropic frontend-design skill: subject-first visual direction, plan/review/build/critique and anti-template checks.

Reference galleries are for research, not templates: A1 Gallery, Awwwards, SiteInspire, Minimal Gallery and One Page Love.

## Quality gate

A box is checked only when there is evidence from the built page or a test. Do not check an item because code was merely written.

| Requirement | Evidence required | Status |
|---|---|---|
| Distinct visual concept | Written design rationale and screenshot review | [ ] |
| Real project content | Every project title, role, link and status checked against its repository | [ ] |
| No invented proof | No fake metrics, testimonials, awards or unverified experience claims | [ ] |
| Original composition | No generic card grid / gradient / glassmorphism template | [ ] |
| Typography | Deliberate type pairing, scale, line length and responsive wrapping | [ ] |
| Responsive layout | Tested at narrow mobile, tablet, laptop and wide desktop | [ ] |
| Accessibility | Keyboard navigation, visible focus, semantic landmarks, labels, contrast | [ ] |
| Motion restraint | Reduced-motion support; no unnecessary autoplay or scroll effects | [ ] |
| Performance | Optimized images, explicit dimensions, lazy loading below the fold | [ ] |
| SEO and sharing | Unique title/description, canonical, Open Graph and social preview | [ ] |
| Working links | All external, email, phone and project links manually checked | [ ] |
| No ads or dead controls | No ad scripts, inert buttons, placeholder forms or broken CTAs | [ ] |
| Build and lint | Production build and lint pass | [ ] |
| Browser review | Desktop and mobile screenshots reviewed; console/network checked | [ ] |
| Safe release | Only portfolio files changed; production homepage and news routes unchanged | [ ] |

## Release rule

Do not merge to `main` or change a live domain until every applicable quality-gate item is checked and the user has reviewed the finished portfolio.
