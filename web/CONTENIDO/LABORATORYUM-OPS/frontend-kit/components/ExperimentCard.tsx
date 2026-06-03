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
    <article className="exp-card">
      <div className="exp-card-head">
        <p className="lab-meta">{experiment.code}</p>
        <p className={`lab-meta status-${experiment.status}`}>{STATUS_LABEL[experiment.status]}</p>
      </div>
      <h3>{experiment.title}</h3>
      <p>{experiment.summary}</p>

      <dl>
        <dt className="lab-meta">Kit</dt>
        <dd>{experiment.kit}</dd>
      </dl>

      <a className="lab-focus" href={`/${experiment.slug}`}>Ver experimento</a>
    </article>
  );
}
