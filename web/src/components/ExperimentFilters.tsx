import { useEffect, useMemo, useState } from "react";
import type {
  ExperimentSeries,
  ExperimentStatus,
  LaboratoryumExperiment,
} from "../types/content";

type Props = {
  experiments: LaboratoryumExperiment[];
  onFilterChange(filtered: LaboratoryumExperiment[]): void;
};

export function ExperimentFilters({ experiments, onFilterChange }: Props) {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState<ExperimentSeries | "all">("all");
  const [status, setStatus] = useState<ExperimentStatus | "all">("all");
  const [tag, setTag] = useState<string>("all");

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const exp of experiments) {
      for (const t of exp.tags) set.add(t);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [experiments]);

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
      const matchesTag = tag === "all" || item.tags.includes(tag);
      return matchesQuery && matchesSeries && matchesStatus && matchesTag;
    });
  }, [experiments, query, series, status, tag]);

  useEffect(() => {
    onFilterChange(filtered);
  }, [filtered, onFilterChange]);

  return (
    <form className="filters" onSubmit={(e) => e.preventDefault()}>
      <div className="filter-field">
        <input
          type="search"
          placeholder="BUSCAR POR TÍTULO, CÓDIGO..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="filter-field">
        <select value={series} onChange={(e) => setSeries(e.target.value as any)}>
          <option value="all">TODAS LAS SERIES</option>
          <option value="metodologica">METODOLÓGICA</option>
          <option value="aplicada">APLICADA</option>
        </select>
      </div>
      <div className="filter-field">
        <select value={status} onChange={(e) => setStatus(e.target.value as any)}>
          <option value="all">TODOS LOS ESTADOS</option>
          <option value="draft">BORRADOR</option>
          <option value="in_progress">EN CURSO</option>
          <option value="published">PUBLICADO</option>
        </select>
      </div>
      <div className="filter-field">
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="all">TODOS LOS TAGS</option>
          {tags.map(t => <option key={t} value={t}>{t.toUpperCase()}</option>)}
        </select>
      </div>
    </form>
  );
}
