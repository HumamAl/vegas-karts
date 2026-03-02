"use client";

import type { ReactNode } from "react";
import type { Challenge } from "@/lib/types";
import { OutcomeStatement } from "./outcome-statement";

interface ChallengeListProps {
  challenges: Challenge[];
  visualizations?: Record<string, ReactNode>;
}

export function ChallengeList({ challenges, visualizations = {} }: ChallengeListProps) {
  return (
    <div className="flex flex-col gap-5">
      {challenges.map((challenge, index) => {
        const stepNumber = String(index + 1).padStart(2, "0");
        return (
          <div
            key={challenge.id}
            className="rounded-xl p-5 md:p-6 space-y-4"
            style={{
              background: "oklch(0.12 0.01 var(--primary-h, 295))",
              border: "1px solid oklch(1 0 0 / 0.08)",
              boxShadow: "0 0 0 1px oklch(1 0 0 / 0.04), inset 0 1px 0 oklch(1 0 0 / 0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-baseline gap-3">
              <span
                className="font-mono text-sm font-medium shrink-0 tabular-nums"
                style={{ color: "var(--primary)", opacity: 0.7 }}
              >
                {stepNumber}
              </span>
              <div>
                <h3 className="text-base font-semibold" style={{ color: "oklch(0.92 0 0)" }}>
                  {challenge.title}
                </h3>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: "oklch(0.55 0 0)" }}>
                  {challenge.description}
                </p>
              </div>
            </div>

            {/* Visualization */}
            {visualizations[challenge.id] && (
              <div>{visualizations[challenge.id]}</div>
            )}

            {/* Outcome */}
            {challenge.outcome && (
              <OutcomeStatement outcome={challenge.outcome} />
            )}
          </div>
        );
      })}
    </div>
  );
}
