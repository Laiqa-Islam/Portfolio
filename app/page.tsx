import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav delay={2.4} />
      <main>
        <Hero />

        <div className="border-y border-line bg-ink-2 py-4">
          <Marquee duration={26} className="font-mono text-xs tracking-[0.3em] text-bone-dim">
            {[
              "NEXT.JS",
              "REACT",
              "TYPESCRIPT",
              "LARAVEL",
              "POSTGRESQL",
              "MYSQL",
              "TAILWIND",
              "WEB AUDIO",
              "WORDPRESS",
            ].map((tech) => (
              <span key={tech} className="mx-5 inline-flex items-center gap-5">
                {tech} <span className="text-gold">/</span>
              </span>
            ))}
          </Marquee>
        </div>

        <Projects />
        <About />
        <Stack />
      </main>
      <Contact />
    </>
  );
}
