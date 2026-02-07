"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full text-white">
      <div className="flex md:hidden min-h-screen items-center bg-[radial-gradient(120%_120%_at_50%_0%,#2a2a2a_0%,#000_60%)] px-6 ">
        <div className="max-w-5xl">

          <div className="flex items-center gap-3 text-white/60 mb-8">
            <span className="w-2 h-2 rounded-full bg-white/80" />
            <p className="text-sm tracking-wide">
              Laiqa Islam — Software Engineer
            </p>
          </div>

          <h1 className="text-5xl leading-[95%] tracking-[-2px] font-medium">
            I craft scalable web
            <br />
            systems, solving{" "}
            <span className="italic font-serif text-white/70">
            business problems.
            </span>
          </h1>

          <div className="mt-12 text-white/70">
                  <p className="text-lg">Fast learner • Problem solver</p>
                  <p className="text-white/40 mt-1">
                    Growth-driven developer
                  </p>
                </div>

          <div className="mt-16 flex items-center gap-4 text-white/40">
            <span className="block h-px w-12 bg-white/20" />
            <span className="text-sm tracking-wide">
              Selected Work ’26
            </span>
          </div>

           <div className="mt-24 flex justify-center ">
                  <ArrowDown className="animate-bounce" />
                </div>
        </div>
      </div>

      {/* ================= DESKTOP HERO (WAS MOBILE) ================= */}
      <section className="hidden md:flex md:mt-40 min-h-screen w-full items-center bg-black/5 justify-center px-6 mt-20 mb-4">
        <div className="relative w-full max-w-5xl">
          <div className="absolute inset-0 rounded-3xl bg-white/5 blur-2xl" />

          <div className="overflow-hidden rounded-[24px] p-[8px] outline outline-1 outline-[#f2f2f226] bg-[radial-gradient(circle_farthest-side_at_50%_0,#f2f2f233,#0000)] shadow-[inset_0_0_8px_#0006,0_0_60px_#0003,0_30px_120px_#000c]">
            <div className="relative rounded-3xl border border-white/15 bg-black/70 backdrop-blur-xl overflow-hidden">

              {/* Window Top Bar */}
              <div className="flex items-center justify-between px-6 py-1 border-b border-white/10 bg-white/5">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-white/30 text-3xl">+</div>
              </div>

              {/* Content */}
              <div className="px-12 py-24">
                <h1 className="text-6xl font-medium leading-[90%] tracking-[-2px]">
                  I craft scalable web
                  <br />
                  systems, solving{" "}
                  <span className="italic font-serif text-white/70">
                    business problems.
                  </span>
                </h1>

                <div className="mt-12 text-white/70">
                  <p className="text-lg">Fast learner • Problem solver</p>
                  <p className="text-white/40 mt-1">
                    Growth-driven developer
                  </p>
                </div>
                {/* Divider */}
          <div className="mt-16 flex items-center gap-4 text-white/40">
            <span className="block h-px w-12 bg-white/20" />
            <span className="text-sm tracking-wide">
              Selected Work ’26
            </span>
          </div>

                <div className="mt-24 flex justify-center">
                  <div className="w-6 h-10 rounded-full border border-white/40 flex items-start justify-center p-1">
                    <span className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
