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
    <article className="exp-card-ficha">
      <header className="ficha-tab">
        <span className="ficha-code">{experiment.code}</span>
        <span className={`ficha-status status-${experiment.status}`}>{STATUS_LABEL[experiment.status].toUpperCase()}</span>
      </header>

      <div className="ficha-body">
        <div className="ficha-content">
          <h3 className="ficha-title">{experiment.title}</h3>
          <p className="ficha-summary">{experiment.summary}</p>

          <div className="ficha-footer">
            <div className="ficha-meta-group">
              <span className="lab-meta">KIT:</span>
              <span className="ficha-kit">{experiment.kit}</span>
            </div>

            <Link className="lab-focus ficha-link" to={`/experimentos/${experiment.slug.split("/").pop()}`}>
              ABRIR REGISTRO →
            </Link>
          </div>
        </div>

        {experiment.tags.length > 0 && (
          <aside className="ficha-tags-aside">
            {experiment.tags.map((tag) => (
              <span key={tag} className="ficha-tag-vertical">
                {tag}
              </span>
            ))}
          </aside>
        )}
      </div>
    </article>
  );
}
