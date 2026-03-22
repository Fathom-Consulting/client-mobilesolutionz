# Premium Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix five specific issues (hero badge visibility, hero font, product logos, review carousel jank, real review data) and push the site to enterprise-level Webflow/Framer aesthetic quality.

**Architecture:** All changes are isolated to `src/` — constants, layout font loading, and individual section components. No new routes or API changes. The luxury serif (Cormorant Garamond) is added via `next/font/google` alongside existing fonts and applied only to the hero `<h1>`, preserving Bebas Neue for all section headings. Review carousel is fixed by reducing from 3 copies to 2 (matching the `-50%` keyframe endpoint). Remaining changes are CSS class tweaks and data updates.

**Tech Stack:** Next.js 16 App Router, Tailwind CSS v3, `motion/react` v12, `next/font/google`, TypeScript

---

## Context for the Engineer

### Design tokens (CSS vars, `src/app/globals.css`)
- `--ink` (#0c0c0c), `--charcoal` (#141414), `--steel` (#1e1e1e), `--panel` (#252525)
- `--olive` (#606c38), `--olive-lt` (#7a8a47), `--olive-dk` (#4a5229)
- `--cream` (#e8e3d4), `--ash` (#a0a09a), `--muted` (#555550)

### Font CSS vars
- `--font-bebas` — Bebas Neue (section headings, stats, large labels)
- `--font-barlow` — Barlow (body text)
- `--font-barlow-condensed` — Barlow Condensed (eyebrows, nav, badges)
- `--font-cormorant` — **NEW**: Cormorant Garamond (hero h1 only)

### Ticker animation (keyframe in `globals.css`)
```css
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
This works correctly **only with exactly 2 copies** of items. At `-50%` of total width, you land at the start of copy 2, which looks identical to copy 1 → seamless. With 3 copies, `-50%` = middle of copy 2, causing the visible jump on reset.

### Why the review carousel is jerky
`Reviews.tsx` does `[...REVIEWS, ...REVIEWS, ...REVIEWS]` (3 copies). Fix: change to 2 copies.

---

## Task 1: Update REVIEWS constant with real data

**Files:**
- Modify: `src/lib/constants.ts` (lines 197–234)

Replace the `REVIEWS` array. Format: "FirstName LastInitial." Skip any review with `null` text. Pick 12 reviews with substantive content for a good carousel density.

**Step 1: Replace REVIEWS array**

Find the current `export const REVIEWS = [` block (lines 197–234) and replace with:

```typescript
export const REVIEWS = [
  {
    name: "Prestyn R.",
    rating: 5,
    text: "They did such an awesome job — my car smells brand new. I needed an odor treatment to get all of the nicotine out before my newborn arrives and I don't think I could've found a better place. Super efficient, came to my house, and had it ready within hours.",
    date: "2 weeks ago",
  },
  {
    name: "Tim H.",
    rating: 5,
    text: "I have been detailing my own vehicles for over 50 years and was a little hesitant on hiring someone, but let me tell you these guys are absolutely amazing at what they do. By far the best detail I've ever seen, and very reasonably priced. I HIGHLY recommend them.",
    date: "1 month ago",
  },
  {
    name: "Kemberly R.",
    rating: 5,
    text: "Mobile Solutionz came out to my home and brought my car back to life! We have three boys and my car is our daily to work, school, and sports practices. For all the busy families out there, this is your guy. Very professional and easy to communicate with.",
    date: "3 weeks ago",
  },
  {
    name: "Morgan W.",
    rating: 5,
    text: "He did amazing work! This car transports two feral gremlins every single day, and you can definitely tell. But he made my car seem like it was fresh and clean straight off the lot. I will be using him again and referring him to everyone I know.",
    date: "1 month ago",
  },
  {
    name: "Christian C.",
    rating: 5,
    text: "Night and day difference. Kids wrecked my truck and now it's looking better than new. 10 out of 10, highly recommend.",
    date: "3 weeks ago",
  },
  {
    name: "Reynaldo S.",
    rating: 5,
    text: "My truck looks brand new! The exterior has a mirror-like shine and the interior smelled fresh, with every nook and cranny thoroughly cleaned. He even cleaned the engine bay, which I wasn't expecting. It's clear Chano takes pride in his work and doesn't rush. I'll definitely be coming back.",
    date: "2 months ago",
  },
  {
    name: "Adrián S.",
    rating: 5,
    text: "My mobile detailer is reliable, professional, and goes above and beyond every time. He even came out to my barbershop and made sure my car looked absolutely perfect. The attention to detail and pride in his work really show — highly recommend!",
    date: "6 weeks ago",
  },
  {
    name: "Kayla O.",
    rating: 5,
    text: "I didn't even recognize my car after Chano was done with it. It looked like a brand new car off the lot! He came to my home which was super convenient. Highly, highly recommend!",
    date: "5 weeks ago",
  },
  {
    name: "John W.",
    rating: 5,
    text: "They came to my business and detailed the inside of my Ford F-150. Arrived on time, extremely thorough — they took their time to do it right and made sure no area was missed. It's hard to believe how good the interior looks now.",
    date: "2 months ago",
  },
  {
    name: "Sara C.",
    rating: 5,
    text: "I had Chano detail two of my vehicles and couldn't be happier. Thorough, professional, and they clearly take pride in their work. My cars look and smell brand new — every surface is spotless. Great communication, fair pricing, fast turnaround.",
    date: "1 month ago",
  },
  {
    name: "Miguel C.",
    rating: 5,
    text: "This man is a total professional — has detailed our work trucks to make them look like new, installed backup cameras, detailed my personal cars. Always completely professional, leaves no trace of even being here. Best value for the money out there.",
    date: "3 months ago",
  },
  {
    name: "Ryan W.",
    rating: 5,
    text: "Chano did a fantastic job detailing my interior and exterior, and was so easy to work with for scheduling. The best part is that he'll come straight to wherever your car is!",
    date: "Recently",
  },
];
```

**Step 2: Commit**

```bash
git add src/lib/constants.ts
git commit -m "feat: replace placeholder reviews with real Google review data"
```

---

## Task 2: Fix reviews carousel seamless infinite scroll

**Files:**
- Modify: `src/components/sections/Reviews.tsx` (line 8)

The only code change needed: `[...REVIEWS, ...REVIEWS, ...REVIEWS]` → `[...REVIEWS, ...REVIEWS]`. The ticker keyframe goes to `-50%`. With 2 copies that lands exactly at start of copy 2 (seamless). With 3 copies it lands mid-copy-2 (causes the visible jump on reset).

Also increase animation duration since we now have 12 real reviews (more content = needs more time). The `animationDuration` inline style controls this.

**Step 1: Fix the copies and duration**

In `Reviews.tsx`, find line 8:
```tsx
const items = [...REVIEWS, ...REVIEWS, ...REVIEWS];
```
Change to:
```tsx
const items = [...REVIEWS, ...REVIEWS];
```

Then find the `<div>` with `animationDuration: "50s"` and change to `"70s"` (12 reviews × ~5.8s each):
```tsx
style={{ width: "max-content", animationDuration: "70s" }}
```

**Step 2: Verify visually**

Run `bun run dev` and watch the Reviews section for ~90 seconds. The carousel should flow continuously with no visible jump or reset.

**Step 3: Commit**

```bash
git add src/components/sections/Reviews.tsx
git commit -m "fix: reviews carousel seamless loop (2 copies, not 3)"
```

---

## Task 3: Fix Hero badge visibility + restore P&S product logo

### Part A — Hero badge

**Files:**
- Modify: `src/components/sections/Hero.tsx` (lines 61–71)

The badge currently uses `bg-[var(--olive)]/10 border-[var(--olive)]/40` — nearly invisible against the dark hero image. Change to a dark frosted glass treatment.

Find:
```tsx
          className="inline-flex items-center gap-2 border border-[var(--olive)]/40 bg-[var(--olive)]/10 px-4 py-2 mb-8"
```
Replace with:
```tsx
          className="inline-flex items-center gap-2 border border-[var(--olive)]/60 bg-[var(--ink)]/75 backdrop-blur-sm px-4 py-2 mb-8"
```

### Part B — Restore P&S Detail Products logo

**Files:**
- Modify: `src/lib/constants.ts` (PRODUCTS array)

The old site had P&S Detail Products. The CDN URL is in the UFS bucket (already whitelisted in `next.config.ts`). Add it to the end of `PRODUCTS`:

```typescript
  {
    name: "P&S Detail Products",
    logo: "https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GE3FFqaa5Cuj1n2vBZt7z6DEeGqpSXAM0Hc9Od",
    url: "https://pnsdetail.com",
  },
```

The `Products.tsx` grid is `grid-cols-2 sm:grid-cols-3 md:grid-cols-6` — 7 logos will display fine at all breakpoints (wraps gracefully).

**Step 1: Apply both changes**

**Step 2: Commit**

```bash
git add src/components/sections/Hero.tsx src/lib/constants.ts
git commit -m "fix: hero badge contrast, restore P&S product logo"
```

---

## Task 4: Add Cormorant Garamond luxury serif font to hero headline

**Files:**
- Modify: `src/app/layout.tsx` (lines 1–27)
- Modify: `src/components/sections/Hero.tsx` (lines 79, 89)

### Why Cormorant Garamond

Cormorant Garamond is the serif equivalent of what Rolls-Royce and high-end fashion houses use for display type. At `clamp(3.5rem, 9vw, 8rem)` it has the editorial weight of a luxury print ad. Paired with Barlow Condensed in the rest of the site, it creates the editorial type tension that makes Webflow agency sites feel premium. It is **only** applied to the hero `<h1>` — all section headings keep Bebas Neue to maintain the bold, automotive character throughout the body of the page.

### Step 1: Add font to layout.tsx

In `src/app/layout.tsx`, find the import line:
```typescript
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
```
Change to:
```typescript
import { Bebas_Neue, Barlow, Barlow_Condensed, Cormorant_Garamond } from "next/font/google";
```

After the `barlowCondensed` block (around line 27), add:
```typescript
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});
```

Then find the `<html>` tag (search for `lang="en"`) and add `cormorant.variable` to the `className`. It currently looks like:
```tsx
      <html lang="en" className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
```
Change to:
```tsx
      <html lang="en" className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} ${cormorant.variable}`}>
```

### Step 2: Apply to Hero h1

In `src/components/sections/Hero.tsx`, find the first `<motion.span>` inside `<h1>` (the "Premium Mobile" line, around line 75–82):
```tsx
              className="block font-[var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-none tracking-widest text-[var(--cream)]"
```
Replace with:
```tsx
              className="block font-[var(--font-cormorant)] font-light text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-[0.06em] text-[var(--cream)]"
```

Find the second `<motion.span>` ("Auto Detailing" line, around line 85–93):
```tsx
              className="block font-[var(--font-bebas)] text-[clamp(3rem,8vw,7rem)] leading-none tracking-widest text-[var(--olive)]"
```
Replace with:
```tsx
              className="block font-[var(--font-cormorant)] font-light italic text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-[0.06em] text-[var(--olive)]"
```

The italic on the second line ("Auto Detailing") creates an editorial luxury contrast — think Vogue headlines where a word or phrase is italicised for emphasis. Very Framer-agency.

### Step 3: Verify

Run `bun run dev`. The hero headline should now display in an elegant, high-contrast serif — "Premium Mobile" in regular weight cream, "Auto Detailing" in italic olive. Both lines should feel like a luxury print ad rather than a sports jersey.

Check: font loads on first paint (no FOIT), sizes scale correctly across 375px/768px/1440px viewports.

### Step 4: Commit

```bash
git add src/app/layout.tsx src/components/sections/Hero.tsx
git commit -m "feat: add Cormorant Garamond luxury serif to hero headline"
```

---

## Task 5: Services cards — always show content on mobile

**Files:**
- Modify: `src/components/sections/Services.tsx`

Currently service card content (tagline, description, CTA) uses `opacity-0 group-hover:opacity-100` — invisible on mobile (no hover state). Users on phones see only the image and title with no way to learn about the service. Fix: always show on mobile, hover-only on desktop.

**Step 1: Update Services.tsx**

Find the tagline `<span>`:
```tsx
                <span className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
```
Replace with:
```tsx
                <span className="font-[var(--font-barlow-condensed)] text-xs tracking-[0.3em] uppercase text-[var(--olive)] mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300">
```

Find the description `<p>`:
```tsx
                <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
```
Replace with:
```tsx
                <p className="font-[var(--font-barlow)] text-sm text-[var(--ash)] leading-relaxed max-w-xs opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 delay-75">
```

Find the CTA `<a>`:
```tsx
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[var(--olive)] text-sm font-[var(--font-barlow-condensed)] tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100"
```
Replace with:
```tsx
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[var(--olive)] text-sm font-[var(--font-barlow-condensed)] tracking-wider uppercase opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 delay-100"
```

Also: on mobile the dark image overlay needs to be strong enough to read text against. The gradient `from-[var(--ink)]/80` is currently only on the bottom half. Increase it for mobile:

Find:
```tsx
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent z-10" />
```
Replace with:
```tsx
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/60 to-[var(--ink)]/20 md:from-[var(--ink)]/80 md:via-transparent md:to-transparent z-10" />
```

**Step 2: Commit**

```bash
git add src/components/sections/Services.tsx
git commit -m "fix: service cards always show content on mobile (touch-friendly)"
```

---

## Task 6: Premium design polish pass

**Goal:** Push the site from "nice Next.js template" to "enterprise agency" level. Focus on the highest-impact details.

### 6A — Hero: stronger gradient + stat dividers

**Files:** `src/components/sections/Hero.tsx`

The stats row at the bottom currently just uses `flex flex-wrap gap-12`. Add vertical dividers between stats for that editorial data-display look.

Find the stats map block:
```tsx
          {STATS.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1">
```
Replace with:
```tsx
          {STATS.map((stat, i) => (
            <div key={stat.value} className={`flex flex-col gap-1 ${i > 0 ? "pl-12 border-l border-white/10" : ""}`}>
```

### 6B — Process: large decorative step numbers

**Files:** `src/components/sections/Process.tsx`

The step numbers (`text-5xl sm:text-7xl`) are good but let's zero-pad them for the designer-detail look (01, 02, 03, 04 vs 1, 2, 3, 4).

In `constants.ts`, find `PROCESS_STEPS` and check the `step` field values. If they're `"1"`, `"2"`, etc., change to `"01"`, `"02"`, `"03"`, `"04"`.

Find in `src/lib/constants.ts` the `PROCESS_STEPS` array. The step values should be:
```typescript
export const PROCESS_STEPS = [
  { step: "01", ... },
  { step: "02", ... },
  { step: "03", ... },
  { step: "04", ... },
];
```
If they're currently `"1"` through `"4"`, update them.

### 6C — About: offset border fix for mobile

**Files:** `src/components/sections/About.tsx`

The decorative offset border (`absolute -bottom-4 -right-4 -z-10`) can clip outside the container on mobile. Wrap the image block in `overflow-visible` and hide the offset border on mobile:

Find:
```tsx
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--olive)]/20 -z-10" />
```
Replace with:
```tsx
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[var(--olive)]/20 -z-10" />
```

### 6D — Pricing: "Not Sure" row mobile padding

**Files:** `src/components/sections/Pricing.tsx`

Find:
```tsx
          className="mt-px bg-[var(--panel)] border border-white/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
```
Replace with:
```tsx
          className="mt-px bg-[var(--panel)] border border-white/5 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6"
```

**Step 1: Apply all 6A–6D changes**

**Step 2: Commit**

```bash
git add src/components/sections/Hero.tsx src/components/sections/Process.tsx src/lib/constants.ts src/components/sections/About.tsx src/components/sections/Pricing.tsx
git commit -m "polish: editorial stat dividers, zero-pad process steps, mobile fixes"
```

---

## Task 7: Push + update PR

```bash
git push
```

The existing PR #5 will automatically update with all commits. No new PR needed.

Verify in GitHub that all commits appear on the PR. The branch is `v4-redesign` targeting `main`.

---

## Visual Verification Checklist

Before marking complete, check each of these at 375px, 768px, and 1440px viewport widths:

- [ ] Hero badge is clearly legible (dark frosted glass, not translucent olive)
- [ ] Hero h1 renders in Cormorant Garamond serif — "Premium Mobile" regular, "Auto Detailing" italic olive
- [ ] Cormorant font loads on first paint (no flash of fallback font)
- [ ] Reviews carousel scrolls continuously for 2+ minutes with no jump or reset
- [ ] All 12 product logos visible and white (including P&S)
- [ ] Service cards show tagline + description + CTA on mobile without hover
- [ ] Process steps display as "01 02 03 04"
- [ ] About decorative border hidden on mobile, visible on sm+
- [ ] Stats in hero have vertical dividers between them
