import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { LaboratoryumContent, LaboratoryumExperiment } from "../types/content";

type Props = {
  content: LaboratoryumContent;
};

const STATUS_LABEL: Record<LaboratoryumExperiment["status"], string> = {
  draft: "Borrador",
  in_progress: "En curso",
  published: "Publicado",
};

export function ExperimentDetailPage({ content }: Props) {
  const { slug } = useParams<{ slug: string }>();
  const experiments = content.experiments;
  const idx = experiments.findIndex((exp) => exp.slug === slug);

  if (idx === -1) return <Navigate to="/" replace />;

  const exp = experiments[idx];
  const prev = idx > 0 ? experiments[idx - 1] : null;
  const next = idx < experiments.length - 1 ? experiments[idx + 1] : null;

  const sidebar = (
    <div className="sidebar-controls">
      <section className="sidebar-section">
        <h2 className="lab-meta">Identificador</h2>
        <p className="lab-meta">{exp.code}</p>
      </section>
      <section className="sidebar-section">
        <h2 className="lab-meta">Navegación</h2>
        <nav className="exp-detail-nav" aria-label="Navegación entre experimentos">
          <Link className="lab-focus" to="/">
            LISTADO COMPLETO
          </Link>
          {prev && (
            <Link className="lab-focus" to={`/experimentos/${prev.slug}`}>
              EXPERIMENTO ANTERIOR
              <span className="nav-code">{prev.code}</span>
            </Link>
          )}
          {next && (
            <Link className="lab-focus" to={`/experimentos/${next.slug}`}>
              SIGUIENTE EXPERIMENTO
              <span className="nav-code">{next.code}</span>
            </Link>
          )}
        </nav>
      </section>
    </div>
  );

  return (
    <main id="main-content" tabIndex={-1} className="lab-container">
      <Helmet>
        <title>{`${exp.title} | Laboratoryum`}</title>
        <meta name="description" content={exp.summary} />
        <meta property="og:title" content={`${exp.title} | Laboratoryum`} />
        <meta property="og:description" content={exp.summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="exp-detail-layout technical-report">
        <aside className="exp-sidebar">
          {sidebar}
          <div className="exp-metadata-block">
            <h3>SERIE</h3>
            <p className="capitalize">{exp.series}</p>
          </div>
          <div className="exp-metadata-block">
            <h3>TAGS</h3>
            <div className="exp-tags">
              {exp.tags.map(tag => (
                <span key={tag} className="exp-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </aside>

        <article className="exp-main technical-sheet">
          <header className="sheet-header">
            <div className="sheet-meta-top">
              <p className="lab-meta">LABORATORYUM · TECHNICAL REPORT</p>
              {exp.publishedAt && <p className="lab-meta">FECHA: {exp.publishedAt}</p>}
            </div>
            <div className="sheet-title-box">
              <h1>{exp.title}</h1>
              <span className={`status-badge status-${exp.status}`}>
                {STATUS_LABEL[exp.status].toUpperCase()}
              </span>
            </div>
            <p className="sheet-summary">{exp.summary}</p>
          </header>

          <div className="sheet-content-grid">
            <section className="sheet-section">
              <h2 className="lab-section-title">01. PREGUNTA CENTRAL</h2>
              <div className="sheet-content">
                <p>{exp.question}</p>
              </div>
            </section>

            <section className="sheet-section">
              <h2 className="lab-section-title">02. HIPÓTESIS DE TRABAJO</h2>
              <div className="sheet-content">
                <p>{exp.hypothesis}</p>
              </div>
            </section>

            <section className="sheet-section">
              <h2 className="lab-section-title">03. SALIDA REUTILIZABLE</h2>
              <div className="sheet-content kit-box">
                <p>{exp.kit}</p>
              </div>
            </section>

            {exp.observations && (
              <section className="sheet-section">
                <h2 className="lab-section-title">04. OBSERVACIONES DE LA PRUEBA</h2>
                <div className="sheet-content">
                  <p>{exp.observations}</p>
                </div>
              </section>
            )}

            {exp.findings && exp.findings.length > 0 && (
              <section className="sheet-section">
                <h2 className="lab-section-title">05. HALLAZGOS CLAVE</h2>
                <div className="sheet-content">
                  <ul>
                    {exp.findings.map((finding, i) => (
                      <li key={i}>{finding}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {exp.matrix && exp.matrix.headers && exp.matrix.rows && (
              <section className="sheet-section">
                <h2 className="lab-section-title">06. MATRIZ COMPARATIVA</h2>
                <div className="sheet-content matrix-container">
                  <table className="matrix-table">
                    <thead>
                      <tr>
                        {exp.matrix.headers.map((header, i) => (
                          <th key={i}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {exp.matrix.rows.map((row, rowIdx) => {
                        const matrix = exp.matrix!;
                        return (
                          <tr key={rowIdx}>
                            {matrix.headers.map((header, colIdx) => (
                              <td key={colIdx}>{row[header]}</td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {exp.protocol && (
              <section className="sheet-section">
                <h2 className="lab-section-title">07. PROTOCOLO REUTILIZABLE</h2>
                <div className="sheet-content protocol-box">
                  {exp.protocol}
                </div>
              </section>
            )}

            {exp.demoUrl && (
              <section className="sheet-section">
                <h2 className="lab-section-title">08. DEMO INTERACTIVA</h2>
                <div className="sheet-content">
                  <a href={exp.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-button">
                    🔗 Abrir demo interactiva
                  </a>
                </div>
              </section>
            )}

            <section className="sheet-section">
              <h2 className="lab-section-title">NOTA CRÍTICA</h2>
              <div className="sheet-content">
                <p>No existe formato neutral. Cada plataforma o herramienta modifica el contenido. La única manera de mantener la verificabilidad es explicitar el contexto de cada transformación y preservar múltiples capas de evidencia.</p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
