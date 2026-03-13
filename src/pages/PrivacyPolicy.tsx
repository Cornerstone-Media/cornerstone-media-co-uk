import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Privacy Policy | Cornerstone Media"
      description="Read Cornerstone Media's Privacy Policy. Learn how we collect, use, and protect your personal data in compliance with GDPR."
      canonical="https://cornerstone-media.co.uk/privacy-policy"
    />
    <Navbar />
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="mb-8 font-heading text-4xl font-extrabold text-foreground">Privacy Policy</h1>
        <p className="mb-4 font-body text-sm text-muted-foreground">Last updated: 13 March 2026</p>

        <div className="prose-custom space-y-6 font-body text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Who We Are</h2>
            <p>Cornerstone Media Ltd is a digital marketing agency based in Birmingham, West Midlands, United Kingdom.</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Website: <a href="https://cornerstone-media.co.uk" className="text-secondary hover:underline">cornerstone-media.co.uk</a></li>
              <li>Email: <a href="mailto:info@cornerstone-media.co.uk" className="text-secondary hover:underline">info@cornerstone-media.co.uk</a></li>
              <li>Phone: <a href="tel:07846798534" className="text-secondary hover:underline">07846 798 534</a></li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">What Data We Collect</h2>
            <p>When you submit our contact or enquiry form, we collect:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Company/business name (if provided)</li>
              <li>Your message or enquiry details</li>
              <li>The page URL you submitted the form from</li>
            </ul>
            <p className="mt-2">We also collect anonymous usage data through cookies (see our <a href="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</a>).</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Respond to your enquiry or message</li>
              <li>Provide a quote or consultation as requested</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Lawful Basis for Processing</h2>
            <p>We process your data under the following lawful bases as defined by the UK GDPR:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>Consent:</strong> When you submit a form, you consent to us processing your data to respond to your enquiry.</li>
              <li><strong>Legitimate interest:</strong> To improve our services and communicate relevant information about our agency.</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Data Retention</h2>
            <p>We retain your personal data for a maximum of 24 months from the date of collection, unless there is an ongoing business relationship that requires us to keep it longer. After this period, your data will be securely deleted.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-2">To exercise any of these rights, please contact us at <a href="mailto:info@cornerstone-media.co.uk" className="text-secondary hover:underline">info@cornerstone-media.co.uk</a>.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Cookies</h2>
            <p>We use cookies on our website for analytics and functionality purposes. For full details, please see our <a href="/cookie-policy" className="text-secondary hover:underline">Cookie Policy</a>.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Third-Party Services</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Google Analytics (website usage analytics)</li>
              <li>Google Tag Manager (tag management)</li>
              <li>Google reCAPTCHA (spam protection)</li>
              <li>Resend (email delivery)</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Contact Us</h2>
            <p>If you have any concerns about how we handle your data, please contact us:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Email: <a href="mailto:info@cornerstone-media.co.uk" className="text-secondary hover:underline">info@cornerstone-media.co.uk</a></li>
              <li>Phone: <a href="tel:07846798534" className="text-secondary hover:underline">07846 798 534</a></li>
            </ul>
            <p className="mt-2">You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">ico.org.uk</a>.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
