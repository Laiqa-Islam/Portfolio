import { MaskLine } from "@/components/ui/Mask";
import SectionMeta from "@/components/ui/SectionMeta";
import { stackGroups } from "@/data/site";
import { dl } from "@/lib/motion";

export default function Stack() {
  const count = stackGroups.reduce((n, g) => n + g.items.length, 0);
  return (
    <section className="px-5 pt-18 md:px-8">
      <SectionMeta no="04" title="Stack" meta={[`${count} tools`, "Used across the work"]} />
      <h2 className="display mb-12 text-[clamp(48px,7vw,120px)]">
        <MaskLine>Tools I reach for.</MaskLine>
      </h2>
      <div className="grid grid-cols-1 border-t-2 border-l-2 border-line sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((g, gi) => (
          <div
            key={g.group}
            data-reveal="up"
            style={dl(gi * 100)}
            className="flex flex-col border-r-2 border-b-2 border-line"
          >
            <div className="label border-b-2 border-line px-5 py-4 text-accent-text">{g.group}</div>
            {g.items.map((item) => (
              <div
                key={item}
                className="fill-row border-b border-line px-5 py-[18px] text-[clamp(20px,2vw,30px)] font-extrabold tracking-[-0.03em] last:border-b-0 hover:pl-8"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
