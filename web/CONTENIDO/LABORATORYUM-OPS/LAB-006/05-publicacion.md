# 05 · Publicación

## Referencia del experimento
- Código: LAB-006
- Título: El agente que cita sin leer
- Tipo: Agentes de IA y extracción

## SEO editorial
- Slug sugerido: /experimentos/el-agente-que-cita-sin-leer
- Meta title sugerido: El agente que cita sin leer | Laboratoryum
- Meta description sugerida: Errores comunes cuando un agente IA cita sin lectura completa y cómo mitigarlos.
- Palabras clave objetivo: agente ia cita sin leer, alucinaciones de citacion, retrieval parcial, grounding

## Resumen para LLM (copiable)
- Qué es: Compara respuestas de agentes cuando citan por resumen, por snippets o por lectura completa.
- Pregunta central: ¿Qué errores aparecen cuando un agente cita contenido que no ha leído de forma completa?
- Hipótesis: La citación sin lectura completa aumenta alucinación, descontextualización y falsa autoridad.
- Entrega final: protocolo, comparación de versiones y Agent citation kit.

## On-Page CMS
- H1 sugerido: El agente que cita sin leer
- Title tag sugerido (<= 60): El agente que cita sin leer | Experimento LAB-006
- Meta description objetivo (140-160): Errores comunes cuando un agente IA cita sin lectura completa y cómo mitigarlos.
- URL canónica sugerida: https://laboratoryum.example/experimentos/el-agente-que-cita-sin-leer

### H2 sugeridos
- Qué pregunta resuelve LAB-006
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Agent citation kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "El agente que cita sin leer",
  "description": "Compara respuestas de agentes cuando citan por resumen, por snippets o por lectura completa.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-006", "Agentes de IA y extracción", "Agent citation kit"],
  "keywords": "agente ia cita sin leer, alucinaciones de citacion, retrieval parcial, grounding",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/el-agente-que-cita-sin-leer"
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
¿Qué errores aparecen cuando un agente cita contenido que no ha leído de forma completa?

### Hipótesis
La citación sin lectura completa aumenta alucinación, descontextualización y falsa autoridad.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Agent citation kit

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
