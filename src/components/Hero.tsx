"use client";

import Image from "next/image";
import { usePortfolio } from "@/context/PortfolioContext";
import { useAccent } from "@/hooks/useAccent";
import { heroTechLines } from "@/data/portfolio";
import { ParticleCanvas } from "./effects/ParticleCanvas";
import { TypingText } from "./effects/TypingText";
import { RoleSwitcher } from "./RoleSwitcher";
import { ResumePicker } from "./ResumePicker";

export function Hero() {
  const { profile, role } = usePortfolio();
  const accent = useAccent();

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
      <ParticleCanvas />
      <div className={`glow-orb absolute -left-32 top-20 h-96 w-96 rounded-full ${accent.glow}`} />
      <div className="glow-orb absolute -right-20 top-40 h-80 w-80 rounded-full bg-violet-500/15" />
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">View portfolio as:</p>
          <RoleSwitcher />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <p
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs ${accent.border} ${accent.bg} ${accent.text}`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-current" />
              {role.badge}
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className={`bg-gradient-to-r ${accent.gradient} bg-clip-text text-transparent`}>
                {profile.shortName}
              </span>
              <br />
              <span key={role.id} className="inline-block animate-[fade-up_0.5s_ease]">
                {role.title}
              </span>
            </h1>

            <p
              key={`tag-${role.id}`}
              className="max-w-xl text-lg leading-relaxed text-slate-400 animate-[fade-up_0.5s_ease]"
            >
              {role.tagline}
            </p>

            <p className="font-mono text-sm text-slate-500">
              <TypingText texts={heroTechLines} />
            </p>

            <a
              href="#tech-stack"
              className="inline-flex items-center gap-2 text-sm text-cyan-400/90 transition hover:text-cyan-300"
            >
              See what I&apos;m learning →
            </a>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`rounded-full bg-gradient-to-r ${accent.gradient} px-7 py-3.5 text-sm font-semibold text-[#0a0e17] shadow-lg transition hover:scale-[1.02]`}
              >
                View Projects
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>

            <ResumePicker />

            <dl className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {role.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className={`mt-1 font-mono text-2xl font-bold ${accent.text}`}>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="group animate-float relative">
              <div
                className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${accent.gradient} opacity-30 blur-2xl transition group-hover:opacity-50`}
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a2234] p-2 shadow-2xl transition duration-500 group-hover:scale-[1.02] group-hover:border-cyan-500/30">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={420}
                  height={520}
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
              <div
                className={`absolute -bottom-4 -left-4 rounded-2xl border ${accent.border} bg-[#111827]/90 px-4 py-3 backdrop-blur`}
              >
                <p className={`font-mono text-xs ${accent.text}`}>Currently</p>
                <p className="text-sm font-medium text-white">{role.statusCard}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
