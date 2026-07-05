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
    eyebrow: "THE BACKSTORY",
    title: "Where I come from, code-wise",
    text:
      "I sit right between the engineering side and the business side, and honestly that’s where I’m most useful. I don’t just build the thing on the ticket — I want to know why it’s there and where it’s headed, because that quietly changes how you build it.\n\nMoving between the frontend, the backend, and the database doesn’t feel like three different jobs to me, it’s all one problem. I think about how things hold up later too — not because it sounds good to say, but because I’ve watched my own shortcuts come back around to bite me.\n\nThe part I genuinely enjoy? Taking a messy, half-formed “can we even do this?” and turning it into something real that works in production.",
    image: "/images/info-1.jpg",
    image2: "/images/info-8.jpg",
  },

  {
    id: "product-work",
    eyebrow: "WHY PRODUCTS",
    title: "Why I like building actual products",
    text:
      "I like shipping things and then watching what happens. Where do people get stuck? Where do they breeze right through? That feedback loop is the fun part — building in a vacuum has never really done it for me.\n\nSo I lean toward places where things keep moving: tighten a backend flow here, fix the auth logic there, quietly kill an edge case that’s been annoying everyone for weeks. I get a slightly unreasonable amount of satisfaction from polishing something until the rough bits are gone.\n\nMostly it comes down to balancing “fast” and “correct,” which is a tension I actually like living in.",
    image: "/images/info-7.jpg",
    image2: "/images/info-9.jpg",
    reverse: true,
  },

  {
    id: "growth",
    eyebrow: "GETTING BETTER",
    title: "How I get better at this",
    text:
      "I’ve got a pretty honest read on what I can and can’t do yet — and I use that on purpose. I take on projects that are a little beyond me, because that’s the only place I’ve ever actually leveled up.\n\nNew stack, new tool, some concept I’ve never touched? Fine, I’ll go learn it and use it properly. But I also know when to slow down, ask the “dumb” question, or admit a problem needs someone with more mileage than me. Knowing that isn’t a weakness — it’s kind of the whole job.\n\nThat’s how I’ve grown steadily without either burning out or promising things I can’t deliver.",
    image: "/images/info-3.jpg",
    image2: "/images/info-5.jpg",
  },

  {
    id: "outside-work",
    eyebrow: "OFF THE CLOCK",
    title: "When I’m not at a keyboard",
    text:
      "Away from the screen I keep things pretty quiet. I read a lot — usually to understand how people think and how systems behave over time. It slows my brain down, which I genuinely need some days.\n\nI sketch every now and then too. It’s less about making art and more about training my eye — spacing, proportion, noticing the small stuff. Turns out that bleeds straight into how I lay out an interface.\n\nAnd when I’m doing neither, I’m probably tinkering. Redoing a corner of this portfolio, opening old projects and cringing a little, or building some tiny idea just to see how far it goes.",
    image: "/images/info-4.jpg",
    image2: "/images/info-2.jpg",
    reverse: true,
  },
];
