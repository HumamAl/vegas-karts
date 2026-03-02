import type { LucideIcon } from "lucide-react";

// Sidebar navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Challenge visualization types
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline"
  | "dual-kpi"
  | "tech-stack"
  | "decision-flow";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
  outcome?: string;
}

// Proposal types
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
  outcome?: string;
  liveUrl?: string;
}

// Screen definition for frame-based demo formats
export interface DemoScreen {
  id: string;
  label: string;
  icon?: LucideIcon;
  href: string;
}

// Conversion element variant types
export type ConversionVariant = "sidebar" | "inline" | "floating" | "banner";

// ─────────────────────────────────────────────────────────────────
// Vegas Karts Domain Types
// ─────────────────────────────────────────────────────────────────

export type CircuitDifficulty = "Beginner" | "Intermediate" | "Expert";

export interface Circuit {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  /** Distance in miles */
  distance: number;
  /** Duration in minutes */
  duration: number;
  /** Top speed in mph */
  topSpeed: number;
  features: string[];
  imageUrl: string;
  difficulty: CircuitDifficulty;
  available: boolean;
  sessionSlots: string[];
}

export type BookingStatus =
  | "Confirmed"
  | "Checked In"
  | "Riding"
  | "Completed"
  | "Cancelled"
  | "No Show";

export interface Booking {
  id: string;
  riderId: string;
  circuitId: string;
  date: string;
  time: string;
  guests: number;
  status: BookingStatus;
  costumeId: string | null;
  waiverCompleted: boolean;
  educationCompleted: boolean;
  totalAmount: number;
  promoCode?: string;
  /** OTA source if booked via third party */
  source: "Direct" | "Viator" | "GetYourGuide" | "FareHarbor" | "Klook";
  createdAt: string;
}

export type InsiderPassTierName = "Explorer" | "Drifter" | "Legend";

export interface Rider {
  id: string;
  name: string;
  email: string;
  /** URL to avatar image */
  avatar: string;
  insiderPassTier: InsiderPassTierName | null;
  totalRides: number;
  /** Total distance ridden in miles across all sessions */
  totalDistance: number;
  achievementIds: string[];
  referralCode: string;
  referralCount: number;
  joinDate: string;
  /** Null if rider has no upcoming booking */
  nextBookingId: string | null;
}

export type AchievementRarity = "Common" | "Rare" | "Epic" | "Legendary";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  /** Lucide icon name string used to render the badge icon */
  icon: string;
  rarity: AchievementRarity;
  /** How many riders have unlocked this achievement */
  unlockedBy: number;
  circuitId: string | null;
}

export interface RideStats {
  id: string;
  bookingId: string;
  riderId: string;
  circuitId: string;
  /** Top speed reached during the session in mph */
  topSpeed: number;
  /** Best lap time in seconds */
  lapTime: number;
  /** Gamified drift score 0-1000 */
  driftScore: number;
  /** Whether the rider completed the full circuit */
  routeCompleted: boolean;
  date: string;
}

export type PartnerCategory =
  | "Restaurant"
  | "Hotel"
  | "Show"
  | "Club"
  | "Activity"
  | "Spa";

export interface PartnerOffer {
  id: string;
  businessName: string;
  category: PartnerCategory;
  /** Discount description e.g. "20% off" */
  discount: string;
  description: string;
  location: string;
  redemptionCount: number;
  featured: boolean;
  /** Expiry date ISO string, null = no expiry */
  expiresAt: string | null;
}

export interface InsiderPassTier {
  tier: InsiderPassTierName;
  name: string;
  /** Monthly price in USD */
  price: number;
  perks: string[];
  color: string;
  ridesPerMonth: number;
}

export interface Costume {
  id: string;
  name: string;
  description: string;
  category: "Racing" | "Vegas Themed" | "Custom";
  popular: boolean;
  /** How many times this costume has been selected across all bookings */
  selectionCount: number;
}

export type NotificationType =
  | "ride_reminder"
  | "waiver_pending"
  | "achievement_unlocked"
  | "insider_pass_offer"
  | "partner_deal"
  | "referral_reward"
  | "education_ready";

export interface Notification {
  id: string;
  riderId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  date: string;
}

export interface MonthlyStats {
  month: string;
  bookings: number;
  revenue: number;
  insiderPassSignups: number;
  partnerRedemptions: number;
  achievementsUnlocked: number;
  /** Average rider satisfaction score 1-5 */
  satisfactionScore: number;
}

export interface DashboardStats {
  totalBookings: number;
  bookingsChange: number;
  insiderPassMembers: number;
  insiderPassChange: number;
  partnerRedemptions: number;
  partnerRedemptionsChange: number;
  achievementsUnlocked: number;
  achievementsChange: number;
}
