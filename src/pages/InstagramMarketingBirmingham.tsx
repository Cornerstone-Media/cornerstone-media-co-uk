import { Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const InstagramMarketingBirmingham = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Instagram Marketing Birmingham | Instagram Ads & Content | Cornerstone Media"
      description="Instagram marketing agency in Birmingham. Grow your brand with Reels, Stories, and targeted Instagram advertising. Content creation and strategy for Birmingham businesses."
      canonical="https://cornerstone-media.co.uk/instagram-marketing-birmingham"
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={Share2}
        title="Instagram Marketing Birmingham"
        subtitle="Instagram Strategy & Advertising"
        description="Cornerstone Media helps Birmingham businesses grow on Instagram through strategic content creation, Reels production, Stories campaigns, and targeted advertising. We build Instagram presences that drive real engagement, grow genuine followers, and convert social audiences into paying customers."
        benefits={[
          "Bespoke Instagram content strategy aligned with your brand identity, business goals, and Birmingham target audience preferences",
          "Professional Reels production including concept development, filming guidance, editing, and trend integration for maximum organic reach",
          "Instagram Stories strategy with interactive features including polls, quizzes, countdowns, and swipe-up links to drive engagement",
          "Targeted Instagram advertising through Meta Ads Manager with precision audience targeting and creative optimised for the Instagram environment",
          "Hashtag strategy combining trending, niche, and local Birmingham hashtags to maximise content discoverability",
          "Analytics and reporting covering reach, engagement rate, follower growth, story interactions, and conversion tracking",
        ]}
        detailedSections={[
          {
            heading: "Why Instagram Marketing Matters for Birmingham Businesses",
            paragraphs: [
              "Instagram has evolved from a photo-sharing app into one of the most powerful marketing platforms available to businesses. With over 30 million UK users, Instagram offers Birmingham businesses a visual-first channel to showcase their products, services, and brand personality to engaged local audiences. The platform's emphasis on visual storytelling, short-form video, and community interaction makes it particularly effective for building brand awareness and driving purchase consideration.",
              "For Birmingham businesses, Instagram provides unique opportunities to connect with the local community. From sharing behind-the-scenes content at your Birmingham premises to creating location-tagged posts that appear in local explore feeds, Instagram's features are designed to help local businesses reach nearby customers. Birmingham's vibrant food scene, independent retail community, and thriving events calendar provide endless content inspiration.",
              "At Cornerstone Media, we approach Instagram marketing strategically. We do not just post pretty pictures — we develop content plans based on audience research, engagement data, and platform algorithm insights. Every piece of content serves a purpose: building awareness, driving engagement, nurturing consideration, or converting followers into customers.",
            ],
          },
        ]}
        topics={[
          { title: "Reels & Video Content", description: "Short-form video content creation leveraging Instagram's most powerful organic reach format. We develop concepts, provide filming guidance, handle editing, and incorporate trending audio and formats." },
          { title: "Feed & Carousel Posts", description: "Professionally designed static and carousel posts that communicate your brand message, showcase products or services, and drive engagement through educational and entertaining content." },
          { title: "Stories & Highlights", description: "Daily Stories content using interactive features to drive engagement, plus curated Highlights that serve as a visual introduction to your brand for new profile visitors." },
          { title: "Instagram Shopping", description: "Product tagging, shop setup, and shoppable posts for Birmingham e-commerce businesses wanting to sell directly through the Instagram platform." },
        ]}
        whyBirmingham={{
          heading: "Instagram Marketing for the Birmingham Market",
          paragraphs: [
            "Birmingham's Instagram community is vibrant and growing. The city's food scene, arts culture, independent businesses, and major events generate significant social media conversation. Tapping into this local engagement requires content that feels authentic to Birmingham — referencing familiar locations, local events, and community culture.",
            "Our Birmingham-based team creates Instagram content that resonates locally while maintaining professional quality. We know which Birmingham hashtags drive discovery, which local influencers have genuine engagement, and how to create content that captures the energy of the UK's second city.",
          ],
        }}
        processSteps={[
          { title: "Profile Audit", description: "We review your current Instagram presence, audience demographics, content performance, and competitor activity." },
          { title: "Strategy Development", description: "We create a content strategy with themes, posting schedule, hashtag strategy, and campaign calendar." },
          { title: "Content Creation", description: "We produce professional Reels, graphics, Stories, and captions aligned with your brand and Birmingham audience." },
          { title: "Grow & Analyse", description: "We publish content, manage engagement, run ads, and report on growth metrics and business impact." },
        ]}
        faqs={[
          { question: "How often should my Birmingham business post on Instagram?", answer: "We typically recommend 3-5 feed posts per week combined with daily Stories content. Consistency matters more than volume. Our content calendars ensure a sustainable posting frequency that maintains engagement without overwhelming your audience." },
          { question: "Do I need to create Reels for Instagram?", answer: "Reels are currently Instagram's highest-reach format and are strongly favoured by the algorithm. While not mandatory, businesses that incorporate Reels into their strategy consistently see significantly higher reach and follower growth." },
          { question: "Can Instagram generate real business leads?", answer: "Absolutely. Through a combination of organic content that builds trust, paid advertising that targets ideal customers, and strategic CTAs that drive website visits or DM conversations, Instagram can become a significant lead generation channel." },
          { question: "Do you manage Instagram comments and DMs?", answer: "Yes. Our community management service includes monitoring and responding to comments, managing DM enquiries, and engaging with relevant accounts to build your brand's presence in the Birmingham Instagram community." },
        ]}
        relatedServices={[
          { name: "Social Media Marketing Birmingham", path: "/social-media-marketing-birmingham", description: "Full social media strategy and management across all major platforms for Birmingham businesses." },
          { name: "Facebook Ads Birmingham", path: "/facebook-ads-birmingham", description: "Instagram and Facebook advertising managed through Meta's unified Ads Manager for cross-platform campaigns." },
          { name: "LinkedIn Ads Birmingham", path: "/linkedin-ads-birmingham", description: "B2B social media advertising on LinkedIn for Birmingham businesses targeting professional audiences." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default InstagramMarketingBirmingham;
