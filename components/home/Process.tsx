import { MaskLine } from "@/components/ui/Mask";
import SectionMeta from "@/components/ui/SectionMeta";
import { processSteps } from "@/data/site";
import { pad2 } from "@/lib/motion";

/** Sticky heading on the left; each step brightens as it reaches the middle. */
export default function Process() {
  return (
    <section id="process" className="grid scroll-mt-[62px] gap-6 px-5 pt-18 md:px-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[110px]">
          <SectionMeta no="06" title="Process" meta={[`${processSteps.length} steps`, "Every project"]} />
          <h2 className="display mb-8 text-[clamp(48px,6vw,104px)] lg:mb-0">
            <MaskLine>How a</MaskLine>
            <MaskLine delay={80}>project</MaskLine>
            <MaskLine delay={160}>runs.</MaskLine>
          </h2>
        </div>
      </div>
      <ol className="border-t-2 border-line lg:col-span-7 lg:col-start-6">
        {processSteps.map((s, i) => (
          <li
            key={s.title}
            data-step=""
            className="grid grid-cols-[72px_minmax(0,1fr)] gap-6 border-b-2 border-line py-10 transition-opacity duration-[400ms] md:grid-cols-[120px_minmax(0,1fr)]"
          >
            <span className="text-[56px] leading-[0.85] font-extrabold tracking-[-0.06em] text-accent md:text-[72px]">
              {pad2(i + 1)}
            </span>
            <div className="flex flex-col gap-2.5">
              <span className="label">{s.phase}</span>
              <h3 className="text-[clamp(28px,3vw,44px)] leading-none tracking-[-0.035em]">{s.title}</h3>
              <p className="max-w-[48ch] text-[16px] leading-relaxed">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
