import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const SEOAuditBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="SEO Audit Birmingham | Free Website SEO Analysis | Cornerstone Media"
      description="Professional SEO audit for Birmingham businesses. We analyse your website's technical health, content quality, backlinks, and competitors to identify exactly how to improve your rankings."
      canonical="https://cornerstonemedialtd.com/seo-audit-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Search}
        title="SEO Audit Birmingham"
        subtitle="Comprehensive SEO Analysis"
        description="A thorough SEO audit is the essential first step to improving your search rankings. Cornerstone Media provides detailed, actionable SEO audits for Birmingham businesses, analysing every factor that influences your Google visibility — from technical health and content quality to backlink authority and competitive positioning."
        benefits={[
          "Complete technical health check covering crawlability, indexation, site speed, mobile usability, and structured data implementation",
          "Content quality assessment evaluating keyword targeting, topical coverage, duplicate content, and content gaps versus competitors",
          "Backlink profile analysis reviewing link quality, anchor text distribution, toxic links, and opportunities for new link acquisition",
          "Competitor benchmarking comparing your domain authority, keyword visibility, and content strategy against Birmingham competitors",
          "Prioritised action plan with clear impact scores and effort estimates for every recommendation, from quick wins to strategic improvements",
          "Google Search Console and Analytics review identifying traffic trends, indexation issues, and ranking opportunities",
        ]}
        detailedSections={[
          {
            heading: "Why Every Birmingham Business Needs an SEO Audit",
            paragraphs: [
              "An SEO audit is like a health check for your website's search visibility. Without one, you are essentially guessing at what might be preventing your business from ranking higher in Google. Businesses that invest in content and link building without first addressing underlying technical and structural issues often find their efforts produce disappointing results — wasting time and money on tactics that cannot work because the foundations are broken.",
              "For Birmingham businesses competing in increasingly crowded markets, an SEO audit identifies the specific opportunities and barriers unique to your website and industry. It reveals why competitors outrank you, which keywords represent the best opportunities for growth, and exactly what changes will deliver the fastest improvements. The audit transforms SEO from guesswork into a precise, data-driven plan.",
              "At Cornerstone Media, our SEO audits are comprehensive and actionable. We do not deliver generic reports filled with jargon and automated scores. Every finding is accompanied by a clear explanation of why it matters, how it affects your rankings, and exactly what needs to be done to fix it. Our audit becomes your roadmap to search visibility.",
            ],
          },
          {
            heading: "What Our SEO Audit Covers",
            paragraphs: [
              "Our audit begins with a complete technical crawl of your website examining every URL, redirect, status code, meta tag, heading structure, image, and internal link. We check for crawlability blockers, indexation issues, duplicate content, broken links, slow-loading pages, and any other technical factors that could harm your rankings.",
              "We then analyse your content against your target keyword opportunities. This involves reviewing each important page for keyword relevance, content depth, heading structure, internal linking, and user engagement signals. We compare your content coverage against top-ranking competitors to identify topical gaps that represent growth opportunities.",
              "The backlink analysis examines your website's link profile for quality, relevance, diversity, and any potentially harmful links that could trigger Google penalties. We benchmark your domain authority against direct competitors and identify realistic link building opportunities within the Birmingham market and your specific industry.",
            ],
          },
        ]}
        topics={[
          { title: "Technical Health Assessment", description: "Deep analysis of crawlability, indexation, site speed, Core Web Vitals, mobile usability, HTTPS implementation, and structured data to identify every technical barrier to ranking." },
          { title: "Content Gap Analysis", description: "Comparison of your content coverage against competitors to identify missing topics, underdeveloped pages, and keyword opportunities you are not currently targeting." },
          { title: "Backlink Profile Review", description: "Assessment of your link profile quality, anchor text distribution, referring domain diversity, and identification of toxic links that may need disavowing." },
          { title: "Competitor Benchmarking", description: "Side-by-side comparison with your top Birmingham competitors covering domain authority, keyword overlap, content strategy, and link building activity." },
        ]}
        processSteps={[
          { title: "Data Collection", description: "We gather data from Google Search Console, Analytics, crawl tools, and backlink databases to build a complete picture." },
          { title: "Deep Analysis", description: "Our specialists analyse technical, content, and authority signals, identifying every issue and opportunity." },
          { title: "Prioritised Report", description: "We deliver a clear, jargon-free report with prioritised recommendations ranked by impact and effort." },
          { title: "Strategy Session", description: "We walk you through the findings and agree on an action plan to implement the highest-impact improvements first." },
        ]}
        faqs={[
          { question: "How long does an SEO audit take?", answer: "A comprehensive SEO audit for a typical Birmingham business website takes 5-10 working days. Larger websites with hundreds or thousands of pages may require additional time for thorough analysis." },
          { question: "What do I receive from an SEO audit?", answer: "You receive a detailed written report covering technical health, content quality, backlink analysis, and competitor benchmarking, along with a prioritised action plan and a strategy review call with our team." },
          { question: "Is your SEO audit free?", answer: "We offer a complimentary initial SEO health check that highlights the most critical issues. Our comprehensive paid audit provides a full deep-dive analysis with detailed recommendations." },
          { question: "Do I need to be technical to understand the audit?", answer: "Not at all. We write our audits in clear, plain language with visual examples. Every recommendation includes a simple explanation of why it matters and what action is needed." },
        ]}
        relatedServices={[
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Implement your audit recommendations with our ongoing SEO services for sustained ranking growth." },
          { name: "Technical SEO Birmingham", path: "/technical-seo-birmingham", description: "Fix the technical issues uncovered in your audit with specialist technical SEO implementation." },
          { name: "Local SEO Birmingham", path: "/local-seo-birmingham", description: "Improve your local search visibility with Google Business Profile optimisation and local content strategy." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default SEOAuditBirmingham;
