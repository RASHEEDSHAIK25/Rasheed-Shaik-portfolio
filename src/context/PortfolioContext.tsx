"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  careerRoles,
  profile as defaultProfile,
  projects as defaultProjects,
  resumes as defaultResumes,
} from "@/data/portfolio";
import type {
  CareerRoleConfig,
  CareerRoleId,
  ProfileBase,
  Project,
  ResumeOption,
  SiteOverrides,
} from "@/types/portfolio";
import { ROLE_STORAGE_KEY, STORAGE_KEY } from "@/types/portfolio";

interface PortfolioContextValue {
  roleId: CareerRoleId;
  setRoleId: (id: CareerRoleId) => void;
  role: CareerRoleConfig;
  profile: ProfileBase;
  resumes: ResumeOption[];
  activeResume: ResumeOption;
  setActiveResumeId: (id: string) => void;
  activeResumeId: string;
  projectsForRole: Project[];
  allProjects: Project[];
  customProjects: Project[];
  overrides: SiteOverrides;
  updateOverrides: (patch: SiteOverrides) => void;
  addProject: (project: Project) => void;
  removeCustomProject: (slug: string) => void;
  resetOverrides: () => void;
  exportConfig: () => void;
  importConfig: (json: string) => boolean;
  isTransitioning: boolean;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

function mergeRole(
  base: CareerRoleConfig,
  patch?: Partial<CareerRoleConfig>
): CareerRoleConfig {
  if (!patch) return base;
  return { ...base, ...patch };
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [roleId, setRoleIdState] = useState<CareerRoleId>("data-science");
  const [activeResumeId, setActiveResumeId] = useState<string>("");
  const [overrides, setOverrides] = useState<SiteOverrides>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedRole = localStorage.getItem(ROLE_STORAGE_KEY) as CareerRoleId | null;
      if (savedRole && careerRoles.some((r) => r.id === savedRole)) {
        setRoleIdState(savedRole);
      }
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setOverrides(JSON.parse(raw) as SiteOverrides);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const setRoleId = useCallback((id: CareerRoleId) => {
    if (id === roleId) return;
    setIsTransitioning(true);
    setRoleIdState(id);
    localStorage.setItem(ROLE_STORAGE_KEY, id);
    const role = careerRoles.find((r) => r.id === id)!;
    setActiveResumeId(role.primaryResumeId);
    window.setTimeout(() => setIsTransitioning(false), 400);
  }, [roleId]);

  const updateOverrides = useCallback((patch: SiteOverrides) => {
    setOverrides((prev) => {
      const next: SiteOverrides = {
        ...prev,
        profile: patch.profile ? { ...prev.profile, ...patch.profile } : prev.profile,
        roles: patch.roles ? { ...prev.roles, ...patch.roles } : prev.roles,
        customResumes: patch.customResumes
          ? { ...prev.customResumes, ...patch.customResumes }
          : prev.customResumes,
        customProjects:
          patch.customProjects !== undefined
            ? patch.customProjects
            : prev.customProjects,
        hiddenProjectSlugs:
          patch.hiddenProjectSlugs !== undefined
            ? patch.hiddenProjectSlugs
            : prev.hiddenProjectSlugs,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const addProject = useCallback((project: Project) => {
    setOverrides((prev) => {
      const list = [...(prev.customProjects ?? []), project];
      const next = { ...prev, customProjects: list };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const removeCustomProject = useCallback((slug: string) => {
    setOverrides((prev) => {
      const next = {
        ...prev,
        customProjects: (prev.customProjects ?? []).filter((p) => p.slug !== slug),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const resetOverrides = useCallback(() => {
    setOverrides({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const exportConfig = useCallback(() => {
    const blob = new Blob(
      [JSON.stringify({ roleId, overrides }, null, 2)],
      { type: "application/json" }
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "portfolio-settings.json";
    a.click();
  }, [roleId, overrides]);

  const importConfig = useCallback((json: string) => {
    try {
      const data = JSON.parse(json) as {
        roleId?: CareerRoleId;
        overrides?: SiteOverrides;
      };
      if (data.roleId) setRoleIdState(data.roleId);
      if (data.overrides) {
        setOverrides(data.overrides);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data.overrides));
      }
      return true;
    } catch {
      return false;
    }
  }, []);

  const baseRole = getRoleById(roleId);
  const role = useMemo(
    () => mergeRole(baseRole, overrides.roles?.[roleId]),
    [baseRole, overrides.roles, roleId]
  );

  const profile = useMemo(
    () => ({ ...defaultProfile, ...overrides.profile }),
    [overrides.profile]
  );

  const resumes = useMemo(
    () =>
      defaultResumes.map((r) => ({
        ...r,
        ...overrides.customResumes?.[r.id],
        path: overrides.customResumes?.[r.id]?.path ?? r.path,
        label: overrides.customResumes?.[r.id]?.label ?? r.label,
      })),
    [overrides.customResumes]
  );

  useEffect(() => {
    if (!hydrated) return;
    if (!activeResumeId) {
      setActiveResumeId(role.primaryResumeId);
    }
  }, [hydrated, activeResumeId, role.primaryResumeId]);

  const activeResume = useMemo(() => {
    const id = activeResumeId || role.primaryResumeId;
    const found = resumes.find((r) => r.id === id) ?? resumes[0];
    return found;
  }, [activeResumeId, role.primaryResumeId, resumes]);

  const allProjects = useMemo(() => {
    const hidden = new Set(overrides.hiddenProjectSlugs ?? []);
    const custom = overrides.customProjects ?? [];
    const base = defaultProjects.filter((p) => !hidden.has(p.slug));
    const customSlugs = new Set(custom.map((p) => p.slug));
    const merged = [
      ...base.filter((p) => !customSlugs.has(p.slug)),
      ...custom,
    ];
    return merged;
  }, [overrides.customProjects, overrides.hiddenProjectSlugs]);

  const customProjects = useMemo(
    () => overrides.customProjects ?? [],
    [overrides.customProjects]
  );

  const projectsForRole = useMemo(() => {
    const slugs = new Set(role.featuredProjectSlugs);
    const forRole = allProjects.filter((p) => p.roles.includes(roleId));
    return [
      ...forRole.filter((p) => slugs.has(p.slug) || p.featured),
      ...forRole.filter((p) => !slugs.has(p.slug) && !p.featured),
    ];
  }, [roleId, role.featuredProjectSlugs, allProjects]);

  const value: PortfolioContextValue = {
    roleId,
    setRoleId,
    role,
    profile,
    resumes: resumes.filter((r) => r.roles.includes(roleId)),
    activeResume,
    setActiveResumeId,
    activeResumeId: activeResumeId || role.primaryResumeId,
    projectsForRole,
    allProjects,
    customProjects,
    overrides,
    updateOverrides,
    addProject,
    removeCustomProject,
    resetOverrides,
    exportConfig,
    importConfig,
    isTransitioning,
  };

  return (
    <PortfolioContext.Provider value={value}>
      <div
        className={`transition-opacity duration-300 ${isTransitioning ? "opacity-70" : "opacity-100"}`}
      >
        {children}
      </div>
    </PortfolioContext.Provider>
  );
}

function getRoleById(id: CareerRoleId) {
  return careerRoles.find((r) => r.id === id)!;
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}
