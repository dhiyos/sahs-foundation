# SAHS Foundation Website

Marketing website for **SAHS Foundation** — the humanitarian arm of the SAHS Group of Companies.

## Project at a glance

- **Type:** Static marketing site (5 pages)
- **Stack:** React + Vite + TypeScript + Tailwind CSS
- **Hosting:** Lovable → GitHub → Vercel/Netlify (or Lovable's built-in publish)
- **Build approach:** Scaffold in Claude Code, then push to Lovable's GitHub repo for visual editing & deploy
- **Reference brochure:** `/docs/brand/SAHS_Foundation_Brochure.pdf`

## Repo layout

```
sahs-foundation/
├── README.md                      # this file
├── docs/
│   ├── 01-brief.md                # what we're building & why
│   ├── 02-sitemap.md              # pages & navigation
│   ├── 03-content.md              # finalised copy for every page
│   ├── 04-design-system.md        # colours, typography, components
│   ├── 05-page-specs.md           # section-by-section build spec for each page
│   ├── 06-claude-code-prompts.md  # prompts to feed Claude Code
│   └── 07-deploy.md               # GitHub + Lovable + publish workflow
├── public/
│   └── (logos, favicon, images)
└── src/
    ├── components/
    ├── pages/
    └── ...
```

## Build order

1. Read `docs/01-brief.md` for context
2. Read `docs/04-design-system.md` to set up Tailwind tokens
3. Use `docs/06-claude-code-prompts.md` to scaffold the project
4. Iterate page-by-page using `docs/05-page-specs.md`
5. Push to GitHub, connect to Lovable, publish via `docs/07-deploy.md`

## Brand at a glance

- **Primary teal:** `#0F6E56`
- **Accent coral:** `#D85A30`
- **Deep navy:** `#1A2D3D`
- **Cream:** `#FAF7F0`
- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans)

## Deliverables

- 5 pages: Home, About, Initiatives, Impact & Stories, Get Involved
- Fully responsive (mobile-first)
- SEO-ready (metadata, sitemap.xml, robots.txt)
- < 2s load time on 4G
- WCAG AA accessibility baseline
