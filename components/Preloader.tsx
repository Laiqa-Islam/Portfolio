"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const BOOT_LINES = [
  "$ init laiqa.dev",
  "> loading modules ... ok",
  "> resolving stack [next/laravel/sql] ... ok",
  "> mounting interface",
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const lineTimer = setInterval(() => {
      setLineCount((c) => (c < BOOT_LINES.length ? c + 1 : c));
    }, 320);

    const start = performance.now();
    const duration = 1900;
    let rafId: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out with slight stutter, like real loading
      setProgress(Math.floor(t * t * (3 - 2 * t) * 100));
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      clearInterval(lineTimer);
      cancelAnimationFrame(rafId);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col justify-between bg-ink px-6 py-8 md:px-12"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="font-mono text-xs text-bone-dim">
            {BOOT_LINES.slice(0, lineCount).map((line) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="leading-6"
              >
                {line}
              </motion.p>
            ))}
            <span className="blink text-gold">▌</span>
          </div>

          <div className="flex items-end justify-between">
            <p className="font-display text-2xl font-medium tracking-tight text-bone md:text-4xl">
              Laiqa Islam
            </p>
            <p className="font-display text-7xl font-light leading-none text-gold md:text-9xl">
              {progress}
              <span className="font-mono text-xl text-bone-dim md:text-3xl">%</span>
            </p>
          </div>

          <div className="h-px w-full bg-line-bright">
            <div
              className="h-px bg-gold transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
