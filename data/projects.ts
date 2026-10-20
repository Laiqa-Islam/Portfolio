// data/projects.ts

/** Background treatment of a project's poster panel. */
export type Panel = "accent" | "ink" | "paper" | "stone" | "graphite";

/** Drawn UI sketch used when a project has no screenshots. */
export type Sketch = "events" | "pets" | "relay" | "inspector";

export type Project = {
  slug: string;
  /** Short display name — set huge on cards and the case-study title. */
  name: string;
  title: string;
  /** What kind of thing it is, e.g. "Interactive map". */
  kind: string;
  /** One line for cards and the index. */
  summary: string;
  description: string;
  imageSrc?: string;
  role?: string;
  year?: string;
  tech: string[];

  /** Shown in the horizontal "Selected work" reel on the home page. */
  featured?: boolean;
  panel?: Panel;
  sketch?: Sketch;
  /** Muted walkthrough: plays on hover in cards and as the case-study cover. */
  video?: string;
  /** A sibling project built to work with this one, shown as a linked pair. */
  companion?: { slug: string; text: string; flow: { label: string; text: string }[] };
  liveUrl?: string;
  repoUrl?: string;

  heroImage?: string;
  overview?: string;
  goals?: string[];
  /** How data or requests move through the system, drawn as a diagram. */
  pipeline?: { label: string; text: string }[];
  keyFeatures?: { title: string; description: string }[];
  outcome?: string;
  toolsUsed?: string[];
  screenshots?: string[];
};

export const projects: Project[] = [
  // {
  //   slug: "rental-property-management",
  //   name: "RentCanberra",
  //   kind: "Property platform",
  //   summary: "Tenants find homes and book viewings; agents run listings and slots.",
  //   title: "Rental Property Management System",
  //   description:
  //     "Full-stack rental platform enabling tenants to discover properties, contact agents, and request meetings, while agents manage listings, availability slots, and client interactions through a dedicated dashboard.",

  //   imageSrc: "/images/RentCanberra1.png",

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


  // Kept out of the portfolio (it's on the résumé only). Uncomment to show it again.
  // {
  //   slug: "ifeelshy-pharmacy",
  //   name: "iFeelShy",
  //   kind: "Healthcare platform",
  //   summary: "A live UK online pharmacy — consultations, prescribing, dispensing and shipping.",
  //   year: "2026",
  //   role: "Full-stack developer, team of five",
  //   featured: true,
  //   panel: "ink",
  //   title: "iFeelShy – Pharmacy & Online Consultation Platform",
  //   description:
  //     "A hybrid healthcare platform combining ecommerce and guided medical consultation. Enables direct purchase of OTC medicines while enforcing symptom-based validation for sensitive treatments before checkout.",

  //   imageSrc: "/images/iFeelShy1.png",

  //   tech: ["Laravel", "MySQL", "Stripe", "LiveKit", "JavaScript"],

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
  //       title: "Prescription & dispensing flow",
  //       description:
  //         "I built the clinical pipeline from the awaiting-review and dispensing queues through to ready-to-dispatch, including a flag that informs the patient's GP.",
  //     },
  //     {
  //       title: "Royal Mail shipping",
  //       description:
  //         "Integrated Royal Mail so orders ship from the admin panel, with validated label generation built in.",
  //     },
  //     {
  //       title: "Video consultations",
  //       description:
  //         "Live video consultations between patients and clinicians, built on LiveKit.",
  //     },
  //     {
  //       title: "Security for health data",
  //       description:
  //         "Multi-factor authentication, data encryption at rest, and a complete audit trail of who changed what.",
  //     },
  //     {
  //       title: "Subscriptions & inventory",
  //       description:
  //         "Recurring subscription orders and an inventory system that keeps stock correct through checkout.",
  //     },
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

  //   toolsUsed: ["Laravel 8", "MySQL", "Stripe", "LiveKit", "Google2FA", "Spatie Permission", "DomPDF", "Royal Mail API"],
  //   screenshots: [
  //     "/images/iFeelShy2.png",
  //     "/images/iFeelShy4.png",
  //     "/images/iFeelShy5.png",
  //     "/images/iFeelShy6.png",
  //   ],
  // },

  {
    slug: "forma-digital-agency",
    name: "Forma",
    title: "Forma — Digital Agency Website",
    kind: "Concept website",
    summary: "A studio site with a video hero, a scroll-expanding intro and eight case studies.",
    description:
      "A website for FORMA, a fictional independent creative studio: big serif type, a forest-green palette, a full-screen video hero and scroll-driven motion across a work index, eight case studies, a locations directory and a careers page.",
    year: "2026",
    featured: true,
    panel: "ink",
    imageSrc: "/images/Forma1.jpg",
    video: "/videos/forma-showcase.mp4",
    liveUrl: "https://forma-digital-agency.vercel.app",
    repoUrl: "https://github.com/Laiqa-Islam/Forma-Digital-Agency",
    tech: ["Next.js 16", "React 19", "TypeScript", "GSAP", "Swiper"],

    overview:
      "FORMA is a portfolio piece modelled on the scale and pacing of a big agency site, with its own identity, copy and case studies. The homepage opens on a full-screen video with the wordmark, then an intro panel widens as you scroll, a showreel plays in a native dialog, and a Swiper carousel walks through featured work. All of the scroll animation lives in one GSAP ScrollTrigger component that reruns on every route change, and eight case studies are statically generated from a single content file.",

    keyFeatures: [
      {
        title: "One motion layer",
        description:
          "Fade-ins, parallax, the fading wordmark and the widening intro panel all live in one GSAP ScrollTrigger component that reruns on route changes.",
      },
      {
        title: "Reduced motion, properly",
        description:
          "Animations sit inside gsap.matchMedia, and background videos pause off-screen, honour reduced motion and carry a visible pause button.",
      },
      {
        title: "Statically generated case studies",
        description:
          "Eight case studies, the work grid and the carousel all read from one projects file.",
      },
      {
        title: "A live locations directory",
        description:
          "A searchable list of studio cities showing each one's local time, beside a zoomable map with pins.",
      },
      {
        title: "Careers with filters",
        description:
          "Role cards filter by team and open native dialogs with the details.",
      },
      {
        title: "No backend needed",
        description:
          "The enquiry form turns a message into a downloadable file, so nothing is sent or stored.",
      },
    ],

    toolsUsed: ["Next.js 16", "React 19", "TypeScript", "GSAP ScrollTrigger", "Swiper", "Vercel"],

    screenshots: [
      "/images/Forma2.jpg",
      "/images/Forma3.jpg",
      "/images/Forma4.jpg",
      "/images/Forma5.jpg",
      "/images/Forma6.jpg",
    ],
  },

  {
    slug: "oliva-restaurant",
    name: "Oliva",
    title: "Oliva — Mediterranean Restaurant Website",
    kind: "Concept website",
    summary: "A scroll-driven restaurant site in plain HTML, CSS and JavaScript — no libraries.",
    description:
      "A website for OLIVA, a fictional Mediterranean restaurant, built around scroll-driven animation in plain HTML, CSS and JavaScript — no framework, no animation library, nothing to install.",
    year: "2026",
    featured: true,
    panel: "stone",
    imageSrc: "/images/Oliva1.jpg",
    video: "/videos/oliva-walkthrough.mp4",
    repoUrl: "https://github.com/Laiqa-Islam/Oliva-Restaurant-Website",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],

    overview:
      "Every effect on OLIVA is hand-written. A small requestAnimationFrame loop maps scroll position through easing helpers, while pinned sections use CSS sticky so the page always scrolls natively. On the homepage a tilted cooking video grows to fill the screen between oversized letters; the menu page tracks categories and swaps kitchen photos as you move through the dishes. Pages are assembled at build time from one shared shell and a template per page, and every photo, video and font is self-hosted.",

    pipeline: [
      { label: "Shell", text: "One shared page holds the header, footer and booking form" },
      { label: "Templates", text: "Each route has its own body template" },
      { label: "Render", text: "A Node script stitches them into static pages" },
      { label: "Check", text: "A QA script verifies headings, IDs, links and assets" },
    ],

    keyFeatures: [
      {
        title: "Animation from scratch",
        description:
          "Every scroll effect is a requestAnimationFrame loop with clamp, mix and ease helpers — no GSAP, no libraries.",
      },
      {
        title: "A booking form that thinks",
        description:
          "Checks dates against opening hours, disables time slots that have passed and exports a calendar file, all in the browser.",
      },
      {
        title: "Reduced motion respected",
        description:
          "With reduced motion the pages fall back to a static layout, and every background video has its own play/pause button.",
      },
      {
        title: "Accessible by default",
        description:
          "Keyboard-friendly menu tabs, native dialogs for the booking form and full menu, and a print stylesheet for the menu.",
      },
      {
        title: "One source for the menu",
        description:
          "Dishes and prices live in a single data file that the tabs, the full menu and the menu page all read.",
      },
      {
        title: "Page-transition curtain",
        description:
          "A short curtain plays between pages without replacing normal browser navigation.",
      },
    ],

    toolsUsed: ["HTML", "CSS", "JavaScript", "Node.js build script", "requestAnimationFrame"],

    screenshots: [
      "/images/Oliva2.jpg",
      "/images/Oliva3.jpg",
      "/images/Oliva4.jpg",
      "/images/Oliva5.jpg",
      "/images/Oliva6.jpg",
    ],
  },

  {
    slug: "relay",
    name: "Relay",
    title: "Relay — Webhook Delivery Service",
    kind: "Backend system",
    summary: "Signed webhooks delivered reliably: retries, idempotency, a circuit breaker and replay.",
    description:
      "A webhook delivery service: it signs each event with HMAC-SHA256, delivers it to subscribed endpoints, retries failures with exponential backoff, pauses endpoints that keep failing, and logs every attempt in a live console.",
    year: "2026",
    featured: true,
    panel: "accent",
    sketch: "relay",
    repoUrl: "https://github.com/Laiqa-Islam/Webhook-Service",
    companion: {
      slug: "hookscope",
      text: "hookscope is the receiving side. Open a bin, register its URL as a Relay endpoint, and watch each signed delivery and retry arrive with its signature headers intact — then replay any of them back.",
      flow: [
        { label: "Relay · Sign", text: "Each event is signed with HMAC-SHA256" },
        { label: "Relay · Deliver", text: "Posted with retries, backoff and a circuit breaker" },
        { label: "hookscope · Capture", text: "The bin catches every attempt, headers intact" },
        { label: "hookscope · Inspect", text: "Streams in live — replay any delivery anywhere" },
      ],
    },
    tech: ["Next.js 16", "TypeScript", "SQLite", "Node.js"],

    overview:
      "Sending a webhook is one fetch call; delivering it reliably is the hard part. Receivers go down, get slow or get flooded, and the same event must never arrive twice. Relay is a self-contained version of what companies like Svix build. An event is saved and acknowledged immediately, then a background dispatcher atomically claims each delivery, signs it the way Stripe does, and posts it. Failures retry with jittered exponential backoff, a circuit breaker pauses endpoints that keep failing, and anything that fails for good can be replayed from the console.",

    pipeline: [
      { label: "Ingest", text: "Rate-limited, checked for idempotency, saved and acknowledged" },
      { label: "Claim", text: "The dispatcher atomically claims due deliveries — never sent twice" },
      { label: "Sign & send", text: "HMAC-SHA256 signature over the raw body, 5-second timeout" },
      { label: "Retry or settle", text: "Jittered backoff, circuit breaker, replay once failed" },
    ],

    keyFeatures: [
      {
        title: "Stripe-style signatures",
        description:
          "Signatures over the raw body; receivers compare in constant time and reject requests older than five minutes.",
      },
      {
        title: "Exponential backoff",
        description:
          "Six attempts from 5s to 80s, each delay jittered by ±15% so a recovering endpoint isn't stampeded.",
      },
      {
        title: "Idempotency",
        description:
          "An Idempotency-Key header stops duplicate events at ingestion, and payloads stay byte-identical across retries.",
      },
      {
        title: "Circuit breaker",
        description:
          "Three straight failures pause an endpoint; after a cooldown one probe checks it's back before queued deliveries resume in order.",
      },
      {
        title: "Rate limiting & SSRF guard",
        description:
          "A token bucket on ingestion, and endpoint URLs pointing at private networks or cloud metadata IPs are rejected.",
      },
      {
        title: "Zero-downtime secret rotation",
        description:
          "During a 24-hour window every delivery carries two signatures, so consumers can switch secrets without missing one.",
      },
    ],

    outcome:
      "Relay is where I've been putting my system design learning into practice: each mechanism exists because of a specific way delivery fails, and the live console makes every one of them visible. It ships with 25 unit tests on Node's built-in test runner, covering signing, the SSRF guard, backoff bounds, subscription matching and the token bucket.",

    toolsUsed: ["Next.js 16", "React 19", "TypeScript", "node:sqlite", "Tailwind CSS", "shadcn/ui", "Node test runner"],
  },

  {
    slug: "hookscope",
    name: "hookscope",
    title: "hookscope — Webhook Inspector",
    kind: "Developer tool",
    summary: "Catch every webhook, inspect it live, replay it anywhere — Relay's other half.",
    description:
      "A self-hostable webhook inspector, like a mini RequestBin: open a bin, get a URL, and every request that hits it streams into the browser the moment it lands — with replay, copy-as-curl, and Redis pub/sub so it works on serverless.",
    year: "2026",
    featured: true,
    panel: "graphite",
    imageSrc: "/images/Hookscope1.png",
    repoUrl: "https://github.com/Laiqa-Islam/Webhook-Inspector",
    tech: ["Next.js 16", "TypeScript", "Redis", "Server-Sent Events"],
    companion: {
      slug: "relay",
      text: "Relay is the sending side. Register a hookscope bin as one of Relay's endpoints and every signed delivery, retry and replay lands here live, signature headers and all.",
      flow: [
        { label: "Relay · Sign", text: "Each event is signed with HMAC-SHA256" },
        { label: "Relay · Deliver", text: "Posted with retries, backoff and a circuit breaker" },
        { label: "hookscope · Capture", text: "The bin catches every attempt, headers intact" },
        { label: "hookscope · Inspect", text: "Streams in live — replay any delivery anywhere" },
      ],
    },

    overview:
      "hookscope catches webhooks and pushes them to the browser the instant they land. Version one kept bins in memory with an event emitter — perfect on one long-running server, broken on Vercel, where the instance that captures a webhook usually isn't the one holding your browser's stream. So the store became an interface with two implementations: in memory for local development, and Redis for serverless, where every capture is saved with LPUSH and broadcast with PUBLISH to whichever instance is streaming that bin. Without Redis on Vercel it fails loudly with a clear message rather than silently never updating.",

    pipeline: [
      { label: "Capture", text: "Any method, any path — rate-limited, bodies capped" },
      { label: "Store", text: "LPUSH + PUBLISH in one Redis round trip, or in memory" },
      { label: "Stream", text: "SSE subscribed to the bin; backlog refetched on reconnect" },
      { label: "Replay", text: "Re-sent server-side through an SSRF-safe fetch" },
    ],

    keyFeatures: [
      {
        title: "Two stores, one interface",
        description:
          "In memory locally, Redis pub/sub on serverless. The routes only ever ask for a store, so none of them know which one is active.",
      },
      {
        title: "Live, with nothing lost",
        description:
          "Captures stream over Server-Sent Events, and whenever a stream reconnects the browser refetches the backlog it missed.",
      },
      {
        title: "Replay that can't reach inside",
        description:
          "Destinations are checked at connection time, so DNS-rebinding tricks are caught; loopback, private ranges and cloud metadata are blocked.",
      },
      {
        title: "Safe to host publicly",
        description:
          "Rate limits on bins, captures and replays, capped bodies, bins that expire after a day idle, and platform headers stripped.",
      },
      {
        title: "Accepts anything",
        description:
          "Every method, any sub-path, binary bodies shown as base64, and CORS-friendly so browser fetch calls work too.",
      },
      {
        title: "Copy as curl",
        description:
          "Turns any capture into a runnable, safely quoted curl command.",
      },
    ],

    toolsUsed: ["Next.js 16", "React 19", "TypeScript", "node-redis", "Upstash Redis", "undici", "Server-Sent Events"],
  },

  {
    slug: "imperium-romanum",
    name: "Imperium",
    kind: "Interactive map",
    summary: "Two thousand years of Roman borders you can scrub through on a timeline.",
    year: "2026",
    featured: true,
    panel: "paper",
    repoUrl: "https://github.com/Laiqa-Islam/Roman-Empire",
    pipeline: [
      { label: "Source", text: "Century-by-century world borders from historical-basemaps" },
      { label: "Clip", text: "mapshaper trims every polygon to Natural Earth coastlines" },
      { label: "Measure", text: "Geodesic area per snapshot feeds the timeline sparkline" },
      { label: "Render", text: "MapLibre GL draws ~750 KB of local GeoJSON, no tiles" },
    ],
    title: "Imperium Romanum — Rome Mapped Through Time",
    description:
      "An interactive historical map that redraws the borders of Rome year by year, from the founding of the Republic in 509 BC to the fall of Constantinople in 1453. Drag a timeline, watch two thousand years of territory rise and fall, then dive into full manuscript-style stories and a mind-map of the emperors, generals, and rivals who made it happen.",

    imageSrc: "/images/RomanEmpire1.png",

    tech: [
      "Next.js",
      "TypeScript",
      "MapLibre GL JS",
      "Tailwind CSS",
      "Node.js",
    ],

    role: "Solo Developer",

    overview:
      "This one started as a portfolio idea and turned into an obsession with turning messy open historical data into something people actually want to play with. I built a data pipeline that pulls century-by-century world border data and real coastline geometry, clips one against the other so borders hug the actual shoreline, and computes the empire's territorial area at every snapshot. That data drives a MapLibre map styled to look like an antique atlas, with a timeline that crossfades borders continuously between snapshots instead of jumping between them. On top of that sits 'The Codex' — a full-screen reading mode with long-form stories for every major event, and 'The Constellation', a clickable mind-map of the historical figures behind them, so you can wander from Caesar to Cleopatra to Actium and back through the whole narrative.",

    goals: [
      "Turn dry historical GIS data into something visual and genuinely fun to explore",
      "Make the passage of time feel continuous, not like flipping between static maps",
      "Give a data visualization actual emotional weight through real storytelling",
      "Let curiosity about one event lead naturally into the next",
      "Ship it with zero paid APIs, map tiles, or backend — fully static and self-hosted",
    ],

    keyFeatures: [
      {
        title: "A living timeline",
        description:
          "Drag the slider from 509 BC to AD 1453 and watch empire borders continuously crossfade between historical snapshots instead of snapping between them.",
      },
      {
        title: "A custom historical data pipeline",
        description:
          "A build script pulls century-by-century world border data and Natural Earth coastlines, then clips the empire's polygons to the real shoreline so borders never spill into the sea.",
      },
      {
        title: "Territory over time, visualized",
        description:
          "The timeline's backdrop is a sparkline of the empire's actual computed land area at each snapshot — you can see the rise and the fall before you even press play.",
      },
      {
        title: "Cities that live and change",
        description:
          "Cities appear when founded and disappear when lost; Byzantium renames itself Constantinople in AD 330 and inherits the capital's crown from Rome.",
      },
      {
        title: "The Codex — full stories, not captions",
        description:
          "Every major event opens into a full-screen manuscript view with a proper long-form narrative, illuminated drop caps, and page-by-page navigation through the whole saga.",
      },
      {
        title: "The Constellation — a mind-map of history",
        description:
          "A radial graph of emperors, generals, empresses, and rivals. Click any figure to re-center the graph on their relationships and the events they shaped.",
      },
      {
        title: "Click your way through history",
        description:
          "From any figure or event you can jump to a related figure, read another story, or fly the map straight to that year — so one click of curiosity leads to the next.",
      },
      {
        title: "Built to run anywhere",
        description:
          "No map tiles, no API keys, no server — the whole basemap is locally-hosted vector data, so it deploys as a static site with a total data payload under 1MB.",
      },
    ],

    outcome:
      "What started as 'draw some borders on a map' became a small interactive encyclopedia — a data pipeline, a custom-styled map renderer, and roughly 11,000 words of curated historical writing, all wired together into one continuous experience. It pushed me to think hard about pacing and discoverability in a UI, not just correctness, and it's the project that best shows how I turn a raw dataset into something someone would actually want to spend twenty minutes exploring.",

    toolsUsed: [
      "Next.js",
      "TypeScript",
      "MapLibre GL JS",
      "Tailwind CSS",
      "Node.js",
    ],

    screenshots: [
      "/images/RomanEmpire1.png",
      "/images/RomanEmpire2.png",
      "/images/RomanEmpire3.png",
      "/images/RomanEmpire4.png",

    ],
  },


  {
    slug: "fanhub-plus",
    name: "FanHub+",
    title: "FanHub+ — A Fandom Universe Portal",
    kind: "Community platform",
    summary: "Eight fandom channels, accounts, a content explorer and a merch store.",
    description:
      "A fandom portal covering eight communities — anime, gaming, movies, TV, K-Pop, comics, manga and cosplay. Verified accounts, a content explorer that filters on everything at once, character files, events, and a merch store with a full checkout flow.",
    year: "2026",
    featured: true,
    panel: "ink",
    imageSrc: "/images/FanHub1.png",
    liveUrl: "https://fanhub-plus.vercel.app",
    repoUrl: "https://github.com/Laiqa-Islam/FanHub-Plus",
    tech: ["Next.js 16", "TypeScript", "MongoDB", "Tailwind CSS", "GSAP"],

    overview:
      "FanHub+ started from a formal spec and grew into a full portal: eight channels with their own neon colour, a content explorer that filters by channel, format, genre and year at the same time, character files, events, and a merch store with a persistent cart and a complete checkout interface. Under the hood it's Next.js 16 with Server Actions, MongoDB through Mongoose, Cloudinary for uploads and Mailtrap for verification and reset email. Afterwards I ported the whole thing to a classic React + Express split without changing a single page.",

    goals: [
      "Give eight very different communities one home without them blurring together",
      "Make authentication genuinely safe, not just present",
      "Let heavy motion run without ever hiding content",
      "Let visitors browse freely and keep personal features behind an account",
    ],

    pipeline: [
      { label: "Gate", text: "proxy.ts reads the signed session cookie — no database call" },
      { label: "Authorise", text: "A data access layer runs the real checks next to the data" },
      { label: "Store", text: "MongoDB Atlas through Mongoose, media on Cloudinary" },
      { label: "Render", text: "Server Components stream each per-user page" },
    ],

    keyFeatures: [
      {
        title: "Sessions done properly",
        description:
          "Signed JWTs in httpOnly cookies, bcrypt at cost 12, and verification and reset tokens stored only as SHA-256 hashes so a leaked dump can't be replayed.",
      },
      {
        title: "No account enumeration",
        description:
          "Login, forgot-password and resend-verification all answer the same way whether or not the email exists.",
      },
      {
        title: "Next 16's proxy, used the right way",
        description:
          "proxy.ts only does optimistic cookie checks; real authorisation lives in a data access layer beside the data.",
      },
      {
        title: "Motion that can't hide content",
        description:
          "Every entrance animation has a timer failsafe, and reduced motion — system or in-app — switches them off entirely.",
      },
      {
        title: "Theme and text-size preferences",
        description:
          "Light, dark or system, plus 90–130% text scaling, resolved before first paint so nothing flashes on navigation.",
      },
      {
        title: "Ported to React + Express",
        description:
          "The same app rebuilt as a Vite SPA on an Express 5 API, sharing the same database and models.",
      },
    ],

    outcome:
      "It pulls a lot into one place: a security model I can explain line by line, a design system with real personality, and motion that never gets in the way of reading. Porting it to a second architecture afterwards showed me exactly where the framework ends and my own code begins.",

    toolsUsed: ["Next.js 16", "React 19", "TypeScript", "MongoDB", "Mongoose", "Cloudinary", "GSAP", "Tailwind CSS"],

    screenshots: ["/images/FanHub1.png", "/images/FanHub2.png", "/images/FanHub3.png"],
  },

  {
    slug: "yg-cornhole",
    name: "YG Cornhole",
    title: "YG Cornhole — Competition Gear Storefront",
    kind: "E-commerce",
    summary: "Competition bags, custom boards and team gear, with PayPal checkout.",
    description:
      "A storefront for a competition cornhole brand — ACL-approved bags, custom boards and apparel — with product pages, a cart, and PayPal checkout handled entirely on the server.",
    year: "2026",
    featured: true,
    panel: "stone",
    imageSrc: "/images/Cornhole1.png",
    liveUrl: "https://yg-cornhole.vercel.app",
    repoUrl: "https://github.com/Laiqa-Islam/yg-cornhole",
    tech: ["Next.js", "TypeScript", "PayPal Orders v2", "GSAP", "Lenis"],

    overview:
      "A store for players who obsess over their gear: bags rated by their fast and control sides, custom boards, shirts and full-print team kits. The interesting part is the money path. The cart offers PayPal and PayPal-hosted card fields, and orders are created and captured through server-only route handlers using PayPal Orders v2. Prices are recalculated from the product catalogue on the server, so whatever total the browser sends is never trusted.",

    pipeline: [
      { label: "Cart", text: "The browser sends product IDs and quantities" },
      { label: "Price", text: "A route handler recalculates every total from the catalogue" },
      { label: "Order", text: "PayPal Orders v2 creates the order server-side" },
      { label: "Capture", text: "Payment is captured — the client secret never leaves the server" },
    ],

    keyFeatures: [
      {
        title: "Server-trusted totals",
        description:
          "Every price is recalculated on the server from the catalogue; the total the browser sends is ignored.",
      },
      {
        title: "PayPal and card fields",
        description:
          "PayPal buttons plus PayPal-hosted debit and credit card fields, so card data never touches the site.",
      },
      {
        title: "Sandbox to live with one switch",
        description:
          "An environment flag moves between sandbox and live credentials, and the client secret is never exposed.",
      },
      {
        title: "Specs at a glance",
        description:
          "Bags show fast-side and control-side ratings so players can compare them in a second.",
      },
      {
        title: "Motion with weight",
        description:
          "GSAP and Lenis give the catalogue a heavy, sporty feel without slowing browsing down.",
      },
    ],

    toolsUsed: ["Next.js", "TypeScript", "PayPal Orders v2", "GSAP", "Lenis"],

    screenshots: [
      "/images/Cornhole1.png",
      "/images/Cornhole2.png",
      "/images/Cornhole3.png",
      "/images/Cornhole4.png",
    ],
  },

  {
    slug: "eventsphere",
    name: "EventSphere",
    title: "EventSphere — College Event Platform",
    kind: "Full-stack platform",
    summary: "Campus events end to end: registration, QR check-in, reviews, certificates.",
    description:
      "A college event information system built as a full MERN application. Students browse and register for events, organizers run them with QR check-in, and admins approve and oversee the whole platform.",
    year: "2026",
    panel: "paper",
    sketch: "events",
    repoUrl: "https://github.com/Laiqa-Islam/EventSphere-Techwiz",
    tech: ["React 19", "Express 5", "MongoDB", "TypeScript", "Cloudinary"],

    overview:
      "EventSphere is a monorepo with three parts: a React 19 + Vite client, an Express 5 API, and a shared package of enums, DTOs and the API envelope that both sides import, so the contract can't drift. Students register and get a QR pass; organizers run check-in, which only opens around the event itself; attendance unlocks reviews and certificates, generated as PDFs on demand behind an ownership and fee check. It deploys to Vercel as a serverless function that re-exports the same Express app.",

    pipeline: [
      { label: "Client", text: "React 19 + Vite SPA with typed hooks" },
      { label: "API", text: "Express 5 — auth, roles, validation, rate limiting" },
      { label: "Serialize", text: "Every document becomes a DTO before it leaves" },
      { label: "Store", text: "MongoDB Atlas, with banners and galleries on Cloudinary" },
    ],

    keyFeatures: [
      {
        title: "Three roles, one app",
        description:
          "Participants, organizers and admins each get their own flows, enforced by role-based middleware on the API.",
      },
      {
        title: "QR check-in that opens on time",
        description:
          "Organizers can only run check-in around the event itself; participants carry their pass as a QR code.",
      },
      {
        title: "Certificates on demand",
        description:
          "Attendance unlocks certificates, rendered as PDFs on request after ownership and fee checks.",
      },
      {
        title: "A shared contract",
        description:
          "One package of enums, DTOs and the API envelope is imported by both client and server.",
      },
      {
        title: "Nothing leaks",
        description:
          "Serializers turn every database document into a DTO before it leaves the API.",
      },
      {
        title: "Runs without a database",
        description:
          "A dev mode boots against an in-memory MongoDB, seeded automatically, so anyone can try the whole app.",
      },
    ],

    toolsUsed: ["React 19", "Vite", "TypeScript", "Express 5", "Mongoose", "MongoDB Atlas", "Cloudinary", "shadcn/ui"],
  },

  {
    slug: "mood-based-music-generator",
    name: "MoodBeat",
    kind: "Music tool",
    summary: "A browser studio: play, pick a mood, mix it, add vocals, export a song.",
    year: "2025",
    panel: "graphite",
    repoUrl: "https://github.com/Laiqa-Islam/MoodBeat",
    title: "Mood-Based Music Generator",
    description:
      "A browser-based music tool for people who love music but would never open something like Ableton. You play instruments with your keyboard, pick a mood, mix it, add vocals, and walk away with an actual song — no studio, no manual, no music degree required.",

    imageSrc: "/images/Moodbeat1.png",

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

    screenshots: [
      "/images/MoodBeat2.png",
      "/images/MoodBeat3.png",
      "/images/MoodBeat4.png",
      "/images/MoodBeat5.png",
      "/images/MoodBeat6.png",
      "/images/MoodBeat7.png",
      "/images/Moodbeat8.png",
      "/images/Moodbeat9.png",
    ],
  },

  {
    slug: "furshield",
    name: "FurShield",
    title: "FurShield — Pet Care Platform",
    kind: "Full-stack platform",
    summary: "Owners, vets and shelters in one place — records, appointments, adoption.",
    description:
      "A full-stack pet care platform for pet owners, veterinarians and animal shelters: pet profiles, medical timelines, document uploads, appointments, adoption listings, daily shelter care and a product catalogue.",
    year: "2026",
    panel: "accent",
    imageSrc: "/images/FurShield1.png",
    liveUrl: "https://fur-shield-chi.vercel.app",
    repoUrl: "https://github.com/Laiqa-Islam/PetCare",
    tech: ["Next.js 16", "TypeScript", "MongoDB", "Cloudinary", "Tailwind CSS"],

    overview:
      "FurShield centralises a pet's whole life in one app with three very different users. Owners keep profiles, medical timelines and documents like X-rays, lab reports and insurance papers; vets see appointments and write treatment notes; shelters list animals for adoption, handle interest forms and track daily care. Uploads go through Cloudinary with signed requests, sessions are signed HTTP-only JWTs, and an OpenStreetMap view handles location.",

    keyFeatures: [
      {
        title: "Three roles",
        description:
          "Owners, veterinarians and shelters each get dashboards shaped around the work they actually do.",
      },
      {
        title: "Medical timelines",
        description:
          "Visits, treatment notes and documents land on each pet's timeline in order.",
      },
      {
        title: "Signed uploads",
        description:
          "Galleries, certificates, X-rays and lab reports go to Cloudinary through signed uploads.",
      },
      {
        title: "Adoption flow",
        description:
          "Shelters publish listings and receive structured interest forms from would-be owners.",
      },
      {
        title: "Repeatable test data",
        description:
          "A seed script creates owners, specialist vets, shelters and an admin so every flow can be tried.",
      },
    ],

    toolsUsed: ["Next.js 16", "React 19", "TypeScript", "MongoDB", "Mongoose", "Cloudinary", "jose", "Zod"],

    screenshots: [
      "/images/FurShield1.png",
      "/images/FurShield2.png",
      "/images/FurShield3.png",
      "/images/FurShield4.png",
    ],
  },

  {
    slug: "york-publishers-dashboard",
    name: "York",
    kind: "Internal dashboard",
    summary: "Admin-run team messaging with inline media and timed deletion.",
    panel: "stone",
    title: "York Publishers Dashboard",
    description:
      "An internal chat and dashboard for a publishing company. Full messaging — send, edit, delete on a timer — plus media sharing, but locked down so only admins run conversations. No random DMs flying around between staff, and that was the point.",
    imageSrc: "/images/YorkPublishers5.png",
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
    screenshots: [
      "/images/YorkPublishers1.png",
      "/images/YorkPublishers2.png",
      "/images/YorkPublishers3.png",
      "/images/YorkPublishers4.png",
    ],
  },


  {
    slug: "business-websites",
    name: "Business sites",
    kind: "Marketing sites",
    summary: "Three business sites hand-coded from an empty file — no templates.",
    panel: "paper",
    title: "Business Websites",
    description:
      "Three business sites — InkCraft Marketing Solutions, Amazon Publishing Experts, and AlphaVerse Digitals — hand-coded from an empty file. No templates, no page builder, fully responsive on everything.",
    imageSrc: "/images/AlphaverseDigitals.png",
    tech: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      "/images/InkCraftMarketingSolutions.png",
      "/images/AmazonPublishingExperts.png"
    ]
  },
  {
    slug: "wordpress-projects",
    name: "WordPress",
    kind: "CMS builds",
    summary: "Business and blog sites — custom themes, Elementor where it helped.",
    panel: "stone",
    title: "WordPress Projects",
    description:
      "A run of WordPress builds — business sites and blog-style informational ones. Custom themes where it made sense, Elementor where it made the client's life easier.",
    imageSrc: "/images/Wordpress4.png",
    tech: ["WordPress", "Elementor", "Custom Themes"],
    screenshots: [
      "/images/Wordpress2.png",
      "/images/Wordpress3.png",
      "/images/Wordpress4.png",
    ],
  },
];
