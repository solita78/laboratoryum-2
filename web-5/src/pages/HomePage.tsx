import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
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
  const [visibleCount, setVisibleCount] = useState(8);
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = useCallback((next: LaboratoryumExperiment[]) => {
    startTransition(() => setFiltered(next));
  }, []);

  const featuredExperiments = useMemo(
    () => content.experiments.filter((experiment) => experiment.featured).slice(0, 4),
    [content.experiments],
  );
  const spotlightExperiment = useMemo(
    () =>
      content.experiments.find(
        (experiment) => experiment.findings?.length && experiment.observations,
      ) ?? content.experiments[0],
    [content.experiments],
  );
  const visibleExperiments = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  );

  const publishedCount = useMemo(
    () => content.experiments.filter((experiment) => experiment.status === "published").length,
    [content.experiments],
  );

  const inProgressCount = useMemo(
    () => content.experiments.filter((experiment) => experiment.status === "in_progress").length,
    [content.experiments],
  );

  const draftCount = useMemo(
    () => content.experiments.filter((experiment) => experiment.status === "draft").length,
    [content.experiments],
  );
  const canShowMore = visibleCount < filtered.length;

  useEffect(() => {
    setVisibleCount(8);
  }, [filtered]);

  return (
    <main id="main-content">
      <Helmet>
        <title>Laboratoryum | Experimentos sobre web, IA, contexto y memoria</title>
        <meta
          name="description"
          content="Laboratoryum investiga como cambia el sentido de la web cuando circula entre personas, plataformas y agentes. Cada LAB publica evidencia, metodo y kits reutilizables."
        />
        <meta property="og:title" content="Laboratoryum" />
        <meta
          property="og:description"
          content="Experimentos sobre web, IA, contexto y memoria digital."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="hero-section">
        <div className="lab-shell hero-grid">
          <div className="hero-copy">
            <p className="section-label">Temporada completa · 25 experimentos</p>
            <h1>{content.manifesto.heroTitle}</h1>
            <p className="hero-lead">{content.manifesto.heroLead}</p>
            <p className="hero-body">{content.manifesto.heroBody}</p>

            <div className="hero-actions">
              <a className="button-primary" href="#experimentos">
                {content.project.ctaPrimary}
              </a>
              <a className="button-secondary" href="#metodo">
                {content.project.ctaSecondary}
              </a>
            </div>

            <div className="hero-signal-grid">
              <article className="signal-card">
                <p className="section-label">Pregunta central</p>
                <p>{content.method.centralQuestion}</p>
              </article>
              <article className="signal-card">
                <p className="section-label">Arquitectura de temporada</p>
                <p>
                  10 experimentos de base metodológica y 15 casos aplicados por formato,
                  acceso, archivo y evidencia.
                </p>
              </article>
            </div>
          </div>

          <aside className="evidence-panel" aria-label="Panel de evidencia">
            <div className="evidence-panel-head">
              <p className="section-label">Estado del archivo</p>
              <span className="mini-chip">Edición 2026</span>
            </div>

            <div className="stat-grid">
              <article>
                <span>Total labs</span>
                <strong>{content.stats.totalExperiments}</strong>
              </article>
              <article>
                <span>Publicados</span>
                <strong>{publishedCount}</strong>
              </article>
              <article>
                <span>En curso</span>
                <strong>{inProgressCount}</strong>
              </article>
              <article>
                <span>Borradores</span>
                <strong>{draftCount}</strong>
              </article>
            </div>

            <div className="protocol-block">
              <p className="section-label">Protocolo editorial</p>
              <ol>
                {content.method.steps.map((step) => (
                  <li key={step.number}>
                    <span>{step.number}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="manifesto-strip">
        <div className="lab-shell manifesto-grid">
          {content.manifesto.proofPoints.map((item) => (
            <article key={item} className="manifesto-card">
              <span>[+]</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experimentos" className="section-block">
        <div className="lab-shell section-heading">
          <div>
            <p className="section-label">Índice periódico</p>
            <h2>Mapa inicial de la temporada</h2>
          </div>
          <p className="section-intro">
            Una lectura rápida del archivo: códigos, estados y problemas de circulación
            tratados en cada experimento.
          </p>
        </div>

        <div className="lab-shell">
          <PeriodicGrid experiments={content.experiments} limit={content.experiments.length} />
        </div>
      </section>

      <section className="section-block section-block-spotlight">
        <div className="lab-shell spotlight-layout">
          <article className="spotlight-main">
            <div className="spotlight-head">
              <div>
                <p className="section-label">Dossier inaugural</p>
                <h2>{spotlightExperiment.title}</h2>
              </div>
              <span className={`status-pill status-pill-${spotlightExperiment.status}`}>
                {spotlightExperiment.status === "published"
                  ? "Publicado"
                  : spotlightExperiment.status === "in_progress"
                    ? "En curso"
                    : "Borrador"}
              </span>
            </div>

            <p className="spotlight-summary">{spotlightExperiment.summary}</p>

            <dl className="spotlight-meta">
              <div>
                <dt>Pregunta</dt>
                <dd>{spotlightExperiment.question}</dd>
              </div>
              <div>
                <dt>Kit derivado</dt>
                <dd>{spotlightExperiment.kit}</dd>
              </div>
              <div>
                <dt>Observación principal</dt>
                <dd>{spotlightExperiment.observations}</dd>
              </div>
            </dl>

            <div className="spotlight-actions">
              <a className="button-primary" href={`/experimentos/${spotlightExperiment.slug}`}>
                Abrir dossier completo
              </a>
              <a className="button-secondary" href="#archivo">
                Ver archivo completo
              </a>
            </div>
          </article>

          <aside className="spotlight-side">
            <div className="spotlight-findings">
              <p className="section-label">Hallazgos visibles</p>
              {spotlightExperiment.findings?.slice(0, 4).map((finding, index) => (
                <article key={finding} className="spotlight-finding-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{finding}</p>
                </article>
              ))}
            </div>

            <div className="spotlight-microstats">
              <article>
                <span className="section-label">Código</span>
                <strong>{spotlightExperiment.code}</strong>
              </article>
              <article>
                <span className="section-label">Tags</span>
                <strong>{spotlightExperiment.tags.slice(0, 2).join(" · ")}</strong>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block section-block-muted">
        <div className="lab-shell section-heading">
          <div>
            <p className="section-label">Registros destacados</p>
            <h2>Experimentos para abrir el archivo</h2>
          </div>
        </div>

        <div className="lab-shell records-grid featured-grid">
          {featuredExperiments.map((experiment) => (
            <ExperimentCard key={experiment.code} experiment={experiment} />
          ))}
        </div>
      </section>

      <section id="archivo" className="section-block">
        <div className="lab-shell archive-layout">
          <aside className="archive-sidebar">
            <p className="section-label">Archivo</p>
            <h2>{content.archive.title}</h2>
            <p>{content.archive.description}</p>
            <div className="archive-stat-row">
              <article>
                <span className="section-label">Publicados</span>
                <strong>{publishedCount}</strong>
              </article>
              <article>
                <span className="section-label">En curso</span>
                <strong>{inProgressCount}</strong>
              </article>
              <article>
                <span className="section-label">Borradores</span>
                <strong>{draftCount}</strong>
              </article>
            </div>
            <ul className="archive-notes">
              {content.archive.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>

          <div className="archive-main">
            <ExperimentFilters experiments={content.experiments} onFilterChange={handleFilterChange} />

            <p className="results-status" role="status" aria-live="polite">
              {isPending
                ? "Actualizando resultados..."
                : `Mostrando ${filtered.length} de ${content.experiments.length} experimentos`}
            </p>

            <div className={`results-region${isPending ? " is-pending" : ""}`}>
              {filtered.length === 0 ? (
                <div className="empty-state" role="status" aria-live="polite">
                  No hay coincidencias con esta combinación de filtros.
                </div>
              ) : (
                <>
                  <div className="records-grid">
                    {visibleExperiments.map((experiment) => (
                      <ExperimentCard key={experiment.code} experiment={experiment} />
                    ))}
                  </div>
                  {canShowMore ? (
                    <div className="results-actions">
                      <button
                        type="button"
                        className="button-secondary results-more"
                        onClick={() => setVisibleCount((count) => count + 8)}
                      >
                        Mostrar 8 registros más
                      </button>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="section-block section-block-muted">
        <div className="lab-shell method-layout">
          <div className="method-copy">
            <p className="section-label">Método</p>
            <h2>Una web pensada para personas, archivo y agentes</h2>
            <p>{content.method.centralQuestion}</p>
          </div>

          <div className="method-steps">
            {content.method.steps.map((step) => (
              <article key={step.number} className="method-step-card">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
