import Link from "next/link";

interface ExecutiveSummaryProps {
  commonApproach: string;
  differentApproach: string;
  accentWord?: string;
}

export function ExecutiveSummary({
  commonApproach,
  differentApproach,
  accentWord,
}: ExecutiveSummaryProps) {
  const renderDifferentApproach = () => {
    if (!accentWord) return <span>{differentApproach}</span>;
    const escaped = accentWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = differentApproach.split(new RegExp(`(${escaped})`, "i"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === accentWord.toLowerCase() ? (
            <span key={i} className="text-primary font-semibold" style={{
              textShadow: "0 0 12px color-mix(in oklch, var(--primary) 60%, transparent)"
            }}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl p-6 md:p-8"
      style={{
        background: "oklch(0.06 0.02 var(--primary-h, 295))",
        backgroundImage:
          "radial-gradient(ellipse at 20% 40%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 60%), radial-gradient(ellipse at 80% 60%, color-mix(in oklch, var(--accent) 8%, transparent), transparent 50%)",
        border: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, var(--primary) 50%, transparent), transparent)",
        }}
      />

      <p className="text-sm md:text-base leading-relaxed text-white/50 mb-4">
        {commonApproach}
      </p>

      <div
        className="my-4 h-px"
        style={{ background: "oklch(1 0 0 / 0.08)" }}
      />

      <p className="text-base md:text-lg leading-relaxed font-medium text-white/90">
        {renderDifferentApproach()}
      </p>

      <p className="text-xs text-white/35 mt-4">
        {"← "}
        <Link
          href="/"
          className="hover:text-white/60 transition-colors duration-200 underline underline-offset-2"
        >
          Back to the live demo
        </Link>
      </p>
    </div>
  );
}
