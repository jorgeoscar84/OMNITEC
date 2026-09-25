# Fuentes del proyecto y cómo se usa cada una

De dónde sale cada cosa que está en este repositorio, qué se tomó de cada fuente, qué se descartó y por qué. La regla para resolver conflictos entre fuentes es [DEC-003](DECISIONS.md#dec-003--jerarquía-de-fuentes).

## Inventario

| Código | Fuente | Autor | Fecha | En el repositorio |
| --- | --- | --- | --- | --- |
| F1 | Transcripciones literales de cuatro grabaciones de la reunión con el cliente (T1 a T4) | Transcripción automática | 14 ago 2026 | **No**: contienen conversación interna y nombres; el repositorio es público (DEC-004) |
| F2 | Notas y aclaraciones posteriores del cliente | Cliente | Entre agosto y septiembre de 2026 | **No**: no se entregaron para la v4 (P-15) |
| F3 | «Levantamiento integral de requerimientos de producto», v3.0 | Generado con un agente de IA a partir de F1, F2, F4 y F5 | 6 sep 2026 | Transformado en la v4 saneada; el original no |
| F4 | Auditoría de la aplicación técnica en producción, en modo consulta | Incluida en F3 (anexo A) | 6 sep 2026 | Solo la parte no sensible, en el anexo A |
| F5 | Documentación pública de la API de UpConta | UpConta | Leída para F3 | Resumida en el documento 07 |
| F6 | «CRM de radios: plan maestro de desarrollo con IA» | Generado con un agente de IA a pedido del consultor | 25 sep 2026 | **No** como documento; lo aplicable está en `METODOLOGIA.md`, `AGENTS.md` y `DECISIONS.md` |
| F7 | Levantamiento v4 | Este repositorio | 25 sep 2026 | `docs/01-levantamiento/` |

## F1 · Transcripciones: la fuente primaria

**Uso: completo.** Son la única fuente directa de lo que el cliente pidió. Para la v4 se releyeron íntegras y se contrastaron punto por punto con la v3. Resultado:

- 144 puntos identificados, cada uno ubicado en su requisito o sección: [COBERTURA-TRANSCRIPCIONES.md](../01-levantamiento/COBERTURA-TRANSCRIPCIONES.md).
- 39 requisitos que faltaban en la v3 y 5 contradicciones que la v3 no registraba: [CAMBIOS-v4.md](../01-levantamiento/CAMBIOS-v4.md).
- Dos instrucciones del cliente sobre el propio documento que la v3 no aplicaba: escribir en MAYÚSCULAS lo que falta (DEC-016) y explicitar la interconexión entre módulos ([documento 04](../01-levantamiento/04-mapa-de-modulos.md)).

**Cuidados al leerlas.** Es transcripción automática de una conversación con varias personas: hay palabras mal reconocidas («UTP» por UTM, «impresoras hebras» probablemente por Zebra, «duper» por duplexor) y posturas que cambian a lo largo de la reunión. Cuando alguien rectificó de forma inequívoca, vale la rectificación; cuando quedaron dos posturas, se registró como decisión abierta. Citas: T1 (12:38), T2 (14:32), T3 (16:16), T4 (16:55).

## F2 · Notas del cliente

**Uso: indirecto.** La v3 las cita como origen de 42 requisitos («Confirmado — nota del cliente») y de principios clave: la autonomía funcional, los pipelines configurables, las garantías, las reservas con vencimiento y el portal de proveedores. En la v4 esos requisitos se conservan por confianza en la v3, pero no se pudieron contrastar. Para cerrar la trazabilidad hay que incorporar las notas o validar esos requisitos en taller (P-15, R-11).

## F3 · Levantamiento v3: la base de la v4

**Uso: casi completo.** Su contenido se conserva, dividido por capítulo y por módulo. Lo que se cambió y por qué está en [CAMBIOS-v4.md](../01-levantamiento/CAMBIOS-v4.md). En resumen:

| Se conservó | Se corrigió | Se retiró |
| --- | --- | --- |
| Los 300 requisitos con sus identificadores, orígenes y prioridades; los flujos, el modelo conceptual, la matriz de propiedad del dato, la integración, los indicadores, las fases y los anexos | Doce requisitos que contradecían su propio principio de autonomía; la sección 16.2, que congelaba el PRD; un encabezado fusionado; referencias cruzadas | Nombres de clientes finales y hallazgos de seguridad explotables, por la publicación en un repositorio público |

## F4 · Auditoría de la aplicación actual

**Uso: el de la v3.** Aporta volúmenes reales, módulos existentes, el formato del informe técnico, reglas y fórmulas, brechas y capacidades a conservar (anexo A). **No se repitió en la v4:** la red del entorno de trabajo bloquea la dirección de la aplicación. Los hallazgos de seguridad no se publican (DEC-004).

## F5 · Documentación de UpConta

**Uso: el de la v3, pendiente de verificación.** Sostiene la matriz de capacidades del documento 07 y dos decisiones: que la proforma vive en la plataforma (DEC-006) y que las listas de precio, los contactos y la custodia también (sección 10.3). **No se pudo volver a consultar** en la v4 porque [docs.upconta.com](https://docs.upconta.com/) está bloqueado en el entorno de trabajo y no aparece en los buscadores. Antes de comprometer fechas debe verificarse cada fila (D-01, D-11, R-09). Las preguntas concretas están en la sección 10.6 del documento 07.

## F6 · Plan maestro de desarrollo con IA

Se redactó para un «CRM intermedio» **sin conocer el levantamiento**: su propio texto advierte que el resumen del cliente no llegó y que el alcance que propone parte de lo que un taller de radios suele necesitar. Por eso se usa para el **cómo** y no para el **qué**.

| Sección del plan | Uso | Dónde quedó |
| --- | --- | --- |
| 1. Metodología y fases | **Adoptada**, con la fase de levantamiento que ya existe como fase 0 | `METODOLOGIA.md`, DEC-001 |
| 2. PRD, prompt maestro y archivos de contexto | **Adoptada**; los archivos se ubican en `docs/00-gobierno/`, y la plantilla de PRD se amplió con lo que exige el capítulo 18 del levantamiento | `AGENTS.md`, `docs/02-prd/PLANTILLA-MODULO.md` |
| 3. Protocolo anti-alucinación | **Adoptada** y extendida a las fases documentales, con un script que la hace cumplir | `METODOLOGIA.md`, `scripts/requisitos.mjs` |
| 4. Estrategia de modelos por fase | **Adoptada como roles** (Arquitecto, Programador, Simple, Revisor); la asignación concreta de modelos y precios se mantiene en la herramienta del agente y se revisa cada dos semanas | DEC-014 |
| 5. Costos y tiempos | **Recalculada en orden de magnitud**: el alcance real es de 2,5 a 3,5 veces el presupuestado | Documento 10, sección 14.6 |
| 6. Entorno de desarrollo | **Adoptada** para la fase de construcción; el repositorio no depende de ninguna herramienta concreta | `METODOLOGIA.md` |
| 7. Skills, plugins y repositorios | **Adoptada** para la fase de construcción, con la misma advertencia de seguridad sobre skills de terceros | `METODOLOGIA.md` |
| 8. Stack tecnológico | **Punto de partida**, con dos correcciones y seis comprobaciones pendientes para la arquitectura | DEC-009, DEC-010, DEC-011 |
| 9. Despliegue con Dokploy | **Adoptada** como propuesta | DEC-013 |
| 10. Alcance funcional y plan de entregas | **Descartada**: la reemplazan los 23 módulos y las fases del levantamiento. Sus estados de orden, su descuento automático de stock y sus cinco entregas no aplican | Documento 10 del levantamiento |
| 10. «Qué suele faltar en un levantamiento» | **Usada como lista de control.** La mayoría de los puntos ya estaban cubiertos; los que no, pasaron a preguntas | Sección 16.5 del documento 11 |
| Plantillas de PRD y de prompt maestro | **Adaptadas** | `docs/02-prd/PLANTILLA-MODULO.md`, `AGENTS.md` |
| Guía de instalación | **Vigente** para cuando empiece la construcción; no se repite aquí | Plan maestro, en poder del consultor |

## Lo que ninguna fuente resolvió

Está consolidado en el [documento 11](../01-levantamiento/11-pendientes-decisiones-riesgos.md): decisiones D-01 a D-14, insumos P-01 a P-20 y preguntas de la sección 16.5.
