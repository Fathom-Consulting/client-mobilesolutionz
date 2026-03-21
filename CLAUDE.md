# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for Mobile Solutionz, a premium mobile car detailing service in Medford, Oregon. Built and maintained by Fathom Consulting.

## Commands

```bash
bun run dev      # Start dev server (localhost:3000)
bun run build    # Production build
bun run lint     # ESLint
```

## Architecture

**Single-page app** with hash-based navigation (`#services`, `#pricing`, `#contact`). The `app/page.tsx` is the main landing page composed of section components. Hash in the URL updates dynamically via `history.replaceState()` on scroll.

**Add-on pages** (`app/addons/*/page.tsx`) each render the shared `AddOnPage` component with specific props — add new add-ons by following that pattern.

**Path alias:** `@/*` maps to `app/` (e.g., `@/components/Header`).

### Key Files

- `app/page.tsx` — Main landing page, composes all section components
- `app/layout.tsx` — Root layout, metadata, Vercel Analytics
- `app/components/ContactForm.tsx` — Booking form; reads URL query params (`?package=`, `?addon=`) to pre-populate selections, submits via Formspark
- `app/api/video/route.ts` — Server route that proxies Pexels API to return the hero background video URL
- `app/images.json` — CDN URL mappings for all site images (Cloudinary + custom UFS hosting)

### Styling

Tailwind CSS only — no CSS modules. Brand color is `#606c38` (olive green). Dark theme throughout. Custom animations (`fade-in`, `check-bounce`) defined in `app/globals.css`. shadcn/ui components use the New York style variant.

### Forms

Formspark handles all form submissions (`@formspark/use-formspark`). After submission, users are redirected to `/thanks`. The contact form dynamically filters add-ons based on selected package (some are included, others are purchasable).

### Images & Video

All images served from external CDNs — URLs in `app/images.json`. Hero video fetched client-side from the `/api/video` route which calls Pexels. `next.config.mjs` whitelists the relevant image domains.
