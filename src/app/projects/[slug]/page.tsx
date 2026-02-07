// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectScreenshots from "@/components/ProjectScreenshots";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  if (project.comingSoon) {
    return (
      
      <main className="min-h-screen bg-black text-white px-6 py-32">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">{project.title}</h1>
          <p className="text-xl text-white/70 mb-12">
            Detailed case study coming soon...
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={20} /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen  text-white px-6 py-20 md:py-32 bg-gradient-to-b ${project.Tint || 'from-gray-950/80 via-black/90 to-black'}
    backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-white/70 hover:text-white mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div
          className={`grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16`}>
          {/* Main content */}
          <div className="space-y-10">
            {/* Hero div */}
            <div className="space-y-6 mt-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                {project.title}
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed">
                {project.description}
              </p>

              {project.heroImage || project.imageSrc ? (
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-2xl">
                  <Image
                    src={project.heroImage || project.imageSrc || ""}
                    alt={project.title}
                    width={1400}
                    height={900}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              ) : null}
            </div>

            {/* Overview + Goals */}
            {(project.overview || project.goals?.length) && (
              <div className="grid md:grid-cols-2 gap-12 py-3">
                {project.overview && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5">Overview</h2>
                    <p className="text-white/75 leading-relaxed">{project.overview}</p>
                  </div>
                )}

                {project.goals && project.goals.length > 0 && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5">Goals</h2>
                    <ul className="space-y-3 text-white/75">
                      {project.goals.map((goal, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1.5">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold">Key Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.keyFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-semibold">Screenshots</h2>
                <ProjectScreenshots
                screenshots={project.screenshots}
                projectTitle={project.title}
                heroImage={project.heroImage || project.imageSrc}
              />
              </div>
            )}

            {/* Outcome */}
            {project.outcome && (
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold">Outcome</h2>
                <p className="text-white/75 leading-relaxed max-w-3xl">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-32 self-start">
            <div className="p-6 rounded-2xl space-y-6">
              {project.role && (
                <div>
                  <p className="text-sm text-white/50">Role</p>
                  <p className="font-medium">{project.role}</p>
                </div>
              )}

              {project.year && (
                <div>
                  <p className="text-sm text-white/50">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              )}

              {project.toolsUsed && project.toolsUsed.length > 0 && (
                <div>
                  <p className="text-sm text-white/50">Tools</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {project.externalLink && (
              <Link
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                View Live / Prototype
                <ExternalLink size={18} />
              </Link>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}