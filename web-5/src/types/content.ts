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

export interface ComparisonMatrix {
  headers: string[];
  rows: Record<string, string | number>[];
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
  publishedAt?: string;
  findings?: string[];
  observations?: string;
  protocol?: string;
  matrix?: ComparisonMatrix;
  demoUrl?: string;
}

export interface ManifestoContent {
  heroTitle: string;
  heroLead: string;
  heroBody: string;
  proofPoints: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface ArchivePanel {
  title: string;
  description: string;
  notes: string[];
}

export interface LaboratoryumContent {
  project: LaboratoryumProject;
  navigation: NavigationItem[];
  stats: LaboratoryumStats;
  manifesto: ManifestoContent;
  method: {
    centralQuestion: string;
    steps: MethodStep[];
  };
  archive: ArchivePanel;
  experiments: LaboratoryumExperiment[];
}
