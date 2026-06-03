import { useCallback, useMemo, useState, useTransition } from "react";
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

  const featuredCount = useMemo(
    () => content.experiments.filter((exp) => exp.featured).length,
    [content.experiments],
  );

  return (
    <main id="main-content" tabIndex={-1} className="lab-container">
      <Helmet>
        <title>Laboratoryum | Investigación y Futuros de la Web</title>
        <meta name="description" content="Laboratorio independiente sobre futuros de la web: IA, automatización, accesibilidad y cultura digital." />
        <meta property="og:title" content="Laboratoryum | Investigación y Futuros de la Web" />
        <meta property="og:description" content="Espacio de investigación y experimentación sobre IA, automatización y cultura digital." />
        <meta property="og:type" content="website" />
      </Helmet>

      <header className="lab-header">
        <p>Laboratoryum es un laboratorio independiente sobre futuros de la web: un espacio de investigación, prototipado y experimentación sobre IA, automatización, accesibilidad, lenguaje, cultura digital y agentes.</p>
        <p className="lab-meta">
          {content.stats.totalExperiments} experimentos · {featuredCount} destacados
        </p>
      </header>

      <section id="experimentos">
        <PeriodicGrid experiments={content.experiments} limit={12} />
      </section>

      <section id="recursos">
        <h2 className="lab-section-title">Explorar todos los experimentos</h2>
        <ExperimentFilters experiments={content.experiments} onFilterChange={handleFilterChange} />

        <p className="lab-meta" role="status" aria-live="polite">
          {isPending ? "Actualizando resultados..." : `Mostrando ${filtered.length} de ${content.experiments.length} experimentos`}
        </p>

        <div style={{ opacity: isPending ? 0.7 : 1, transition: "opacity 0.2s" }}>
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
        </div>
      </section>

      <section id="archivo">
        {/* Placeholder for archivo if needed */}
      </section>
    </main>
  );
}
