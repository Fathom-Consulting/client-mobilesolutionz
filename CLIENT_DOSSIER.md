# CLIENT DOSSIER: Mobile Solutionz (client-mobilesolutionz)
meta: {exported: 2026-07-14, source_project: client-mobilesolutionz (Fathom Consulting), confidence: med, sources: [git history 2025-01-17..2026-04-12, codebase, Notion workspace search, Granola (no matches, 30-day window)], caveat: conversation_search/recent_chats unavailable in export environment — chat-only facts absent, not disproven}

## 1. IDENTITY
- Business: Mobile Solutionz — premium mobile car detailing, one-person studio.
- Owner/operator: Chano (first name only; last name UNKNOWN; email UNKNOWN).
- Domain: mobile-solutionz.com
- Phone: (541) 326-5822 (tel:+15413265822)
- Instagram: https://www.instagram.com/mobilesolutionzz
- Location: Medford, OR 97501 (geo 42.3265, -122.8756). Service area: Medford, Ashland, Jacksonville, Central Point, Eagle Point, White City, Talent, Phoenix (Rogue Valley).
- Industry: auto detailing — interior/exterior, paint correction, ceramic coating. Certified System X installer.
- Relationship to Ryan: UNKNOWN. Evidence only: site's real-Google-review set (commit 0adfff2, "replace placeholder reviews with real Google review data") includes "Ryan W." 5-star review of Chano — Ryan is plausibly a customer of the client. Not confirmed.
- How found Fathom: UNKNOWN.
- Listed on Fathom Notion "Portfolio" page (2025-01-25): "mobile-solutionz.com — Experience professional car detailing services at your doorstep."

## 2. ENGAGEMENT
- Scope: marketing website design/build/maintenance. Deliverables: single-page marketing site, /booking form page, /thanks page, SEO (JSON-LD, sitemap, robots, OG), Instagram feed, photo-upload booking flow.
- Pricing/payment terms: UNKNOWN. No Mobile Solutionz SOW/invoice found in Notion (only generic Fathom Consulting Agreement + SOW templates).
- Timeline (git): repo created 2025-01-17; v1 "finished state" 2025-01-23; iterations through 2025-06; major "v4-redesign" merged 2026-03-25 (PR #5–#7); pricing-tier fixes PRs #8–#11 through 2026-04-11; last commit 2026-04-12.
- Status: delivered → maintenance (dormant since 2026-04-12).
- Outstanding: nothing tracked in repo. Unmerged HEAD commit 291ca3a ("Remove interior ceramic coating from CeramicPro package", 2026-04-12) sits after PR #11 merge — verify deployed.

## 3. DECISIONS LOG
Source = git history + merged PRs. "Ryan" = Ryan Wittmers (Fathom). Client attribution only where commit says so.
- [DECIDED] Package tiers/pricing: Economy $100–$250, Protection+ $400–$600, CeramicPro $800–$1,400 — set at client meeting (commit 507bfe7 "Client meeting updates: pricing, addons, booking form, CTAs", 2026-03-25) — client + Ryan.
- [DECIDED] Remove "Interior Ceramic Coating" from CeramicPro package contents (291ca3a, 2026-04-12; PR #11 merged by Ryan) — remains available as standalone add-on.
- [DECIDED] Progressive tiers with inherited-feature display (Protection+ inherits Economy, CeramicPro inherits Protection+) (342e469, PR #8) — Ryan merged.
- [DECIDED] Maintenance Plans sub-section: from $100/month, weekly/biweekly/monthly cadences, only offered with Protection+ or CeramicPro; final price varies with monthly service volume (ce408f2 + Ryan's redesign 3959070/87bd1d8, PRs #9–#10).
- [DECIDED] Pet Hair Removal is an auto-applied surcharge when vehicle heavily covered; callout on card (72beefb).
- [DECIDED] Formspree → Formspark swap — rationale: 50 → 250 free monthly submissions (c50bf69, 2025-02-02) — Ryan.
- [DECIDED] Formspark payload includes `_replyto` = customer email so Chano replies directly from inbox (5ae65b3).
- [DECIDED] Real Google reviews replace placeholders (0adfff2).
- [DECIDED] Instagram: native embed → Behold.so feed grid (996febe).
- [DECIDED] UploadThing for vehicle-photo uploads; weekly Vercel cron deletes upload files >30 days, scoped to vehicle-photo uploads only (62f1ef7, 55ef6ac, b6da4ca).
- [DECIDED] OG image: static UploadThing-hosted image (712bcfd). REJECTED en route: Next ImageResponse generation (broken, reverted) and myogimage.com API route (reverted) — Ryan.
- [DECIDED] Cormorant Garamond luxury serif added to hero headline (52312b7) — Ryan.
- [DECIDED] "Detailing studio" renamed to "auto detailing" (d8906a2).
- [DECIDED] Footer Fathom link → fathom.services (25b4667).
- [DECIDED] Thanks-page copy: no email-confirmation implication; "Chano will reach out within 24 hours" (8d65d26).
- [DECIDED] v1-era: hero background video (Pexels) — superseded by static hero image in v4 redesign; v1 "O-zone package" no longer exists.
- No PROPOSED-UNCONFIRMED items recoverable: chat history unavailable; git only records shipped changes.

## 4. DESIGN SYSTEM
- Theme: dark throughout, editorial/premium.
- Palette (globals.css): --ink #0c0c0c, --charcoal #141414, --steel #1e1e1e, --panel #252525, --olive #606c38 (brand), --olive-lt #7a8a47, --olive-dk #4a5229, --cream #e8e3d4, --ash #a0a09a, --muted #555550.
- Typography (next/font Google): Bebas Neue 400 (display headlines, wide tracking ~0.06–0.08em, leading 0.88–0.92), Barlow 300–700 (body), Barlow Condensed 400–700 (uppercase micro-labels, tracking 0.26–0.35em), Cormorant Garamond 300/400/600 + italic (hero serif accent).
- Layout patterns: single-page hash nav (#services #pricing #about); clip-path angled buttons (`clip-btn`); ticker marquee; reviews carousel (2 copies, 70s seamless loop); zero-padded process steps (01–04); olive gradient hairline dividers; white/8 borders on panels.
- Animation: `motion` library, whileInView fade+translate (opacity 0→1, y 24→0), viewport once, staggered delays ~0.08–0.12s; `fade-in` and `ticker` keyframes in globals.css; consistent easing pass (a3589ac).
- Brand constraints: olive #606c38 is the brand color; System X certified badge is a required trust mark (redesigned for legibility 66ee3a1); product-brand logo wall (System X, Koch Chemie, CarPro, Gyeon, SONAX, Shine Supply, P&S) with monochrome white treatment (brightness(0) invert(1)); SONAX + P&S self-hosted SVGs in public/logos/.
- Reference sites: UNKNOWN.
- Client explicit requests/vetoes: UNKNOWN beyond the 2026-03-25 meeting commit (pricing, addons, booking form, CTAs).

## 5. TECHNICAL
- Stack: Next.js ^16.2.1 (App Router), React ^19.2.4, TypeScript, Tailwind CSS ^3.4.1 (no CSS modules), bun (bun.lock; scripts run via bun), lucide-react icons, motion ^12, sharp, clsx/tailwind-merge.
- Hosting: Vercel — @vercel/analytics; vercel.json cron `0 3 * * 1` → /api/cleanup.
- Repo: github.com/Fathom-Consulting/client-mobilesolutionz (main; PRs #1–#11).
- Pages/routes: src/app/page.tsx (landing, composed of section components), /booking, /thanks, loading.tsx, sitemap.ts, robots.ts.
- Forms: BookingForm.tsx → JSON POST https://submit-form.com/YOJFX3S30 (Formspark, ID public in constants.ts). Client-side validation: name, email format, 10-digit phone. `_replyto` set. Photos: UploadThing first, CDN URLs in payload; images >7MB canvas-compressed client-side.
- Integrations: UploadThing (CDN lpsog3i64o.ufs.sh; router in src/app/api/uploadthing/core.ts); Behold.so Instagram JSON feed, feed ID WTmx3W09DNUtgOJpt8MM, 1-hour revalidate (async server component); Cloudinary mentioned in CLAUDE.md as image CDN.
- /api/cleanup: deletes UploadThing vehicle-photo files >30 days; auth `Bearer ${CRON_SECRET}`.
- SEO: JSON-LD LocalBusiness (@id https://mobile-solutionz.com/#business) + FAQPage in layout.tsx via src/lib/schema.ts.
- Site data centralized in src/lib/constants.ts (packages, addons, services, reviews, products, service areas, contact, hero image).
- Credentials referenced (NAMES ONLY): CRON_SECRET (Vercel env). UploadThing API token env name not in repo — UNKNOWN. Formspark form ID YOJFX3S30 (public, not secret).
- Path alias: @/* → src/.
- Known config drift: eslint-config-next pinned 14.2.16 while next is ^16; devDeps @types/react ^18 vs React 19.

## 6. ARTIFACTS PRODUCED
- Production website mobile-solutionz.com — delivered, live (Vercel). Two generations: v1 (Jan 2025, video hero) fully superseded by v4 redesign (Mar 2026).
- src/app/page.tsx + 14 section components (Hero, IntroStrip, Ticker, Services, Pricing incl. Maintenance Plans, AddOns, Process, Reviews, Products, Instagram, About, CTA, Footer, BookingForm) — final.
- /booking page + /thanks page — final.
- /api/uploadthing (core.ts, route.ts), /api/cleanup — final.
- src/lib/constants.ts, schema.ts, uploadthing-client.ts — final.
- sitemap.ts, robots.ts, OG image (static, UploadThing-hosted: https://lpsog3i64o.ufs.sh/f/Q40NF8H3o1GEYL7S7hNCkxDM1Iwo5HYWKcXCJ2PZjlqvbQS0) — final.
- public/logos/sonax.svg, public/logos/ps.svg — final.
- CLAUDE.md project guide — final.
- docs/plans (Claude working notes) — deleted from repo, /docs gitignored (98f1893, 82a63dc).
- Known issues: none open in repo.

## 7. CLIENT PREFERENCES & COMMUNICATION
- UNKNOWN for tone, pet peeves, approval style, response speed — no chat/meeting record accessible.
- Evidence-level only: at least one in-person/synchronous client meeting occurred (~2026-03-25) producing a batch revision commit (pricing, addons, booking form, CTAs) — suggests batched, meeting-driven feedback rather than async ticket-style.
- Operational preference encoded in build: Chano handles booking replies personally from his inbox (`_replyto`); responds to inquiries "within 24 hours" (thanks-page copy).
- Brand positioning the client trades on: one-person premium studio, hand work, System X certification, mobile-only (no shop).

## 8. LEARNINGS
- Formspark > Formspree at free tier: 250 vs 50 monthly submissions; JSON POST + `_replyto` gives client direct-reply without backend.
- Customer photo uploads pattern: UploadThing + client-side canvas compression (>7MB) + scheduled cleanup cron (30-day retention, scoped by upload type) keeps storage free-tier-safe.
- Behold.so JSON feed + 1h revalidate = Instagram grid without Meta API review; native IG embeds were worth replacing.
- Dynamically generated OG images (ImageResponse, third-party APIs) were fragile in this stack; a static CDN-hosted OG image was the reliable endpoint.
- Real Google reviews (with names) materially better than placeholders; carousel needs exactly 2 copies for seamless loop.
- Centralizing all site data in one constants.ts enables fast live edits during client meetings.
- Local-service SEO bundle that shipped: LocalBusiness + FAQPage JSON-LD, per-city areaServed, price ranges in schema, keyword-targeted metadata.
- Keep Claude working notes out of client repos (/docs gitignored after cleanup).

## 9. OPEN QUESTIONS / UNKNOWNS
- Engagement commercials: price charged, payment terms, retainer vs one-off, whether maintenance is billed.
- Chano's full name, email, preferred contact channel.
- Relationship origin (friend/referral/cold) and how client found Fathom.
- Account ownership: who owns/pays Vercel project, domain registrar/DNS, UploadThing, Formspark, Behold accounts.
- Reference sites / design inspirations used during v4 redesign.
- Client-vetoed options and unconfirmed proposals (chat history not accessible from export environment — re-export from the original Claude project to recover these).
- Whether post-2026-04-12 work is expected (site dormant since).
- Whether commit 291ca3a (CeramicPro contents change) is deployed to production.
- Any analytics/performance review commitments (Vercel Analytics installed — reporting cadence UNKNOWN).
