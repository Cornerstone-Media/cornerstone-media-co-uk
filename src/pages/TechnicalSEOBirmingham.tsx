import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const TechnicalSEOBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Technical SEO Birmingham | Site Speed & Crawlability | Cornerstone Media"
      description="Technical SEO services in Birmingham. We fix crawlability, indexation, Core Web Vitals, and site architecture issues that prevent your website from ranking in Google."
      canonical="https://cornerstone-media.co.uk/technical-seo-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Search}
        title="Technical SEO Birmingham"
        subtitle="Technical Search Optimisation"
        description="Cornerstone Media provides specialist technical SEO services for Birmingham businesses. We identify and resolve the crawlability, indexation, site speed, and structural issues that prevent your website from achieving its true ranking potential in Google search results."
        benefits={[
          "Comprehensive crawlability analysis using Screaming Frog and Google Search Console to identify pages blocked from indexing",
          "Core Web Vitals optimisation targeting Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint metrics",
          "Site architecture restructuring to improve internal link equity distribution and create clear topical hierarchies for search engines",
          "Schema markup implementation including LocalBusiness, Service, FAQ, and BreadcrumbList structured data for rich search results",
          "Mobile-first indexing compliance ensuring your website meets Google's mobile usability standards across all devices",
          "XML sitemap generation and robots.txt configuration to guide Googlebot efficiently through your most important pages",
        ]}
        detailedSections={[
          {
            heading: "What Is Technical SEO and Why Does Your Birmingham Business Need It?",
            paragraphs: [
              "Technical SEO refers to the behind-the-scenes optimisations that ensure search engines can effectively crawl, index, render, and understand your website. Even the most beautifully written content will fail to rank if Google cannot access it properly, if pages load too slowly, or if the site structure creates confusion about which pages are most important. Technical SEO eliminates these barriers.",
              "Many Birmingham businesses invest in content creation and link building without realising that technical issues are silently undermining their efforts. Common problems include duplicate content created by URL parameters, orphan pages that lack internal links, crawl budget waste on low-value pages, slow server response times, and broken redirect chains. Each of these issues reduces your website's ability to compete in search results.",
              "Our technical SEO specialists conduct deep-dive audits that go far beyond surface-level checks. We examine every technical aspect of your website — from HTTP headers and server configuration to JavaScript rendering and structured data validation — to create a comprehensive remediation plan that unlocks your site's ranking potential.",
            ],
          },
          {
            heading: "Our Technical SEO Methodology",
            paragraphs: [
              "We begin every technical SEO engagement with a full crawl of your website using industry-leading tools including Screaming Frog, Google Search Console, and Chrome DevTools. This crawl reveals your site's complete architecture, internal link structure, page performance metrics, and any technical errors that need resolution.",
              "Our analysis covers indexation health (are the right pages indexed and the wrong pages excluded?), crawl efficiency (is Googlebot spending its crawl budget on your most valuable pages?), rendering integrity (does JavaScript content load correctly for search engines?), and performance metrics (do your pages meet Google's Core Web Vitals thresholds?). Each finding is prioritised by impact and effort, creating a clear action plan.",
              "Implementation is handled collaboratively with your development team, or we can execute changes directly if you prefer. We provide detailed technical specifications for every recommendation, ensuring changes are implemented correctly and measured for impact. Post-implementation, we monitor Google Search Console for improvements in crawl stats, indexation, and ranking positions.",
            ],
          },
        ]}
        topics={[
          { title: "Crawlability & Indexation", description: "Ensuring Googlebot can discover and index all your important pages while excluding thin, duplicate, or low-value pages. We fix crawl errors, configure robots.txt, and manage XML sitemaps for optimal crawl efficiency." },
          { title: "Core Web Vitals", description: "Optimising Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) to meet Google's page experience requirements and improve both rankings and user experience." },
          { title: "Site Architecture", description: "Restructuring your website's information architecture to create clear topical clusters, efficient internal linking, and logical URL hierarchies that help search engines understand your content relationships." },
          { title: "Schema & Structured Data", description: "Implementation of JSON-LD structured data markup for LocalBusiness, Service, FAQ, BreadcrumbList, and other relevant schema types to earn rich search result features." },
        ]}
        whyBirmingham={{
          heading: "Technical SEO for Birmingham's Competitive Market",
          paragraphs: [
            "In Birmingham's competitive digital landscape, technical SEO can be the differentiator between a website that ranks on page one and one that languishes on page three. When multiple businesses target similar keywords with comparable content and backlink profiles, Google's algorithm often relies on technical signals — page speed, mobile usability, structured data, and crawl efficiency — to determine rankings.",
            "As a Birmingham-based agency, we work directly with local businesses to audit, repair, and optimise their websites' technical foundations. Our team provides hands-on support, clear communication, and practical solutions that deliver measurable ranking improvements.",
          ],
        }}
        processSteps={[
          { title: "Technical Crawl", description: "Full website crawl analysing every URL, redirect, status code, and internal link to map your site's technical landscape." },
          { title: "Prioritised Audit", description: "We produce a prioritised audit report ranking each issue by impact and effort, with detailed remediation instructions." },
          { title: "Implementation", description: "We execute fixes directly or provide detailed specs for your developers, covering all critical and high-impact issues." },
          { title: "Validation", description: "Post-fix monitoring in Google Search Console to confirm improved crawl stats, indexation, and ranking performance." },
        ]}
        faqs={[
          { question: "What is the difference between technical SEO and on-page SEO?", answer: "Technical SEO focuses on how search engines crawl and index your site (speed, architecture, structured data), while on-page SEO optimises individual page content (titles, headings, copy). Both are essential for rankings." },
          { question: "How do I know if my site has technical SEO problems?", answer: "Common symptoms include pages not being indexed in Google, slow page load times, declining organic traffic despite content investment, and warnings in Google Search Console. A professional technical audit reveals all hidden issues." },
          { question: "Can technical SEO alone improve my rankings?", answer: "Resolving technical issues removes barriers to ranking and often produces immediate improvements. However, the strongest SEO results come from combining technical fixes with quality content and authoritative backlinks." },
          { question: "How often should a technical SEO audit be performed?", answer: "We recommend a comprehensive technical audit at least twice per year, with ongoing monitoring through Google Search Console. Major website changes or redesigns should always include a technical SEO review." },
        ]}
        relatedServices={[
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Full-spectrum SEO services including technical, on-page, and off-page optimisation for Birmingham businesses." },
          { name: "Local SEO Birmingham", path: "/local-seo-birmingham", description: "Dominate Birmingham's local search results with Google Business Profile optimisation and local content strategy." },
          { name: "SEO Audit Birmingham", path: "/seo-audit-birmingham", description: "Comprehensive SEO audit covering technical, content, and backlink analysis with prioritised recommendations." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default TechnicalSEOBirmingham;
