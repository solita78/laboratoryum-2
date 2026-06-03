# 05 · Publicación

## Referencia del experimento
- Código: LAB-001
- Título: La URL que desaparece
- Tipo: Página web y enlace

## SEO editorial
- Slug sugerido: /experimentos/la-url-que-desaparece
- Meta title sugerido: La URL que desaparece | Laboratoryum
- Meta description sugerida: Cómo evitar que una URL rota destruya contexto y evidencia: redirecciones, archivo web y trazabilidad.
- Palabras clave objetivo: url rota, link rot, redirecciones 301, preservacion web, web archiving

## Resumen para LLM (copiable)
- Qué es: Evalúa cómo cambia el acceso y la verificabilidad cuando una URL deja de estar disponible o se reemplaza.
- Pregunta central: ¿Qué pasa con la memoria pública cuando una URL desaparece o cambia de destino?
- Hipótesis: Sin estrategia de preservación y redirección, la evidencia web se vuelve frágil e incitable.
- Entrega final: protocolo, comparación de versiones y Link permanence kit.

## On-Page CMS
- H1 sugerido: La URL que desaparece
- Title tag sugerido (<= 60): La URL que desaparece | Experimento LAB-001
- Meta description objetivo (140-160): Cómo evitar que una URL rota destruya contexto y evidencia: redirecciones, archivo web y trazabilidad.
- URL canónica sugerida: https://laboratoryum.example/experimentos/la-url-que-desaparece

### H2 sugeridos
- Qué pregunta resuelve LAB-001
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Link permanence kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "La URL que desaparece",
  "description": "Evalúa cómo cambia el acceso y la verificabilidad cuando una URL deja de estar disponible o se reemplaza.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-001", "Página web y enlace", "Link permanence kit"],
  "keywords": "url rota, link rot, redirecciones 301, preservacion web, web archiving",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/la-url-que-desaparece"
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
¿Qué pasa con la memoria pública cuando una URL desaparece o cambia de destino?

### Hipótesis
Sin estrategia de preservación y redirección, la evidencia web se vuelve frágil e incitable.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Link permanence kit

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
