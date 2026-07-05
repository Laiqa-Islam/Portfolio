"use client";

import { ReactNode } from "react";

export default function Marquee({
  children,
  duration = 30,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="marquee-track inline-flex items-center"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {/* duplicated content = seamless loop */}
        <div className="inline-flex items-center">{children}</div>
        <div className="inline-flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
