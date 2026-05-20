"use client";

import { useState } from "react";
import { navLinks } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";
import { useAccent } from "@/hooks/useAccent";
import { RoleSwitcher } from "./RoleSwitcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { profile, activeResume } = usePortfolio();
  const accent = useAccent();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0e17]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#"
          className={`font-mono text-sm font-semibold tracking-tight ${accent.text}`}
        >
          SRB<span className="text-white">.</span>dev
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <RoleSwitcher compact />
          <a
            href={activeResume.path}
            download
            className={`rounded-full bg-gradient-to-r ${accent.gradient} px-4 py-2 text-sm font-medium text-[#0a0e17] transition hover:opacity-90`}
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#0a0e17] px-6 py-4 lg:hidden">
          <div className="mb-4">
            <RoleSwitcher compact />
          </div>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={activeResume.path}
                download
                className={`inline-block rounded-full bg-gradient-to-r ${accent.gradient} px-4 py-2 text-sm font-medium text-[#0a0e17]`}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
