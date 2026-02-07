export type InfoBlock = {
  id: string;
  eyebrow?: string;
  title: string;
  text: string;
  image?: string;
  image2?: string;
  reverse?: boolean;
};

export const infoBlocks: InfoBlock[] = [
  {
    id: "background",
    eyebrow: "BACKGROUND",
    title: "My background in software & problem-solving",
    text:
      "I work at the intersection of engineering and business logic. My background in full-stack development allows me to think beyond features and focus on why a system exists and how it should evolve.\n\nI’m comfortable moving between frontend interaction, backend architecture, and database design — always with optimization and long-term scalability in mind. I care deeply about writing code that is readable, intentional, and resilient under growth.\n\nWhat excites me most is solving real business problems through software — turning abstract requirements into systems that actually work in production.",
    image: "/images/info-1.jpg",
    image2: "/images/info-8.jpg",
  },

  {
    id: "product-work",
    eyebrow: "PRODUCT THINKING",
    title: "Why I’m drawn to product work",
    text:
      "I enjoy shipping real products and refining them through iteration. Seeing how users interact with a system — where they hesitate, where they succeed — is where software becomes meaningful to me.\n\nRather than building in isolation, I prefer environments where feedback loops exist and improvements are continuous. Whether it’s optimizing backend flows, refining authentication logic, or smoothing out edge cases, I find satisfaction in polishing systems until they feel cohesive.\n\nProduct work pushes me to balance speed with correctness — and that balance is where I do my best work.",
    image: "/images/info-7.jpg",
    image2: "/images/info-9.jpg",
    reverse: true,
  },

  {
    id: "growth",
    eyebrow: "GROWTH",
    title: "How I approach growth as an engineer",
    text:
      "I’m very aware of my limits — and just as aware of how far I can push them. I intentionally take on projects that sit slightly above my current skill level, knowing that growth happens at the edge of discomfort.\n\nIf a project requires a new stack, tool, or concept, I’m ready to learn it and apply it pragmatically. At the same time, I know when to say no, ask questions, or slow down — because good engineering is also about judgment.\n\nThis mindset has helped me grow consistently without burning out or overpromising.",
    image: "/images/info-3.jpg",
    image2: "/images/info-5.jpg",
  },

  {
    id: "outside-work",
    eyebrow: "BEYOND WORK",
    title: "Life outside of work",
    text:
      "Outside of work, I spend a lot of time in quiet, intentional activities. I read regularly — often to understand how people think, how systems behave, and how ideas evolve over time. Reading helps me slow down and approach problems with more context and clarity.\n\nI also sketch from time to time. It’s less about art as an outcome and more about observation and structure — training myself to notice spacing, proportion, and detail. That habit naturally carries over into how I design interfaces and think through layouts.\n\nWhen I’m not doing either, I’m usually experimenting — refining parts of my portfolio, revisiting older projects with a more critical eye, or building small side ideas just to explore how far an idea can go.",
    image: "/images/info-4.jpg",
    image2: "/images/info-2.jpg",
    reverse: true,
  },
];
