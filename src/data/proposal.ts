import type { Profile, PortfolioProject } from "@/lib/types";

export const profile: Profile = {
  name: "Humam",
  tagline:
    "Full-stack developer who ships MVPs fast — from concept to deployed product in days, not months.",
  bio: "I build MVPs and production apps that solve real operational problems — booking platforms, marketplace systems, API integrations, and gamified engagement tools. My approach: understand the experience you're selling, build something that reflects it, and ship it fast.",
  approach: [
    {
      title: "Understand the Experience",
      description:
        "Deep-dive into Vegas Karts' brand identity, circuit operations, and booking flow to understand what makes you different from every other go-kart track in Vegas.",
    },
    {
      title: "Build the Core",
      description:
        "Cinematic website with OTA-connected booking, membership system, and gamification engine — shipped in focused sprints with working code from day one.",
    },
    {
      title: "Launch & Integrate",
      description:
        "App store deployment, Viator / FareHarbor / Booking.com sync, Stripe payments, and analytics — all production-tested before go-live.",
    },
    {
      title: "Grow Together",
      description:
        "Ongoing development, new circuit launches, feature iterations, and performance optimisation as a long-term technical partner.",
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "AWS", "Firebase", "PostgreSQL"],
    },
    {
      name: "Integrations",
      skills: ["Stripe", "Viator API", "FareHarbor API", "Booking.com", "SendGrid"],
    },
    {
      name: "Infrastructure",
      skills: ["Vercel", "GitHub Actions", "App Store deployment", "Google Analytics"],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "creator-economy-app",
    title: "Creator Economy App",
    description:
      "Creator economy livestreaming platform with Stripe Connect payments — viewer tips, creator dashboards, and split-payment payouts.",
    outcome:
      "End-to-end payment flow from viewer tip to creator payout via Stripe Connect split payments",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe Connect"],
    relevance:
      "Payment integration architecture maps directly to your booking/commission model with Viator and FareHarbor",
  },
  {
    id: "lynt-marketplace",
    title: "Lynt Marketplace",
    description:
      "Digital marketplace platform with product listings, vendor management, and transaction tracking.",
    outcome:
      "Full marketplace architecture — vendor onboarding, listing management, and transaction tracking ready for production",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    relevance:
      "Marketplace architecture matches your OTA integration and partner discount system",
    liveUrl: "https://lynt-marketplace.vercel.app",
  },
  {
    id: "event-planner-saas",
    title: "Event Planner SaaS",
    description:
      "Full-stack event management platform with dashboard, CRUD operations, calendar integration, and attendee tracking.",
    outcome:
      "Calendar-driven event management with full CRUD, attendee tracking, and check-in workflows",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    relevance:
      "Calendar-based booking and check-in flow maps directly to your ride scheduling system",
  },
  {
    id: "ebay-pokemon-monitor",
    title: "eBay Pokemon Monitor",
    description:
      "eBay Browse API monitoring tool for Pokemon card listings with instant Discord alerts and price tracking.",
    outcome:
      "Real-time listing monitor with webhook-based Discord alerts and price trend tracking",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    relevance:
      "REST API and webhook patterns are the same architecture needed for Viator / FareHarbor / Booking.com OTA integrations",
    liveUrl: "https://ebay-pokemon-monitor.vercel.app",
  },
];
