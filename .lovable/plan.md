
# Goal
Rank `/ppc-birmingham` on page 1 of Google for "PPC Birmingham" and "PPC agency Birmingham" by fixing per-route meta, adding static prerendering, expanding on-page content, hardening structured data, improving internal links, and tightening technical SEO.

## Current state (confirmed by reading the code)

- `react-helmet-async` is already installed and wired in `src/main.tsx`. `SEOHead` already renders per-route title/description/canonical/og/twitter/JSON-LD.
- `src/pages/PPC.tsx` already sets a correct self-referencing canonical `https://cornerstone-media.co.uk/ppc-birmingham`, a unique title, and three JSON-LD blocks (Service + FAQPage + BreadcrumbList).
- Problem #1: `index.html` hard-codes the homepage title, description, canonical (`/`), og:url, and og:title/desc/image. Crawlers that don't run JS (LinkedIn, Slack, Facebook, and Googlebot's first pass) see the homepage head on every route. This is the single biggest blocker.
- Problem #2: The app is a client-rendered Vite SPA — no prerendering, so initial HTML for `/ppc-birmingham` contains zero of the page copy or its per-route head.
- `public/sitemap.xml` and `public/robots.txt` already exist and are correct.
- PPC page copy is already strong; needs explicit H2 structure, a visible breadcrumb component, an inline CTA section, and a couple of natural mentions of "paid search Birmingham" / extra Birmingham areas to hit the keyword brief.

## Changes

### 1. Strip duplicate head tags from `index.html`
Remove from `index.html` so per-route Helmet wins for every crawler:
- `<title>`, `<meta name="description">`, `<meta name="keywords">`
- `<link rel="canonical">`
- `<meta property="og:title|og:description|og:url|og:image*>`, `<meta name="twitter:*>`

Keep: charset, viewport, GTM, geo meta, font preloads, Google site verification, sitewide ProfessionalService JSON-LD, `og:type`, `og:locale`, `og:site_name`. These are safe sitewide defaults.

### 2. Add per-route SEO to every remaining page
Audit every route in `src/App.tsx` and ensure each has a `<SEOHead>` with a unique title (<60 chars), unique meta description (<160 chars), and self-referencing canonical. Most service pages already do — sweep `Index.tsx`, `Services.tsx`, `About.tsx`, `MeetTheTeam.tsx`, `Contact.tsx`, `ThankYou.tsx`, `News.tsx`, `BlogPost.tsx`, `ContentWriting.tsx`, `WebsiteMaintenance.tsx` and any location/supporting page missing one.

### 3. Static prerendering at build time
Add `vite-plugin-prerender` (Puppeteer-based, works with react-helmet-async). Configure it in `vite.config.ts` to crawl every route listed in `sitemap.xml`. Output: each route gets its own `index.html` in `dist/` with the rendered head + body HTML, so crawlers see meta tags and content without executing JS. Hosting SPA fallback continues to work for client navigation.

Add a small `scripts/prerender-routes.ts` that reads `public/sitemap.xml` and feeds the URL list to the plugin so the two sources stay in sync.

### 4. PPC page content uplift (`src/pages/PPC.tsx` + `ServicePageLayout`)
- Confirm a single visible `<h1>` "PPC Agency in Birmingham" (the layout currently renders the `title` prop as h1 — verify and keep one only).
- Ensure H2s cover: Google Ads management, paid search strategy, landing page optimisation, who we work with (Birmingham & West Midlands), our process, pricing & transparency, results/case studies, FAQs.
- Insert a new short section "Paid search Birmingham — areas we serve" naming city centre, Solihull, Edgbaston, Digbeth, Jewellery Quarter, Sutton Coldfield, wider West Midlands. Use the exact phrases "PPC Birmingham", "PPC agency Birmingham", "Google Ads agency Birmingham", "paid search Birmingham" naturally; target 800–1,200 words total.
- Add an inline CTA block above the footer: heading "Book a free PPC audit", short paragraph, primary button → `/contact`, secondary phone link. Reuse existing `CTASection` styling.
- Add a visible `Breadcrumb` (shadcn `ui/breadcrumb`) at the top of the page body: Home → PPC Birmingham. Matches the existing BreadcrumbList JSON-LD.
- Keep all copy in UK English.
- Schema already covers Service + FAQPage + BreadcrumbList. Add a fourth: `LocalBusiness`/`ProfessionalService` with `name`, `url`, `telephone`, `address`, `geo`, `areaServed: Birmingham`, scoped to this page.

### 5. Internal linking
- `HeroSection.tsx` already links "PPC Birmingham" in body copy — keep.
- `SEO.tsx` and `SocialMedia.tsx`: add one in-copy link to `/ppc-birmingham` with anchor "PPC agency in Birmingham" inside an existing paragraph (not just the related-services grid).
- `Index.tsx`: add one in-body paragraph link with anchor "PPC agency in Birmingham" outside the hero (e.g. inside `ServicesOverview` intro).

### 6. Technical
- `sitemap.xml`: bump `<lastmod>` to today's date on every entry.
- `robots.txt`: already references the sitemap — no change.
- Sweep `<img>` tags across service pages and ensure descriptive `alt` text; for PPC page specifically use Birmingham-relevant alts where genuinely accurate.
- Add `loading="lazy"` + explicit `width`/`height` to below-the-fold images on PPC + homepage to prevent CLS. Hero image already uses `loading="eager"` + `fetchPriority="high"` — keep.

## Technical notes

- `vite-plugin-prerender` uses headless Chromium; build will be slower (~30–60s for ~35 routes) but produces real static HTML per route. Acceptable trade-off for SEO.
- Helmet's `<link rel="canonical">` and Helmet `<title>` correctly dedupe by attribute, so removing the static `index.html` ones means prerender output has exactly one of each per route.
- No backend changes, no schema changes, no auth changes.

## Verification

After build, spot-check `dist/ppc-birmingham/index.html`:
- `<title>` = "PPC Agency Birmingham | Google Ads Management | Cornerstone Media"
- `<link rel="canonical" href="https://cornerstone-media.co.uk/ppc-birmingham">`
- Body contains the H1, H2 sections, FAQ text, breadcrumb
- All four JSON-LD blocks present
Repeat for `dist/seo-birmingham/index.html`, `dist/index.html` (homepage).
After publish, request indexing in Google Search Console for `/ppc-birmingham`.
