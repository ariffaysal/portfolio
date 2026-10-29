"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "@/components/theme-toggle"; // Assuming theme context is available here

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const isReduced = useReducedMotion();
  const { theme } = useTheme(); // Access theme from your context/provider

  // If Day theme or Reduced Motion, render normally without animation
  if (theme === "day" || isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
