"use client";

import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {

  return (
    <div id="projects" className="py-10 px-0 md:px-8 lg:px-12">
       <div className=" mx-auto px-5 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-12 md:mb-16 text-center md:text-left"
        >
           <span className="text-rose-400/90">Projects</span>
        </motion.h2>
        </div>

     <div className="flex flex-col gap-10 md:gap-16 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block"
          >
            <ProjectCard
              projectTitle={project.title}
              projectDescription={project.description}
              company={project.role || undefined}
              imageSrc={project.imageSrc}
              hoverTint={project.hoverTint}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}