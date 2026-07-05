// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string; 
  imageSrc?: string;
  hoverTint?: string;
  Tint?: string;
  role?: string;
  year?: string;
  tech: string[];

  heroImage?: string;
  overview?: string;
  goals?: string[];
  process?: string;
  keyFeatures?: { title: string; description: string }[];
  outcome?: string;
  toolsUsed?: string[];
  screenshots?: string[];
  externalLink?: string; 
  comingSoon?: boolean;
};

export const projects: Project[] = [
  // {
  //   slug: "rental-property-management",
  //   title: "Rental Property Management System",
  //   description:
  //     "Full-stack rental platform enabling tenants to discover properties, contact agents, and request meetings, while agents manage listings, availability slots, and client interactions through a dedicated dashboard.",

  //   imageSrc: "/images/RentCanberra1.png",
  //   hoverTint: "from-blue-900/55 via-transparent to-transparent",
  //   Tint: "from-blue-900/25 via-transparent to-transparent",

  //   role: "Full-Stack Developer",
  //   tech: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],

  //   heroImage: "/images/RentCanberra1.png",

  //   overview:
  //     "A complete rental property ecosystem built around two primary roles — Tenant and Agent. Tenants can browse available rental properties, search by location, contact agents, and request property viewings. Agents manage property listings, define available meeting slots, receive inquiries, and respond to tenant requests. The platform integrates real-time location mapping, email notifications, and role-based dashboards to support smooth end-to-end rental workflows.",

  //   goals: [
  //     "Design a clear separation of Tenant and Agent workflows",
  //     "Allow tenants to contact agents and request meetings seamlessly",
  //     "Provide agents with full control over listings and availability",
  //     "Implement email-based notifications for all major interactions",
  //     "Enable location-based property discovery using map integration",
  //   ],

  //   keyFeatures: [
  //     {
  //       title: "Tenant Property Discovery",
  //       description:
  //         "Tenants can browse available rental listings, view detailed property pages, and search properties based on location and proximity to amenities.",
  //     },
  //     {
  //       title: "Contact Agent Flow",
  //       description:
  //         "From any property detail page, tenants can click a Contact Agent button which sends an email notification to the listing agent containing tenant details and inquiry message.",
  //     },
  //     {
  //       title: "Meeting Slot Requests",
  //       description:
  //         "Agents define available viewing time slots. Tenants can request a slot if it is not already booked. Agents receive email notifications and can accept or reject requests.",
  //     },
  //     {
  //       title: "Email-Based Status Updates",
  //       description:
  //         "When an agent accepts or rejects a meeting request, the system automatically emails the tenant with the decision.",
  //     },
  //     {
  //       title: "Mail Me (Broadcast Request)",
  //       description:
  //         "Tenants can submit a requirement form describing budget, location, and preferences. All agents can view these requests and respond with matching property listings.",
  //     },
  //     {
  //       title: "Agent Dashboard",
  //       description:
  //         "Agents can create, edit, and delete property listings, upload multiple images, manage meeting slots, and review incoming tenant inquiries.",
  //     },
  //     {
  //       title: "Live Location & Map Integration",
  //       description:
  //         "OpenStreetMap integration allows agents to pin property locations and nearby amenities. Tenants can discover properties by searching specific areas.",
  //     },
  //     {
  //       title: "Role-Based Access Control",
  //       description:
  //         "Separate authentication and protected routes for Tenant and Agent roles, ensuring users only access relevant features.",
  //     },
  //   ],

  //   outcome:
  //     "Delivered a production-ready rental platform that supports real-world agent–tenant workflows, improves response times through automation, and provides location-aware property discovery. The system demonstrates full-stack proficiency across frontend UI, backend logic, database modeling, and third-party API integration.",

  //   toolsUsed: [
  //     "Next.js 14",
  //     "PostgreSQL",
  //     "Prisma",
  //     "Tailwind CSS",
  //     "NextAuth.js",
  //     "OpenStreetMap API",
  //     "Nodemailer",
  //   ],

  //   screenshots: [
  //     "/images/RentCanberra2.png",
  //     "/images/RentCanberra3.png",
  //     "/images/RentCanberra4.png",
  //     "/images/RentCanberra5.png",
  //     "/images/RentCanberra6.png",
  //     "/images/RentCanberra7.png",
  //     "/images/RentCanberra8.png",
  //     "/images/RentCanberra9.png",
  //   ],
  // },

  // {
  //   slug: "ifeelshy-pharmacy",
  //   title: "iFeelShy – Pharmacy & Online Consultation Platform",
  //   description:
  //     "A hybrid healthcare platform combining ecommerce and guided medical consultation. Enables direct purchase of OTC medicines while enforcing symptom-based validation for sensitive treatments before checkout.",

  //   imageSrc: "/images/iFeelShy1.png",
  //   hoverTint: "from-emerald-900/50 via-transparent to-transparent",
  //   Tint: "from-emerald-900/50 via-transparent to-transparent",

  //   tech: ["Laravel", "MySQL", "Livewire", "Tailwind CSS"],

  //   heroImage: "/images/iFeelShy1.png",

  //   overview:
  //     "iFeelShy is a full-featured online pharmacy designed to responsibly sell both over-the-counter and sensitive medicines. The platform blends a traditional ecommerce flow with a medical consultation experience. Depending on the treatment category, users can either purchase medicines directly or must complete a detailed consultation form to validate eligibility before checkout. The system ensures safer medicine distribution while maintaining a smooth and approachable user experience.",

  //   goals: [
  //     "Enable safe and compliant online medicine purchasing",
  //     "Prevent misuse of prescription or sensitive treatments",
  //     "Provide a guided consultation experience without overwhelming users",
  //     "Allow administrators full control over orders, content, and treatments",
  //     "Educate users through medical articles and treatment-focused blogs",
  //   ],

  //   keyFeatures: [
  //     {
  //       title: "Dual Purchase Flow (OTC + Consultation)",
  //       description:
  //         "Over-the-counter categories such as pain relief allow instant add-to-cart and checkout, while sensitive treatments require a mandatory consultation before purchase.",
  //     },
  //     {
  //       title: "Symptom-Based Consultation Forms",
  //       description:
  //         "Dynamic questionnaires adapt to the selected treatment. Users must confirm relevant symptoms (e.g. erectile dysfunction for finasteride) before the system allows checkout.",
  //     },
  //     {
  //       title: "Conditional Checkout Validation",
  //       description:
  //         "Medicine availability is programmatically restricted based on consultation answers, ensuring only eligible users can proceed with sensitive purchases.",
  //     },
  //     {
  //       title: "Admin Dashboard & Order Management",
  //       description:
  //         "Admins can view and manage all orders, track payment status, update delivery progress, and monitor consultation-based approvals from a centralized panel.",
  //     },
  //     {
  //       title: "Treatment & Blog Management System",
  //       description:
  //         "Integrated blogging system allows admins to create treatment categories and publish educational articles (e.g. sleep disorders, hair loss, pain management) linked directly to products.",
  //     },
  //     {
  //       title: "End-to-End Ecommerce Experience",
  //       description:
  //         "Includes cart, secure checkout, address management, payment tracking, and order history for users.",
  //     },
  //   ],

  //   outcome:
  //     "Successfully delivered a scalable and responsible online pharmacy platform that balances user convenience with medical safety. The system reduced improper medicine purchases while improving user trust through guided consultations and educational content.",

  //   toolsUsed: ["Laravel 10", "MySQL", "Livewire", "Tailwind CSS"],
  //   screenshots: [
  //     "/images/iFeelShy2.png",
  //     "/images/iFeelShy5.png",
  //     "/images/iFeelShy6.png",
  //   ],
  // },

   {
  slug: "mood-based-music-generator",
  title: "Mood-Based Music Generator",
  description:
    "A browser-based music tool for people who love music but would never open something like Ableton. You play instruments with your keyboard, pick a mood, mix it, add vocals, and walk away with an actual song — no studio, no manual, no music degree required.",

  imageSrc: "/images/Moodbeat1.png",
  hoverTint: "from-purple-900/50 via-transparent to-transparent",
  Tint: "from-purple-900/50 via-transparent to-transparent",

  tech: [
    "Laravel",
    "SQLite",
    "Tailwind CSS",
    "Web Audio API",
    "Tone.js",
  ],

  role: "Solo Developer",

  overview:
    "The whole idea started with a question: what if making a song didn’t mean learning intimidating studio software first? So I built a music tool that lives entirely in the browser. You play piano or guitar straight off your keyboard, record it, pick a mood that unlocks a set of matching tracks, mix everything with a stripped-down mixer, throw vocals on top, and export the finished thing. Every step is guided so you never hit that “okay… what now?” wall that usually scares people off.",

  goals: [
    "Make music creation something a complete beginner could actually finish",
    "Skip the terrifying learning curve of real DAW software",
    "Let someone build a whole song without ever leaving the browser",
    "Give real creative control without putting 40 buttons on screen",
    "Nudge people to just experiment instead of overthinking it",
  ],

  keyFeatures: [
    {
      title: "Play it with your keyboard",
      description:
        "Pick piano or guitar and just play — every key is mapped to a note, so you can make a melody without knowing a thing about music software.",
    },
    {
      title: "Record and play it back",
      description:
        "Hit record, capture your session live, replay it instantly, and save your compositions to your profile to come back to later.",
    },
    {
      title: "Pick a mood, get matching tracks",
      description:
        "Once you've recorded, choose a mood like happy or sad and it unlocks a set of tracks — piano, guitar, drums, bass, ambient — that actually fit that feeling.",
    },
    {
      title: "It won't let you make an empty mix",
      description:
        "The mixer nudges you to pick at least one track before moving on, so nobody ends up staring at a blank, broken-looking result.",
    },
    {
      title: "A mixer you can actually understand",
      description:
        "Per-track control over volume, pitch, reverb, distortion, looping a section, and where each sound sits in the timeline — powerful, but not overwhelming.",
    },
    {
      title: "Solo and loop any track",
      description:
        "Play tracks on their own, loop a specific chunk (say 5–10 seconds), and decide exactly where that piece lands in the final song.",
    },
    {
      title: "One button to mix it all down",
      description:
        "When you're happy, everything you've tweaked gets merged into one clean audio file behind the scenes with the Web Audio API and Tone.js.",
    },
    {
      title: "Add your own vocals",
      description:
        "Record vocals right in the browser, tweak pitch and volume, and blend them into the instrumental so it sounds like one track, not two.",
    },
    {
      title: "Export the finished song",
      description:
        "Vocals and instrumental get rendered into a single downloadable file — and it's saved to your profile too, so nothing gets lost.",
    },
  ],

  outcome:
    "It turned into a genuine little music studio that someone with zero production background can use start to finish. Building it taught me a ton about audio on the web — Web Audio, Tone.js, timing, all the fiddly bits — and honestly it's the project I'm proudest of when it comes to taking something complicated and making it feel easy.",

  toolsUsed: [
    "Laravel",
    "SQLite",
    "Tailwind CSS",
    "Web Audio API",
    "Tone.js",
  ],

  screenshots:[
    "/images/Moodbeat2.png",
    "/images/Moodbeat3.png",
    "/images/Moodbeat4.png",
    "/images/Moodbeat5.png",
    "/images/Moodbeat6.png",
    "/images/Moodbeat7.png",
    "/images/Moodbeat8.png",
    "/images/Moodbeat9.png",
  ],
},

  {
    slug: "york-publishers-dashboard",
    title: "York Publishers Dashboard",
    description:
      "An internal chat and dashboard for a publishing company. Full messaging — send, edit, delete on a timer — plus media sharing, but locked down so only admins run conversations. No random DMs flying around between staff, and that was the point.",
    imageSrc: "/images/YorkPublishers5.png",
    hoverTint: "from-amber-900/50 via-transparent to-transparent",
    Tint: "from-amber-900/50 via-transparent to-transparent",
    tech: ["Laravel", "JavaScript", "SQL"],

    overview:
      "The company didn't want another free-for-all chat app — they wanted a controlled way for admins to talk to their team. So messaging is admin-driven, media like docs, images and video works right inside the thread, and every message has a real lifecycle: you can edit it, and deletion runs on time limits the admin sets. It's communication with guardrails.",
    keyFeatures: [
      {
        title: "Admins run the conversations",
        description:
          "Only admins can start and manage threads — no chaos, no side chats nobody can keep track of.",
      },
      {
        title: "Share files right in the chat",
        description:
          "Drop in documents, images, and video and preview them inline, without bouncing out to another tool.",
      },
      {
        title: "Edit now, delete on a timer",
        description:
          "People can fix their messages, and admins set the rules for when things auto-delete — so the thread stays tidy on its own.",
      },
    ],
    toolsUsed: ["Laravel", "Alpine.js", "MySQL"],
  },


  {
    slug: "business-websites",
    title: "Business Websites",
    description:
      "Three business sites — InkCraft Marketing Solutions, Amazon Publishing Experts, and AlphaVerse Digitals — hand-coded from an empty file. No templates, no page builder, fully responsive on everything.",
    imageSrc: "/images/AlphaverseDigitals.png",
    hoverTint: "from-rose-900/30 via-transparent to-transparent",
    tech: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      "/images/InkCraftMarketingSolutions.png",
      "/images/AmazonPublishingExperts.png"
    ]
  },
  {
    slug: "wordpress-projects",
    title: "WordPress Projects",
    description:
      "A run of WordPress builds — business sites and blog-style informational ones. Custom themes where it made sense, Elementor where it made the client's life easier.",
    imageSrc: "/images/Wordpress4.png",
    hoverTint: "from-cyan-900/50 via-transparent to-transparent",
    Tint: "from-cyan-900/50 via-transparent to-transparent",
    tech: ["WordPress", "Elementor", "Custom Themes"],
    screenshots: [
      "/images/Wordpress2.png",
      "/images/Wordpress3.png",
      "/images/Wordpress4.png",
    ],
  },
];
