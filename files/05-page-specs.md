# 05 — Page Specs (Build Order)

Build pages in this order. Each section is a numbered step — implement, preview, then move on.

---

## Home (`/`)

### Section 1 — Header / Nav (shared)
- Sticky on scroll
- White bg with `0.5px` bottom border on scroll
- Logo left, nav centre, "Donate" CTA right
- Mobile: hamburger → full-screen overlay

### Section 2 — Hero
- **Bg:** `teal-700` (#0F6E56)
- **Decorative:** large coral circle (220px) top-right, partially clipped; subtle white outlined circle inside it
- **Layout:** Text block max-width 70% on desktop, 100% on mobile
- **Content order:**
  1. Trust badge pill
  2. Eyebrow "A GLOBAL INITIATIVE" in coral-400
  3. Serif headline (white, 56px desktop)
  4. Italic serif sub-headline (white/82, 18px)
  5. Two CTAs side by side
- **Padding:** `py-24 px-8` desktop, `py-16 px-6` mobile
- **No stats strip** — was removed per request

### Section 3 — Who We Are
- **Bg:** `cream-50`
- **Layout:** Single column, max-width 800px, left-aligned
- **Content order:**
  1. Eyebrow "WHO WE ARE" with coral dash
  2. Body paragraph (16px, ink-900, line-height 1.7)
  3. Info bar: white card with 3px teal-700 left border; three info items in a flex row (stacked on mobile)

### Section 4 — Pillars header
- **Bg:** `navy-900`
- **Layout:** Centre-aligned text
- **Content:** Serif "Our pillars of change" (white, 32px) + sub "Eight core missions · Countless lives transformed" (white/60, 11px tracked)
- **Padding:** `py-14`

### Section 5 — Pillars grid (8 cards)
- **Bg:** white
- **Layout:** 4-column grid on desktop (`grid-cols-4`), 2-column on tablet, 1-column on mobile
- **Cards:** No gap between cards (touching grid). Each card has its own coloured top border + bg per the design system spec.
- **Card structure:** Icon circle (40px) → title (font-medium, 16px) → description (14px, ink-600)
- **Hover:** subtle lift, slightly deepened bg
- **Click:** scrolls to anchor on `/initiatives` page

### Section 6 — Approach (How we create impact)
- **Bg:** `cream-50`
- **Eyebrow:** "OUR APPROACH"
- **Heading:** Serif "How we create impact"
- **4 numbered steps in a row** (column on mobile):
  - 26px teal-700 circle with white number
  - Bold step title
  - Description (14px, ink-600)
- **Steps:**
  1. Identify & reach
  2. Assess & plan
  3. Deliver & support
  4. Sustain & scale

### Section 7 — Trust strip
- **Bg:** `teal-700`
- **Layout:** 4-column grid, centred text per cell
- **Content per cell:** Big serif coral-400 number/label + small white/70 caption (uppercase, tracked)
- **Cells:**
  - 100% — TRANSPARENT OPERATIONS
  - Pan India — PROGRAM REACH
  - Intl. — CORPORATE BACKING
  - Zero — PROFIT MOTIVE

### Section 8 — Guiding Principle
- **Bg:** `cream-50`
- **Centred, max-width 700px**
- **Content:**
  - Decorative coral diamond (`❖`)
  - Serif "Our guiding principle" heading
  - Italic serif quote (13–15px, ink-600)
- **3 final CTAs side by side:**
  - Donate Now (coral filled)
  - Partner With Us (teal filled)
  - Volunteer (outlined)

### Section 9 — Footer (shared)
- **Bg:** `navy-900`
- **3-column grid** (stacks on mobile): Brand · Connect · Follow
- **Bottom strip:** registration line + tagline, centred, smaller text

---

## About Us (`/about`)

### Section 1 — Hero
- **Bg:** `cream-50` (lighter than home hero)
- **Eyebrow:** ABOUT US
- **Headline:** Serif "Dignity, by design."
- **Sub:** "Born from corporate success. Built for human impact."
- Smaller hero — `py-20`

### Section 2 — Who We Are (extended)
- Two-column layout on desktop: text left (60%), image right (40%)
- Text uses the extended copy from `03-content.md`

### Section 3 — Vision & Mission
- Two cards side by side (stack on mobile)
- White cards on `cream-50` bg, `border-l-4 border-teal-700`
- Heading + paragraph in each

### Section 4 — Values
- 5-column grid on desktop, 2 on tablet, 1 on mobile
- Each value: small icon + label + 1-line description

### Section 5 — SAHS Group Connection
- **Bg:** `navy-900`
- White text, single column, max-width 800px, centred
- `[TBD]` content

### Section 6 — Leadership
- Grid of trustee/leadership cards: photo, name, role, short bio
- `[TBD]` content — leave 4 placeholder cards

### Section 7 — Compliance
- Simple bulleted list on `cream-50`
- Eyebrow "TRANSPARENCY & COMPLIANCE"

---

## Our Initiatives (`/initiatives`)

### Section 1 — Hero
- **Bg:** `teal-700`
- Same hero pattern as home but smaller (`py-20`)
- "Eight pillars. One purpose."

### Section 2 — Sticky pillar nav
- Below the hero, a horizontal sticky nav with 8 pillar names
- Scrolls smoothly to each anchor
- Active state: coral underline

### Section 3 — Pillar sections (8x)
Each pillar is a full-width section alternating bg colours (`white` and `cream-50`):

```
[ icon circle in pillar colour ]
[ Eyebrow: pillar name ]
[ Serif heading: pillar name ]
[ Body paragraph ]
[ Two-column grid: "What we do" + "Who we serve" ]
[ Optional: 1-line beneficiary quote ]
```

`py-20` per section. Anchor `id` on the section.

### Section 4 — CTA
- "Want to support a specific initiative? → Get in touch"

---

## Impact & Stories (`/impact`)

### Section 1 — Hero
- Cream bg, smaller hero
- "Real lives. Real change."

### Section 2 — Stories grid
- 2-column grid on desktop, 1 on mobile
- Each story card:
  - Photo (4:3)
  - Pillar tag (small coloured pill)
  - Beneficiary name + location
  - 2-paragraph story
  - Quote pulled out in italic serif

`[TBD]` — placeholder 4 stories with Unsplash images

### Section 3 — Press
- Logo strip of media outlets that have covered the foundation
- `[TBD]` placeholder logos

### Section 4 — Annual Reports
- Card grid with download links
- `[TBD]` placeholder for 2022, 2023, 2024 reports

---

## Get Involved (`/get-involved`)

### Section 1 — Hero
- **Bg:** `teal-700`
- "Three ways to make a difference."

### Section 2 — Three pathways
- 3-column grid (stack on mobile)
- Each card is a coloured block:
  - **Donate** — coral bg, white text, "Support a Cause" CTA
  - **Partner** — teal bg, white text, "Discuss Partnership" CTA
  - **Volunteer** — navy bg, white text, "Join Us" CTA
- Each card scrolls to its respective form below

### Section 3 — Donate (#donate)
- Cream bg
- Body copy + 4 donation tier cards (3 fixed amounts + custom)
- Big "Donate Now" CTA → external payment gateway link `[TBD]`
- Note about 100% of donations going to programs

### Section 4 — Partner (#partner)
- White bg
- Body copy + partnership form (Name, Org, Email, Phone, Initiative interest, Message)
- Submit handler `[TBD]` — for v1, mailto: link to `info@sahsfoundation.org`

### Section 5 — Volunteer (#volunteer)
- Cream bg
- Body copy + volunteer form (Name, Email, Phone, Initiative interest, Availability, Message)
- Same submit treatment

### Section 6 — Contact (#contact)
- **Bg:** `navy-900`
- 2-column: contact details left, embedded map right
- Map: Google Maps embed of SAHS Tower, Sector 49, Noida

---

## Components to extract (build once, reuse)

```
src/components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── ui/
│   ├── Button.tsx
│   ├── Eyebrow.tsx
│   ├── PillarCard.tsx
│   ├── TrustBadge.tsx
│   ├── SectionHeading.tsx
│   └── Container.tsx
├── sections/
│   ├── Hero.tsx
│   ├── PillarsGrid.tsx
│   ├── ApproachSteps.tsx
│   ├── TrustStrip.tsx
│   └── GuidingPrinciple.tsx
└── forms/
    ├── ContactForm.tsx
    ├── PartnerForm.tsx
    └── VolunteerForm.tsx
```

## Build order (recommended)

1. Set up Vite + React + TS + Tailwind project
2. Configure Tailwind tokens from `04-design-system.md`
3. Build `Layout`, `Header`, `Footer`
4. Build reusable `ui/*` components
5. Build Home page section by section
6. Build Initiatives page
7. Build About, Impact, Get Involved
8. Add forms (mailto for v1)
9. SEO meta tags + sitemap.xml + robots.txt
10. Deploy
