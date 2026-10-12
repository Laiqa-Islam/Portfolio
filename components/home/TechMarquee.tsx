import { Fragment } from "react";
import { marquee } from "@/data/site";

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {marquee.map((t) => (
        <Fragment key={t}>
          <span>{t}</span>
          <span className="h-3.5 w-3.5 flex-none bg-accent" />
        </Fragment>
      ))}
    </div>
  );
}

/** Two opposing strips of the stack; scroll speed pushes them faster. */
export default function TechMarquee() {
  const type = "text-[clamp(40px,5.5vw,84px)] leading-none font-extrabold tracking-[-0.04em]";
  return (
    <section aria-label="Technologies I use" className="flex flex-col gap-3 overflow-hidden border-b-2 border-line py-6">
      <div data-marquee="" data-dur="42000" className={`flex w-max ${type}`}>
        <Row />
        <div aria-hidden="true" className="flex">
          <Row />
        </div>
      </div>
      <div
        aria-hidden="true"
        data-marquee="rev"
        data-dur="52000"
        className={`flex w-max text-[color-mix(in_srgb,var(--text)_30%,transparent)] ${type}`}
      >
        <Row />
        <Row />
      </div>
    </section>
  );
}
