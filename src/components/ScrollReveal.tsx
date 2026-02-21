import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  variant?: "default" | "scale" | "blur" | "rotate" | "parallax";
  parallaxOffset?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variant = "default",
  parallaxOffset = 30,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);

  const getInitial = () => {
    switch (variant) {
      case "scale":
        return { opacity: 0, scale: 0.9, y: direction === "up" ? 20 : 0 };
      case "blur":
        return { opacity: 0, filter: "blur(10px)", y: direction === "up" ? 20 : 0 };
      case "rotate":
        return {
          opacity: 0,
          rotate: direction === "left" ? -5 : direction === "right" ? 5 : -3,
          y: 20,
        };
      default:
        return {
          opacity: 0,
          y: direction === "up" ? 30 : 0,
          x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
        };
    }
  };

  const getAnimate = () => {
    switch (variant) {
      case "scale":
        return { opacity: 1, scale: 1, y: 0 };
      case "blur":
        return { opacity: 1, filter: "blur(0px)", y: 0 };
      case "rotate":
        return { opacity: 1, rotate: 0, y: 0 };
      default:
        return { opacity: 1, y: 0, x: 0 };
    }
  };

  const initial = getInitial();
  const animate = getAnimate();

  if (variant === "parallax") {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : initial}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
