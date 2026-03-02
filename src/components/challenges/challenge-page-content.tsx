"use client";

import type { Challenge } from "@/lib/types";
import { ChallengeList } from "./challenge-list";
import { OtaSyncViz } from "./ota-sync-viz";
import { AchievementFlowViz } from "./achievement-flow-viz";
import { MembershipMetricsViz } from "./membership-metrics-viz";

interface ChallengePageContentProps {
  challenges: Challenge[];
}

export function ChallengePageContent({ challenges }: ChallengePageContentProps) {
  const visualizations = {
    "challenge-1": <OtaSyncViz />,
    "challenge-2": <AchievementFlowViz />,
    "challenge-3": <MembershipMetricsViz />,
  };

  return <ChallengeList challenges={challenges} visualizations={visualizations} />;
}
