"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ComponentProps,
  type ReactNode,
} from "react";
import { scrollToHash, scrollToY } from "@/lib/scroll";

const EASE = "cubic-bezier(.76,0,.24,1)";

type Ctx = { go: (href: string) => void };
const TransitionContext = createContext<Ctx>({ go: () => {} });

export function usePageTransition() {
  return useContext(TransitionContext);
}

/**
 * A red panel covers the page, the route changes underneath it, then it
 * lifts away. Same-page links (e.g. /#work from the home page) just scroll.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const wipeRef = useRef<HTMLDivElement>(null);
  const pending = useRef<{ hash: string } | null>(null);
  const busy = useRef(false);

  const reveal = useCallback(() => {
    const w = wipeRef.current;
    if (!w) return;
    w.getAnimations().forEach((a) => a.cancel());
    w.animate([{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }], {
      duration: 750,
      easing: EASE,
      fill: "forwards",
    }).onfinish = () => {
      w.getAnimations().forEach((a) => a.cancel());
      busy.current = false;
    };
  }, []);

  const go = useCallback(
    (href: string) => {
      const url = new URL(href, window.location.href);
      if (url.pathname === window.location.pathname) {
        if (url.hash) scrollToHash(url.hash);
        else scrollToY(0);
        return;
      }
      if (busy.current) return;

      const w = wipeRef.current;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!w || reduce) {
        router.push(url.pathname + url.search + url.hash);
        return;
      }

      busy.current = true;
      w.animate([{ transform: "translateY(100%)" }, { transform: "translateY(0)" }], {
        duration: 650,
        easing: EASE,
        fill: "forwards",
      }).onfinish = () => {
        pending.current = { hash: url.hash };
        router.push(url.pathname + url.search, { scroll: false });
        // Never leave the cover stuck if the route doesn't change.
        setTimeout(() => {
          if (pending.current) {
            pending.current = null;
            reveal();
          }
        }, 4000);
      };
    },
    [router, reveal]
  );

  useEffect(() => {
    const p = pending.current;
    if (!p) return;
    pending.current = null;
    requestAnimationFrame(() => {
      if (p.hash) scrollToHash(p.hash, true);
      else scrollToY(0, true);
      reveal();
    });
  }, [pathname, reveal]);

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}
      <div ref={wipeRef} className="wipe flex items-end p-8" aria-hidden="true">
        <span className="flex h-[34px] w-[34px] items-end bg-paper px-1 pb-[3px] text-[15px] leading-none font-extrabold tracking-[-0.04em] text-accent-fill">
          LI
        </span>
      </div>
    </TransitionContext.Provider>
  );
}

type TLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** next/link that plays the page wipe on client-side navigation. */
export function TLink({ href, children, ...rest }: TLinkProps) {
  const { go } = usePageTransition();
  return (
    <Link
      href={href}
      {...rest}
      onNavigate={(e) => {
        e.preventDefault();
        go(href);
      }}
    >
      {children}
    </Link>
  );
}
