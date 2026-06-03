export type ExperimentSeries = "metodologica" | "aplicada";

export type ExperimentStatus = "draft" | "in_progress" | "published";

export interface LaboratoryumProject {
  name: string;
  tagline: string;
  valueProposition: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface LaboratoryumStats {
  totalExperiments: number;
  methodologicalSeries: number;
  appliedSeries: number;
}

export interface LaboratoryumExperiment {
  code: string;
  number: number;
  title: string;
  slug: string;
  series: ExperimentSeries;
  summary: string;
  question: string;
  hypothesis: string;
  kit: string;
  periodicSymbol: string;
  status: ExperimentStatus;
  featured: boolean;
  tags: string[];
}

export interface LaboratoryumContent {
  project: LaboratoryumProject;
  navigation: NavigationItem[];
  stats: LaboratoryumStats;
  experiments: LaboratoryumExperiment[];
}

export function isLaboratoryumContent(value: unknown): value is LaboratoryumContent {
  if (!value || typeof value !== "object") return false;

  const data = value as Partial<LaboratoryumContent>;

  if (!data.project || typeof data.project !== "object") return false;
  if (!Array.isArray(data.navigation)) return false;
  if (!data.stats || typeof data.stats !== "object") return false;
  if (!Array.isArray(data.experiments)) return false;

  return true;
}
