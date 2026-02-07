// components/Skills.tsx
"use client";

import { motion, Variants, Transition } from "framer-motion";


const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
        hoverTint: "from-blue-900/55 ",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Laravel", "PHP"],
    hoverTint: "from-emerald-900/50 via-transparent to-transparent",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQL Server"],
        hoverTint: "from-amber-900/50 via-transparent to-transparent",
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Axios",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  hoverTint: "from-purple-900/50 via-transparent to-transparent",

  },
  {
    category: "CMS",
    skills: ["WordPress"],
    hoverTint: "from-rose-900/30 via-transparent to-transparent",
  },
];


const springTransition: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 18,
  mass: 0.9,
};



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: springTransition,
  },
};




export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Optional subtle background noise/gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_40%)] pointer-events-none" />

      <div className=" mx-auto px-5 sm:px-8 lg:px-12">
           <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-16 md:mb-24 text-center md:text-left"
        >
           <span className="text-purple-900/90">Core Skills</span>
        </motion.h2>

        </div>
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
     
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className={`
                group relative
                bg-white/5 backdrop-blur-2xl
                border border-white/10 rounded-2xl md:rounded-3xl
                p-7 md:p-9 lg:p-10
                 hover:bg-white/8
                transition-all duration-400 ease-out
                shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.35),0_0_0_1px_rgba(59,130,246,0.08)_inset]
                flex flex-col
                overflow-hidden  bg-gradient-to-br ${group.hoverTint}
              `}
            >
              {/* Subtle shine / gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

              {/* Category title with animated underline effect */}
              <div className="relative mb-7 md:mb-9">
                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-400">
                  {group.category}
                </h3>
                <div className="absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-blue-500/60 to-blue-400/30 w-12 group-hover:w-20 transition-all duration-500 rounded-full" />
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`
                      px-4 py-2.5
                      bg-white/6 border border-white/12
                      text-gray-200 text-sm md:text-base font-medium
                      rounded-xl
                      hover:bg-blue-950/30 hover:border-blue-500/30 hover:text-blue-200
                      transition-all duration-300
                      backdrop-blur-md
                      shadow-sm
                      cursor-default
                    `}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}