import { Check, Sparkles, Calendar, BarChart3, Megaphone, Target, Palette, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Target,
    title: "Social Media Strategy",
    items: [
      "Research and analysis of your industry and competitors",
      "Content planning based on business goals",
      "Monthly content strategy and recommendations",
    ],
  },
  {
    icon: Palette,
    title: "Content Creation",
    items: [
      "Professional graphic design posts",
      "Branded social media creatives",
      "Captions optimised for engagement and reach",
      "Relevant hashtag research",
    ],
  },
  {
    icon: Calendar,
    title: "Account Management",
    items: [
      "Scheduling and publishing content",
      "Page monitoring",
      "Audience engagement and response management",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    items: [
      "Monthly performance review",
      "Growth and engagement reporting",
      "Recommendations for continuous improvement",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads Management",
    items: [
      "Meta Ads account setup",
      "Ad content and creative preparation",
      "Campaign creation and audience targeting",
      "Campaign monitoring and optimisation",
      "Monthly ad performance reporting",
    ],
  },
];

const deliverables = [
  "30 High-Quality Social Media Posts",
  "Custom Designed Graphics",
  "Content Captions",
  "Hashtag Research",
  "Post Scheduling & Publishing",
  "Monthly Performance Report",
  "Meta Ads Setup & Management",
  "Ad Performance Reporting",
];

const SocialMediaProposal = () => {
  return (
    <>
      <SEOHead
        title="Social Media Management Proposal | Cornerstone Media"
        description="Private proposal — social media management and Meta Ads package from Cornerstone Media."
        robots="noindex, nofollow"
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a6ddb]/20 via-[#22b8a0]/10 to-[#13c77b]/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,184,160,0.25),transparent_60%)]" />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
              <Sparkles className="w-4 h-4" />
              Cornerstone Media
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#22b8a0] mb-6">
              <Users className="w-3.5 h-3.5" />
              Social Media Proposal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Social Media Management &amp; Meta Ads
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              A professional, consistent social media presence that grows brand awareness, drives engagement, and generates quality leads through strategic content and account management.
            </p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">
          {/* Objective */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#22b8a0] mb-3">Objective</h2>
            <p className="text-xl md:text-2xl font-heading leading-snug">
              To build a professional and consistent social media presence that increases brand awareness, audience engagement, and generates quality leads through strategic content creation and account management.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#22b8a0] mb-3">Services Included</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-10">Everything covered, end-to-end.</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-7 hover:border-[#22b8a0]/40 hover:bg-white/[0.04] transition-all"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a6ddb] to-[#22b8a0] flex items-center justify-center shadow-lg shadow-[#22b8a0]/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-heading font-semibold">
                        {i + 1}. {s.title}
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {s.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-[#13c77b] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Deliverables */}
          <section className="relative rounded-3xl border border-white/10 overflow-hidden p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a6ddb]/10 via-transparent to-[#13c77b]/10" />
            <div className="relative">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#22b8a0] mb-3">Deliverables Per Month</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8">What lands in your inbox, every month.</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1a6ddb] to-[#22b8a0] flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Investment */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#22b8a0] mb-3">Investment</h2>
            <div className="relative rounded-3xl border border-[#22b8a0]/30 overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[#1a6ddb]/15 via-[#22b8a0]/10 to-[#13c77b]/15">
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Monthly Management Fee</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-heading font-bold bg-gradient-to-r from-[#1a6ddb] via-[#22b8a0] to-[#13c77b] bg-clip-text text-transparent">
                      £500
                    </span>
                    <span className="text-xl text-muted-foreground">/ month</span>
                  </div>
                </div>
              </div>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
                This package includes social media strategy, content creation, scheduling, management, reporting, Meta Ads setup, campaign management, and optimisation for one brand/business account.
              </p>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Please note:</strong> Advertising spend/budget is paid directly to Meta and is not included in the monthly management fee.
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#22b8a0] mb-3">Next Steps</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-5">Ready when you are.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Following approval, we will create a detailed content plan and begin preparing content aligned with your brand objectives and target audience.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              <p className="text-lg md:text-xl font-heading mb-6 leading-relaxed">
                Thank you for considering our proposal. We look forward to working together and helping grow your online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:07846798534"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#1a6ddb] to-[#22b8a0] text-white font-semibold hover:opacity-95 transition"
                >
                  Call 07846 798 534
                </a>
                <a
                  href="mailto:info@cornerstone-media.co.uk?subject=Social%20Media%20Proposal%20-%20Approval"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/15 bg-white/[0.03] font-semibold hover:bg-white/[0.06] transition"
                >
                  Email to Approve
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SocialMediaProposal;
