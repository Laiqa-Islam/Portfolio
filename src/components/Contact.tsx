export default function Contact() {
  return (
    <section id="contact" className="py-2">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8">
          Get in Touch
        </h2>

        <p className="text-gray-300 text-xl md:text-2xl mb-10">
          I'm currently open to new opportunities. Let's connect!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a
            href="mailto:islamlaiqa@gmail.com"
            className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition hover-scale text-lg font-medium"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/laiqa-islam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition hover-scale text-lg font-medium"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Laiqa-Islam"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition hover-scale text-lg font-medium"
          >
            GitHub
          </a>
        </div>

        <p className="text-gray-500 text-md">
          @2025 Laiqa Islam. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">Made with Love and Lots and Lots of Coffee ☕.</p>
      </div>
    </section>
  );
}