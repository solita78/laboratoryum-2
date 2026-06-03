import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { LaboratoryumContent } from "../types/content";

type Props = {
  content: LaboratoryumContent;
};

export function ExperimentDetailPage({ content }: Props) {
  const { slug } = useParams<{ slug: string }>();
  const experiments = content.experiments;
  const idx = experiments.findIndex((exp) => exp.slug.endsWith(`/${slug}`));

  if (idx === -1) return <Navigate to="/" replace />;

  const exp = experiments[idx];
  const prev = idx > 0 ? experiments[idx - 1] : null;
  const next = idx < experiments.length - 1 ? experiments[idx + 1] : null;

  return (
    <main id="main-content" tabIndex={-1} className="lab-container">
      <Helmet>
        <title>{`${exp.title} | Laboratoryum`}</title>
        <meta name="description" content={exp.summary} />
        <meta property="og:title" content={`${exp.title} | Laboratoryum`} />
        <meta property="og:description" content={exp.summary} />
        <meta property="og:type" content="article" />
      </Helmet>
      <article className="exp-detail">
        <p className="lab-meta">{exp.code}</p>
        <h1>{exp.title}</h1>
        <p>{exp.summary}</p>

        <section>
          <h2 className="lab-section-title">Pregunta central</h2>
          <p>{exp.question}</p>
        </section>

        <section>
          <h2 className="lab-section-title">Hipótesis de trabajo</h2>
          <p>{exp.hypothesis}</p>
        </section>

        <section>
          <h2 className="lab-section-title">Salida reutilizable</h2>
          <p>{exp.kit}</p>
        </section>

        <nav className="exp-detail-nav" aria-label="Navegación entre experimentos">
          <Link className="lab-focus" to="/">
            Volver a experimentos
          </Link>
          {prev && (
            <Link className="lab-focus" to={`/experimentos/${prev.slug.split("/").pop()}`}>
              Anterior: {prev.code}
            </Link>
          )}
          {next && (
            <Link className="lab-focus" to={`/experimentos/${next.slug.split("/").pop()}`}>
              Siguiente: {next.code}
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
