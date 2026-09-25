# M19 · Incidencias, SLA y acciones correctivas

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M19 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Registrar fallas que afectan sistemas y activos, controlar impacto y restauración, y aprender de las causas.

## Estados

> Abierto → asignado → en diagnóstico → mitigado → esperando cliente, repuesto o proveedor → resuelto → validado → cerrado, con posibilidad de reapertura

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| INC-001 | La incidencia se liga a cliente, sitio, sistema y activos mediante identificador, no por texto libre. | Observado — brecha | P1 |
| INC-002 | La severidad se deriva de impacto y urgencia, no de una selección libre. | Observado + propuesto | P1 |
| INC-003 | Todo cambio de estado exige nota, responsable y fecha, y queda registrado. | Observado — brecha | P0 |
| INC-004 | SLA configurable por contrato, severidad y horario de cobertura. | Confirmado + propuesto | P1 |
| INC-005 | Pausas de SLA explícitas mientras se espera al cliente, a un repuesto o a un proveedor. | Observado — brecha | P1 |
| INC-006 | La resolución exige resumen, causa o hipótesis, fecha y activos restaurados. | Propuesto | P1 |
| INC-007 | El cierre exige validación y que las tareas críticas estén terminadas. | Propuesto | P1 |
| INC-008 | Los próximos pasos se convierten en tareas con responsable y vencimiento. | Observado + propuesto | P1 |
| INC-009 | Análisis de causa raíz formal para severidad crítica o para recurrencias. | Propuesto | P2 |
| INC-010 | El tiempo fuera de servicio y la disponibilidad se calculan desde eventos consistentes. | Observado + propuesto | P1 |
| INC-011 | Detección de recurrencia por sitio, activo y síntoma. | Propuesto | P2 |

> **Estado actual.** El módulo contiene tres tickets, todos de un mismo cliente y todos cerrados. El estado se cambia desde un desplegable en la propia lista, con efecto inmediato y sin pedir motivo. El sitio se escribe como texto libre pese a existir un catálogo de repetidoras.
