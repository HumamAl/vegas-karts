import { Flag, Star, Bell, ArrowRight, Users } from "lucide-react";

const steps = [
  {
    icon: Flag,
    label: "Trigger",
    description: "Ride ends / referral redeemed / tier upgrade",
    highlight: false,
  },
  {
    icon: Star,
    label: "Evaluate",
    description: "Check rules across ride stats, referrals, tier",
    highlight: true,
  },
  {
    icon: Users,
    label: "Award",
    description: "Unlock badge + update Insider Pass XP",
    highlight: false,
  },
  {
    icon: Bell,
    label: "Notify",
    description: "Push notification + in-app badge reveal",
    highlight: false,
  },
];

const exampleTriggers = [
  "Top speed > 45 mph",
  "3 referrals redeemed",
  "5th ride completed",
  "Legend tier reached",
];

export function AchievementFlowViz() {
  return (
    <div className="space-y-3">
      {/* Flow steps */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-2">
              <div
                className="flex flex-col items-start gap-1.5 px-3 py-2.5 rounded-lg"
                style={
                  step.highlight
                    ? {
                        background: "color-mix(in oklch, var(--primary) 12%, transparent)",
                        border: "1px solid color-mix(in oklch, var(--primary) 30%, transparent)",
                        boxShadow: "0 0 10px color-mix(in oklch, var(--primary) 12%, transparent)",
                      }
                    : {
                        background: "oklch(1 0 0 / 0.04)",
                        border: "1px solid oklch(1 0 0 / 0.08)",
                      }
                }
              >
                <div className="flex items-center gap-1.5">
                  <Icon
                    className="w-3.5 h-3.5 shrink-0"
                    style={{
                      color: step.highlight ? "var(--primary)" : "oklch(0.60 0 0)",
                    }}
                  />
                  <p
                    className="text-xs font-semibold"
                    style={{
                      color: step.highlight ? "var(--primary)" : "oklch(0.80 0 0)",
                    }}
                  >
                    {step.label}
                  </p>
                </div>
                <p
                  className="text-[10px] leading-snug max-w-[120px]"
                  style={{ color: "oklch(0.50 0 0)" }}
                >
                  {step.description}
                </p>
              </div>

              {i < steps.length - 1 && (
                <ArrowRight
                  className="w-3.5 h-3.5 shrink-0 hidden sm:block"
                  style={{ color: "oklch(0.40 0 0)" }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Example triggers row */}
      <div
        className="rounded-lg px-3 py-2.5 flex flex-wrap gap-2"
        style={{
          background: "oklch(1 0 0 / 0.03)",
          border: "1px solid oklch(1 0 0 / 0.06)",
        }}
      >
        <span className="text-[10px] font-mono" style={{ color: "oklch(0.45 0 0)" }}>
          Example triggers:
        </span>
        {exampleTriggers.map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded"
            style={{
              background: "color-mix(in oklch, var(--accent) 8%, transparent)",
              color: "var(--accent)",
              border: "1px solid color-mix(in oklch, var(--accent) 20%, transparent)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
