import type { CSSProperties } from "react";

/**
 * Reveal styles read by MotionController. Elements opt in with
 * `data-reveal="up|fade|mask|wipe|img|line|drop"`; this sets the delay
 * (and optionally the duration) through CSS variables.
 */
export function dl(delay: number, duration?: number): CSSProperties {
  return {
    "--d": `${delay}ms`,
    ...(duration ? { "--dur": `${duration}ms` } : {}),
  } as CSSProperties;
}

export const pad2 = (n: number) => String(n).padStart(2, "0");
