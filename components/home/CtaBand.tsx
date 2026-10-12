import { TLink } from "@/components/motion/PageTransition";
import { MaskLine } from "@/components/ui/Mask";
import { site } from "@/data/site";

const WORDS = ["Open to work", "Next.js", "MERN", "Laravel", "Motion & interaction"];

function Strip() {
  return (
    <div className="flex shrink-0 gap-12 pr-12">
      {[...WORDS, ...WORDS].map((w, i) => (
        <span key={i}>{w}</span>
      ))}
    </div>
  );
}

/** The one place red runs as a field. */
export default function CtaBand() {
  return (
    <section className="mt-18 overflow-hidden bg-accent-fill text-paper">
      <div aria-hidden="true" className="overflow-hidden border-b-2 border-paper py-4">
        <div data-marquee="" data-dur="30000" className="label flex w-max text-[14px] font-extrabold">
          <Strip />
          <Strip />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-5 pt-16 pb-10 md:px-8">
        <h2 className="display text-[clamp(52px,9vw,160px)] leading-[0.88] tracking-[-0.055em]">
          <MaskLine>Tell me what</MaskLine>
          <MaskLine delay={80}>you’re building.</MaskLine>
        </h2>
        <div className="flex flex-wrap items-center gap-6 border-t-2 border-paper pt-6">
          <span data-magnetic="">
            <TLink href="/contact" className="btn btn-ink min-w-[260px] px-[22px] py-[18px] text-[17px]">
              Start a project <span className="arrow">→</span>
            </TLink>
          </span>
          <a
            href={`mailto:${site.email}`}
            data-cursor="Email"
            className="text-[clamp(20px,2.4vw,36px)] font-extrabold tracking-[-0.02em] break-all underline-offset-[6px] hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
