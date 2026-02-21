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
    color: "from-electric-50 to-electric-100/30",
    tag: "hsl(232 90% 65%)",
    metric: "+187% Conversion Rate",
  },
  {
    title: "High-Performing Ad Campaigns",
    desc: "Data-driven advertising across Google, Meta, and LinkedIn that drives qualified leads at scale.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn", "Analytics"],
    illustration: <AdsIllustration />,
    color: "from-cyan-50 to-cyan-100/20",
    tag: "hsl(190 100% 45%)",
    metric: "4.8x Average ROAS",
  },
  {
    title: "AI-Powered Automation Systems",
    desc: "Intelligent workflows and AI agents that eliminate manual tasks and scale customer interactions.",
    tags: ["AI Chatbots", "Automation", "CRM", "APIs"],
    illustration: <AIIllustration />,
    color: "from-violet-light/10 to-accent/5",
    tag: "hsl(260 80% 65%)",
    metric: "60% Time Saved",
  },
];

const projectCards = [
  {
    label: "E-Commerce Brand",
    type: "Website + Performance Marketing",
    result: "3.2x Revenue Growth",
    color: "hsl(232 90% 65%)",
    bg: "from-electric-50 to-white",
  },
  {
    label: "B2B SaaS Startup",
    type: "Brand Strategy + Website",
    result: "120 Qualified Leads / Month",
    color: "hsl(190 100% 45%)",
    bg: "from-cyan-50 to-white",
  },
  {
    label: "Professional Services Firm",
    type: "Social Media + Ad Campaigns",
    result: "240% Follower Growth",
    color: "hsl(260 80% 65%)",
    bg: "from-violet-light/10 to-white",
  },
  {
    label: "Consumer App",
    type: "App Development + ASO",
    result: "50K Downloads in 90 Days",
    color: "hsl(232 90% 65%)",
    bg: "from-electric-50 to-white",
  },
  {
    label: "Retail Brand",
    type: "Product Photography + Ads",
    result: "5.1x ROAS on Meta",
    color: "hsl(190 100% 45%)",
    bg: "from-cyan-50 to-white",
  },
  {
    label: "Healthcare Startup",
    type: "AI Automation + Website",
    result: "80% Support Cost Reduction",
    color: "hsl(260 80% 65%)",
    bg: "from-violet-light/10 to-white",
  },
];

export default function Work() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-3xl -translate-y-1/2 translate-x-1/3"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Our Work</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Selected Work &{" "}
              <span className="text-gradient">Capabilities</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              While we continuously expand our portfolio, our work focuses on delivering measurable results — from conversion-focused websites to high-performing ad campaigns and scalable automation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview grid */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="rounded-3xl border border-border/60 overflow-hidden shadow-card p-8 md:p-12 bg-gradient-hero mb-6">
              <div className="h-[280px] md:h-[380px]">
                <WorkIllustration />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-muted/30">
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
                  {/* Illustration */}
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className={`h-[260px] rounded-3xl bg-gradient-to-br ${cap.color} border border-border/50 shadow-card p-8`}>
                      {cap.illustration}
                    </div>
                  </div>
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-bold font-display uppercase tracking-widest mb-5 border"
                      style={{ color: cap.tag, borderColor: `${cap.tag}30`, background: `${cap.tag}10` }}
                    >
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

      {/* Project cards */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Recent Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              Real Brands. Real{" "}
              <span className="text-gradient">Growth.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A snapshot of what we've delivered for clients across industries. Every number is a real result from a real partnership.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.07}>
                <div className={`service-card p-7 rounded-3xl bg-gradient-to-br ${card.bg} border border-border/60 shadow-card group`}>
                  {/* Placeholder illustration area */}
                  <div
                    className="w-full h-28 rounded-2xl mb-5 flex items-center justify-center"
                    style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}
                  >
                    <div
                      className="text-xs font-semibold font-display uppercase tracking-widest"
                      style={{ color: card.color }}
                    >
                      {card.type}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{card.label}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{card.type}</p>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold font-display"
                    style={{ background: `${card.color}12`, color: card.color }}
                  >
                    ↑ {card.result}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Next Could Be You</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-jet mb-6">
              Ready to Add Your Brand<br />
              <span className="text-gradient">To This List?</span>
            </h2>
            <p className="text-jet-400 max-w-lg mx-auto mb-10 leading-relaxed">
              Let's discuss your goals and build a digital system that drives results you can measure and results that compound.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white font-display">
                Start a Project <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-jet-400/30 text-jet font-display font-semibold text-base hover:bg-jet/5 transition-colors">
                Explore Services <ExternalLink size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
