"use client";

import { scrollToY } from "@/lib/scroll";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => scrollToY(0)}
      className="ml-auto flex min-w-[200px] cursor-pointer justify-between gap-6 border-l-2 border-line px-5 py-4 transition-colors duration-200 hover:bg-accent-fill hover:text-paper md:px-8"
    >
      <span>Back to top</span>
      <span>↑</span>
    </button>
  );
}
