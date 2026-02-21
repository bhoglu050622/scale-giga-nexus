import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrustBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercentage > 0.35);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border"
          style={{ height: "60px" }}
        >
          <div className="section-container h-full flex items-center justify-center gap-8 text-xs font-body text-muted-foreground">
            <span>🔒 Trusted by luxury brands</span>
            <span className="hidden sm:inline">🚀 340% avg. ROI</span>
            <span className="hidden md:inline">📞 Booked 47 calls this month</span>
            <a
              href="/contact"
              className="px-4 py-1.5 text-primary-foreground font-semibold"
              style={{ background: "hsl(43 80% 49%)", borderRadius: "2px", fontSize: "11px" }}
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
