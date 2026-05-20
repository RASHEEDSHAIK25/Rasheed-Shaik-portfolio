"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export function Footer() {
  const { profile, role } = usePortfolio();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. · Viewing as{" "}
          <span className="text-cyan-400">{role.shortLabel}</span>
        </p>
        <p className="font-mono text-xs">{profile.location}</p>
      </div>
    </footer>
  );
}
