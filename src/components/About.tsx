export default function About() {
  return (
    <section id="about" >
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12 text-center md:text-left">
        About Me
      </h2>

      <div className="text-gray-300 leading-relaxed text-lg space-y-6 max-w-4xl mx-auto md:mx-0">
        <p>
          I’m a Software Engineer with professional experience in building full-stack web applications using <span className="text-[#60a5fa]">MERN</span> and <span className="text-[#60a5fa]">Laravel</span>. 
          I currently work at <strong className="text-white">Souloftware</strong>, where I develop and maintain production-level systems, implement secure authentication, 
          and collaborate with cross-functional teams to deliver reliable software.
        </p>

        <p>
          Alongside my work, I’m pursuing a Bachelor’s in Business Administration and a Diploma in Software Engineering, 
          which gives me a strong understanding of both technical execution and business needs.
        </p>

        <p>
          I enjoy solving business problems through clean architecture, optimized logic, and thoughtful system design. 
          I’m highly self-aware of my skill boundaries, capable of pushing slightly beyond my comfort zone to grow, 
          and disciplined enough to recognize when a problem requires deeper expertise or more time.
        </p>

        <p>
          My long-term goal is to build systems that are not only functional, but optimized, scalable, and architecturally sound.
        </p>
      </div>
    </section>
  );
}