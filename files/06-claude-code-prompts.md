# 06 — Claude Code Prompts

These are the prompts to feed Claude Code, in order. Each prompt is self-contained — Claude Code does not need to read between the lines. Copy-paste each block as a separate Claude Code session or message.

---

## Prompt 1 — Project scaffold

```
I am building a marketing website for SAHS Foundation, a non-profit. Set up a fresh project with:

- Vite + React + TypeScript
- Tailwind CSS
- React Router DOM v6 for client-side routing
- lucide-react for icons

Initialise the project at the current directory. Create the folder structure:

src/
├── components/
│   ├── layout/
│   ├── ui/
│   ├── sections/
│   └── forms/
├── pages/
├── lib/
└── styles/

Set up a basic App.tsx with React Router and 5 placeholder routes:
- / (Home)
- /about
- /initiatives
- /impact
- /get-involved

Each placeholder page should just render the page name as an h1 for now.

Add Inter and Cormorant Garamond from Google Fonts via index.html.

Configure tailwind.config.js with the following extended theme — copy this verbatim:

[paste the full tailwind.config.js from docs/04-design-system.md here]

Verify the project runs with `npm run dev` and report back when ready.
```

---

## Prompt 2 — Layout, Header, Footer

```
Read docs/02-sitemap.md and docs/04-design-system.md.

Build:

1. src/components/layout/Layout.tsx — wraps every page with Header + Footer + main content area
2. src/components/layout/Header.tsx — sticky nav, white bg, logo left, nav centre, "Donate" CTA right (links to /get-involved#donate). Mobile hamburger menu.
3. src/components/layout/Footer.tsx — navy-900 bg, 3-column grid (Brand / Connect / Follow) + bottom strip with registration info and tagline.

The logo is a text wordmark for now: "sahs" in teal-600 (font-medium, 22px) + "FOUNDATION" in coral-600 (font-medium, 10px, tracked, uppercase) — set side by side.

Wire all 5 routes through the Layout in App.tsx.

Make Header collapse to a hamburger on mobile (use lucide-react's Menu and X icons).
```

---

## Prompt 3 — Reusable UI components

```
Read docs/04-design-system.md.

Build these reusable UI components in src/components/ui/:

1. Button.tsx — variants: primary (coral filled), secondary (teal filled), ghost (outlined dark), heroGhost (white outlined for use on dark bg). Accepts `children`, `onClick`, `href` (renders as `<a>` if provided), `className`.

2. Eyebrow.tsx — coral dash + uppercase tracked label. Accepts `children` and optional `color` prop ("coral" default, "teal", "white").

3. Container.tsx — max-w-container (1200px) + responsive horizontal padding wrapper.

4. SectionHeading.tsx — accepts `eyebrow`, `heading` (serif), and optional `subheading`. Renders the eyebrow + heading + optional subheading stack consistently.

5. TrustBadge.tsx — the registration badge pill. Accepts `dark` boolean prop (white-on-dark variant for hero).

6. PillarCard.tsx — the coloured pillar card. Accepts:
   - `pillar` (one of: women, medical, disability, care, water, animal, environment, elder)
   - `title`
   - `description`
   - `icon` (Lucide icon component)
   - `href` (optional, for the click target)
   
   Internally maps `pillar` to the correct bg + border + icon-circle colour from the design system.

All components should be fully typed with TypeScript interfaces.
```

---

## Prompt 4 — Home page

```
Read docs/03-content.md and docs/05-page-specs.md (Home section).

Build src/pages/Home.tsx with these sections in order. Use the reusable components from src/components/ui/. For sections that don't have a reusable component yet, build them inline as section components in src/components/sections/.

1. Hero — teal-700 bg, decorative coral circle top-right, trust badge + eyebrow + serif headline + italic sub + 2 CTAs. NO STATS STRIP at the bottom.

2. WhoWeAre — cream-50 bg, eyebrow + body paragraph + white info card with teal left-border showing Office / Reach / Reg.

3. PillarsHeader — navy-900 bg, centered serif heading "Our pillars of change" + sub.

4. PillarsGrid — white bg, 4-col grid of 8 PillarCard components, no gap between cards. Use these icons from lucide-react:
   - Women Empowerment: User
   - Medical Assistance: Plus
   - Disability Support: Accessibility
   - Care Institutions: Home
   - Water & Sanitation: Droplet
   - Animal Welfare: PawPrint
   - Environmental Care: TreePine
   - Elder Care: Heart

5. Approach — cream-50 bg, eyebrow + serif heading + 4 numbered steps in a row.

6. TrustStrip — teal-700 bg, 4-col grid: 100% / Pan India / Intl. / Zero with captions.

7. GuidingPrinciple — cream-50 bg, centered, decorative diamond + serif heading + italic quote + 3 final CTAs (Donate / Partner / Volunteer).

Use copy verbatim from docs/03-content.md.
Make every section fully responsive.
```

---

## Prompt 5 — Initiatives page

```
Read docs/03-content.md (Our Initiatives) and docs/05-page-specs.md (Initiatives section).

Build src/pages/Initiatives.tsx with:

1. Hero — teal-700 bg, smaller version, "Eight pillars. One purpose."

2. StickyPillarNav — sticky horizontal nav under the hero with 8 pillar names. Active link gets a coral underline. Smooth-scrolls to each pillar's anchor.

3. Eight pillar sections, each with id matching the anchor in docs/02-sitemap.md (e.g., #women-empowerment). Sections alternate between white and cream-50 backgrounds. Each section has:
   - Pillar-coloured icon circle (60px)
   - Eyebrow with the pillar name
   - Serif heading (the pillar title)
   - Body paragraph
   - Two-column grid: "What we do" and "Who we serve" with bullet lists

4. Final CTA section — cream-50 bg, "Want to support a specific initiative?" + "Get in touch" CTA.

Use copy verbatim from docs/03-content.md.
```

---

## Prompt 6 — About, Impact, Get Involved

```
Read docs/03-content.md and docs/05-page-specs.md.

Build the remaining pages:

1. src/pages/About.tsx — follow the spec for About Us. Use a placeholder image from Unsplash for the Who-We-Are two-column section. Leave [TBD] sections as visible placeholder cards labelled "Coming soon" so they're clearly identifiable.

2. src/pages/Impact.tsx — follow the spec. Generate 4 placeholder beneficiary stories using Unsplash people photos (use the format `https://source.unsplash.com/featured/?portrait,india&sig=N` where N is 1, 2, 3, 4). Each story: photo, pillar tag, name + location (use placeholder names), 2-paragraph fictional but dignified story, italic pulled-quote.

3. src/pages/GetInvolved.tsx — follow the spec. For v1, all form submits use a mailto: link that opens the user's email client with prefilled subject and body containing the form data. The Donate Now button links to "#" for now (placeholder for payment gateway).

For all three pages, ensure mobile responsiveness and use the same Layout wrapper.
```

---

## Prompt 7 — SEO + polish

```
Add the following:

1. SEO meta tags via react-helmet-async on every page:
   - Page title (e.g., "About Us · SAHS Foundation")
   - Meta description (unique per page, ~150 chars)
   - Open Graph tags (og:title, og:description, og:image, og:url)
   - Twitter card tags

2. public/sitemap.xml — list all 5 routes with priority and changefreq.

3. public/robots.txt — allow all, link to sitemap.

4. public/favicon.ico (placeholder, can be replaced later).

5. Add a skip-to-content link at the top of Layout for accessibility.

6. Verify all images have meaningful alt text.

7. Verify all interactive elements have visible focus rings: focus:ring-2 focus:ring-coral-600 focus:ring-offset-2.

8. Run `npm run build` and report any errors. Fix any TypeScript or build issues.
```

---

## Prompt 8 — Lovable preparation

```
Prepare the project for import into Lovable:

1. Verify the project structure matches Lovable's expected layout (Vite + React + TS is supported natively).

2. Ensure all dependencies are listed in package.json.

3. Add a comprehensive .gitignore (node_modules, dist, .env, .DS_Store).

4. Initialise a git repo with a clean commit history:
   git init
   git add .
   git commit -m "feat: initial SAHS Foundation website scaffold"

5. Create a README.md at the project root summarising:
   - Project name + description
   - Tech stack
   - How to run locally (npm install / npm run dev)
   - Folder structure overview

Report when done — I will then push to GitHub and connect to Lovable.
```

---

## Tips for Claude Code sessions

- Run prompts in order — each builds on the previous.
- Keep one prompt = one focused task. Don't combine unrelated work.
- After each prompt, run `npm run dev` and visually verify before moving on.
- If a build error appears, share the full error with Claude Code in the next message — don't paraphrase.
- The reference brochure PDF should sit in `docs/brand/SAHS_Foundation_Brochure.pdf` so Claude Code can re-check visual cues.
