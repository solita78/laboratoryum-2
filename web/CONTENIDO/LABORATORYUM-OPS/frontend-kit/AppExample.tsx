import { useState } from "react";
import content from "./data/laboratoryum-content.json";
import type { LaboratoryumContent, LaboratoryumExperiment } from "./types/content";
import { PeriodicGrid } from "./components/PeriodicGrid";
import { ExperimentFilters } from "./components/ExperimentFilters";
import { ExperimentCard } from "./components/ExperimentCard";
import "./styles/tokens.css";
import "./components/styles.css";

export function AppExample() {
  const data = content as LaboratoryumContent;
  const [filtered, setFiltered] = useState<LaboratoryumExperiment[]>(data.experiments);

  return (
    <main className="lab-container">
      <header className="hero">
        <p className="lab-meta">Archivo de experimentos</p>
        <h1 className="lab-ui">{data.project.name}</h1>
        <p className="hero-tagline">{data.project.tagline}</p>
        <p className="hero-question">{data.project.coreQuestion}</p>
        <p className="hero-manifesto">{data.project.manifesto}</p>
        <p className="hero-value">{data.project.valueProposition}</p>
      </header>

      <PeriodicGrid experiments={data.experiments} limit={12} />

      <section aria-labelledby="archivo-experimentos" className="archive-head">
        <div className="section-head">
          <h2 id="archivo-experimentos" className="lab-ui section-title">Archivo de experimentos</h2>
          <p className="lab-meta">Resultados: {filtered.length} / {data.experiments.length}</p>
        </div>
      </section>

      <ExperimentFilters experiments={data.experiments} onChange={setFiltered} />

      <section className="exp-list" aria-live="polite">
        {filtered.map((exp) => (
          <ExperimentCard key={exp.code} experiment={exp} />
        ))}
      </section>
    </main>
  );
}
