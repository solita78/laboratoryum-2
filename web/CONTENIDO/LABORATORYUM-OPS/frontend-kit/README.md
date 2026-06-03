# Frontend Kit · Laboratoryum

## Contenido
- `styles/tokens.css`: tokens globales y base visual.
- `components/PeriodicGrid.tsx`: tabla periódica de experimentos.
- `components/ExperimentFilters.tsx`: buscador + filtros de serie/estado.
- `components/ExperimentCard.tsx`: tarjeta de experimento.
- `components/styles.css`: estilos de componentes.
- `AppExample.tsx`: ejemplo de composición.
- `data/laboratoryum-content.json`: dataset inicial.
- `types/content.ts`: tipado.

## Integración rápida
1. Copia la carpeta `frontend-kit` en tu app React/Next.
2. Importa `AppExample` en una ruta de pruebas.
3. Ajusta enlaces (`slug`) y estados reales según backend/CMS.

## Notas
- Los componentes están pensados como base de implementación, no como librería cerrada.
- El comportamiento mobile/desktop de filtros está listo para extender con drawer en mobile.
