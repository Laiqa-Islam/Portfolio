import { TLink } from "@/components/motion/PageTransition";
import { MaskLine } from "@/components/ui/Mask";
import SectionMeta from "@/components/ui/SectionMeta";
import type { Project } from "@/data/projects";
import { pad2 } from "@/lib/motion";
import IndexPreview from "./IndexPreview";

const COLS = "lg:grid-cols-[64px_minmax(0,4fr)_minmax(0,2fr)_minmax(0,3fr)_72px_32px]";

export default function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <section id="index" className="scroll-mt-[62px] px-5 pt-18 md:px-8">
      <SectionMeta no="03" title="Index" meta={[`${projects.length} projects`, "Hover to preview"]} />
      <h2 className="display mb-12 text-[clamp(48px,7vw,120px)]">
        <MaskLine>Everything, in order.</MaskLine>
      </h2>

      <div className="border-t-2 border-line">
        <div className={`label hidden gap-6 border-b border-line py-2.5 text-muted lg:grid ${COLS}`}>
          <span>No.</span>
          <span>Project</span>
          <span>Type</span>
          <span>Stack</span>
          <span>Year</span>
          <span />
        </div>
        {projects.map((p, i) => (
          <TLink
            key={p.slug}
            href={`/work/${p.slug}`}
            data-preview={i}
            data-cursor="Open"
            className={`fill-row group grid grid-cols-[36px_minmax(0,1fr)_24px] items-baseline gap-x-4 gap-y-1 border-b-2 border-line py-5 lg:gap-6 lg:py-6 lg:hover:pl-4 ${COLS}`}
          >
            <span className="tabular text-[13px] text-accent-text transition-colors group-hover:text-paper">
              {pad2(i + 1)}
            </span>
            <span className="stretch text-[clamp(28px,3.4vw,52px)] leading-none tracking-[-0.04em]">{p.name}</span>
            <span className="hidden text-[15px] lg:block">{p.kind}</span>
            <span className="hidden text-[14px] text-muted transition-colors group-hover:text-paper lg:block">
              {p.tech.slice(0, 3).join(" · ")}
            </span>
            <span className="tabular hidden text-[14px] lg:block">{p.year ?? "—"}</span>
            <span className="text-right text-[20px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
            <span className="col-start-2 text-[13px] text-muted transition-colors group-hover:text-paper lg:hidden">
              {p.kind}
              {p.year ? ` · ${p.year}` : ""}
            </span>
          </TLink>
        ))}
      </div>

      <IndexPreview
        items={projects.map(({ slug, name, year, panel, imageSrc, sketch }) => ({
          slug,
          name,
          year,
          panel,
          imageSrc,
          sketch,
        }))}
      />
    </section>
  );
}
