import { Link } from "react-router-dom";
import type { LaboratoryumExperiment } from "../types/content";

type Props = {
  experiments: LaboratoryumExperiment[];
  limit?: number;
};

type CellPos = { col: number; row: number };

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

export function PeriodicGrid({ experiments, limit = 25 }: Props) {
  const total = Math.max(limit, experiments.length);
  const items = experiments.slice(0, total);
  const periodicPositions: CellPos[] = [
    { col: 1, row: 1 }, { col: 8, row: 1 },
    { col: 1, row: 2 }, { col: 2, row: 2 }, { col: 5, row: 2 }, { col: 6, row: 2 }, { col: 7, row: 2 }, { col: 8, row: 2 },
    { col: 1, row: 3 }, { col: 2, row: 3 }, { col: 5, row: 3 }, { col: 6, row: 3 }, { col: 7, row: 3 }, { col: 8, row: 3 },
    { col: 1, row: 4 }, { col: 2, row: 4 }, { col: 3, row: 4 }, { col: 4, row: 4 }, { col: 5, row: 4 }, { col: 6, row: 4 }, { col: 7, row: 4 }, { col: 8, row: 4 },
    { col: 1, row: 5 }, { col: 2, row: 5 }, { col: 3, row: 5 },
  ];

  return (
    <section className="periodic-section" aria-labelledby="periodic-title">
      <div className="periodic-header">
        <h2 id="periodic-title" className="lab-section-title">ÚLTIMOS EXPERIMENTOS</h2>
      </div>

      <div className="periodic-shell">
        <div className="periodic-grid" role="list">
          {items.map((exp, idx) => {
            const pos = periodicPositions[idx] ?? {
              col: ((idx - periodicPositions.length) % 8) + 1,
              row: 6 + Math.floor((idx - periodicPositions.length) / 8),
            };
            const symbol = makeChemicalSymbol(exp.title);

            return (
              <Link
                key={exp.code}
                to={`/experimentos/${exp.slug}`}
                className="periodic-exp-cell lab-focus"
                style={{ gridColumn: String(pos.col), gridRow: String(pos.row) }}
                aria-label={`${exp.code}: ${exp.title}. Estado ${STATUS_LABEL[exp.status]}`}
                role="listitem"
              >
                <div className="periodic-topline">
                  <span className="atomic-index">{String(exp.number).padStart(2, "0")}</span>
                  <span className="lab-meta periodic-code">{exp.code}</span>
                </div>
                <span className="periodic-symbol">{symbol}</span>
                <p className="periodic-title" title={exp.title}>{exp.title}</p>
                <div className="periodic-overlay">
                  <p className="periodic-description">{exp.summary}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
