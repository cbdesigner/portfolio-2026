"use client";

import { motion, type Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0, 0.2, 1],
    },
  },
};

export default function SplitText({
  text,
  className = "",
  staggerDelay = 0.05,
  as: Tag = "h1",
}: SplitTextProps) {
  const words = text.split(" ");
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block mr-[0.25em]"
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
