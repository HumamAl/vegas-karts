"use client";

import { useState } from "react";
import { RefreshCw, AlertTriangle, CheckCircle, ArrowRight, Zap } from "lucide-react";

export function OtaSyncViz() {
  const [view, setView] = useState<"problem" | "solution">("problem");

  return (
    <div className="space-y-3">
      {/* Toggle */}
      <div className="flex items-center gap-1 p-1 rounded-lg w-fit"
        style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.08)" }}>
        <button
          onClick={() => setView("problem")}
          className="px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
          style={{
            background: view === "problem" ? "color-mix(in oklch, var(--destructive) 15%, transparent)" : "transparent",
            color: view === "problem" ? "var(--destructive)" : "oklch(0.55 0 0)",
            borderColor: view === "problem" ? "color-mix(in oklch, var(--destructive) 30%, transparent)" : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          Current Pain
        </button>
        <button
          onClick={() => setView("solution")}
          className="px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
          style={{
            background: view === "solution" ? "color-mix(in oklch, var(--primary) 15%, transparent)" : "transparent",
            color: view === "solution" ? "var(--primary)" : "oklch(0.55 0 0)",
            borderColor: view === "solution" ? "color-mix(in oklch, var(--primary) 30%, transparent)" : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        >
          Proposed Fix
        </button>
      </div>

      {view === "problem" ? (
        <div className="space-y-3">
          {/* Three OTAs pointing directly to inventory with conflict */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {/* OTA channels */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              {["Viator", "Airbnb Exp.", "FareHarbor"].map((ota) => (
                <div key={ota}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
                  style={{
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1px solid oklch(1 0 0 / 0.10)",
                    color: "oklch(0.75 0 0)",
                  }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.70 0.12 60)" }} />
                  {ota}
                </div>
              ))}
            </div>

            {/* Arrows with "no coordination" label */}
            <div className="flex sm:flex-col items-center gap-1 px-2">
              <ArrowRight className="w-4 h-4 hidden sm:block" style={{ color: "var(--destructive)", opacity: 0.7 }} />
              <ArrowRight className="w-4 h-4 hidden sm:block" style={{ color: "var(--destructive)", opacity: 0.7 }} />
              <ArrowRight className="w-4 h-4 hidden sm:block" style={{ color: "var(--destructive)", opacity: 0.7 }} />
              <ArrowRight className="w-4 h-4 sm:hidden" style={{ color: "var(--destructive)", opacity: 0.7 }} />
              <span className="text-[9px] font-mono hidden sm:block" style={{ color: "var(--destructive)", opacity: 0.7 }}>
                uncoordinated
              </span>
            </div>

            {/* Inventory block with conflict */}
            <div className="flex-1 rounded-lg p-3 w-full sm:w-auto"
              style={{
                background: "color-mix(in oklch, var(--destructive) 8%, transparent)",
                border: "1px solid color-mix(in oklch, var(--destructive) 25%, transparent)",
              }}>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-3.5 h-3.5" style={{ color: "var(--destructive)" }} />
                <span className="text-xs font-semibold" style={{ color: "var(--destructive)" }}>Vegas Karts Inventory</span>
              </div>
              <div className="space-y-1">
                {[
                  { slot: "Sat 2pm", status: "Double-booked", conflict: true },
                  { slot: "Sat 4pm", status: "Drift: 1 slot", conflict: true },
                  { slot: "Sun 10am", status: "Stale cache", conflict: true },
                ].map((item) => (
                  <div key={item.slot} className="flex items-center justify-between text-[10px]">
                    <span style={{ color: "oklch(0.65 0 0)" }}>{item.slot}</span>
                    <span style={{ color: "var(--destructive)", opacity: 0.8 }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[10px] font-mono" style={{ color: "oklch(0.50 0 0)" }}>
            Each OTA writes directly — no sync — inventory diverges within minutes
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {/* OTAs → Sync Engine → Inventory */}
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {/* OTA channels */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              {["Viator", "Airbnb Exp.", "FareHarbor"].map((ota) => (
                <div key={ota}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
                  style={{
                    background: "oklch(1 0 0 / 0.05)",
                    border: "1px solid oklch(1 0 0 / 0.10)",
                    color: "oklch(0.80 0 0)",
                  }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                  {ota}
                </div>
              ))}
            </div>

            <ArrowRight className="w-4 h-4 shrink-0 hidden sm:block" style={{ color: "oklch(0.50 0 0)" }} />
            <ArrowRight className="w-4 h-4 shrink-0 sm:hidden" style={{ color: "oklch(0.50 0 0)" }} />

            {/* Sync Engine */}
            <div className="px-3 py-3 rounded-lg text-center w-full sm:w-auto"
              style={{
                background: "color-mix(in oklch, var(--primary) 10%, transparent)",
                border: "1px solid color-mix(in oklch, var(--primary) 30%, transparent)",
                boxShadow: "0 0 12px color-mix(in oklch, var(--primary) 15%, transparent)",
              }}>
              <Zap className="w-4 h-4 mx-auto mb-1" style={{ color: "var(--primary)" }} />
              <p className="text-[10px] font-semibold" style={{ color: "var(--primary)" }}>Sync Engine</p>
              <p className="text-[9px] font-mono mt-0.5" style={{ color: "oklch(0.50 0 0)" }}>event-driven</p>
            </div>

            <ArrowRight className="w-4 h-4 shrink-0 hidden sm:block" style={{ color: "oklch(0.50 0 0)" }} />
            <ArrowRight className="w-4 h-4 shrink-0 sm:hidden" style={{ color: "oklch(0.50 0 0)" }} />

            {/* Inventory block — clean */}
            <div className="flex-1 rounded-lg p-3 w-full sm:w-auto"
              style={{
                background: "color-mix(in oklch, var(--success) 8%, transparent)",
                border: "1px solid color-mix(in oklch, var(--success) 25%, transparent)",
              }}>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-3.5 h-3.5" style={{ color: "var(--success)" }} />
                <span className="text-xs font-semibold" style={{ color: "var(--success)" }}>Unified Inventory</span>
              </div>
              <div className="space-y-1">
                {[
                  { slot: "Sat 2pm", status: "1 slot left — synced" },
                  { slot: "Sat 4pm", status: "Available — live" },
                  { slot: "Sun 10am", status: "2 slots — confirmed" },
                ].map((item) => (
                  <div key={item.slot} className="flex items-center justify-between text-[10px]">
                    <span style={{ color: "oklch(0.65 0 0)" }}>{item.slot}</span>
                    <span style={{ color: "var(--success)", opacity: 0.85 }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[10px] font-mono" style={{ color: "oklch(0.50 0 0)" }}>
            All OTA writes funnel through sync engine — inventory truth is single and consistent
          </p>
        </div>
      )}
    </div>
  );
}
