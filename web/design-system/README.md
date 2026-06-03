# Laboratoryum Design System

Sistema visual retro + moderno para interfaces de Laboratoryum.

## Estructura

- `tokens.css`: paleta, tipografía, espaciado, motion y elevación.
- `foundation.css`: reset, base, focus, accesibilidad y reduced motion.
- `typography.css`: estilos de texto reutilizables.
- `layout.css`: layout y grids responsivos.
- `components.css`: componentes base (card, badge, tag, inputs, button, panel).
- `theme-laboratoryum.css`: mapeos de tema para estados y series.
- `index.css`: punto único de importación.

## Uso recomendado

1. Importa solo:

```css
@import "./design-system/index.css";
```

2. En React/Vite:

```ts
import "./design-system/index.css";
```

## Principios

1. Contraste alto para legibilidad real.
2. Retro en identidad visual, moderno en UX (44px target mínimo, focus visible).
3. Tokens como única fuente de verdad.

## Ejemplo rápido

```html
<main class="ds-surface-grid ds-main ds-stack-lg theme-laboratoryum">
  <section class="ds-panel ds-stack-md">
    <p class="ds-meta">LABORATORYUM · EXPERIMENTO</p>
    <h1 class="ds-h1">La URL que desaparece</h1>
    <p class="ds-lead">Evaluación de acceso, verificabilidad y contexto cuando un enlace deja de estar disponible.</p>

    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <span class="ds-badge ds-badge--published">Publicado</span>
      <span class="ds-tag">Contexto</span>
      <span class="ds-tag">Archivo</span>
    </div>

    <div class="ds-grid-2">
      <article class="ds-card ds-stack-sm">
        <h2 class="ds-card-title">Pregunta central</h2>
        <p class="ds-card-text">¿Qué se pierde en citabilidad y evidencia cuando el enlace original cae?</p>
      </article>
      <article class="ds-card ds-stack-sm">
        <h2 class="ds-card-title">Salida reutilizable</h2>
        <p class="ds-card-text">Checklist operativo y protocolo de preservación en 3 pasos.</p>
      </article>
    </div>
  </section>
</main>
```

## Integración con el proyecto actual

En `src/main.tsx`, puedes reemplazar:

```ts
import "./styles/tokens.css";
import "./styles/app.css";
```

por:

```ts
import "../design-system/index.css";
import "./styles/app.css";
```

y luego ir migrando reglas de `app.css` a clases `ds-*` progresivamente.

