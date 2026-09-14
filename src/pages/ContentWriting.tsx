import { PenLine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import SEOHead from "@/components/SEOHead";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Content Writing and Copywriting Services",
  "name": "Content Writing Services Birmingham",
  "url": "https://cornerstone-media.co.uk/content-writing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Cornerstone Media",
    "url": "https://cornerstone-media.co.uk",
    "telephone": "+447846798534",
    "address": { "@type": "PostalAddress", "addressLocality": "Birmingham", "addressRegion": "West Midlands", "addressCountry": "GB" },
  },
  "areaServed": { "@type": "City", "name": "Birmingham" },
};

const faqs = [
  {
    question: "What do your content writing services include?",
    answer:
      "Our content writing services cover blog posts and articles, website and service page copy, landing page copywriting, email and newsletter copy, case studies and content planning. Every piece is researched, written and edited in UK English by our own writers, then reviewed against your brand voice before delivery.",
  },
  {
    question: "What makes you a copywriting agency rather than a freelance writer?",
    answer:
      "As a copywriting agency in Birmingham you get a team rather than one person: a strategist planning the topics, a writer producing the copy and an editor checking accuracy, tone and structure. That means consistent output month after month, cover when someone is away, and the ability to scale from a single landing page to a full content calendar.",
  },
  {
    question: "How much do content writing services cost in Birmingham?",
    answer:
      "Pricing depends on the length, research depth and volume of content you need. Most Birmingham businesses work with us on a monthly content retainer covering an agreed number of pieces, though we also write one-off website copy and landing pages. Get in touch and we will quote against a clear scope, with no long contracts.",
  },
  {
    question: "Do you write for industries you do not know?",
    answer:
      "Yes. We start every engagement with a briefing session and research phase so we understand your products, customers and competitors. For technical sectors we work from your subject-matter experts, interview notes and existing documentation, and we always send drafts back for factual review before publishing.",
  },
  {
    question: "How is content writing different from your SEO service?",
    answer:
      "Content writing is the production side: planning topics and writing the words. Our SEO Birmingham service is the wider search programme — technical fixes, site structure, local search and link building — which uses that content as one of its inputs. Many clients combine the two, but you can take either on its own.",
  },
  {
    question: "Who owns the content you write?",
    answer:
      "You do. Once a piece is delivered and paid for, full copyright transfers to your business. You are free to publish, edit, repurpose or archive it however you wish.",
  },
];

const ContentWriting = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Content Writing Services Birmingham | Copywriting Agency"
      description="Content writing services and copywriting agency in Birmingham. Blog posts, website copy, landing pages and content plans written in UK English by our own writers."
      canonical="https://cornerstone-media.co.uk/content-writing"
      schema={serviceSchema}
    />
    <Navbar />
    <main>
      <ServicePageLayout
        icon={PenLine}
        title="Content Writing Services Birmingham"
        subtitle="Copywriting Agency in Birmingham"
        description="A Birmingham copywriting agency writing blog posts, website copy and landing pages in clear UK English — planned around what your customers actually search for, and written to turn readers into enquiries."
        benefits={[
          "Blog posts and articles written around real customer questions",
          "Website and service page copy that explains your offer clearly",
          "Landing page copywriting built around a single, obvious action",
          "Content calendars planned in advance so publishing never stalls",
          "Keyword research and topic clustering to guide what you write next",
          "Brand voice guidelines so every writer sounds like your business",
        ]}
        topics={[
          { title: "Blog & Article Writing", description: "Regularly published, well-researched blog posts and articles that answer the questions your Birmingham customers are asking and build authority in your sector." },
          { title: "Website Copywriting", description: "Persuasive, conversion-focused copy for your homepage, service pages and about page that communicates your value and compels action." },
          { title: "Content Strategy & Planning", description: "Content plans built around keyword research, competitor analysis and audience insight, so every piece has a job rather than filling a slot." },
          { title: "Email & Newsletter Copy", description: "Engaging email sequences and newsletters that nurture leads, retain customers and drive repeat business for your Birmingham company." },
        ]}
        detailedSections={[
          {
            heading: "Content writing services for Birmingham businesses",
            paragraphs: [
              "Content writing is the ongoing work of planning, writing and publishing the words on your website — blog posts, service pages, guides, case studies and the everyday copy that explains what you do. Done properly it is a research job as much as a writing one: understanding who buys from you, what they are trying to decide, and what they type into Google while deciding it.",
              "We work with Birmingham businesses that know they should be publishing but never get to it. Rather than an occasional burst of posts, we set an agreed volume each month, plan topics a quarter ahead and keep the queue moving. That consistency is what turns content from a nice-to-have into a steady source of enquiries.",
              "Everything is written in UK English, edited before it reaches you and delivered ready to publish — with headings, internal links and meta titles already in place, so nothing sits waiting for someone to tidy it up.",
            ],
          },
          {
            heading: "Working with a copywriting agency in Birmingham",
            paragraphs: [
              "A copywriting agency gives you more than extra words. You get a strategist deciding what is worth writing, a writer producing it and an editor checking tone, accuracy and structure — so the standard holds whether you commission one landing page or twenty blog posts a quarter.",
              "Being Birmingham-based matters for local copy. We know the difference between a Jewellery Quarter studio and a Tyseley trade counter, we can reference the areas your customers recognise, and we can sit down with you in person when a project needs a proper briefing session.",
              "We also work as an extension of in-house teams. If you have a marketing manager who knows exactly what is needed but has no time to write it, we take the brief and deliver against it without needing to be managed line by line.",
            ],
          },
          {
            heading: "Copywriting for conversion, not just word count",
            paragraphs: [
              "Traffic that does not convert is an expensive hobby. Our copy is structured around a single decision the reader needs to make: one clear proposition, the objections answered in the order people raise them, evidence where it helps, and one obvious next step.",
              "For landing pages that means a headline matching the advert or search that brought the visitor there, benefit-led sub-headings, and a call to action repeated where the reader is most likely to act. For service pages it means saying plainly what you do, who it is for and what happens next.",
              "Where copy supports paid campaigns, we align the wording with your adverts so the message stays consistent from click to enquiry. See our PPC Birmingham service for the campaign side of that work.",
            ],
          },
          {
            heading: "How content writing fits alongside SEO",
            paragraphs: [
              "Content and SEO overlap but they are not the same job. Content writing produces the pages. SEO decides the site structure, fixes the technical foundations, earns links and builds local visibility so those pages can compete.",
              "If your main goal is to rank better in Google across the board, start with our SEO Birmingham service — that is the page covering search strategy, technical work and local search. If you already know what needs writing and simply need it written well and consistently, content writing on its own is the right fit.",
              "Most clients end up combining the two: the SEO programme identifies the gaps, and our writers fill them. You are welcome to take either separately.",
            ],
          },
        ]}
        processSteps={[
          { title: "Research", description: "We analyse your audience, keywords and competitors." },
          { title: "Plan", description: "We build a content calendar aligned with your goals." },
          { title: "Write", description: "We draft, edit and fact-check in UK English." },
          { title: "Refine", description: "We review performance and adjust the plan." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: "SEO Birmingham", path: "/seo-birmingham", description: "Looking to rank higher in Google rather than commission writing? Our SEO Birmingham service covers search strategy, technical SEO, local search and link building." },
          { name: "Website Design Birmingham", path: "/website-design-birmingham", description: "New copy often needs a better home. We design fast, conversion-focused websites for Birmingham businesses." },
          { name: "Social Media Marketing Birmingham", path: "/social-media-marketing-birmingham", description: "Turn long-form content into a social calendar that keeps your audience engaged between campaigns." },
        ]}
      />
    </main>
    <Footer />
  </div>
);

export default ContentWriting;
