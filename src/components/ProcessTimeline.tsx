import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Palette, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { num: "01", label: "Strategy", sub: "Research & Plan", icon: Compass, stat: "+187%", statLabel: "Growth" },
  { num: "02", label: "Design", sub: "Brand & UI/UX", icon: Palette, stat: "4.8x", statLabel: "ROAS" },
  { num: "03", label: "Develop", sub: "Build & Test", icon: Code2, stat: "98/100", statLabel: "Score" },
  { num: "04", label: "Launch", sub: "Deploy & Scale", icon: Rocket, stat: "3.2x", statLabel: "Revenue" },
  { num: "05", label: "Grow", sub: "Optimize & Expand", icon: TrendingUp, stat: "120+", statLabel: "Leads/mo" },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative w-full py-8">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] h-[200px] bg-primary/[0.04] blur-[80px] rounded-full" />
      </div>

      {/* Desktop: Horizontal timeline */}
      <div className="hidden md:block relative">
        {/* Connecting line */}
        <div className="absolute top-[72px] left-[10%] right-[10%] h-[2px] bg-border/30">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/60 via-primary to-primary/60"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Animated data pulse travelling along the line */}
        {isInView && (
          <motion.div
            className="absolute top-[68px] left-[10%] w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(142_80%_45%/0.6)]"
            animate={{ left: ["10%", "90%"], opacity: [1, 1, 0] }}
            transition={{ duration: 2.5, delay: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          />
        )}

        <div className="flex justify-between items-start px-[5%]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="flex flex-col items-center relative group"
                style={{ width: "18%" }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              >
                {/* Floating stat badge */}
                <motion.div
                  className="mb-3 px-3 py-1 rounded-lg bg-card/80 border border-primary/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.2 }}
                >
                  <span className="text-xs font-bold font-display text-primary">{step.stat}</span>
                  <span className="text-[10px] text-muted-foreground ml-1">{step.statLabel}</span>
                </motion.div>

                {/* Node circle */}
                <motion.div
                  className="relative w-[72px] h-[72px] rounded-full bg-card border-2 border-primary/40 flex items-center justify-center cursor-pointer z-10"
                  whileHover={{ scale: 1.12, borderColor: "hsl(142 80% 45%)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Pulse ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/20"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: [0, 0.4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                  
                  {/* Inner glow */}
                  <div className="absolute inset-1 rounded-full bg-primary/[0.06]" />
                  
                  <div className="flex flex-col items-center gap-0.5">
                    <Icon size={18} className="text-primary" />
                    <span className="text-[10px] font-bold font-display text-primary">{step.num}</span>
                  </div>
                </motion.div>

                {/* Label */}
                <motion.p
                  className="mt-4 font-display font-bold text-sm text-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  {step.label}
                </motion.p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{step.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Vertical timeline */}
      <div className="md:hidden relative pl-12">
        {/* Vertical line */}
        <div className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-border/30">
          <motion.div
            className="w-full bg-primary/50"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        {/* Animated dot travelling down the vertical line */}
        {isInView && (
          <motion.div
            className="absolute left-[22px] w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(142_80%_45%/0.6)] z-20"
            animate={{ top: ["0%", "95%"], opacity: [1, 1, 0] }}
            transition={{ duration: 2.5, delay: 1, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          />
        )}

        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="relative flex items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              >
                {/* Node */}
                <div className="absolute -left-12 w-[52px] h-[52px] rounded-full bg-card border-2 border-primary/40 flex items-center justify-center z-10">
                  <Icon size={18} className="text-primary" />
                </div>

                {/* Content */}
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold font-display text-primary">{step.num}</span>
                    <span className="font-display font-bold text-foreground">{step.label}</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold">{step.stat}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{step.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
