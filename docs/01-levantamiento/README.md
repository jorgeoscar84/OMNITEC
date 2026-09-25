# OMNITRONEC 360 — Levantamiento integral de requerimientos de producto

Documento maestro previo al PRD.

| | |
| --- | --- |
| **Versión** | 4.0 — modular, contrastada de nuevo con las transcripciones |
| **Fecha** | 25 de septiembre de 2026 |
| **Versión anterior** | 3.0 — consolidada y depurada, 6 de septiembre de 2026 |
| **Estado** | **Borrador para aprobación.** Pendiente de aprobación del consultor y de validación del cliente (taller 1) |
| **Alcance** | Plataforma empresarial completa: relación con clientes, operación técnica, infraestructura de radiocomunicaciones, documentos, analítica e inteligencia artificial |
| **Tamaño** | 24 módulos (23 funcionales más el conector contable) y 339 requisitos: 69 P0, 226 P1, 43 P2 y 1 P3 |
| **Clasificación** | Uso interno y confidencial. Versión saneada para un repositorio público: sin credenciales, sin datos de clientes finales y sin hallazgos de seguridad explotables |

## Qué cambió respecto de la v3

En una línea: la misma sustancia, dividida por módulos, con **39 requisitos nuevos** que salían de las transcripciones y no estaban, **12 requisitos corregidos** que contradecían el principio de autonomía funcional, un **módulo nuevo** de habilitación comercial, las **dependencias entre módulos** explícitas y los **pendientes en MAYÚSCULAS**, como pidió el cliente. El detalle está en [CAMBIOS-v4.md](CAMBIOS-v4.md) y la prueba de que no quedó nada fuera, en [COBERTURA-TRANSCRIPCIONES.md](COBERTURA-TRANSCRIPCIONES.md).

## Cómo leerlo

| Si necesitas… | Lee |
| --- | --- |
| Entender el producto en diez minutos | [01 · Visión, alcance y principios](01-vision-alcance-principios.md), secciones 1 y 3 |
| Saber qué módulos hay, en qué orden se construyen y cómo se conectan | [04 · Mapa de módulos y dependencias](04-mapa-de-modulos.md) |
| El detalle de un módulo | [`modulos/`](modulos/README.md) |
| Qué falta y quién lo debe entregar | [11 · Pendientes, decisiones y riesgos](11-pendientes-decisiones-riesgos.md) |
| Validar con el cliente que no se olvidó nada | [COBERTURA-TRANSCRIPCIONES.md](COBERTURA-TRANSCRIPCIONES.md) |
| Preparar el PRD | [13 · Directrices para el PRD](13-directrices-para-el-prd.md) y [`docs/02-prd/`](../02-prd/README.md) |

## Contenido

| Documento | Contenido |
| --- | --- |
| [01 · Visión, alcance y principios](01-vision-alcance-principios.md) | Resumen ejecutivo, problemas, decisiones cerradas, alcance, fuentes y principios rectores |
| [02 · Ecosistema y propiedad del dato](02-ecosistema-y-propiedad-del-dato.md) | Sistemas involucrados, modo autónomo y modo integrado, decisión sobre la proforma |
| [03 · Actores, organización y permisos](03-actores-organizacion-permisos.md) | Actores, estructura, modelo y matriz mínima de permisos |
| [04 · Mapa de módulos y dependencias](04-mapa-de-modulos.md) | Dominios, navegación, índice de módulos, dependencias y reglas de interconexión |
| [`modulos/`](modulos/README.md) | M01 a M23: propósito, paneles, requisitos, lógica, reglas y pendientes de cada módulo |
| [05 · Flujos de extremo a extremo](05-flujos-extremo-a-extremo.md) | De lead a factura, de recepción a entrega, garantías, renovaciones y más |
| [06 · Modelo conceptual](06-modelo-conceptual.md) | Entidades, relaciones y reglas de modelado no negociables |
| [07 · Integraciones](07-integraciones.md) | UpConta: capacidades, consecuencias, requisitos API-001 a API-011 y solicitudes al proveedor; otros servicios externos |
| [08 · Indicadores](08-indicadores.md) | KPI comerciales, técnicos y de postventa; gobierno de indicadores |
| [09 · Experiencia de uso y no funcionales](09-experiencia-y-no-funcionales.md) | Principios de interfaz, estados, seguridad, privacidad y continuidad |
| [10 · Fases y entregas](10-fases-y-entregas.md) | Primera entrega, fases 0 a 5, entregas demostrables y tamaño del alcance |
| [11 · Pendientes, decisiones y riesgos](11-pendientes-decisiones-riesgos.md) | Decisiones abiertas, riesgos, contradicciones, insumos y qué bloquea el PRD |
| [12 · Historias de usuario semilla](12-historias-de-usuario-semilla.md) | Historias y criterios transversales de aceptación |
| [13 · Directrices para el PRD](13-directrices-para-el-prd.md) | Mandato arquitectónico, diseño, condiciones técnicas y consecuencias para el stack |
| [14 · Glosario](14-glosario.md) | Términos del negocio y del documento |
| [Anexo A](anexos/A-aplicacion-actual.md) | Estado actual de la aplicación técnica: volúmenes, módulos, formato del informe técnico, reglas y qué conservar |
| [Anexo E](anexos/E-paquete-de-datos.md) | Paquete de datos extraídos para la migración |
| [indice-requisitos.csv](indice-requisitos.csv) | Los 339 requisitos en una tabla, generada por `node scripts/requisitos.mjs` |

## Lista de aprobación

Para dar el levantamiento por aprobado y pasar al PRD (sección 16.2 del documento 11):

- [ ] El consultor revisó la v4, en especial [CAMBIOS-v4.md](CAMBIOS-v4.md), y la aprueba.
- [ ] El cliente validó visión, alcance y módulos en el taller 1, usando [COBERTURA-TRANSCRIPCIONES.md](COBERTURA-TRANSCRIPCIONES.md) como guion.
- [ ] Decidido el alcance del primer lanzamiento y aceptadas las prioridades (D-14).
- [ ] Decidido qué ciclo se construye primero: comercial o técnico (D-12).
- [ ] Ratificada la ubicación de la proforma comercial (D-11).
- [ ] Entregadas las notas del cliente citadas por la v3 (P-15) o validados en taller los 42 requisitos que dependen de ellas.

Las demás decisiones y los demás insumos no bloquean el inicio del PRD: bloquean el PRD de un módulo concreto o la salida a producción, como detalla la sección 16.2.
