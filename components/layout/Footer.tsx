import { TLink } from "@/components/motion/PageTransition";
import { MaskLetters } from "@/components/ui/Mask";
import { nav, site } from "@/data/site";
import BackToTop from "./BackToTop";

const ROW =
  "flex justify-between border-b border-line py-2.5 transition-[color,padding] duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)] hover:pl-2 hover:text-accent-text";

export default function Footer() {
  return (
    <footer className="border-t-2 border-line">
      <div className="grid grid-cols-1 border-b-2 border-line text-[15px] sm:grid-cols-2 lg:grid-cols-4 lg:px-3">
        <div className="flex flex-col gap-3 border-b-2 border-line px-5 pt-6 pb-8 sm:border-r-2 lg:border-b-0">
          <span className="label text-accent-text">Sitemap</span>
          <div className="flex flex-col">
            {nav.map((item) => (
              <TLink key={item.href} href={item.href} className={ROW}>
                <span>{item.label}</span>
                <span>→</span>
              </TLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-line px-5 pt-6 pb-8 lg:border-r-2 lg:border-b-0">
          <span className="label text-accent-text">Elsewhere</span>
          <div className="flex flex-col">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={ROW}>
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className={ROW}>
              <span>Résumé</span>
              <span>↗</span>
            </a>
            <a href={`mailto:${site.email}`} className={ROW}>
              <span>Email</span>
              <span>↗</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-b-2 border-line px-5 pt-6 pb-8 sm:border-r-2 sm:border-b-0">
          <span className="label text-accent-text">Status</span>
          <span className="flex items-center gap-3 text-[clamp(28px,3vw,44px)] leading-none font-extrabold tracking-[-0.04em]">
            <span className="pulse h-3! w-3!" />
            Open to work
          </span>
          <span className="text-[14px] text-muted">The fastest way to reach me is email.</span>
        </div>
        <div className="flex flex-col gap-3 px-5 pt-6 pb-8">
          <span className="label text-accent-text">Next step</span>
          <span className="text-[22px] leading-[1.15] font-extrabold tracking-[-0.02em]">
            Have something half-formed? That’s my favourite kind.
          </span>
          <span data-magnetic="" className="mt-auto block!">
            <TLink href="/contact" className="btn btn-primary w-full">
              Start a project <span className="arrow">→</span>
            </TLink>
          </span>
        </div>
      </div>

      <div className="overflow-hidden px-5 pt-4 md:px-8">
        <div className="text-[17.6vw] leading-[0.8] font-extrabold tracking-[-0.065em] whitespace-nowrap">
          <MaskLetters text={site.name} />
        </div>
      </div>

      <div className="flex flex-wrap items-stretch border-t-2 border-line text-[13px]">
        <span className="px-5 py-4 md:px-8">© {new Date().getFullYear()} {site.name}</span>
        <span className="hidden py-4 text-muted md:block">Designed and built with Next.js</span>
        <BackToTop />
      </div>
    </footer>
  );
}
