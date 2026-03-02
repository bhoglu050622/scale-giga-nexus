import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Star, Globe, Palette, Bot, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  accent: string;
}

const services: Service[] = [
  {
    icon: <Star size={20} />,
    title: "Brand Strategy",
    desc: "Positioning, messaging, and identity that create long-term brand equity.",
    stat: "96%",
    statLabel: "Brand Recall Lift",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: <Globe size={20} />,
    title: "Website & App Development",
    desc: "Fast, scalable, conversion-focused digital products that turn visitors into customers.",
    stat: "3.2s",
    statLabel: "Avg. Load Time",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: <Palette size={20} />,
    title: "Creative & Branding",
    desc: "Compelling visual identities and brand systems that make you unforgettable.",
    stat: "40+",
    statLabel: "Brand Systems Built",
    accent: "from-violet-500/20 to-purple-500/10",
  },
  {
    icon: <Bot size={20} />,
    title: "AI Agents & Automation",
    desc: "Intelligent systems that eliminate manual work and scale your customer experience.",
    stat: "70%",
    statLabel: "Manual Work Reduced",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: <Zap size={20} />,
    title: "Social Media Marketing",
    desc: "Strategic content, community building, and engagement that grows your brand.",
    stat: "2.8x",
    statLabel: "Engagement Growth",
    accent: "from-rose-500/20 to-pink-500/10",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Performance Marketing",
    desc: "Data-driven ad campaigns across Google, Meta, and LinkedIn that drive measurable ROI.",
    stat: "4.8x",
    statLabel: "Average ROAS",
    accent: "from-emerald-500/20 to-lime-500/10",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.06} direction={isEven ? "left" : "right"}>
      <Link to="/services" className="block group">
        <motion.div
          ref={ref}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm transition-all duration-500"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{
            boxShadow: hovered
              ? "0 20px 60px -12px hsl(142 80% 45% / 0.15), 0 0 0 1px hsl(142 80% 45% / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.05)"
              : "0 4px 24px -4px hsl(0 0% 0% / 0.2), 0 0 0 1px hsl(0 0% 100% / 0.04), inset 0 1px 0 hsl(0 0% 100% / 0.03)",
          }}
        >
          {/* Gradient accent overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

          {/* Spotlight glow that follows cursor */}
          <motion.div
            className="pointer-events-none absolute -inset-px z-0"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([x, y]) =>
                  `radial-gradient(350px circle at ${x}px ${y}px, hsl(142 80% 45% / 0.1), transparent 60%)`
              ),
            }}
          />

          {/* Top accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative z-10 flex items-stretch">
            {/* Content side */}
            <div className="flex-1 p-6 md:p-7">
              <div className="flex items-start gap-4 mb-4">
                {/* Icon with glass effect */}
                <div className="relative shrink-0">
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-primary/[0.1] border border-primary/[0.12] flex items-center justify-center text-primary shadow-[0_0_20px_hsl(142_80%_45%/0.1)]"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {service.icon}
                  </motion.div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-primary/20"
                    animate={hovered ? { scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] } : {}}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                </div>

                <div>
                  <h3 className="font-display font-bold text-[17px] text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Animated CTA */}
              <motion.div
                className="flex items-center gap-1.5 text-xs font-semibold text-primary/70 group-hover:text-primary transition-colors"
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              >
                Explore service
                <motion.div animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.3 }}>
                  <ArrowRight size={12} />
                </motion.div>
              </motion.div>
            </div>

            {/* Stat side */}
            <div className="hidden sm:flex flex-col items-center justify-center w-[130px] border-l border-border/20 bg-primary/[0.02] relative overflow-hidden">
              {/* Animated scan line */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="text-center"
                animate={{ scale: hovered ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-display font-bold text-2xl text-gradient mb-1">
                  {service.stat}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/70 font-medium">
                  {service.statLabel}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}

export default function ServiceShowcase() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="section-container">
        <ScrollReveal variant="blur" className="text-center mb-16">
          <p className="text-xs font-semibold font-display uppercase tracking-widest text-primary mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">
            Full-Spectrum Digital
            <br />
            <span className="text-gradient">Growth Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            From strategy to execution, we deliver every digital capability your brand needs to grow
            — under one roof.
          </p>
        </ScrollReveal>

        {/* Staggered two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom trust line */}
        <ScrollReveal className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-primary hover:text-foreground transition-colors group"
          >
            <span className="relative">
              View all services in detail
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300" />
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
