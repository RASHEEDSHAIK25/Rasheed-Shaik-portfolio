"use client";

import { experience } from "@/data/portfolio";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="experience"
            label="Experience"
            title="Real-world impact"
          />
        </ScrollReveal>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 80}>
              <article className="relative rounded-2xl border border-white/8 bg-[#1a2234] p-8 pl-10 transition duration-300 hover:border-violet-500/30">
                <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-500" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-cyan-400">{job.company}</p>
                  </div>
                  <time className="font-mono text-sm text-slate-500">
                    {job.period}
                  </time>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-slate-400 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-cyan-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
