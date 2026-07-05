"use client";

import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

const STACK: { name: string; domain: string }[] = [
  { name: "Next.js", domain: "FRONTEND" },
  { name: "React", domain: "FRONTEND" },
  { name: "TypeScript", domain: "LANGUAGE" },
  { name: "JavaScript", domain: "LANGUAGE" },
  { name: "Tailwind CSS", domain: "FRONTEND" },
  { name: "Laravel", domain: "BACKEND" },
  { name: "PHP", domain: "LANGUAGE" },
  { name: "Livewire", domain: "BACKEND" },
  { name: "Alpine.js", domain: "FRONTEND" },
  { name: "PostgreSQL", domain: "DATABASE" },
  { name: "MySQL", domain: "DATABASE" },
  { name: "SQLite", domain: "DATABASE" },
  { name: "Prisma", domain: "DATABASE" },
  { name: "Web Audio API", domain: "BROWSER" },
  { name: "Tone.js", domain: "BROWSER" },
  { name: "WordPress", domain: "CMS" },
];

const MARQUEE_WORDS = [
  "FULL-STACK",
  "FRONTEND",
  "BACKEND",
  "DATABASES",
  "SHIPPING",
  "ITERATING",
];

export default function Stack() {
  return (
    <section id="stack" className="relative py-28 md:py-44">
      <SectionHeading index="03" label="STACK" title="Tools of the Trade" />

      <div className="grid grid-cols-2 border-y border-line md:grid-cols-4">
        {STACK.map((item, i) => (
          <Reveal key={item.name} delay={(i % 4) * 0.06} y={20}>
            <motion.div
              data-cursor="hover"
              className="group relative flex h-full flex-col justify-between gap-10 border-b border-r border-line p-6 transition-colors duration-300 hover:bg-ink-2 md:p-8"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-[10px] tracking-widest text-bone-faint transition-colors duration-300 group-hover:text-gold">
                {item.domain}
              </span>
              <p className="font-display text-lg font-medium tracking-tight text-bone-dim transition-colors duration-300 group-hover:text-bone md:text-xl">
                {item.name}
              </p>
              <span className="absolute right-4 top-4 h-1 w-1 rounded-full bg-line-bright transition-all duration-300 group-hover:bg-gold group-hover:shadow-[0_0_8px_var(--gold)]" />
            </motion.div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 border-y border-line py-6">
        <Marquee duration={26}>
          {MARQUEE_WORDS.map((word) => (
            <span key={word} className="mx-8 inline-flex items-center gap-8">
              <span className="font-display text-3xl font-light italic tracking-tight text-bone-dim md:text-5xl">
                {word.charAt(0) + word.slice(1).toLowerCase()}
              </span>
              <span className="text-2xl text-gold/70 md:text-4xl">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
