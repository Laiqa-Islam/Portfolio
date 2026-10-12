import { TLink } from "@/components/motion/PageTransition";
import ProjectPanel from "@/components/ui/ProjectPanel";
import type { Project } from "@/data/projects";

/** Pinned horizontal reel on desktop (scroll moves it sideways); a stack on mobile. */
export default function SelectedWork({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" data-hscroll="" className="relative mt-18 scroll-mt-[62px]">
      <div data-hsticky="" className="flex flex-col gap-8 border-t-2 border-line py-12">
        <div className="flex items-baseline gap-6 px-5 md:px-8">
          <span className="label text-accent-text">(02)</span>
          <h2 className="display text-[clamp(40px,5vw,80px)]">Selected work</h2>
          <div className="ml-auto hidden h-0.5 w-60 bg-line lg:block">
            <div data-hbar="" className="h-0.5 origin-left scale-x-0 bg-accent" />
          </div>
        </div>

        <div data-htrack="" className="flex flex-col gap-16 px-5 md:px-8">
          {featured.map((p, i) => {
            const subtitle = p.title.includes(" — ") ? p.title.split(" — ")[1] : p.title;
            return (
              <TLink
                key={p.slug}
                href={`/work/${p.slug}`}
                data-cursor="View"
                className="group grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
              >
                <div data-reveal="img" className="h-[70vw] min-h-[320px] lg:h-[min(62vh,600px)] lg:min-h-0">
                  <ProjectPanel project={p} index={i} total={featured.length} eager />
                </div>
                <div className="flex flex-col justify-end gap-4 border-t-2 border-line pt-4">
                  <span className="text-[22px] leading-[1.15] font-extrabold tracking-[-0.02em]">{subtitle}</span>
                  <span className="text-[15px]">{p.summary}</span>
                  <span className="text-[13px] text-muted">{p.tech.slice(0, 4).join(" · ")}</span>
                  <span className="text-[14px] font-extrabold text-accent-text">
                    Open case study <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </TLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
