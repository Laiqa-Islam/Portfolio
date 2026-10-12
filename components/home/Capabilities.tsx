import { TLink } from "@/components/motion/PageTransition";
import SectionMeta from "@/components/ui/SectionMeta";
import type { Project } from "@/data/projects";
import { capabilities } from "@/data/site";
import { dl, pad2 } from "@/lib/motion";

/** What I build — every claim links to the projects that back it up. */
export default function Capabilities({ projects }: { projects: Project[] }) {
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  return (
    <section className="px-5 pt-18 md:px-8">
      <SectionMeta no="05" title="What I build" meta={[`${capabilities.length} kinds of work`, "Each with proof"]} />
      <div className="border-t-2 border-line">
        {capabilities.map((c, i) => (
          <div key={c.title} data-reveal="up" style={dl(i * 80)} className="border-b-2 border-line">
            <div className="group grid gap-4 py-7 transition-[padding] duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:pl-5 lg:grid-cols-[80px_minmax(0,5fr)_minmax(0,4fr)] lg:items-baseline lg:gap-6">
              <span className="text-[13px] text-accent-text">#{pad2(i + 1)}</span>
              <span className="stretch text-[clamp(32px,4.4vw,72px)] leading-none tracking-[-0.05em]">{c.title}</span>
              <div className="flex flex-col gap-3">
                <span className="text-[16px]">{c.text}</span>
                <span className="flex flex-wrap gap-2">
                  {c.proof.map((slug) => {
                    const p = bySlug.get(slug);
                    if (!p) return null;
                    return (
                      <TLink
                        key={slug}
                        href={`/work/${slug}`}
                        className="label border border-line px-2 py-1 transition-colors hover:border-accent-fill hover:bg-accent-fill hover:text-paper"
                      >
                        {p.name} ↗
                      </TLink>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
