// components/Availability.tsx
"use client";

import { motion, Variants } from "framer-motion";


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


export default function Availability() {
  return (
    <div id="availability" className="py-10  relative">
      <div className=" mx-auto px-5 sm:px-8 lg:px-12">
         <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-12 md:mb-16 text-center md:text-left"
        > <span className="text-emerald-400/90">Availability</span>
        </motion.h2>
        </div>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
       
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className={`
            relative bg-white/5 backdrop-blur-2xl
            border border-white/10 rounded-2xl md:rounded-3xl
            p-8 md:p-10 lg:p-12
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            hover:shadow-[0_16px_48px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(59,130,246,0.08)]
            transition-all duration-500 ease-out
            text-center overflow-hidden bg-gradient-to-br from-emerald-900/50 via-transparent to-transparent
          `}
        >
          {/* Subtle accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-400/0 to-transparent opacity-0 hover:opacity-25 transition-opacity duration-700 pointer-events-none" />

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-tight">
              Open to{" "}
              <span className="text-emerald-400 font-semibold">full-time roles</span> and{" "}
              <span className="text-emerald-400 font-semibold">freelance projects</span>.
            </p>

            <p className="text-lg md:text-xl text-white/80">
              Especially interested in <strong>software houses</strong>,{" "}
              <strong>product companies</strong>, and <strong>fully remote opportunities</strong>.
            </p>

            <p className="text-base md:text-lg text-white/70 pt-4">
              Available for <span className="text-white/90 font-medium">immediate start</span> on the right role or project.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}