"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small gold dot plus a trailing reticle ring.
 * Elements can opt into states via `data-cursor="hover"` (grow)
 * or `data-cursor="view"` (grow + "VIEW" label) on themselves or ancestors.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const label = labelRef.current!;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const mode = target?.getAttribute("data-cursor");

      if (mode === "view") {
        ring.style.width = "72px";
        ring.style.height = "72px";
        ring.style.borderColor = "var(--gold)";
        label.style.opacity = "1";
      } else if (mode === "hover") {
        ring.style.width = "48px";
        ring.style.height = "48px";
        ring.style.borderColor = "var(--gold)";
        label.style.opacity = "0";
      } else {
        ring.style.width = "28px";
        ring.style.height = "28px";
        ring.style.borderColor = "var(--line-bright)";
        label.style.opacity = "0";
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-gold"
        style={{ transform: "translate(-100px, -100px)" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full border transition-[width,height,border-color] duration-300"
        style={{
          width: 28,
          height: 28,
          borderColor: "var(--line-bright)",
          transform: "translate(-100px, -100px)",
        }}
        aria-hidden="true"
      >
        <span
          ref={labelRef}
          className="font-mono text-[9px] tracking-widest text-gold opacity-0 transition-opacity duration-200"
        >
          VIEW
        </span>
      </div>
    </>
  );
}
