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
    "An accessible web-based music creation platform designed for users passionate about music but unfamiliar with complex digital audio workstations. Enables instrument-based composition, mood-driven track selection, and simplified audio mixing directly in the browser.",

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
    "The Mood-Based Music Generator is a browser-based music creation tool aimed at lowering the barrier to music production. Instead of requiring users to learn complex studio software, the platform allows them to compose, record, mix, and export music using familiar keyboard interactions and guided workflows. Users can create melodies using virtual instruments, combine them with mood-based tracks, fine-tune audio through a simplified mixer, and even add vocals to produce a complete song — all within a single web application.",

  goals: [
    "Make music creation accessible to non-technical users",
    "Eliminate the learning curve of traditional DAW software",
    "Enable full song creation directly in the browser",
    "Provide creative control without overwhelming complexity",
    "Encourage experimentation through mood-based sound selection",
  ],

  keyFeatures: [
    {
      title: "Keyboard-Controlled Virtual Instruments",
      description:
        "Users can select an instrument (piano or guitar) and play it directly using their computer keyboard. Each key is mapped to a musical note, allowing intuitive melody creation without prior technical knowledge.",
    },
    {
      title: "In-Browser Recording & Playback",
      description:
        "Users can record their instrument sessions in real time, replay them instantly, and save their original compositions to their personal profile for later use.",
    },
    {
      title: "Mood-Based Track Selection",
      description:
        "After recording, users select a mood such as happy or sad, unlocking a curated set of pre-created tracks including piano, guitar, drums, bass, and ambient sounds that match the selected emotion.",
    },
    {
      title: "Track Selection Validation",
      description:
        "The mixer workflow is gated to ensure users select at least one track before proceeding, guiding them through the creation process and preventing empty or invalid mixes.",
    },
    {
      title: "Simplified Audio Mixer",
      description:
        "A user-friendly mixer allows individual control over each selected track, including volume, pitch, reverb, distortion, looping specific time segments, and positioning sounds within the song timeline.",
    },
    {
      title: "Per-Track Playback & Looping",
      description:
        "Users can play individual tracks in isolation, loop specific sections (e.g. 5–10 seconds), and decide exactly where those sections should appear in the final composition.",
    },
    {
      title: "Automatic Track Mixing",
      description:
        "With a single action, all selected and adjusted tracks are merged into one cohesive audio file using Web Audio API and Tone.js.",
    },
    {
      title: "Vocals Recording & Integration",
      description:
        "Users can record vocals directly in the browser, adjust pitch and volume, and blend vocals seamlessly with the generated instrumental track.",
    },
    {
      title: "Final Render & Export",
      description:
        "The platform renders the final song by combining vocals and instrumental layers into a single downloadable audio file, while also allowing users to save their work to their profile.",
    },
  ],

  outcome:
    "Delivered a complete browser-based music production experience that empowers users to create full songs without traditional studio software. The project demonstrates strong frontend audio engineering skills, thoughtful UX design, and the ability to simplify complex systems into approachable creative tools.",

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
      "Internal communication platform with full chat (send/edit/delete with time limits), media sharing, and admin-only messaging — no user-to-user private chat.",
    imageSrc: "/images/YorkPublishers5.png",
    hoverTint: "from-amber-900/50 via-transparent to-transparent",
    Tint: "from-amber-900/50 via-transparent to-transparent",
    tech: ["Laravel", "JavaScript", "SQL"],

    overview:
      "Custom internal messaging dashboard for a publishing company. Focused on admin-to-team communication with rich media support and message lifecycle controls.",
    keyFeatures: [
      {
        title: "Admin-Controlled Messaging",
        description: "Only admins can initiate and manage conversations",
      },
      {
        title: "Rich Media Support",
        description:
          "Upload and preview documents, images, videos within messages",
      },
      {
        title: "Message Editing & Time-limited Deletion",
        description:
          "Users can edit messages; admins can set auto-delete rules",
      },
    ],
    toolsUsed: ["Laravel", "Alpine.js", "MySQL"],
  },


  {
    slug: "business-websites",
    title: "Business Websites",
    description:
      "Custom multi-page websites for InkCraft Marketing Solutions, Amazon Publishing Experts & AlphaVerse Digitals — fully responsive, built from scratch.",
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
      "Business websites and blog-style informational sites built with WordPress.",
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
