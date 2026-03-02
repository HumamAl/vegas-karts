const metrics = [
  {
    label: "Manual check time per redemption",
    before: { value: 4.5, unit: "min", display: "4.5 min" },
    after: { value: 0.1, unit: "min", display: "< 10 sec" },
    improvement: "97% faster",
    barBefore: 90,
    barAfter: 2,
  },
  {
    label: "Partner redemption rate",
    before: { value: 3, unit: "%", display: "~3%" },
    after: { value: 28, unit: "%", display: "~28%" },
    improvement: "+25 pts",
    barBefore: 6,
    barAfter: 56,
  },
  {
    label: "Membership validation errors / week",
    before: { value: 12, unit: "", display: "12 / wk" },
    after: { value: 0.5, unit: "", display: "< 1 / wk" },
    improvement: "96% fewer",
    barBefore: 96,
    barAfter: 4,
  },
];

export function MembershipMetricsViz() {
  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-1.5 rounded-full" style={{ background: "oklch(0.55 0 0 / 0.5)" }} />
          <span className="text-[10px]" style={{ color: "oklch(0.50 0 0)" }}>Current</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
          <span className="text-[10px]" style={{ color: "oklch(0.50 0 0)" }}>With automation</span>
        </div>
      </div>

      {/* Metric bars */}
      <div className="space-y-4">
        {metrics.map((m) => (
          <div key={m.label} className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs" style={{ color: "oklch(0.70 0 0)" }}>{m.label}</span>
              <span
                className="text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0"
                style={{
                  background: "color-mix(in oklch, var(--primary) 10%, transparent)",
                  color: "var(--primary)",
                  border: "1px solid color-mix(in oklch, var(--primary) 20%, transparent)",
                }}
              >
                {m.improvement}
              </span>
            </div>

            {/* Before bar */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] w-14 text-right font-mono shrink-0" style={{ color: "oklch(0.45 0 0)" }}>
                  {m.before.display}
                </span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${m.barBefore}%`,
                      background: "oklch(0.55 0 0 / 0.45)",
                    }}
                  />
                </div>
              </div>

              {/* After bar */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] w-14 text-right font-mono shrink-0" style={{ color: "var(--primary)" }}>
                  {m.after.display}
                </span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${m.barAfter}%`,
                      background: "var(--primary)",
                      boxShadow: "0 0 6px color-mix(in oklch, var(--primary) 40%, transparent)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] font-mono" style={{ color: "oklch(0.40 0 0)" }}>
        Projections based on typical membership automation outcomes in experience-based tourism
      </p>
    </div>
  );
}
