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
  const slug = experiment.slug;
  return (
    <article className="exp-card" aria-labelledby={`exp-title-${experiment.code}`}>
      <div className="exp-card-head">
        <p className="lab-meta">{experiment.code}</p>
        <span
          className={`status-badge status-${experiment.status}`}
          aria-label={`Estado: ${STATUS_LABEL[experiment.status]}`}
        >
          {STATUS_LABEL[experiment.status]}
        </span>
      </div>

      <h3 id={`exp-title-${experiment.code}`}>{experiment.title}</h3>
      <p>{experiment.summary}</p>

      {experiment.tags.length > 0 && (
        <ul className="exp-tags" aria-label="Etiquetas del experimento">
          {experiment.tags.map((tag) => (
            <li key={tag} className="exp-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}

            <Link className="lab-focus ficha-link" to={`/experimentos/${experiment.slug.split("/").pop()}`}>
              ABRIR REGISTRO →
            </Link>
          </div>
        </div>

      <Link
        className="lab-focus card-link"
        to={`/experimentos/${slug}`}
        aria-label={`Ver detalles del experimento ${experiment.title}`}
      >
        Ver experimento
      </Link>
    </article>
  );
}
