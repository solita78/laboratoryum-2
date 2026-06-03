# Laboratoryum · UI/UX Style Spec (Implementable)

## 1) Dirección
Retro-Editorial de Archivo:
- Base utilitaria: navegación y filtrado claros.
- Capa retro: estética terminal controlada.
- Capa editorial: ritmo de lectura y jerarquía tipográfica.

## 2) Design tokens
```css
:root {
  /* Color */
  --bg-0: #07110c;
  --bg-1: #0b1711;
  --bg-2: #102017;
  --line: #1f3b2c;
  --text-0: #d7ffe7;
  --text-1: #8bffb5;
  --text-2: #4fa36a;
  --accent: #b7ffcb;
  --warning: #c6a85a;
  --error: #b85f5f;

  /* Type */
  --font-ui: "IBM Plex Mono", "JetBrains Mono", monospace;
  --font-body: "Source Sans 3", system-ui, sans-serif;

  /* Spacing (8-pt system) */
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
  --sp-4: 16px;
  --sp-5: 24px;
  --sp-6: 32px;
  --sp-7: 48px;

  /* Radius */
  --r-sm: 4px;
  --r-md: 8px;

  /* Motion */
  --t-fast: 120ms;
  --t-base: 180ms;
}
```

## 3) Tipografía
- H1: `clamp(2rem, 4vw, 3.4rem)` / `--font-ui` / 700.
- H2: `clamp(1.4rem, 2.2vw, 2rem)` / `--font-ui` / 600.
- Body: `1.05rem` / `--font-body` / line-height `1.55`.
- Meta/UI labels: `0.8rem` / `--font-ui` / uppercase / letter-spacing `0.04em`.

## 4) Layout por breakpoints
- `>=1280px`: container 1200px, grid principal 12 columnas.
- `>=768px && <1280px`: 8 columnas.
- `<768px`: 4 columnas.

Secciones home:
1. Hero breve
2. Tabla periódica (últimos experimentos)
3. Explorador completo (filtros + resultados)

## 5) Tabla periódica (home)
Celda experimento:
- Alto fijo: `136px` desktop / `112px` mobile.
- Fondo: `--bg-1`, borde `1px solid --line`.
- Padding: `--sp-3`.
- Contenido:
  - Símbolo grande (`periodicSymbol`, ej. `LAUR`)
  - Código `LAB-00X`
  - Estado

Interacción:
- Hover/focus: borde a `--accent`, texto a `--accent`.
- Transition: color/border `--t-base ease`.
- Click: navega a detalle.

Accesibilidad:
- Navegable por teclado (`tabindex` natural en links).
- Focus visible de alto contraste.

## 6) Explorador (debajo de tabla)
Barra sticky de filtros:
- Buscar (placeholder: “Buscar por título, código o palabra clave”).
- Serie, Estado, Tags, Orden.
- Chips de filtros activos + “Limpiar filtros”.

Comportamiento:
- Desktop: actualización en vivo.
- Mobile: panel filtros con botón “Mostrar resultados”.
- Estados vacíos y mensajes de recuperación obligatorios.

## 7) Tarjetas/lista de experimentos
Tarjeta:
- Título + código + resumen corto + kit + estado.
- CTA: “Ver experimento”.
- Hover: solo borde + leve elevación (`transform: translateY(-1px)`).

Vistas:
- Cards (default)
- Lista compacta
- Matriz

## 8) Página detalle
Orden fijo:
1. Qué investiga
2. Pregunta central
3. Hipótesis de trabajo
4. Salida reutilizable

Navegación:
- Experimento anterior / siguiente
- Volver a experimentos
- Ver kit derivado

## 9) Motion + preferencias
- Motion mínima funcional.
- Respetar `prefers-reduced-motion: reduce`:
  - eliminar transforms decorativos
  - transiciones a `0ms`

## 10) Contraste y legibilidad
- Texto normal mínimo AA (4.5:1).
- UI no textual (bordes activos, iconos) mínimo 3:1.
- Evitar verde medio sobre fondo medio en textos largos.

## 11) Criterios de aceptación UX
- Usuario llega a un LAB en <= 3 interacciones desde home.
- Búsqueda + filtros recuperables sin callejón sin salida.
- Toda acción tiene feedback visible.
- Mobile usable con una mano (tap targets >= 44px).

## 12) Prioridad de implementación
1. Tokens + layout base
2. Tabla periódica funcional
3. Explorador con filtros
4. Detalle de experimento
5. Ajustes de accesibilidad y motion
