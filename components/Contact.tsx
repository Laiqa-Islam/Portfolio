"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";
import Scramble from "./Scramble";
import Magnetic from "./Magnetic";

const EMAIL = "islamlaiqa@gmail.com";

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden pt-28 md:pt-44">
      <div className="px-6 md:px-12 xl:px-20">
        <Reveal>
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-gold">
            <Scramble text="04 // CONTACT" speed={30} />
          </p>
          <p className="mb-10 max-w-md text-sm leading-relaxed text-bone-dim md:text-base">
            Have a half-formed &ldquo;can we even do this?&rdquo; idea? That&apos;s
            my favourite kind of ticket. Let&apos;s make it real.
          </p>
        </Reveal>

        <a
          href={`mailto:${EMAIL}`}
          data-cursor="hover"
          className="block"
          aria-label={`Email ${EMAIL}`}
        >
          <motion.h2
            className="fill-text font-display text-[clamp(3rem,12vw,10rem)] font-medium leading-[1] tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&apos;s
            <br />
            <span className="italic">talk</span> →
          </motion.h2>
        </a>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
            <Magnetic>
              <a
                href={`mailto:${EMAIL}`}
                data-cursor="hover"
                className="link-sweep font-mono text-sm tracking-wide text-bone md:text-base"
              >
                {EMAIL}
              </a>
            </Magnetic>
            <div className="flex items-center gap-6 font-mono text-xs tracking-widest text-bone-dim">
              <a
                href="/Laiqa_Islam.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="link-sweep transition-colors hover:text-gold"
              >
                RESUME ↗
              </a>
              <span className="flex items-center gap-2">
                <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-line px-5 py-5 font-mono text-[10px] tracking-widest text-bone-faint md:px-10">
        <span>© {new Date().getFullYear()} LAIQA ISLAM</span>
        <span className="hidden sm:inline">DESIGNED &amp; BUILT FROM SCRATCH</span>
        <span>
          EOF<span className="blink text-gold">_</span>
        </span>
      </div>
    </footer>
  );
}
