import { useEffect, useMemo, useState } from "react";
import type {
  LaboratoryumExperiment,
  ExperimentSeries,
  ExperimentStatus,
} from "../types/content";

type Props = {
  experiments: LaboratoryumExperiment[];
  onChange(filtered: LaboratoryumExperiment[]): void;
};

export function ExperimentFilters({ experiments, onChange }: Props) {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState<ExperimentSeries | "all">("all");
  const [status, setStatus] = useState<ExperimentStatus | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return experiments.filter((item) => {
      const matchesQuery =
        q.length === 0 ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q);

      const matchesSeries = series === "all" || item.series === series;
      const matchesStatus = status === "all" || item.status === status;

      return matchesQuery && matchesSeries && matchesStatus;
    });
  }, [experiments, query, series, status]);

  useEffect(() => {
    onChange(filtered);
  }, [filtered, onChange]);

  return (
    <section className="filters">
      <input
        className="lab-focus"
        type="search"
        placeholder="Buscar por título, código o palabra clave"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="lab-focus"
        value={series}
        onChange={(e) => setSeries(e.target.value as ExperimentSeries | "all")}
      >
        <option value="all">Todas las series</option>
        <option value="metodologica">Base metodológica</option>
        <option value="aplicada">Serie aplicada</option>
      </select>

      <select
        className="lab-focus"
        value={status}
        onChange={(e) => setStatus(e.target.value as ExperimentStatus | "all")}
      >
        <option value="all">Todos los estados</option>
        <option value="draft">Borrador</option>
        <option value="in_progress">En curso</option>
        <option value="published">Publicado</option>
      </select>
    </section>
  );
}
