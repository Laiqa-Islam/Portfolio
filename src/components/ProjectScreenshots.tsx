// components/ProjectScreenshots.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// optional: import "yet-another-react-lightbox/plugins/thumbnails.css";  // if you want thumbnails later

interface ProjectScreenshotsProps {
  screenshots: string[];
  projectTitle: string;
  heroImage?: string;     // optional — include hero in the gallery?
}

export default function ProjectScreenshots({
  screenshots,
  projectTitle,
  heroImage,
}: ProjectScreenshotsProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Combine hero + screenshots into one gallery array (or just screenshots)
  const slides = [
    ...(heroImage ? [{ src: heroImage, alt: `${projectTitle} – Hero` }] : []),
    ...screenshots.map((src, i) => ({
      src,
      alt: `${projectTitle} screenshot ${i + 1}`,
    })),
  ];

  if (slides.length === 0) return null;

  return (
    <>
      {/* Grid of thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            type="button"
            className="group relative rounded-2xl overflow-hidden border border-white/8 bg-white/3 backdrop-blur-lg shadow-xl shadow-black/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt ?? ""}
              width={800}
              height={600}
              className="w-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Optional subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white text-xl font-medium drop-shadow-md">View</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        // Optional: add plugins later, e.g.
        // plugins={[Thumbnails, Zoom, Fullscreen]}
      />
    </>
  );
}