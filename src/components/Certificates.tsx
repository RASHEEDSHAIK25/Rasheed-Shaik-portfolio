"use client";

import { useMemo, useState } from "react";
import { certificates } from "@/data/portfolio";
import type { Certificate, CertificateCategory } from "@/types/portfolio";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ViewMore } from "./ViewMore";

const INITIAL_COUNT = 4;

const categories: { id: CertificateCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "award", label: "Awards" },
  { id: "cloud", label: "Cloud" },
  { id: "analytics", label: "Analytics" },
  { id: "hackathon", label: "Hackathons" },
  { id: "simulation", label: "Simulations" },
];

const categoryStyle: Record<
  CertificateCategory,
  { badge: string; border: string }
> = {
  award: { badge: "🏆", border: "hover:border-amber-500/40" },
  cloud: { badge: "☁️", border: "hover:border-cyan-500/40" },
  analytics: { badge: "📊", border: "hover:border-violet-500/40" },
  hackathon: { badge: "⚡", border: "hover:border-fuchsia-500/40" },
  simulation: { badge: "💼", border: "hover:border-emerald-500/40" },
};

function CertCard({ cert }: { cert: Certificate }) {
  const style = categoryStyle[cert.category];
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-white/8 bg-[#1a2234] p-6 transition duration-300 ${style.border}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-2xl" aria-hidden>
          {style.badge}
        </span>
        <span className="font-mono text-xs text-slate-500">{cert.date}</span>
      </div>
      <h3 className="mt-3 font-semibold text-white group-hover:text-cyan-300">
        {cert.name}
      </h3>
      <p className="mt-1 text-sm text-violet-400">{cert.issuer}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {cert.detail}
      </p>
      {cert.verifyUrl && (
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:gap-2"
        >
          Verify credential →
        </a>
      )}
    </article>
  );
}

export function Certificates() {
  const [filter, setFilter] = useState<CertificateCategory | "all">("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? certificates
        : certificates.filter((c) => c.category === filter),
    [filter]
  );

  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="certificates"
            label="Certificates & awards"
            title="Verified credentials"
            subtitle="Top highlights below — expand to see all certifications."
          />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  filter === cat.id
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "border border-white/10 text-slate-500 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ViewMore total={filtered.length} initial={INITIAL_COUNT} resetKey={filter}>
          {(visible) => (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.slice(0, visible).map((cert, i) => (
                <ScrollReveal key={cert.id} delay={i * 40}>
                  <CertCard cert={cert} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </ViewMore>
      </div>
    </section>
  );
}
