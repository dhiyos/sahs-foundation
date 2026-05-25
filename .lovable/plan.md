## Goal

Swap the hero images for three pillars on the Initiatives page so they visibly depict Indian contexts:

1. Women's Welfare & Livelihoods
2. Disability Support & Inclusion
3. Environmental Care

## Where the change lives

All three images are defined in `src/lib/pillars.ts` as Unsplash hotlinks (no React/TSX changes needed). Each pillar has an `image: { src, alt, credit }` object. I'll update `src`, `alt`, and `credit` for just those three entries — the other five pillars stay untouched.

## Sourcing approach

Pull India-specific photos from Unsplash (same CDN already in use, so no new dependency, no asset import, no layout/CSS changes). Candidates I'll search for:

- **Women**: Indian women at a tailoring/SHG workshop or skill-training session (e.g. saree-clad artisans, rural sewing collective).
- **Disability**: Indian context — wheelchair user, assistive-device camp, or inclusive classroom in India.
- **Environment**: Indian tree-plantation drive, school children planting saplings, or clean-up drive in an Indian street/village.

For each, I'll pick a landscape photo, confirm it loads via the existing `u(photoId)` helper (`images.unsplash.com/photo-<id>`), and update the alt text + credit URL to match the chosen photo.

If a strong Unsplash match isn't available for one of them, fallback is Wikimedia Commons (direct `upload.wikimedia.org` URL) — still hotlinked, no repo asset added.

## Out of scope

- No copy, layout, component, or styling changes.
- No changes to the other 5 pillars.
- No download/commit of image files into the repo.

## Verification

After the edit, open `/initiatives`, scroll to each of the three pillar sections, and confirm the new images load and visually read as Indian.
