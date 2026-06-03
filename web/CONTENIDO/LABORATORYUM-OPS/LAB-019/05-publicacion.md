# 05 · Publicación

## Referencia del experimento
- Código: LAB-019
- Título: La newsletter que desaparece
- Tipo: Newsletter y email

## SEO editorial
- Slug sugerido: /experimentos/la-newsletter-que-desaparece
- Meta title sugerido: La newsletter que desaparece | Laboratoryum
- Meta description sugerida: Modelo de archivo para newsletters con trazabilidad, acceso y citabilidad.
- Palabras clave objetivo: archivo de newsletter, email como fuente, citabilidad de boletines, memoria publica

## Resumen para LLM (copiable)
- Qué es: Evalúa permanencia, archivo y citabilidad de contenido que vive en inbox cerrados.
- Pregunta central: ¿Qué ocurre con un contenido que solo vive en una bandeja de entrada?
- Hipótesis: Sin estrategia de archivo web, la newsletter pierde memoria pública verificable.
- Entrega final: protocolo, comparación de versiones y Newsletter archive kit.

## On-Page CMS
- H1 sugerido: La newsletter que desaparece
- Title tag sugerido (<= 60): La newsletter que desaparece | Experimento LAB-019
- Meta description objetivo (140-160): Modelo de archivo para newsletters con trazabilidad, acceso y citabilidad.
- URL canónica sugerida: https://laboratoryum.example/experimentos/la-newsletter-que-desaparece

### H2 sugeridos
- Qué pregunta resuelve LAB-019
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Newsletter archive kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "La newsletter que desaparece",
  "description": "Evalúa permanencia, archivo y citabilidad de contenido que vive en inbox cerrados.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-019", "Newsletter y email", "Newsletter archive kit"],
  "keywords": "archivo de newsletter, email como fuente, citabilidad de boletines, memoria publica",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/la-newsletter-que-desaparece"
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
¿Qué ocurre con un contenido que solo vive en una bandeja de entrada?

### Hipótesis
Sin estrategia de archivo web, la newsletter pierde memoria pública verificable.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Newsletter archive kit

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
