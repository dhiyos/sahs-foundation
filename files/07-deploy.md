# 07 — Deploy Workflow (Claude Code → GitHub → Lovable)

## Overview

```
┌──────────────┐      ┌──────────┐      ┌─────────┐      ┌──────────┐
│ Claude Code  │ ───► │  GitHub  │ ───► │ Lovable │ ───► │  Public  │
│  (scaffold)  │      │  (repo)  │      │ (visual │      │ (domain) │
│              │      │          │      │  edit)  │      │          │
└──────────────┘      └──────────┘      └─────────┘      └──────────┘
```

You scaffold the project locally with Claude Code, push it to GitHub, then connect that GitHub repo to Lovable. Lovable lets you continue editing visually while every change syncs back to GitHub. Final publish goes through Lovable or a connected hosting provider.

---

## Step 1 — Local scaffold (Claude Code)

Run prompts 1–8 from `06-claude-code-prompts.md` in order.

After each prompt, verify locally:

```bash
npm run dev      # http://localhost:5173
npm run build    # production build, must succeed
```

Final state: working site at `localhost`, all 5 pages rendering, no console errors.

---

## Step 2 — Push to GitHub

### Create the repo

1. On GitHub, create a new **empty** repo named `sahs-foundation-website` (private or public — your choice).
2. Do not initialise with README, .gitignore, or licence — they already exist locally.

### Push from local

```bash
cd sahs-foundation
git remote add origin https://github.com/<your-username>/sahs-foundation-website.git
git branch -M main
git push -u origin main
```

### Verify

Open the GitHub repo in a browser. You should see all files, a `package.json`, and the README rendering.

---

## Step 3 — Connect to Lovable

Lovable supports importing existing GitHub repos. The exact UI changes occasionally — search the Lovable docs for the latest steps if anything below looks off.

1. Sign in to Lovable.
2. From the dashboard, choose **Import from GitHub** (or "Connect a GitHub repo" — naming varies).
3. Authorise Lovable to access your GitHub account if prompted.
4. Select the `sahs-foundation-website` repo.
5. Lovable will clone the repo, detect Vite + React, and spin up a preview environment.

Once imported, you can:
- Edit visually in Lovable
- Edit with prompts (Lovable's AI editor)
- Edit code directly in the Lovable IDE

Every change Lovable makes is committed back to the GitHub repo on the `main` branch (or a Lovable-specific branch — check your project settings).

---

## Step 4 — Sync changes both ways

### Local edits → Lovable

```bash
# make changes locally
git add .
git commit -m "feat: update hero copy"
git push origin main
```

Lovable picks up the change automatically (may take ~30s).

### Lovable edits → Local

```bash
git pull origin main
```

Always `git pull` before starting a local edit session to avoid merge conflicts.

---

## Step 5 — Publish

You have two options:

### Option A — Publish via Lovable (easiest)

1. In the Lovable project, click **Publish** (top-right).
2. Lovable assigns a `*.lovable.app` subdomain (e.g., `sahs-foundation.lovable.app`).
3. To use a custom domain (`sahsfoundation.org`), open project Settings → Domains and follow the DNS instructions.

### Option B — Publish via Vercel / Netlify

If you prefer your own host:

1. Sign in to Vercel (or Netlify) with GitHub.
2. Import the `sahs-foundation-website` repo.
3. Build settings:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click Deploy. First deploy takes ~2 minutes.
5. Add custom domain in the project settings.

Both Vercel and Netlify auto-deploy every push to `main`, so the GitHub-as-source-of-truth model still works.

---

## DNS for `sahsfoundation.org`

Whichever host you use, you'll need to point the domain.

### For Lovable / Vercel / Netlify (typical)

At your domain registrar (GoDaddy, Namecheap, Hostinger, etc.):

1. Add an A record pointing the apex (`@`) to the host's IP (provided in their dashboard).
2. Add a CNAME for `www` pointing to the host's domain (e.g., `cname.vercel-dns.com`).
3. Wait for DNS to propagate (usually 15 min – 24 hr).
4. The host will issue an SSL cert automatically (Let's Encrypt) once DNS resolves.

---

## Pre-launch checklist

Before pointing the live domain:

- [ ] All `[TBD]` placeholders replaced (Leadership, Stories, SAHS Group connection, Annual Reports, Payment gateway link)
- [ ] Real beneficiary photos uploaded (replace Unsplash placeholders)
- [ ] All forms tested end-to-end (mailto opens correctly with prefilled body)
- [ ] Mobile, tablet, desktop tested in Chrome, Safari, Firefox
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] All links checked (no 404s, no `href="#"` placeholders)
- [ ] Social Open Graph image renders correctly when shared on WhatsApp, LinkedIn, X
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] Favicon shows in browser tab
- [ ] 404 page exists and matches the design system
- [ ] Footer copyright year is correct
- [ ] Registration number visible on footer
- [ ] Contact details (phone, email, address) verified accurate

---

## Post-launch

Submit to:
- Google Search Console (verify domain, submit sitemap)
- Bing Webmaster Tools

Set up:
- Google Analytics 4 or Plausible (privacy-friendly)
- Uptime monitoring (UptimeRobot, free)

---

## Troubleshooting

**Lovable preview shows blank page**
Check the Lovable build logs — likely a missing dependency or a build error. Fix locally, push, retry.

**Lovable diverged from local**
```bash
git fetch origin
git reset --hard origin/main   # discards local changes — backup first
```

**Build fails on Vercel/Netlify but works locally**
Usually a Node version mismatch. Add to `package.json`:
```json
"engines": { "node": ">=18" }
```

**Custom domain SSL not working**
Wait 24 hours after DNS change before troubleshooting. Most issues resolve on their own.
