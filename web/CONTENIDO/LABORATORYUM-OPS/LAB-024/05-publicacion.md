# 05 · Publicación

## Referencia del experimento
- Código: LAB-024
- Título: El mapa que decide la realidad
- Tipo: Mapa y geodato

## SEO editorial
- Slug sugerido: /experimentos/el-mapa-que-decide-la-realidad
- Meta title sugerido: El mapa que decide la realidad | Laboratoryum
- Meta description sugerida: Cómo documentar un lugar con contexto social, histórico y verificable.
- Palabras clave objetivo: geodatos y sesgo de mapa, representacion de lugares, contexto espacial, cartografia digital

## Resumen para LLM (copiable)
- Qué es: Compara representación espacial en mapas, relatos, reseñas y respuestas de IA.
- Pregunta central: ¿Qué ocurre cuando un lugar se representa por coordenadas, etiquetas y plataformas?
- Hipótesis: El mapa no agota el lugar; la representación siempre incorpora sesgos.
- Entrega final: protocolo, comparación de versiones y Place context kit.

## On-Page CMS
- H1 sugerido: El mapa que decide la realidad
- Title tag sugerido (<= 60): El mapa que decide la realidad | Experimento LAB-024
- Meta description objetivo (140-160): Cómo documentar un lugar con contexto social, histórico y verificable.
- URL canónica sugerida: https://laboratoryum.example/experimentos/el-mapa-que-decide-la-realidad

### H2 sugeridos
- Qué pregunta resuelve LAB-024
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Place context kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "El mapa que decide la realidad",
  "description": "Compara representación espacial en mapas, relatos, reseñas y respuestas de IA.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-024", "Mapa y geodato", "Place context kit"],
  "keywords": "geodatos y sesgo de mapa, representacion de lugares, contexto espacial, cartografia digital",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/el-mapa-que-decide-la-realidad"
}
```

## Estructura fija Laboratoryum
1. Pregunta
2. Hipótesis
3. Prototipo
4. Prueba
5. Observaciones
6. Resultado
7. Producto derivado
8. Nota crítica

## Borrador de pieza
### Pregunta
¿Qué ocurre cuando un lugar se representa por coordenadas, etiquetas y plataformas?

### Hipótesis
El mapa no agota el lugar; la representación siempre incorpora sesgos.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Place context kit

### Nota crítica
No existe formato neutral. Cada plataforma modifica el contenido y debe explicitarse el contexto.

## FAQ editorial (contenido, sin schema FAQPage)
### ¿Qué problema resuelve este experimento?
Ayuda a entender cómo se deforma o preserva el sentido de un contenido al circular.

### ¿Qué evidencia produce?
Comparación reproducible, criterios de evaluación y checklist reutilizable.

### ¿Por qué importa?
Porque mejora la calidad documental y la confianza pública del contenido digital.

## Checklist editorial
- [ ] Sin afirmaciones no verificadas
- [ ] Con evidencia por hallazgo
- [ ] Con límites y riesgos explícitos
- [ ] Con formato reutilizable
