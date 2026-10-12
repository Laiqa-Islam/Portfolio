import About, { type Stat } from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import CtaBand from "@/components/home/CtaBand";
import GitHubLive from "@/components/home/GitHubLive";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import ProjectIndex from "@/components/home/ProjectIndex";
import SelectedWork from "@/components/home/SelectedWork";
import Stack from "@/components/home/Stack";
import TechMarquee from "@/components/home/TechMarquee";
import { projects } from "@/data/projects";
import { getGitHubSnapshot } from "@/lib/github";

/** Distinct technologies across every project, ignoring version numbers. */
function countTechnologies() {
  const names = projects.flatMap((p) => [...p.tech, ...(p.toolsUsed ?? [])]);
  return new Set(names.map((n) => n.replace(/\s+v?\d+(\.\d+)*$/i, "").toLowerCase())).size;
}

export default async function Home() {
  const github = await getGitHubSnapshot();

  const stats: Stat[] = [
    { value: projects.length, label: "Projects in this index" },
    { value: countTechnologies(), label: "Technologies across them" },
    ...(github
      ? [
          { value: github.publicRepos, label: "Public repositories" },
          { value: github.languages, label: "Languages on GitHub" },
        ]
      : []),
  ];

  return (
    <main>
      <Hero />
      <TechMarquee />
      <About stats={stats} />
      <SelectedWork projects={projects} />
      <ProjectIndex projects={projects} />
      <Stack />
      <Capabilities projects={projects} />
      <Process />
      {github && <GitHubLive data={github} />}
      <CtaBand />
    </main>
  );
}
