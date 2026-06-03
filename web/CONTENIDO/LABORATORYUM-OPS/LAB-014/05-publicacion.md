# 05 · Publicación

## Referencia del experimento
- Código: LAB-014
- Título: El vídeo que ya no basta
- Tipo: Vídeo y audiovisual

## SEO editorial
- Slug sugerido: /experimentos/el-video-que-ya-no-basta
- Meta title sugerido: El vídeo que ya no basta | Laboratoryum
- Meta description sugerida: Protocolo para verificar videos en la era deepfake sin caer en alarmismo.
- Palabras clave objetivo: verificacion de video, deepfake detection, subtitulos alterados, confianza audiovisual

## Resumen para LLM (copiable)
- Qué es: Evalúa manipulación por capas en vídeo: imagen, voz, subtítulos, corte y contexto.
- Pregunta central: ¿Qué necesita un vídeo para ser creíble cuando sus capas pueden manipularse por separado?
- Hipótesis: La credibilidad audiovisual depende de verificar capas y contexto de publicación.
- Entrega final: protocolo, comparación de versiones y Video trust kit.

## On-Page CMS
- H1 sugerido: El vídeo que ya no basta
- Title tag sugerido (<= 60): El vídeo que ya no basta | Experimento LAB-014
- Meta description objetivo (140-160): Protocolo para verificar videos en la era deepfake sin caer en alarmismo.
- URL canónica sugerida: https://laboratoryum.example/experimentos/el-video-que-ya-no-basta

### H2 sugeridos
- Qué pregunta resuelve LAB-014
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Video trust kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "El vídeo que ya no basta",
  "description": "Evalúa manipulación por capas en vídeo: imagen, voz, subtítulos, corte y contexto.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-014", "Vídeo y audiovisual", "Video trust kit"],
  "keywords": "verificacion de video, deepfake detection, subtitulos alterados, confianza audiovisual",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/el-video-que-ya-no-basta"
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
¿Qué necesita un vídeo para ser creíble cuando sus capas pueden manipularse por separado?

### Hipótesis
La credibilidad audiovisual depende de verificar capas y contexto de publicación.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Video trust kit

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
