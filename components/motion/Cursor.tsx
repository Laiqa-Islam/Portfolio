"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A red disc that trails the pointer. It grows and shows a label over
 * `data-cursor="Label"` targets and swells slightly over anything
 * clickable. `data-magnetic` elements lean toward the pointer.
 * The native pointer stays visible, so overlays never lose the cursor.
 */
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine && document.documentElement.classList.contains("mo")) setOn(true);
  }, []);

  useEffect(() => {
    if (!on) return;
    const ring = ringRef.current!;
    const label = labelRef.current!;
    const m = { x: -100, y: -100 };
    const r = { x: -100, y: -100, s: 0, ts: 0.35 };
    let visible = false;

    const evaluate = (t: Element | null) => {
      const labelled = t?.closest<HTMLElement>("[data-cursor]");
      const clickable = t?.closest("a,button,label,input,textarea,select,[data-magnetic]");
      r.ts = labelled ? 2.6 : clickable ? 0.9 : 0.35;
      label.textContent = labelled?.dataset.cursor ?? "";
    };

    // Scrolling moves content under a still pointer without a mousemove.
    const onScroll = () => {
      if (visible) evaluate(document.elementFromPoint(m.x, m.y));
    };

    const onMove = (e: MouseEvent) => {
      m.x = e.clientX;
      m.y = e.clientY;
      if (!visible) {
        visible = true;
        r.x = m.x;
        r.y = m.y;
        ring.style.opacity = "1";
      }
      evaluate(e.target instanceof Element ? e.target : null);

      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const b = el.getBoundingClientRect();
        const dx = e.clientX - (b.left + b.width / 2);
        const dy = e.clientY - (b.top + b.height / 2);
        const near = Math.abs(dx) < b.width / 2 + 30 && Math.abs(dy) < b.height / 2 + 30;
        el.style.transform = near ? `translate(${dx * 0.28}px,${dy * 0.38}px)` : "";
      });
    };
    const onLeave = (e: MouseEvent) => {
      if (e.relatedTarget) return;
      visible = false;
      ring.style.opacity = "0";
    };

    let raf = requestAnimationFrame(function loop() {
      r.x += (m.x - r.x) * 0.2;
      r.y += (m.y - r.y) * 0.2;
      r.s += (r.ts - r.s) * 0.15;
      ring.style.transform = `translate3d(${r.x}px,${r.y}px,0) translate(-50%,-50%) scale(${r.s})`;
      label.style.transform = `scale(${1 / Math.max(r.s, 0.3)})`;
      raf = requestAnimationFrame(loop);
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [on]);

  if (!on) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[200] flex h-10 w-10 items-center justify-center rounded-full bg-accent opacity-0 transition-opacity duration-300 [mix-blend-mode:var(--ring-blend)]"
    >
      <span
        ref={labelRef}
        className="text-[12px] font-extrabold tracking-[0.06em] whitespace-nowrap text-paper uppercase"
      />
    </div>
  );
}
