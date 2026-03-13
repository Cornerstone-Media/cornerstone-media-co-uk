<!-- TODO: Have this reviewed by a solicitor -->
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Terms & Conditions | Cornerstone Media"
      description="Read Cornerstone Media's Terms and Conditions for the use of our digital marketing services."
      canonical="https://cornerstone-media.co.uk/terms"
    />
    <Navbar />
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="mb-8 font-heading text-4xl font-extrabold text-foreground">Terms &amp; Conditions</h1>
        <p className="mb-4 font-body text-sm text-muted-foreground">Last updated: 13 March 2026</p>

        <div className="space-y-6 font-body text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">1. Introduction</h2>
            <p>These terms and conditions govern your use of the Cornerstone Media website and the digital marketing services we provide. By using our website or engaging our services, you agree to be bound by these terms.</p>
            <p className="mt-2">Cornerstone Media Ltd is a digital marketing agency based in Birmingham, West Midlands, United Kingdom.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">2. Services Provided</h2>
            <p>Cornerstone Media provides digital marketing services including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Search Engine Optimisation (SEO)</li>
              <li>Pay-Per-Click Advertising (PPC / Google Ads)</li>
              <li>Social Media Marketing and Advertising</li>
              <li>Website Design and Development</li>
              <li>Content Writing and Strategy</li>
              <li>Website Maintenance and Support</li>
            </ul>
            <p className="mt-2">The specific scope, deliverables, and timelines for any engagement will be agreed in writing before work commences.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">3. Payment Terms</h2>
            <p>Payment terms will be outlined in the proposal or agreement for each project. Unless otherwise agreed:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Invoices are due within 14 days of the invoice date</li>
              <li>Monthly retainer fees are invoiced on the 1st of each month</li>
              <li>Project work may require a deposit before commencement</li>
            </ul>
            {/* TODO: Have payment terms reviewed by a solicitor */}
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
            <p>While we strive to deliver the best possible results for our clients, Cornerstone Media cannot guarantee specific outcomes such as search engine rankings, traffic volumes, or revenue targets. Digital marketing results depend on many external factors beyond our control.</p>
            <p className="mt-2">To the fullest extent permitted by law, Cornerstone Media's total liability shall not exceed the total fees paid by you for the services in question during the preceding 12 months.</p>
            {/* TODO: Have limitation of liability reviewed by a solicitor */}
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">5. Intellectual Property</h2>
            <p>Upon full payment, clients receive ownership of all deliverables created specifically for their project (e.g. website designs, ad copy, content). Cornerstone Media retains ownership of proprietary tools, templates, and methodologies used in the delivery of services.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">6. Confidentiality</h2>
            <p>Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This obligation continues after the termination of services.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">7. Termination</h2>
            <p>Either party may terminate an ongoing service agreement by providing 30 days' written notice. Any work completed up to the termination date will be invoiced accordingly.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">9. Contact</h2>
            <p>For any questions regarding these terms, please contact us:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Email: <a href="mailto:info@cornerstone-media.co.uk" className="text-secondary hover:underline">info@cornerstone-media.co.uk</a></li>
              <li>Phone: <a href="tel:07846798534" className="text-secondary hover:underline">07846 798 534</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
