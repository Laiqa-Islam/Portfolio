"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { pad2 } from "@/lib/motion";
import { lockScroll } from "@/lib/scroll";

/**
 * Full-screen screenshot viewer. Tall captures scroll inside the stage
 * (data-lenis-prevent keeps the page still); arrow keys and the dots
 * navigate; Esc or a backdrop click closes. Rendered into <body> so no
 * transformed or clipped ancestor can trap it.
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
  const closeRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

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
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    lockScroll(true);
    const html = document.documentElement;
    const overflow = html.style.overflow;
    html.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      lockScroll(false);
      html.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  // Each new image starts at its top.
  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const bar = "label flex shrink-0 items-center justify-between gap-4 border-line px-5 py-4 md:px-8";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      data-lenis-prevent=""
      onClick={onClose}
      className="fixed inset-0 z-[160] flex animate-[lb-in_.6s_cubic-bezier(.76,0,.24,1)] flex-col bg-[color-mix(in_srgb,var(--bg)_96%,transparent)] text-fg backdrop-blur-sm"
    >
      <div className={`${bar} border-b-2`} onClick={stop}>
        <span className="tabular">
          <span className="text-accent-text">{pad2(index + 1)}</span> / {pad2(shots.length)}
          <span className="ml-4 hidden text-muted sm:inline">{title}</span>
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="group flex cursor-pointer items-center gap-2 transition-colors hover:text-accent-text"
        >
          Close
          <span className="text-base leading-none transition-transform duration-300 group-hover:rotate-90">✕</span>
        </button>
      </div>

      {/* flex + m-auto keeps the top of a tall image reachable */}
      <div ref={stageRef} className="flex flex-1 overflow-y-auto overscroll-contain p-4 md:p-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={shots[index]}
          src={shots[index]}
          alt={`${title} — screenshot ${index + 1}`}
          onClick={stop}
          className="m-auto block h-auto w-full max-w-6xl animate-[lb-img_.45s_cubic-bezier(.16,1,.3,1)] border-2 border-line"
        />
      </div>

      {shots.length > 1 && (
        <div className={`${bar} border-t-2`} onClick={stop}>
          <button type="button" onClick={() => go(-1)} className="group flex cursor-pointer items-center gap-2 transition-colors hover:text-accent-text">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Prev
          </button>
          <div className="flex gap-1.5">
            {shots.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onIndex(i)}
                aria-label={`Screenshot ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 cursor-pointer transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} className="group flex cursor-pointer items-center gap-2 transition-colors hover:text-accent-text">
            Next <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      )}
    </div>,
    document.body
  );
}
