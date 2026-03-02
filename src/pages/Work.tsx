import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const projectCards = [
  { label: "E-Commerce Brand", type: "Website + Performance Marketing", result: "3.2x Revenue Growth", metric: "3.2x", metricLabel: "Revenue" },
  { label: "B2B SaaS Startup", type: "Brand Strategy + Website", result: "120 Qualified Leads / Month", metric: "120", metricLabel: "Leads/mo" },
  { label: "Professional Services Firm", type: "Social Media + Ad Campaigns", result: "240% Follower Growth", metric: "240%", metricLabel: "Growth" },
  { label: "Consumer App", type: "App Development + ASO", result: "50K Downloads in 90 Days", metric: "50K", metricLabel: "Downloads" },
  { label: "Retail Brand", type: "Product Photography + Ads", result: "5.1x ROAS on Meta", metric: "5.1x", metricLabel: "ROAS" },
  { label: "Healthcare Startup", type: "AI Automation + Website", result: "80% Support Cost Reduction", metric: "80%", metricLabel: "Cost Cut" },
];

export default function Work() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-3xl -translate-y-1/2 translate-x-1/3"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Selected Work &{" "}
              <span className="text-gradient">Capabilities</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Our work focuses on delivering measurable results — from conversion-focused websites to high-performing ad campaigns and scalable automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project cards — alternating bento layout */}
      <section className="py-8 sm:py-16">
        <div className="section-container">
          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {projectCards.map((card, i) => {
              // Make first and last cards span full width for variety
              const isWide = i === 0 || i === 5;
              return (
                <ScrollReveal key={card.label} delay={i * 0.06}>
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm group cursor-default ${
                      isWide ? "md:col-span-2" : ""
                    }`}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{
                      boxShadow:
                        "0 4px 24px -4px hsl(0 0% 0% / 0.2), 0 0 0 1px hsl(0 0% 100% / 0.04), inset 0 1px 0 hsl(0 0% 100% / 0.03)",
                    }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {/* Top accent line */}
                    <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                    <div className={`relative z-10 flex ${isWide ? "flex-col sm:flex-row" : "flex-col"}`}>
                      {/* Metric hero area */}
                      <div
                        className={`flex items-center justify-center bg-primary/[0.04] border-b sm:border-b-0 border-border/20 ${
                          isWide
                            ? "sm:w-[280px] sm:border-r sm:border-b-0 p-8 sm:p-10"
                            : "p-8"
                        }`}
                      >
                        <div className="text-center">
                          <motion.div
                            className="font-display font-bold text-4xl md:text-5xl text-gradient mb-1"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.05, type: "spring", stiffness: 200 }}
                          >
                            {card.metric}
                          </motion.div>
                          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 font-semibold font-display">
                            {card.metricLabel}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold font-display px-2.5 py-1 rounded-full bg-primary/[0.08] border border-primary/[0.12]">
                            {card.type}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                          {card.label}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground/80">
                          <TrendingUp size={14} className="text-primary" />
                          <span>{card.result}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24 bg-foreground">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Next Could Be You</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Add Your Brand<br />
              <span className="text-gradient">To This List?</span>
            </h2>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Let's discuss your goals and build a digital system that drives results you can measure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-primary-foreground font-display">
                Start a Project <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-primary-foreground/20 text-primary-foreground/80 font-display font-semibold text-base hover:bg-primary-foreground/5 transition-colors">
                Explore Services <ExternalLink size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
