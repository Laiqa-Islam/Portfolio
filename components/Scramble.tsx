"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type ScrambleProps = {
  text: string;
  /** run the decode when the element scrolls into view (default true) */
  playOnMount?: boolean;
  /** re-run the decode on hover */
  playOnHover?: boolean;
  speed?: number;
  className?: string;
};

/** Text that decodes from random glyphs into its final form. */
export default function Scramble({
  text,
  playOnMount = true,
  playOnHover = false,
  speed = 28,
  className,
}: ScrambleProps) {
  const [display, setDisplay] = useState(playOnMount ? "" : text);
  const frameRef = useRef<number | null>(null);
  const elRef = useRef<HTMLSpanElement>(null);
  const playedRef = useRef(false);

  const play = useCallback(() => {
    if (frameRef.current) clearInterval(frameRef.current);
    let iteration = 0;
    const total = text.length;

    frameRef.current = window.setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );
      iteration += Math.max(1, total / 18);
      if (iteration >= total) {
        if (frameRef.current) clearInterval(frameRef.current);
        setDisplay(text);
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    if (!playOnMount) return;
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !playedRef.current) {
          playedRef.current = true;
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [play, playOnMount]);

  return (
    <span
      ref={elRef}
      className={className}
      onMouseEnter={playOnHover ? play : undefined}
      aria-label={text}
    >
      {display || " "}
    </span>
  );
}
