# M20 · Inventario, reservas y compras

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M20 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Mostrar disponibilidad y permitir que el flujo técnico y comercial solicite recursos, manteniendo a UpConta como fuente económica y de movimiento.

## Alcance dentro de OMNITRONEC 360

Consultar existencias disponibles, reservadas y en tránsito · reservar repuestos para órdenes aprobadas · crear solicitudes de compra o abastecimiento · consultar costo y precio autorizado según rol · relacionar movimientos y ubicaciones con la orden y la custodia técnica · conciliar estados con el sistema contable.

## Reserva con vencimiento automático

Requisito específico del cliente. Cuando se reserva un producto o repuesto para un cliente concreto —por una orden de trabajo o por un acuerdo comercial—, la reserva no es indefinida:

> Se indica **cuántos días permanecerá reservado**. Cumplido ese plazo, el producto vuelve automáticamente a figurar como disponible en almacén, sin que nadie tenga que liberarlo a mano.

El plazo máximo permitido se fija administrativamente según la política de la empresa, de modo que un usuario no pueda bloquear existencias indefinidamente.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| INV-001 | En modo integrado, UpConta es la fuente maestra de existencias, costo, factura y movimiento de bodega. En modo autónomo, OMNITRONEC 360 lleva su propio control de disponibilidad y ubicación, como fija la matriz de propiedad del dato. | Confirmado · ajustado v4 | P0 |
| INV-002 | En modo integrado, OMNITRONEC 360 consulta productos, servicios, precios, clientes y documentos fiscales por API. | Confirmado · ajustado v4 | P1 |
| INV-003 | La orden técnica muestra disponibilidad y fecha estimada tomadas de la fuente vigente según el modo; nunca muestra existencias que esa fuente no registre. | Propuesto · ajustado v4 | P1 |
| INV-004 | La reserva evita la doble asignación de una misma pieza. | Propuesto | P1 |
| INV-005 | **Toda reserva lleva un plazo en días; al cumplirse, la pieza se libera automáticamente.** | Confirmado — nota del cliente | P1 |
| INV-006 | **El plazo máximo de reserva se configura administrativamente según política.** | Confirmado — nota del cliente | P1 |
| INV-007 | La liberación automática notifica al responsable de la orden antes de ejecutarse. | Propuesto | P2 |
| INV-008 | Las bodegas de recepción, técnica y proveedor externo se mapean sin duplicar movimientos contables. | Confirmado | P1 |
| INV-009 | Toda sincronización conserva el identificador externo, el estado y la fecha de última conciliación. | Propuesto | P0 |
| INV-010 | Los errores de integración crean una cola de excepciones; nunca producen inconsistencias silenciosas. | Propuesto | P0 |
| INV-011 | La rentabilidad usa datos conciliados y define explícitamente el tratamiento del costo por hora. | Confirmado + propuesto | P1 |

> **Límite de la integración.** UpConta expone las bodegas como entidad administrable, pero su documentación pública **no publica operaciones de movimiento de inventario** —entrada, salida y transferencia— a través de la API. Mientras esa capacidad no exista, la cadena de custodia se lleva íntegramente en OMNITRONEC 360 y se concilia con contabilidad por otro medio. Este punto encabeza la lista de solicitudes al proveedor, en el [documento 07](../07-integraciones.md).

## Pendientes

- **FALTA INFORMACIÓN:** ¿A QUÉ DEALERS O DISTRIBUIDORES SE PIDEN LOS REPUESTOS Y CON QUÉ TIEMPOS DE ENTREGA HABITUALES?
