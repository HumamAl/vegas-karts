import type { Challenge } from "@/lib/types";

export interface ExecutiveSummaryData {
  commonApproach: string;
  differentApproach: string;
  accentWord?: string;
}

export const executiveSummary: ExecutiveSummaryData = {
  commonApproach:
    "Most developers treat OTA bookings, loyalty programs, and membership tiers as three separate feature requests — and wire them up individually with minimal coordination logic, leaving gaps that cause double-bookings, missed achievement triggers, and manual reconciliation every week.",
  differentApproach:
    "I'd build a unified event-driven sync layer first, so OTA bookings, achievement checks, and membership validations all run through the same pipeline — eliminating drift by design, not by polling.",
  accentWord: "event-driven sync layer",
};

export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "Multi-OTA Booking Synchronization",
    description:
      "Viator, Airbnb Experiences, and FareHarbor each expose different availability APIs on different cadences. Without a real-time sync engine, inventory drift causes double-bookings and reactive cancellations — a direct hit to reputation on all three platforms.",
    visualizationType: "architecture",
    outcome:
      "Could eliminate double-booking conflicts and inventory drift across 3+ OTA channels in real-time — protecting Vegas Karts' ratings on Viator and Airbnb Experiences simultaneously.",
  },
  {
    id: "challenge-2",
    title: "Gamification Achievement Engine",
    description:
      "Achievements that span ride stats, referral counts, and membership tier milestones require a cross-domain trigger system. Implementing them as isolated checks per feature leads to missing unlocks, stale badges, and riders who stop caring after their first session.",
    visualizationType: "flow",
    outcome:
      "Could drive post-ride engagement and referral loops — turning every guest into a repeat touchpoint by making the achievement unlock feel instant and deserved.",
  },
  {
    id: "challenge-3",
    title: "Insider Pass Membership Automation",
    description:
      "Partner discount validation currently requires manual cross-checking of membership tier, partner offer expiry, and redemption limits. This creates staff overhead and a redemption experience slow enough that most guests give up — leaving the partnership value invisible.",
    visualizationType: "metrics",
    outcome:
      "Could reduce manual membership management overhead while increasing partner redemption rates from near-zero to trackable benchmarks — making the Insider Pass a measurable revenue driver.",
  },
];
