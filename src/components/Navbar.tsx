"use client";
import { div } from "framer-motion/client";
import { ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

type NavbarProps = {
  activeTab: "work" | "info";
  setActiveTab: (tab: "work" | "info") => void;
};

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
  window.scrollTo({ top: 0 });
}, [activeTab]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 lg:px-10 py-3 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT — hidden on mobile */}
        <div className="hidden lg:block text-white">
          <h1 className="text-lg font-semibold">Laiqa Islam</h1>
          <p className="text-sm text-white/60">Software Engineer</p>
        </div>

        {/* CENTER — always visible */}
        <div className="relative flex-col bg-white/10 rounded-full px-2 pb-1 flex">

          <div
            className={`nav-pill w-6 h-1 bg-white shadow-[0_2px_25px_2px_#ffffff]
              transition-transform duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)]
              ${activeTab === "work" ? "translate-x-[30px] md:translate-x-[34px]" : "translate-x-[108px] md:translate-x-[122px]"}`}
          />

          <div className="flex">
            <button
              className="group relative px-6 lg:px-8 py-2 lg:py-3 text-sm font-medium text-white rounded-full"
              onClick={() => setActiveTab("work")}
            >
              <span className="relative z-10">Work</span>
              <span className={`absolute inset-0 rounded-full transition-all
                ${activeTab === "work" ? "bg-white/15 opacity-100" : "bg-white/10 opacity-0"}`} />
            </button>

            <button
              className="group relative px-6 py-2 lg:py-3 text-sm font-medium rounded-full transition
              text-white/70 hover:text-white"
              onClick={() => setActiveTab("info")}
            >
              <span className="relative z-10">Info</span>
              <span className={`absolute inset-0 rounded-full transition-all
                ${activeTab === "info" ? "bg-white/15 opacity-100" : "bg-white/10 opacity-0"}`} />
            </button>
          </div>
        </div>

        {/* RIGHT — desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="https://www.linkedin.com/in/laiqa-islam"
            className="flex items-center gap-1 text-white/80 hover:text-white transition group"
          >
            LinkedIn
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </Link>

          <Link
            href="/Laiqa_Islam.pdf"
            className="flex items-center gap-1 text-white/80 hover:text-white transition group"
          >
            Resume
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden ml-4 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white"
        >
          {mobileOpen ? <X size={18} /> : <div>@</div>}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileOpen && (
        <div className="lg:hidden absolute right-6 top-16 w-44 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl p-3 space-y-2">
          <Link
            href="https://www.linkedin.com/in/laiqa-islam"
            className="flex items-center justify-between text-sm text-white/80 hover:text-white"
          >
            LinkedIn <ExternalLink size={14} />
          </Link>

          <Link
            href="/Laiqa_Islam.pdf"
            className="flex items-center justify-between text-sm text-white/80 hover:text-white"
          >
            Resume <ExternalLink size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
}