export type ExperimentSeries = "metodologica" | "aplicada";
export type ExperimentStatus = "draft" | "in_progress" | "published";

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

export interface LaboratoryumProject {
  name: string;
  tagline: string;
  coreQuestion: string;
  manifesto: string;
  valueProposition: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface LaboratoryumStats {
  totalExperiments: number;
  methodologicalSeries: number;
  appliedSeries: number;
}

export interface LaboratoryumNavigationItem {
  id: string;
  label: string;
}

export interface LaboratoryumContent {
  project: LaboratoryumProject;
  navigation: LaboratoryumNavigationItem[];
  stats: LaboratoryumStats;
  experiments: LaboratoryumExperiment[];
}
