import { dl } from "@/lib/motion";

/** The ruled label row that opens each section: (01) About · meta · meta. */
export default function SectionMeta({
  no,
  title,
  meta = [],
}: {
  no: string;
  title: string;
  meta?: string[];
}) {
  return (
    <div className="label mb-10 grid grid-cols-2 border-t-2 border-b border-line whitespace-nowrap md:grid-cols-4">
      <span data-reveal="fade" className="py-2.5 text-accent-text">
        ({no})
      </span>
      <span data-reveal="fade" style={dl(80)} className="border-l border-line px-3 py-2.5">
        {title}
      </span>
      {meta.map((m, i) => (
        <span
          key={m}
          data-reveal="fade"
          style={dl(160 + i * 80)}
          className="hidden min-w-0 truncate border-l border-line px-3 py-2.5 text-muted md:block"
        >
          {m}
        </span>
      ))}
    </div>
  );
}
