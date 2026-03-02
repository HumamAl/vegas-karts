"use client";

import Link from "next/link";

export function CtaCloser() {
  return (
    <section
      className="rounded-xl p-6 md:p-8"
      style={{
        background: "oklch(0.10 0.02 var(--primary-h, 295))",
        backgroundImage:
          "radial-gradient(ellipse at 70% 50%, color-mix(in oklch, var(--primary) 8%, transparent), transparent 60%)",
        border: "1px solid oklch(1 0 0 / 0.08)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <h3
            className="text-base font-semibold"
            style={{ color: "oklch(0.92 0 0)" }}
          >
            Ready to discuss the approach?
          </h3>
          <p className="text-sm mt-1 max-w-sm" style={{ color: "oklch(0.55 0 0)" }}>
            I&apos;ve thought through the OTA sync, achievement engine, and membership
            automation. Happy to walk through any of it on a call.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/proposal"
            className="text-sm transition-colors duration-200 hover:opacity-80"
            style={{ color: "oklch(0.55 0 0)" }}
          >
            See the proposal &rarr;
          </Link>

          <span
            className="text-xs font-medium px-3 py-2 rounded-lg shrink-0"
            style={{
              background: "color-mix(in oklch, var(--primary) 15%, transparent)",
              border: "1px solid color-mix(in oklch, var(--primary) 30%, transparent)",
              color: "var(--primary)",
              boxShadow: "0 0 10px color-mix(in oklch, var(--primary) 12%, transparent)",
            }}
          >
            Reply on Upwork to start
          </span>
        </div>
      </div>
    </section>
  );
}
