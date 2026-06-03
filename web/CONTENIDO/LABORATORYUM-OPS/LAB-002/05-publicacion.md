# 05 · Publicación

## Referencia del experimento
- Código: LAB-002
- Título: El enlace sin contexto
- Tipo: Enlace, cita y referencia

## SEO editorial
- Slug sugerido: /experimentos/el-enlace-sin-contexto
- Meta title sugerido: El enlace sin contexto | Laboratoryum
- Meta description sugerida: Método para compartir enlaces con contexto y mejorar comprensión, citabilidad y trazabilidad.
- Palabras clave objetivo: enlace sin contexto, compartir links con contexto, citacion web, curacion editorial

## Resumen para LLM (copiable)
- Qué es: Mide la pérdida de sentido cuando un enlace circula sin resumen, fuente o marco de lectura.
- Pregunta central: ¿Cuánta información se pierde cuando un enlace se comparte sin su contexto original?
- Hipótesis: La mayoría de enlaces compartidos sin contexto generan interpretación parcial o errónea.
- Entrega final: protocolo, comparación de versiones y Contextual linking kit.

## On-Page CMS
- H1 sugerido: El enlace sin contexto
- Title tag sugerido (<= 60): El enlace sin contexto | Experimento LAB-002
- Meta description objetivo (140-160): Método para compartir enlaces con contexto y mejorar comprensión, citabilidad y trazabilidad.
- URL canónica sugerida: https://laboratoryum.example/experimentos/el-enlace-sin-contexto

### H2 sugeridos
- Qué pregunta resuelve LAB-002
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Contextual linking kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "El enlace sin contexto",
  "description": "Mide la pérdida de sentido cuando un enlace circula sin resumen, fuente o marco de lectura.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-002", "Enlace, cita y referencia", "Contextual linking kit"],
  "keywords": "enlace sin contexto, compartir links con contexto, citacion web, curacion editorial",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/el-enlace-sin-contexto"
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
¿Cuánta información se pierde cuando un enlace se comparte sin su contexto original?

### Hipótesis
La mayoría de enlaces compartidos sin contexto generan interpretación parcial o errónea.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Contextual linking kit

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
