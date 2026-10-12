"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getLenis } from "@/lib/scroll";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const all = (s: string) => Array.from(document.querySelectorAll<HTMLElement>(s));

/**
 * The page's behaviour layer. Markup stays server-rendered and opts into
 * motion with data attributes; this wires them up on every route:
 *
 *   data-reveal="up|fade|mask|wipe|img|line|drop"  enter on scroll (CSS in globals)
 *   data-count="42"        count up when seen
 *   data-marquee[="rev"]   infinite strip; speeds up with scroll velocity
 *   data-hscroll / data-htrack / data-hbar   pinned horizontal reel (desktop)
 *   data-fill              text inks in as it scrolls through the viewport
 *   data-progress          a line that grows with scroll (scaleY)
 *   data-step              fades up as it nears the viewport's centre
 *   data-parallax="0.1"    drifts against the scroll
 *   data-scrollbar         page-progress bar
 */
export default function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const motion = root.classList.contains("mo");
    root.classList.add("mo-ready");
    const cleanups: (() => void)[] = [];

    // ── Reveals and counters ───────────────────────────────────────────
    // Checked against layout rects on scroll rather than with an
    // IntersectionObserver: observers apply the target's own clip-path, so a
    // fully clipped "wipe" or "img" element reports zero area and never fires.
    type Pending = { target: Element; play: () => void };
    let pending: Pending[] = [];
    let armed = false;

    const checkReveals = () => {
      if (!armed || pending.length === 0) return;
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      pending = pending.filter(({ target, play }) => {
        const r = target.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return true; // display: none
        const seen = r.top < vh * 0.94 && r.bottom > 0 && r.left < vw && r.right > 0;
        if (seen) play();
        return !seen;
      });
    };

    const arm = () => {
      if (!motion) return;
      // A mask child sits translated outside its clip, so watch the wrapper.
      const groups = new Map<Element, HTMLElement[]>();
      for (const el of all("[data-reveal]:not(.in)")) {
        const target = el.dataset.reveal === "mask" && el.parentElement ? el.parentElement : el;
        groups.set(target, [...(groups.get(target) ?? []), el]);
      }
      groups.forEach((els, target) => {
        pending.push({ target, play: () => els.forEach((el) => el.classList.add("in")) });
      });

      for (const el of all("[data-count]:not([data-counted])")) {
        const to = Number(el.dataset.count);
        el.textContent = "0";
        pending.push({
          target: el,
          play: () => {
            el.dataset.counted = "1";
            const t0 = performance.now();
            requestAnimationFrame(function tick(now) {
              const k = Math.min(1, (now - t0) / 1800);
              el.textContent = String(Math.round(to * (1 - Math.pow(1 - k, 4))));
              if (k < 1) requestAnimationFrame(tick);
            });
          },
        });
      }
      armed = true;
      checkReveals();
      // Late layout shifts (images, fonts) can bring things into view without a scroll.
      const t1 = setTimeout(checkReveals, 400);
      const t2 = setTimeout(checkReveals, 1200);
      cleanups.push(() => {
        clearTimeout(t1);
        clearTimeout(t2);
      });
    };

    if (root.classList.contains("intro-on")) {
      window.addEventListener("app:ready", arm, { once: true });
      cleanups.push(() => window.removeEventListener("app:ready", arm));
    } else {
      arm();
    }

    // ── Marquees ───────────────────────────────────────────────────────
    const marquees: Animation[] = [];
    if (motion) {
      for (const el of all("[data-marquee]")) {
        const kf = [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }];
        marquees.push(
          el.animate(el.dataset.marquee === "rev" ? kf.reverse() : kf, {
            duration: Number(el.dataset.dur || 40000),
            iterations: Infinity,
          })
        );
      }
    }
    cleanups.push(() => marquees.forEach((a) => a.cancel()));

    // ── Scroll-linked effects ──────────────────────────────────────────
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reels = all("[data-hscroll]");
    const fills = all("[data-fill]");
    const lines = all("[data-progress]");
    const steps = all("[data-step]");
    const drifts = all("[data-parallax]");
    const bars = all("[data-scrollbar]");

    const sizeReels = () => {
      for (const el of reels) {
        const track = el.querySelector<HTMLElement>("[data-htrack]");
        if (!track) continue;
        if (motion && desktop.matches) {
          el.style.height = `${track.scrollWidth - el.clientWidth + window.innerHeight}px`;
        } else {
          el.style.height = "";
          track.style.transform = "";
        }
      }
    };

    let lastY = window.scrollY;
    let velocity = 0;

    const fx = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max = Math.max(1, document.documentElement.scrollHeight - vh);
      for (const b of bars) b.style.transform = `scaleX(${clamp(y / max)})`;

      velocity = Math.min(4, velocity + Math.abs(y - lastY) / 60);
      lastY = y;
      if (!motion) return;

      if (desktop.matches) {
        for (const el of reels) {
          const track = el.querySelector<HTMLElement>("[data-htrack]");
          if (!track) continue;
          const r = el.getBoundingClientRect();
          const p = clamp(-r.top / Math.max(1, r.height - vh));
          track.style.transform = `translate3d(${-p * Math.max(0, track.scrollWidth - el.clientWidth)}px,0,0)`;
          const bar = el.querySelector<HTMLElement>("[data-hbar]");
          if (bar) bar.style.transform = `scaleX(${p})`;
        }
      }
      for (const el of fills) {
        const r = el.getBoundingClientRect();
        const p = clamp((vh * 0.8 - r.top) / (r.height + vh * 0.25)) * 100;
        el.style.backgroundSize = `${p}% 100%, 100% 100%`;
      }
      for (const el of lines) {
        const r = (el.parentElement ?? el).getBoundingClientRect();
        el.style.transform = `scaleY(${clamp((vh * 0.6 - r.top) / r.height)})`;
      }
      for (const el of steps) {
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - vh * 0.55) / (vh * 0.5);
        el.style.opacity = String(Math.max(0.22, 1 - d));
      }
      for (const el of drifts) {
        const r = (el.parentElement ?? el).getBoundingClientRect();
        const k = Number(el.dataset.parallax || 0.1);
        el.style.transform = `translate3d(0,${(r.top + r.height / 2 - vh / 2) * -k}px,0) scale(1.15)`;
      }
      checkReveals();
    };

    const onResize = () => {
      sizeReels();
      fx();
    };

    sizeReels();
    fx();

    // Lenis emits in the same frame it moves; fall back to native scroll.
    const lenis = getLenis();
    if (lenis) cleanups.push(lenis.on("scroll", fx));
    else {
      window.addEventListener("scroll", fx, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", fx));
    }
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    // Track widths change as fonts and images arrive.
    const ro = new ResizeObserver(onResize);
    for (const el of reels) {
      const track = el.querySelector("[data-htrack]");
      if (track) ro.observe(track);
    }
    cleanups.push(() => ro.disconnect());

    // Scroll velocity decays each frame and drives marquee speed.
    let raf = 0;
    if (marquees.length) {
      raf = requestAnimationFrame(function loop() {
        velocity *= 0.93;
        for (const a of marquees) a.playbackRate = 1 + velocity;
        raf = requestAnimationFrame(loop);
      });
    }
    cleanups.push(() => cancelAnimationFrame(raf));

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
