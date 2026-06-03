import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import type { LaboratoryumContent, LaboratoryumExperiment } from "../types/content";

type Props = {
  content: LaboratoryumContent;
};

const STATUS_LABEL: Record<LaboratoryumExperiment["status"], string> = {
  draft: "Borrador",
  in_progress: "En curso",
  published: "Publicado",
};

const protocolLines = (protocol?: string) =>
  protocol
    ?.split("\n")
    .map((line) => line.trim())
    .filter(Boolean) ?? [];

const getSeriesLabel = (series: LaboratoryumExperiment["series"]) =>
  series === "metodologica" ? "Metodológica" : "Aplicada";

export function ExperimentDetailPage({ content }: Props) {
  const { slug } = useParams<{ slug: string }>();
  const index = content.experiments.findIndex((experiment) => experiment.slug === slug);

  if (index === -1) return <Navigate to="/" replace />;

  const experiment = content.experiments[index];
  const previous = index > 0 ? content.experiments[index - 1] : null;
  const next = index < content.experiments.length - 1 ? content.experiments[index + 1] : null;
  const bestVersion =
    experiment.matrix?.rows.reduce<Record<string, string | number> | null>((best, row) => {
      if (!best) return row;
      return Number(row["Confianza (0-5)"]) > Number(best["Confianza (0-5)"]) ? row : best;
    }, null) ?? null;
  const worstVersion =
    experiment.matrix?.rows.reduce<Record<string, string | number> | null>((worst, row) => {
      if (!worst) return row;
      return Number(row["Confianza (0-5)"]) < Number(worst["Confianza (0-5)"]) ? row : worst;
    }, null) ?? null;
  const protocolSteps = protocolLines(experiment.protocol);

  return (
    <main id="main-content" className="detail-page">
      <Helmet>
        <title>{`${experiment.title} | Laboratoryum`}</title>
        <meta name="description" content={experiment.summary} />
        <meta property="og:title" content={`${experiment.title} | Laboratoryum`} />
        <meta property="og:description" content={experiment.summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <section className="detail-hero">
        <div className="lab-shell detail-hero-grid">
          <div className="detail-hero-copy">
            <Link className="back-link" to="/#archivo">
              Volver al archivo
            </Link>
            <p className="section-label">{experiment.code}</p>
            <h1>{experiment.title}</h1>
            <p className="detail-lead">{experiment.summary}</p>

            <div className="detail-intro-grid">
              <article className="detail-intro-card">
                <p className="section-label">Pregunta central</p>
                <p>{experiment.question}</p>
              </article>
              <article className="detail-intro-card">
                <p className="section-label">Hipótesis de trabajo</p>
                <p>{experiment.hypothesis}</p>
              </article>
            </div>
          </div>

          <aside className="detail-evidence-box">
            <div className="detail-evidence-head">
              <span className={`status-pill status-pill-${experiment.status}`}>
                {STATUS_LABEL[experiment.status]}
              </span>
              <p className="section-label">Ficha de evidencia</p>
            </div>

            <dl className="detail-meta-grid">
              <div>
                <dt>Serie</dt>
                <dd>{getSeriesLabel(experiment.series)}</dd>
              </div>
              <div>
                <dt>Kit</dt>
                <dd>{experiment.kit}</dd>
              </div>
              <div>
                <dt>Fecha</dt>
                <dd>{experiment.publishedAt ?? "Pendiente de publicación"}</dd>
              </div>
              <div>
                <dt>Tags</dt>
                <dd>{experiment.tags.slice(0, 2).join(" · ")}</dd>
              </div>
            </dl>

            {bestVersion && worstVersion ? (
              <div className="detail-microstats">
                <article>
                  <span className="section-label">Versión más sólida</span>
                  <strong>{String(bestVersion["Versión"])}</strong>
                  <p>{String(bestVersion["Transformación"])}</p>
                </article>
                <article>
                  <span className="section-label">Versión más frágil</span>
                  <strong>{String(worstVersion["Versión"])}</strong>
                  <p>{String(worstVersion["Transformación"])}</p>
                </article>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="detail-content">
        <div className="lab-shell detail-layout">
          <aside className="detail-sidebar">
            <div className="detail-nav-card">
              <p className="section-label">Navegación</p>
              <div className="detail-nav-links">
                {previous ? (
                  <Link to={`/experimentos/${previous.slug}`}>Anterior · {previous.code}</Link>
                ) : null}
                {next ? <Link to={`/experimentos/${next.slug}`}>Siguiente · {next.code}</Link> : null}
              </div>
            </div>

            <div className="detail-nav-card">
              <p className="section-label">Etiquetas</p>
              <ul className="tag-list">
                {experiment.tags.map((tag) => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
            </div>

            <div className="detail-nav-card">
              <p className="section-label">Salida reutilizable</p>
              <p className="detail-sidebar-copy">{experiment.kit}</p>
            </div>
          </aside>

          <article className="detail-article">
            {experiment.observations ? (
              <section className="detail-section">
                <p className="section-label">Observaciones</p>
                <div className="detail-observation-panel">
                  <p>{experiment.observations}</p>
                </div>
              </section>
            ) : null}

            {experiment.findings && experiment.findings.length > 0 ? (
              <section className="detail-section">
                <p className="section-label">Hallazgos clave</p>
                <div className="findings-list">
                  {experiment.findings.map((finding, findingIndex) => (
                    <article key={finding} className="finding-card">
                      <span>{String(findingIndex + 1).padStart(2, "0")}</span>
                      <p>{finding}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {experiment.matrix ? (
              <section className="detail-section">
                <p className="section-label">Matriz comparativa</p>
                <div className="matrix-wrap">
                  <table className="matrix-table">
                    <thead>
                      <tr>
                        {experiment.matrix.headers.map((header) => (
                          <th key={header}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {experiment.matrix.rows.map((row, rowIndex) => (
                        <tr key={`${experiment.code}-${rowIndex}`}>
                          {experiment.matrix?.headers.map((header) => (
                            <td key={header}>{row[header]}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            {experiment.protocol ? (
              <section className="detail-section">
                <p className="section-label">Protocolo reutilizable</p>
                <div className="protocol-card">
                  {protocolSteps.map((line, index2) => (
                    <div key={line} className="protocol-step">
                      <span>{String(index2 + 1).padStart(2, "0")}</span>
                      <p>{line}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {experiment.demoUrl ? (
              <section className="detail-section">
                <p className="section-label">Demo</p>
                <a className="button-primary" href={experiment.demoUrl} target="_blank" rel="noreferrer">
                  Abrir demo interactiva
                </a>
              </section>
            ) : null}
          </article>
        </div>
      </section>
    </main>
  );
}
