import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { TLink } from "@/components/motion/PageTransition";
import { MaskLetters } from "@/components/ui/Mask";
import ProjectPanel from "@/components/ui/ProjectPanel";
import Companion from "@/components/work/Companion";
import Gallery from "@/components/work/Gallery";
import Pipeline from "@/components/work/Pipeline";
import VideoHero from "@/components/work/VideoHero";
import { projects } from "@/data/projects";
import { dl, pad2 } from "@/lib/motion";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not found" };
  return { title: project.name, description: project.description };
}

/** A numbered section: label on the left, content from column five. */
function Chapter({ no, label, children }: { no: number; label: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 px-5 pt-24 md:px-8 lg:grid-cols-12">
      <div className="label border-t-2 border-line pt-3 lg:col-span-3">
        <span className="text-accent-text">({pad2(no)})</span> {label}
      </div>
      <div className="border-line lg:col-span-8 lg:col-start-5 lg:border-t-2 lg:pt-6">{children}</div>
    </section>
  );
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const hero = project.heroImage ?? project.imageSrc;
  const companion = project.companion ? projects.find((p) => p.slug === project.companion?.slug) : undefined;

  // Size the title by its longest word so single long names never overflow.
  const longest = Math.max(...project.name.split(" ").map((w) => w.length));
  // Capitals like M, O and D run ~0.75em wide; leave room for the side gutters.
  const titleVw = Math.min(17, 86 / (longest * 0.75)).toFixed(1);

  const meta: { label: string; value: ReactNode }[] = [
    { label: "Type", value: project.role ? `${project.kind} — ${project.role}` : project.kind },
    { label: "Year", value: project.year ?? "—" },
    { label: "Stack", value: project.tech.join(", ") },
    {
      label: "Links",
      value:
        project.liveUrl || project.repoUrl ? (
          <span className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent-text underline-offset-4 hover:underline">
                Live site ↗
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent-text underline-offset-4 hover:underline">
                Source ↗
              </a>
            )}
          </span>
        ) : (
          "—"
        ),
    },
  ];

  let n = 0;

  return (
    <main>
      <section className="px-5 pt-7 md:px-8">
        <div className="label flex gap-6">
          <TLink href="/#work" className="transition-colors hover:text-accent-text">
            ← All work
          </TLink>
          <span className="ml-auto">
            Case study {pad2(index + 1)} / {pad2(projects.length)}
          </span>
        </div>

        <h1
          className="mt-10 leading-[0.86] tracking-[-0.06em] uppercase"
          style={{ fontSize: `clamp(32px, ${titleVw}vw, 300px)` }}
        >
          <MaskLetters text={project.name} step={50} />
        </h1>

        <div className="mt-8 grid gap-6 border-t-2 border-line pt-6 lg:grid-cols-12">
          <p
            data-reveal="up"
            style={dl(400)}
            className="text-[clamp(22px,2.4vw,36px)] leading-[1.2] tracking-[-0.02em] text-pretty lg:col-span-8"
          >
            {project.description}
          </p>
        </div>

        <dl className="mt-12 grid grid-cols-1 border-t-2 border-line sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((m, i) => (
            <div
              key={m.label}
              data-reveal="fade"
              style={dl(500 + i * 80)}
              className={`border-b-2 border-line py-4 sm:pr-6 lg:border-b-0 ${i < 3 ? "lg:border-r-2" : ""} ${
                i % 2 === 0 ? "sm:border-r-2" : "sm:pl-6"
              } ${i > 0 ? "lg:pl-6" : ""}`}
            >
              <dt className="label opacity-60">{m.label}</dt>
              <dd className="mt-1.5 text-[16px]">{m.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-5 pt-8 md:px-8">
        <div data-reveal="img" style={dl(300, 1400)} className="relative aspect-[4/3] overflow-hidden md:aspect-[16/8]">
          {project.video && hero ? (
            <VideoHero src={project.video} poster={hero} label={`${project.name} walkthrough`} />
          ) : hero ? (
            <div data-parallax="0.08" className="absolute inset-0">
              <Image src={hero} alt={`${project.name} — overview`} fill priority sizes="100vw" className="object-cover object-top" />
            </div>
          ) : (
            <ProjectPanel project={project} index={index} total={projects.length} size="hero" />
          )}
        </div>
      </section>

      <Chapter no={++n} label="Overview">
        <p className="text-[clamp(22px,2.4vw,36px)] leading-[1.25] font-semibold tracking-[-0.02em] text-pretty">
          <span data-fill="">{project.overview ?? project.description}</span>
        </p>
      </Chapter>

      {project.goals && (
        <Chapter no={++n} label="Objectives">
          <ol className="border-t-2 border-line lg:border-t-0">
            {project.goals.map((g, i) => (
              <li
                key={g}
                data-reveal="up"
                style={dl(i * 70)}
                className="grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-b border-line py-4 text-[18px] leading-snug"
              >
                <span className="tabular text-[13px] text-accent-text">[{pad2(i + 1)}]</span>
                {g}
              </li>
            ))}
          </ol>
        </Chapter>
      )}

      {project.pipeline && (
        <Chapter no={++n} label="How it works">
          <Pipeline steps={project.pipeline} />
        </Chapter>
      )}

      {companion && project.companion && (
        <Chapter no={++n} label={`Works with ${companion.name}`}>
          <Companion
            companion={companion}
            index={projects.indexOf(companion)}
            total={projects.length}
            text={project.companion.text}
            flow={project.companion.flow}
          />
        </Chapter>
      )}

      {project.keyFeatures && (
        <Chapter no={++n} label="Key features">
          <div className="grid border-t-2 border-l-2 border-line sm:grid-cols-2 xl:grid-cols-3">
            {project.keyFeatures.map((f, i) => (
              <div
                key={f.title}
                data-reveal="up"
                style={dl((i % 3) * 100)}
                className="group flex flex-col gap-3 border-r-2 border-b-2 border-line p-6 transition-colors duration-300 hover:bg-surface"
              >
                <span className="text-[13px] text-accent-text">#{pad2(i + 1)}</span>
                <h3 className="text-[20px] leading-tight tracking-[-0.02em]">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </Chapter>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="px-5 pt-24 md:px-8">
          <div className="label mb-6 flex border-t-2 border-line pt-3">
            <span>
              <span className="text-accent-text">({pad2(++n)})</span> Visual log
            </span>
            <span className="ml-auto text-muted">
              {project.screenshots.length} screens · click to expand
            </span>
          </div>
          <Gallery title={project.name} shots={project.screenshots} />
        </section>
      )}

      {(project.outcome || project.toolsUsed) && (
        <Chapter no={++n} label="Outcome">
          {project.outcome && (
            <p className="text-[clamp(22px,2.4vw,36px)] leading-[1.25] font-semibold tracking-[-0.02em] text-pretty">
              <span data-fill="">{project.outcome}</span>
            </p>
          )}
          {project.toolsUsed && (
            <div className={`flex flex-wrap gap-2 ${project.outcome ? "mt-10" : ""}`}>
              {project.toolsUsed.map((t, i) => (
                <span
                  key={t}
                  data-reveal="fade"
                  style={dl(i * 50)}
                  className="label border border-line px-2.5 py-1.5 transition-colors hover:border-accent-fill hover:bg-accent-fill hover:text-paper"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </Chapter>
      )}

      <TLink
        href={`/work/${next.slug}`}
        data-cursor="Next"
        className="group mt-24 block border-t-2 border-line px-5 pt-10 pb-16 transition-colors duration-500 hover:bg-surface md:px-8"
      >
        <span className="label">Next project — {pad2(((index + 1) % projects.length) + 1)}</span>
        <span className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="stretch min-w-0 text-[clamp(36px,10vw,200px)] leading-[0.85] tracking-[-0.06em]">
            {next.name}
          </span>
          <span className="text-[clamp(40px,5vw,80px)] text-accent transition-transform duration-500 group-hover:translate-x-3">
            →
          </span>
        </span>
      </TLink>
    </main>
  );
}
