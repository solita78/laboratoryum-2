import type { LaboratoryumExperiment } from "../types/content";

type Props = {
  experiments: LaboratoryumExperiment[];
  limit?: number;
};

const STATUS_LABEL: Record<LaboratoryumExperiment["status"], string> = {
  draft: "Borrador",
  in_progress: "En curso",
  published: "Publicado",
};

export function PeriodicGrid({ experiments, limit = 12 }: Props) {
  const items = experiments.slice(0, limit);

  return (
    <section aria-labelledby="indice-periodico">
      <div className="section-head">
        <h2 id="indice-periodico" className="lab-ui section-title">Índice periódico</h2>
        <p className="lab-meta">Últimos experimentos</p>
      </div>
      <div className="periodic-grid">
        {items.map((experiment) => (
          <a
            key={experiment.code}
            href={`/${experiment.slug}`}
            className="periodic-cell lab-focus"
            aria-label={`${experiment.code}: ${experiment.title}`}
          >
            <div className="periodic-topline">
              <span className="lab-meta periodic-code">{experiment.code}</span>
              <span className={`lab-meta status-${experiment.status}`}>{STATUS_LABEL[experiment.status]}</span>
            </div>
            <span className="periodic-symbol">{experiment.periodicSymbol.slice(0, 2)}</span>
            <p className="periodic-title">{experiment.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
