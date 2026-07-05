"use client";

import { useCallback, useEffect } from "react";
import { motion } from "motion/react";

/**
 * Full-screen screenshot viewer. Tall (long-form) captures scroll vertically
 * inside the viewer; landscape ones are centered. Backdrop / Esc closes,
 * arrow keys + on-screen chevrons navigate. `data-lenis-prevent` stops the
 * smooth-scroll engine from moving the page behind the overlay.
 */
export default function Lightbox({
  shots,
  title,
  index,
  onIndex,
  onClose,
}: {
  shots: string[];
  title: string;
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const go = useCallback(
    (dir: number) => onIndex((index + dir + shots.length) % shots.length),
    [index, shots.length, onIndex]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [go, onClose]);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <motion.div
      className="fixed inset-0 z-[130] flex flex-col bg-ink/95 backdrop-blur-md"
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      {/* top bar */}
      <div
        className="flex shrink-0 items-center justify-between border-b border-line px-5 py-4 md:px-8"
        onClick={stop}
      >
        <span className="font-mono text-xs tracking-widest text-bone-dim">
          <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-1 text-bone-faint">/</span>
          {String(shots.length).padStart(2, "0")}
          <span className="ml-4 hidden text-bone-faint sm:inline">
            {title.toUpperCase()}
          </span>
        </span>
        <button
          onClick={onClose}
          data-cursor="hover"
          aria-label="Close"
          className="group flex items-center gap-2 font-mono text-xs tracking-widest text-bone-dim transition-colors hover:text-gold"
        >
          CLOSE
          <span className="text-base leading-none transition-transform duration-300 group-hover:rotate-90">
            ✕
          </span>
        </button>
      </div>

      {/* scroll stage — flex + m-auto keeps the top of tall images reachable */}
      <div
        className="flex flex-1 overflow-y-auto overscroll-contain p-4 md:p-10"
        onClick={onClose}
      >
        <motion.img
          key={shots[index]}
          src={shots[index]}
          alt={`${title} — screenshot ${index + 1}`}
          onClick={stop}
          data-cursor="hover"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="m-auto block h-auto w-full max-w-5xl border border-line-bright"
        />
      </div>

      {/* nav */}
      {shots.length > 1 && (
        <div
          className="flex shrink-0 items-center justify-between border-t border-line px-5 py-4 md:px-8"
          onClick={stop}
        >
          <button
            onClick={() => go(-1)}
            data-cursor="hover"
            className="group flex items-center gap-2 font-mono text-xs tracking-widest text-bone-dim transition-colors hover:text-gold"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            PREV
          </button>
          <div className="flex gap-1.5">
            {shots.map((_, i) => (
              <button
                key={i}
                onClick={() => onIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-line-bright hover:bg-bone-faint"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            data-cursor="hover"
            className="group flex items-center gap-2 font-mono text-xs tracking-widest text-bone-dim transition-colors hover:text-gold"
          >
            NEXT
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      )}
    </motion.div>
  );
}
