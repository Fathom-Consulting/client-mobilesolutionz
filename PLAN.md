# Mobile Solutionz V4 Redesign — Claude Code Prompt

You are rebuilding a premium mobile car detailing website for **Mobile Solutionz** (Medford, Oregon) as a full **Next.js 15 App Router** project managed with **Bun**. The current reference design is a single HTML file (`mobile-solutionz-v3.html`, included in this repo) that the client reviewed and gave feedback on. Your job is to produce a production-grade Next.js site that implements every change below.

---

## TECH STACK & PROJECT SETUP

### Package Manager: Bun
- Use `bun` for all package management. No npm or yarn.
- Initialize with: `bunx create-next-app@latest mobile-solutionz --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
- All installs via `bun add`, all scripts via `bun run`

### Framework & Libraries
- **Next.js 15** (App Router, TypeScript, `src/` directory)
- **Tailwind CSS v4** with CSS variables for theming
- **Framer Motion** (`motion` package) for all animations
- **Aceternity UI** components via the shadcn registry (see component plan below)
- **Lucide React** for all icons (no Font Awesome, no emoji icons)
- **shadcn/ui** as the base component layer

### Aceternity UI Setup
1. Initialize shadcn: `bunx --bun shadcn@latest init` (style: new-york, color: zinc, CSS variables: yes)
2. Add the Aceternity registry to `components.json`:
   ```json
   "registries": {
     "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
   }
   ```
3. Install components via: `bunx shadcn@latest add @aceternity/<component-name>`

### Project Structure
```
src/
  app/
    layout.tsx          — Root layout, fonts, metadata
    page.tsx            — Main landing page (composes all sections)
    globals.css         — Tailwind imports + custom CSS variables
  components/
    ui/                 — shadcn + Aceternity UI components
    sections/
      Hero.tsx
      Ticker.tsx
      IntroStrip.tsx
      Services.tsx
      Pricing.tsx
      AddOns.tsx
      Process.tsx
      About.tsx
      Products.tsx
      Reviews.tsx        — NEW: Google Reviews carousel
      CTA.tsx
      Footer.tsx
    Nav.tsx
    MobileMenu.tsx
  lib/
    utils.ts            — cn() helper
    constants.ts        — Service data, pricing data, review data, etc.
  assets/               — Any static assets
```

---

## DESIGN DIRECTION: LUXURY REBRAND

The client wants to shift from a generic detailing site to a **luxury automotive detailing** identity. This is the most important change.

### Visual & Layout
1. **Hero**: Replace the Pexels video with a **static hero image of a luxury car** (dark, moody, cinematic lighting). Use a high-quality Unsplash/Pexels URL. Apply a dark overlay (brightness ~0.3, contrast ~1.15, desaturated).
2. **Ultra-modern, blocky design**: Simplify the scroll experience. Each section should breathe with generous whitespace. Confident grid structures. No visual clutter.
3. **Service panels**: Replace the 4 cramped image tiles with a cleaner approach. Consider using Aceternity's **Focus Cards**, **Sticky Scroll Reveal**, or **Tabs** component to let users explore services without feeling overwhelmed. Hover should reveal details for education.
4. **Pricing**: Keep large pricing numbers with "starting at" ranges. Make the "varies by vehicle size and condition" disclaimer more prominent.
5. **Luxury imagery throughout**: Every decorative image should evoke premium automotive culture.

### Typography
- **Bebas Neue** — display / headings
- **Barlow** / **Barlow Condensed** — body, UI, labels
- Load via `next/font/google` (not CDN link tags)

### Color Palette (as Tailwind CSS variables)
```css
--ink:      #0c0c0c;
--charcoal: #141414;
--steel:    #1e1e1e;
--panel:    #252525;
--olive:    #606c38;
--olive-lt: #7a8a47;
--olive-dk: #4a5229;
--cream:    #e8e3d4;
--ash:      #a0a09a;
--muted:    #555550;
```

### Brand Signatures to Preserve
- Film grain overlay (SVG noise texture on `body::before` or a global overlay component)
- Angled clip-path buttons (the parallelogram-style CTAs)
- Olive accent lines and dividers
- Dark-on-dark layered backgrounds

---

## ACETERNITY UI COMPONENT PLAN

Use these Aceternity components where they fit naturally. Do not force them everywhere. The goal is fluid, high-quality motion that feels premium.

| Section | Aceternity Component | Why |
|---------|---------------------|-----|
| **Hero** | `Spotlight` or `Spotlight New` | Dramatic lighting effect on hero, draws the eye |
| **Hero text** | `Text Generate Effect` or `Colourful Text` | Animate the headline on page load |
| **Service panels** | `Focus Cards` or `Card Hover Effect` | Clean hover-to-reveal service details |
| **Pricing cards** | `3D Card Effect` or `Glare Card` | Subtle depth on hover for premium feel |
| **Add-ons** | `Card Spotlight` or `Hover Border Gradient` | Highlight individual add-ons on hover |
| **Reviews** | `Infinite Moving Cards` or `Animated Testimonials` | Auto-scrolling review carousel |
| **Products strip** | `Infinite Moving Cards` | Trusted brands logo ticker |
| **Process section** | `Sticky Scroll Reveal` | Scroll-locked step reveal |
| **Nav** | `Floating Navbar` or `Resizable Navbar` | Hide-on-scroll, reveal-on-scroll-up |
| **Background** | `Background Beams` or `Sparkles` | Subtle depth in CTA section |
| **Buttons** | `Moving Border` | Accent on primary CTA buttons |
| **Section headers** | `Lamp Effect` | Dramatic section entry (use sparingly, 1-2 sections max) |

**Important**: Only install components you actually use. Each one adds bundle size. If a vanilla Framer Motion animation achieves the same effect more simply, prefer that.

---

## SCROLL ANIMATIONS

Every section should have fluid scroll-triggered animations. Use Framer Motion's `useInView`, `useScroll`, and `useTransform` hooks.

### Animation Patterns
- **Staggered reveals**: Children elements animate in sequence with increasing delay (0.1s, 0.2s, 0.3s...). Use `variants` with `staggerChildren`.
- **Scroll-linked parallax**: Hero image parallax on scroll. Background elements move at different speeds.
- **Section entrances**: Each section fades up and slides in from ~30px below as it enters viewport (threshold: 0.1, once: true).
- **Number counters**: Stats animate from 0 to target value when scrolled into view.
- **Smooth clip-path transitions**: Service panels and pricing cards reveal with clip-path animations.
- **Ticker**: CSS animation for the infinite horizontal scroll ticker. No JS needed.

### Performance Rules
- Use `will-change` sparingly
- Prefer `transform` and `opacity` for GPU-accelerated animations
- Use `once: true` on scroll-triggered animations (don't replay)
- Lazy load images below the fold with `next/image` and `loading="lazy"`
- Use `"use client"` only on components that need interactivity or motion

---

## ICONS: LUCIDE REACT

Replace ALL emoji icons and any icon fonts with **Lucide React** icons.

```bash
bun add lucide-react
```

| Old (V3) | New Lucide Icon |
|----------|----------------|
| Car emoji in intro strip | `<Car />` |
| Shield emoji | `<ShieldCheck />` |
| Sparkle/star | `<Sparkles />` |
| Map pin | `<MapPin />` |
| Phone icon | `<Phone />` |
| Arrow right | `<ArrowRight />` |
| Check marks in lists | `<Check />` or keep the diamond CSS shape |
| Star ratings (reviews) | `<Star />` filled/outlined |

Use a consistent icon size (18-20px for inline, 24px for feature blocks) and `strokeWidth={1.5}` for a refined look.

---

## SERVICE PACKAGE CONTENT UPDATES

### Economy ($100-250) — NO CHANGES
Keep as-is from V3.

### Protection+ ($400-600) — UPDATED
Interior:
- Deep clean & steam disinfectant (keep)
- ~~Leather treatment & conditioning~~ → **Leather / panel protection + conditioning**
- Spot extraction included (keep)
- Iron decon remover & fender scrub (keep)
- Clay bar decontamination (keep)
- Premium paint sealant (keep)
- ~~Plastic trim protection~~ → **Plastic / trim protection + conditioning**

### CeramicPro ($800-1400) — UPDATED
Interior:
- Ceramic coating on all painted surfaces → **Ceramic coating on all painted surfaces (1-2 stage paint correction if needed)**
- ~~Full spot extraction~~ → **Steam / shampoo extraction**
- ~~Ceramic leather coating~~ → **REMOVE entirely**
- Add: **Leather / panel protection + conditioning**

Exterior:
- ~~Trim restoration~~ → **Trim + plastic conditioning & protection**
- ~~Engine bay cleanup~~ → **REMOVE entirely**
- Glass polish & ceramic coat (keep)
- Wheel polish & ceramic coat (keep)

---

## BRANDING & CERTIFICATION UPDATES

### System X Certification (MAJOR)
Chano is now a **certified System X installer**. This must be prominent:
1. Add a "Proud Authorized Installer of System X" badge or callout. Consider placing it in the hero, the about section, or as a dedicated trust strip.
2. **Replace ALL "P&S" references with "System X"** sitewide.
3. Trusted products row: **Koch Chemie, CarPro, Gyeon, System X, SONAX, Shine Supply**

### Add-On Rename
- ~~O-Zone Treatment~~ → **Odor Treatment** (same description, new name)

---

## NEW SECTION: GOOGLE REVIEWS

Build a **Google Reviews** section using Aceternity's `Infinite Moving Cards` or `Animated Testimonials`.

- 5-6 placeholder review cards that auto-scroll
- Each card: 5-star rating (Lucide `<Star />` icons), reviewer first name, short realistic review quote, "Google Review" badge
- "See All Reviews on Google" link/button at the end
- Design should feel integrated with the luxury dark aesthetic
- Place between About and CTA sections

---

## SECTION ORDER

1. **Nav** — Floating/hide-on-scroll navbar (Aceternity `Floating Navbar` or custom)
2. **Hero** — Luxury car image, spotlight effect, animated headline, stat counter, CTAs
3. **Ticker** — CSS infinite scroll service ticker (update O-Zone → Odor Treatment)
4. **Intro Strip** — 4 feature blocks with Lucide icons
5. **Services** — Redesigned panels (Focus Cards or similar), 4 services
6. **Pricing** — 3-tier + custom row, all content updates applied
7. **Add-Ons** — 8 add-on grid, Odor Treatment rename applied
8. **Process** — 4-step process (olive background, Sticky Scroll Reveal or staggered cards)
9. **About** — Photo + content, System X mention, area chips, stats
10. **Products** — Trusted brands strip (System X replaces P&S)
11. **Reviews** — NEW Google Reviews carousel
12. **CTA** — Booking section with phone number
13. **Footer** — Copyright 2026, "Site by Fathom" credit

---

## EXISTING IMAGE ASSETS

```
Interior Detailing: https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEel5l9l1YUF6gVRC0tq3JWhyxMB8ADKm4uXok
Exterior Detailing: https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEc7ZVTPv9gWdEhp5MAzDaHO8TGNFxlqPX7LkV
Paint Correction:   https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEACNH3C6uRskFr3X0f9ejdlp61Ya4zCvtE7PQ
Ceramic Coating:    https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEkqy9JcXZmR9Sp1D8tv3qrHXMf04jJWAxgiCK
About/Team photo:   https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE2uxySWUdiRU0fAyw9EBIPc6XOYxzWJ3utmSV
Koch Chemie logo:   https://kcxusa.com/cdn/shop/files/White_Square.png
CarPro logo:        https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE0ooPlDT43vldRwtsFOQHjGCKegIW9AhNXTyL
Gyeon logo:         https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEjVAwBvlEeOGd1Z27t4sXfpngQPLrImu9hMkU
```

For the hero image, use a high-quality Pexels/Unsplash URL of a dark luxury car (Porsche, GTR, Alfa Romeo, or Lexus with dramatic lighting).

For external images, use `next/image` with `unoptimized` or configure `remotePatterns` in `next.config.ts`:
```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'lpsog3i64o.ufs.sh' },
    { protocol: 'https', hostname: 'kcxusa.com' },
    { protocol: 'https', hostname: 'images.pexels.com' },
    { protocol: 'https', hostname: 'images.unsplash.com' },
  ],
}
```

---

## COPY RULES

The copy from V3 is largely final. Keep it. But apply two strict rules:

1. **Never use em-dashes** ( — ). Replace any em-dash with a period, comma, or restructured sentence. Audit every section.
2. **Never use the "it's not X, it's Y" sentence structure.** If you find this pattern in any copy, rewrite it. For example, "It's not a car wash, it's a detail studio" should become something like "A detail studio for people who care about their vehicles."

Audit the following sections for em-dashes and rewrite:
- Hero subtitle
- Service panel descriptions
- Pricing blurbs and list items
- Add-on descriptions
- About section body copy
- Process step descriptions
- CTA copy

---

## RESPONSIVE BREAKPOINTS

Match the V3 breakpoint strategy:
- **Desktop**: default (1280px+)
- **Tablet**: `max-width: 1024px`
- **Mobile**: `max-width: 768px`
- **Small mobile**: `max-width: 480px`

Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`). Every section must be tested at all breakpoints.

---

## ACCESSIBILITY

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- Proper alt text on all images
- `aria-label` on interactive elements (hamburger menu, buttons)
- `prefers-reduced-motion` media query: disable Framer Motion animations when the user prefers reduced motion
- Focus-visible styles on interactive elements
- Color contrast: cream on dark backgrounds passes WCAG AA

---

## DEPLOYMENT NOTES

- The site deploys on **Vercel**
- Phone number: `(541) 326-5822` / `tel:+15413265822`
- Formspark form ID: `YOJFX3S30` (for contact form if added later)
- EmbedSocial: Instagram integration placeholder (can be added post-launch)
- Vercel Analytics: Add `@vercel/analytics` package

---

## WHAT SUCCESS LOOKS LIKE

The finished V4 should feel like a **luxury automotive brand website**. Think the visual tone of a Porsche Experience Center page or a high-end ceramic coating studio. Dark, confident, editorial.

Key signals:
- Hero makes you stop and look. Spotlight + animated text + luxury car.
- Scroll animations are fluid and deliberate, never janky or overdone
- System X certification feels prestigious and prominent
- Pricing is clear, large, and premium-feeling
- Google Reviews section adds trust and social proof
- Aceternity components feel intentional, not decorative filler
- The site never feels cluttered or overwhelming
- Mobile experience is as polished as desktop
- Every text change from this spec is implemented correctly
- No em-dashes anywhere in the final copy
- No "it's not X, it's Y" sentence structures
- All icons are Lucide React, no emoji fallbacks
- `bun run dev` starts clean, `bun run build` produces zero errors