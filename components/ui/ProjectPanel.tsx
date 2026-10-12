import Image from "next/image";
import type { Panel, Project } from "@/data/projects";
import { pad2 } from "@/lib/motion";
import Sketch from "./Sketch";

export const PANEL_CLASS: Record<Panel, string> = {
  accent: "bg-accent-fill text-paper",
  ink: "bg-ink text-paper outline-2 -outline-offset-2 outline-line",
  paper: "bg-paper text-ink",
  stone: "bg-stone text-ink",
  graphite: "bg-graphite text-paper",
};

/**
 * A project as a poster: counter on top, screenshot or drawn UI in the
 * middle, the name set huge at the bottom (it stretches on hover).
 */
export default function ProjectPanel({
  project,
  index,
  total,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  eager = false,
  size = "card",
}: {
  project: Pick<Project, "name" | "year" | "panel" | "imageSrc" | "sketch">;
  index: number;
  total: number;
  sizes?: string;
  /** Skip lazy-loading — for panels that move into view sideways. */
  eager?: boolean;
  /** compact: the 320px hover preview · hero: full-width case-study cover. */
  size?: "compact" | "card" | "hero";
}) {
  const long = project.name.length > 9;
  const nameSize = {
    compact: long ? "text-[32px]" : "text-[44px]",
    card: long ? "text-[clamp(34px,4vw,66px)]" : "text-[clamp(40px,5vw,84px)]",
    hero: "text-[clamp(56px,9vw,160px)]",
  }[size];

  return (
    <div
      className={`flex h-full flex-col justify-between gap-5 overflow-hidden p-5 ${size === "hero" ? "md:p-10" : "md:p-7"} ${PANEL_CLASS[project.panel ?? "ink"]}`}
    >
      <span className="label">
        {pad2(index + 1)} / {pad2(total)}
        {project.year ? ` — ${project.year}` : ""}
      </span>
      <div className="relative min-h-0 flex-1">
        {project.imageSrc ? (
          <div className="duotone absolute inset-0 overflow-hidden">
            <Image
              src={project.imageSrc}
              alt=""
              fill
              sizes={sizes}
              loading={eager ? "eager" : "lazy"}
              className="object-cover object-top"
            />
          </div>
        ) : project.sketch ? (
          <Sketch kind={project.sketch} large={size === "hero"} />
        ) : null}
      </div>
      <span
        className={`stretch block leading-[0.85] tracking-[-0.06em] ${nameSize}`}
      >
        {project.name}
      </span>
    </div>
  );
}
