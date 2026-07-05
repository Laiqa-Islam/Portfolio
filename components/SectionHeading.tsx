import Reveal from "./Reveal";
import Scramble from "./Scramble";

export default function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-16 px-6 md:mb-24 md:px-12 xl:px-20">
      <Reveal>
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-gold">
          <Scramble text={`${index} // ${label}`} speed={30} />
        </p>
        <h2 className="font-display text-[clamp(2.2rem,6vw,4.8rem)] font-medium leading-[1.05] tracking-tight text-bone">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
