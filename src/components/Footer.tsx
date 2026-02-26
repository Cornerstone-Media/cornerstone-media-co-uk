import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "PPC Advertising", path: "/ppc" },
      { label: "SEO", path: "/seo" },
      { label: "Social Media", path: "/social-media" },
      { label: "Website Design", path: "/website-design" },
      { label: "Website Maintenance", path: "/website-maintenance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "/" },
      { label: "Case Studies", path: "/" },
      { label: "Blog", path: "/" },
      { label: "Careers", path: "/" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <img
            src={logo}
            alt="Cornerstone Media"
            className="mb-6 h-20 w-auto brightness-0 invert"
          />
          <p className="max-w-sm font-body text-sm leading-relaxed text-muted-foreground">
            Turning digital strategy into measurable growth. We help businesses
            scale through data-driven marketing, high-converting websites, and
            strategic digital campaigns.
          </p>
          <div className="mt-8 flex gap-3">
            {["LinkedIn", "Twitter", "Instagram", "Facebook"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border font-heading text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-secondary/50 hover:text-secondary hover:bg-secondary/5"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <div key={col.title}>
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
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Cornerstone Media. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          info@cornerstonemedia.co.uk
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
