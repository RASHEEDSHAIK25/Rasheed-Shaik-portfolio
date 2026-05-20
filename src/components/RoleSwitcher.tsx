"use client";

import { careerRoles } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";
import type { CareerRoleId } from "@/types/portfolio";

export function RoleSwitcher({ compact = false }: { compact?: boolean }) {
  const { roleId, setRoleId } = usePortfolio();

  return (
    <div
      className={`flex flex-wrap gap-2 ${compact ? "" : "rounded-2xl border border-white/10 bg-[#111827]/80 p-2 backdrop-blur"}`}
      role="tablist"
      aria-label="Career focus"
    >
      {careerRoles.map((r) => {
        const active = roleId === r.id;
        return (
          <button
            key={r.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setRoleId(r.id as CareerRoleId)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active
                ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-[#0a0e17] shadow-lg shadow-cyan-500/20 scale-[1.02]"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {compact ? r.shortLabel : r.label}
          </button>
        );
      })}
    </div>
  );
}
