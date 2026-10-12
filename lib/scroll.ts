import type Lenis from "lenis";

/** Height of the sticky header; anchors land just below it. */
export const HEADER_H = 62;

let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

/**
 * Lenis.start() resets any running scroll animation, so if something (the
 * mobile menu) has it stopped, start it now — before scrolling — rather than
 * letting that menu's later unlock cancel the scroll mid-flight.
 */
function ready(l: Lenis) {
  if (l.isStopped) l.start();
  return l;
}

export function scrollToY(y: number, immediate = false) {
  if (lenis) ready(lenis).scrollTo(y, { immediate, duration: 1.2 });
  else window.scrollTo({ top: y, behavior: immediate ? "auto" : "smooth" });
}

export function scrollToHash(hash: string, immediate = false) {
  const el = document.getElementById(hash.replace(/^#/, ""));
  if (!el) return;
  if (lenis) {
    ready(lenis).scrollTo(el, { offset: -HEADER_H, immediate, duration: 1.2 });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
    window.scrollTo({ top: y, behavior: immediate ? "auto" : "smooth" });
  }
}

/** Freeze the smooth scroller (menus, lightbox, intro). */
export function lockScroll(locked: boolean) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
