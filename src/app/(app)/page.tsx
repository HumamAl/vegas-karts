"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  Zap,
  Moon,
  Wind,
  Trophy,
  Gauge,
  Crown,
  Star,
  Shield,
  Sparkles,
  Sun,
  Users,
  Shirt,
  Map,
  Sunset,
  CheckCircle,
  ChevronRight,
  Flame,
  MapPin,
  Clock,
  Ruler,
  Check,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ArrowRight,
  Plus,
} from "lucide-react";
import {
  circuits,
  achievements,
  insiderPassTiers,
  partnerOffers,
} from "@/data/mock-data";
import type {
  Circuit,
  Achievement,
  InsiderPassTier,
  PartnerOffer,
  AchievementRarity,
} from "@/lib/types";
import { APP_CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────
// useCountUp — animates a number from 0 to target on viewport entry
// ─────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration: number = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ─────────────────────────────────────────────────────────────────
// useScrollReveal — staggered fade+translate on scroll
// ─────────────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─────────────────────────────────────────────────────────────────
// SpeedGauge — animated speedometer widget
// ─────────────────────────────────────────────────────────────────
function SpeedGauge() {
  const [speed, setSpeed] = useState(0);
  const [peaked, setPeaked] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setSpeed(current);
        if (current >= 35) {
          clearInterval(interval);
          setPeaked(true);
          setTimeout(() => {
            let pullback = 35;
            const pullInterval = setInterval(() => {
              pullback -= 1;
              setSpeed(pullback);
              if (pullback <= 31) clearInterval(pullInterval);
            }, 60);
          }, 400);
        }
      }, 28);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  const maxSpeed = 35;
  // Semicircle: from 180deg left to 0deg right, range = PI radians
  // angle maps speed → fraction of 180deg, then rotated to needle position
  const needleAngle = (speed / maxSpeed) * 180 - 90;

  // Arc progress: SVG path for semicircle progress indicator
  const radius = 80;
  const cx = 100;
  const cy = 110;
  const startAngle = Math.PI; // left
  const progressAngle = startAngle - (speed / maxSpeed) * Math.PI;
  const progressX = cx + radius * Math.cos(progressAngle);
  const progressY = cy + radius * Math.sin(progressAngle);
  const largeArc = (speed / maxSpeed) >= 0.5 ? 1 : 0;

  return (
    <div className="relative flex flex-col items-center">
      <svg width="200" height="120" viewBox="0 0 200 120" className="overflow-visible">
        {/* Background arc */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="oklch(1 0 0 / 0.08)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Tick marks */}
        {Array.from({ length: 8 }).map((_, i) => {
          const tickAngle = (Math.PI - (i / 7) * Math.PI);
          const r1 = 88;
          const r2 = 78;
          const x1 = cx + r1 * Math.cos(tickAngle);
          const y1 = cy + r1 * Math.sin(tickAngle);
          const x2 = cx + r2 * Math.cos(tickAngle);
          const y2 = cy + r2 * Math.sin(tickAngle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="oklch(1 0 0 / 0.25)"
              strokeWidth={i % 2 === 0 ? "2" : "1"}
            />
          );
        })}

        {/* Progress arc */}
        {speed > 0 && (
          <path
            d={`M 20 110 A 80 80 0 ${largeArc} 1 ${progressX.toFixed(2)} ${progressY.toFixed(2)}`}
            fill="none"
            stroke="url(#speedGrad)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        )}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="speedGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.70 0.20 195)" />
            <stop offset="100%" stopColor="oklch(0.52 0.22 295)" />
          </linearGradient>
        </defs>

        {/* Needle */}
        <g
          transform={`translate(${cx}, ${cy}) rotate(${needleAngle})`}
          style={{ transition: "transform 50ms ease-out" }}
        >
          <line x1="0" y1="0" x2="0" y2="-68" stroke="oklch(0.92 0 0)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="0" cy="0" r="5" fill="oklch(0.52 0.22 295)" />
        </g>

        {/* Speed number */}
        <text
          x="100"
          y="96"
          textAnchor="middle"
          fontSize="28"
          fontWeight="700"
          fontFamily="monospace"
          fill="oklch(0.95 0 0)"
        >
          {speed}
        </text>

        {/* MPH label */}
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fontSize="10"
          fill="oklch(0.60 0 0)"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          MPH
        </text>
      </svg>

      <p
        className={cn(
          "text-xs font-mono tracking-widest uppercase mt-1 transition-all duration-300",
          peaked ? "text-primary" : "text-muted-foreground/50"
        )}
      >
        {peaked ? "Top Speed Reached" : "Accelerating..."}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Difficulty badge
// ─────────────────────────────────────────────────────────────────
function DifficultyBadge({ difficulty }: { difficulty: Circuit["difficulty"] }) {
  const styles: Record<string, string> = {
    Beginner: "bg-success/10 text-success border-success/20",
    Intermediate: "bg-warning/10 text-warning border-warning/20",
    Expert: "bg-destructive/10 text-destructive border-destructive/20",
  };
  return (
    <span className={cn("text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-sm", styles[difficulty])}>
      {difficulty}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────
// Rarity config for achievements
// ─────────────────────────────────────────────────────────────────
const rarityConfig: Record<AchievementRarity, { glow: string; ring: string; text: string }> = {
  Common: {
    glow: "",
    ring: "border-border/30",
    text: "text-muted-foreground",
  },
  Rare: {
    glow: "",
    ring: "border-cyan-400/30",
    text: "text-cyan-400",
  },
  Epic: {
    glow: "",
    ring: "border-primary/40",
    text: "text-primary",
  },
  Legendary: {
    glow: "",
    ring: "border-warning/40",
    text: "text-warning",
  },
};

// Achievement icon map
const achievementIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Moon, Wind, Trophy, Gauge, Crown, Star, Shield, Sparkles, Sun, Users, Shirt, Map, Sunset, CheckCircle,
};

// ─────────────────────────────────────────────────────────────────
// Partner category badge styles
// ─────────────────────────────────────────────────────────────────
const categoryStyle: Record<string, string> = {
  Restaurant: "bg-warning/10 text-warning border-warning/20",
  Hotel: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  Show: "bg-primary/10 text-primary border-primary/20",
  Club: "bg-destructive/10 text-destructive border-destructive/20",
  Activity: "bg-success/10 text-success border-success/20",
  Spa: "bg-muted/10 text-muted-foreground border-border/30",
};

// ─────────────────────────────────────────────────────────────────
// RevealSection — scroll-triggered visibility
// ─────────────────────────────────────────────────────────────────
function RevealSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn("transition-all", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Animated stat counter
// ─────────────────────────────────────────────────────────────────
function StatCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-4xl font-bold font-mono tabular-nums text-primary">
        {count}{suffix}
      </span>
      <span className="block text-xs text-muted-foreground uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main Landing Page
// ─────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [cartNotice, setCartNotice] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredAchievements = useMemo(() => achievements.slice(0, 8), []);
  const featuredPartners = useMemo(
    () =>
      [...partnerOffers]
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        .slice(0, 8),
    []
  );

  function addToCart(circuit: Circuit) {
    const newCount = cart.filter((id) => id === circuit.id).length === 0
      ? cart.length + 1
      : cart.length;
    setCart((prev) =>
      prev.includes(circuit.id) ? prev : [...prev, circuit.id]
    );
    setCartNotice(`${circuit.name} added — ${newCount} circuit${newCount !== 1 ? "s" : ""} selected`);
    setTimeout(() => setCartNotice(null), 2800);
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Cart toast notification ──────────────────────────────── */}
      {cartNotice && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-primary text-primary-foreground text-sm px-4 py-2.5 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <Check className="h-4 w-4 shrink-0" />
          {cartNotice}
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "calc(100vh - 80px)",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.52 0.22 295 / 0.35) 0%, transparent 70%), " +
            "radial-gradient(ellipse 60% 40% at 80% 60%, oklch(0.70 0.20 195 / 0.15) 0%, transparent 60%), " +
            "oklch(0.07 0.015 295)",
        }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), " +
              "linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">

          {/* Grand Opening badge */}
          <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Grand Opening — Winter 2026
          </div>

          {/* Main headline */}
          <h1
            className="text-6xl md:text-8xl font-bold leading-none mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.92 0 0) 0%, oklch(0.70 0.20 195) 50%, oklch(0.52 0.22 295) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vegas Karts
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-4 font-light">
            Experience the Ultimate Touring Adventure in Las Vegas
          </p>
          <p className="text-sm text-muted-foreground/60 tracking-widest uppercase font-mono mb-10">
            3 Circuits · LED Karts · Achievements · Insider Perks
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href="#circuits"
              className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-lg text-primary-foreground transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
                boxShadow:
                  "0 0 32px oklch(0.52 0.22 295 / 0.45), 0 0 8px oklch(0.70 0.20 195 / 0.3)",
              }}
            >
              Book Now <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium border border-border/40 px-6 py-3.5 rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
            >
              How It Works <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Speed gauge */}
          <div
            className="inline-block border border-border/20 rounded-2xl px-10 py-6"
            style={{
              background: "oklch(0.10 0.015 295 / 0.8)",
              boxShadow:
                "0 0 40px oklch(0.52 0.22 295 / 0.12), inset 0 1px 0 oklch(1 0 0 / 0.06)",
            }}
          >
            <SpeedGauge />
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-3 gap-8 mt-14 max-w-xl mx-auto">
            <StatCounter value={3} label="Circuits" />
            <StatCounter value={35} label="Top MPH" />
            <StatCounter value={20} label="Achievements" suffix="+" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — CHOOSE YOUR CIRCUIT
          ═══════════════════════════════════════════════════════════════ */}
      <section id="circuits" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Select Your Route</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                Choose Your Circuit
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Three purpose-built routes through Las Vegas&rsquo; most iconic backdrops. Each delivers a distinct experience.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {circuits.map((circuit, index) => (
              <CircuitCard
                key={circuit.id}
                circuit={circuit}
                index={index}
                onAdd={() => addToCart(circuit)}
                inCart={cart.includes(circuit.id)}
              />
            ))}
          </div>

          {cartCount > 0 && (
            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-muted-foreground animate-in fade-in duration-200">
              <span>{cartCount} circuit{cartCount !== 1 ? "s" : ""} selected</span>
              <a
                href="#insider-pass"
                className="text-primary hover:text-primary/80 transition-colors duration-100 flex items-center gap-1"
              >
                Add Insider Pass for savings <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — HOW IT WORKS
          ═══════════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="py-24 px-6"
        style={{
          background: "oklch(0.09 0.015 295)",
          borderTop: "1px solid oklch(1 0 0 / 0.06)",
          borderBottom: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">The Rider Experience</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                How It Works
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                From first click to finish line — your Vegas Karts journey in four steps.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, transparent, oklch(0.52 0.22 295 / 0.4), oklch(0.70 0.20 195 / 0.4), transparent)",
              }}
            />

            {[
              {
                step: "01",
                Icon: MapPin,
                title: "Book Online",
                desc: "Pick your circuit and time slot. Complete your booking in under 2 minutes — no account required.",
              },
              {
                step: "02",
                Icon: Shirt,
                title: "Gear Up",
                desc: "Complete your safety waiver, rider education module, and choose your kart costume from our collection.",
              },
              {
                step: "03",
                Icon: Flame,
                title: "Race Las Vegas",
                desc: "Hit the streets. LED karts, neon backdrops, and live stats tracking your top speed and drift score.",
              },
              {
                step: "04",
                Icon: Trophy,
                title: "Celebrate",
                desc: "Check your ride stats, unlock achievements, share highlights, and redeem partner perks across Vegas.",
              },
            ].map((item, i) => (
              <RevealSection key={item.step} delay={i * 80}>
                <div
                  className="relative flex flex-col items-center text-center p-6 rounded-xl border border-border/20"
                  style={{ background: "oklch(0.11 0.015 295 / 0.7)" }}
                >
                  <div
                    className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
                      boxShadow: "0 0 20px oklch(0.52 0.22 295 / 0.35)",
                    }}
                  >
                    <item.Icon className="h-5 w-5" />
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground/50 tracking-widest uppercase mb-1">
                    Step {item.step}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — ACHIEVEMENTS
          ═══════════════════════════════════════════════════════════════ */}
      <section id="achievements" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Gamified Racing</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                Unlock Achievements
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Every ride earns live stats — top speed, drift score, lap times. Collect badges, climb the leaderboard, and compete with riders across Las Vegas.
              </p>
            </div>
          </RevealSection>

          {/* Rarity legend */}
          <RevealSection delay={60}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {(["Common", "Rare", "Epic", "Legendary"] as AchievementRarity[]).map((rarity) => (
                <span
                  key={rarity}
                  className={cn(
                    "text-[10px] font-mono uppercase tracking-widest border px-2.5 py-1 rounded-sm",
                    rarityConfig[rarity].text,
                    rarityConfig[rarity].ring
                  )}
                >
                  {rarity}
                </span>
              ))}
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredAchievements.map((achievement, index) => (
              <AchievementBadge key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>

          {/* Counters */}
          <RevealSection delay={120}>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <StatCounter value={20} label="Achievements" suffix="+" />
              <StatCounter value={4} label="Rarity Tiers" />
              <StatCounter value={9400} label="Badges Unlocked" suffix="+" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — INSIDER PASS
          ═══════════════════════════════════════════════════════════════ */}
      <section
        id="insider-pass"
        className="py-24 px-6"
        style={{
          background: "oklch(0.09 0.015 295)",
          borderTop: "1px solid oklch(1 0 0 / 0.06)",
          borderBottom: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Membership</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                Insider Pass
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Ride more, pay less. Unlock exclusive partner deals, priority booking, and members-only events across Las Vegas.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insiderPassTiers.map((tier, index) => (
              <InsiderPassCard
                key={tier.tier}
                tier={tier}
                index={index}
                isPopular={tier.tier === "Legend"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — PARTNER DISCOUNTS
          ═══════════════════════════════════════════════════════════════ */}
      <section id="partners" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Vegas Partnerships</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ letterSpacing: "-0.03em" }}>
                Partner Discounts
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Your Insider Pass unlocks exclusive deals at Las Vegas&rsquo; top restaurants, shows, hotels, and nightlife.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredPartners.map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
          </div>

          <RevealSection delay={100}>
            <p className="text-center text-xs text-muted-foreground/50 mt-8">
              Redeem partner deals with your Insider Pass — available at checkout or in the rider app
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — FINAL CTA + PROPOSAL BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 120%, oklch(0.52 0.22 295 / 0.25) 0%, transparent 70%), " +
            "oklch(0.08 0.015 295)",
          borderTop: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <RevealSection>
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-4">Las Vegas, Nevada</p>
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Ready to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.70 0.20 195), oklch(0.52 0.22 295))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Race?
              </span>
            </h2>
            <p className="text-muted-foreground mb-10">
              Launching Winter 2026. Be first in line — join the waitlist for early booking access and a 15% founding rider discount.
            </p>

            {/* Email form */}
            {subscribed ? (
              <div className="flex flex-col items-center gap-3 mb-10">
                <div className="inline-flex items-center gap-2 border border-success/30 bg-success/10 text-success text-sm px-6 py-3 rounded-lg">
                  <Check className="h-4 w-4" />
                  You&rsquo;re on the list! We&rsquo;ll be in touch before launch.
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-sm border border-border/20 bg-card/40 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-150"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-primary-foreground transition-all duration-150 whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
                    boxShadow: "0 0 20px oklch(0.52 0.22 295 / 0.35)",
                  }}
                >
                  Join Waitlist
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex items-center justify-center gap-5 mb-8">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "X (Twitter)" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-border/20 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-150"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground/60 font-mono">
              <MapPin className="h-3.5 w-3.5" />
              Las Vegas, Nevada · Opening Winter 2026
            </div>
          </RevealSection>
        </div>

        {/* Proposal Banner */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div
            className="p-5 rounded-xl border border-primary/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.52 0.22 295 / 0.06), oklch(0.70 0.20 195 / 0.03))",
            }}
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                This is a live demo built for {APP_CONFIG.projectName}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Humam · Full-Stack Developer · Available now
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/challenges"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-100"
              >
                My Approach →
              </a>
              <a
                href="/proposal"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg text-primary-foreground transition-all duration-100"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
                }}
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CircuitCard
// ─────────────────────────────────────────────────────────────────
function CircuitCard({
  circuit,
  index,
  onAdd,
  inCart,
}: {
  circuit: Circuit;
  index: number;
  onAdd: () => void;
  inCart: boolean;
}) {
  const { ref, visible } = useScrollReveal();

  const accentByIndex = [
    { glow: "oklch(0.52 0.22 295 / 0.15)", border: "oklch(0.52 0.22 295 / 0.30)" },
    { glow: "oklch(0.70 0.20 195 / 0.12)", border: "oklch(0.70 0.20 195 / 0.25)" },
    { glow: "oklch(0.65 0.20 350 / 0.12)", border: "oklch(0.65 0.20 350 / 0.25)" },
  ];
  const accent = accentByIndex[index % 3];

  return (
    <div
      ref={ref}
      className="relative flex flex-col rounded-xl border overflow-hidden group"
      style={{
        borderColor: accent.border,
        background: "oklch(0.10 0.015 295)",
        boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 500ms ease, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 rounded-xl"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${accent.glow}, transparent)`,
        }}
      />

      {/* Header area */}
      <div
        className="relative h-32 flex items-center justify-center shrink-0"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 50% 50%, ${accent.glow}, transparent), oklch(0.08 0.02 295)`,
        }}
      >
        <Gauge
          className="h-12 w-12 opacity-15"
          style={{
            color:
              index === 0
                ? "oklch(0.52 0.22 295)"
                : index === 1
                ? "oklch(0.70 0.20 195)"
                : "oklch(0.65 0.20 350)",
          }}
        />
        <div className="absolute top-3 left-3">
          <DifficultyBadge difficulty={circuit.difficulty} />
        </div>
        {circuit.available && (
          <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-success font-mono uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Open
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold mb-1.5">{circuit.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{circuit.description}</p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { Icon: Ruler, value: `${circuit.distance}mi`, label: "Distance" },
            { Icon: Clock, value: `${circuit.duration}min`, label: "Duration" },
            { Icon: Gauge, value: `${circuit.topSpeed}mph`, label: "Top Speed" },
          ].map(({ Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center py-2 rounded-lg border border-border/15"
              style={{ background: "oklch(0.08 0.01 295)" }}
            >
              <Icon className="h-3.5 w-3.5 text-muted-foreground/50 mb-1" />
              <span className="text-sm font-mono font-bold text-foreground">{value}</span>
              <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {circuit.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/15">
          <div>
            <span className="text-2xl font-bold font-mono">${circuit.price}</span>
            <span className="text-xs text-muted-foreground ml-1">/ rider</span>
          </div>
          <button
            onClick={onAdd}
            className={cn(
              "flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-150",
              inCart
                ? "border border-success/30 bg-success/10 text-success"
                : "text-primary-foreground"
            )}
            style={
              !inCart
                ? {
                    background:
                      "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
                    boxShadow: "0 0 14px oklch(0.52 0.22 295 / 0.30)",
                  }
                : undefined
            }
          >
            {inCart ? (
              <>
                <Check className="h-3.5 w-3.5" /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" /> Book This
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// AchievementBadge
// ─────────────────────────────────────────────────────────────────
function AchievementBadge({ achievement, index }: { achievement: Achievement; index: number }) {
  const { ref, visible } = useScrollReveal();
  const Icon = achievementIconMap[achievement.icon] ?? Sparkles;
  const config = rarityConfig[achievement.rarity];

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center p-4 rounded-xl border cursor-default transition-all duration-200 hover:border-primary/30 group",
        config.ring
      )}
      style={{
        background: "oklch(0.10 0.015 295)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
        transition: "opacity 400ms ease, transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div
        className={cn(
          "h-12 w-12 rounded-full flex items-center justify-center mb-3 border transition-all duration-200 group-hover:scale-110",
          config.ring
        )}
        style={{ background: "oklch(0.08 0.015 295)" }}
      >
        <Icon className={cn("h-5 w-5", config.text)} />
      </div>
      <p className="text-xs font-semibold mb-0.5 leading-tight">{achievement.name}</p>
      <p className={cn("text-[10px] font-mono uppercase tracking-widest", config.text)}>
        {achievement.rarity}
      </p>
      <p className="text-[10px] text-muted-foreground/50 mt-1.5 leading-snug line-clamp-2">
        {achievement.description}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// InsiderPassCard
// ─────────────────────────────────────────────────────────────────
function InsiderPassCard({
  tier,
  index,
  isPopular,
}: {
  tier: InsiderPassTier;
  index: number;
  isPopular?: boolean;
}) {
  const { ref, visible } = useScrollReveal();

  const tierAccent: Record<string, { glow: string; border: string; text: string }> = {
    Explorer: {
      glow: "oklch(0.62 0.19 145 / 0.20)",
      border: "oklch(0.62 0.19 145 / 0.25)",
      text: "oklch(0.62 0.19 145)",
    },
    Drifter: {
      glow: "oklch(0.75 0.18 85 / 0.20)",
      border: "oklch(0.75 0.18 85 / 0.25)",
      text: "oklch(0.75 0.18 85)",
    },
    Legend: {
      glow: "oklch(0.52 0.22 295 / 0.30)",
      border: "oklch(0.52 0.22 295 / 0.40)",
      text: "oklch(0.52 0.22 295)",
    },
  };

  const accent = tierAccent[tier.tier] ?? tierAccent.Explorer;

  return (
    <div
      ref={ref}
      className="relative flex flex-col rounded-xl border overflow-hidden"
      style={{
        borderColor: isPopular ? accent.border : "oklch(1 0 0 / 0.08)",
        background: "oklch(0.10 0.015 295)",
        boxShadow: isPopular
          ? `0 0 40px ${accent.glow}, inset 0 1px 0 oklch(1 0 0 / 0.08)`
          : "inset 0 1px 0 oklch(1 0 0 / 0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <span
            className="text-[10px] font-mono uppercase tracking-widest px-4 py-1 rounded-b-md text-primary-foreground font-bold"
            style={{
              background: "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
            }}
          >
            Most Popular
          </span>
        </div>
      )}

      <div className={cn("p-6", isPopular && "pt-10")}>
        <div className="flex items-start justify-between mb-1">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-1"
              style={{ color: accent.text }}
            >
              {tier.tier}
            </p>
            <h3 className="text-xl font-bold">{tier.name}</h3>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold font-mono">${tier.price}</span>
            <span className="block text-xs text-muted-foreground">/month</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-5">
          {tier.ridesPerMonth} ride{tier.ridesPerMonth !== 1 ? "s" : ""} per month included
        </p>

        <ul className="space-y-2.5 mb-6">
          {tier.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: accent.text }} />
              <span className="text-muted-foreground">{perk}</span>
            </li>
          ))}
        </ul>

        <button
          className="w-full py-3 rounded-lg text-sm font-semibold transition-all duration-150"
          style={
            isPopular
              ? {
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.22 295), oklch(0.70 0.20 195))",
                  color: "oklch(0.98 0 0)",
                  boxShadow: "0 0 20px oklch(0.52 0.22 295 / 0.35)",
                }
              : {
                  background: "oklch(0.13 0.015 295)",
                  color: "oklch(0.85 0 0)",
                  border: `1px solid ${accent.border}`,
                }
          }
        >
          Join {tier.tier}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// PartnerCard
// ─────────────────────────────────────────────────────────────────
function PartnerCard({ partner, index }: { partner: PartnerOffer; index: number }) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-xl border border-border/15 p-4 group hover:border-primary/20 transition-colors duration-200"
      style={{
        background: "oklch(0.10 0.015 295)",
        boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 400ms ease, transform 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 150ms ease",
        transitionDelay: `${index * 40}ms`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={cn(
            "text-[10px] font-mono uppercase tracking-widest border px-2 py-0.5 rounded-sm",
            categoryStyle[partner.category] ?? "bg-muted/10 text-muted-foreground border-border/20"
          )}
        >
          {partner.category}
        </span>
        {partner.featured && (
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Featured</span>
        )}
      </div>

      <h4 className="text-sm font-semibold mb-1 leading-tight">{partner.businessName}</h4>
      <p
        className="text-base font-bold font-mono mb-2"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.70 0.20 195), oklch(0.52 0.22 295))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {partner.discount}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">
        {partner.description}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-border/10">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground/60">
          <MapPin className="h-3 w-3" />
          <span className="truncate max-w-[110px]">{partner.location}</span>
        </div>
        <span className="text-[10px] text-muted-foreground/40 font-mono">
          {partner.redemptionCount} redeemed
        </span>
      </div>
    </div>
  );
}
