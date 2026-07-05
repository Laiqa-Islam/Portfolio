"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

/** ratio = naturalHeight / naturalWidth; above this we treat it as long-form */
const LONGFORM_RATIO = 1.4;

function Shot({
  src,
  index,
  title,
  onOpen,
}: {
  src: string;
  index: number;
  title: string;
  onOpen: () => void;
}) {
  const [ratio, setRatio] = useState<number | null>(null);
  const isLong = ratio !== null && ratio >= LONGFORM_RATIO;
  const label = `IMG_${String(index + 1).padStart(3, "0")}`;

  return (
    <figure className="img-frame corner-ticks group relative border border-line">
      {isLong ? (
        // long-form: scroll the capture inside its frame; data-lenis-prevent
        // keeps the page from moving while the cursor is inside
        <div
          data-lenis-prevent
          data-cursor="view"
          onClick={onOpen}
          className="relative h-[420px] w-full overflow-y-auto overscroll-contain md:h-[540px] [scrollbar-color:var(--gold-dim)_transparent] [scrollbar-width:thin]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${title} — screenshot ${index + 1}`}
            loading="lazy"
            className="block w-full"
          />
          <div className="pointer-events-none sticky bottom-0 left-0 h-16 w-full bg-gradient-to-t from-ink/70 to-transparent" />
          <span className="pointer-events-none sticky bottom-3 left-0 ml-3 inline-flex items-center gap-1.5 bg-ink/80 px-2 py-1 font-mono text-[10px] tracking-widest text-gold">
            <span className="animate-bounce">↕</span> SCROLL · CLICK TO EXPAND
          </span>
        </div>
      ) : (
        <button
          type="button"
          onClick={onOpen}
          data-cursor="view"
          aria-label={`Expand ${title} screenshot ${index + 1}`}
          className="relative block aspect-[16/9] w-full"
        >
          <Image
            src={src}
            alt={`${title} — screenshot ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth) setRatio(img.naturalHeight / img.naturalWidth);
            }}
          />
        </button>
      )}

      <span className="pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-1 bg-ink/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        ⤢ EXPAND
      </span>
      {!isLong && (
        <span className="pointer-events-none absolute bottom-2 left-3 z-10 bg-ink/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-gold">
          {label}
        </span>
      )}
    </figure>
  );
}

export default function Screenshots({
  title,
  shots,
}: {
  title: string;
  shots: string[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-b border-line px-6 py-16 md:px-12 xl:px-20 md:py-24">
      <Reveal>
        <p className="mb-10 font-mono text-xs tracking-[0.3em] text-gold">
          // VISUAL LOG
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {shots.map((shot, i) => (
          <Reveal
            key={shot}
            delay={(i % 2) * 0.1}
            y={40}
            className={i % 3 === 0 ? "sm:col-span-2" : ""}
          >
            <Shot src={shot} index={i} title={title} onOpen={() => setOpen(i)} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox
            shots={shots}
            title={title}
            index={open}
            onIndex={setOpen}
            onClose={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
