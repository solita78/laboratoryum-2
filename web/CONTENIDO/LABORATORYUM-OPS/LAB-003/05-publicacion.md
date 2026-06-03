# 05 · Publicación

## Referencia del experimento
- Código: LAB-003
- Título: El acceso que filtra el conocimiento
- Tipo: Contenido con acceso restringido

## SEO editorial
- Slug sugerido: /experimentos/el-acceso-que-filtra-el-conocimiento
- Meta title sugerido: El acceso que filtra el conocimiento | Laboratoryum
- Meta description sugerida: Qué se pierde cuando el contenido queda tras login o paywall y cómo reducir ese costo documental.
- Palabras clave objetivo: paywall y acceso abierto, conocimiento restringido, citabilidad, acceso a fuentes

## Resumen para LLM (copiable)
- Qué es: Compara cómo cambian alcance, citabilidad y reutilización entre contenido abierto, cerrado y mixto.
- Pregunta central: ¿Qué conocimiento queda fuera cuando el acceso depende de login, paywall o plataforma?
- Hipótesis: Las barreras de acceso reducen trazabilidad y memoria colectiva, aunque mejoren control de distribución.
- Entrega final: protocolo, comparación de versiones y Access gradient kit.

## On-Page CMS
- H1 sugerido: El acceso que filtra el conocimiento
- Title tag sugerido (<= 60): El acceso que filtra el conocimiento | Experimento LAB-003
- Meta description objetivo (140-160): Qué se pierde cuando el contenido queda tras login o paywall y cómo reducir ese costo documental.
- URL canónica sugerida: https://laboratoryum.example/experimentos/el-acceso-que-filtra-el-conocimiento

### H2 sugeridos
- Qué pregunta resuelve LAB-003
- Hipótesis y contexto
- Método de prueba paso a paso
- Hallazgos clave
- Kit derivado: Access gradient kit
- Límites del experimento

## Datos estructurados sugeridos (JSON-LD)
Recomendado: `Article` + `BreadcrumbList`.
Nota: no se incluye `FAQPage` para evitar usos restringidos fuera de sitios gubernamentales/salud.

### Bloque base `Article`
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "El acceso que filtra el conocimiento",
  "description": "Compara cómo cambian alcance, citabilidad y reutilización entre contenido abierto, cerrado y mixto.",
  "author": {
    "@type": "Organization",
    "name": "Laboratoryum"
  },
  "about": ["LAB-003", "Contenido con acceso restringido", "Access gradient kit"],
  "keywords": "paywall y acceso abierto, conocimiento restringido, citabilidad, acceso a fuentes",
  "mainEntityOfPage": "https://laboratoryum.example/experimentos/el-acceso-que-filtra-el-conocimiento"
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
¿Qué conocimiento queda fuera cuando el acceso depende de login, paywall o plataforma?

### Hipótesis
Las barreras de acceso reducen trazabilidad y memoria colectiva, aunque mejoren control de distribución.

### Prototipo
Versión base + transformaciones comparadas.

### Prueba
Ejecución documentada con trazabilidad de cambios.

### Observaciones
Describir qué señales se conservan y cuáles se pierden.

### Resultado
Sintetizar decisiones prácticas para publicar con más claridad y confianza.

### Producto derivado
Access gradient kit

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
