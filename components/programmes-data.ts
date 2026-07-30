import {
  Building2,
  Calendar,
  Globe,
  GraduationCap,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Programme = {
  id: string;
  title: string;
  /** Optional — only some programmes have a public landing page. */
  url?: string;
  collaborators: string[];
  /** Free text; comma/newline separated lists get sorted at render time. */
  targetCountries: string;
  highlights: string[];
  testimonial: string | null;
  icon: LucideIcon;
};

export const programmes: Programme[] = [
  {
    id: "ai-ready-asean",
    title: "AI Ready ASEAN",
    url: "https://learn.aisingapore.org/ai-ready-asean/",
    collaborators: ["ASEAN Foundation", "Google.org"],
    targetCountries: "11 ASEAN Member States",
    highlights: [
      "Reach 100,000+ youths, educators, parents, and underserved communities across Singapore and ASEAN",
      "Train 200 Master Trainers to scale AI education, reaching 6,000+ learners through downstream training",
      "Convene national policy dialogues on AI in Education and AI for Youth",
      "Deliver the AI Ready ASEAN Youth Challenge across all 11 ASEAN Member States",
    ],
    testimonial:
      "The training was engaging and illuminating. The trainers broke down complex concepts into simple, digestible steps. It was a real 'aha' moment — realising AI isn't a distant concept, but something we can apply in everyday life.",
    icon: Globe,
  },
  {
    id: "ai-opportunity-fund",
    title: "AI Opportunity Fund: Asia-Pacific",
    url: "https://aifundamentals.aisingapore.org/",
    collaborators: [
      "Asian Development Bank",
      "Asian Venture Philanthropy Network",
      "Google.org",
    ],
    targetCountries:
      "Bangladesh, Malaysia, Pakistan, Philippines, Singapore, Sri Lanka",
    highlights: [
      "Phase 1: Co-develop regional AI curriculum, enabling scalable AI literacy across diverse markets, develop AI training resources, toolkits, and structured learning pathways, train 50+ trainers across 5 countries to cascade AI literacy within their communities",
      "Phase 2: Reach 10,000+ PMETs, vocational, and university learners across 3 countries",
    ],
    testimonial:
      "What I liked most about this is really the clear programme design and excellent (and patient) facilitation by AI Singapore. They have clearly put in a lot of thought into this programme and have really made it very informative, organised, and quite immersive and practical.",
    icon: Users,
  },
  {
    id: "ai-for-good-educators",
    title: "AI for Good (Educators)",
    url: "https://aisingapore.org/talent/ai-ready-asean/",
    collaborators: ["Meta"],
    targetCountries: "Malaysia, Philippines, Thailand",
    highlights: [
      "Design and customise training curriculum for educators across three countries",
      "Conduct inbound Train-the-Trainers in Singapore for 100 educators",
      "Reach 10,000+ community members across respective countries",
      "Convene AI for Good (Educator) Conference in Malaysia",
    ],
    testimonial: null,
    icon: GraduationCap,
  },
  {
    id: "ai-for-good-youth",
    title: "AI for Good (Youth)",
    collaborators: ["Singapore Youth AI"],
    targetCountries: "Singapore",
    highlights: [
      "Equip youth leaders with AI literacy and pedagogy to drive peer-led initiatives",
      "Expand access to AI learning in secondary schools through youth-led outreach",
      "Reach 2,000+ secondary school students across Singapore",
    ],
    testimonial:
      "The hands-on activities and missions made the programme really fun and engaging, and helped us apply what we learned right away. It made the learning more meaningful and gave us the confidence to use AI in real-world situations.",
    icon: Sparkles,
  },
  {
    id: "ai-for-good-community",
    title: "AI for Good (Community)",
    collaborators: ["Micron Foundation"],
    targetCountries: "Singapore",
    highlights: [
      "Equip Social Service Agencies to adapt AI literacy curricula for women, seniors, and underserved communities",
      "Build capacity for trainers to localise and deliver inclusive AI education",
      "Scale community-based AI literacy through partner organisations",
    ],
    testimonial:
      "The programme helped us translate AI concepts into something accessible for our community beneficiaries. It made implementation much more practical and meaningful.",
    icon: Users,
  },
  {
    id: "ai-for-good-festival",
    title: "AI for Good Festival",
    collaborators: ["Amazon Web Services", "Micron Technology", "IMDA"],
    targetCountries: "Singapore",
    highlights: [
      "Reach 5,000+ youths through hands-on AI literacy and responsible AI learning",
      "Showcase youth-led AI innovations addressing real-world community challenges",
      "Mobilise government, industry, and community partners to scale AI education",
    ],
    testimonial:
      "By scaling these efforts nationwide, we aim to grow a purposeful, value-driven ecosystem where all Singaporeans can confidently shape our AI-enabled future and champion technology for the greater societal good.",
    icon: Calendar,
  },
];

export type UpcomingProgramme = {
  title: string;
  description: string;
  targetCountry: string;
  collaborators: string[];
};

export const upcomingProgrammes: UpcomingProgramme[] = [
  {
    title: "AI for Good (Global)",
    description:
      "Partnering with UNDP to co-develop AI education initiatives that advance inclusive AI readiness and capacity-building across developing regions.",
    targetCountry: "2 ASEAN, 2 Caribbean, 2 Pacific Island countries",
    collaborators: ["United Nations Development Programme"],
  },
];

/** Re-exported so the section can render the "Key Collaborators" heading icon. */
export { Building2 };
