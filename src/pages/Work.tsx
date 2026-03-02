import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { WorkIllustration, WebAppIllustration, AdsIllustration, AIIllustration } from "@/components/Illustrations";

const capabilities = [
  {
    title: "Conversion-Focused Websites",
    desc: "Websites engineered to turn visitors into customers with optimized user journeys, clear CTAs, and performance-first architecture.",
    tags: ["React", "Next.js", "CRO", "SEO"],
    illustration: <WebAppIllustration />,
    metric: "+187% Conversion Rate",
  },
  {
    title: "High-Performing Ad Campaigns",
    desc: "Data-driven advertising across Google, Meta, and LinkedIn that drives qualified leads at scale.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn", "Analytics"],
    illustration: <AdsIllustration />,
    metric: "4.8x Average ROAS",
  },
  {
    title: "AI-Powered Automation Systems",
    desc: "Intelligent workflows and AI agents that eliminate manual tasks and scale customer interactions.",
    tags: ["AI Chatbots", "Automation", "CRM", "APIs"],
    illustration: <AIIllustration />,
    metric: "60% Time Saved",
  },
];

const projectCards = [
  { label: "E-Commerce Brand", type: "Website + Performance Marketing", result: "3.2x Revenue Growth" },
  { label: "B2B SaaS Startup", type: "Brand Strategy + Website", result: "120 Qualified Leads / Month" },
  { label: "Professional Services Firm", type: "Social Media + Ad Campaigns", result: "240% Follower Growth" },
  { label: "Consumer App", type: "App Development + ASO", result: "50K Downloads in 90 Days" },
  { label: "Retail Brand", type: "Product Photography + Ads", result: "5.1x ROAS on Meta" },
  { label: "Healthcare Startup", type: "AI Automation + Website", result: "80% Support Cost Reduction" },
];

export default function Work() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-3xl -translate-y-1/2 translate-x-1/3"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Our Work</p>
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

      {/* Overview */}
      <section className="py-12 sm:py-20">
        <div className="section-container">
          <ScrollReveal>
            <motion.div
              className="h-[280px] md:h-[420px]"
              animate={{ y: [0, -8, 0], rotateX: [0, 1, 0], rotateY: [0, -1.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <WorkIllustration />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Capabilities — horizontal scroll cards */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Core Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              What We Deliver,<br />
              <span className="text-gradient">Consistently</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="h-[260px] rounded-2xl bg-card border border-border/40 shadow-card p-6 overflow-hidden">
                      {cap.illustration}
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="inline-block px-3 py-1.5 rounded-full text-xs font-bold font-display uppercase tracking-widest mb-5 border border-primary/30 bg-primary/[0.06] text-primary">
                      {cap.metric}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{cap.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{cap.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground border border-border">
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

      {/* Project cards — stacked rows with reveal animation */}
      <section className="py-12 sm:py-24">
        <div className="section-container">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Recent Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              Real Brands. Real{" "}
              <span className="text-gradient">Growth.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.07}>
                <motion.div
                  className="relative p-6 rounded-2xl bg-card border border-border/40 overflow-hidden group"
                  whileHover={{ y: -6, borderColor: "hsl(142 80% 45% / 0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-full h-24 rounded-xl mb-5 flex items-center justify-center bg-primary/[0.04] border border-primary/[0.08]">
                    <span className="text-xs font-semibold font-display uppercase tracking-widest text-primary/60">
                      {card.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{card.label}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{card.type}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold font-display bg-primary/[0.08] text-primary border border-primary/[0.15]">
                    ↑ {card.result}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
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
