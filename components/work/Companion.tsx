import { TLink } from "@/components/motion/PageTransition";
import ProjectPanel from "@/components/ui/ProjectPanel";
import type { Project } from "@/data/projects";
import { dl } from "@/lib/motion";
import Pipeline from "./Pipeline";

/**
 * Two projects built to work hand in hand: the shared flow between them,
 * then a card that crosses over to the other one.
 */
export default function Companion({
  companion,
  index,
  total,
  text,
  flow,
}: {
  companion: Project;
  index: number;
  total: number;
  text: string;
  flow: NonNullable<Project["companion"]>["flow"];
}) {
  return (
    <div className="flex flex-col gap-10">
      <p data-reveal="up" className="max-w-[60ch] text-[clamp(18px,1.6vw,22px)] leading-[1.45] text-pretty">
        {text}
      </p>

      <Pipeline steps={flow} />

      <TLink
        href={`/work/${companion.slug}`}
        data-cursor="Open"
        data-reveal="up"
        style={dl(150)}
        className="group grid gap-6 border-t-2 border-line pt-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-end"
      >
        <div className="h-[260px] md:h-[300px]">
          <ProjectPanel project={companion} index={index} total={total} size="compact" sizes="(min-width: 768px) 35vw, 100vw" />
        </div>
        <div className="flex flex-col gap-3">
          <span className="label text-accent-text">The other half</span>
          <span className="stretch text-[clamp(40px,6vw,96px)] leading-[0.9] tracking-[-0.05em]">{companion.name}</span>
          <span className="text-[16px]">{companion.summary}</span>
          <span className="text-[14px] font-extrabold text-accent-text">
            Open case study{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </TLink>
    </div>
  );
}
