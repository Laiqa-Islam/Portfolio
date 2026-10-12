import type { Sketch as SketchKind } from "@/data/projects";

const soft = (pct: number) => `color-mix(in srgb, currentColor ${pct}%, transparent)`;

/** Check-in board: columns of passes moving from registered to certified. */
function EventsSketch({ large }: { large: boolean }) {
  const cols = [
    { title: "Registered · 4", cards: [0, 0, 1, 0] },
    { title: "Checked in · 2", cards: [0, 1] },
    { title: "Certified · 1", cards: [0] },
  ];
  return (
    <div className={`flex h-full flex-col ${large ? "gap-5 text-[15px]" : "gap-3 text-[11px]"}`}>
      <div
        className={`label flex justify-between border-b pb-1.5 ${large ? "text-[13px]" : "text-[11px]"}`}
        style={{ borderColor: soft(40) }}
      >
        <span className="flex items-center gap-2">
          <span className="pulse" />
          Check-in open
        </span>
        <span className="tabular">00:14:09</span>
      </div>
      <div className={`grid min-h-0 flex-1 grid-cols-3 font-extrabold ${large ? "gap-5" : "gap-2"}`}>
        {cols.map((col) => (
          <div
            key={col.title}
            className={`flex min-w-0 flex-col overflow-hidden border-t-2 pt-1.5 ${large ? "gap-3" : "gap-1.5"}`}
            style={{ borderColor: soft(40) }}
          >
            <span className="flex-none truncate">{col.title}</span>
            {col.cards.map((hot, i) => (
              <span
                key={i}
                className={`flex flex-none flex-col border-l-[3px] ${large ? "h-16 gap-2 p-3" : "h-10 gap-1 p-1.5"}`}
                style={{ background: soft(10), borderColor: hot ? "var(--accent)" : soft(30) }}
              >
                <span className={`w-[70%] ${large ? "h-2" : "h-1"}`} style={{ background: soft(45) }} />
                <span className={`w-[45%] ${large ? "h-2" : "h-1"}`} style={{ background: soft(30) }} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** A pet's medical timeline, half filled. */
function PetsSketch({ large }: { large: boolean }) {
  const entries = [
    ["Mar 02", "Vaccination booster"],
    ["Mar 19", "X-ray uploaded"],
    ["Apr 04", "Treatment note"],
    ["Apr 21", "Adoption interest"],
  ];
  return (
    <div
      className={`grid h-full grid-cols-[2px_minmax(0,1fr)] ${large ? "gap-8 text-[clamp(18px,2vw,30px)]" : "gap-4 text-[13px]"}`}
    >
      <span className="relative" style={{ background: soft(30) }}>
        <span className="absolute top-0 left-0 h-[48%] w-0.5 bg-current" />
      </span>
      <div className="flex flex-col justify-between">
        {entries.map(([date, text], i) => (
          <span key={date} className="flex gap-3" style={{ opacity: i < 2 ? 1 : 0.45 }}>
            <span className="tabular font-extrabold">{date}</span>
            <span className="truncate">{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Sketch({ kind, large = false }: { kind: SketchKind; large?: boolean }) {
  return kind === "events" ? <EventsSketch large={large} /> : <PetsSketch large={large} />;
}
