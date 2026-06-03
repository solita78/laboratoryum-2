---
name: x-algorithm-recommendations
description: Trabajar con el sistema de recomendaciones de X (xai-org/x-algorithm) — arquitectura ML, componentes Rust/Python, y patrones de pipelines de candidatos.
---

# Sistema de Recomendaciones de X (x-algorithm)

El repositorio `xai-org/x-algorithm` contiene el sistema central de recomendación que impulsa el feed "Para Ti" de X. Combina contenido de cuentas seguidas (in-network) con contenido descubierto mediante ML, clasificando todo mediante transformers basados en Grok.

## Stack Tecnológico

- **Rust**: 57.4% — componentes de rendimiento crítico, almacenamiento en memoria
- **Python**: 42.6% — modelos ML, procesamiento de datos, evaluación

**Modelos clave:**
- **Grok**: Transformer adaptado de xAI para predecir probabilidades de engagement
- **Two-Tower Model**: Búsqueda de similitud entre posts
- **Transformer con aislamiento de candidatos**: Evita que posts influyan entre sí durante clasificación

## Arquitectura de Componentes

### Home Mixer
Orquestador principal del pipeline. Coordina:
- Recuperación de candidatos in-network (Thunder)
- Recuperación de candidatos out-of-network (Phoenix)
- Inyección de anuncios
- Ranking final con Grok

### Thunder
Almacén en memoria para posts de cuentas seguidas (in-network):
- Optimizado para acceso rápido
- Datos en tiempo real
- Base para candidatos locales

### Phoenix
Sistema de recuperación y clasificación ML:
- Recupera posts relevantes basado en similitud
- Aplica modelos Two-Tower
- Identifica contenido fuera de la red social (out-of-network)

### Candidate Pipeline
Framework reutilizable para construir pipelines de recomendación:
- Componentes modulares
- Etapas de filtrado y ranking
- Integración con sistemas de evaluación

## Componentes Adicionales

**Grox**: Clasificadores de contenido para categorizar y filtrar posts
**Ads Injection**: Sistema para mezclar anuncios de forma orgánica en el feed
**Evaluation**: Herramientas para medir rendimiento y engagement

## Patrones de Desarrollo

### Al trabajar con Rust
- Enfocarse en componentes de bajo nivel: Thunder, estructuras de datos, caché en memoria
- Usar criterios de benchmarking para validar optimizaciones
- Considerar overhead de serialización/deserialización

### Al trabajar con Python
- Modelos y evaluación viven aquí
- Training de Grok y Two-Tower
- Scripts de análisis y evaluación offline

### Flujo de Datos
1. **Candidatos**: Thunder (in-network) + Phoenix (out-of-network) → Home Mixer
2. **Clasificación**: Grok transformer aplica puntuaciones de engagement
3. **Aislamiento**: Candidatos clasificados sin interdependencias
4. **Inyección**: Anuncios insertados según reglas de negocio
5. **Feed**: Resultado ordenado enviado al usuario

## Guías Prácticas

### Debugging de Ranking
- Verificar scores de Grok: ¿El modelo está sesgado?
- Revisar mezcla in/out-of-network: ¿Hay suficiente diversidad?
- Validar aislamiento: ¿Los candidatos están afectándose?

### Optimizar Latencia
- Thunder: verificar tamaño de caché en memoria
- Phoenix: revisar queries de similitud (índices, batch size)
- Grok: profile del modelo, considera cuantización o destilación

### Agregar Nuevo Modelo
1. Implementar en Python primero (evaluación offline)
2. Crear cliente Rust para inferencia
3. Integrar en Home Mixer como etapa nueva
4. A/B testing incremental

## Referencias

- **Repository**: https://github.com/xai-org/x-algorithm
- **Feed Architecture**: Revisar `home_mixer/` para flow completo
- **Model Serving**: Phoenix maneja modelos in-production
- **Benchmarking**: Scripts en `evaluation/` para medir engagement

## Learnings

### Arquitectura de Candidatos Aislados
El sistema usa "transformer con aislamiento" donde cada candidato se rankea independientemente. Esto previene que posts altamente relevantes "anulen" otros candidatos durante scoring, mejorando diversidad del feed.

### Separación In/Out-of-Network
Mezclar contenido de cuentas seguidas con descubrimiento ML requiere stratificación cuidadosa. Too much discovery → churn de usuarios. Too little → contenido repetitivo.

### Grok como Predictor Central
Grok (transformer de xAI) es el scoring model universal. Entrenarla bien es crítico — pequeños cambios en PPL impactan engagement significativamente.
