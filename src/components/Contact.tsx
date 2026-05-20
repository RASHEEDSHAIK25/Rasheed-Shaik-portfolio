"use client";

import { usePortfolio } from "@/context/PortfolioContext";
import { useAccent } from "@/hooks/useAccent";
import { ScrollReveal } from "./effects/ScrollReveal";
import { ResumePicker } from "./ResumePicker";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { profile, role } = usePortfolio();
  const accent = useAccent();

  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="contact"
            label="Contact"
            title="Let's build something together"
            subtitle={role.contactSubtitle}
          />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            className={`card-shine rounded-3xl border bg-gradient-to-br from-[#1a2234] to-[#111827] p-10 text-center sm:p-14 ${accent.border}`}
          >
            <p className="text-2xl font-bold text-white sm:text-3xl">
              Hiring for{" "}
              <span className={accent.text}>{role.label}</span>?
            </p>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Pick the resume that matches the role — each PDF is tailored for
              different job applications.
            </p>

            <div className="mt-8">
              <ResumePicker variant="cards" />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className={`rounded-full bg-gradient-to-r ${accent.gradient} px-8 py-3.5 text-sm font-semibold text-[#0a0e17]`}
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-white/15 px-8 py-3.5 text-sm text-white hover:bg-white/5"
              >
                {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                GitHub
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
