"use client";

import { useEffect, useRef, useState } from "react";
import ProjectPanel from "@/components/ui/ProjectPanel";
import type { Project } from "@/data/projects";

type Item = Pick<Project, "slug" | "name" | "year" | "panel" | "imageSrc" | "sketch">;

const H = 400;

/**
 * A poster card that trails the pointer over `[data-preview="i"]` rows,
 * sliding its stack to the hovered project and tilting with speed.
 */
export default function IndexPreview({ items }: { items: Item[] }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    if (fine && document.documentElement.classList.contains("mo")) setOn(true);
  }, []);

  useEffect(() => {
    if (!on) return;
    const box = boxRef.current!;
    const track = trackRef.current!;
    const m = { x: 0, y: 0 };
    const p = { x: 0, y: 0, s: 0, ts: 0 };

    let seen = false;
    const evaluate = (t: Element | null) => {
      const row = t?.closest<HTMLElement>("[data-preview]");
      if (row) {
        if (p.ts === 0) {
          p.x = m.x;
          p.y = m.y;
        }
        p.ts = 1;
        track.style.transform = `translateY(${-Number(row.dataset.preview) * H}px)`;
      } else {
        p.ts = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      m.x = e.clientX;
      m.y = e.clientY;
      seen = true;
      evaluate(e.target instanceof Element ? e.target : null);
    };
    // Scrolling moves rows under a still pointer without a mousemove.
    const onScroll = () => {
      if (seen) evaluate(document.elementFromPoint(m.x, m.y));
    };

    let raf = requestAnimationFrame(function loop() {
      const px = p.x;
      p.x += (m.x - p.x) * 0.1;
      p.y += (m.y - p.y) * 0.1;
      p.s += (p.ts - p.s) * 0.12;
      const tilt = Math.max(-8, Math.min(8, (p.x - px) * 0.4));
      box.style.opacity = String(p.s);
      box.style.transform = `translate3d(${p.x + 40}px,${p.y}px,0) translate(0,-50%) scale(${0.8 + p.s * 0.2}) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(loop);
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [on]);

  if (!on) return null;

  return (
    <div
      ref={boxRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[80] h-[400px] w-[320px] overflow-hidden opacity-0"
    >
      <div ref={trackRef} className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]">
        {items.map((item, i) => (
          <div key={item.slug} className="h-[400px] flex-none">
            <ProjectPanel project={item} index={i} total={items.length} sizes="320px" size="compact" />
          </div>
        ))}
      </div>
    </div>
  );
}
