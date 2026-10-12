"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { TLink } from "@/components/motion/PageTransition";
import { nav, site } from "@/data/site";
import { lockScroll } from "@/lib/scroll";

function Mark() {
  return (
    <span className="flex h-[34px] w-[34px] flex-none items-end bg-accent-fill px-1 pb-[3px] text-[15px] leading-none font-extrabold tracking-[-0.04em] text-paper">
      LI
    </span>
  );
}

type Theme = "dark" | "light";

/** The theme lives on <html data-theme>; subscribe to it rather than copy it. */
function subscribeTheme(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}
const readTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

export default function Header() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(subscribeTheme, readTheme, (): Theme => "dark");
  const [open, setOpen] = useState(false);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("li-theme", next);
    } catch {}
  };

  return (
    <>
      <header className="sticky top-0 z-[60] flex h-[62px] items-center gap-4 border-b-2 border-line bg-bg px-5 whitespace-nowrap transition-colors duration-500 md:px-8">
        <span data-magnetic="">
          <TLink href="/" className="flex items-center gap-3" aria-label="Laiqa Islam — home">
            <Mark />
            <span className="hidden flex-col leading-[1.1] sm:flex">
              <span className="text-[17px] font-extrabold tracking-[-0.02em]">{site.name}</span>
              <span className="text-[11px] tracking-[0.06em] text-muted uppercase">{site.role}</span>
            </span>
          </TLink>
        </span>

        <span className="mr-auto hidden items-center gap-2 border border-line px-2.5 py-1.5 text-[12px] md:flex">
          <span className="pulse" />
          Open to work
        </span>

        <nav aria-label="Primary" className="hidden self-stretch border-l-2 border-line lg:flex">
          {nav.map((item, i) => (
            <TLink
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 border-r-2 border-line px-3.5 text-[14px] transition-colors duration-200 hover:bg-accent-fill hover:text-paper"
            >
              <span className="text-[11px] opacity-60">0{i + 1}</span>
              {item.label}
            </TLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn-secondary ml-auto min-w-[76px] px-3.5 py-2.5 text-[14px] lg:ml-0"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="btn btn-primary px-3.5 py-2.5 text-[14px] lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>

        <div className="absolute right-0 -bottom-0.5 left-0 h-0.5">
          <div data-scrollbar="" className="h-0.5 origin-left scale-x-0 bg-accent" />
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[62px] bottom-0 z-[59] flex flex-col justify-between bg-bg px-5 pt-6 pb-8 transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] md:px-8 lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col border-t-2 border-line">
          {nav.map((item, i) => (
            <span key={item.href} className="mask border-b-2 border-line">
              <TLink
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 text-[clamp(40px,11vw,72px)] leading-none font-extrabold tracking-[-0.05em] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                style={{ transform: open ? "none" : "translateY(110%)", transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
              >
                <span className="text-[13px] font-normal tracking-normal text-accent-text">0{i + 1}</span>
                {item.label}
              </TLink>
            </span>
          ))}
        </nav>
        <div className="label flex flex-col gap-2 text-muted">
          <a href={`mailto:${site.email}`} className="text-fg normal-case">
            {site.email}
          </a>
          <span className="flex items-center gap-2">
            <span className="pulse" />
            Open to work
          </span>
        </div>
      </div>
    </>
  );
}
