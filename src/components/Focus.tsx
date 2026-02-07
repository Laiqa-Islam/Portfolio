export default function Focus() {
  const focusAreas = [
    "Translating business requirements into technical solutions",
    "Building scalable full-stack applications",
    "Designing clean APIs and database structures",
    "Implementing secure authentication and authorization",
    "Writing maintainable and readable code",
  ];

  return (
    <section id="focus" >
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12 text-center md:text-left">
        What I Focus On
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto md:mx-0">
        {focusAreas.map((item, index) => (
          <li
            key={index}
            className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover-scale flex items-start gap-4"
          >
            <span className="text-[#60a5fa] text-xl mt-1">•</span>
            <span className="text-gray-200 text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}