# M17 · Plan de frecuencias y espectro

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M17 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Administrar el plan de canales de cada cliente, que es el activo operativo más valioso de la empresa y el que conecta la operación técnica con la obligación regulatoria ante ARCOTEL.

> **Este módulo no existía en el levantamiento anterior.** Se incorpora tras verificarlo en producción: 227 clientes con 669 canales configurados. Es, con diferencia, el conjunto de datos más rico del sistema actual.

## Modelo del canal

Cada canal registra: número de canal, tipo —simplex o dúplex—, nombre, frecuencia de recepción en MHz, frecuencia de transmisión en MHz, modo analógico o digital, tono CTCSS o DCS, código de color, ranura de tiempo y grupo de conversación.

Los tres últimos campos —código de color, ranura y grupo— corresponden a operación digital DMR y hoy están vacíos en la mayoría de los registros analógicos, lo cual es correcto.

## Ubicación en el producto

El plan de frecuencias es un **módulo propio de primer nivel**, ligado simultáneamente a:

- **El cliente**, porque la licencia es suya.
- **El sitio**, porque los canales de repetición pertenecen a una instalación concreta.
- **Los equipos programados**, porque cada radio entregado lleva un plan de canales cargado.
- **La póliza ARCOTEL**, porque su vencimiento tiene consecuencias regulatorias.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| FREQ-001 | Plan de canales por cliente, con todos los campos observados en el sistema actual. | Observado | P1 |
| FREQ-002 | El plan se asocia al cliente y al sitio mediante identificador, nunca por nombre. | Observado — brecha | P0 |
| FREQ-003 | Cada canal indica si es analógico o digital, y solo exige los campos DMR cuando es digital. | Observado | P1 |
| FREQ-004 | El plan de frecuencias se vincula a la póliza ARCOTEL correspondiente y a su fecha de vencimiento. | Confirmado | P1 |
| FREQ-005 | El vencimiento de la póliza genera alerta con al menos un mes de antelación y escala a un responsable. | Confirmado | P1 |
| FREQ-006 | Se registra qué plan de canales se programó en cada equipo entregado y en qué fecha. | Propuesto | P1 |
| FREQ-007 | Detección de conflictos: dos clientes con la misma frecuencia y tono en la misma zona geográfica. | Propuesto | P2 |
| FREQ-008 | Exportación del plan en el formato que admite el software de programación de cada fabricante. | Propuesto | P2 |
| FREQ-009 | Historial de cambios del plan, con responsable, fecha y motivo. | Propuesto | P1 |
| FREQ-010 | La migración debe fusionar los registros que hoy representan sitios como si fueran clientes distintos. | Observado — brecha | P0 |
| FREQ-011 | La vigencia de cada póliza ARCOTEL se configura por póliza —anual o plurianual, hasta cinco años—, porque muchos clientes la renuevan cada año aunque podrían hacerlo por cinco. | Confirmado — T2 · nuevo v4 | P1 |

> **Brecha crítica para la migración.** En el módulo actual los sitios están registrados como clientes independientes. Un mismo cliente aparece tantas veces como sitios tiene: un cliente ocupa siete registros, otro cinco, otro cuatro y otro tres. Ahí está la explicación de que el maestro tenga 823 clientes y este módulo solo 227. La fusión propuesta se detalla en el paquete de datos extraídos.

## Pendientes

- **FALTA INFORMACIÓN:** ¿QUIÉN TRAMITA LA PÓLIZA ARCOTEL: OMNITRONEC O EL CLIENTE? ¿QUIÉN ES EL RESPONSABLE INTERNO DEL ESCALAMIENTO?
