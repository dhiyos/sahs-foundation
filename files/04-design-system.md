# 04 — Design System

## Colour palette

### Brand colours

| Token | Hex | Usage |
|---|---|---|
| `teal-700` (primary) | `#0F6E56` | Hero bg, primary accents, footer headings |
| `teal-600` | `#1D9E75` | Logo word "sahs", icons, hover states |
| `teal-50` | `#E1F5EE` | Pillar card bg (Medical) |
| `coral-600` (accent) | `#D85A30` | Primary CTAs, eyebrows, accent dividers |
| `coral-400` | `#F0997B` | Hero stat numbers, decorative |
| `coral-50` | `#FAECE7` | Pillar card bg (Elder Care) |
| `navy-900` (deep) | `#1A2D3D` | Section bg (pillars header), footer bg |
| `cream-50` (surface) | `#FAF7F0` | Section bg (Who We Are, Approach, Guiding) |
| `ink-900` | `#2C2C2A` | Body text, headlines |
| `ink-600` | `#5F5E5A` | Secondary text |
| `ink-400` | `#888780` | Tertiary text, muted captions |

### Pillar accent colours

Each of the eight pillars has its own colour-coded card. Use the lightest shade for the card background and the darker shade for the icon circle and top border.

| Pillar | Top border / icon | Card bg |
|---|---|---|
| Women Empowerment | `#D4537E` (pink) | `#FBEAF0` |
| Medical Assistance | `#1D9E75` (teal) | `#E1F5EE` |
| Disability Support | `#7F77DD` (purple) | `#EEEDFE` |
| Care Institutions | `#BA7517` (amber) | `#FAEEDA` |
| Water & Sanitation | `#378ADD` (blue) | `#E6F1FB` |
| Animal Welfare | `#639922` (green) | `#EAF3DE` |
| Environmental Care | `#5F5E5A` (gray) | `#F1EFE8` |
| Elder Care | `#D85A30` (coral) | `#FAECE7` |

## Typography

### Font families

```css
--font-serif: "Cormorant Garamond", "Playfair Display", Georgia, serif;
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Load via Google Fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Type scale

| Element | Font | Size (desktop) | Size (mobile) | Weight | Line-height |
|---|---|---|---|---|---|
| Hero headline | Serif | 56px | 36px | 500 | 1.1 |
| H1 | Serif | 44px | 32px | 500 | 1.15 |
| H2 | Serif | 32px | 26px | 500 | 1.2 |
| H3 | Serif | 24px | 20px | 500 | 1.3 |
| Eyebrow | Sans | 11px | 11px | 500 | 1; letter-spacing 2.5px; uppercase |
| Body lg | Sans | 18px | 16px | 400 | 1.7 |
| Body | Sans | 16px | 15px | 400 | 1.7 |
| Body sm | Sans | 14px | 13px | 400 | 1.6 |
| Caption | Sans | 12px | 12px | 400 | 1.5 |
| Button | Sans | 14px | 14px | 500 | 1; letter-spacing 0.2px |

### Italic serif

Use for poetic / quote moments only — taglines, the Guiding Principle quote, hero sub-headlines.

## Spacing scale

Use Tailwind defaults (4px base): `1` = 4px, `2` = 8px, `4` = 16px, `8` = 32px, `12` = 48px, `16` = 64px, `20` = 80px, `24` = 96px.

**Section padding:**
- Desktop: `py-20` to `py-24` (80–96px)
- Mobile: `py-12` to `py-16` (48–64px)

**Container max-width:** `1200px` (`max-w-6xl` in Tailwind), with `px-6` on mobile and `px-8` on desktop.

## Components

### Buttons

```jsx
// Primary (coral filled)
<button className="bg-coral-600 hover:bg-coral-700 text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition">
  Donate Now
</button>

// Secondary (teal filled)
<button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition">
  Partner With Us
</button>

// Ghost (outlined)
<button className="border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white px-6 py-3 rounded text-sm font-medium tracking-wide transition">
  Volunteer
</button>

// Hero ghost (white outline on dark bg)
<button className="border border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded text-sm font-medium tracking-wide transition">
  Our Initiatives
</button>
```

### Eyebrow label

```jsx
<div className="flex items-center gap-2 mb-3">
  <div className="h-px w-6 bg-coral-600"></div>
  <span className="text-[11px] font-medium text-coral-600 tracking-[0.25em] uppercase">
    Who We Are
  </span>
</div>
```

### Pillar card

```jsx
<div className="bg-pink-50 border-t-4 border-pink-500 p-6">
  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center mb-4">
    <Icon className="w-5 h-5 text-white" />
  </div>
  <h3 className="font-medium text-ink-900 mb-2 text-base">Women Empowerment</h3>
  <p className="text-sm text-ink-600 leading-relaxed">
    Education, skill development, self-employment & marriage assistance.
  </p>
</div>
```

### Trust badge

```jsx
<div className="inline-block bg-white/12 border border-white/25 text-white text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full">
  Registered Non-Profit Trust · UP/2022/0307306
</div>
```

## Tailwind config

Add to `tailwind.config.js`:

```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  "#E1F5EE",
          100: "#9FE1CB",
          600: "#1D9E75",
          700: "#0F6E56",
          800: "#085041",
        },
        coral: {
          50:  "#FAECE7",
          400: "#F0997B",
          600: "#D85A30",
          700: "#993C1D",
        },
        navy: {
          900: "#1A2D3D",
        },
        cream: {
          50: "#FAF7F0",
        },
        ink: {
          400: "#888780",
          600: "#5F5E5A",
          900: "#2C2C2A",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
```

## Imagery guidelines

- **Real beneficiary photography only.** No stock images. (Until original photos exist, use neutral placeholder images from Unsplash with attribution and replace later.)
- **Aspect ratios:** `4:3` for portrait/beneficiary photos, `16:9` for hero/cover photos
- **Treatment:** Slight warm tone; avoid heavy filters
- **People-first:** Faces and hands over abstract scenes
- **Dignified framing:** Beneficiaries should appear empowered, never pitied

## Iconography

Use **lucide-react** for all icons. Stroke width 2, size 16–20px in pillar cards, 14px inline.

## Accessibility

- Minimum body contrast: WCAG AA (4.5:1)
- All interactive elements: visible focus ring (`focus:ring-2 focus:ring-coral-600 focus:ring-offset-2`)
- Skip-to-content link at top
- Alt text on every image
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Form labels always present (no placeholder-as-label)
