import { useEffect, useMemo, useState } from "react";
import type {
  ExperimentSeries,
  ExperimentStatus,
  LaboratoryumExperiment,
} from "../types/content";

type Props = {
  experiments: LaboratoryumExperiment[];
  onChange(filtered: LaboratoryumExperiment[]): void;
};

export function ExperimentFilters({ experiments, onChange }: Props) {
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

  const hasActiveFilters =
    query.trim().length > 0 || series !== "all" || status !== "all" || tag !== "all";

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
    onChange(filtered);
  }, [filtered, onChange]);

  const resetFilters = () => {
    setQuery("");
    setSeries("all");
    setStatus("all");
    setTag("all");
  };

  return (
    <section className="filters" role="search" aria-label="Filtro de experimentos">
      <div className="filter-field filter-search">
        <label htmlFor="exp-search" className="sr-only">
          Buscar experimentos
        </label>
        <input
          id="exp-search"
          className="lab-focus"
          type="search"
          placeholder="Buscar por título, código o palabra clave"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="exp-series" className="sr-only">
          Filtrar por serie
        </label>
        <select
          id="exp-series"
          className="lab-focus"
          value={series}
          onChange={(e) => setSeries(e.target.value as ExperimentSeries | "all")}
        >
          <option value="all">Todas las series</option>
          <option value="metodologica">Base metodológica</option>
          <option value="aplicada">Serie aplicada</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="exp-status" className="sr-only">
          Filtrar por estado
        </label>
        <select
          id="exp-status"
          className="lab-focus"
          value={status}
          onChange={(e) => setStatus(e.target.value as ExperimentStatus | "all")}
        >
          <option value="all">Todos los estados</option>
          <option value="draft">Borrador</option>
          <option value="in_progress">En curso</option>
          <option value="published">Publicado</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="exp-tag" className="sr-only">
          Filtrar por tag
        </label>
        <select id="exp-tag" className="lab-focus" value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="all">Todos los tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {hasActiveFilters && (
        <button type="button" className="filter-reset lab-focus" onClick={resetFilters}>
          Limpiar filtros
        </button>
      )}
    </section>
  );
}
