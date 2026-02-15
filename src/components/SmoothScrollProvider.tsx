"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 0,        // 🔑 NO inertia
      easing: (t) => t,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
