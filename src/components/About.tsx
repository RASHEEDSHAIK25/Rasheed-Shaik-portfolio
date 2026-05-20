"use client";

import { education } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { role } = usePortfolio();

  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="about"
            label="About"
            title={role.aboutTitle}
            subtitle={role.aboutSubtitle}
          />
        </ScrollReveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={100}>
            <p
              key={role.id}
              className="text-lg leading-relaxed text-slate-400 animate-[fade-up_0.4s_ease]"
            >
              {role.bio}
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.school} delay={150 + i * 60}>
                <article className="card-shine rounded-2xl border border-white/8 bg-[#1a2234] p-6 transition duration-300 hover:border-cyan-500/25 hover:translate-y-[-2px]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold text-white">{edu.degree}</h3>
                    <span className="rounded-full bg-cyan-500/15 px-3 py-1 font-mono text-xs text-cyan-400">
                      GPA {edu.gpa}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{edu.school}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {edu.location} · {edu.period}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
