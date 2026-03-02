"use client";

import { ExternalLink, TrendingUp, CheckCircle2, Zap, Rocket, Handshake } from "lucide-react";
import { APP_CONFIG } from "@/lib/config";
import { profile, portfolioProjects } from "@/data/proposal";

const stats = [
  { value: "24+", label: "Projects Shipped" },
  { value: "15+", label: "Industries" },
  { value: "< 48hr", label: "Demo Turnaround" },
];

const stepIcons = [Zap, CheckCircle2, Rocket, Handshake];

export default function ProposalPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-14">

      {/* ─── Section 1: Hero ──────────────────────────────────────── */}
      <section
        className="relative rounded-2xl overflow-hidden"
        style={{ background: "oklch(0.10 0.02 var(--primary-h, 295))" }}
      >
        {/* Radial violet highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, oklch(0.52 0.22 295 / 0.18), transparent 70%)",
          }}
        />

        <div className="relative z-10 p-8 md:p-12">
          {/* "Built this demo for your project" badge — mandatory */}
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-white/10 border border-white/10 text-white/80 px-3 py-1.5 rounded-full mb-6">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Built this demo for your project
          </span>

          {/* Role prefix */}
          <p className="font-mono text-xs tracking-widest uppercase text-white/40 mb-4">
            Full-Stack Developer · Next.js &amp; React Native Specialist
          </p>

          {/* Weight-contrast headline */}
          <h1 className="text-5xl md:text-6xl tracking-tight leading-none mb-5">
            <span className="font-light text-white/70">Hi, I&apos;m</span>{" "}
            <span className="font-black text-white">{profile.name}</span>
          </h1>

          {/* Tailored value prop */}
          <p className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
            {profile.tagline}
          </p>
        </div>

        {/* Stats shelf */}
        <div
          className="relative z-10 border-t px-8 py-5"
          style={{ borderColor: "oklch(1 0 0 / 0.08)", background: "oklch(1 0 0 / 0.04)" }}
        >
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, white 30%, oklch(0.80 0.18 295))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2: Proof of Work ─────────────────────────────── */}
      <section className="space-y-5">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Proof of Work
          </p>
          <h2 className="text-2xl font-bold tracking-tight">Relevant Projects</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl p-5 space-y-3 border transition-all duration-200"
              style={{
                background: "oklch(0.12 0.015 var(--primary-h, 295))",
                borderColor: "oklch(1 0 0 / 0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.52 0.22 295 / 0.35)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 18px oklch(0.52 0.22 295 / 0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(1 0 0 / 0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-white">{project.title}</h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-primary transition-colors duration-150 shrink-0"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>

              {/* Outcome badge */}
              {project.outcome && (
                <div className="flex items-start gap-2 text-sm" style={{ color: "var(--success)" }}>
                  <TrendingUp className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{project.outcome}</span>
                </div>
              )}

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono rounded-md"
                    style={{
                      background: "oklch(0.52 0.22 295 / 0.15)",
                      color: "oklch(0.75 0.18 295)",
                      border: "1px solid oklch(0.52 0.22 295 / 0.20)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Relevance note */}
              {project.relevance && (
                <p
                  className="text-xs italic"
                  style={{ color: "oklch(0.70 0.20 195 / 0.85)" }}
                >
                  {project.relevance}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Section 3: How I Work ────────────────────────────────── */}
      <section className="space-y-5">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Process
          </p>
          <h2 className="text-2xl font-bold tracking-tight">How I Work</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.approach.map((step, i) => {
            const Icon = stepIcons[i];
            const stepNum = String(i + 1).padStart(2, "0");
            return (
              <div
                key={step.title}
                className="rounded-xl p-5 space-y-3 border"
                style={{
                  background: "oklch(0.12 0.015 var(--primary-h, 295))",
                  borderColor: "oklch(1 0 0 / 0.08)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-xs tracking-widest uppercase"
                      style={{ color: "oklch(0.52 0.22 295 / 0.70)" }}
                    >
                      Step {stepNum}
                    </span>
                  </div>
                  <Icon
                    className="w-4 h-4"
                    style={{ color: "oklch(0.52 0.22 295 / 0.60)" }}
                  />
                </div>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Section 4: Skills Grid ───────────────────────────────── */}
      <section className="space-y-5">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-1">
            Tech Stack
          </p>
          <h2 className="text-2xl font-bold tracking-tight">What I Build With</h2>
        </div>

        <div className="space-y-3">
          {profile.skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-xl p-4 border"
              style={{
                background: "oklch(0.11 0.012 var(--primary-h, 295))",
                borderColor: "oklch(1 0 0 / 0.07)",
              }}
            >
              <p
                className="text-xs font-medium font-mono mb-2.5 uppercase tracking-wider"
                style={{ color: "oklch(0.60 0 0)" }}
              >
                {category.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-sm font-mono rounded-md border"
                    style={{
                      background: "oklch(0 0 0 / 0.20)",
                      borderColor: "oklch(1 0 0 / 0.10)",
                      color: "oklch(0.80 0 0)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Section 5: CTA ───────────────────────────────────────── */}
      <section
        className="relative rounded-2xl overflow-hidden text-center"
        style={{ background: "oklch(0.08 0.02 var(--primary-h, 295))" }}
      >
        {/* Accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 100%, oklch(0.52 0.22 295 / 0.12), transparent 70%)",
          }}
        />

        <div className="relative z-10 p-8 md:p-12 space-y-5">
          {/* Pulsing availability indicator */}
          <div className="flex items-center justify-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--success)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "var(--success)" }}
              />
            </span>
            <span
              className="text-sm"
              style={{ color: "color-mix(in oklch, var(--success) 80%, white)" }}
            >
              Currently available for new projects
            </span>
          </div>

          {/* Tailored headline */}
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Ready to turn {APP_CONFIG.projectName} into a platform<br className="hidden sm:block" />
            riders actually want to come back to.
          </h2>

          {/* Specific body copy */}
          <p className="text-white/65 max-w-lg mx-auto leading-relaxed">
            I built this demo to show you what the booking flow, membership system, and
            gamification engine could look like — already deployed, no mockups. The
            production build starts within days of your reply.
          </p>

          {/* Primary action — text, not a dead-end button */}
          <p className="text-lg font-semibold text-white pt-1">
            Reply on Upwork to start
          </p>

          {/* Secondary nudge */}
          <p className="text-sm text-white/50">
            Or jump on a 10-minute call to discuss the {APP_CONFIG.projectName} build
          </p>

          {/* Back to demo link */}
          <a
            href="/"
            className="inline-flex items-center gap-1 text-sm transition-colors duration-150"
            style={{ color: "oklch(0.52 0.22 295 / 0.65)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "oklch(0.70 0.20 295 / 0.90)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "oklch(0.52 0.22 295 / 0.65)")
            }
          >
            ← Back to the demo
          </a>

          {/* Signature */}
          <p
            className="text-sm pt-4 border-t"
            style={{ color: "oklch(1 0 0 / 0.30)", borderColor: "oklch(1 0 0 / 0.08)" }}
          >
            — Humam
          </p>
        </div>
      </section>

    </div>
  );
}
