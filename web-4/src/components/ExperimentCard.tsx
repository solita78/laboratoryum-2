import { Link } from "react-router-dom";
import type { LaboratoryumExperiment } from "../types/content";

type Props = {
  experiment: LaboratoryumExperiment;
};

const STATUS_LABEL: Record<LaboratoryumExperiment["status"], string> = {
  draft: "Borrador",
  in_progress: "En curso",
  published: "Publicado",
};

export function ExperimentCard({ experiment }: Props) {
  return (
    <article className={`record-card status-${experiment.status}`} aria-labelledby={`exp-title-${experiment.code}`}>
      <div className="record-card-top">
        <div>
          <p className="eyebrow">{experiment.code}</p>
          <h3 id={`exp-title-${experiment.code}`}>{experiment.title}</h3>
        </div>
        <span className={`status-pill status-pill-${experiment.status}`}>
          {STATUS_LABEL[experiment.status]}
        </span>
      </div>

      <p className="record-summary">{experiment.summary}</p>

      <dl className="record-meta-grid">
        <div>
          <dt>Pregunta</dt>
          <dd>{experiment.question}</dd>
        </div>
        <div>
          <dt>Kit</dt>
          <dd>{experiment.kit}</dd>
        </div>
      </dl>

      <div className="record-card-bottom">
        <ul className="tag-list" aria-label="Etiquetas del experimento">
          {experiment.tags.slice(0, 3).map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>

        <Link className="inline-link" to={`/experimentos/${experiment.slug}`}>
          Abrir registro
        </Link>
      </div>
    </article>
  );
}
