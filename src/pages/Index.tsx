import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Palette, Bot, Star, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroIllustration, ProcessIllustration, WebAppIllustration, AdsIllustration, AIIllustration, WorkIllustration } from "@/components/Illustrations";

const services = [
  {
    icon: <Globe size={22} />,
    title: "Website & App Development",
    desc: "Fast, scalable, conversion-focused digital products that turn visitors into customers.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Performance Marketing",
    desc: "Data-driven ad campaigns across Google, Meta, and LinkedIn that drive measurable ROI.",
  },
  {
    icon: <Palette size={22} />,
    title: "Creative & Branding",
    desc: "Compelling visual identities and brand systems that make you unforgettable.",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Agents & Automation",
    desc: "Intelligent systems that eliminate manual work and scale your customer experience.",
  },
  {
    icon: <Zap size={22} />,
    title: "Social Media Marketing",
    desc: "Strategic content, community building, and engagement that grows your brand.",
  },
  {
    icon: <Star size={22} />,
    title: "Brand Strategy",
    desc: "Positioning, messaging, and identity that create long-term brand equity.",
  },
];

const metrics = [
  { value: "150+", label: "Projects Delivered" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Industries Served" },
];

const whyItems = [
  "Full-stack digital expertise under one roof",
  "Data-driven strategies, not guesswork",
  "AI-powered systems that scale with you",
  "Transparent reporting and clear KPIs",
  "Long-term partnership mindset",
  "Proven results across industries",
];

const processSteps = [
  {
    num: "01",
    title: "Strategy",
    desc: "We audit your market, competitors, and digital presence to define a clear growth roadmap.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Our team executes with precision — design, development, content, and systems.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "We deploy, test, and go live — ensuring every element performs from day one.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "We optimize, iterate, and expand — turning early results into compounding growth.",
  },
];

export default function Index() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
        {/* Background */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-electric-100/60 via-violet-light/20 to-cyan-100/30 blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cyan-100/40 to-electric-100/20 blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-50 border border-electric-200/60 text-electric-600 text-xs font-semibold font-display uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-500 animate-pulse" />
              Digital Growth Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-7"
            >
              We Build Digital{" "}
              <span className="text-gradient">Systems That</span>{" "}
              Scale Brands
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              High-performance websites, apps, marketing, AI automation, and creative — built to drive measurable growth for ambitious brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/work" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold text-white font-display">
                View Our Work
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn-outline-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold font-display">
                Start a Project
                <ChevronRight size={17} />
              </Link>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-4 gap-6 mt-14 pt-10 border-t border-border/60"
            >
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl font-bold text-foreground">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[520px] lg:h-[600px]"
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24 bg-muted/30">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              Full-Spectrum Digital<br />
              <span className="text-gradient">Growth Services</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              From strategy to execution, we deliver every digital capability your brand needs to grow — under one roof.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.07}>
                <Link to="/services" className="block h-full">
                  <div className="service-card h-full p-7 rounded-3xl bg-card border border-border/60 shadow-card group">
                    <div className="w-12 h-12 rounded-2xl bg-electric-50 border border-electric-100 flex items-center justify-center text-primary mb-5 group-hover:bg-electric-100 transition-colors">
                      {s.icon}
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SCALEGIGA ── */}
      <section className="py-24">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <div className="relative h-[380px] rounded-3xl overflow-hidden bg-gradient-hero border border-border/40 shadow-md-electric p-8">
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-primary opacity-15 blur-2xl" />
              <div className="h-[280px]">
                <WebAppIllustration />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 glass-card rounded-2xl px-5 py-3 border border-electric-100">
                <div className="text-xs text-muted-foreground mb-0.5 font-medium">Avg. Site Performance</div>
                <div className="font-display font-bold text-xl text-foreground">98 / 100 <span className="text-primary text-sm">↑</span></div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Why ScaleGiga</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
                One Partner.<br />
                <span className="text-gradient">Infinite Growth.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Most agencies do one thing. We do everything — and we make sure every piece works together. Strategy, technology, creativity, and automation — aligned to your growth goals.
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {whyItems.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.07}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={17} className="text-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <Link to="/story" className="btn-outline-electric inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display mt-10">
                Our Story <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary opacity-[0.07] blur-3xl" />

        <div className="section-container relative z-10">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Our Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              Strategy → Build →<br />
              <span className="text-gradient">Launch → Scale</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              A repeatable four-phase system that turns business goals into measurable digital results.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative p-7 rounded-3xl border border-border bg-muted/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                  <div className="text-4xl font-display font-bold text-gradient mb-5 opacity-60">{step.num}</div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  <div className="absolute bottom-7 right-7 w-8 h-8 rounded-xl border border-border flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16">
            <div className="h-24">
              <ProcessIllustration />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED WORK PREVIEW ── */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Built to Convert.<br />
                <span className="text-gradient">Designed to Scale.</span>
              </h2>
            </div>
            <Link to="/work" className="btn-outline-electric inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display shrink-0">
              View All Work <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-3xl border border-border/60 overflow-hidden shadow-md-electric p-8 bg-gradient-hero">
              <div className="h-[280px] md:h-[360px]">
                <WorkIllustration />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
