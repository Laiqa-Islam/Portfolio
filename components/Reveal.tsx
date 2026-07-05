"use client";

import { ReactNode } from "react";
import { motion, Variants } from "motion/react";

const variants: Variants = {
  hidden: (custom: { y: number }) => ({
    opacity: 0,
    y: custom.y,
    filter: "blur(6px)",
  }),
  visible: (custom: { delay: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Scroll-triggered reveal: blur + rise + fade. */
export default function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      custom={{ delay, y }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
