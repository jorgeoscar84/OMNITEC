# M04 · Oportunidades, pipelines y negociación

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M04 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Acompañar cada oportunidad desde el contacto inicial hasta su cierre, con responsable, próxima acción, valor, productos y evidencia.

## Pipelines configurables

Este es uno de los puntos que el cliente enfatizó de forma expresa. **Los pipelines no son fijos.** La plataforma entrega dos pipelines base —captación y postventa— pero:

- Se pueden crear pipelines adicionales.
- Cada etapa tiene nombre editable.
- Se pueden agregar, reordenar y retirar etapas.
- **Cada etapa admite automatizaciones propias**, configurables sin programar.

## Estructura de la oportunidad

Cliente y contactos participantes · propietario, equipo y colaboradores · fuente y campaña de origen · productos, servicios y categorías de interés · valor esperado, probabilidad y fecha estimada · etapa, tiempo en etapa y próxima acción · objeciones, competidores y requisitos · proformas versionadas y aprobaciones · resultado y motivo.

## Etapas iniciales, sujetas a validación

> Nuevo → contacto inicial → calificado → descubrimiento o visita → propuesta en preparación → proforma enviada → negociación → aprobación pendiente → ganado / perdido / pausado

## Automatizaciones por etapa

El ejemplo que el cliente describió, y que el motor debe poder expresar sin programar:

> **Cuando** la proforma pasa a estado aceptado **entonces** mostrar en la ficha del contacto la acción “convertir proforma en factura” **y cuando** la factura se emita en UpConta **entonces** marcar la oportunidad como venta ganada **o bien** esperar a que se registre la recepción del pago para marcarla como ganada

Cuál de las dos condiciones marca el cierre —facturación o cobro— **es configurable**, porque distintas empresas y distintos tipos de venta lo definen de forma diferente.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| VEN-001 | Pipelines configurables: crear, renombrar, reordenar y retirar etapas, con criterios de entrada y salida. | Confirmado — nota del cliente | P1 |
| VEN-002 | Cada etapa admite automatizaciones con disparador, condiciones y acciones, definidas desde configuración. | Confirmado — nota del cliente | P1 |
| VEN-003 | La regla que determina cuándo una venta se considera ganada es configurable: al facturar o al cobrar. | Confirmado — nota del cliente | P1 |
| VEN-004 | Al ganarse una oportunidad, el contacto pasa automáticamente al pipeline de postventa y queda registrado como cliente, sin quedar duplicado como lead. | Confirmado — nota del cliente | P1 |
| VEN-005 | Toda oportunidad tiene responsable, valor, etapa y próxima acción. | Propuesto | P1 |
| VEN-006 | Se conservan notas, acuerdos, objeciones y conversaciones por oportunidad. | Confirmado | P1 |
| VEN-007 | Los productos y servicios de la oportunidad se relacionan con el catálogo sincronizado por identificador. | Confirmado | P1 |
| VEN-008 | Se registran varias proformas y su evolución, sin sobrescribir la anterior. | Confirmado | P1 |
| VEN-009 | El cierre perdido exige motivo y, cuando corresponda, competidor y comentario. | Propuesto | P1 |
| VEN-010 | Medición de conversión, ciclo, ticket, valor y actividad por asesor, equipo y canal. | Confirmado | P1 |
| VEN-011 | Metas y progreso visibles para el asesor, según la política de compensación configurada por un administrador. | Confirmado — nota del cliente | P2 |
| VEN-012 | Etapas, criterios, metas y política de comisiones se configuran desde administración. | Confirmado — nota del cliente | P1 |
| VEN-013 | El cambio de etapa genera un evento; no se limita a sobrescribir un campo. | Propuesto | P0 |
| VEN-014 | El cierre puede producir un reconocimiento visual —confeti, fuegos artificiales u otra animación— configurable en intensidad según la magnitud de la venta. | Confirmado · ajustado v4 (P3→P2: el cliente lo pidió con énfasis en T4) | P2 |
| VEN-015 | El reconocimiento de un cierre se difunde a todos los usuarios de la plataforma, sin mostrar montos a quien no tenga permiso para verlos. | Confirmado — T4 · nuevo v4 | P2 |

## Reglas

- Marcar “ganado” exige documento o aceptación suficiente y un valor final.
- El reconocimiento visual de una venta no debe revelar montos a usuarios sin autorización para verlos, y debe respetar la preferencia de reducción de movimiento del usuario.
- El scoring y el semáforo priorizan; no sustituyen la etapa ni la próxima acción.

## Recomendaciones

- Vistas Kanban, lista y pronóstico, todas alimentadas por los mismos datos.
- Alertas por oportunidad sin actividad o con exceso de tiempo en una etapa.
- Registro estructurado de las razones de descuento y de la erosión de margen.

## Pendientes

- **FALTA INFORMACIÓN:** ETAPAS DEFINITIVAS DE LOS PIPELINES DE CAPTACIÓN Y DE POSTVENTA: LAS INICIALES SON UNA PROPUESTA (D-13).
- **FALTA INFORMACIÓN:** LISTA CERRADA DE DISPARADORES, CONDICIONES Y ACCIONES DE LA PRIMERA VERSIÓN DEL MOTOR DE AUTOMATIZACIONES (SECCIÓN 18.6).
- **FALTA INFORMACIÓN:** POLÍTICA DE METAS Y COMISIONES (P-10).
