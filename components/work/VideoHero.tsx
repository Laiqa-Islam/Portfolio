"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Case-study cover for projects with a walkthrough video. Plays muted on
 * loop while on screen, pauses when scrolled away, and never autoplays for
 * visitors who prefer reduced motion. A visible button toggles playback.
 */
export default function VideoHero({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      userPaused.current = true;
      return;
    }
    // The cover is on screen at load, so start right away; the observer
    // only pauses and resumes it as it scrolls out of and back into view.
    video.play().catch(() => {});
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) video.play().catch(() => {});
        else if (!entry.isIntersecting) video.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <button
        type="button"
        onClick={toggle}
        data-cursor={playing ? "Pause" : "Play"}
        className="label absolute right-4 bottom-4 z-10 flex cursor-pointer items-center gap-2 bg-bg px-3 py-2 text-fg transition-colors hover:bg-accent-fill hover:text-paper"
      >
        <span className="text-[10px]">{playing ? "❚❚" : "▶"}</span>
        {playing ? "Pause walkthrough" : "Play walkthrough"}
      </button>
    </>
  );
}
