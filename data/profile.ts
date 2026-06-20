export type Locale = "en" | "ru";

export type Metric = {
  value: string;
  label: string;
};

export type Stat = Metric;

export type Link = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  date: string;
  location: string;
  summary: string;
  bullets: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

// A single image slot. `src` is the expected path under /public. The
// <MediaSlot> component checks whether the file actually exists and either
// renders it or shows a styled "coming soon" placeholder — so dropping a
// correctly-named file into /public/images/... makes the photo appear with
// no code changes.
export type MediaSlot = {
  src?: string;
  alt: string;
  aspectRatio: string; // CSS aspect-ratio, e.g. "16/10", "3/2", "1/1"
  caption?: string;
};

// Award / recognition, shown as a compact badge (label = placement, detail = event).
export type Achievement = {
  label: string;
  detail: string;
};

export type RelatedProject = {
  title: string;
  oneLiner: string;
  bullets: string[];
  media: MediaSlot[];
};

// Unified shape used for every project card. No special cases per project.
export type ProjectCardItem = {
  title: string;
  role: string;
  period: string;
  oneLiner: string;
  achievements: Achievement[];
  metrics: Metric[];
  bullets: string[];
  media: MediaSlot[];
  links: Link[];
  related?: RelatedProject;
};

export type ListItem = {
  title: string;
  description: string;
};

export type EventItem = {
  title: string;
  details: string;
  stats: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProfileContent = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    name: string;
    headline: string;
    subheadline: string;
    location: string;
    positioning: string;
  };
  primaryLinks: Link[];
  metrics: Metric[];
  about: {
    title: string;
    description: string[];
  };
  now: {
    title: string;
    description: string;
    bullets: string[];
  };
  experience: ExperienceItem[];
  projectCards: ProjectCardItem[];
  traction: {
    title: string;
    description: string;
    metrics: Metric[];
  };
  events: EventItem[];
  recognition: Achievement[];
  recognitionMedia: MediaSlot[];
  skills: SkillGroup[];
  partners: string[];
  socialLinks: Link[];
  education: {
    school: string;
    date: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    linkedin: string;
    resumeHref: string;
  };
};

const english: ProfileContent = {
  seo: {
    title: "Ramazan Akhmet - 16 y.o. Founder building AI & Startup Ecosystems",
    description:
      "Ramazan Akhmet is a 16-year-old founder from Kazakhstan building Neuralese, Society Association, KORSO, and AI robotics projects across startup ecosystems, AI education, agritech, and youth innovation.",
    keywords: [
      "Ramazan Akhmet",
      "Kazakhstan founder",
      "Neuralese",
      "Society Association",
      "KORSO",
      "AI robotics",
      "AI education",
      "agritech",
      "youth entrepreneurship",
      "Central Asia startups",
      "FIZMAT",
      "startup ecosystem",
    ],
  },
  hero: {
    eyebrow: "Founder profile",
    name: "Ramazan Akhmet",
    headline: "16-year-old founder building AI products and startup ecosystems in Central Asia.",
    subheadline:
      "I build at the intersection of AI, education, agritech, and youth entrepreneurship. Co-Founder & COO at Neuralese, Founder & CEO of Society Association, and former Co-founder & Head of Strategy at Project KORSO.",
    location: "Kazakhstan",
    positioning: "16 y.o. Founder | AI & Startup Ecosystems | Raised $10K+",
  },
  primaryLinks: [
    { label: "Email", href: "mailto:ramazan2909.com@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ramazan-a-97a686334/" },
  ],
  metrics: [
    { value: "$10K+ / 4M+ KZT", label: "funding raised or attracted" },
    { value: "53", label: "team members led" },
    { value: "5+", label: "large-scale events organized" },
    { value: "1,353+", label: "participants reached" },
    { value: "2.6×", label: "AI understanding improvement (Neuralese independent testing)" },
    { value: "69", label: "farmers and livestock owners researched for KORSO" },
    { value: "6,700+", label: "images in the YOLO livestock dataset" },
    { value: "~96%", label: "KORSO detection accuracy" },
    { value: "4", label: "prototypes launched on real farms" },
  ],
  about: {
    title: "About",
    description: [
      "Ramazan Akhmet is a 16-year-old founder and product builder from Kazakhstan working across AI, robotics, agritech, and startup communities. He has built Society Association into a 53-member student innovation ecosystem, attracted $10K+ / 4M+ KZT in investment and prize funding, and reached 1,353+ participants through large-scale startup and technology events.",
      "He is currently co-founding Neuralese, a no-code platform where students learn AI by building it — designing and training real neural networks visually instead of watching tutorials. His previous work includes Project KORSO, an autonomous AI-powered drone platform for sustainable agriculture, and AI robotics projects with Fizmat Robotics / FIRST.",
    ],
  },
  now: {
    title: "Currently building Neuralese",
    description:
      "Neuralese is a no-code platform where students learn AI by building it — assembling datasets, designing neural networks visually, and testing models, instead of watching tutorials or writing code.",
    bullets: [
      "Co-founded Neuralese as COO alongside two CTOs (backend engineering and AI engineering).",
      "Leading operations, go-to-market strategy, and partnerships across three product tiers: Personal, School, and Network.",
      "Building an offline-capable version for rural schools without reliable internet access.",
      "Independent pedagogical testing shows a 2.6× improvement in AI understanding versus passive, video-based learning.",
    ],
  },
  experience: [
    {
      role: "Co-Founder & COO",
      org: "Neuralese",
      date: "2026 – Present",
      location: "Kazakhstan",
      summary:
        "Co-founded Neuralese, a no-code platform where students learn AI by building it — assembling datasets, designing neural networks visually, and testing models instead of watching tutorials.",
      bullets: [
        "Co-founded Neuralese alongside two CTOs (backend engineering and AI engineering); leading operations, go-to-market strategy, and partnerships.",
        "Product spans three tiers — Personal, School, and Network — with an offline-capable version built for rural schools without reliable internet access.",
        "Independent pedagogical testing shows a 2.6× improvement in AI understanding and skill development versus passive, video-based learning.",
        "Positioned against simplified black-box tools (e.g. Teachable Machine, ML Blocks) by letting students construct models layer-by-layer with real understanding.",
      ],
    },
    {
      role: "Founder & Chief Executive Officer",
      org: "Society Association",
      date: "September 2025 – Present",
      location: "Kazakhstan",
      summary:
        "Founded and led a student-driven startup and innovation community connecting motivated high school students with entrepreneurship, technology, and project-based learning.",
      bullets: [
        "Managed a 53-member team across 5 departments: marketing, operations, IT, finance, and events.",
        "Led strategy, partnerships, team structure, and event execution.",
        "Organized and supported 5 large-scale events in the first 4 months.",
        "Reached approximately 1,353 participants.",
        "Attracted 4M+ KZT / $10K+ in investment and prize funding.",
        "Built partnerships with Silkroad Innovation Hub, USTEM Foundation, IT Park Uzbekistan, Nazarbayev University, ISSAI, Alem Techfest, Master Education, and others.",
      ],
    },
    {
      role: "Co-founder & Head of Strategy",
      org: "Project KORSO",
      date: "March 2024 – September 2025",
      location: "Kazakhstan",
      summary:
        "Built KORSO, an autonomous AI-powered drone platform for sustainable agriculture, focused on pasture monitoring, livestock tracking, and early detection of land degradation.",
      bullets: [
        "Led product strategy, customer development, and go-to-market planning.",
        "Conducted research with 69 farmers and livestock owners.",
        "Launched 4 prototypes on real farms.",
        "Helped the project win 1.5M KZT in total prize funding.",
        "Contributed to autonomous drone navigation, GPS tracking, NDVI pasture analysis, and YOLO-based livestock detection.",
        "YOLO model trained on 6,700+ images with approximately 96% detection accuracy.",
      ],
    },
    {
      role: "Lead Product Engineer",
      org: "Fizmat Robotics #310107 / FIRST",
      date: "November 2024 – March 2025",
      location: "Kazakhstan",
      summary:
        "Developed an AI-powered autonomous boat designed to collect floating waste from water surfaces.",
      bullets: [
        "Worked on product concept, prototyping, and technical development.",
        "Combined robotics, computer vision, autonomous navigation, and YOLO-based waste recognition.",
        "Contributed to camera-based perception, data collection, model testing, and AI logic integration.",
        "Focused on a practical environmental solution for autonomous water pollution cleanup.",
      ],
    },
  ],
  projectCards: [
    {
      title: "Neuralese",
      role: "Co-Founder & COO",
      period: "2026 – Present",
      oneLiner:
        "A no-code platform where students learn AI by building real neural networks, visually.",
      achievements: [
        { label: "Gold Medal", detail: "InfoMatrix AI Project Competition (20+ countries)" },
        { label: "Special Award", detail: "Regeneron ISEF — International Science & Engineering Fair, USA" },
        { label: "Gold Medal", detail: "Republican Science & Engineering Project Competition (Kazakhstan)" },
      ],
      metrics: [
        { value: "2.6×", label: "improvement in AI understanding vs. passive learning" },
        { value: "85%", label: "gross margin across 3 product tiers" },
      ],
      bullets: [
        "Co-founded a 3-tier product (Personal / School / Network) — including a fully offline mode built for rural schools.",
        "Lead operations, GTM, and partnerships alongside two CTOs (backend & AI engineering).",
      ],
      media: [
        { src: "/images/logos/neuralese.svg", alt: "Neuralese logo", aspectRatio: "1/1", caption: "Neuralese" },
        { src: "/images/projects/neuralese-1.jpg", alt: "Neuralese product screenshot — visual model builder", aspectRatio: "16/10", caption: "Product — visual model builder" },
        { src: "/images/projects/neuralese-2.jpg", alt: "Neuralese product screenshot — dataset and training", aspectRatio: "16/10", caption: "Product — datasets & training" },
      ],
      links: [],
    },
    {
      title: "Society Association",
      role: "Founder & CEO",
      period: "September 2025 – Present",
      oneLiner:
        "A student-led innovation community connecting high schoolers with entrepreneurship, tech, and project-based learning.",
      achievements: [],
      metrics: [
        { value: "53", label: "active members across 5 departments" },
        { value: "1,353+", label: "participants reached" },
        { value: "4M+ ₸", label: "investment & prize funding raised" },
        { value: "5", label: "large-scale events in 4 months" },
      ],
      bullets: [
        "Led strategy, partnerships, and team structure across marketing, operations, IT, finance, and events.",
        "Partnered with Silkroad Innovation Hub, Nazarbayev University, ISSAI, IT Park Uzbekistan, Alem Techfest, and others.",
      ],
      media: [
        { src: "/images/logos/society.svg", alt: "Society Association logo", aspectRatio: "1/1", caption: "Society Association" },
        { src: "/images/events/brojectum-birlik.jpg", alt: "Brojectum x Birlik sports hackathon", aspectRatio: "3/2", caption: "Brojectum x Birlik — 100+ participants, 100,000 ₸ prize pool" },
        { src: "/images/events/astana-innovation-forum.jpg", alt: "Astana Innovation Forum", aspectRatio: "3/2", caption: "Astana Innovation Forum — 560 participants, 130 teams, 1,000,000 ₸ prize pool" },
      ],
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/society.association?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      ],
    },
    {
      title: "Project KORSO",
      role: "Co-Founder & Head of Strategy",
      period: "March 2024 – September 2025",
      oneLiner:
        "An autonomous AI-powered drone platform for sustainable agriculture — pasture monitoring, livestock tracking, early land degradation detection.",
      achievements: [
        { label: "1st place", detail: "PRO.NRG.FEST ML Challenge 2025" },
        { label: "1st place", detail: "Alga Pitch Day" },
        { label: "1st place", detail: "Next Startup 2025" },
        { label: "2nd place", detail: "National Startup Contest" },
        { label: "2nd place", detail: "SteppeRise IT StartUp Battle" },
        { label: "Nominee", detail: "Best Use of AI in Agriculture — AICA Awards" },
      ],
      metrics: [
        { value: "69", label: "farmers / livestock owners surveyed in customer research" },
        { value: "4", label: "real farms running pilots" },
      ],
      bullets: [
        "Led product strategy, customer development, and go-to-market planning.",
        "Validated through direct field research across pasture regions with varying conditions.",
      ],
      media: [
        { src: "/images/logos/korso.svg", alt: "KORSO / ARA logo", aspectRatio: "1/1", caption: "KORSO" },
        { src: "/images/projects/korso-drone-1.jpg", alt: "KORSO autonomous drone on a real farm", aspectRatio: "3/2", caption: "KORSO drone — field pilot" },
      ],
      links: [],
      related: {
        title: "Skylink Control Cubesat",
        oneLiner:
          "A satellite system for uninterrupted drone connectivity — nylon-carbon body, custom data-transfer protocol (ARDP).",
        bullets: [
          "Built to extend KORSO's drone communication range without dependency on local internet infrastructure.",
        ],
        media: [
          { src: "/images/projects/skylink-cubesat-1.jpg", alt: "Skylink Control Cubesat render", aspectRatio: "16/10", caption: "Skylink Control Cubesat — render" },
        ],
      },
    },
  ],
  traction: {
    title: "Traction & metrics",
    description:
      "A quick scan of the scale behind the profile. These are the signals that matter to accelerators and ecosystem operators.",
    metrics: [
      { value: "53", label: "team members in Society Association" },
      { value: "5", label: "departments led" },
      { value: "560", label: "participants at Astana Innovation Forum" },
      { value: "130", label: "teams from Central Asia at the forum" },
      { value: "105", label: "forum finalists from 25 teams" },
      { value: "20", label: "teams at NSPM FIRST Scrimmage 2026" },
      { value: "353", label: "participants at GenerativeX 2026" },
      { value: "70", label: "teams at World Space Olympiad" },
    ],
  },
  events: [
    {
      title: "Brojectum x Birlik",
      details: "Sports hackathon at FIZMAT",
      stats: ["100+ participants", "10 finalist teams", "100,000 KZT prize fund"],
    },
    {
      title: "Astana Innovation Forum",
      details: "Youth startup forum in Astana",
      stats: ["560 participants", "130 teams from Central Asia", "1,000,000 KZT prize fund"],
    },
    {
      title: "NSPM FIRST Scrimmage 2026",
      details: "Robotics tournament at FIZMAT",
      stats: ["20 teams", "250,000 KZT prize fund", "FIRST judges"],
    },
    {
      title: "GenerativeX 2026",
      details: "Technology event at Nazarbayev University",
      stats: ["353 participants", "120 teams", "500,000 KZT prize fund"],
    },
    {
      title: "World Space Olympiad",
      details: "Held at EXPO as part of Alem Techfest",
      stats: ["70 teams", "200-250 participants", "1,000,000 KZT prize fund"],
    },
  ],
  recognition: [
    { label: "1st place", detail: "Kazrockets Satellite Design Tournament 2025" },
    { label: "1st place", detail: "World Space Olympiad: Investors" },
    { label: "3rd place", detail: "Fibonacci International Olympiad Astana" },
    { label: "3rd place", detail: "WRO Regional Future Innovators" },
    { label: "Perseverance Award", detail: "First Lego League Central Asia" },
    { label: "Recognition", detail: "Pride of Republican Physics & Mathematics School 2025" },
  ],
  recognitionMedia: [
    { src: "/images/events/generativex-2026.jpg", alt: "GenerativeX 2026 at Nazarbayev University", aspectRatio: "3/2", caption: "GenerativeX 2026" },
    { src: "/images/events/world-space-olympiad.jpg", alt: "World Space Olympiad at EXPO", aspectRatio: "3/2", caption: "World Space Olympiad" },
    { src: "/images/events/nspm-first-scrimmage.jpg", alt: "NSPM FIRST Scrimmage 2026", aspectRatio: "3/2", caption: "NSPM FIRST Scrimmage 2026" },
  ],
  skills: [
    {
      category: "Product",
      items: [
        "Product strategy",
        "Founder/user discovery",
        "Go-to-market planning",
        "Pitch decks & storytelling",
      ],
    },
    {
      category: "Technical",
      items: [
        "AI product development",
        "Computer vision / YOLO",
        "Robotics prototyping",
        "MVP iteration",
      ],
    },
    {
      category: "Operator",
      items: [
        "Startup partnerships",
        "Event operations",
        "Team leadership",
        "Community building",
      ],
    },
    {
      category: "Languages",
      items: ["Kazakh — Native or Bilingual", "Russian — Full Professional", "English — Professional"],
    },
  ],
  partners: [
    "Silkroad Innovation Hub",
    "USTEM Foundation",
    "IT Park Uzbekistan",
    "Nazarbayev University",
    "ISSAI",
    "Alem Techfest",
    "Master Education",
    "KazDream",
    "HTP Kyrgyzstan",
    "Khan Tengri Capital",
    "Spectrum International School",
    "FIRST",
    "FIZMAT",
  ],
  socialLinks: [
    {
      label: "Society Association Instagram",
      href: "https://www.instagram.com/society.association?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Astana Innovation Forum Instagram",
      href: "https://www.instagram.com/astanainnovationforum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Fizmat Robotics Instagram",
      href: "https://www.instagram.com/fizmat.robotics.fll?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ],
  education: {
    school: "National School of Physics & Math / FIZMAT",
    date: "2015 – 2027",
  },
  contact: {
    title: "Let's connect",
    description:
      "Fastest way to see what I'm building and how to reach me — email me directly or grab my resume.",
    email: "ramazan2909.com@gmail.com",
    linkedin: "https://www.linkedin.com/in/ramazan-a-97a686334/",
    resumeHref: "/Ramazan-Akhmet-Resume.pdf",
  },
};

const russian: ProfileContent = {
  ...english,
};

export const profileByLocale: Record<Locale, ProfileContent> = {
  en: english,
  ru: russian,
};

export const defaultLocale: Locale = "en";

export function getProfile(locale: Locale = defaultLocale) {
  return profileByLocale[locale] ?? profileByLocale.en;
}
