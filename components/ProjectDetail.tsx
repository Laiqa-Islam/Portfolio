"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import Reveal from "./Reveal";
import Scramble from "./Scramble";
import Magnetic from "./Magnetic";
import Nav from "./Nav";

export default function ProjectDetail({
  project,
  index,
  next,
}: {
  project: Project;
  index: number;
  next: Project;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const heroImage = project.heroImage ?? project.imageSrc;
  const num = String(index + 1).padStart(2, "0");

  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36">
        {/* header */}
        <div className="px-6 md:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/#work"
              data-cursor="hover"
              className="link-sweep font-mono text-xs tracking-widest text-bone-dim transition-colors hover:text-gold"
            >
              ← BACK TO INDEX
            </Link>
          </motion.div>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.p
                className="mb-4 font-mono text-xs tracking-[0.3em] text-gold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Scramble text={`CASE.${num} // PROJECT FILE`} speed={30} />
              </motion.p>
              <h1 className="max-w-4xl font-display text-[clamp(2.2rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-bone">
                {project.title.split(" ").map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="mr-[0.25em] inline-block whitespace-nowrap"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + wi * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.div
              className="shrink-0 space-y-2 font-mono text-xs tracking-widest text-bone-dim"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {project.role && (
                <p>
                  <span className="text-bone-faint">ROLE —— </span>
                  {project.role.toUpperCase()}
                </p>
              )}
              <p>
                <span className="text-bone-faint">STACK — </span>
                {project.tech.join(" / ").toUpperCase()}
              </p>
            </motion.div>
          </div>
        </div>

        {/* hero image with parallax */}
        {heroImage && (
          <div
            ref={heroRef}
            className="img-frame corner-ticks relative mx-6 mt-12 aspect-[16/9] overflow-hidden border border-line md:mx-12 xl:mx-20"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-[-10%_0]">
              <Image
                src={heroImage}
                alt={project.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        )}

        {/* overview + goals */}
        <div className="grid gap-12 border-b border-line px-6 py-16 md:grid-cols-5 md:px-12 xl:px-20 md:py-24">
          <div className="md:col-span-3">
            <Reveal>
              <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
                // OVERVIEW
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-bone-dim md:text-lg">
                {project.overview ?? project.description}
              </p>
            </Reveal>
          </div>
          {project.goals && (
            <div className="md:col-span-2">
              <Reveal delay={0.1}>
                <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
                  // OBJECTIVES
                </p>
                <ul className="space-y-3">
                  {project.goals.map((goal, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-bone-dim"
                    >
                      <span className="font-mono text-gold/70">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
        </div>

        {/* key features */}
        {project.keyFeatures && (
          <div className="border-b border-line px-6 py-16 md:px-12 xl:px-20 md:py-24">
            <Reveal>
              <p className="mb-10 font-mono text-xs tracking-[0.3em] text-gold">
                // KEY FEATURES
              </p>
            </Reveal>
            <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
              {project.keyFeatures.map((feature, i) => (
                <Reveal key={feature.title} delay={(i % 3) * 0.08} y={24}>
                  <div
                    data-cursor="hover"
                    className="group h-full bg-ink p-6 transition-colors duration-300 hover:bg-ink-2 md:p-8"
                  >
                    <span className="font-mono text-[10px] tracking-widest text-bone-faint transition-colors duration-300 group-hover:text-gold">
                      F.{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3 mt-4 font-display text-lg font-medium leading-snug tracking-tight text-bone">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-bone-dim">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="border-b border-line px-6 py-16 md:px-12 xl:px-20 md:py-24">
            <Reveal>
              <p className="mb-10 font-mono text-xs tracking-[0.3em] text-gold">
                // VISUAL LOG
              </p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.screenshots.map((shot, i) => (
                <Reveal
                  key={shot}
                  delay={(i % 2) * 0.1}
                  y={40}
                  className={i % 3 === 0 ? "sm:col-span-2" : ""}
                >
                  <div className="img-frame corner-ticks relative aspect-[16/9] border border-line">
                    <Image
                      src={shot}
                      alt={`${project.title} — screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-3 z-10 bg-ink/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-gold">
                      IMG_{String(i + 1).padStart(3, "0")}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* outcome + tools */}
        {(project.outcome || project.toolsUsed) && (
          <div className="grid gap-12 border-b border-line px-6 py-16 md:grid-cols-5 md:px-12 xl:px-20 md:py-24">
            {project.outcome && (
              <div className="md:col-span-3">
                <Reveal>
                  <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
                    // OUTCOME
                  </p>
                  <p className="max-w-2xl text-base leading-relaxed text-bone-dim md:text-lg">
                    {project.outcome}
                  </p>
                </Reveal>
              </div>
            )}
            {project.toolsUsed && (
              <div className="md:col-span-2">
                <Reveal delay={0.1}>
                  <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
                    // TOOLCHAIN
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="border border-line-bright px-3 py-1.5 font-mono text-xs tracking-widest text-bone-dim transition-colors duration-300 hover:border-gold hover:text-gold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            )}
          </div>
        )}

        {/* next project */}
        <Link
          href={`/work/${next.slug}`}
          data-cursor="view"
          className="group block px-6 py-20 text-center md:px-12 xl:px-20 md:py-28"
        >
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-bone-faint">
            NEXT CASE FILE
          </p>
          <Magnetic strength={0.15}>
            <h2 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] font-medium italic leading-tight tracking-tight text-outline transition-all duration-500 group-hover:text-bone group-hover:[-webkit-text-stroke:0px]">
              {next.title} →
            </h2>
          </Magnetic>
        </Link>
      </main>

      <footer className="flex items-center justify-between border-t border-line px-6 py-5 font-mono text-[10px] tracking-widest text-bone-faint md:px-12 xl:px-20">
        <span>© {new Date().getFullYear()} LAIQA ISLAM</span>
        <span>
          EOF<span className="blink text-gold">_</span>
        </span>
      </footer>
    </>
  );
}
