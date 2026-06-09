// Per-route SEO config consumed by scripts/prerender.mjs
// Each route gets a self-referencing canonical and unique title/description.
// Optional `jsonLd` array is injected as <script type="application/ld+json"> tags.

export const SITE_ORIGIN = "https://cornerstone-media.co.uk";

const ppcServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "PPC Advertising & Google Ads Management",
  "name": "PPC Agency Birmingham",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cornerstone Media",
    "url": "https://cornerstone-media.co.uk",
    "address": { "@type": "PostalAddress", "addressLocality": "Birmingham", "addressRegion": "West Midlands", "addressCountry": "GB" }
  },
  "areaServed": [
    { "@type": "City", "name": "Birmingham" },
    { "@type": "AdministrativeArea", "name": "West Midlands" }
  ],
  "description": "PPC agency in Birmingham managing Google Ads, Microsoft Ads and paid search campaigns for measurable ROI."
};

const ppcLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://cornerstone-media.co.uk/ppc-birmingham#business",
  "name": "Cornerstone Media — PPC Agency Birmingham",
  "url": "https://cornerstone-media.co.uk/ppc-birmingham",
  "telephone": "+447846798534",
  "email": "info@cornerstone-media.co.uk",
  "priceRange": "££",
  "address": { "@type": "PostalAddress", "addressLocality": "Birmingham", "addressRegion": "West Midlands", "addressCountry": "GB" },
  "geo": { "@type": "GeoCoordinates", "latitude": 52.4862, "longitude": -1.8904 },
  "areaServed": [
    { "@type": "City", "name": "Birmingham" },
    { "@type": "AdministrativeArea", "name": "West Midlands" }
  ],
  "serviceType": ["PPC Management", "Google Ads", "Paid Search", "Remarketing"]
};

const ppcFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does PPC management cost in Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "Most Birmingham businesses invest between £500 and £2,000 per month in PPC management fees, on top of their ad spend. Cornerstone Media offers transparent monthly retainers tailored to your budget and goals — there are no hidden fees and no long-term contracts." } },
    { "@type": "Question", "name": "How long until PPC delivers results in Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads campaigns can drive clicks and leads from day one. We typically see meaningful optimisation gains within 2-4 weeks as bidding, ad copy and audience data mature. Most Birmingham clients reach a stable, profitable cost-per-acquisition within 60-90 days." } },
    { "@type": "Question", "name": "Do you require long-term contracts?", "acceptedAnswer": { "@type": "Answer", "text": "No. We work on rolling 30-day agreements. Our Birmingham clients stay because the results justify it, not because they are locked in." } },
    { "@type": "Question", "name": "Do you manage Google Ads and Microsoft Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We manage paid search across Google Ads (Search, Shopping, Display, YouTube), Microsoft Advertising (Bing), and paid social on Facebook, Instagram and LinkedIn." } },
    { "@type": "Question", "name": "Will I own my Google Ads account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — always. We build PPC campaigns inside your own Google Ads account so you retain full ownership of historical data, conversion tracking and audience lists if you ever decide to move on." } },
    { "@type": "Question", "name": "What industries do you serve with PPC in Birmingham?", "acceptedAnswer": { "@type": "Answer", "text": "We run paid search campaigns for Birmingham businesses across professional services, e-commerce, healthcare, construction, trades, hospitality, education and B2B technology." } }
  ]
};

const ppcBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cornerstone-media.co.uk/" },
    { "@type": "ListItem", "position": 2, "name": "PPC Birmingham", "item": "https://cornerstone-media.co.uk/ppc-birmingham" }
  ]
};

// Visible body content snippet injected into the static HTML for crawlers
// that do not execute JS. The React app still hydrates on top.
const ppcBodyHtml = `
<main>
  <nav aria-label="Breadcrumb"><a href="/">Home</a> &rsaquo; <span>PPC Birmingham</span></nav>
  <h1>PPC Agency in Birmingham</h1>
  <p>Cornerstone Media is a specialist PPC agency in Birmingham helping local businesses generate high-quality leads and sales through expertly managed Google Ads campaigns. We combine data-driven bidding strategies with compelling ad creative to make sure every pound of your paid search Birmingham budget works harder.</p>
  <h2>Google Ads Management for Birmingham Businesses</h2>
  <p>Google Ads is the single most powerful customer-acquisition channel for most Birmingham businesses. Done well, paid search puts your business at the top of Google for the exact moments your future customers are ready to buy.</p>
  <h2>Paid Search Strategy &amp; Landing Page Optimisation</h2>
  <p>Clicks are only the first half of the equation. A great paid search Birmingham campaign sends the right person to the right page with the right message — and then makes it effortless for them to enquire or buy.</p>
  <h2>Pricing &amp; Transparency</h2>
  <p>Our PPC management fees are simple: a flat monthly retainer based on the complexity of your account, with absolutely no markup on your ad spend. Most Birmingham PPC clients invest between £500 and £2,000 per month in management fees on top of ad spend.</p>
  <h2>Areas We Serve</h2>
  <p>We run paid search campaigns for businesses based across Birmingham city centre, Solihull, Edgbaston, Digbeth, the Jewellery Quarter, Sutton Coldfield, Moseley, Harborne and the wider West Midlands.</p>
  <h2>Frequently Asked Questions</h2>
  <h3>How much does PPC management cost in Birmingham?</h3>
  <p>Most Birmingham businesses invest between £500 and £2,000 per month in PPC management fees, on top of ad spend.</p>
  <h3>How long until PPC delivers results?</h3>
  <p>Paid search can drive clicks and leads from day one. Most Birmingham clients reach a stable cost-per-acquisition within 60-90 days.</p>
  <h3>Do you require long-term contracts?</h3>
  <p>No. We work on rolling 30-day agreements.</p>
  <p><a href="/contact">Book a Free PPC Audit</a> &middot; <a href="tel:+447846798534">07846 798 534</a></p>
</main>
`;

// Route map. Path is the URL path (with leading slash). Each entry:
//   title, description, jsonLd?, bodyHtml?
export const ROUTES = {
  "/": {
    title: "Digital Marketing Birmingham | Cornerstone Media",
    description: "Cornerstone Media is Birmingham's leading digital marketing agency. Expert PPC, SEO, social media marketing, website design & maintenance. Free strategy call.",
  },
  "/services": {
    title: "Digital Marketing Services Birmingham | Cornerstone Media",
    description: "Full-service digital marketing in Birmingham: PPC, SEO, social media, website design, content writing and website maintenance. Transparent pricing, local team.",
  },
  "/about": {
    title: "About Cornerstone Media | Birmingham Marketing Agency",
    description: "Meet Cornerstone Media — a Birmingham-based digital marketing agency built on honest advice, measurable results and senior-led campaign management.",
  },
  "/meet-the-team": {
    title: "Meet the Team | Cornerstone Media Birmingham",
    description: "The senior digital marketing team behind Cornerstone Media in Birmingham. Real specialists running your PPC, SEO, social media and web design projects.",
  },
  "/contact": {
    title: "Contact Cornerstone Media | Birmingham Marketing Agency",
    description: "Get in touch with Cornerstone Media in Birmingham. Call 07846 798 534 or send a message for a free digital marketing strategy call.",
  },
  "/thank-you": {
    title: "Thank You | Cornerstone Media",
    description: "Thanks for getting in touch. A member of the Cornerstone Media team will be in contact shortly.",
  },
  "/ppc-birmingham": {
    title: "PPC Agency Birmingham | Google Ads Management | Cornerstone Media",
    description: "Birmingham PPC agency delivering profitable Google Ads campaigns. Transparent pricing, no long contracts, local experts. Book a free PPC audit today.",
    jsonLd: [ppcServiceSchema, ppcLocalBusinessSchema, ppcFAQSchema, ppcBreadcrumbSchema],
    bodyHtml: ppcBodyHtml,
  },
  "/seo-birmingham": {
    title: "SEO Agency Birmingham | Local SEO Experts | Cornerstone Media",
    description: "Birmingham SEO agency helping local businesses rank higher on Google. Technical SEO, local SEO and content strategy. Book a free SEO audit today.",
  },
  "/social-media-marketing-birmingham": {
    title: "Social Media Marketing Birmingham | Cornerstone Media",
    description: "Birmingham social media marketing agency running Facebook, Instagram and LinkedIn campaigns that drive real engagement and leads.",
  },
  "/website-design-birmingham": {
    title: "Website Design Birmingham | Web Designers | Cornerstone Media",
    description: "Birmingham web design agency building fast, conversion-focused websites. WordPress, e-commerce and small business sites. Free design consultation.",
  },
  "/content-writing": {
    title: "Content Writing Services Birmingham | Cornerstone Media",
    description: "SEO content writing services for Birmingham businesses. Blog posts, service pages and landing pages written by UK copywriters that rank and convert.",
  },
  "/website-maintenance": {
    title: "Website Maintenance Birmingham | Cornerstone Media",
    description: "Reliable website maintenance and support for Birmingham businesses. Updates, security, backups, hosting and on-demand fixes from one local team.",
  },
  "/local-seo-birmingham": {
    title: "Local SEO Birmingham | Google Maps Ranking | Cornerstone Media",
    description: "Local SEO services in Birmingham. Rank in the Google Map Pack, win local searches and dominate Birmingham postcodes. Free local SEO audit.",
  },
  "/technical-seo-birmingham": {
    title: "Technical SEO Birmingham | Site Audits | Cornerstone Media",
    description: "Technical SEO experts in Birmingham. Site audits, Core Web Vitals, crawl issues, indexing fixes and schema implementation that lift rankings.",
  },
  "/seo-audit-birmingham": {
    title: "Free SEO Audit Birmingham | Cornerstone Media",
    description: "Free in-depth SEO audit for Birmingham businesses. Identify ranking issues, competitor gaps and quick wins from a senior SEO specialist.",
  },
  "/google-ads-management-birmingham": {
    title: "Google Ads Management Birmingham | Cornerstone Media",
    description: "Specialist Google Ads management in Birmingham. Search, Shopping, Performance Max and YouTube campaigns built for ROI. No long contracts.",
  },
  "/ppc-management-birmingham": {
    title: "PPC Management Birmingham | Paid Search Experts | Cornerstone Media",
    description: "Full-service PPC management in Birmingham across Google, Microsoft and paid social. Transparent monthly retainers, senior-led account management.",
  },
  "/remarketing-ads-birmingham": {
    title: "Remarketing Ads Birmingham | Retargeting | Cornerstone Media",
    description: "Remarketing and retargeting campaigns for Birmingham businesses. Re-engage previous visitors across Google, Facebook and Instagram.",
  },
  "/facebook-ads-birmingham": {
    title: "Facebook Ads Birmingham | Meta Ads Agency | Cornerstone Media",
    description: "Facebook and Instagram ads agency in Birmingham. Lead generation, e-commerce and brand campaigns managed by Meta ads specialists.",
  },
  "/instagram-marketing-birmingham": {
    title: "Instagram Marketing Birmingham | Cornerstone Media",
    description: "Instagram marketing for Birmingham businesses. Organic strategy, paid ads, reels and influencer outreach handled by a senior local team.",
  },
  "/linkedin-ads-birmingham": {
    title: "LinkedIn Ads Birmingham | B2B Lead Generation | Cornerstone Media",
    description: "LinkedIn ads management in Birmingham. B2B lead generation, ABM and thought-leadership campaigns built for measurable pipeline.",
  },
  "/wordpress-web-design-birmingham": {
    title: "WordPress Web Design Birmingham | Cornerstone Media",
    description: "WordPress web design agency in Birmingham. Fast, secure, conversion-focused WordPress sites built and supported by a local team.",
  },
  "/ecommerce-website-design-birmingham": {
    title: "E-commerce Website Design Birmingham | Cornerstone Media",
    description: "E-commerce web design in Birmingham. WooCommerce and Shopify stores built to sell, optimised for mobile, speed and conversion.",
  },
  "/small-business-web-design-birmingham": {
    title: "Small Business Web Design Birmingham | Cornerstone Media",
    description: "Affordable small business web design in Birmingham. Professional, mobile-first websites built quickly without compromising on quality.",
  },
  "/digital-marketing-solihull": {
    title: "Digital Marketing Solihull | Cornerstone Media",
    description: "Digital marketing agency serving Solihull. PPC, SEO, social media and web design for Solihull businesses from a senior local team.",
  },
  "/digital-marketing-sutton-coldfield": {
    title: "Digital Marketing Sutton Coldfield | Cornerstone Media",
    description: "Digital marketing for Sutton Coldfield businesses. PPC, SEO, social media and websites delivered by a Birmingham-based senior team.",
  },
  "/digital-marketing-wolverhampton": {
    title: "Digital Marketing Wolverhampton | Cornerstone Media",
    description: "Wolverhampton digital marketing agency. PPC, SEO, social media and web design tailored to Wolverhampton and Black Country businesses.",
  },
  "/digital-marketing-walsall": {
    title: "Digital Marketing Walsall | Cornerstone Media",
    description: "Walsall digital marketing experts. PPC, SEO, social media and websites that drive real enquiries for Walsall businesses.",
  },
  "/digital-marketing-dudley": {
    title: "Digital Marketing Dudley | Cornerstone Media",
    description: "Digital marketing agency for Dudley businesses. PPC, SEO, social media and web design from a senior West Midlands team.",
  },
  "/digital-marketing-west-bromwich": {
    title: "Digital Marketing West Bromwich | Cornerstone Media",
    description: "West Bromwich digital marketing agency offering PPC, SEO, social media and web design for local businesses across Sandwell.",
  },
  "/news": {
    title: "News & Insights | Cornerstone Media Birmingham",
    description: "Digital marketing news, guides and insights from the Cornerstone Media team in Birmingham. PPC, SEO, social media and web design.",
  },
};
