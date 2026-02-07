// components/WindowFrame.tsx
import Image from "next/image";
type WindowFrameProps = {
  src: string;
  alt?: string;
};
``
export default function WindowFrame({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* Content */}
      <div className="p-4">
        <Image
          src={src}
          alt={alt || ""}
          width={900}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
