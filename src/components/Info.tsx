// components/InfoSection.tsx
import { div } from "framer-motion/client";
import FadeIn from "./FadeIn";
import WindowFrame from "./WindowFrame";

export default function InfoSection({
    title,
    text,
    image,
    image2,
    reverse = false,
}: {
    title: string;
    text: string;
    image?: string;
    image2?: string;
    reverse?: boolean;
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {!reverse && (
                <FadeIn>
                    {image && <WindowFrame src={image} />}
                </FadeIn>
            )}

            <FadeIn delay={0.1}>
                <div className={`text-white/80 leading-relaxed ${reverse ? 'mt-10' : 'mb-25 md:mb-50'}`}>
                    {!reverse && (
                        <div className="mb-10">
                            <FadeIn>
                                {image2 && <WindowFrame src={image2} />}

                            </FadeIn>
                        </div>
                    )}
                    <h3 className="text-4xl font-semibold text-white mb-4">
                        {title}
                    </h3>
                    <p className="text-lg">{text}</p>
                     {reverse && (
                        <div className="mt-10">
                            <FadeIn>
                                {image2 && <WindowFrame src={image2} />}

                            </FadeIn>
                        </div>
                    )}
                </div>
            </FadeIn>

            {reverse && (
                <FadeIn>
                   {image && <WindowFrame src={image} />}
                </FadeIn>
            )}
           <hr className="md:hidden my-2" />
        </div>
    );
}

