import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Palette, Bot, Star, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";
import { ProcessIllustration, WebAppIllustration } from "@/components/Illustrations";
import { useRef } from "react";
import HeroDashboard from "@/components/HeroDashboard";

const services = [
  {
    icon: <Star size={22} />,
    title: "Brand Strategy",
    desc: "Positioning, messaging, and identity that create long-term brand equity.",
  },
  {
    icon: <Globe size={22} />,
    title: "Website & App Development",
    desc: "Fast, scalable, conversion-focused digital products that turn visitors into customers.",
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
    icon: <BarChart3 size={22} />,
    title: "Performance Marketing",
    desc: "Data-driven ad campaigns across Google, Meta, and LinkedIn that drive measurable ROI.",
  },
];

const metrics = [
  { value: "21+", label: "Projects Delivered" },
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroParallaxY = useTransform(heroScroll, [0, 1], [0, -80]);

  return (
    <main>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[105vh] flex items-center overflow-hidden pt-32 pb-12">
        {/* Animated grid background */}
        <motion.div className="absolute inset-0 grid-pattern opacity-[0.04]" style={{ y: heroParallaxY }} />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20" />
        
        {/* Radial glow behind right side */}
        <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[100px]" />
        <motion.div
          className="absolute top-1/3 right-[20%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle ambient glow left */}
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[60px]"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – Messaging */}
          <div className="lg:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.06] border border-primary/15 text-primary text-[11px] font-semibold font-display uppercase tracking-[0.2em] mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Digital Systems Lab
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5.5vw,5.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-foreground mb-10"
            >
              We Engineer Digital{" "}
              <span className="relative inline-block">
                Systems
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-primary-glow rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                />
              </span>{" "}
              That{" "}
              <span className="text-gradient">Scale</span>{" "}
              Brands.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[17px] text-foreground/60 leading-[1.7] mb-10 max-w-[540px]"
            >
              High-performance websites, growth infrastructure, AI automation and performance marketing — engineered for measurable scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground text-[15px] font-bold font-display shadow-[0_4px_24px_hsl(142_80%_45%/0.35),inset_0_1px_0_hsl(142_90%_60%/0.3)] hover:shadow-[0_8px_40px_hsl(142_80%_45%/0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-border/60 text-foreground/80 text-[15px] font-semibold font-display hover:bg-primary/[0.06] hover:border-primary/30 hover:text-foreground transition-all duration-300"
              >
                View Case Studies
                <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[11px] font-display uppercase tracking-[0.15em] text-muted-foreground/60 mt-7"
            >
              Trusted by 50+ growth-focused brands
            </motion.p>
          </div>

          {/* Right – Premium Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[360px] sm:h-[420px] lg:h-[520px]"
          >
            <HeroDashboard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-8 bg-muted/30">
        <div className="section-container">
          <ScrollReveal variant="blur" className="text-center mb-16">
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
                  <AnimatedCard className="service-card h-full p-7 rounded-3xl bg-card border border-border/60 shadow-card group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/[0.08] border border-primary/[0.15] flex items-center justify-center text-primary mb-5 group-hover:bg-primary/[0.15] transition-colors icon-hover-spin">
                      {s.icon}
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </AnimatedCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SCALEGIGA ── */}
      <section className="py-8">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal variant="scale">
            <div className="relative h-[380px] rounded-3xl overflow-hidden bg-gradient-hero border border-border/40 shadow-md-electric p-8">
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-primary opacity-15 blur-2xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="h-[280px]">
                <WebAppIllustration />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 glass-card rounded-2xl px-5 py-3 border border-primary/[0.15]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-muted-foreground mb-0.5 font-medium">Avg. Site Performance</div>
                <div className="font-display font-bold text-xl text-foreground">98 / 100 <span className="text-primary text-sm">↑</span></div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal variant="blur">
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
                <ScrollReveal key={item} delay={i * 0.07} direction="right">
                  <motion.div
                    className="flex items-center gap-3 group cursor-default"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle2 size={17} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <Link to="/story" className="btn-outline-electric magnetic-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display mt-10">
                Our Story <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-8 bg-card relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary opacity-[0.07] blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10">
          <ScrollReveal variant="blur" className="text-center mb-16">
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
              <ScrollReveal key={step.num} delay={i * 0.1} variant="scale">
                <AnimatedCard className="relative p-7 rounded-3xl border border-border bg-muted/50 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                  <div className="text-4xl font-display font-bold text-gradient mb-5 opacity-60">{step.num}</div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  <div className="absolute bottom-7 right-7 w-8 h-8 rounded-xl border border-border flex items-center justify-center group-hover:border-primary/40 transition-all group-hover:rotate-45 duration-300">
                    <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16" variant="parallax">
            <div className="h-24">
              <ProcessIllustration />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED WORK PREVIEW ── */}
      <section className="py-8">
        <div className="section-container">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Built to Convert.<br />
                <span className="text-gradient">Designed to Scale.</span>
              </h2>
            </div>
            <Link to="/work" className="btn-outline-electric magnetic-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold font-display shrink-0">
              View All Work <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <AnimatedCard className="rounded-3xl border border-border/60 overflow-hidden shadow-md-electric p-8 bg-gradient-hero">
              <div className="h-[280px] md:h-[360px] flex items-center justify-center">
                <HeroDashboard />
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-28 bg-foreground relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="section-container relative z-10 text-center">
          <ScrollReveal variant="blur">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">
              Next Could Be You
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-jet mb-6 leading-tight">
              Ready to Add Your Brand<br />
              <span className="text-gradient">To This List?</span>
            </h2>
            <p className="text-jet-400 max-w-lg mx-auto text-base leading-relaxed mb-10">
              Let's discuss your goals and build a digital system that drives results you can measure and results that compound.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/contact" className="btn-glow magnetic-hover inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white font-display">
                Start a Project
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn-outline-electric magnetic-hover inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold font-display">
                Explore Services
                <ChevronRight size={17} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
  );
}
