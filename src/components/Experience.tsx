export default function Experience() {
  return (
    <section id="experience" >
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12 text-center md:text-left">
        Experience
      </h2>

      <div className="bg-[#111111] border border-gray-800 rounded-xl p-7 md:p-9 hover:border-gray-600 transition-all duration-300 hover-scale">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h3 className="text-2xl font-semibold text-white group-hover:text-[#60a5fa] transition-colors">
            Full Stack Developer — Souloftware
          </h3>
          <span className="text-gray-500 text-sm md:text-base mt-2 md:mt-0">
            September 2025 – Present
          </span>
        </div>

        <ul className="text-gray-300 leading-relaxed space-y-3 text-[15px] md:text-base pl-5 list-disc marker:text-[#60a5fa]">
          <li>Develop and maintain full-stack web applications using MERN and Laravel</li>
          <li>Implement authentication, JWT, and role-based access control</li>
          <li>Build and integrate RESTful APIs</li>
          <li>Collaborate with designers and product teams</li>
          <li>Optimize performance and system reliability</li>
        </ul>
      </div>
    </section>
  );
}