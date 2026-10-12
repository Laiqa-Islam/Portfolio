import SectionMeta from "@/components/ui/SectionMeta";

export type Stat = { value: number; label: string; suffix?: string };

export default function About({ stats }: { stats: Stat[] }) {
  return (
    <section className="grid grid-cols-1 gap-6 px-5 pt-18 md:px-8 lg:grid-cols-12">
      <div className="lg:col-span-12">
        <SectionMeta no="01" title="About" meta={["Full-stack", "Front ↔ back ↔ data"]} />
      </div>
      <div className="flex flex-col gap-16 lg:col-span-9 lg:col-start-4">
        <p className="text-[clamp(28px,3.6vw,58px)] leading-[1.08] font-semibold tracking-[-0.03em] text-pretty">
          <span data-fill="">
            I sit right between the engineering side and the business side, and honestly that’s
            where I’m most useful. I don’t just build the thing on the ticket — I want to know why
            it’s there and where it’s headed, because that quietly changes how you build it.
          </span>
        </p>
        <div className={`grid border-t-2 border-line ${stats.length > 2 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"}`}>
          {stats.map((s, i) => {
            const last = i === stats.length - 1;
            return (
              <div
                key={s.label}
                className={[
                  "border-line py-5",
                  i % 2 === 0 ? "border-r-2 pr-5" : "pl-5",
                  stats.length > 2 && i < 2 ? "border-b-2 md:border-b-0" : "",
                  stats.length > 2 && i === 1 ? "md:border-r-2 md:pr-5" : "",
                  stats.length > 2 && i === 2 ? "md:pl-5" : "",
                  last ? "border-r-0" : "",
                ].join(" ")}
              >
                <div className="text-[clamp(48px,5.5vw,96px)] leading-none font-extrabold tracking-[-0.05em]">
                  <span data-count={s.value} className="tabular">
                    {s.value}
                  </span>
                  {s.suffix && <span className="text-accent">{s.suffix}</span>}
                </div>
                <div className="mt-2 text-[13px]">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
