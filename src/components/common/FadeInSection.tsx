import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 50, damping: 18, mass: 0.7 }}
    >
      {children}
    </motion.div>
  );
} 