"use client";

import React from "react";
import { ArrowRight, Import } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MotionSection from "./MotionSection";


type ProjectCardProps = {
  projectTitle: string;
  projectDescription: string;
  company?: string;
  year?: string;
  imageSrc?: string;
  href?: string;
  hoverTint?: string;           
};

export default function ProjectCard({
  projectTitle,
  projectDescription,
  company = "",
  year = "",
  imageSrc = "/project-placeholder.png",
  href,
  hoverTint = "from-indigo-900/30 via-transparent to-transparent",
}: ProjectCardProps) {
  const cardContent = (
    <div
      className={`
        group relative rounded-3xl overflow-hidden
        bg-[#f2f2f20a] backdrop-blur-xl
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(242,242,242,0.08)]
        transition-all duration-500
        hover:shadow-[0_30px_100px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(255,255,255,0.18)]
        hover:scale-[1.015]
      `}
    >
      {/* Hover tint layer */}
      <div
        className={`
          absolute inset-0 pointer-events-none
          bg-gradient-to-br ${hoverTint}
          opacity-100 md:opacity-0 md:group-hover:opacity-70
          transition-opacity duration-700
        `}
      />

      {/* Window-style top bar */}
      <div className="
        relative z-10 h-10 md:h-12
        bg-gradient-to-r from-white/5 via-white/20 to-white/5
        border-b border-white/10
        flex items-center justify-between px-5 md:px-6
      ">
        <div className="flex gap-2.5">
          <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_12px_1px] shadow-red-600/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_12px_1px] shadow-yellow-600/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_12px_1px] shadow-green-600/50" />
        </div>

        {(company || year) && (
          <div className="flex items-center gap-3 text-white/50 text-xs md:text-sm font-medium tracking-wide">
            {company && <span>{company}</span>}
            {year && <span className="opacity-70">{year}</span>}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10 p-6 md:p-8 pb-10 md:pb-12">
        <div className="flex items-start justify-between gap-4">
          <h3 className="
            text-2xl md:text-3xl font-medium
            leading-tight tracking-[-0.02em]
            text-white group-hover:text-white/95
            transition-colors duration-300
          ">
            {projectTitle}
          </h3>

          <div className="
            mt-1.5 p-2.5 rounded-full
            bg-white/5 border border-white/10
            group-hover:bg-white/15 group-hover:border-white/25
            transition-all duration-300
          ">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white" />
          </div>
        </div>

        <p className="
          mt-5 md:mt-6 text-base md:text-lg
          text-white/75 leading-relaxed
          line-clamp-4 md:line-clamp-none
        ">
          {projectDescription}
        </p>

        <div className="
          mt-8 md:mt-10
          rounded-2xl overflow-hidden
          border border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          group-hover:border-white/25 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          transition-all duration-500
        ">
          <div className="aspect-[4/3] md:aspect-[5/3] relative">
            <Image
              src={imageSrc}
              alt={projectTitle}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none bg-[url('/noise.png')] bg-[length:200px]" />
    </div>
  );

  if (href) {
    return (
     <MotionSection delay={0.1}>
       <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </Link>
     </MotionSection>
    );
  }

  return cardContent;
}