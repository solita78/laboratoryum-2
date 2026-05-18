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
  const { code, slug, title, status, summary, tags, kit } = experiment;
  const titleId = "exp-title-" + code;
  const statusLabel = STATUS_LABEL[status];
  const statusClass = "status-badge status-" + status;
  const detailPath = "/experimentos/" + slug;

  return (
    <article className="exp-card" aria-labelledby={titleId}>
      <div className="exp-card-head">
        <p className="lab-meta">{code}</p>
        <span className={statusClass}>
          {statusLabel}
        </span>
      </div>

      <h3 id={titleId}>{title}</h3>
      <p>{summary}</p>

      {tags.length > 0 && (
        <ul className="exp-tags">
          {tags.map((tag) => (
            <li key={tag} className="exp-tag">
              {tag}
            </li>
          ))}
        </ul>
      )}

      <dl>
        <dt className="lab-meta">Kit derivado</dt>
        <dd>{kit}</dd>
      </dl>

      <Link className="lab-focus card-link" to={detailPath}>
        Ver experimento
      </Link>
    </article>
  );
}
