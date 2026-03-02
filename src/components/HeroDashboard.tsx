import { motion } from "framer-motion";

const barData = [35, 52, 45, 68, 58, 78, 65, 88, 72, 95, 82, 98];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function HeroDashboard() {
  return (
    <div className="relative w-full h-full" style={{ perspective: 1200 }}>
      {/* Ambient glow behind dashboard */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.12] via-transparent to-transparent blur-3xl scale-110" />

      <motion.div
        className="relative w-full h-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main dashboard container */}
        <div className="relative w-full h-full rounded-2xl border border-border/40 bg-card/80 backdrop-blur-xl overflow-hidden shadow-lg-electric">
          {/* Noise overlay */}
          <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />
          
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              <span className="text-[11px] font-display font-medium text-muted-foreground tracking-wide">GROWTH DASHBOARD</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] text-primary/80 font-medium">LIVE</span>
            </div>
          </div>

          {/* Dashboard grid */}
          <div className="p-4 grid grid-cols-3 gap-3 h-[calc(100%-44px)]">
            {/* Revenue card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="col-span-1 rounded-xl border border-border/30 bg-muted/30 p-3.5 flex flex-col justify-between"
            >
              <div>
                <div className="text-[9px] font-display uppercase tracking-wider text-muted-foreground mb-1">Revenue</div>
                <div className="font-display text-xl font-bold text-foreground">₹2.4Cr</div>
                <div className="flex items-center gap-1 mt-1">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 7L5 3L9 7" stroke="hsl(142 80% 45%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[10px] text-primary font-semibold">+34%</span>
                </div>
              </div>
              {/* Mini sparkline */}
              <svg viewBox="0 0 80 24" className="w-full h-6 mt-2">
                <motion.path
                  d="M0 20 Q10 18 16 14 T32 10 T48 6 T64 8 T80 2"
                  fill="none"
                  stroke="hsl(142 80% 45%)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                />
                <motion.path
                  d="M0 20 Q10 18 16 14 T32 10 T48 6 T64 8 T80 2 V24 H0 Z"
                  fill="url(#sparkGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                />
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(142 80% 45%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(142 80% 45%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Bar chart */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="col-span-2 rounded-xl border border-border/30 bg-muted/30 p-3.5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-[9px] font-display uppercase tracking-wider text-muted-foreground">Conversions</div>
                <div className="text-[10px] font-semibold text-primary">+187%</div>
              </div>
              <div className="flex items-end gap-[5px] h-[60%]">
                {barData.map((val, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      background: i >= 9
                        ? "linear-gradient(to top, hsl(142 80% 45%), hsl(142 90% 60%))"
                        : "hsl(142 80% 45% / 0.2)",
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ delay: 1 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                  />
                ))}
              </div>
              <div className="flex gap-[5px] mt-1.5">
                {months.map((m) => (
                  <div key={m} className="flex-1 text-center text-[7px] text-muted-foreground/60">{m}</div>
                ))}
              </div>
            </motion.div>

            {/* ROAS card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="col-span-1 rounded-xl border border-border/30 bg-muted/30 p-3.5 flex flex-col justify-between"
            >
              <div className="text-[9px] font-display uppercase tracking-wider text-muted-foreground mb-1">ROAS</div>
              <div className="font-display text-2xl font-bold text-foreground">4.8x</div>
              <div className="w-full bg-border/30 rounded-full h-1.5 mt-2">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow"
                  initial={{ width: 0 }}
                  animate={{ width: "82%" }}
                  transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* AI Automation card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="col-span-1 rounded-xl border border-border/30 bg-muted/30 p-3.5"
            >
              <div className="text-[9px] font-display uppercase tracking-wider text-muted-foreground mb-2">AI Workflows</div>
              <div className="space-y-2">
                {["Lead Scoring", "Auto Nurture", "Smart Ads"].map((label, i) => (
                  <div key={label} className="flex items-center gap-2">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    />
                    <span className="text-[10px] text-foreground/70 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Performance score */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="col-span-1 rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5 flex flex-col items-center justify-center"
            >
              <div className="text-[9px] font-display uppercase tracking-wider text-muted-foreground mb-2">Performance</div>
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(142 80% 45% / 0.1)" strokeWidth="3" />
                  <motion.circle
                    cx="18" cy="18" r="14"
                    fill="none"
                    stroke="hsl(142 80% 45%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="88"
                    initial={{ strokeDashoffset: 88 }}
                    animate={{ strokeDashoffset: 88 * 0.02 }}
                    transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-foreground">98</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating metric badges - hidden on small mobile */}
      <motion.div
        className="absolute -left-4 top-1/4 glass-card rounded-xl px-3 py-2 border border-primary/[0.15] z-10 hidden sm:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
        transition={{ opacity: { delay: 2 }, x: { delay: 2 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      >
        <div className="text-[9px] text-muted-foreground font-medium">ROAS</div>
        <div className="font-display font-bold text-sm text-primary">4.8x</div>
      </motion.div>

      <motion.div
        className="absolute -right-3 bottom-1/4 glass-card rounded-xl px-3 py-2 border border-primary/[0.15] z-10 hidden sm:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 2.3 }, x: { delay: 2.3 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
      >
        <div className="text-[9px] text-muted-foreground font-medium">Conversions</div>
        <div className="font-display font-bold text-sm text-primary">+187%</div>
      </motion.div>
    </div>
  );
}
