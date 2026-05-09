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

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  links?: Link[];
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

export type AwardGroup = {
  category: string;
  items: string[];
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
  projects: ProjectItem[];
  traction: {
    title: string;
    description: string;
    metrics: Metric[];
  };
  events: EventItem[];
  awards: AwardGroup[];
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
    striveai: string;
    resumeHref: string;
  };
};

const english: ProfileContent = {
  seo: {
    title: "Ramazan Akhmet - 16 y.o. Founder building AI & Startup Ecosystems",
    description:
      "Ramazan Akhmet is a 16-year-old founder from Kazakhstan building StriveAI, Society Association, KORSO, and AI robotics projects across startup ecosystems, agritech, and youth innovation.",
    keywords: [
      "Ramazan Akhmet",
      "Kazakhstan founder",
      "StriveAI",
      "Society Association",
      "KORSO",
      "AI robotics",
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
      "I build at the intersection of AI, robotics, agritech, and youth entrepreneurship. Founder & Product Lead at StriveAI, Founder & CEO of Society Association, and former Co-founder & Head of Strategy at Project KORSO.",
    location: "Kazakhstan",
    positioning: "16 y.o. Founder | AI & Startup Ecosystems | Raised $10K+",
  },
  primaryLinks: [
    { label: "Email", href: "mailto:ramazan2909.com@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ramazan-a-97a686334/" },
    { label: "Try StriveAI", href: "https://striveai-x7m4.onrender.com" },
  ],
  metrics: [
    { value: "$10K+ / 4M+ KZT", label: "funding raised or attracted" },
    { value: "53", label: "team members led" },
    { value: "5+", label: "large-scale events organized" },
    { value: "1,353+", label: "participants reached" },
    { value: "50+", label: "founder / user meetings for StriveAI" },
    { value: "69", label: "farmers and livestock owners researched for KORSO" },
    { value: "6,700+", label: "images in the YOLO livestock dataset" },
    { value: "~96%", label: "KORSO detection accuracy" },
    { value: "4", label: "prototypes launched on real farms" },
  ],
  about: {
    title: "About",
    description: [
      "Ramazan Akhmet is a 16-year-old founder and product builder from Kazakhstan working across AI, robotics, agritech, and startup communities. He has built Society Association into a 53-member student innovation ecosystem, attracted $10K+ / 4M+ KZT in investment and prize funding, and reached 1,353+ participants through large-scale startup and technology events.",
      "He is currently building StriveAI, an AI execution platform for early founders, validated through 50+ founder and user meetings. His previous work includes Project KORSO, an autonomous AI-powered drone platform for sustainable agriculture, and AI robotics projects with Fizmat Robotics / FIRST.",
    ],
  },
  now: {
    title: "Currently building StriveAI",
    description:
      "StriveAI is an AI execution platform for early founders. It turns goals into milestone-based roadmaps, daily actions, progress visibility, and real-time plan adaptation.",
    bullets: [
      "Building an AI execution platform for early founders.",
      "Validated the problem through 50+ founder/user meetings and meetups.",
      "Focused on scattered planning, weak accountability, and inconsistent execution.",
      "Led product discovery, MVP iteration, pitch narrative, early feedback loops, and roadmap prioritization.",
    ],
  },
  experience: [
    {
      role: "Founder & Chief Executive Officer",
      org: "StriveAI",
      date: "2026 – Present",
      location: "Kazakhstan",
      summary:
        "Building an AI execution platform for early founders that turns goals into milestone-based roadmaps, daily actions, progress visibility, and real-time plan adaptation.",
      bullets: [
        "Conducted 50+ founder/user meetings and meetups to validate execution problems.",
        "Led product discovery, MVP iteration, pitch narrative, early feedback loops, and roadmap prioritization.",
        "Focused on helping early founders move from planning to consistent execution.",
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
  projects: [
    {
      title: "StriveAI",
      category: "AI / Founder Tools / Productivity",
      description:
        "An AI execution platform for early founders that turns goals into milestone-based roadmaps, daily actions, progress visibility, and real-time plan adaptation.",
      highlights: [
        "50+ founder/user meetings",
        "MVP iteration and early feedback loops",
        "Built around accountability, execution, and adaptive planning",
      ],
      links: [
        { label: "Open StriveAI", href: "https://striveai-x7m4.onrender.com" },
      ],
    },
    {
      title: "Society Association",
      category: "Startup Ecosystem / Youth Innovation",
      description:
        "An invitation-style student innovation ecosystem connecting high school students with startups, technology, project-based learning, and real startup ecosystem actors.",
      highlights: [
        "53 active members",
        "5 departments",
        "5 large-scale events in first 4 months",
        "1,353+ participants reached",
        "4M+ KZT attracted in funding and prize pools",
      ],
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/society.association?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      ],
    },
    {
      title: "Astana Innovation Forum",
      category: "Startup Forum / Central Asia",
      description:
        "Central Asian youth startup forum connecting young founders, investors, ecosystem leaders, and technology organizations.",
      highlights: [
        "560 participants",
        "130 teams from Central Asia",
        "105 finalists from 25 teams",
        "1,000,000 KZT prize fund",
      ],
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/astanainnovationforum?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      ],
    },
    {
      title: "Project KORSO",
      category: "AI / Agritech / Robotics",
      description:
        "Autonomous AI-powered drone platform for pasture monitoring, livestock tracking, and early detection of land degradation.",
      highlights: [
        "69 farmers and livestock owners researched",
        "4 prototypes launched on real farms",
        "1.5M KZT total prize funding",
        "YOLO livestock detection trained on 6,700+ images",
        "Approximately 96% detection accuracy",
        "GPS tracking, NDVI analysis, autonomous route planning",
      ],
    },
    {
      title: "Fizmat Robotics / FIRST Autonomous Boat",
      category: "Robotics / Computer Vision / Environment",
      description:
        "AI-powered autonomous boat designed to collect floating waste from water surfaces.",
      highlights: [
        "Robotics prototyping",
        "Autonomous navigation",
        "YOLO-based waste recognition",
        "Camera-based perception and model testing",
      ],
      links: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/fizmat.robotics.fll?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        },
      ],
    },
    {
      title: "Skylink Control Cubesat",
      category: "Space Engineering / Communications",
      description:
        "Satellite system concept for uninterrupted drone connectivity.",
      highlights: [
        "Lightweight nylon carbon body",
        "Built for drone communication use cases",
        "1st place at Kazrockets Satellite Design Tournament 2025",
        "1st place at World Space Olympiad: Investors",
      ],
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
  awards: [
    {
      category: "KORSO, AI, Startups",
      items: [
        "AICA Awards named after Al-Khwarizmi — nomination: Best Use of AI in Agriculture",
        "Fibonacci International Olympiad Astana — 3rd place",
        "WRO Regional Future Innovators — 3rd place",
        "Alga Pitch Day — 1st place, 150,000 KZT",
        "Next Startup 2025 — 1st place, 100,000 KZT",
        "PRO.NRG.FEST ML Challenge 2025 — 1st place",
        "National Startup Contest Finalists — 2nd place, 150,000 KZT",
        "SteppeRise IT StartUp Battle — 2nd place, 100,000 KZT",
      ],
    },
    {
      category: "Robotics & Engineering",
      items: [
        "First Lego League Central Asia — Perseverance Award",
        "Kazrockets Satellite Design Tournament 2025 — 1st place, 500,000 KZT; project: Skylink Control Cubesat",
        "World Space Olympiad: Investors — 1st place, 50,000 KZT; project: Skylink Control Cubesat",
      ],
    },
    {
      category: "Recognition",
      items: ["Pride of Republican Physics and Mathematics School 2025"],
    },
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
      "Use this link when you want the fastest read on Ramazan: who he is, what he has built, and why he is credible.",
    email: "ramazan2909.com@gmail.com",
    linkedin: "https://www.linkedin.com/in/ramazan-a-97a686334/",
    striveai: "https://striveai-x7m4.onrender.com",
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
