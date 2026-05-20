"use client";

import { useMemo } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import type { Project } from "@/types/portfolio";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";
import { ViewMore } from "./ViewMore";

const INITIAL_COUNT = 4;

export function Projects() {
  const { role, projectsForRole } = usePortfolio();

  const ordered = useMemo(() => {
    const slugs = new Set(role.featuredProjectSlugs);
    const featured = projectsForRole.filter(
      (p) => slugs.has(p.slug) || p.featured
    );
    const rest = projectsForRole.filter(
      (p) => !slugs.has(p.slug) && !p.featured
    );
    return [...featured, ...rest];
  }, [projectsForRole, role.featuredProjectSlugs]);

  return (
    <section className="border-t border-white/5 bg-[#0d1220] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="projects"
            label="Projects"
            title={role.projectsTitle}
            subtitle="Top 4 shown — expand to see every project for this role."
          />
        </ScrollReveal>

        <ViewMore total={ordered.length} initial={INITIAL_COUNT} resetKey={role.id}>
          {(visible) => (
            <div className="grid gap-6 md:grid-cols-2">
              {ordered.slice(0, visible).map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 50}>
                  <ProjectCard
                    project={project}
                    large={i < 2 && visible >= 2}
                  />
                </ScrollReveal>
              ))}
            </div>
          )}
        </ViewMore>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-white/8 bg-[#1a2234] p-6 transition duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 ${
        large ? "md:p-8" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-bold text-white group-hover:text-cyan-300 ${large ? "text-xl" : "text-base"}`}
        >
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full bg-amber-400/15 px-2.5 py-1 font-mono text-xs text-amber-300">
          {project.metrics}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="font-mono text-xs text-violet-300/90">
            #{t}
          </li>
        ))}
      </ul>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 transition hover:gap-2"
      >
        View on GitHub →
      </a>
    </article>
  );
}
