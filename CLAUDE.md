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

**Single-page app** with hash-based navigation (`#services`, `#pricing`, `#about`). The `src/app/page.tsx` is the main landing page composed of section components. A dedicated `/booking` page hosts the booking form.

**Path alias:** `@/*` maps to `src/` (e.g., `@/components/Nav`).

### Key Files

- `src/app/page.tsx` — Main landing page, composes all section components
- `src/app/layout.tsx` — Root layout, metadata, JSON-LD schemas, Vercel Analytics
- `src/app/booking/page.tsx` — Standalone booking page
- `src/app/thanks/page.tsx` — Post-submission confirmation page
- `src/app/api/uploadthing/core.ts` — UploadThing file router (vehicle photo uploads)
- `src/app/api/uploadthing/route.ts` — UploadThing Next.js route handler
- `src/lib/constants.ts` — All site data: packages, addons, services, reviews, products, contact info
- `src/lib/schema.ts` — JSON-LD SEO schemas (LocalBusiness, FAQ)
- `src/lib/uploadthing-client.ts` — Client-side UploadThing helpers (`useUploadThing`)

### Styling

Tailwind CSS only — no CSS modules. Brand color is `#606c38` (olive green). Dark theme throughout. CSS custom properties defined in `src/app/globals.css` (`--ink`, `--charcoal`, `--steel`, `--panel`, `--olive`, `--cream`, `--ash`, `--muted`). Animations (`fade-in`, `ticker`) defined in globals.css.

### Forms

`src/components/sections/BookingForm.tsx` handles bookings:
- Submits as JSON to Formspark (`https://submit-form.com/{id}`)
- Photos upload to UploadThing first; CDN URLs are included in the Formspark payload
- Client-side validation: name, email (format), phone (10-digit) required
- Images over 7MB are auto-compressed via canvas before upload
- `_replyto` field set so Chano can reply directly to the customer from his inbox

### Images

All images served from external CDNs (Cloudinary, Behold, UploadThing). No local image assets except logos in `public/logos/` (self-hosted SVGs for SONAX and P&S). Remote domains whitelisted in `next.config.ts`.

### Instagram Feed

`src/components/sections/Instagram.tsx` is an async server component that fetches from the Behold.so JSON feed API with a 1-hour revalidate cache. Feed ID: `WTmx3W09DNUtgOJpt8MM`.
