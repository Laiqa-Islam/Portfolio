import { infoBlocks } from "@/data/info";
import InfoSection from "@/components/Info";
import Contact from "@/components/Contact";

export default function InfoPage() {
  return (
    <main className="min-h-screen text-white px-6 lg:px-24 py-22">
      {/* Hero */}
      <section className="max-w-4xl mb-24">
        
        <div className="flex items-center gap-3 text-sm tracking-widest text-white/50 mb-6">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          ABOUT ME
        </div>

        <h1 className="text-5xl md:text-7xl font-light leading-tight ">
          I build digital products that{" "}
          <span className="font-serif italic text-white/70">feel intentional.</span>
        </h1>

        <p className="mt-6 text-white/60 max-w-xl">
          Systems designed with clarity, scalability, and purpose — not just visuals.
        </p>
      </section>


      {/* Info Sections */}
      { infoBlocks.map((block) => (
        <InfoSection
          key={block.id}
          // eyebrow={block.eyebrow}
          title={block.title}
          text={block.text}
          image={block.image}
          image2={block.image2}
          reverse={block.reverse}
        />
      ))}
      <Contact/>
    </main>
  );
}
