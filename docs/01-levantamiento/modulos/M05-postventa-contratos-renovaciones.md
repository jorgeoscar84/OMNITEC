# M05 · Postventa, contratos y renovaciones

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M05 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Sostener la relación después de la venta y convertir contratos, compras y mantenimientos en acciones oportunas de servicio y recompra.

## Tipos de contrato identificados

- Renta de frecuencia, en modalidad tradicional o de datos.
- Renta de caseta.
- Renta de infraestructura.
- Renta de equipos, en modalidad POC o tradicional.
- Contratos mixtos, que combinan varias de las anteriores.
- Estudios de ingeniería.
- Pólizas y trámites ARCOTEL.
- Compra y mantenimiento de equipos.

## Paneles y acciones

- **Renovaciones próximas y vencidas:** Crear seguimiento, Enviar recordatorio, Escalar.
- **Contratos:** Nuevo, Renovar, Suspender, Cerrar, Adjuntar documento.
- **Mantenimiento:** Programar, Crear campaña, Crear orden de servicio.
- **Cuenta 360:** oportunidades de venta cruzada, recompra y riesgo de abandono.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| POST-001 | Pipeline de postventa separado del de captación, igualmente configurable. | Confirmado | P1 |
| POST-002 | Contratos con tipo, vigencia, estado, cliente, sitios, activos y documentos asociados. | Confirmado | P1 |
| POST-003 | Contratos mixtos soportados mediante líneas o coberturas relacionadas. | Confirmado | P1 |
| POST-004 | Alertas de renovación configurables, con un mínimo inicial de un mes de antelación. | Confirmado | P1 |
| POST-005 | Varias compras y mantenimientos generan ciclos independientes de seguimiento. | Confirmado | P1 |
| POST-006 | Recordatorio de mantenimiento aproximadamente al año desde la entrega, parametrizable por producto y servicio. | Confirmado | P1 |
| POST-007 | El vencimiento de una póliza ARCOTEL escala a un responsable, por sus consecuencias regulatorias. | Confirmado | P1 |
| POST-008 | La renovación crea automáticamente tarea y segmento de campaña, sin enviar nada hasta cumplir consentimiento y aprobación. | Propuesto | P1 |
| POST-009 | Se registra el resultado de cada renovación: renovado, perdido, pendiente o no aplica, con motivo. | Propuesto | P1 |
| POST-010 | Se muestran oportunidades de venta cruzada y ampliación basadas en historial, como sugerencia y nunca como decisión automática. | Confirmado + propuesto | P2 |
| POST-011 | Cada vencimiento dispara una **secuencia** configurable de avisos al cliente y al asesor —no un aviso único— que se detiene cuando se registra el resultado de la renovación. | Confirmado — T2 · nuevo v4 | P1 |
| POST-012 | Acciones de fidelización para clientes de postventa —ofertas, descuentos condicionados a un monto de compra, beneficios en mantenimiento— con vigencia, segmento destinatario y resultado registrado. | Confirmado — T1 · nuevo v4 | P2 |

## Reglas

- Una fecha de compra o de mantenimiento nunca sobrescribe otra: son eventos ligados a activos o lotes.
- Una campaña de renovación no sustituye la tarea individual del asesor cuando la cuenta es estratégica.

## Pendientes

- **FALTA INFORMACIÓN:** TIPOS DEFINITIVOS DE CONTRATO Y REGLAS DE RENOVACIÓN DE CADA UNO.
- **FALTA INFORMACIÓN:** LEGALIDAD, PERIODICIDAD Y RESPONSABLE DE LAS PÓLIZAS Y TRÁMITES ARCOTEL.
- **FALTA INFORMACIÓN:** UMBRAL QUE DEFINE UNA CUENTA COMO ESTRATÉGICA.
