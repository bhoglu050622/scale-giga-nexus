import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Target, Lightbulb, TrendingUp, Cpu, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import { useRef, useState } from "react";

const values = [
  {
    icon: <TrendingUp size={20} />,
    title: "Growth-Driven Thinking",
    desc: "Every decision we make is measured against one question: will this drive growth? We prioritize high-impact actions over busywork.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Design with Purpose",
    desc: "Beautiful isn't enough. Every design element must serve a strategic function — whether that's building trust, driving clicks, or communicating value.",
  },
  {
    icon: <Target size={20} />,
    title: "Performance over Vanity",
    desc: "We care about metrics that matter: revenue, leads, retention — not just impressions and follower counts.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Innovation First",
    desc: "We actively adopt new technologies — AI, automation, emerging platforms — so our clients stay ahead of the curve.",
  },
  {
    icon: <Handshake size={20} />,
    title: "Long-Term Partnerships",
    desc: "We don't close deals, we build relationships. Our success is tied directly to yours — and we operate that way every day.",
  },
];


// Visionary value card — unique editorial style
function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 150, damping: 20 });

  // Each card gets a unique accent gradient
  const accents = [
    "from-emerald-400/20 via-teal-500/10 to-transparent",
    "from-amber-400/20 via-orange-500/10 to-transparent",
    "from-cyan-400/20 via-blue-500/10 to-transparent",
    "from-violet-400/20 via-purple-500/10 to-transparent",
    "from-rose-400/20 via-pink-500/10 to-transparent",
  ];

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        className="relative h-full overflow-hidden group cursor-default"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Layered background with depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-md" 
          style={{
            boxShadow: hovered 
              ? "0 25px 60px -12px hsl(142 80% 45% / 0.12), 0 0 0 1px hsl(142 80% 45% / 0.15), inset 0 1px 0 hsl(0 0% 100% / 0.06)"
              : "0 8px 32px -8px hsl(0 0% 0% / 0.25), 0 0 0 1px hsl(0 0% 100% / 0.04), inset 0 1px 0 hsl(0 0% 100% / 0.03)",
          }}
        />

        {/* Unique accent gradient per card */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accents[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Animated corner accent */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.08] blur-2xl"
          animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 0.6 : 0.2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Top accent line */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-primary/60 to-transparent z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <div className="relative z-10 p-7">
          {/* Large index number as background element */}
          <motion.span
            className="absolute top-3 right-5 font-display text-[72px] font-black text-foreground/[0.03] leading-none select-none"
            animate={{ opacity: hovered ? 0.08 : 0.03 }}
            transition={{ duration: 0.4 }}
          >
            0{index + 1}
          </motion.span>

          {/* Icon with animated ring */}
          <div className="relative mb-6">
            <motion.div
              className="w-12 h-12 rounded-xl bg-primary/[0.1] border border-primary/[0.15] flex items-center justify-center text-primary shadow-[0_0_24px_hsl(142_80%_45%/0.1)]"
              animate={{ rotate: hovered ? 8 : 0, scale: hovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {value.icon}
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-xl border border-primary/25"
              animate={hovered ? { scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] } : { scale: 1, opacity: 0 }}
              transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
            />
          </div>

          <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {value.title}
          </h3>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">{value.desc}</p>

          {/* Bottom decorative line */}
          <motion.div
            className="mt-5 h-[1px] bg-gradient-to-r from-primary/40 via-primary/10 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Story() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full bg-primary/[0.05] blur-3xl -translate-x-1/3 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Our Story</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-7 leading-tight">
              Building Digital Foundations for the{" "}
              <span className="text-gradient">Next Generation</span> of Brands
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              ScaleGiga was founded with a simple belief: great digital experiences build great businesses. We partner with ambitious brands to design, build, and scale digital systems that create long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-4">
        <div className="section-container max-w-5xl mx-auto">
          <ProcessTimeline />
        </div>
      </section>

      {/* Story content */}
      <section className="py-10">
        <div className="section-container max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                We combine strategy, technology, creativity, and automation to solve real business problems — not just create good-looking websites. We believe digital shouldn't be siloed: your website, your ads, your brand, and your automation systems should all work together as one intelligent growth engine.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Since our founding, we've worked with startups, scale-ups, and established brands across industries — from e-commerce and SaaS to professional services and consumer brands. What unites all of them is ambition: they want to grow, and they know digital is the path.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We don't believe in one-size-fits-all solutions. Every engagement starts with deep discovery — understanding your business model, your audience, your competitive landscape, and your goals. Only then do we build a digital system designed specifically for you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal delay={0}>
              <div className="p-10 rounded-3xl bg-gradient-primary text-primary-foreground shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary-foreground/5 blur-2xl" />
                <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary-foreground/60 mb-4">Our Mission</p>
                <h2 className="font-display text-2xl font-bold mb-4 leading-tight">
                  Help Businesses Grow Through Powerful Digital Systems
                </h2>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">
                  Our mission is to help businesses grow through powerful digital systems that are fast, scalable, and measurable — turning digital investment into compounding returns.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-10 rounded-3xl border border-border/60 bg-card shadow-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/[0.04] blur-2xl" />
                <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Our Vision</p>
                <h2 className="font-display text-2xl font-bold mb-4 leading-tight text-foreground">
                  A Globally Trusted Digital Growth Partner
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become a globally trusted digital growth partner for brands that want to scale with clarity, creativity, and technology — building the digital infrastructure of tomorrow's industry leaders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values - glassmorphism cards with spotlight */}
       <section className="py-10 sm:py-16">
        <div className="section-container">
          <ScrollReveal className="text-center mb-8 sm:mb-10">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              The Principles That{" "}
              <span className="text-gradient">Drive Us</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values aren't a wall poster — they're the operating system behind every decision, deliverable, and relationship we build.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-16">
        <div className="section-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-5">Ready to Partner With Us?</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-5">
              Let's Build Your Next Chapter
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're starting from scratch or scaling an established brand, we're ready to become your digital growth partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-glow magnetic-hover inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold text-primary-foreground font-display">
                Start a Project <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn-outline-electric inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold font-display">
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
