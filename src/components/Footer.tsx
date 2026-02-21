import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

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
    <footer className="relative bg-white text-black overflow-hidden">
      <div className="section-container pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-9 h-9 flex items-center justify-center bg-white rounded-xl">
                <img src={logo} alt="ScaleGiga logo" className="w-9 h-9 object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-black">
                Scale<span className="text-black">Giga</span>
              </span>
            </div>
            <p className="text-sm text-black/70 leading-relaxed mb-6">
              We build digital systems that scale brands — from strategy to execution.
            </p>
            <div className="flex gap-3">
              {["twitter", "linkedin", "instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
                  aria-label={s}
                >
                  <div className="w-4 h-4 rounded-sm bg-black/40" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-black mb-5 text-sm uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-black/60 hover:text-black transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-display font-semibold text-black mb-5 text-sm uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-black/60 hover:text-black transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-semibold text-black mb-5 text-sm uppercase tracking-widest">
              Start Growing
            </h4>
            <p className="text-sm text-black/60 mb-5 leading-relaxed">
              Ready to build a digital system that drives real growth? Let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black font-display border border-black/20 hover:bg-black/5 transition-colors"
            >
              Let's Connect →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/50">
            © {new Date().getFullYear()} ScaleGiga. All rights reserved.
          </p>
          <p className="text-xs text-black/50">
            Digital Growth Agency · Website Development · Performance Marketing · AI Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
