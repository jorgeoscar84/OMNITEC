# OMNITRONEC 360

> **⚠ REPOSITORIO CONGELADO (18 oct 2026).** La especificación se trasladó, con su historia, al repositorio privado `jorgeoscar84/omnitronec-360`, carpeta `omnitronec/` (DEC-023). Todo cambio se hace allí. Este repositorio queda solo como respaldo y debe archivarse.


Plataforma de relación con clientes y operación técnica para una empresa ecuatoriana de radiocomunicaciones: captación y ventas, postventa y renovaciones, recepción y reparación de equipos con cadena de custodia, garantías, infraestructura y plan de frecuencias, documentos, analítica e inteligencia artificial.

El software se construirá con agentes de IA siguiendo un proceso por fases y con compuertas verificables. Este repositorio es la memoria del proyecto: todo lo que un agente necesita saber está aquí, en archivos.

## Estado

| Fase | Estado |
| --- | --- |
| 0 · Levantamiento de requerimientos | **v4 lista para aprobación** |
| 1 · PRD | Preparada; empieza al aprobar el levantamiento y tomar las decisiones D-11, D-12 y D-14 |
| 2 · Arquitectura | Pendiente; hay propuestas técnicas registradas (DEC-009 a DEC-013) |
| 3 en adelante · Plan de tareas, construcción, pruebas, despliegue | Pendientes |

Qué se hizo en la última sesión y qué falta decidir: [`docs/00-gobierno/PROGRESS.md`](docs/00-gobierno/PROGRESS.md).

## Mapa del repositorio

| Ruta | Para qué sirve |
| --- | --- |
| [`AGENTS.md`](AGENTS.md) | Reglas de trabajo que todo agente de IA lee al empezar (`CLAUDE.md` lo importa) |
| [`docs/00-gobierno/`](docs/00-gobierno/) | [Metodología](docs/00-gobierno/METODOLOGIA.md), [fuentes y cómo se usa cada una](docs/00-gobierno/FUENTES.md), [decisiones](docs/00-gobierno/DECISIONS.md) y [diario de progreso](docs/00-gobierno/PROGRESS.md) |
| [`docs/01-levantamiento/`](docs/01-levantamiento/README.md) | Levantamiento v4: visión, 23 módulos más el conector contable, 339 requisitos trazables, flujos, integraciones, pendientes y cobertura de las transcripciones |
| [`docs/02-prd/`](docs/02-prd/README.md) | Plan de la fase PRD y plantilla por módulo |
| [`data/semillas/`](data/semillas/README.md) | Plantillas CSV para cargar los catálogos con los datos que dio el cliente |
| [`scripts/requisitos.mjs`](scripts/requisitos.mjs) | Valida los requisitos, genera su índice y mide la cobertura del PRD |

## Comandos

Requiere Node.js 18 o superior; no hay dependencias que instalar.

```bash
node scripts/requisitos.mjs                                  # valida y regenera el índice de requisitos
node scripts/requisitos.mjs --check                          # valida y comprueba que el índice esté al día
node scripts/requisitos.mjs --cobertura docs/02-prd          # requisitos que el PRD todavía no cubre
node scripts/requisitos.mjs --cobertura docs/02-prd --prefijos IAM,DISP   # lo mismo, para un módulo
```

## Confidencialidad

**Este repositorio es público.** Los documentos publicados están saneados: no contienen credenciales, datos de clientes finales, transcripciones de las reuniones ni hallazgos de seguridad de la aplicación en producción (DEC-004). La recomendación es hacerlo privado; mientras tanto, el material sensible se guarda en `confidencial/`, que git ignora.
