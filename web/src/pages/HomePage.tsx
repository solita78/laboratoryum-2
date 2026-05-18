import { useCallback, useState, useTransition } from "react";
import { Helmet } from "react-helmet-async";
import { ExperimentCard } from "../components/ExperimentCard";
import { ExperimentFilters } from "../components/ExperimentFilters";
import { PeriodicGrid } from "../components/PeriodicGrid";
import type { LaboratoryumContent, LaboratoryumExperiment } from "../types/content";

type Props = {
  content: LaboratoryumContent;
};

export function HomePage({ content }: Props) {
  const [filtered, setFiltered] = useState<LaboratoryumExperiment[]>(content.experiments);
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = useCallback((newFiltered: LaboratoryumExperiment[]) => {
    startTransition(() => {
      setFiltered(newFiltered);
    });
  }, []);

  return (
    <div className="home-layout">
      <Helmet>
        <title>Laboratoryum | Investigación y Futuros de la Web</title>
        <meta name="description" content="Laboratorio independiente sobre futuros de la web: IA, automatización, accesibilidad y cultura digital." />
      </Helmet>

      <div className="lab-container">
        <header className="lab-header">
          <p className="hero-text">
            Laboratoryum es un laboratorio independiente sobre futuros de la web: un espacio de investigación, prototipado y experimentación sobre IA, automatización, accesibilidad, lenguaje, cultura digital y agentes.
          </p>
        </header>

        <section id="experimentos" className="periodic-section">
          <h2 className="sidebar-section-title">ÍNDICE PERIÓDICO</h2>
          <PeriodicGrid experiments={content.experiments} limit={12} />
        </section>

        <section id="recursos" className="archive-section">
          <h2 className="sidebar-section-title">ARCHIVO DE EXPERIMENTOS</h2>
          <div className="archive-controls">
             <ExperimentFilters experiments={content.experiments} onFilterChange={handleFilterChange} />
             <p className="lab-meta results-count">
               RESULTADOS: {filtered.length} / {content.experiments.length}
             </p>
          </div>

          <div className="exp-list" style={{ opacity: isPending ? 0.7 : 1, transition: "opacity 0.2s" }}>
            {filtered.length === 0 ? (
              <div className="exp-empty">
                No se encontraron experimentos con los filtros seleccionados.
              </div>
            ) : (
              filtered.map((experiment) => (
                <ExperimentCard key={experiment.code} experiment={experiment} />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
