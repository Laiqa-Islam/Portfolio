"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from '@/components/Home';
import InfoPage from "@/components/InfoPage";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"work" | "info">("work");
  return (
      <div className="relative">
         <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="hidden md:block md:absolute top-[46px] left-1/2 -translate-x-1/2 right-[24px] z-[2] h-[40vh] rounded-[2000px] opacity-70 blur-[100px] bg-[linear-gradient(to_right,transparent_5%,white_50%,transparent_10%)]"></div>
        <main className="md:px-6 px-2">
           {activeTab === "work" && <Home />}
        {activeTab === "info" && <InfoPage />}
        </main>
      </div>
  )
}