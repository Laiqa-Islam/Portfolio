// components/CareerGoal.tsx
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


export default function CareerGoal() {
  return (
    <div id="career-goal" className="py-10 relative">

      <div className=" mx-auto px-5 sm:px-8 lg:px-12">
         <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-12 md:mb-16 text-center md:text-left"
        >
           <span className="text-amber-400/90">Career Goal</span>
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
            overflow-hidden bg-gradient-to-br from-amber-900/50 via-transparent to-transparent
          `}
        >
          {/* Subtle hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

          <div className="relative space-y-6 md:space-y-8 text-center md:text-left max-w-3xl mx-auto md:mx-0">
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light">
              In the coming years, I aspire to become a <span className="text-blue-300 font-medium">Software Engineer</span> who builds
              highly optimized, scalable systems with backend architecture that rivals top-tier teams.
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              My focus is on mastering <strong>system design</strong>, <strong>performance optimization</strong>, <strong>clean architecture</strong>,
              domain-driven design patterns, and contributing to high-impact, complex projects — all while growing through real-world challenges
              and relentless learning.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}