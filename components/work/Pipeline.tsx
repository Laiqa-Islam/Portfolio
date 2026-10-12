import { Fragment } from "react";
import type { Project } from "@/data/projects";
import { dl } from "@/lib/motion";

/** How data or requests flow through the system; boxes wipe in, links draw between them. */
export default function Pipeline({ steps }: { steps: NonNullable<Project["pipeline"]> }) {
  return (
    <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <Fragment key={s.label}>
            <div
              data-reveal="wipe"
              style={dl(i * 300)}
              className={`flex min-h-[120px] flex-1 flex-col justify-between gap-3 border-2 p-4 ${
                last ? "border-accent-fill bg-accent-fill text-paper" : "border-fg"
              }`}
            >
              <span className={`text-[11px] tracking-[0.08em] uppercase ${last ? "" : "text-muted"}`}>
                {String(i + 1).padStart(2, "0")} · {s.label}
              </span>
              <span className="text-[16px] leading-snug font-extrabold">{s.text}</span>
            </div>
            {!last && (
              <div
                aria-hidden="true"
                data-reveal="wipe"
                style={dl(i * 300 + 200)}
                className="mx-auto h-6 w-0.5 bg-accent lg:mx-0 lg:h-0.5 lg:w-8 lg:flex-none"
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
