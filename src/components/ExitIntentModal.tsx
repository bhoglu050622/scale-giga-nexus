import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ExitIntentModal() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < window.innerHeight * 0.25 && e.movementY < -10) {
        setShow(true);
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card border-2 border-primary/40 p-10 max-w-lg w-full mx-4"
            style={{ borderRadius: "4px", maxWidth: "600px" }}
          >
            <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
            <h3 className="font-display text-2xl text-foreground mb-3">
              Wait. Before you go.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
              Download our $2M → $8M case study breakdown. See exactly how we scaled 3 luxury brands past 8 figures.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-muted border border-border text-foreground text-sm font-body focus:outline-none focus:border-primary/50"
                style={{ borderRadius: "2px" }}
              />
              <button
                className="px-6 py-3 text-sm font-semibold text-primary-foreground font-body"
                style={{ background: "hsl(43 80% 49%)", borderRadius: "2px" }}
              >
                Download
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
