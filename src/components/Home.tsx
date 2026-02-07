"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import CareerGoal from "@/components/CareerGoal";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import MotionSection from "@/components/MotionSection";

export default function Home() {
  return (
    <>
      <Hero />

      <MotionSection delay={0.05}>
        <Projects />
      </MotionSection>

      <MotionSection delay={0.1}>
        <Skills />
      </MotionSection>

      <MotionSection delay={0.15}>
        <CareerGoal />
      </MotionSection>

      <MotionSection delay={0.2}>
        <Availability />
      </MotionSection>

      <MotionSection delay={0.25}>
        <Contact />
      </MotionSection>
    </>
  );
}
