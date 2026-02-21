import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ROICalculator from "@/components/ROICalculator";
import {
  WebAppIllustration,
  AdsIllustration,
  AIIllustration,
} from "@/components/Illustrations";

const services = [
  {
    id: "web",
    label: "Growth Infrastructure",
    title: "Strategic Web Architecture",
    subtitle: "Your digital foundation — engineered for 8-figure scale.",
    intro:
      "We design and develop custom platforms that turn visitors into customers at rates your competitors can only dream about. Every page is conversion-optimized, performance-tuned, and built to scale with your ambition.",
    benefits: [
      "Custom architecture tailored to your revenue model",
      "Sub-2-second load times across all devices",
      "Conversion rate optimization built into every interaction",
      "Scalable infrastructure for 10x traffic growth",
    ],
    illustration: <WebAppIllustration />,
  },
  {
    id: "ai",
    label: "AI Automation",
    title: "Autonomous Revenue Systems",
    subtitle: "Replace overhead with intelligence that compounds.",
    intro:
      "We build AI-powered systems that handle lead qualification, customer onboarding, support, and retention — so your team focuses on strategy while machines handle execution.",
    benefits: [
      "Custom AI agents for sales, support, and operations",
      "Workflow automation that eliminates 60%+ of manual tasks",
      "Real-time analytics and predictive revenue modeling",
      "Integration with your existing tech stack",
    ],
    illustration: <AIIllustration />,
  },
  {
    id: "partnerships",
    label: "Partnership Ecosystems",
    title: "Distribution Engineering",
    subtitle: "Build channels that compound, not campaigns that expire.",
    intro:
      "We engineer strategic partnerships, referral systems, and distribution channels that create exponential reach without linear cost increases.",
    benefits: [
      "Strategic partnership identification and outreach",
      "Referral system architecture and automation",
      "Co-marketing frameworks with measurable attribution",
      "Channel expansion across luxury verticals",
    ],
    illustration: <AdsIllustration />,
  },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
  { name: "Stripe", icon: "💳" },
  { name: "Shopify Plus", icon: "🛍️" },
];

export default function Services() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>
              What We Build
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
              Your Website Is Either a<br />
              <span className="text-gradient">Revenue Engine</span> or a Business Card.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-10 font-body">
              We build the former. Custom infrastructure for brands that can't afford downtime, slow load speeds, or conversion leaks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="section-container max-w-5xl mx-auto">
          <ScrollReveal>
            <ROICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-center text-xs font-body uppercase text-muted-foreground mb-8" style={{ letterSpacing: "2px" }}>
              Infrastructure trusted by $100M+ brands
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-sm bg-muted border border-border flex items-center justify-center text-lg">
                    {tech.icon}
                  </div>
                  <span className="text-xs text-muted-foreground font-body">{tech.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${i % 2 === 1 ? "bg-muted/30" : ""}`}
        >
          <div className="section-container">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <ScrollReveal direction={i % 2 === 1 ? "right" : "left"} className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative h-[320px] bg-card border border-border p-8 flex items-center justify-center overflow-hidden" style={{ borderRadius: "4px" }}>
                  <div className="w-full h-full">
                    {service.illustration}
                  </div>
                </div>
              </ScrollReveal>

              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <ScrollReveal direction={i % 2 === 1 ? "left" : "right"}>
                  <p className="text-xs font-body uppercase text-primary mb-4 font-semibold" style={{ letterSpacing: "3px" }}>
                    {service.label}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight">
                    {service.title}
                  </h2>
                  <p className="font-body text-base text-muted-foreground mb-5 font-medium">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-sm font-body">
                    {service.intro}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} className="text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80 leading-snug font-body">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-foreground font-body"
                    style={{ background: "linear-gradient(135deg, hsl(38 70% 35%), hsl(43 80% 49%))", borderRadius: "2px" }}
                  >
                    Get Started <ArrowRight size={15} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Case Study Teaser */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-[320px] bg-card border border-border p-8 flex items-center justify-center" style={{ borderRadius: "4px" }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <p className="text-muted-foreground text-sm font-body">Premium dashboard mockup</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-body uppercase text-primary mb-4 font-semibold" style={{ letterSpacing: "3px" }}>
                  Enterprise SaaS
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                  How We Scaled a Fintech's Onboarding from 12% to 67%
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Reduced infrastructure costs by $420K/yr",
                    "Increased MRR by $1.8M in 6 months",
                    "Achieved 99.97% uptime (from 94%)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80 font-body">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/results"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold font-body hover:underline"
                >
                  Read Full Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              Not Sure Where to Start?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-base leading-relaxed font-body">
              Book a private strategy session and we'll map out the exact infrastructure that will drive the most growth for your brand.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground font-body"
              style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
            >
              Book a Strategy Call <ArrowRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
