import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
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
  const idx = experiments.findIndex((exp) => exp.slug.endsWith(`/${slug}`));

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
            <Link className="lab-focus" to={`/experimentos/${prev.slug.split("/").pop()}`}>
              EXPERIMENTO ANTERIOR
              <span className="nav-code">{prev.code}</span>
            </Link>
          )}
          {next && (
            <Link className="lab-focus" to={`/experimentos/${next.slug.split("/").pop()}`}>
              SIGUIENTE EXPERIMENTO
              <span className="nav-code">{next.code}</span>
            </Link>
          )}
        </nav>
      </section>
    </div>
  );

  return (
    <Layout sidebarContent={sidebar}>
      <article className="exp-detail technical-sheet">
        <header className="sheet-header">
          <div className="sheet-meta-top">
            <p className="lab-meta">LABORATORYUM · TECHNICAL REPORT</p>
            {exp.publishedAt && <p className="lab-meta">FECHA: {exp.publishedAt}</p>}
          </div>
          <div className="sheet-title-box">
            <h1>{exp.title}</h1>
            <span className={`status-badge status-${exp.status}`}>{STATUS_LABEL[exp.status].toUpperCase()}</span>
          </div>
          <p className="sheet-summary">{exp.summary}</p>
        </header>

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
      </article>
    </Layout>
  );
}
