import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import CopyEmail from "@/components/contact/CopyEmail";
import { MaskLine } from "@/components/ui/Mask";
import { site } from "@/data/site";
import { dl } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or just say hello.",
};

const ROW = "flex gap-4 border-b border-line py-3 text-[15px]";

export default function Contact() {
  return (
    <main className="px-5 pt-7 pb-24 md:px-8">
      <div className="label flex gap-6">
        <span className="text-accent-text">(Contact)</span>
        <span>Write about anything — a role, a project, a half-formed idea</span>
      </div>

      <h1 className="mt-10 text-[clamp(64px,13vw,240px)] leading-[0.86] tracking-[-0.06em] uppercase">
        <MaskLine>Let&apos;s</MaskLine>
        <MaskLine delay={90}>build it.</MaskLine>
      </h1>

      <div className="mt-10 grid gap-14 border-t-2 border-line pt-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9">
          <div data-reveal="up" style={dl(250)}>
            <span className="label text-accent-text">Email</span>
            <CopyEmail />
          </div>
          <div data-reveal="up" style={dl(400)} className="flex flex-col border-t-2 border-line">
            <div className={ROW}>
              <span className="w-28 shrink-0 opacity-60">Status</span>
              <span className="flex items-center gap-2">
                <span className="pulse" />
                Open to work
              </span>
            </div>
            <div className={ROW}>
              <span className="w-28 shrink-0 opacity-60">Works in</span>
              <span>Next.js · MERN · Laravel</span>
            </div>
            <div className={ROW}>
              <span className="w-28 shrink-0 opacity-60">Elsewhere</span>
              <span className="flex flex-wrap gap-4">
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-accent-text underline-offset-4 hover:underline">
                  GitHub ↗
                </a>
                <a href={site.resume} target="_blank" rel="noopener noreferrer" className="text-accent-text underline-offset-4 hover:underline">
                  Résumé ↗
                </a>
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
