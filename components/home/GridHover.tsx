"use client";

import { useEffect, useRef } from "react";
import { dl, pad2 } from "@/lib/motion";

/**
 * The hero's visible 12-column grid. Lines drop in on load; on desktop the
 * square cell under the pointer lights up with its coordinates.
 */
export default function GridHover() {
  const linesRef = useRef<HTMLDivElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const lines = linesRef.current;
    const zone = lines?.parentElement;
    const cell = cellRef.current;
    const label = labelRef.current;
    if (!lines || !zone || !cell || !label) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = lines.getBoundingClientRect();
      const cs = getComputedStyle(lines);
      const pl = parseFloat(cs.paddingLeft);
      const pr = parseFloat(cs.paddingRight);
      const gap = parseFloat(cs.columnGap) || 24;
      const cols = cs.gridTemplateColumns.split(" ").length;
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const t = e.target instanceof Element ? e.target : null;
      const inside =
        x >= pl && x <= r.width - pr && y >= 0 && y <= r.height &&
        !t?.closest("a,button,[data-layer],[data-cursor]");
      if (!inside) {
        cell.style.opacity = "0";
        return;
      }
      const colW = (r.width - pl - pr - (cols - 1) * gap) / cols;
      const step = colW + gap;
      const c = Math.min(cols - 1, Math.floor((x - pl) / step));
      const row = Math.floor(y / step);
      cell.style.width = `${colW}px`;
      cell.style.height = `${step}px`;
      cell.style.transform = `translate3d(${pl + c * step}px,${row * step}px,0)`;
      cell.style.opacity = "1";
      label.textContent = `C${pad2(c + 1)} · R${pad2(row + 1)}`;
    };
    const onLeave = () => {
      cell.style.opacity = "0";
    };

    zone.addEventListener("mousemove", onMove);
    zone.addEventListener("mouseleave", onLeave);
    return () => {
      zone.removeEventListener("mousemove", onMove);
      zone.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={linesRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-4 gap-6 px-5 md:grid-cols-12 md:px-8"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            data-reveal="drop"
            style={dl(i * 40, 1600)}
            className={[
              "border-l border-line-soft",
              i >= 4 ? "hidden md:block" : "",
              i === 3 ? "border-r md:border-r-0" : "",
              i === 11 ? "border-r" : "",
            ].join(" ")}
          />
        ))}
      </div>
      <div
        ref={cellRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -z-10 bg-[color-mix(in_srgb,var(--text)_5%,transparent)] opacity-0 outline outline-[color-mix(in_srgb,var(--text)_35%,transparent)] transition-[transform,opacity,width,height] duration-[450ms] ease-[cubic-bezier(.16,1,.3,1)]"
      >
        <span ref={labelRef} className="tabular absolute top-1.5 left-2 text-[10px] tracking-[0.08em] text-muted" />
        <span className="absolute right-1.5 bottom-0.5 text-[12px] text-accent">+</span>
      </div>
    </>
  );
}
