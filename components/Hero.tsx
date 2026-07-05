"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import DotGrid from "./DotGrid";
import Scramble from "./Scramble";
import Magnetic from "./Magnetic";

const NAME_LINE_1 = "Laiqa";
const NAME_LINE_2 = "Islam";

function SplitLine({
  text,
  baseDelay,
  outline = false,
}: {
  text: string;
  baseDelay: number;
  outline?: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${outline ? "text-outline-gold italic" : ""}`}
          initial={{ y: "110%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{
            duration: 0.9,
            delay: baseDelay + i * 0.055,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-10 pt-32"
    >
      <DotGrid className="absolute inset-0 h-full w-full" />

      {/* corner system readouts */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-24 flex justify-between px-6 font-mono text-[10px] tracking-widest text-bone-faint md:px-12 xl:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        <span>SYS.PORTFOLIO — v3.0</span>
        <span className="hidden sm:inline">FULL-STACK // FRONT ↔ BACK ↔ DB</span>
        <span>EST. RUNTIME: ∞</span>
      </motion.div>

      <motion.div
        style={{ y: nameY, opacity: fade }}
        className="pointer-events-none relative z-10 px-6 md:px-12 xl:px-20"
      >
        <motion.p
          className="mb-4 font-mono text-xs tracking-[0.3em] text-gold md:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
        >
          <Scramble text="// FULL-STACK DEVELOPER" playOnMount speed={34} />
        </motion.p>

        <h1 className="font-display text-[clamp(3.6rem,15vw,13rem)] font-medium leading-[0.95] tracking-tight text-bone">
          <SplitLine text={NAME_LINE_1} baseDelay={2.2} />
          <SplitLine text={NAME_LINE_2} baseDelay={2.45} outline />
        </h1>

        <div className="mt-8 flex flex-col justify-between gap-6 border-t border-line pt-6 md:flex-row md:items-end">
          <motion.p
            className="max-w-md text-sm leading-relaxed text-bone-dim md:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.8 }}
          >
            I build products end to end — interface, server, database — and I
            care as much about <span className="text-bone">why</span>
            {" a thing exists as how it's built."}
          </motion.p>

          <motion.div
            className="pointer-events-auto flex items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.05, duration: 0.8 }}
          >
            <Magnetic>
              <a
                href="/#work"
                data-cursor="hover"
                className="group inline-flex items-center gap-3 border border-gold bg-gold px-6 py-3 font-mono text-xs font-bold tracking-widest text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold"
              >
                VIEW WORK
                <span className="transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/Laiqa_Islam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-3 border border-line-bright px-6 py-3 font-mono text-xs tracking-widest text-bone transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                RESUME.PDF ↗
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
