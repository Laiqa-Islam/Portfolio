import type { Metadata } from "next";
import { Fraunces, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Laiqa Islam — Full-Stack Developer",
  description:
    "Full-stack developer building products end to end — frontend, backend, and everything between. Portfolio of Laiqa Islam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${jetbrains.variable} cursor-none-global antialiased`}
    >
      <body className="bg-ink text-bone">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
        <div className="scanlines" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
