import type { ReactNode } from "react";
import { dl } from "@/lib/motion";

/** One line of display type that slides up out of a clip. */
export function MaskLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="mask">
      <span data-reveal="mask" style={dl(delay)} className="block">
        {children}
      </span>
    </span>
  );
}

/** Display type that rises letter by letter; words still wrap. */
export function MaskLetters({
  text,
  delay = 0,
  step = 45,
}: {
  text: string;
  delay?: number;
  step?: number;
}) {
  const words = text.split(" ");
  let n = 0;
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap">
        {words.map((word, w) => (
          <span key={w} className="inline-flex whitespace-nowrap">
            {[...word].map((ch, c) => (
              <span key={c} className="mask-i">
                <span data-reveal="mask" style={dl(delay + n++ * step)} className="inline-block">
                  {ch}
                </span>
              </span>
            ))}
            {w < words.length - 1 && <span className="inline-block w-[0.26em]" />}
          </span>
        ))}
      </span>
    </>
  );
}
