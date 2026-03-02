import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe, BarChart3, Palette, Bot, Star, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";
import { WebAppIllustration } from "@/components/Illustrations";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServiceShowcase from "@/components/ServiceShowcase";
import { useRef } from "react";
import HeroDashboard from "@/components/HeroDashboard";

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
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 sm:pt-28 pb-4 sm:pb-8">
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

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 lg:gap-20 items-center">
          {/* Left – Messaging */}
          <div className="lg:pl-2">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/[0.06] border border-primary/15 text-primary text-[10px] sm:text-[11px] font-semibold font-display uppercase tracking-[0.2em] mb-4 sm:mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Digital Growth Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[clamp(1.7rem,4.2vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-foreground mb-3 sm:mb-7"
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
              className="text-[13px] sm:text-[15px] text-foreground/60 leading-[1.55] mb-4 sm:mb-7 max-w-[500px]"
            >
              High-performance websites, growth infrastructure, AI automation and performance marketing — engineered for measurable scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-row items-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-gradient-primary text-primary-foreground text-[14px] sm:text-[15px] font-bold font-display shadow-[0_4px_24px_hsl(142_80%_45%/0.35),inset_0_1px_0_hsl(142_90%_60%/0.3)] hover:shadow-[0_8px_40px_hsl(142_80%_45%/0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Start a Project
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg border border-border/60 text-foreground/80 text-[14px] sm:text-[15px] font-semibold font-display hover:bg-primary/[0.06] hover:border-primary/30 hover:text-foreground transition-all duration-300"
              >
                View Case Studies
                <ChevronRight size={15} />
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-[11px] font-display uppercase tracking-[0.15em] text-muted-foreground/60 mt-3 sm:mt-5"
            >
              Trusted by 50+ growth-focused brands
            </motion.p>
          </div>

          {/* Right – Premium Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[220px] sm:h-[320px] lg:h-[400px]"
          >
            <HeroDashboard />
          </motion.div>
        </div>

        {/* Scroll indicator - desktop only */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
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

      <ServiceShowcase />
      {/* ── WHY SCALEGIGA ── */}
      <section className="py-6 sm:py-8">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          <ScrollReveal variant="scale">
            <div className="relative h-[380px] flex items-center justify-center">
              {/* Ambient glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/[0.08] blur-[80px]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative w-full h-[300px]"
                animate={{ y: [0, -8, 0], rotateY: [0, -1.5, 0], rotateX: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ perspective: 800 }}
              >
                <WebAppIllustration />
              </motion.div>
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-4 left-4 glass-card rounded-2xl px-5 py-3 border border-primary/[0.15]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
          <ProcessTimeline />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-28 bg-foreground relative overflow-hidden">
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
