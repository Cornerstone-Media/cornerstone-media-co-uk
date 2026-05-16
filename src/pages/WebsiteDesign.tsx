import { Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const webDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Website Design",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cornerstone Media",
    "url": "https://cornerstone-media.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    }
  },
  "areaServed": { "@type": "City", "name": "Birmingham" },
  "description": "Professional website design and development for Birmingham businesses. Conversion-focused, mobile-responsive websites built for speed, SEO, and results."
};

const webDesignFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website costs vary depending on complexity, number of pages, and functionality required. Cornerstone Media offers competitive packages for Birmingham businesses. Contact us for a free consultation and quote."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to design and build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical website project takes 4-8 weeks from discovery to launch. More complex projects with custom functionality may take longer. We provide a clear timeline during our initial consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Will my website be mobile-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Every website we build is fully responsive and mobile-first, ensuring a flawless experience across smartphones, tablets, and desktops."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer website maintenance after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer ongoing website maintenance packages that include security updates, performance monitoring, content updates, and technical support."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cornerstone-media.co.uk/" },
    { "@type": "ListItem", "position": 2, "name": "Website Design Birmingham", "item": "https://cornerstone-media.co.uk/website-design-birmingham" }
  ]
};

const WebsiteDesign = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Website Design Birmingham | Web Design Agency | Cornerstone Media"
      description="Website design Birmingham agency building fast, mobile-responsive websites that rank and convert. Free consultation — call 07846 798 534."
      canonical="https://cornerstone-media.co.uk/website-design-birmingham"
      schema={[webDesignSchema, webDesignFAQSchema, breadcrumbSchema]}
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Palette}
        title="Website Design Birmingham"
        subtitle="Web Design & Development"
        description="Cornerstone Media is a specialist website design agency in Birmingham creating beautiful, conversion-focused websites that help local businesses attract more customers, generate more enquiries, and grow online. Every website we build is crafted with modern technology, optimised for search engines, and designed to deliver measurable business results."
        benefits={[
          "Conversion-focused design methodology that strategically guides visitors towards enquiry forms, phone calls, and purchases",
          "Fully responsive, mobile-first development ensuring your website looks and performs flawlessly on every device and screen size",
          "Lightning-fast page load speeds through optimised code, compressed images, and modern hosting — targeting sub-2-second load times",
          "SEO-friendly architecture with clean URLs, proper heading structures, schema markup, and technical foundations for organic growth",
          "Accessible design that meets WCAG guidelines, ensuring your Birmingham website is usable by everyone including people with disabilities",
          "Custom design — no templates or themes. Every website is uniquely designed to reflect your brand identity and stand out from competitors",
          "Intuitive content management systems that let you update text, images, and pages without needing any technical knowledge",
          "Integrated analytics and conversion tracking setup so you can measure your website's performance from day one",
        ]}
        detailedSections={[
          {
            heading: "Why Your Birmingham Business Needs a Professional Website",
            paragraphs: [
              "Your website is often the first impression potential customers have of your Birmingham business. Research consistently shows that users form an opinion about a website within 50 milliseconds — and that opinion directly influences whether they trust your business enough to enquire or buy. A professionally designed website builds instant credibility, while a poorly designed one drives potential customers straight to your competitors.",
              "In Birmingham's competitive marketplace, a website isn't just a digital brochure — it's your hardest-working sales tool. A well-designed website works around the clock, generating enquiries and sales 24 hours a day, 7 days a week. It ranks in Google, captures leads through strategic calls-to-action, and nurtures potential customers through your buying journey. When done right, your website delivers the highest return on investment of any marketing channel.",
              "At Cornerstone Media, we design websites with one primary objective: converting visitors into customers. Every design decision — from the colour palette and typography to the page layout and navigation structure — is made with conversion in mind. We don't just make websites look good; we make them perform.",
            ],
          },
          {
            heading: "Our Website Design Process",
            paragraphs: [
              "We follow a structured, collaborative design process that ensures your website meets your business objectives while exceeding your expectations for quality and design. It begins with a comprehensive discovery session where we learn about your brand, target audience, competitors, and goals. We review your existing website analytics, identify what's working and what isn't, and develop a detailed project brief that guides the entire build.",
              "The design phase starts with wireframes — structural layouts that define the page hierarchy, content placement, and user flow without visual design. Once wireframes are approved, we create high-fidelity design mockups that bring your brand to life with custom typography, colour palettes, imagery, and interactive elements. You'll see exactly how your website will look before a single line of code is written.",
              "Development is where design becomes reality. Our developers build your website using clean, semantic code that's optimised for speed and search engines. We implement responsive breakpoints for every device, integrate analytics tracking, set up forms and lead capture, and conduct thorough cross-browser testing. Before launch, we perform comprehensive quality assurance including performance audits, accessibility checks, and SEO verification.",
            ],
          },
        ]}
        topics={[
          { title: "Bespoke Website Design", description: "Every website we create is designed from scratch specifically for your Birmingham business. No templates, no page builders, no compromise. Custom designs that perfectly capture your brand identity and differentiate you from competitors in your market." },
          { title: "E-commerce Website Development", description: "Online stores built for conversion with intuitive product navigation, secure checkout processes, inventory management, and payment gateway integration. We create e-commerce websites that make it easy for Birmingham customers to browse and buy." },
          { title: "WordPress Development", description: "Custom WordPress websites built on clean, secure foundations with intuitive admin interfaces. We develop bespoke themes and extend WordPress functionality with custom plugins to meet your specific business requirements." },
          { title: "Landing Page Design", description: "High-converting landing pages designed for specific campaigns, products, or services. Optimised for paid traffic from Google Ads and social media, with A/B testing capability to continuously improve conversion rates." },
          { title: "Website Redesign", description: "Comprehensive website redesigns that modernise your online presence without losing existing SEO equity. We migrate content, redirect URLs, and improve information architecture to enhance both user experience and search performance." },
          { title: "Performance Optimisation", description: "Speed-focused development using optimised images, efficient code, lazy loading, and modern caching strategies. We target a perfect Core Web Vitals score to improve both user experience and Google rankings." },
        ]}
        whyBirmingham={{
          heading: "Website Design Tailored for Birmingham Businesses",
          paragraphs: [
            "As a Birmingham-based web design agency, we understand the local market intimately. We've designed websites for businesses across every Birmingham sector — from professional services firms in Colmore Row to independent retailers in the Custard Factory, from restaurants in Brindleyplace to tradespeople serving Solihull, Edgbaston, and Sutton Coldfield. This local experience means we understand what Birmingham customers expect and how to design websites that resonate with them.",
            "Local businesses face unique challenges online. You're competing not just with other Birmingham businesses, but with national and international brands who have bigger budgets. That's why our website designs are strategically built to compete — with local SEO foundations, Google Business Profile integration, location-specific content, and trust signals that establish your credibility within the Birmingham community.",
            "Working with a local web design agency means genuine partnership. You can visit our team, review progress face-to-face, and collaborate closely throughout the project. We're invested in Birmingham's business community and take pride in helping local companies grow through exceptional web design.",
          ],
        }}
        processSteps={[
          { title: "Discovery & Brief", description: "We learn about your brand, audience, and objectives through a detailed discovery session. We review competitors and define the project scope, timeline, and deliverables." },
          { title: "Design & Prototype", description: "We create wireframes for page structure, then produce high-fidelity visual designs for your review. You'll see and approve every page before we start building." },
          { title: "Develop & Test", description: "Our developers build your site with clean, performant code. We implement responsive design, analytics, and integrations, then test across all devices and browsers." },
          { title: "Launch & Support", description: "We deploy your website, configure hosting and SSL, submit to Google, and provide training on content management. Ongoing support and maintenance packages available." },
        ]}
        toolsAndPlatforms={{
          heading: "Technologies & Platforms We Use",
          tools: ["React", "Next.js", "WordPress", "WooCommerce", "Shopify", "Figma", "Tailwind CSS", "TypeScript", "Google Analytics 4", "Google Tag Manager", "Cloudflare", "Vercel", "Adobe XD", "Hotjar"],
        }}
        caseStudies={[
          { title: "Birmingham Professional Services Firm", result: "187% More Enquiries", description: "Redesigned a Birmingham law firm's website with conversion-optimised layouts, clear CTAs, and improved mobile experience. Online enquiries increased by 187% within three months of launch." },
          { title: "West Midlands E-commerce Launch", result: "£120K First Year Revenue", description: "Designed and developed a custom e-commerce website for a Birmingham-based product company, achieving £120K in online revenue during the first 12 months with a 4.2% conversion rate." },
          { title: "Local Restaurant Group", result: "62% Bounce Rate Reduction", description: "Created a visually stunning, fast-loading website for a Birmingham restaurant group with integrated booking, menu management, and location pages. Bounce rate dropped by 62% and online reservations doubled." },
        ]}
        faqs={[
          { question: "How much does a website cost in Birmingham?", answer: "Website costs depend on complexity, functionality, and the number of pages. A professional brochure website typically starts from a few thousand pounds, while e-commerce and custom web applications cost more. We provide detailed, transparent quotes after an initial consultation." },
          { question: "How long does it take to design and build a website?", answer: "A typical website project takes 4-8 weeks from initial discovery to launch. More complex projects with custom functionality, e-commerce integration, or extensive content may take 8-12 weeks. We provide a clear timeline and milestone schedule at the start of every project." },
          { question: "Will my website be mobile-friendly?", answer: "Every website we build is fully responsive and designed mobile-first. We test across a comprehensive range of devices and browsers to ensure a flawless experience whether your visitors are on iPhone, Android, iPad, or desktop." },
          { question: "Do you offer website maintenance after launch?", answer: "Yes. We offer ongoing website maintenance packages that include security updates, performance monitoring, content updates, backups, and technical support. Our website maintenance Birmingham service ensures your site stays fast, secure, and up-to-date." },
          { question: "Will my website be optimised for Google?", answer: "Absolutely. SEO is built into every website from the ground up. We implement proper heading structures, meta tags, schema markup, image optimisation, site speed best practices, and clean URL structures. For ongoing SEO, our SEO Birmingham team can help you rank for your target keywords." },
          { question: "Can I update the website content myself?", answer: "Yes. We build websites with user-friendly content management systems and provide training so you can update text, images, blog posts, and pages independently. If you'd prefer us to handle updates, our maintenance packages include content change requests." },
        ]}
        relatedServices={[
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Maximise your new website's visibility with ongoing search engine optimisation. Our SEO Birmingham services ensure your website ranks for the keywords that matter to your business." },
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Drive immediate traffic to your new website with targeted Google Ads campaigns managed by our PPC Birmingham specialists." },
          { name: "Website Maintenance Birmingham", path: "/website-maintenance", description: "Keep your website secure, fast, and up-to-date with our ongoing maintenance and support packages for Birmingham businesses." },
          { name: "WordPress Web Design Birmingham", path: "/wordpress-web-design-birmingham", description: "Custom WordPress websites built for Birmingham businesses with intuitive content management and SEO-friendly architecture." },
          { name: "E-commerce Website Design Birmingham", path: "/ecommerce-website-design-birmingham", description: "Online stores built for conversion with secure checkout, inventory management, and payment gateway integration." },
          { name: "Small Business Web Design Birmingham", path: "/small-business-web-design-birmingham", description: "Affordable, professional website design packages tailored for small businesses and startups in Birmingham." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default WebsiteDesign;
