"use client";



export function ProjectDetailPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">

        {/* LEFT CONTENT */}
        <div className="space-y-32">

          {/* Hero Preview */}
          <section className="space-y-10">
            <h1 className="text-5xl font-semibold">Stadia Dashboard</h1>
            <p className="text-white/70 max-w-xl">
              A cross-platform gaming dashboard designed to unify game discovery,
              social presence, and controller configuration in one experience.
            </p>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/project-hero.png"
                alt="Project preview"
                className="w-full object-cover"
              />
            </div>
          </section>

          {/* Overview */}
          <section className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-white/70 leading-relaxed">
                Stadia Dashboard is a concept interface exploring how players could
                manage their games, devices, and friends across console, desktop,
                and mobile with a single cohesive system.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Goals</h2>
              <ul className="space-y-2 text-white/70">
                <li>• Reduce friction in game launching</li>
                <li>• Centralize controller customization</li>
                <li>• Improve social discovery</li>
              </ul>
            </div>
          </section>

          {/* Large Visual */}
          <section className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/project-screen-1.png"
              alt="Screenshot"
              className="w-full"
            />
          </section>

          {/* Process */}
          <section className="space-y-10">
            <h2 className="text-3xl font-semibold">Design Process</h2>

            <p className="text-white/70 max-w-2xl">
              The project began with competitive analysis and rapid sketching,
              followed by low-fidelity wireframes and interactive prototypes.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <img
                src="/wireframe.png"
                className="rounded-xl border border-white/10"
              />
              <img
                src="/prototype.png"
                className="rounded-xl border border-white/10"
              />
            </div>
          </section>

          {/* Feature Section */}
          <section className="space-y-10">
            <h2 className="text-3xl font-semibold">Key Features</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Unified Library",
                "Controller Profiles",
                "Social Presence",
              ].map((f) => (
                <div
                  key={f}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <h3 className="font-medium mb-2">{f}</h3>
                  <p className="text-sm text-white/60">
                    Thoughtfully designed to reduce cognitive load and surface
                    relevant actions.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Outcome</h2>
            <p className="text-white/70 max-w-2xl">
              The final system demonstrates how a modular dashboard can scale
              across devices while preserving usability and clarity.
            </p>
          </section>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-10 lg:sticky lg:top-32 h-fit">

          <div className="space-y-6">
            <div>
              <p className="text-sm text-white/50">Role</p>
              <p>Product Designer</p>
            </div>

            <div>
              <p className="text-sm text-white/50">Timeline</p>
              <p>6 Weeks</p>
            </div>

            <div>
              <p className="text-sm text-white/50">Tools</p>
              <p>Figma, Framer</p>
            </div>

            <div>
              <p className="text-sm text-white/50">Platform</p>
              <p>Web, Desktop, Mobile</p>
            </div>
          </div>

          <a
            href="#"
            className="inline-block px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            View Prototype
          </a>

        </aside>

      </div>
    </main>
  );
}

