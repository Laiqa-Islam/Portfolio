"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Magnetic from "./Magnetic";

const LINKS = [
  { href: "/#work", label: "WORK", index: "01" },
  { href: "/#about", label: "ABOUT", index: "02" },
  { href: "/#stack", label: "STACK", index: "03" },
  { href: "/#contact", label: "CONTACT", index: "04" },
];

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time || "00:00:00"}</span>;
}

export default function Nav({ delay = 0.1 }: { delay?: number }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md"
    >
      <nav className="flex items-center justify-between px-5 py-4 md:px-10">
        <Magnetic>
          <Link
            href="/"
            data-cursor="hover"
            className="font-display text-sm font-semibold uppercase tracking-widest text-bone"
          >
            LI<span className="text-gold">/</span>
            <span className="hidden sm:inline">DEV</span>
          </Link>
        </Magnetic>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Magnetic key={link.label} strength={0.25}>
              <Link
                href={link.href}
                data-cursor="hover"
                className="link-sweep group font-mono text-xs tracking-widest text-bone-dim transition-colors hover:text-bone"
              >
                <span className="mr-1 text-gold/60">{link.index}.</span>
                {link.label}
              </Link>
            </Magnetic>
          ))}
        </div>

        <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest text-bone-dim">
          <span className="hidden items-center gap-2 sm:flex">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            OPEN TO WORK
          </span>
          <span className="hidden text-bone-faint lg:inline">
            LOCAL <Clock />
          </span>
        </div>
      </nav>

      {/* mobile links */}
      <div className="flex gap-6 overflow-x-auto border-t border-line px-5 py-2 md:hidden">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="whitespace-nowrap font-mono text-[10px] tracking-widest text-bone-dim"
          >
            <span className="text-gold/60">{link.index}.</span> {link.label}
          </Link>
        ))}
      </div>
    </motion.header>
  );
}
