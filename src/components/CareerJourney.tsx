"use client";

import { careerJourney } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ViewMore } from "./ViewMore";

export function CareerJourney() {
  const { roleId } = usePortfolio();
  const activeIndex =
    roleId === "data-analyst" ? 2 : roleId === "data-science" ? 3 : 4;

  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="journey"
            label="Career path"
            title="From student → analyst → AI/ML engineer"
            subtitle="Switch roles above — this timeline updates to show where you are on the journey."
          />
        </ScrollReveal>

        <div className="relative mt-4">
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-amber-400 md:left-1/2 md:block md:-translate-x-1/2" />

          <ViewMore total={careerJourney.length} initial={4} resetKey={roleId}>
            {(visible) => (
          <ol className="space-y-8">
            {careerJourney.slice(0, visible).map((step, i) => {
              const active = i <= activeIndex;
              const isCurrent = i === activeIndex;
              return (
                <ScrollReveal key={step.year} delay={i * 80}>
                  <li
                    className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                      i % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2" />
                    <div
                      className={`absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                        isCurrent
                          ? "border-amber-400 bg-amber-400/20 shadow-lg shadow-amber-400/40 animate-pulse"
                          : active
                            ? "border-cyan-400 bg-cyan-500/20"
                            : "border-white/20 bg-[#1a2234]"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <article
                      className={`ml-14 rounded-2xl border p-6 transition-all duration-500 md:ml-0 md:w-1/2 ${
                        isCurrent
                          ? "border-amber-500/40 bg-amber-500/10 shadow-lg shadow-amber-500/10"
                          : active
                            ? "border-cyan-500/25 bg-cyan-500/5"
                            : "border-white/8 bg-[#1a2234]/50 opacity-60"
                      }`}
                    >
                      <span className="font-mono text-sm text-cyan-400">{step.year}</span>
                      <h3 className="mt-1 text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{step.detail}</p>
                      {isCurrent && (
                        <p className="mt-3 font-mono text-xs text-amber-300">
                          ● You are here (selected role)
                        </p>
                      )}
                    </article>
                  </li>
                </ScrollReveal>
              );
            })}
          </ol>
            )}
          </ViewMore>
        </div>
      </div>
    </section>
  );
}
