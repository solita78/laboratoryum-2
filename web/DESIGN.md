# Design System — Laboratoryum

## Product Context
- **What this is:** Archivo/laboratorio editorial de experimentos sobre web, IA, accesibilidad, contexto y memoria digital.
- **Who it's for:** Audiencia técnica/creativa que investiga, prototipa o documenta procesos digitales.
- **Space/industry:** Editorial tech + knowledge base + laboratorio de I+D.
- **Project type:** Sitio de lectura y exploración (no dashboard operativo).

## Aesthetic Direction
- **Direction:** Retro-Editorial de Archivo (terminal disciplinado, no nostálgico caricaturesco).
- **Decoration level:** Intentional.
- **Mood:** Sobrio, técnico, verificable. Debe sentirse como un sistema de fichas de laboratorio curadas, no como una landing SaaS genérica.
- **Reference sites:**
  - https://typographyhandbook.com/
  - https://developer.mozilla.org/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast
  - https://support.walkme.com/knowledge-base/knowledge-base-design-best-practices/
  - https://www.zendesk.com/blog/help-center/knowledge-base/knowledge-base/5-knowledge-base-design-best-practices/
  - https://me.muz.li/nicolaromei/helix-retro-web-experience-2

## SAFE vs RISK
- **SAFE (convenciones que mantenemos):**
  - Jerarquía textual clara y escaneable (meta > heading > body > caption).
  - Alto contraste y umbrales WCAG AA (4.5:1 normal / 3:1 texto grande y componentes).
  - Layout modular de lectura con max-width y ritmo de espaciado consistente.
- **RISK (dónde Laboratoryum gana identidad):**
  - Paleta verde terminal + acentos fríos/cálidos controlados en vez de neutro corporativo.
  - Tabla periódica como navegación semántica principal del archivo.
  - Card/ficha técnica con lateral de tags verticales y tono de dossier editorial.

## Typography
- **Display/Hero:** Azeret Mono (600-700) — tono mecánico-retro más estructural, con mejor presencia técnica en titulares.
- **Body:** Source Sans 3 (400-500) — legibilidad de lectura larga en pantalla.
- **UI/Labels:** Azeret Mono (400-700, uppercase controlado).
- **Data/Tables:** Azeret Mono con números tabulares cuando aplique.
- **Code:** JetBrains Mono.
- **Loading:** Google Fonts (`Azeret Mono`, `Source Sans 3`, fallback local UI stack).
- **Scale:**
  - `--fs-h1`: `clamp(2rem, 4vw, 3.1rem)`
  - `--fs-h2`: `clamp(1.35rem, 2.1vw, 1.9rem)`
  - `--fs-lead`: `1.2rem`
  - `--fs-body`: `1rem`
  - `--fs-ui-sm`: `0.82rem`
  - `--fs-ui-xs`: `0.75rem`

## Color
- **Approach:** Balanced (base oscura + acentos semánticos + color por estado).
- **Primary:** `#52f2a5` (accent) — foco, CTA y confirmación visual.
- **Secondary:** `#66d8ff` (accent-cool) — enlaces y acciones secundarias.
- **Neutrals:** `#060b09` → `#13201b` en superficies; texto `#e6fff3` → `#86d9a5`.
- **Semantic:**
  - Success/published: `#6dffb8`
  - Warning/in_progress: `#ffd166`
  - Error: `#ff6b7a`
  - Info/draft: `#7ad7ff`
- **Dark mode:** Base por defecto. Light mode soportado en preview para validación rápida de contraste y jerarquía.

## Spacing
- **Base unit:** 4px.
- **Density:** Comfortable-compact (lectura + escaneo técnico).
- **Scale:** 4, 8, 12, 16, 24, 32, 48, 64.

## Layout
- **Approach:** Hybrid.
  - Navegación y bloques de datos: grid disciplinado.
  - Hero y ritmo editorial: composición más libre.
- **Grid:** Sidebar + contenido en desktop; apilado en mobile.
- **Max content width:** 1200–1400px según sección.
- **Border radius scale:** sm 4px, md 8px, lg 14px.

## Motion
- **Approach:** Intentional.
- **Easing:** enter `ease-out`, exit `ease-in`, move `ease-in-out`.
- **Duration:**
  - micro 120ms
  - short 180ms
  - medium 260ms
- Hover de celdas en tabla: conserva tono de estado y sube vibrancia/opacidad.

## Accessibility Constraints
- Texto normal mínimo 4.5:1.
- Texto grande y componentes no textuales mínimo 3:1.
- Tap targets mínimos 44px.
- `:focus-visible` siempre visible.
- Respetar `prefers-reduced-motion`.
- Medida recomendada de lectura: ~45–75 caracteres por línea (ideal ~66).

## Content & Tone Rules
- Microcopy directa, verificable, sin lenguaje promocional vacío.
- Evitar patrones “AI slop”:
  - gradientes púrpura por defecto,
  - grids 3-columnas de íconos genéricos,
  - esquinas exageradamente redondeadas en todo,
  - hero copy tipo “unlock the power…”.

## Implementation Contract
- Fuente de verdad: `design-system/index.css` + este `DESIGN.md`.
- Cualquier cambio de tono visual debe actualizar tokens y este documento.
- Nuevos componentes deben mapearse a tokens existentes antes de crear nuevos.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-19 | Base retro-editorial con sistema de fichas + tabla periódica | Encaja con lectura/exploración y diferencia de UI SaaS genérica |
| 2026-05-19 | Tipografía mono para UI + sans para body | Balance entre identidad técnica y legibilidad larga |
| 2026-05-19 | Estado como color dominante en celdas | Mejora escaneo semántico del archivo |
