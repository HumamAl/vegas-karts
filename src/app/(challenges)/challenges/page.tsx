import type { Metadata } from "next";
import { ExecutiveSummary } from "@/components/challenges/executive-summary";
import { ChallengePageContent } from "@/components/challenges/challenge-page-content";
import { CtaCloser } from "@/components/challenges/cta-closer";
import { challenges, executiveSummary } from "@/data/challenges";

export const metadata: Metadata = {
  title: "My Approach | Vegas Karts Demo",
};

export default function ChallengesPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 space-y-8">

        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "oklch(0.92 0 0)" }}>
            My Approach
          </h1>
          <p className="text-sm mt-1" style={{ color: "oklch(0.50 0 0)" }}>
            How I would tackle the key technical challenges in this project
          </p>
        </div>

        {/* Executive summary — dark hero banner */}
        <ExecutiveSummary
          commonApproach={executiveSummary.commonApproach}
          differentApproach={executiveSummary.differentApproach}
          accentWord={executiveSummary.accentWord}
        />

        {/* Challenge cards with visualizations */}
        <ChallengePageContent challenges={challenges} />

        {/* CTA closer */}
        <CtaCloser />

      </div>
    </div>
  );
}
