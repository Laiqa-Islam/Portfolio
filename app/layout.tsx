import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Cursor from "@/components/motion/Cursor";
import MotionController from "@/components/motion/MotionController";
import PageTransition from "@/components/motion/PageTransition";
import Preloader from "@/components/motion/Preloader";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { site } from "@/data/site";

// Self-hosted variable fonts (latin subset): no build-time dependency on Google.
// Archivo carries a width axis (62–125%) that names stretch along on hover.
const archivo = localFont({
  src: "./fonts/archivo-latin.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-latin.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Full-stack developer working across Next.js, MERN and Laravel — interface, API and data, built as one product.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "Full-stack developer working across Next.js, MERN and Laravel.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#151413",
};

/**
 * Runs before first paint: restores the theme, turns motion on unless the
 * visitor prefers less, and skips the intro on repeat visits this session.
 */
const boot = `(function(){var d=document.documentElement;try{d.dataset.theme=localStorage.getItem('li-theme')==='light'?'light':'dark'}catch(e){}var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!r)d.classList.add('mo');var seen=false;try{seen=!!sessionStorage.getItem('li-intro')}catch(e){}d.classList.add(r||seen?'no-intro':'intro-on')})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // <html> classes belong to the boot script (mo / intro-on / no-intro), so
    // React never sets className here; the font variables live on <body>.
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className={`${archivo.variable} ${jetbrains.variable}`}>
        <noscript>
          <style>{`.intro{display:none!important}`}</style>
        </noscript>
        <PageTransition>
          <SmoothScroll />
          <Preloader />
          <Header />
          {children}
          <Footer />
          <MotionController />
          <Cursor />
        </PageTransition>
      </body>
    </html>
  );
}
