"use client";

import Image from "next/image";
import { useState } from "react";
import { dl } from "@/lib/motion";
import Lightbox from "./Lightbox";

/** naturalHeight / naturalWidth above this is a full-page (long-form) capture. */
const LONGFORM = 1.4;

function Shot({ src, index, title, onOpen }: { src: string; index: number; title: string; onOpen: () => void }) {
  const [ratio, setRatio] = useState<number | null>(null);
  const long = ratio !== null && ratio >= LONGFORM;
  const alt = `${title} — screenshot ${index + 1}`;
  const chip = "label pointer-events-none absolute z-10 bg-bg px-2 py-1 text-[10px] text-accent-text";

  return (
    <figure className="group relative m-0 border-2 border-line bg-surface">
      {long ? (
        // Scroll the capture inside its frame; the page stays put meanwhile.
        <div
          data-lenis-prevent=""
          data-cursor="Expand"
          onClick={onOpen}
          className="relative h-[440px] w-full cursor-pointer overflow-y-auto overscroll-contain md:h-[560px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" className="block w-full" />
          <span className={`${chip} sticky bottom-3 left-3 ml-3 inline-flex items-center gap-1.5`}>
            <span className="animate-bounce">↕</span> Scroll · click to expand
          </span>
        </div>
      ) : (
        <button
          type="button"
          onClick={onOpen}
          data-cursor="Expand"
          aria-label={`Expand ${alt}`}
          className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden"
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth) setRatio(img.naturalHeight / img.naturalWidth);
            }}
          />
        </button>
      )}
      {!long && <span className={`${chip} bottom-3 left-3`}>IMG_{String(index + 1).padStart(3, "0")}</span>}
    </figure>
  );
}

export default function Gallery({ title, shots }: { title: string; shots: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {shots.map((shot, i) => (
          <div
            key={shot}
            data-reveal="img"
            style={dl((i % 2) * 120, 1300)}
            className={i % 3 === 0 ? "md:col-span-2" : ""}
          >
            <Shot src={shot} index={i} title={title} onOpen={() => setOpen(i)} />
          </div>
        ))}
      </div>
      {open !== null && (
        <Lightbox shots={shots} title={title} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
