"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      data-cursor={copied ? "Copied" : "Copy"}
      className="group flex w-full cursor-pointer items-baseline justify-between gap-4 border-b-2 border-line py-5 text-left"
    >
      <span className="text-[clamp(20px,2vw,30px)] font-extrabold tracking-[-0.02em] break-all">{site.email}</span>
      <span className="label shrink-0 text-accent-text" aria-live="polite">
        {copied ? "Copied ✓" : "Copy"}
      </span>
    </button>
  );
}
