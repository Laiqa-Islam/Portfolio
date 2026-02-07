export default function WhyMe() {
  const reasons = [
    {
      title: "Strong full-stack fundamentals",
      description: "Solid experience with MERN stack and Laravel, building production-ready applications from end to end.",
    },
    {
      title: "Business-oriented problem solver",
      description: "I understand business needs and translate requirements into efficient, scalable technical solutions.",
    },
    {
      title: "High learning speed",
      description: "Quick to pick up new tools, frameworks, and concepts — I thrive in fast-moving environments.",
    },
    {
      title: "Growth mindset",
      description: "Constantly improving through self-reflection, feedback, and deliberate practice.",
    },
    {
      title: "Comfortable working independently or in teams",
      description: "Effective solo developer and collaborative team member — clear communication either way.",
    },
    {
      title: "Clear communicator",
      description: "Write clean documentation, explain technical decisions clearly, and keep stakeholders aligned.",
    },
  ];

  return (
    <section id="why-me" >
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16 text-center md:text-left">
        Why Work With Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-gray-800 rounded-xl p-7 hover:border-gray-600 transition-all duration-300 hover-scale flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#60a5fa] transition-colors">
              {reason.title}
            </h3>
            <p className="text-gray-300 leading-relaxed text-[15px] flex-grow">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}