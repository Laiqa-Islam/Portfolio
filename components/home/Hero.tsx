import { TLink } from "@/components/motion/PageTransition";
import { MaskLine } from "@/components/ui/Mask";
import { dl } from "@/lib/motion";
import GridHover from "./GridHover";
import StackFigure from "./StackFigure";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-62px)] flex-col overflow-hidden px-5 pt-7 pb-10 md:px-8">
      <GridHover />

      <div className="label grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-4">
        <span data-reveal="fade">Laiqa Islam</span>
        <span data-reveal="fade" style={dl(100)}>
          Full-stack developer
        </span>
        <span data-reveal="fade" style={dl(200)}>
          Next.js · MERN · Laravel
        </span>
        <span data-reveal="fade" style={dl(300)} className="flex items-center gap-2">
          <span className="pulse" />
          Open to work
        </span>
      </div>

      <h1 className="mt-auto pt-12 text-[clamp(52px,10.6vw,210px)] leading-[0.88] tracking-[-0.06em]">
        <MaskLine delay={100}>I build the</MaskLine>
        <MaskLine delay={180}>whole product,</MaskLine>
        <MaskLine delay={260}>
          <span className="text-accent">front to back.</span>
        </MaskLine>
      </h1>

      <div className="mt-10 grid gap-10 border-t-2 border-line pt-6 lg:grid-cols-12 lg:items-start lg:gap-6">
        <div className="flex flex-col gap-7 lg:col-span-6">
          <p
            data-reveal="up"
            style={dl(500)}
            className="max-w-[34ch] text-[clamp(19px,1.6vw,24px)] leading-[1.35] text-pretty"
          >
            Full-stack developer working across Next.js, MERN and Laravel. I take a half-formed
            “can we even do this?” and turn it into something that runs in production.
          </p>
          <div data-reveal="up" style={dl(620)} className="flex flex-wrap gap-3">
            <span data-magnetic="">
              <TLink href="/#work" className="btn btn-primary min-w-[200px]">
                See work <span className="arrow">↓</span>
              </TLink>
            </span>
            <span data-magnetic="">
              <TLink href="/contact" className="btn btn-secondary min-w-[200px]">
                Start a project <span className="arrow">→</span>
              </TLink>
            </span>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <StackFigure />
        </div>
      </div>
    </section>
  );
}
