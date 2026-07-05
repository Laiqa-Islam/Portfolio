import Link from "next/link";
import Nav from "@/components/Nav";
import Scramble from "@/components/Scramble";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="grid-bg flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
          <Scramble text="ERR // ROUTE NOT RESOLVED" speed={30} />
        </p>
        <h1 className="font-display text-[clamp(5rem,20vw,16rem)] font-light leading-none tracking-tight text-outline-gold">
          404
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-dim">
          This path doesn&apos;t exist in the build. It may have been moved,
          renamed, or never committed at all.
        </p>
        <Link
          href="/"
          data-cursor="hover"
          className="mt-10 inline-flex items-center gap-3 border border-gold px-6 py-3 font-mono text-xs font-bold tracking-widest text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
        >
          ← RETURN TO INDEX
        </Link>
      </main>
    </>
  );
}
