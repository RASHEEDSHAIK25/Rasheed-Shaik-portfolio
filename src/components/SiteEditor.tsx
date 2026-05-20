"use client";

import { useRef, useState } from "react";
import { careerRoles } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";
import { useEditorAuth } from "@/context/EditorAuthContext";
import type { CareerRoleId, Project } from "@/types/portfolio";

const emptyProject = {
  title: "",
  description: "",
  tech: "",
  metrics: "",
  github: "",
  featured: false,
  roles: ["data-science", "data-analyst", "ai-ml"] as CareerRoleId[],
};

export function SiteEditor() {
  const { configured, authenticated, login, logout } = useEditorAuth();
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [tab, setTab] = useState<
    "profile" | "role" | "resume" | "projects" | "linkedin"
  >("profile");
  const [saved, setSaved] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const {
    roleId,
    profile,
    role,
    overrides,
    customProjects,
    updateOverrides,
    addProject,
    removeCustomProject,
    resetOverrides,
    exportConfig,
    importConfig,
  } = usePortfolio();

  const [form, setForm] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    tagline: role.tagline,
    bio: role.bio,
    title: role.title,
    resumePath: "",
    resumeLabel: "",
  });

  const [newProject, setNewProject] = useState(emptyProject);

  if (!configured) return null;

  const handleOpen = () => {
    if (!authenticated) {
      setShowLogin(true);
      setLoginError("");
      setPassword("");
      return;
    }
    setForm({
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      tagline: role.tagline,
      bio: role.bio,
      title: role.title,
      resumePath: "",
      resumeLabel: "",
    });
    setOpen(true);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await login(password);
    if (ok) {
      setShowLogin(false);
      setPassword("");
      setOpen(true);
      setForm({
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        tagline: role.tagline,
        bio: role.bio,
        title: role.title,
        resumePath: "",
        resumeLabel: "",
      });
    } else {
      setLoginError("Wrong password. Try again.");
    }
  };

  const save = () => {
    updateOverrides({
      profile: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      roles: {
        [roleId]: {
          tagline: form.tagline,
          bio: form.bio,
          title: form.title,
        },
      },
      ...(form.resumePath
        ? {
            customResumes: {
              [role.primaryResumeId]: {
                path: form.resumePath.startsWith("/")
                  ? form.resumePath
                  : `/${form.resumePath}`,
                label: form.resumeLabel || undefined,
              },
            },
          }
        : {}),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") ||
    `project-${Date.now()}`;

  const submitProject = () => {
    if (!newProject.title.trim() || !newProject.description.trim()) {
      alert("Title and description are required.");
      return;
    }
    const project: Project = {
      slug: slugify(newProject.title),
      title: newProject.title.trim(),
      description: newProject.description.trim(),
      tech: newProject.tech
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      metrics: newProject.metrics.trim() || "New project",
      github: newProject.github.trim() || profile.github,
      featured: newProject.featured,
      roles: newProject.roles,
    };
    addProject(project);
    setNewProject(emptyProject);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleProjectRole = (r: CareerRoleId) => {
    setNewProject((p) => ({
      ...p,
      roles: p.roles.includes(r)
        ? p.roles.filter((x) => x !== r)
        : [...p.roles, r],
    }));
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/40 bg-[#111827] text-xl shadow-lg shadow-cyan-500/20 transition hover:scale-105 hover:border-cyan-400"
        title={authenticated ? "Edit site" : "Editor login (private)"}
        aria-label={authenticated ? "Open site editor" : "Editor login"}
      >
        {authenticated ? "✎" : "🔒"}
      </button>

      {showLogin && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4">
          <form
            onSubmit={handleLogin}
            className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#111827] p-8 shadow-2xl"
          >
            <h2 className="text-xl font-bold text-white">Editor login</h2>
            <p className="mt-2 text-sm text-slate-400">
              Only you can edit this portfolio. Session lasts 12 hours.
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your editor password"
              className="mt-6 w-full rounded-xl border border-white/15 bg-[#0a0e17] px-4 py-3 text-white outline-none focus:border-cyan-500/50"
              autoFocus
            />
            {loginError && (
              <p className="mt-2 text-sm text-red-400">{loginError}</p>
            )}
            <button
              type="submit"
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3 text-sm font-semibold text-[#0a0e17]"
            >
              Unlock editor
            </button>
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full text-sm text-slate-500 hover:text-white"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {open && authenticated && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-4 sm:items-center">
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#111827] shadow-2xl"
            role="dialog"
            aria-labelledby="editor-title"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#111827] px-6 py-4">
              <div>
                <h2 id="editor-title" className="text-lg font-bold text-white">
                  Site Editor
                </h2>
                <p className="text-xs text-emerald-400/90">🔒 Private session</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="text-xs text-slate-500 hover:text-red-400"
                >
                  Logout
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-white/10 px-6 py-3">
              {(
                ["profile", "role", "projects", "resume", "linkedin"] as const
              ).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`rounded-lg px-3 py-1.5 text-sm capitalize ${
                    tab === t ? "bg-cyan-500/20 text-cyan-300" : "text-slate-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="space-y-4 p-6">
              {tab === "profile" && (
                <>
                  <Field
                    label="Full name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  />
                  <Field
                    label="Email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  />
                  <Field
                    label="Phone"
                    value={form.phone}
                    onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                  />
                </>
              )}

              {tab === "role" && (
                <>
                  <p className="text-xs text-slate-500">
                    Role:{" "}
                    <strong className="text-cyan-400">
                      {careerRoles.find((r) => r.id === roleId)?.label}
                    </strong>{" "}
                    (switch on page first)
                  </p>
                  <Field
                    label="Job title"
                    value={form.title}
                    onChange={(v) => setForm((f) => ({ ...f, title: v }))}
                  />
                  <Field
                    label="Tagline"
                    value={form.tagline}
                    onChange={(v) => setForm((f) => ({ ...f, tagline: v }))}
                    multiline
                  />
                  <Field
                    label="About bio"
                    value={form.bio}
                    onChange={(v) => setForm((f) => ({ ...f, bio: v }))}
                    multiline
                  />
                </>
              )}

              {tab === "projects" && (
                <>
                  <p className="text-sm font-medium text-white">Add new project</p>
                  <Field
                    label="Project title"
                    value={newProject.title}
                    onChange={(v) =>
                      setNewProject((p) => ({ ...p, title: v }))
                    }
                    placeholder="e.g. Customer Churn Prediction"
                  />
                  <Field
                    label="Description"
                    value={newProject.description}
                    onChange={(v) =>
                      setNewProject((p) => ({ ...p, description: v }))
                    }
                    multiline
                  />
                  <Field
                    label="Tech (comma separated)"
                    value={newProject.tech}
                    onChange={(v) => setNewProject((p) => ({ ...p, tech: v }))}
                    placeholder="Python, TensorFlow, Streamlit"
                  />
                  <Field
                    label="Metric badge"
                    value={newProject.metrics}
                    onChange={(v) =>
                      setNewProject((p) => ({ ...p, metrics: v }))
                    }
                    placeholder="96% accuracy"
                  />
                  <Field
                    label="GitHub URL"
                    value={newProject.github}
                    onChange={(v) =>
                      setNewProject((p) => ({ ...p, github: v }))
                    }
                    placeholder="https://github.com/..."
                  />
                  <label className="flex items-center gap-2 text-sm text-slate-400">
                    <input
                      type="checkbox"
                      checked={newProject.featured}
                      onChange={(e) =>
                        setNewProject((p) => ({
                          ...p,
                          featured: e.target.checked,
                        }))
                      }
                    />
                    Show as featured (large card)
                  </label>
                  <p className="text-xs text-slate-500">Show for roles:</p>
                  <div className="flex flex-wrap gap-2">
                    {careerRoles.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => toggleProjectRole(r.id)}
                        className={`rounded-full px-3 py-1 text-xs ${
                          newProject.roles.includes(r.id)
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "border border-white/10 text-slate-500"
                        }`}
                      >
                        {r.shortLabel}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={submitProject}
                    className="w-full rounded-xl border border-cyan-500/40 py-3 text-sm font-medium text-cyan-300 hover:bg-cyan-500/10"
                  >
                    + Add project
                  </button>

                  {customProjects.length > 0 && (
                    <div className="border-t border-white/10 pt-4">
                      <p className="mb-2 text-xs text-slate-500">
                        Your added projects ({customProjects.length})
                      </p>
                      <ul className="space-y-2">
                        {customProjects.map((p) => (
                          <li
                            key={p.slug}
                            className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm"
                          >
                            <span className="text-white">{p.title}</span>
                            <button
                              type="button"
                              onClick={() => removeCustomProject(p.slug)}
                              className="text-xs text-red-400 hover:underline"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {tab === "linkedin" && (
                <p className="text-sm text-slate-400">
                  LinkedIn highlights & certificates are in code. Message me or
                  add via a future editor tab.
                </p>
              )}

              {tab === "resume" && (
                <>
                  <p className="text-sm text-slate-400">
                    Add PDF to <code className="text-cyan-400">public/</code>,
                    then enter path:
                  </p>
                  <Field
                    label="PDF path"
                    value={form.resumePath}
                    onChange={(v) => setForm((f) => ({ ...f, resumePath: v }))}
                    placeholder="/resume-ml-engineer.pdf"
                  />
                  <Field
                    label="Resume label"
                    value={form.resumeLabel}
                    onChange={(v) => setForm((f) => ({ ...f, resumeLabel: v }))}
                  />
                </>
              )}

              {tab !== "projects" && (
                <button
                  type="button"
                  onClick={save}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3 text-sm font-semibold text-[#0a0e17]"
                >
                  {saved ? "✓ Saved!" : "Save changes"}
                </button>
              )}

              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={exportConfig}
                  className="rounded-lg border border-white/15 px-3 py-2 text-xs text-slate-300 hover:bg-white/5"
                >
                  Export backup
                </button>
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="rounded-lg border border-white/15 px-3 py-2 text-xs text-slate-300 hover:bg-white/5"
                >
                  Import backup
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm("Reset all edits?")) {
                      resetOverrides();
                      setOpen(false);
                    }
                  }}
                  className="rounded-lg border border-red-500/30 px-3 py-2 text-xs text-red-400"
                >
                  Reset
                </button>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const reader = new FileReader();
                  reader.onload = () => {
                    if (typeof reader.result === "string") {
                      importConfig(reader.result);
                      setOpen(false);
                    }
                  };
                  reader.readAsText(file);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full rounded-xl border border-white/15 bg-[#0a0e17] px-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-slate-500">{label}</span>
      {multiline ? (
        <textarea
          rows={3}
          className={cls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={cls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
