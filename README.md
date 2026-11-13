# Crvx et Cithara website

*The Cross and the Lyre.* A static Astro site for the choir. **[PLAN.md](PLAN.md) is the authority** for scope, palette, copy and who updates what.

```sh
npm ci
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | File |
|---|---|
| Choir facts, nav, occasions, engagements, form endpoint | `src/data/site.ts` |
| Colours and fonts (PLAN §5, the only allowed hues) | `src/styles/tokens.css` |
| Shared styles | `src/styles/global.css` |
| Header, footer, `<head>` / Open Graph tags | `src/components/`, `src/layouts/Base.astro` |
| Pages | `src/pages/` |
| Social share image (placeholder) | `public/og-image.png` |

## Placeholders still open (owner, PLAN §9)

Search the code for `TODO(owner` and for `[` brackets in the page text: the crest, the photos, the choir's email, the social links, the engagements, the Our Story facts and the Formspree form id. Placeholders are never filled with invented facts.

## Rules

- Only the colours in `tokens.css`. A new hue needs an owner amendment in PLAN.md §12.
- No cross imagery in the design; the official crest is the only one.
- Free tier only: no database, no CMS.
- Changes go through a branch and a pull request; CI runs `astro build`.
