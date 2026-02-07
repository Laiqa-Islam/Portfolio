// app/projects/page.tsx  (or wherever your list lives)

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-5 md:px-8 lg:px-12">
       <Link
          href="/"
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-white/70 hover:text-white mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-16 md:mb-24 text-center md:text-left tracking-tight">
        Projects
      </h2>

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
    </section>
  );
}