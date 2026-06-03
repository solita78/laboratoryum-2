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

const PERIODIC_POSITIONS: CellPos[] = [
  { col: 1, row: 1 },
  { col: 8, row: 1 },
  { col: 1, row: 2 },
  { col: 2, row: 2 },
  { col: 5, row: 2 },
  { col: 6, row: 2 },
  { col: 7, row: 2 },
  { col: 8, row: 2 },
  { col: 1, row: 3 },
  { col: 2, row: 3 },
  { col: 5, row: 3 },
  { col: 6, row: 3 },
  { col: 7, row: 3 },
  { col: 8, row: 3 },
  { col: 1, row: 4 },
  { col: 2, row: 4 },
  { col: 3, row: 4 },
  { col: 4, row: 4 },
  { col: 5, row: 4 },
  { col: 6, row: 4 },
  { col: 7, row: 4 },
  { col: 8, row: 4 },
  { col: 1, row: 5 },
  { col: 2, row: 5 },
  { col: 3, row: 5 },
];

const symbolFromTitle = (title: string) => {
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
  const items = experiments.slice(0, limit);

  return (
    <div className="periodic-shell">
      <div className="periodic-grid" role="list">
        {items.map((experiment, index) => {
          const pos = PERIODIC_POSITIONS[index] ?? {
            col: ((index - PERIODIC_POSITIONS.length) % 8) + 1,
            row: 6 + Math.floor((index - PERIODIC_POSITIONS.length) / 8),
          };

          return (
            <Link
              key={experiment.code}
              to={`/experimentos/${experiment.slug}`}
              className={`periodic-card status-${experiment.status}`}
              style={{ gridColumn: `${pos.col}`, gridRow: `${pos.row}` }}
              aria-label={`${experiment.code}: ${experiment.title}. Estado ${STATUS_LABEL[experiment.status]}`}
              role="listitem"
            >
              <div className="periodic-card-head">
                <span>{String(experiment.number).padStart(2, "0")}</span>
                <span>{experiment.code}</span>
              </div>
              <span className="periodic-card-symbol">{symbolFromTitle(experiment.title)}</span>
              <p className="periodic-card-title">{experiment.title}</p>
              <p className="periodic-card-summary">{experiment.summary}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
