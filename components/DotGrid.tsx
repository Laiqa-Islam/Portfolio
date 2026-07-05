"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive dot-grid canvas. Dots near the cursor light up gold and
 * get displaced outward; everything eases back when the cursor leaves.
 */
export default function DotGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dots: { x: number; y: number; ox: number; oy: number }[] = [];
    const GAP = 36;
    const RADIUS = 150;

    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const dot of dots) {
        const dx = mouse.x - dot.ox;
        const dy = mouse.y - dot.oy;
        const dist = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - dist / RADIUS);

        if (!reduceMotion) {
          const targetX = dot.ox - dx * influence * 0.35;
          const targetY = dot.oy - dy * influence * 0.35;
          dot.x += (targetX - dot.x) * 0.12;
          dot.y += (targetY - dot.y) * 0.12;
        }

        const size = 1 + influence * 1.8;
        if (influence > 0.03) {
          ctx.fillStyle = `rgba(255, 176, 46, ${0.3 + influence * 0.7})`;
        } else {
          ctx.fillStyle = "rgba(240, 236, 230, 0.1)";
        }
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let rafId: number;
    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();
    rafId = requestAnimationFrame(loop);
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
