import { useEffect, useMemo, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const featuredCount = useMemo(
    () => content.experiments.filter((exp) => exp.featured).length,
    [content.experiments],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filtered]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

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
      <header className="lab-header" data-reveal>
        <p className="hero-text">Futuros de la web, en formato experimento.</p>
        <p className="hero-question">
          {content.project.coreQuestion ?? "¿Cómo será una web que ya no se diseña solo para pantallas, sino también para agentes, asistentes, lectores, traducciones, automatizaciones y formas de acceso que todavía están apareciendo?"}
        </p>
        <p className="hero-manifesto">
          {content.project.manifesto ?? "No significa que la interfaz desaparezca. Significa que ya no es el único modo de acceso."}
        </p>
      </header>

      <section id="experimentos" className="periodic-section" data-reveal>
        <h2 className="lab-section-title">Índice Periódico</h2>
        <PeriodicGrid experiments={content.experiments} limit={12} />
        <ul className="periodic-legend" aria-label="Leyenda de estados">
          <li><span className="legend-dot legend-published" aria-hidden="true" />Publicado</li>
          <li><span className="legend-dot legend-in-progress" aria-hidden="true" />En curso</li>
          <li><span className="legend-dot legend-draft" aria-hidden="true" />Borrador</li>
        </ul>
      </section>

      <section id="archivo" className="exp-section" data-reveal>
        <div className="section-header">
          <h2 className="lab-section-title">Archivo de Experimentos</h2>
          <p className="lab-meta" role="status" aria-live="polite">
            Resultados: {filtered.length} / {content.experiments.length} · Página {currentPage} de {totalPages}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="exp-empty" role="status" aria-live="polite">
            No encontramos resultados para tu búsqueda. Prueba con otro término o limpia los filtros.
          </div>
        ) : (
          <div
            className="exp-list exp-list-animate"
            aria-live="polite"
            key={filtered.length + (filtered[0]?.code ?? '')}
          >
            {paginated.map((experiment) => (
              <ExperimentCard key={experiment.code} experiment={experiment} />
            ))}
          </div>
        )}

        {filtered.length > pageSize && (
          <nav className="pagination" aria-label="Paginación de experimentos">
            <button
              type="button"
              className="page-btn lab-focus"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              ← Anterior
            </button>
            <span className="page-status">Página {currentPage} / {totalPages}</span>
            <button
              type="button"
              className="page-btn lab-focus"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Siguiente →
            </button>
          </nav>
        )}
      </section>
    </Layout>
  );
}
