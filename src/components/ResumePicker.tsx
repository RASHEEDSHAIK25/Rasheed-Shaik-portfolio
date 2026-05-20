"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { useAccent } from "@/hooks/useAccent";

export function ResumePicker({ variant = "dropdown" }: { variant?: "dropdown" | "cards" }) {
  const { resumes, activeResumeId, setActiveResumeId, activeResume } = usePortfolio();
  const accent = useAccent();

  if (variant === "cards") {
    return (
      <div className="grid gap-3 sm:grid-cols-3">
        {resumes.map((r) => {
          const active = r.id === activeResumeId;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveResumeId(r.id)}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                active
                  ? `${accent.border} ${accent.bg} scale-[1.02]`
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <p className={`font-semibold ${active ? accent.text : "text-white"}`}>
                {r.label}
              </p>
              <p className="mt-1 text-xs text-slate-500">{r.description}</p>
              {active && (
                <a
                  href={r.path}
                  download
                  className={`mt-3 inline-block text-xs font-medium ${accent.text} hover:underline`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Download PDF ↓
                </a>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <label htmlFor="resume-select" className="text-sm text-slate-500">
        Resume for this role:
      </label>
      <select
        id="resume-select"
        value={activeResumeId}
        onChange={(e) => setActiveResumeId(e.target.value)}
        className="rounded-xl border border-white/15 bg-[#1a2234] px-4 py-2 text-sm text-white outline-none focus:border-cyan-500/50"
      >
        {resumes.map((r) => (
          <option key={r.id} value={r.id}>
            {r.label}
          </option>
        ))}
      </select>
      <a
        href={activeResume.path}
        download
        className={`rounded-full bg-gradient-to-r ${accent.gradient} px-5 py-2 text-sm font-semibold text-[#0a0e17] transition hover:opacity-90`}
      >
        Download
      </a>
    </div>
  );
}
