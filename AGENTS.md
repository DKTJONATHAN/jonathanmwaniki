# Design and implementation guidance

Before creating or changing a user-facing interface, follow these references:

- Anthropic frontend-design skill: https://github.com/anthropics/skills/tree/main/skills/frontend-design
- Vercel Web Interface Guidelines: https://vercel.com/design/guidelines
- shadcn/ui: https://ui.shadcn.com/
- Radix UI: https://www.radix-ui.com/
- Lucide: https://lucide.dev/

## Mandatory process

1. Identify the specific audience, subject and single job of the page.
2. Write a short visual plan before coding: palette, type roles, layout grid, content hierarchy and one justified signature detail.
3. Compare the plan with generic AI website patterns and revise anything that looks like a reusable template.
4. Use existing, accessible components for standard interaction patterns. Do not invent custom dialogs, menus, focus handling or keyboard behavior.
5. Build with real content and verified project assets. Never invent metrics, testimonials, customers, awards or outcomes.
6. Review the result at mobile, tablet, laptop and wide desktop sizes.
7. Check keyboard operation, focus visibility, contrast, semantic HTML, labels, reduced motion and error/empty states.
8. Use deliberate motion only. Prefer CSS transitions for simple changes; never use `transition: all`.
9. Run lint and production build, inspect browser console/network errors, and review screenshots before release.
10. Preserve unrelated pages, routes, data and integrations.

## Anti-template rules

Avoid default combinations such as:
- cream background + display serif + terracotta accent unless the brief specifically calls for it;
- near-black background + acid green accent;
- repeated identical rounded cards;
- gradient blobs, glass panels and generic floating dashboard mockups;
- oversized all-caps eyebrows and decorative numbering that conveys no real sequence;
- the same soft shadow and radius on every component;
- excessive scroll-triggered fade/slide animations;
- emoji used as product icons;
- fake counters, placeholder testimonials and vague marketing copy.

The subject's real content should create the design. Spend visual boldness in one memorable place and keep the rest disciplined.

## Release gate

Never mark a quality item complete without evidence. Never deploy or merge a redesign just because the build passes.
