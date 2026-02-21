import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Palette, Bot, Star, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";
import { HeroIllustration, ProcessIllustration, WebAppIllustration, AdsIllustration, AIIllustration, WorkIllustration } from "@/components/Illustrations";
import { useRef } from "react";

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
  const heroBgScale = useTransform(heroScroll, [0, 1], [1, 1.15]);

  return (
    <main>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-24 pb-6">
        {/* Background with parallax */}
        <motion.div className="absolute inset-0 dot-pattern opacity-40" style={{ y: heroParallaxY }} />
        <motion.div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/[0.08] via-primary-deep/[0.04] to-transparent blur-3xl -translate-y-1/3 translate-x-1/3"
          style={{ scale: heroBgScale }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/[0.06] to-primary-glow/[0.03] blur-3xl translate-y-1/2 -translate-x-1/4"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] border border-primary/20 text-primary text-xs font-semibold font-display uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Digital Growth Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-foreground mb-7"
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
              <Link to="/work" className="btn-glow magnetic-hover inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold text-white font-display">
                View Our Work
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight size={17} />
                </motion.span>
              </Link>
              <Link to="/contact" className="btn-outline-electric magnetic-hover inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold font-display">
                Start a Project
                <ChevronRight size={17} />
              </Link>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 pt-6 border-t border-border/60"
            >
              {metrics.map((m) => (
                <motion.div key={m.label} variants={staggerItem}>
                  <div className="font-display text-2xl font-bold text-foreground">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right – Illustration with 3D hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[320px] sm:h-[420px] lg:h-[600px]"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="w-full h-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <HeroIllustration />
            </motion.div>
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
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.6, 1, 0.6] }}
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
              <div className="h-[280px] md:h-[360px]">
                <WorkIllustration />
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
