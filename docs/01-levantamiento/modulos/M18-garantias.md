# M18 · Garantías

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M18 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Administrar de forma configurable las garantías que la empresa otorga y las que recibe de sus proveedores, y hacer visible en todo momento el tiempo que le resta a cada una.

> **Este módulo tampoco existía en el levantamiento anterior.** Nace de las notas del cliente, que describió un problema real: hoy la garantía es un texto fijo dentro del documento, y no hay forma de saber si un equipo que regresa está o no cubierto.

## Qué hace flexible a una garantía

El cliente fue explícito: **90 días no es** **“la garantía”, es una de las garantías.** Ciertas reparaciones llevan 90 días; otras partes, piezas, productos o servicios llevan plazos distintos. Por tanto el módulo debe permitir crear tipos de garantía y que el usuario seleccione cuál aplica en cada caso.

Una garantía se define por:

| Atributo | Descripción |
| --- | --- |
| Nombre y descripción | Cómo la identifica el usuario que la va a seleccionar. |
| Duración | Por días, por meses, por años o por un rango de fechas específico. |
| Alcance | Qué cubre: mano de obra, repuestos sustituidos, el producto completo, o una combinación. |
| Condición de activación | Desde qué evento empieza a contar: fecha de entrega, fecha de factura, fecha de instalación. |
| Aplicabilidad | A qué se puede aplicar: producto vendido, servicio prestado o repuesto instalado. |
| Origen | Interna, otorgada por OMNITRONEC, o tercerizada, otorgada por un proveedor externo. |

## Los tres objetos que pueden llevar garantía

1. **Un producto vendido.** Al vender uno o varios productos se selecciona la garantía aplicable. Queda ligada al producto concreto de una factura concreta, con su fecha de venta, y desde ahí se cuenta el tiempo restante.
2. **Un servicio prestado.** Una reparación tiene garantía desde la fecha en que se entregó el equipo. Es el caso que hoy cubre el texto de 90 días.
3. **Un repuesto instalado.** Un repuesto concreto colocado en el equipo de un cliente puede llevar su propia garantía, distinta de la del servicio.

## Garantía tercerizada

Cuando OMNITRONEC compró un equipo a un proveedor, o le encargó una reparación, la garantía de ese proveedor se registra y **se extiende hacia el cliente final**. Si el equipo falla dentro del plazo, la plataforma identifica al proveedor obligado a responder y permite gestionar el reclamo. Esto convierte en control activo lo que hoy depende de que alguien recuerde a quién se le compró.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| GAR-001 | Catálogo de garantías administrable, con creación por días, meses, años o rango de fechas. | Confirmado — nota del cliente | P1 |
| GAR-002 | La creación y edición del catálogo está restringida a administración o a un rol autorizado. | Confirmado — nota del cliente | P1 |
| GAR-003 | El usuario operativo —por ejemplo un técnico— selecciona qué garantía aplica al caso que está atendiendo. | Confirmado — nota del cliente | P1 |
| GAR-004 | Una garantía se aplica a un producto vendido, ligada al producto de una factura y a su fecha. | Confirmado — nota del cliente | P1 |
| GAR-005 | Una garantía se aplica a un servicio de reparación, contada desde la entrega. | Confirmado — nota del cliente | P1 |
| GAR-006 | Una garantía se aplica a un repuesto instalado en el equipo de un cliente. | Confirmado — nota del cliente | P1 |
| GAR-007 | Toda garantía aplicada muestra su **tiempo restante** de forma visible y calculada. | Confirmado — nota del cliente | P1 |
| GAR-008 | Una garantía puede ser tercerizada e identificar al proveedor obligado a reparar. | Confirmado — nota del cliente | P1 |
| GAR-009 | La recepción de un equipo consulta si existe garantía vigente y la propone automáticamente. | Propuesto | P1 |
| GAR-010 | La garantía aplicada a una orden determina el resultado económico: servicio sin costo y decisión pieza por pieza sobre los repuestos. | Confirmado — nota del cliente | P1 |
| GAR-011 | Al emitirse, el documento congela el texto y el plazo de la garantía vigente en ese momento. | Propuesto | P0 |
| GAR-012 | Panel de garantías próximas a vencer, por cliente y por proveedor. | Propuesto | P2 |
| GAR-013 | La política vigente observada —90 días desde la entrega, sobre mano de obra y repuestos sustituidos, ante reaparición del mismo síntoma o causa raíz— se carga como garantía por defecto del servicio de reparación, sujeta a aprobación formal. | Observado | P1 |

## Pendientes

- **FALTA INFORMACIÓN:** CATÁLOGO REAL DE GARANTÍAS POR PRODUCTO, SERVICIO Y REPUESTO (P-05, D-03).
- **FALTA INFORMACIÓN:** ¿SE GESTIONAN GARANTÍAS DE FABRICANTE (MOTOROLA, KENWOOD) CON RECLAMO AL FABRICANTE O A SU DISTRIBUIDOR?
