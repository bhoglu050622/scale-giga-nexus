import { Link } from "react-router-dom";

const services = [
  "Website & App Development",
  "Performance Marketing",
  "Social Media Marketing",
  "Creative & Design",
  "AI Agents & Automation",
  "Brand Strategy",
];

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Story", href: "/story" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-primary opacity-10 blur-3xl pointer-events-none" />

      <div className="section-container pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-primary rounded-xl" />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="relative z-10">
                  <path d="M3 14L8 5L13 12L16 8L19 14H3Z" fill="white" fillOpacity="0.9" />
                  <circle cx="14" cy="6" r="2.5" fill="hsl(190 100% 70%)" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Scale<span className="text-primary-glow">Giga</span>
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-6">
              We build digital systems that scale brands — from strategy to execution.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-background/10 flex items-center justify-center hover:bg-background/10 transition-colors"
                  aria-label={s}
                >
                  <div className="w-4 h-4 rounded-sm bg-background/40" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-background/50 hover:text-background/90 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-background/50 hover:text-background/90 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Start Growing
            </h4>
            <p className="text-sm text-background/50 mb-5 leading-relaxed">
              Ready to build a digital system that drives real growth? Let's talk.
            </p>
            <Link
              to="/contact"
              className="btn-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white font-display"
            >
              Let's Connect →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} ScaleGiga. All rights reserved.
          </p>
          <p className="text-xs text-background/30">
            Digital Growth Agency · Website Development · Performance Marketing · AI Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
