# SAHS Foundation

Marketing website for **SAHS Foundation** — the humanitarian arm of the SAHS Group of Companies. The foundation channels a major share of the Group's profits into eight ground-level programmes: women empowerment, medical assistance, disability support, care institutions, water & sanitation, animal welfare, environmental care, and elder care.

This repository contains the public-facing site: brand presentation, programme detail, beneficiary stories (placeholder), and the donate / partner / volunteer pathways.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** with a custom theme (teal / coral / navy / cream / ink palettes; Cormorant Garamond + Inter)
- **React Router DOM v6** for client-side routing
- **react-helmet-async** for per-page SEO (title, description, OG, Twitter)
- **lucide-react** for iconography

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev      # local dev server on http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
npm run lint     # type-check only (no emit)
```

## Folder structure

```
.
├── public/                     # Static assets served as-is
│   ├── favicon.ico             # Placeholder favicon
│   ├── favicon.svg             # Primary SVG favicon
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Layout, Logo
│   │   ├── ui/                 # Button, Eyebrow, Container, SectionHeading,
│   │   │                       # TrustBadge, PillarCard
│   │   ├── sections/           # Page-section building blocks
│   │   │                       # (Hero, WhoWeAre, PillarsGrid, ApproachSteps,
│   │   │                       #  TrustStrip, GuidingPrinciple,
│   │   │                       #  StickyPillarNav, InitiativesPillarSection)
│   │   ├── forms/              # PartnerForm, VolunteerForm, shared fields
│   │   └── Seo.tsx             # Per-page meta via react-helmet-async
│   ├── pages/                  # Home, About, Initiatives, Impact, GetInvolved
│   ├── lib/                    # site config, pillar data, page copy
│   └── styles/                 # Tailwind entry + global CSS
├── files/                      # Source briefs and specs (content, sitemap,
│                               # design system, page specs)
├── Images/                     # Client-supplied imagery (raw, unprocessed)
├── index.html                  # Vite entry — Google Fonts preconnect + meta
├── tailwind.config.js          # Brand tokens, fonts, container width
├── vite.config.ts
└── tsconfig*.json
```

## Routes

| Path             | Page              |
|------------------|-------------------|
| `/`              | Home              |
| `/about`         | About Us          |
| `/initiatives`   | Our Initiatives   |
| `/impact`        | Impact & Stories  |
| `/get-involved`  | Get Involved      |

The Initiatives page exposes one anchor per pillar (e.g. `/initiatives#medical-assistance`); the Get Involved page exposes `#donate`, `#partner`, `#volunteer`, `#contact`.

## Content authoring

All editable copy and structured data lives in `src/lib/`:

- **`site.ts`** — name, tagline, registration number, address, phones, email, social URLs, canonical site URL
- **`pillars.ts`** — the eight pillars (slug, title, summary, full body, what-we-do, who-we-serve, lucide icon, palette key)
- **`content.ts`** — per-page copy for Home, About, Initiatives, Impact, Get Involved

`[TBD]` items (leadership, beneficiary stories, press, annual reports, payment gateway link, SAHS Group connection paragraph) are surfaced as visible "Coming soon" placeholder cards on the live site. Replace the placeholders in `lib/content.ts` and the relevant page components when real content arrives.

## Forms

`PartnerForm` and `VolunteerForm` are mailto-based for v1: on submit they open the user's email client with a pre-filled subject and body addressed to the foundation's contact email. Switch to a server endpoint when one is provisioned.

## Design system

Brand tokens, typography, spacing, and component patterns are documented in `files/04-design-system.md`. The Tailwind theme in `tailwind.config.js` mirrors those tokens.

## Lovable / deployment

The project is a standard Vite + React + TypeScript app and imports cleanly into Lovable. After import, set the canonical site URL in `src/lib/site.ts` (`url`) and provide a real `public/og-default.jpg` for social previews.
