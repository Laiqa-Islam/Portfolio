"use client";

import { useEffect, useRef, useState } from "react";
import { layers } from "@/data/site";
import { dl, pad2 } from "@/lib/motion";

/**
 * Fig. 01 — the four layers of a product. A terminal types a command for
 * each layer in turn and the matching row lights up.
 */
export default function StackFigure() {
  const [active, setActive] = useState(0);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;
    const cmds = layers.map((l) => l.command);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = cmds[0];
      return;
    }
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      const cmd = cmds[i];
      el.textContent = cmd.slice(0, j);
      let wait = deleting ? 28 : 55 + Math.random() * 60;
      if (!deleting && j === cmd.length) {
        deleting = true;
        wait = 1600;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % cmds.length;
        setActive(i);
        wait = 350;
      } else {
        j += deleting ? -1 : 1;
      }
      timer = setTimeout(step, wait);
    };
    step();
    return () => clearTimeout(timer);
  }, []);

  return (
    <figure data-cursor="Stack" className="m-0 flex flex-col border-2 border-line bg-bg">
      <figcaption className="label flex items-center gap-3 border-b-2 border-line px-4 py-2.5 text-[11px]">
        <span>Fig. 01</span>
        <span>One developer, four layers</span>
        <span className="pulse ml-auto" />
      </figcaption>
      {layers.map((layer, i) => {
        const on = active === i;
        return (
          <div
            key={layer.name}
            data-layer={i}
            data-reveal="wipe"
            style={dl(500 + i * 120)}
            className="relative border-b-2 border-line"
          >
            <span
              className="absolute inset-y-0 left-0 w-1 origin-top bg-accent transition-transform duration-[600ms] ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ transform: `scaleY(${on ? 1 : 0})` }}
            />
            <div
              className="grid h-16 grid-cols-[40px_minmax(0,1fr)] items-center gap-3 pr-4 pl-5 transition-opacity duration-500"
              style={{ opacity: on ? 1 : 0.4 }}
            >
              <span className="tabular text-[12px]">{pad2(layers.length - i)}</span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[clamp(22px,2.2vw,34px)] leading-none font-extrabold tracking-[-0.035em]">
                  {layer.name}
                </span>
                <span className="text-[12px] text-muted">{layer.tools}</span>
              </span>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col gap-0.5 bg-ink px-4 py-2.5 font-mono text-[12px] leading-[1.6] text-paper">
        <span className="opacity-50">~/laiqa — zsh</span>
        <span className="flex min-h-[19px] items-center gap-1.5">
          <span className="text-[#ff9783]">$</span>
          <span ref={typedRef} />
          <span className="h-3.5 w-[7px] animate-[sq-pulse_1.6s_infinite] bg-paper" />
        </span>
      </div>
    </figure>
  );
}
