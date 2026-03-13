import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CookiePolicy = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Cookie Policy | Cornerstone Media"
      description="Learn about the cookies used on the Cornerstone Media website and how to manage your preferences."
      canonical="https://cornerstone-media.co.uk/cookie-policy"
    />
    <Navbar />
    <main className="pt-40 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="mb-8 font-heading text-4xl font-extrabold text-foreground">Cookie Policy</h1>
        <p className="mb-4 font-body text-sm text-muted-foreground">Last updated: 13 March 2026</p>

        <div className="space-y-6 font-body text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Cookies We Use</h2>

            <h3 className="mt-6 mb-3 font-heading text-lg font-semibold text-foreground">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly. They include cookies for cookie consent preferences.</p>

            <h3 className="mt-6 mb-3 font-heading text-lg font-semibold text-foreground">Analytics Cookies</h3>
            <p>We use Google Analytics (via Google Tag Manager) to understand how visitors use our website. These cookies collect anonymous information including:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Pages visited and time spent on each page</li>
              <li>How you arrived at our website</li>
              <li>Your approximate geographic location (city level)</li>
              <li>Device type and browser used</li>
            </ul>
            <p className="mt-2">Analytics cookies are only loaded after you consent to them.</p>

            <h3 className="mt-6 mb-3 font-heading text-lg font-semibold text-foreground">Functional Cookies</h3>
            <p>Google reCAPTCHA uses cookies to protect our contact forms from spam. These are loaded as part of the form functionality.</p>

            <h3 className="mt-6 mb-3 font-heading text-lg font-semibold text-foreground">Marketing Cookies</h3>
            <p>If enabled through Google Tag Manager, marketing cookies may be used for remarketing and advertising purposes. These are only loaded with your explicit consent.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Third-Party Cookies</h2>
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left font-heading font-semibold text-foreground">Provider</th>
                  <th className="p-3 text-left font-heading font-semibold text-foreground">Purpose</th>
                  <th className="p-3 text-left font-heading font-semibold text-foreground">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">Google Analytics</td>
                  <td className="p-3">Website usage analytics</td>
                  <td className="p-3">Analytics</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Google Tag Manager</td>
                  <td className="p-3">Tag management</td>
                  <td className="p-3">Functional</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Google reCAPTCHA</td>
                  <td className="p-3">Spam protection</td>
                  <td className="p-3">Functional</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Managing Cookies</h2>
            <p>When you first visit our website, a cookie consent banner allows you to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
            </ul>
            <p className="mt-2">You can also manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling certain cookies may affect the functionality of our website.</p>
            <p className="mt-2">For more information about managing cookies, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">aboutcookies.org</a>.</p>
          </section>

          <section>
            <h2 className="mt-8 mb-4 font-heading text-2xl font-bold text-foreground">Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us at <a href="mailto:info@cornerstone-media.co.uk" className="text-secondary hover:underline">info@cornerstone-media.co.uk</a>.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default CookiePolicy;
