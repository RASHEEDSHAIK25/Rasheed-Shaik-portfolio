"use client";

import { useState } from "react";
import { aiDevTools, techFocusAreas } from "@/data/portfolio";
import type { TechFocus, TechFocusStatus } from "@/types/portfolio";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ViewMore } from "./ViewMore";

const INITIAL_TECH = 4;
const INITIAL_TOOLS = 4;

const statusLabel: Record<TechFocusStatus, { text: string; className: string }> =
  {
    building: {
      text: "Building",
      className: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    },
    learning: {
      text: "Learning now",
      className: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    },
    exploring: {
      text: "Exploring",
      className: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    },
  };

function TechCard({ tech }: { tech: TechFocus }) {
  const status = statusLabel[tech.status];
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#1a2234] p-6 transition duration-300 hover:border-cyan-500/35">
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl" aria-hidden>
          {tech.icon}
        </span>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${status.className}`}
        >
          {status.text}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-300">
        {tech.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {tech.description}
      </p>
      <div className="mt-5">
        <div className="mb-1.5 flex justify-between font-mono text-xs text-slate-500">
          <span>Progress</span>
          <span className="text-cyan-400">{tech.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
            style={{ width: `${tech.progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}

export function TechLearning() {
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const visibleTools = toolsExpanded
    ? aiDevTools
    : aiDevTools.slice(0, INITIAL_TOOLS);

  return (
    <section className="border-t border-white/5 bg-[#0a0e17] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="tech-stack"
            label="Tech radar"
            title="Always learning — always building"
            subtitle="Core focus areas below — expand for the full picture."
          />
        </ScrollReveal>

        <ViewMore total={techFocusAreas.length} initial={INITIAL_TECH}>
          {(visible) => (
            <div className="grid gap-5 sm:grid-cols-2">
              {techFocusAreas.slice(0, visible).map((tech, i) => (
                <ScrollReveal key={tech.id} delay={i * 40}>
                  <TechCard tech={tech} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </ViewMore>

        <ScrollReveal delay={80}>
          <div className="mt-14">
            <h3 className="font-mono text-sm uppercase tracking-widest text-slate-500">
              AI & dev tools I use
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {visibleTools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a2234] to-[#111827] px-4 py-3"
                >
                  <p className="text-sm font-medium text-white">{tool.name}</p>
                  <p className="font-mono text-xs text-violet-400/90">
                    {tool.category}
                  </p>
                </div>
              ))}
            </div>
            {aiDevTools.length > INITIAL_TOOLS && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setToolsExpanded((e) => !e)}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-400 hover:text-cyan-300"
                >
                  {toolsExpanded
                    ? "Show fewer tools"
                    : `View more tools (${aiDevTools.length - INITIAL_TOOLS} more)`}
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="card-shine mt-10 rounded-2xl border border-cyan-500/20 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
              What&apos;s next
            </p>
            <p className="mt-3 text-lg leading-relaxed text-slate-300">
              <strong className="text-white">Databricks + Spark</strong>,{" "}
              <strong className="text-white">production RAG</strong>, and deeper{" "}
              <strong className="text-white">LLM work</strong> — I learn in public
              on LinkedIn and ship on GitHub.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
