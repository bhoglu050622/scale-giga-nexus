import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const services = [
  "Growth Infrastructure",
  "AI Automation",
  "Partnership Ecosystems",
];

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      <div className="section-container pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <img src={logo} alt="ScaleGiga logo" className="w-9 h-9 object-contain" />
              </div>
              <span className="font-display text-xl text-foreground" style={{ letterSpacing: "1.5px" }}>
                Scale<span className="text-gradient-primary">Giga</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              We engineer growth infrastructure for luxury brands doing $2M–$50M.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-sm border border-border flex items-center justify-center hover:border-primary/40 transition-colors"
                  aria-label={s}
                >
                  <div className="w-4 h-4 rounded-sm bg-muted-foreground/40" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-foreground mb-5 text-sm" style={{ letterSpacing: "2px" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display text-foreground mb-5 text-sm" style={{ letterSpacing: "2px" }}>
              Company
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-foreground mb-5 text-sm" style={{ letterSpacing: "2px" }}>
              Start Growing
            </h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Ready to build growth infrastructure that compounds? Let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-foreground font-body"
              style={{
                background: "linear-gradient(135deg, hsl(38 70% 35%), hsl(43 80% 49%))",
                borderRadius: "2px",
              }}
            >
              Book a Strategy Call →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ScaleGiga. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Luxury Growth Infrastructure · 340% Avg. ROI · Senior Strategists Only
          </p>
        </div>
      </div>
    </footer>
  );
}
