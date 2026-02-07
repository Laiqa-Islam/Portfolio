"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";




export default function MotionSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
    const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: delay,
      ease: "easeOut",
    },
  },
};
  return (
    <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}
