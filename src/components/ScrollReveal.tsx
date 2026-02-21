import { motion, useScroll, useTransform } from "framer-motion";
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
  parallaxOffset = 40,
}: ScrollRevealProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to animation values
  // Element enters viewport ~0.0, centered ~0.5, exits ~1.0
  // We animate in from 0→0.35 and reverse from 0.65→1.0

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.65, 0.85, 1],
    [0, 0.6, 1, 1, 0.6, 0]
  );

  // Direction-based transforms
  const yUp = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [40, 0, 0, -40]);
  const yNone = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const xLeft = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-40, 0, 0, 40]);
  const xRight = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [40, 0, 0, -40]);
  const xNone = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Scale variant
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.65, 1], [0.92, 1, 1, 0.92]);

  // Rotate variant
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [direction === "left" ? -4 : direction === "right" ? 4 : -3, 0, 0, direction === "left" ? 4 : direction === "right" ? -4 : 3]
  );

  // Parallax variant
  const parallaxY = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);

  // Blur variant (use filter string)
  const blur = useTransform(scrollYProgress, [0, 0.25, 0.65, 1], [8, 0, 0, 8]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  if (variant === "parallax") {
    return (
      <motion.div ref={ref} className={className} style={{ y: parallaxY, opacity }}>
        {children}
      </motion.div>
    );
  }

  if (variant === "blur") {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          opacity,
          filter: filterBlur,
          y: direction === "up" ? yUp : yNone,
          x: direction === "left" ? xLeft : direction === "right" ? xRight : xNone,
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "scale") {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          opacity,
          scale,
          y: direction === "up" ? yUp : yNone,
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "rotate") {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ opacity, rotate, y: yUp }}
      >
        {children}
      </motion.div>
    );
  }

  // Default
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y: direction === "up" ? yUp : yNone,
        x: direction === "left" ? xLeft : direction === "right" ? xRight : xNone,
      }}
    >
      {children}
    </motion.div>
  );
}
