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


// Glassmorphism value card with hover glow
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

  const glowX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), { stiffness: 200, damping: 25 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), { stiffness: 200, damping: 25 });

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        className="relative h-full p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 overflow-hidden group cursor-default"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -4, borderColor: "hsl(142 80% 45% / 0.3)" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Glow spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(300px circle at ${x}% ${y}%, hsl(142 80% 45% / ${hovered ? 0.08 : 0}), transparent 60%)`
            ),
          }}
        />
        
        <motion.div
          className="w-11 h-11 rounded-xl bg-primary/[0.08] border border-primary/[0.15] flex items-center justify-center text-primary mb-5"
          whileHover={{ rotate: 8, scale: 1.1 }}
        >
          {value.icon}
        </motion.div>
        <h3 className="font-display font-semibold text-foreground mb-3">{value.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Story() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
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
      <section className="py-16">
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
      <section className="py-16 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="py-12 sm:py-24">
        <div className="section-container">
          <ScrollReveal className="text-center mb-10 sm:mb-16">
            <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
              The Principles That{" "}
              <span className="text-gradient">Drive Us</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values aren't a wall poster — they're the operating system behind every decision, deliverable, and relationship we build.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-24">
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
