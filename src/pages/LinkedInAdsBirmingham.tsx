import { Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const LinkedInAdsBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="LinkedIn Ads Birmingham | B2B LinkedIn Advertising | Cornerstone Media"
      description="LinkedIn advertising agency in Birmingham. Target B2B decision-makers with Sponsored Content, InMail, and lead generation campaigns. Expert LinkedIn Ads management."
      canonical="https://cornerstonemedialtd.com/linkedin-ads-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Share2}
        title="LinkedIn Ads Birmingham"
        subtitle="B2B LinkedIn Advertising"
        description="Cornerstone Media delivers targeted LinkedIn advertising campaigns for Birmingham B2B businesses. We reach decision-makers, generate qualified leads, and build professional authority through Sponsored Content, Message Ads, and Lead Gen Forms — all managed by specialists who understand Birmingham's B2B landscape."
        benefits={[
          "Precision B2B targeting by job title, company size, industry, seniority level, and specific companies operating in Birmingham and the West Midlands",
          "LinkedIn Lead Gen Forms that capture professional contact details without requiring visitors to leave the platform, delivering higher conversion rates",
          "Thought-leadership content strategy combining organic posts with Sponsored Content to build credibility and generate inbound enquiries",
          "Account-based marketing (ABM) campaigns targeting specific companies in Birmingham with personalised messaging and tailored offers",
          "LinkedIn InMail campaigns delivering personalised direct messages to decision-makers who match your ideal customer profile",
          "Professional video and document ad formats showcasing case studies, whitepapers, and industry insights to Birmingham's professional audience",
        ]}
        detailedSections={[
          {
            heading: "Why LinkedIn Advertising Is Essential for B2B Businesses in Birmingham",
            paragraphs: [
              "LinkedIn is the world's largest professional network with over 35 million UK members, and it is the most effective platform for B2B marketing. For Birmingham businesses selling to other businesses — whether professional services, technology, manufacturing, or consultancy — LinkedIn provides direct access to the decision-makers who influence and approve purchasing decisions.",
              "What makes LinkedIn advertising unique is the quality of its targeting data. Unlike other platforms where targeting relies on inferred interests and behaviours, LinkedIn uses verified professional information. You can target people by their exact job title, company name, industry, years of experience, education, and skills. For a Birmingham B2B business, this means your ads reach the exact people who have the authority and need to buy your services.",
              "At Cornerstone Media, our LinkedIn advertising specialists build campaigns specifically designed for B2B lead generation. We understand that B2B buying cycles are longer, involve multiple stakeholders, and require trust-building content before a conversion occurs. Our campaigns are structured to nurture prospects through this journey, from initial awareness through to qualified enquiry.",
            ],
          },
        ]}
        topics={[
          { title: "Sponsored Content", description: "Native ads that appear in the LinkedIn feed featuring single images, carousels, video, and documents. Ideal for promoting thought-leadership content, case studies, and service offerings to Birmingham's professional audience." },
          { title: "LinkedIn Lead Gen Forms", description: "Pre-filled lead capture forms that auto-populate with the user's LinkedIn profile data, removing friction and dramatically increasing conversion rates for B2B lead generation campaigns." },
          { title: "Message Ads (InMail)", description: "Personalised direct messages delivered to targeted decision-makers' LinkedIn inboxes. Effective for high-value offers, event invitations, and one-to-one outreach at scale." },
          { title: "Account-Based Marketing", description: "Campaigns targeting specific companies in Birmingham with tailored messaging for each account, combining advertising with organic engagement for a multi-touch ABM approach." },
        ]}
        whyBirmingham={{
          heading: "LinkedIn Advertising for Birmingham's Professional Community",
          paragraphs: [
            "Birmingham is home to a thriving professional services sector, a growing technology cluster, and major corporate headquarters. The city's Colmore Business District, Brindleyplace, and expanding business parks host thousands of companies that actively use LinkedIn for networking, recruitment, and business development.",
            "Our Birmingham-based team understands the local B2B landscape — which industries are growing, who the key players are, and how professional buying decisions are made in the West Midlands. This local insight informs our targeting strategies and helps us create ad content that resonates with Birmingham's professional audience.",
          ],
        }}
        processSteps={[
          { title: "Audience Mapping", description: "We define your ideal customer profile and build LinkedIn targeting segments based on job titles, industries, company sizes, and specific accounts." },
          { title: "Content & Creative", description: "We develop professional ad creative and content assets — whitepapers, case studies, video — designed to engage B2B decision-makers." },
          { title: "Campaign Execution", description: "We launch Sponsored Content, Lead Gen Forms, and Message Ads campaigns with A/B testing across audiences and creative." },
          { title: "Lead Delivery & Optimisation", description: "We deliver qualified leads to your CRM, analyse campaign performance, and continuously refine targeting and messaging." },
        ]}
        faqs={[
          { question: "How much do LinkedIn Ads cost?", answer: "LinkedIn advertising typically has higher cost per click than other platforms (£3-8+), reflecting the premium B2B audience. However, lead quality is significantly higher, often resulting in a lower effective cost per qualified lead for B2B businesses." },
          { question: "What content works best for LinkedIn Ads?", answer: "Educational and thought-leadership content performs strongly — industry reports, how-to guides, case studies, and expert insights. Overt sales messaging tends to underperform. We help create content that provides genuine value while positioning your business as an authority." },
          { question: "Can LinkedIn Ads generate real business leads?", answer: "Yes. LinkedIn Lead Gen Forms in particular deliver high-quality B2B leads because forms pre-populate with verified professional data. Our Birmingham B2B clients consistently generate qualified decision-maker leads through LinkedIn campaigns." },
          { question: "Is LinkedIn advertising right for my business?", answer: "LinkedIn Ads are most effective for B2B businesses with an average deal value of £1,000+ and a clearly defined target audience. If you sell to other businesses and can define your ideal customer by job role and industry, LinkedIn is likely an excellent channel." },
        ]}
        relatedServices={[
          { name: "Social Media Marketing Birmingham", path: "/social-media-marketing-birmingham", description: "Comprehensive social media strategy including LinkedIn alongside Facebook, Instagram, and TikTok for Birmingham businesses." },
          { name: "Facebook Ads Birmingham", path: "/facebook-ads-birmingham", description: "Complement LinkedIn's B2B focus with Facebook advertising for broader audience reach and brand awareness campaigns." },
          { name: "PPC Birmingham", path: "/ppc-birmingham", description: "Combine LinkedIn Ads with Google Ads to capture both social and search demand from your target B2B audience." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default LinkedInAdsBirmingham;
