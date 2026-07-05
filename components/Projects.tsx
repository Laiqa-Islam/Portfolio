"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 160, damping: 20, mass: 0.5 });
  const py = useSpring(my, { stiffness: 160, damping: 20, mass: 0.5 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <section id="work" className="relative py-28 md:py-44">
      <SectionHeading index="01" label="SELECTED WORK" title="Things I've Shipped" />

      <div
        ref={containerRef}
        className="relative border-t border-line"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setActive(null)}
      >
        {/* floating image preview that chases the cursor (desktop) */}
        <AnimatePresence>
          {active !== null && projects[active].imageSrc && (
            <motion.div
              className="pointer-events-none absolute z-20 hidden h-[240px] w-[380px] overflow-hidden lg:block"
              style={{ x: px, y: py, translateX: "-50%", translateY: "-50%" }}
              initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={projects[active].imageSrc!}
                alt=""
                fill
                sizes="380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 bg-ink px-3 py-1 font-mono text-[10px] tracking-widest text-gold">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05} y={30}>
            <Link
              href={`/work/${project.slug}`}
              data-cursor="view"
              className="group relative block overflow-hidden border-b border-line px-6 py-12 transition-colors duration-500 md:px-12 md:py-16 xl:px-20"
              onMouseEnter={() => setActive(i)}
            >
              {/* gold wash sliding up on hover */}
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />

              <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span className="font-mono text-sm text-gold transition-colors duration-300 group-hover:text-ink/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium leading-tight tracking-tight text-bone transition-colors duration-300 group-hover:text-ink md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-bone-dim transition-colors duration-300 group-hover:text-ink/80 lg:hidden">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="border border-line-bright px-2.5 py-1 font-mono text-[10px] tracking-widest text-bone-dim transition-colors duration-300 group-hover:border-ink/25 group-hover:text-ink/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 font-display text-2xl text-bone-dim transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink md:text-3xl">
                    ↗
                  </span>
                </div>
              </div>

              {/* mobile/tablet inline image */}
              {project.imageSrc && (
                <div className="img-frame relative z-10 mt-6 aspect-[16/9] w-full lg:hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 0px"
                    className="object-cover"
                  />
                </div>
              )}
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
