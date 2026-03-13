import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "PPC Advertising Birmingham", path: "/ppc-birmingham" },
      { label: "SEO Birmingham", path: "/seo-birmingham" },
      { label: "Social Media Marketing", path: "/social-media-marketing-birmingham" },
      { label: "Content Writing Birmingham", path: "/content-writing" },
      { label: "Website Design Birmingham", path: "/website-design-birmingham" },
      { label: "Website Maintenance", path: "/website-maintenance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Meet the Team", path: "/meet-the-team" },
      { label: "All Services", path: "/services" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border bg-card pb-16 lg:pb-0" role="contentinfo" aria-label="Site footer">
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <img
            src={logo}
            alt="Cornerstone Media — Digital Marketing Agency Birmingham"
            className="mb-6 h-20 w-auto"
          />
          <p className="max-w-sm font-body text-sm leading-relaxed text-muted-foreground">
            Birmingham's trusted digital marketing agency. We help local and national businesses
            grow through data-driven PPC, SEO, social media, website design, and ongoing maintenance.
          </p>
          <address className="mt-4 not-italic font-body text-sm text-muted-foreground space-y-1">
            <p className="font-heading font-semibold text-foreground">Cornerstone Media</p>
            <p>Birmingham, West Midlands, UK</p>
            <p>
              <a href="tel:+447846798534" className="transition-colors hover:text-secondary">📞 07846 798 534</a>
            </p>
            <p>
              <a href="mailto:info@cornerstone-media.co.uk" className="transition-colors hover:text-secondary">✉ info@cornerstone-media.co.uk</a>
            </p>
          </address>
          <div className="mt-6 flex gap-3">
            {["LinkedIn", "Twitter", "Instagram", "Facebook"].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={`Follow Cornerstone Media on ${name}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border font-heading text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-secondary/50 hover:text-secondary hover:bg-secondary/5"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h4 className="mb-5 font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-muted-foreground transition-colors duration-200 hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cornerstone Media. Digital Marketing Agency, Birmingham, West Midlands. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 font-body text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link to="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link>
          <Link to="/terms" className="hover:text-secondary transition-colors">Terms</Link>
          <a href="mailto:info@cornerstone-media.co.uk" className="hover:text-secondary transition-colors">info@cornerstone-media.co.uk</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
