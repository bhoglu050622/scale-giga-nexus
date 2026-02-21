import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Bot, Network } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";
import LogoMarquee from "@/components/LogoMarquee";
import { HeroIllustration } from "@/components/Illustrations";
import { useRef } from "react";

const services = [
  {
    icon: <Globe size={22} />,
    title: "Strategic Web Architecture",
    desc: "Custom platforms engineered for 8-figure scale, not 5-figure traffic.",
    stat: "340% Avg. ROI",
  },
  {
    icon: <Bot size={22} />,
    title: "Autonomous Revenue Systems",
    desc: "Replace your ops overhead with agents that work while you sleep.",
    stat: "$2.1M Saved/yr",
  },
  {
    icon: <Network size={22} />,
    title: "Distribution Engineering",
    desc: "We build channels that compound, not campaigns that expire.",
    stat: "5x Market Reach",
  },
];

const processSteps = [
  {
    num: "01",
    phase: "AUDIT & BLUEPRINT",
    title: "Reverse-Engineer",
    desc: "Reverse-engineer your market position and build the 24-month roadmap.",
  },
  {
    num: "02",
    phase: "BUILD & INTEGRATE",
    title: "Senior Implementation",
    desc: "Senior-only implementation. No handoffs to junior devs.",
  },
  {
    num: "03",
    phase: "LAUNCH & VALIDATE",
    title: "Revenue Sprint",
    desc: "90-day sprint to first $500K in new revenue.",
  },
  {
    num: "04",
    phase: "SCALE & COMPOUND",
    title: "Autonomous Growth",
    desc: "Hand off autonomous systems or retain us as your growth board.",
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
        <motion.div className="absolute inset-0 dot-pattern opacity-40" style={{ y: heroParallaxY }} />
        <motion.div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/[0.08] via-primary-deep/[0.04] to-transparent blur-3xl -translate-y-1/3 translate-x-1/3"
          style={{ scale: heroBgScale }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/[0.08] border border-primary/20 text-primary text-xs font-semibold font-body uppercase tracking-widest mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Exclusive Growth Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground mb-7"
            >
              Build Digital{" "}
              <span className="text-gradient">Empires,</span>{" "}
              Not Websites.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[540px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
            >
              We engineer growth infrastructure for luxury brands doing $2M–$50M. No templates. No junior teams. Just senior strategists who've scaled 8-figure businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="magnetic-hover inline-flex items-center gap-2 px-7 py-4 text-[15px] font-semibold text-primary-foreground font-body"
                style={{
                  background: "hsl(43 80% 49%)",
                  borderRadius: "2px",
                  minWidth: "280px",
                  height: "60px",
                  justifyContent: "center",
                }}
              >
                Book Your Private Strategy Session
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowRight size={17} />
                </motion.span>
              </Link>
              <a
                href="#social-proof"
                className="inline-flex items-center gap-2 px-4 py-4 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                View Our Results
              </a>
            </motion.div>

            {/* Mobile CTA */}
            <div className="md:hidden mt-6">
              <Link
                to="/contact"
                className="block w-full text-center py-4 text-[15px] font-semibold text-primary-foreground font-body"
                style={{ background: "hsl(43 80% 49%)", borderRadius: "2px", height: "56px", lineHeight: "24px" }}
              >
                Book Your Private Strategy Session →
              </Link>
            </div>
          </div>

          {/* Right – Illustration */}
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

      {/* ── SERVICES GRID ── */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal variant="blur" className="text-center mb-16">
            <p className="text-xs font-semibold font-body uppercase tracking-widest text-primary mb-4" style={{ letterSpacing: "3px" }}>What We Build</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              Three Pillars of{" "}
              <span className="text-gradient">Infinite Growth</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Link to="/services" className="block h-full">
                  <AnimatedCard className="service-card h-full p-8 bg-card border border-border hover:border-primary/40 transition-colors group" style={{ borderRadius: "4px" }}>
                    <div className="w-12 h-12 rounded-sm bg-primary/[0.08] border border-primary/[0.15] flex items-center justify-center text-primary mb-6 group-hover:bg-primary/[0.15] transition-colors">
                      {s.icon}
                    </div>
                    <h3 className="font-body font-medium text-[21px] text-foreground mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                    <p className="font-display text-2xl text-primary">{s.stat}</p>
                  </AnimatedCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE INFINITE GROWTH PROCESS ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="section-container relative z-10">
          <ScrollReveal variant="blur" className="text-center mb-16">
            <p className="text-xs font-semibold font-body uppercase text-primary mb-4" style={{ letterSpacing: "3px" }}>Our Process</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
              The Infinite Growth Process
            </h2>
          </ScrollReveal>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute top-[60px] left-[120px] right-[120px] h-[2px] bg-primary/20" />
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.12} variant="scale">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[120px] h-[120px] rounded-full border-2 border-primary bg-transparent flex items-center justify-center mb-6 relative">
                      <span className="font-display text-5xl text-primary/20" style={{ WebkitTextStroke: "2px hsl(43 80% 49%)", WebkitTextFillColor: "transparent" }}>{step.num}</span>
                    </div>
                    <p className="text-xs font-body uppercase text-primary mb-2 font-semibold" style={{ letterSpacing: "3px" }}>{step.phase}</p>
                    <h3 className="font-body font-medium text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-[80px] h-[80px] shrink-0 rounded-full border-2 border-primary bg-transparent flex items-center justify-center">
                    <span className="font-display text-3xl text-primary/20" style={{ WebkitTextStroke: "1.5px hsl(43 80% 49%)", WebkitTextFillColor: "transparent" }}>{step.num}</span>
                  </div>
                  <div>
                    <p className="text-xs font-body uppercase text-primary mb-1 font-semibold" style={{ letterSpacing: "3px" }}>{step.phase}</p>
                    <h3 className="font-body font-medium text-foreground text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section id="social-proof" className="py-24 bg-muted/30">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-center text-xs font-body uppercase text-muted-foreground mb-8 font-semibold" style={{ letterSpacing: "2px" }}>
              Trusted by category leaders in luxury, fintech, and enterprise SaaS
            </p>
          </ScrollReveal>

          <LogoMarquee />

          {/* Testimonial */}
          <ScrollReveal className="mt-16 max-w-3xl mx-auto">
            <div className="p-12 bg-card border-l-4 border-primary" style={{ borderRadius: "0" }}>
              <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                "ScaleGiga didn't just build our site—they rebuilt our entire customer acquisition economics. We went from 3% to 18% conversion in 4 months."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-sm">RS</div>
                <div>
                  <p className="text-foreground font-body font-medium text-sm">— CEO, Renova Luxury Skincare</p>
                  <p className="text-primary font-display text-lg mt-1">$8M → $24M ARR in 11 months</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-card" />
        <div className="section-container relative z-10 text-center">
          <ScrollReveal variant="blur">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Your competition uses agencies.<br />
              <span className="text-gradient">You need a growth board.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed mb-10">
              First 10 strategy sessions this quarter include a complimentary market dominance audit.
            </p>
            <div className="relative inline-block">
              <Link
                to="/contact"
                className="magnetic-hover inline-flex items-center gap-2 px-10 py-5 text-[17px] font-semibold text-primary-foreground font-body"
                style={{ background: "hsl(43 80% 49%)", borderRadius: "2px", minWidth: "320px", justifyContent: "center" }}
              >
                Book a Strategy Call (3 spots left)
                <ArrowRight size={17} />
              </Link>
              <div className="absolute -top-8 -right-4 px-3 py-1 text-xs font-body font-semibold text-primary bg-primary/10 border border-primary/20 rounded-sm">
                Spots remaining: 7
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
