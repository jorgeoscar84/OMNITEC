# M21 · Analítica y KPI

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M21 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Convertir eventos confiables en decisiones, permitiendo abrir siempre el detalle que explica cada cifra.

## Paneles por nivel

- **Individual:** trabajo pendiente, actividad, metas, conversión, tiempos y calidad.
- **Supervisor:** equipo, carga, cumplimiento de SLA, embudo, productividad y excepciones.
- **Gerencia:** clientes, ventas, rentabilidad, servicio, canales, productos y tendencias.
- **Especializado:** marketing, laboratorio, campo, inventario, frecuencias y proveedores.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| BI-001 | Filtros por rango libre de fechas, día, semana, mes, trimestre, año, sede, equipo y responsable. | Confirmado | P1 |
| BI-002 | Cada indicador define fórmula, fuente, zona horaria, exclusiones, propietario y frecuencia de cálculo. | Propuesto | P0 |
| BI-003 | Todo indicador permite abrir los registros que lo componen, respetando permisos. | Propuesto | P1 |
| BI-004 | La comparación entre periodos no mezcla meses de años distintos. | Observado — brecha | P1 |
| BI-005 | La exportación declara con exactitud el formato que entrega. | Observado — brecha | P2 |
| BI-006 | Los paneles y las métricas se filtran por rol y alcance. | Confirmado | P1 |
| BI-007 | Comercial: leads, primera respuesta, conversión, ciclo, proformas enviadas, ventas, ticket y actividad, con filtro por asesor y total. | Confirmado | P1 |
| BI-008 | Marketing: fuente, campaña, entrega, respuesta, cita, oportunidad y conversión. | Confirmado | P1 |
| BI-009 | Técnica: equipos, etapas, tiempos, productividad, retrabajo, garantía y desempeño de proveedores. | Confirmado | P1 |
| BI-010 | Producto: frecuencia de venta y de reparación, fallas recurrentes, rentabilidad y satisfacción. | Confirmado | P2 |
| BI-011 | Cliente: compras, ticket, frecuencia, servicio, contratos, incidencias y rentabilidad. | Confirmado | P2 |
| BI-012 | La analítica no permite inferir el salario individual a usuarios no autorizados. | Propuesto | P0 |
| BI-013 | Los umbrales de SLA son configurables por contrato y tipo de servicio, no fijos. | Observado — brecha | P1 |
| BI-014 | Reporte diario y semanal por técnico: equipos revisados, reparados, proformas técnicas emitidas y aprobadas, desglosado por cliente y por equipo. | Confirmado — T1 · nuevo v4 | P1 |
| BI-015 | Valor producido por cada colaborador técnico frente a su costo en el periodo, visible solo para roles autorizados y sujeto a la decisión D-10. | Confirmado — T1 · nuevo v4 | P2 |

> **Por qué el SLA actual no sirve.** Hoy el sistema mide la diferencia entre la creación del informe y su aprobación, y clasifica con umbrales fijos de 5 y 12 días. El resultado es que **todos los clientes aparecen como** **“lento”**, con promedios de entre 12 y 46 días. La medición no distingue si la demora fue del técnico, del cliente que tardó en aprobar o del proveedor de repuestos. Un indicador que califica mal a todos por igual no informa ninguna decisión. De ahí la exigencia de relojes separados en el módulo de laboratorio.

## Pendientes

- **FALTA INFORMACIÓN:** DEFINICIÓN OPERATIVA DE «EQUIPO REVISADO» FRENTE A «EQUIPO REPARADO» PARA EL REPORTE DIARIO (BI-014).
