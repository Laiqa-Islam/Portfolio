import { TLink } from "@/components/motion/PageTransition";
import { MaskLetters } from "@/components/ui/Mask";
import { dl } from "@/lib/motion";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100svh-62px)] flex-col px-5 pt-7 pb-16 md:px-8">
      <div className="label flex gap-6">
        <span className="text-accent-text">(404)</span>
        <span>Route not found</span>
      </div>
      <h1 className="mt-auto text-[clamp(120px,32vw,520px)] leading-[0.8] tracking-[-0.07em] text-accent">
        <MaskLetters text="404" step={90} />
      </h1>
      <div className="mt-8 flex flex-col gap-6 border-t-2 border-line pt-6 md:flex-row md:items-end md:justify-between">
        <p data-reveal="up" style={dl(300)} className="max-w-[36ch] text-[clamp(19px,1.6vw,24px)] leading-[1.35]">
          This page isn&apos;t part of the build. It may have moved, or it never existed.
        </p>
        <span data-reveal="up" style={dl(420)} data-magnetic="">
          <TLink href="/" className="btn btn-primary min-w-[240px]">
            Back to the index <span className="arrow">→</span>
          </TLink>
        </span>
      </div>
    </main>
  );
}
