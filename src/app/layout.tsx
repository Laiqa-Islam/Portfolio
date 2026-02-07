import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laiqa Islam | Software Engineer",
  description: "Full-stack developer building scalable web applications with MERN & Laravel. Problem solver with a growth mindset.",
    icons: {
    icon: "/favicon.png", 
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#101010] text-[#E5E5E5] font-inter antialiased">

        {children}
      </body>
    </html>
  );
}