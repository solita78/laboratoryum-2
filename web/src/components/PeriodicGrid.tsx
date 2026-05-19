import { Link } from "react-router-dom";
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

const makeChemicalSymbol = (title: string) => {
  const words = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const first = words[0]?.[0] ?? "L";
  const second = words[1]?.[0] ?? "a";

  return `${first.toUpperCase()}${second.toLowerCase()}`;
};

export function PeriodicGrid({ experiments, limit = 12 }: Props) {
  const items = experiments.slice(0, limit);

  return (
    <section className="periodic-section" aria-labelledby="periodic-title">
      <div className="periodic-header">
        <h2 id="periodic-title" className="lab-section-title">ÚLTIMOS EXPERIMENTOS</h2>
      </div>

      <div className="periodic-shell">
        <div className="periodic-grid" role="list">
          {items.map((exp) => {
            const symbol = makeChemicalSymbol(exp.title);

            return (
              <Link
                key={exp.code}
                to={`/experimentos/${exp.slug.split("/").pop()}`}
                className="periodic-exp-cell lab-focus"
                aria-label={`${exp.code}: ${exp.title}. Estado ${STATUS_LABEL[exp.status]}`}
                role="listitem"
              >
                <div className="periodic-topline">
                  <span className="atomic-index">{String(exp.number).padStart(2, "0")}</span>
                  <span className="lab-meta periodic-code">{exp.code}</span>
                </div>
                <span className="periodic-symbol">{symbol}</span>
                <p className="periodic-title" title={exp.title}>{exp.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
