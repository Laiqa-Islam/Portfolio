"use client";

import { useEffect, useRef } from "react";

/**
 * A muted walkthrough layered over a project's poster image. It loads
 * nothing until the surrounding link is hovered, then fades in and plays;
 * leaving pauses it and fades back to the still. Hover devices only.
 */
export default function HoverVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    const host = video?.closest("a");
    if (!video || !host) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const enter = () => {
      video.style.opacity = "1";
      video.play().catch(() => {});
    };
    const leave = () => {
      video.style.opacity = "0";
      video.pause();
    };
    host.addEventListener("mouseenter", enter);
    host.addEventListener("mouseleave", leave);
    return () => {
      host.removeEventListener("mouseenter", enter);
      host.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-500"
    />
  );
}
