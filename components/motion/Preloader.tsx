"use client";

import { useEffect, useRef } from "react";
import { lockScroll } from "@/lib/scroll";

/**
 * First visit of a session: count to 100, then lift away. The markup is
 * server-rendered so nothing flashes underneath; an inline script in the
 * root layout hides it (html.no-intro) on repeat visits and reduced motion.
 */
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!el || !root.classList.contains("intro-on")) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      root.classList.remove("intro-on");
      try {
        sessionStorage.setItem("li-intro", "1");
      } catch {}
      lockScroll(false);
      window.dispatchEvent(new Event("app:ready"));
    };

    lockScroll(true);
    const t0 = performance.now();
    const D = 1500;
    let raf = requestAnimationFrame(function step(now) {
      const k = Math.min(1, (now - t0) / D);
      const eased = 1 - Math.pow(1 - k, 3);
      if (numRef.current) numRef.current.textContent = String(Math.round(eased * 100)).padStart(3, "0");
      if (k < 1) {
        raf = requestAnimationFrame(step);
        return;
      }
      el.animate([{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }], {
        duration: 1000,
        easing: "cubic-bezier(.76,0,.24,1)",
        fill: "forwards",
      }).onfinish = () => {
        el.style.display = "none";
      };
      setTimeout(finish, 380);
    });

    // If frames are throttled (background tab), don't hold the page hostage.
    const failsafe = setTimeout(() => {
      el.style.display = "none";
      finish();
    }, 3200);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <div ref={ref} className="intro" aria-hidden="true">
      <div className="label flex gap-6">
        <span>Laiqa Islam</span>
        <span className="opacity-60">Portfolio — {new Date().getFullYear()}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="label opacity-60">Loading work</span>
        <span
          ref={numRef}
          className="tabular text-[clamp(96px,18vw,280px)] leading-[0.8] font-extrabold tracking-[-0.06em]"
        >
          000
        </span>
      </div>
    </div>
  );
}
