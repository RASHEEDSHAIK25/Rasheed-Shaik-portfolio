export type CareerRoleId = "data-science" | "data-analyst" | "ai-ml";

export type ResumeId = "data-analyst" | "full" | "ml-engineer";

export interface ResumeOption {
  id: ResumeId;
  label: string;
  description: string;
  path: string;
  roles: CareerRoleId[];
}

export interface CareerRoleConfig {
  id: CareerRoleId;
  label: string;
  shortLabel: string;
  title: string;
  tagline: string;
  bio: string;
  badge: string;
  statusCard: string;
  aboutTitle: string;
  aboutSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  contactSubtitle: string;
  primaryResumeId: ResumeId;
  stats: { label: string; value: string }[];
  featuredProjectSlugs: string[];
  accent: "cyan" | "violet" | "amber";
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  metrics: string;
  github: string;
  featured: boolean;
  roles: CareerRoleId[];
}

export interface ProfileBase {
  name: string;
  shortName: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  image: string;
}

export interface SiteOverrides {
  profile?: Partial<ProfileBase>;
  roles?: Partial<Record<CareerRoleId, Partial<CareerRoleConfig>>>;
  customResumes?: Partial<Record<ResumeId, { path?: string; label?: string }>>;
  customProjects?: Project[];
  hiddenProjectSlugs?: string[];
}

export type CertificateCategory =
  | "award"
  | "cloud"
  | "analytics"
  | "simulation"
  | "hackathon";

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  detail: string;
  category: CertificateCategory;
  verifyUrl?: string;
}

export type LinkedInHighlightType =
  | "hackathon"
  | "internship"
  | "certification"
  | "learning";

export type TechFocusStatus = "building" | "learning" | "exploring";

export interface TechFocus {
  id: string;
  name: string;
  description: string;
  status: TechFocusStatus;
  progress: number;
  icon: string;
}

export interface AiTool {
  name: string;
  category: string;
}

export interface LinkedInHighlight {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  type: LinkedInHighlightType;
  linkedinUrl: string;
  tags: string[];
}

export const STORAGE_KEY = "rasheed-portfolio-v2";
export const ROLE_STORAGE_KEY = "rasheed-portfolio-role";
