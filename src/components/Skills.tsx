"use client";

import { skillGroups } from "@/data/portfolio";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ViewMore } from "./ViewMore";

const INITIAL_COUNT = 4;

export function Skills() {
  return (
    <section className="border-t border-white/5 bg-[#0d1220] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="skills"
            label="Skills"
            title="Full stack — from BI to deep learning"
            subtitle="Main skill groups first — view more for the complete list."
          />
        </ScrollReveal>

        <ViewMore total={skillGroups.length} initial={INITIAL_COUNT}>
          {(visible) => (
            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.slice(0, visible).map((group, i) => (
                <ScrollReveal key={group.label} delay={i * 40}>
                  <div className="rounded-2xl border border-white/8 bg-[#1a2234] p-6 transition hover:border-cyan-500/30">
                    <h3 className="font-mono text-sm font-semibold text-violet-400">
                      {group.label}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </ViewMore>
      </div>
    </section>
  );
}
