import { useMemo, useState } from "react";
import { ExperimentCard } from "../components/ExperimentCard";
import { ExperimentFilters } from "../components/ExperimentFilters";
import { PeriodicGrid } from "../components/PeriodicGrid";
import { Layout } from "../components/Layout";
import type { LaboratoryumContent, LaboratoryumExperiment } from "../types/content";

type Props = {
  content: LaboratoryumContent;
};

export function HomePage({ content }: Props) {
  const [filtered, setFiltered] = useState<LaboratoryumExperiment[]>(content.experiments);

  const featuredCount = useMemo(
    () => content.experiments.filter((exp) => exp.featured).length,
    [content.experiments],
  );

  const sidebar = (
    <div className="sidebar-controls">
      <section className="sidebar-section">
        <h2 className="lab-meta">Estadísticas</h2>
        <p className="lab-meta">
          {content.stats.totalExperiments} LABS ACTIVOS<br />
          {featuredCount} DESTACADOS
        </p>
      </section>

      <section className="sidebar-section">
        <h2 className="lab-meta">Filtros de Búsqueda</h2>
        <ExperimentFilters experiments={content.experiments} onChange={setFiltered} />
      </section>
    </div>
  );

  return (
    <Layout sidebarContent={sidebar}>
      <header className="lab-header">
        <p className="hero-text">Laboratoryum es un laboratorio independiente sobre futuros de la web: un espacio de investigación, prototipado y experimentación sobre IA, automatización, accesibilidad, lenguaje, cultura digital y agentes.</p>
      </header>

      <section id="experimentos" className="periodic-section">
        <h2 className="lab-section-title">Índice Periódico</h2>
        <PeriodicGrid experiments={content.experiments} limit={12} />
      </section>

      <section id="archivo" className="exp-section">
        <div className="section-header">
          <h2 className="lab-section-title">Archivo de Experimentos</h2>
          <p className="lab-meta" role="status" aria-live="polite">Resultados: {filtered.length} / {content.experiments.length}</p>
        </div>

        {filtered.length === 0 ? (
          <div className="exp-empty" role="status" aria-live="polite">
            No encontramos resultados para tu búsqueda. Prueba con otro término o limpia los filtros.
          </div>
        ) : (
          <div className="exp-list" aria-live="polite">
            {filtered.map((experiment) => (
              <ExperimentCard key={experiment.code} experiment={experiment} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
