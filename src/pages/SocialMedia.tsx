import { Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const socialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Social Media Marketing",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cornerstone Media",
    "url": "https://cornerstonemedialtd.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    }
  },
  "areaServed": { "@type": "City", "name": "Birmingham" },
  "description": "Strategic social media marketing services for Birmingham businesses. Paid social campaigns, content creation, and community management across all major platforms."
};

const socialFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which social media platforms are best for Birmingham businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your audience. Facebook and Instagram work well for B2C businesses, LinkedIn is essential for B2B, and TikTok is growing rapidly for brands targeting younger demographics. We help you identify the right mix."
      }
    },
    {
      "@type": "Question",
      "name": "How much does social media management cost in Birmingham?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Social media management costs vary based on the number of platforms, posting frequency, ad spend, and content requirements. Contact Cornerstone Media for a tailored quote."
      }
    },
    {
      "@type": "Question",
      "name": "Do you create the content for social media posts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our team handles everything from content ideation and copywriting to graphic design and video editing. We create platform-specific content that engages your Birmingham audience."
      }
    }
  ]
};

const SocialMedia = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Social Media Marketing Birmingham | Social Media Agency | Cornerstone Media"
      description="Social media marketing agency in Birmingham. Paid social campaigns on Facebook, Instagram, LinkedIn & TikTok. Content creation and community management. Free consultation."
      canonical="https://cornerstonemedialtd.com/social-media"
      schema={socialFAQSchema}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(socialSchema) }} />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Share2}
        title="Social Media Marketing Birmingham"
        subtitle="Social Media Management & Advertising"
        description="Cornerstone Media is a specialist social media marketing agency in Birmingham helping local businesses build engaged audiences, drive brand awareness, and generate measurable conversions through strategic campaigns across Facebook, Instagram, LinkedIn, and TikTok."
        benefits={[
          "Bespoke social media strategies tailored to your Birmingham business goals, audience demographics, and competitive landscape",
          "Professional content creation including branded graphics, short-form video, carousel posts, and Stories designed for each platform",
          "Paid social advertising campaigns with advanced audience targeting, lookalike modelling, and retargeting to maximise return on ad spend",
          "Community management and engagement monitoring to build genuine relationships with your Birmingham audience",
          "Monthly content calendars planned in advance with approval workflows so you always know what's going out and when",
          "Social listening and sentiment analysis to track brand mentions, competitor activity, and emerging trends in your industry",
          "Influencer identification and partnership management to extend your reach within the West Midlands and beyond",
          "Detailed performance reporting with metrics that matter — reach, engagement, website traffic, leads, and sales attribution",
        ]}
        detailedSections={[
          {
            heading: "Why Social Media Marketing Matters for Birmingham Businesses",
            paragraphs: [
              "Social media has transformed how Birmingham businesses connect with their customers. With over 57 million social media users in the UK, platforms like Facebook, Instagram, LinkedIn, and TikTok offer unparalleled access to your target audience. For Birmingham businesses, social media provides a direct channel to engage with local customers, showcase your brand personality, and drive both online and in-store traffic.",
              "However, effective social media marketing requires more than just posting occasionally. The algorithms that govern what content appears in users' feeds are increasingly sophisticated, prioritising content that generates genuine engagement. Businesses that take a strategic, data-driven approach to social media consistently outperform those that treat it as an afterthought.",
              "At Cornerstone Media, we treat social media as a core business channel — not a nice-to-have. Our Birmingham-based social media specialists develop comprehensive strategies that align your social presence with your wider marketing objectives. Whether your goal is brand awareness, lead generation, website traffic, or direct sales, we create campaigns designed to deliver measurable results.",
            ],
          },
          {
            heading: "Our Social Media Strategy Framework",
            paragraphs: [
              "Every social media strategy we create starts with research. We analyse your current social presence, audit your competitors' activity, and develop detailed audience personas based on demographics, interests, behaviours, and pain points. This research phase ensures every piece of content and every ad campaign is targeted at the people most likely to become your customers.",
              "Content is the currency of social media. Our creative team develops platform-specific content that stops the scroll and drives action. For Instagram, that means visually striking imagery and Reels. For LinkedIn, it means thought-leadership articles and industry insights. For TikTok, it means authentic, entertaining short-form video. Each platform demands a different approach, and our team understands the nuances.",
              "Paid social advertising amplifies your organic efforts and reaches audiences beyond your existing followers. We build campaigns using Meta Ads Manager, LinkedIn Campaign Manager, and TikTok Ads to target specific demographics, interests, and behaviours. Our ad strategies include prospecting campaigns for new audiences, retargeting for warm leads, and lookalike audiences modelled on your best customers.",
            ],
          },
        ]}
        topics={[
          { title: "Facebook & Instagram Advertising", description: "Precision-targeted ad campaigns across Meta's platforms using custom audiences, lookalike modelling, and dynamic creative. We manage every aspect from strategy and creative to optimisation and reporting for Birmingham businesses." },
          { title: "LinkedIn Marketing", description: "B2B social media strategy including thought-leadership content, company page management, employee advocacy programmes, and LinkedIn Ads campaigns targeting decision-makers in specific industries and job roles." },
          { title: "TikTok Marketing", description: "Short-form video strategy and TikTok advertising for brands targeting younger demographics. We create authentic, trend-aware content and run Spark Ads and In-Feed campaigns to build visibility with Birmingham's Gen Z and Millennial audiences." },
          { title: "Content Creation & Design", description: "Full-service content production including branded graphics, social video editing, carousel design, Stories content, and copywriting. Every asset is designed to perform on its target platform and reinforce your brand identity." },
          { title: "Community Management", description: "Active monitoring and engagement across all your social channels. We respond to comments, manage direct messages, handle reviews, and foster meaningful conversations that build brand loyalty among your Birmingham community." },
          { title: "Social Media Analytics", description: "Comprehensive performance dashboards tracking engagement rates, reach, impressions, click-through rates, conversion data, and ROI. We use data to continuously refine strategy and prove the business impact of social media." },
        ]}
        whyBirmingham={{
          heading: "Social Media Marketing Tailored to the Birmingham Market",
          paragraphs: [
            "Birmingham's diverse population and vibrant business community create unique opportunities for social media marketing. From the independent retailers of Digbeth and Kings Heath to the corporate offices of Colmore Business District, each segment of Birmingham's market responds to different content styles, messaging, and platforms.",
            "Our Birmingham-based social media team understands these local dynamics. We know when to reference local events like the Birmingham Frankfurt Christmas Market, how to leverage the city's sporting culture around Aston Villa and Birmingham City, and how to create content that resonates with the diverse communities across the West Midlands.",
            "Local relevance drives engagement. Posts that reference recognisable Birmingham landmarks, local issues, or community events consistently outperform generic content. Our team creates geo-targeted campaigns and locally relevant content that helps your brand become part of Birmingham's social media conversation.",
          ],
        }}
        processSteps={[
          { title: "Research & Audit", description: "We analyse your current social presence, competitors, and audience to build a data-backed strategy aligned with your business goals." },
          { title: "Content Planning", description: "We create detailed monthly content calendars with platform-specific themes, formats, and posting schedules approved by your team." },
          { title: "Create & Publish", description: "Our creative team produces professional content and manages posting, scheduling, and community engagement across all platforms." },
          { title: "Analyse & Optimise", description: "We track performance against KPIs, report on results monthly, and refine the strategy based on what's driving the best results." },
        ]}
        toolsAndPlatforms={{
          heading: "Platforms & Tools We Work With",
          tools: ["Meta Business Suite", "Meta Ads Manager", "LinkedIn Campaign Manager", "TikTok Ads Manager", "Canva Pro", "Adobe Creative Suite", "Hootsuite", "Sprout Social", "Later", "Google Analytics 4", "UTM Builder", "CapCut"],
        }}
        caseStudies={[
          { title: "Birmingham Hospitality Brand", result: "425% Engagement Increase", description: "Developed a content strategy mixing user-generated content, behind-the-scenes Reels, and targeted Instagram ads. Grew engagement by 425% and increased direct bookings by 180% over six months." },
          { title: "West Midlands B2B Company", result: "3x LinkedIn Leads", description: "Implemented a LinkedIn thought-leadership programme combined with targeted Sponsored Content campaigns, tripling qualified B2B enquiries within four months." },
          { title: "Birmingham Retail Business", result: "£28K Ad Revenue", description: "Created and managed Facebook and Instagram ad campaigns for a Birmingham retailer during the festive season, generating £28K in directly attributed revenue from a £4K ad spend." },
        ]}
        faqs={[
          { question: "Which social media platforms should my Birmingham business be on?", answer: "It depends entirely on your audience. Facebook and Instagram are excellent for B2C businesses, LinkedIn is essential for B2B, and TikTok is growing rapidly for brands targeting younger demographics. During our discovery phase, we'll analyse your audience and recommend the platforms that offer the best return." },
          { question: "How much does social media management cost in Birmingham?", answer: "Costs vary based on the number of platforms, posting frequency, ad spend, and content requirements. We offer flexible packages designed for Birmingham businesses of all sizes. Contact us for a tailored quote based on your specific needs." },
          { question: "Do you create the content for social media posts?", answer: "Yes. Our in-house team handles everything from content ideation and copywriting to graphic design and video editing. We create bespoke, platform-optimised content that engages your audience and reinforces your brand identity." },
          { question: "How do you measure social media ROI?", answer: "We track metrics that tie directly to business outcomes: website traffic from social, lead form completions, phone calls, online sales, and in-store visits where trackable. We use UTM parameters, conversion pixels, and CRM integration to attribute results accurately." },
          { question: "Can social media marketing work alongside PPC and SEO?", answer: "Absolutely. Social media works best as part of an integrated marketing strategy. Our PPC Birmingham and SEO Birmingham services complement social media campaigns to create multiple touchpoints across the customer journey." },
          { question: "How often will you post on my social media accounts?", answer: "Posting frequency depends on the platform and your package. Typically, we recommend 3-5 posts per week on primary platforms, with additional Stories and Reels content. Everything is planned in advance with your approval." },
        ]}
        relatedServices={[
          { name: "PPC Birmingham", path: "/ppc", description: "Combine social media advertising with Google Ads to reach your Birmingham audience across both search and social channels for maximum visibility." },
          { name: "Content Writing Birmingham", path: "/content-writing", description: "Professional content creation that fuels your social media calendar with blog posts, articles, and long-form content your audience wants to share." },
          { name: "Website Design Birmingham", path: "/website-design", description: "Drive social media traffic to a beautifully designed, conversion-optimised website that turns followers into customers." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default SocialMedia;
