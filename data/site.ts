// data/site.ts — everything on the site that isn't a project.

export const site = {
  name: "Laiqa Islam",
  role: "Full-stack developer",
  email: "islamlaiqa@gmail.com",
  githubUser: "Laiqa-Islam",
  github: "https://github.com/Laiqa-Islam",
  resume: "/Laiqa_Islam.pdf",
  url: "https://laiqaislam.vercel.app",
};

/** The four layers in the hero's "one developer" figure, top to bottom. */
export const layers = [
  { name: "Motion", tools: "GSAP · Lenis · Web Audio", command: "npm i gsap lenis" },
  { name: "Interface", tools: "React · Next.js · Tailwind", command: "npx create-next-app@latest" },
  { name: "API", tools: "Node · Express · Laravel", command: "php artisan make:model Event -m" },
  { name: "Data", tools: "MongoDB · MySQL · PostgreSQL", command: "npm run seed" },
];

export const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Laravel",
  "PHP",
  "MySQL",
  "Tailwind CSS",
  "MapLibre GL",
  "Tone.js",
];

export const stackGroups = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Laravel", "PHP"] },
  { group: "Data", items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"] },
  { group: "Craft", items: ["GSAP", "MapLibre GL", "Web Audio", "Cloudinary"] },
];

/** What I build — each line points at the projects that prove it. */
export const capabilities = [
  {
    title: "Web applications",
    text: "Multi-role platforms with real auth, dashboards and data that holds up.",
    proof: ["fanhub-plus", "eventsphere", "furshield"],
  },
  {
    title: "Storefronts & sites",
    text: "Product pages, carts and checkout — or a clean marketing site from an empty file.",
    proof: ["yg-cornhole", "business-websites", "wordpress-projects"],
  },
  {
    title: "Backends & APIs",
    text: "Express and Laravel APIs with roles, validation and a contract both sides trust.",
    proof: ["eventsphere", "york-publishers-dashboard", "mood-based-music-generator"],
  },
  {
    title: "Interactive & data-driven UI",
    text: "Maps, timelines and audio in the browser — complicated things made to feel easy.",
    proof: ["imperium-romanum", "mood-based-music-generator"],
  },
];

export const processSteps = [
  {
    phase: "First",
    title: "Understand",
    text: "Why does the thing exist and where is it headed? Knowing that quietly changes how it should be built.",
  },
  {
    phase: "Then",
    title: "Model the data",
    text: "Schema, API contract and stack, decided by the data rather than by habit. Frontend, backend and database treated as one problem.",
  },
  {
    phase: "Build",
    title: "Ship thin slices",
    text: "Working end-to-end slices early, then watch where people get stuck and where they breeze through.",
  },
  {
    phase: "Refine",
    title: "Polish",
    text: "Tighten the flows, kill the edge cases nobody filed, add the motion — balancing fast against correct.",
  },
  {
    phase: "Finish",
    title: "Hand over",
    text: "Deployed, seeded with demo data, and documented so the next person can run it on day one.",
  },
];

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#index", label: "Index" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Contact" },
];
