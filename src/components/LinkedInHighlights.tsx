"use client";

import { linkedInHighlights, profile } from "@/data/portfolio";
import type { LinkedInHighlight, LinkedInHighlightType } from "@/types/portfolio";
import { ScrollReveal } from "./effects/ScrollReveal";
import { SectionHeading } from "./SectionHeading";

const typeConfig: Record<
  LinkedInHighlightType,
  { icon: string; color: string; label: string }
> = {
  hackathon: {
    icon: "🚀",
    color: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300",
    label: "Hackathon",
  },
  internship: {
    icon: "💼",
    color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    label: "Internship",
  },
  certification: {
    icon: "🎓",
    color: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    label: "Achievement",
  },
  learning: {
    icon: "📚",
    color: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    label: "Learning",
  },
};

function HighlightCard({ item }: { item: LinkedInHighlight }) {
  const cfg = typeConfig[item.type];
  return (
    <article className="group rounded-2xl border border-white/8 bg-[#1a2234] p-6 transition duration-300 hover:border-[#0a66c2]/40 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-xl ${cfg.color}`}
          >
            {cfg.icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.color}`}
              >
                {cfg.label}
              </span>
              <time className="font-mono text-xs text-slate-500">{item.date}</time>
            </div>
            <h3 className="mt-2 text-lg font-bold text-white group-hover:text-[#70b5f9]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              {item.excerpt}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href={item.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#0a66c2]/50 px-4 py-2 text-sm font-medium text-[#70b5f9] transition hover:bg-[#0a66c2]/15"
        >
          <LinkedInIcon small />
          View post
        </a>
      </div>
    </article>
  );
}

export function LinkedInHighlights() {
  return (
    <section className="border-t border-white/5 bg-[#0d1220] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="highlights"
            label="LinkedIn highlights"
            title="What I've shared & achieved"
            subtitle="Internships, hackathons, and learning milestones from LinkedIn."
          />
        </ScrollReveal>

        <ScrollReveal delay={60}>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-[#0a66c2]/40 bg-[#0a66c2]/10 px-5 py-3 transition hover:bg-[#0a66c2]/20"
          >
            <LinkedInIcon />
            <span className="text-sm font-medium text-white">
              Follow on LinkedIn · 950+ connections
            </span>
            <span className="text-[#70b5f9]">→</span>
          </a>
        </ScrollReveal>

        <div className="space-y-6">
          {linkedInHighlights.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 50}>
              <HighlightCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon({ small }: { small?: boolean }) {
  return (
    <svg
      className={small ? "h-4 w-4" : "h-5 w-5"}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
