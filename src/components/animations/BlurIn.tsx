"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface BlurInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const blurInVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export default function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: BlurInProps) {
  return (
    <motion.div
      variants={blurInVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration,
        delay,
        ease: [0.2, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
