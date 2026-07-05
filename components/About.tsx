"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { infoBlocks, InfoBlock } from "@/data/info";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function InfoSection({ block, index }: { block: InfoBlock; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // gentle counter-drift between the two images; small enough to never
  // escape the column and collide with text
  const y1 = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-16, 20]);

  const paragraphs = block.text.split("\n\n");

  return (
    <div
      ref={ref}
      className={`grid items-center gap-14 px-6 py-20 md:px-12 md:py-32 lg:grid-cols-2 lg:gap-24 xl:px-20`}
    >
      {/* text side */}
      <div className={block.reverse ? "lg:order-2" : ""}>
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
            {String(index + 1).padStart(2, "0")} — {block.eyebrow}
          </p>
          <h3 className="mb-8 font-display text-3xl font-medium leading-[1.1] tracking-tight text-bone md:text-4xl lg:text-5xl">
            {block.title}
          </h3>
        </Reveal>
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08} y={24}>
            <p className="mb-5 max-w-xl text-sm leading-loose text-bone-dim md:text-base">
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      {/* images side — staggered pair, contained in normal flow */}
      <div className={block.reverse ? "lg:order-1" : ""}>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {block.image && (
            <Reveal y={30}>
              <motion.div
                style={{ y: y1 }}
                className="img-frame corner-ticks aspect-[3/4] border border-line"
              >
                <Image
                  src={block.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </motion.div>
            </Reveal>
          )}
          {block.image2 && (
            <Reveal y={50} delay={0.12}>
              <motion.div
                style={{ y: y2 }}
                className="img-frame relative mt-10 aspect-[3/4] border border-line md:mt-16"
              >
                <Image
                  src={block.image2}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gold/15 mix-blend-overlay" />
              </motion.div>
            </Reveal>
          )}
        </div>
        <p className="mt-8 text-right font-mono text-[10px] tracking-widest text-bone-faint md:mt-12">
          FIG.{String(index + 1).padStart(2, "0")} — {block.id.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-44">
      <SectionHeading index="02" label="ABOUT" title="Behind the Commits" />
      <div className="divide-y divide-line border-y border-line">
        {infoBlocks.map((block, i) => (
          <InfoSection key={block.id} block={block} index={i} />
        ))}
      </div>
    </section>
  );
}
