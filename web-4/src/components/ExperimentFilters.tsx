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
    const values = new Set<string>();
    for (const experiment of experiments) {
      for (const experimentTag of experiment.tags) values.add(experimentTag);
    }
    return Array.from(values).sort((left, right) => left.localeCompare(right));
  }, [experiments]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return experiments.filter((experiment) => {
      const matchesQuery =
        normalized.length === 0 ||
        experiment.title.toLowerCase().includes(normalized) ||
        experiment.code.toLowerCase().includes(normalized) ||
        experiment.summary.toLowerCase().includes(normalized) ||
        experiment.kit.toLowerCase().includes(normalized);

      const matchesSeries = series === "all" || experiment.series === series;
      const matchesStatus = status === "all" || experiment.status === status;
      const matchesTag = tag === "all" || experiment.tags.includes(tag);

      return matchesQuery && matchesSeries && matchesStatus && matchesTag;
    });
  }, [experiments, query, series, status, tag]);

  useEffect(() => {
    onFilterChange(filtered);
  }, [filtered, onFilterChange]);

  const hasActiveFilters =
    query.length > 0 || series !== "all" || status !== "all" || tag !== "all";

  return (
    <form
      className="filters-panel"
      role="search"
      aria-label="Filtro del archivo de experimentos"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="filter-group filter-group-search">
        <label htmlFor="exp-search" className="sr-only">
          Buscar por título, código, resumen o kit
        </label>
        <input
          id="exp-search"
          type="search"
          placeholder="Buscar por título, código, resumen o kit"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="exp-series" className="sr-only">
          Filtrar por serie
        </label>
        <select
          id="exp-series"
          value={series}
          onChange={(event) => setSeries(event.target.value as ExperimentSeries | "all")}
        >
          <option value="all">Todas las series</option>
          <option value="metodologica">Base metodológica</option>
          <option value="aplicada">Serie aplicada</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="exp-status" className="sr-only">
          Filtrar por estado
        </label>
        <select
          id="exp-status"
          value={status}
          onChange={(event) => setStatus(event.target.value as ExperimentStatus | "all")}
        >
          <option value="all">Todos los estados</option>
          <option value="published">Publicados</option>
          <option value="in_progress">En curso</option>
          <option value="draft">Borradores</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="exp-tag" className="sr-only">
          Filtrar por etiqueta
        </label>
        <select id="exp-tag" value={tag} onChange={(event) => setTag(event.target.value)}>
          <option value="all">Todos los tags</option>
          {tags.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      {hasActiveFilters ? (
        <button type="button" className="filter-reset" onClick={() => {
          setQuery("");
          setSeries("all");
          setStatus("all");
          setTag("all");
        }}>
          Limpiar filtros
        </button>
      ) : null}
    </form>
  );
}
