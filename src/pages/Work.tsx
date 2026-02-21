import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { WorkIllustration, WebAppIllustration, AdsIllustration, AIIllustration } from "@/components/Illustrations";

const capabilities = [
  {
    title: "Revenue-Engineered Platforms",
    desc: "Custom digital infrastructure built to convert at rates your competitors dream about — with architecture designed for 10x scale.",
    tags: ["React", "Next.js", "CRO", "Performance"],
    illustration: <WebAppIllustration />,
    metric: "+340% Avg. ROI",
  },
  {
    title: "Autonomous Revenue Systems",
    desc: "AI-powered automation that handles lead qualification, onboarding, and retention while your team focuses on strategy.",
    tags: ["AI Agents", "Automation", "CRM", "APIs"],
    illustration: <AIIllustration />,
    metric: "$2.1M Saved/yr",
  },
  {
    title: "Distribution Engineering",
    desc: "Strategic partnerships and referral systems that create exponential reach without linear cost increases.",
    tags: ["Partnerships", "Distribution", "Growth", "Scale"],
    illustration: <AdsIllustration />,
    metric: "5x Market Reach",
  },
];

const projectCards = [
  {
    label: "Luxury DTC Brand",
    type: "Growth Infrastructure + AI",
    result: "$8M → $24M ARR",
  },
  {
    label: "Enterprise SaaS",
    type: "Platform Architecture",
    result: "12% → 67% Onboarding",
  },
  {
    label: "Fintech Scale-Up",
    type: "Revenue Automation",
    result: "$420K/yr Costs Saved",
  },
  {
    label: "Luxury Hospitality",
    type: "Distribution Engineering",
    result: "5.1x Partnership ROI",
  },
  {
    label: "Premium E-Commerce",
    type: "Full Growth Infrastructure",
    result: "3% → 18% Conversion",
  },
  {
    label: "Professional Services",
    type: "AI + Automation",
    result: "80% Support Cost Cut",
  },
];

export default function Work() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold font-body uppercase text-primary mb-5" style={{ letterSpacing: "3px" }}>Our Results</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Measured in Revenue,{" "}
              <span className="text-gradient">Not Deliverables</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-body">
              Every metric below is from a real engagement with a real brand. We don't do vanity numbers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="bg-card border border-border overflow-hidden p-8 md:p-12" style={{ borderRadius: "4px" }}>
              <div className="h-[280px] md:h-[380px]">
                <WorkIllustration />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Core Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              What We Deliver,{" "}
              <span className="text-gradient">Consistently</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="h-[260px] bg-card border border-border p-8" style={{ borderRadius: "4px" }}>
                      {cap.illustration}
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="inline-block px-3 py-1.5 text-xs font-body font-semibold uppercase text-primary mb-5 border border-primary/20 bg-primary/5" style={{ borderRadius: "2px", letterSpacing: "2px" }}>
                      {cap.metric}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 font-body">{cap.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-muted text-xs font-medium text-muted-foreground border border-border font-body" style={{ borderRadius: "2px" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Client Results</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              Real Brands. Real{" "}
              <span className="text-gradient">Revenue.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.07}>
                <div className="service-card p-7 bg-card border border-border group" style={{ borderRadius: "4px" }}>
                  <div className="w-full h-28 bg-muted border border-border flex items-center justify-center mb-5" style={{ borderRadius: "2px" }}>
                    <div className="text-xs font-semibold font-body uppercase text-muted-foreground" style={{ letterSpacing: "2px" }}>
                      {card.type}
                    </div>
                  </div>
                  <h3 className="font-display text-foreground text-lg mb-2">{card.label}</h3>
                  <p className="text-sm text-muted-foreground mb-5 font-body">{card.type}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-body font-semibold bg-primary/10 text-primary" style={{ borderRadius: "2px" }}>
                    ↑ {card.result}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Ready to Add Your Brand{" "}
              <span className="text-gradient">To This List?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed font-body">
              Let's discuss your growth ceiling and build the infrastructure to break through it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground font-body"
                style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
              >
                Book a Strategy Call <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 text-base text-muted-foreground hover:text-primary font-body font-medium transition-colors">
                Explore Services <ExternalLink size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
