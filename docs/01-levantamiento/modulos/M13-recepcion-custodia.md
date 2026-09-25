# M13 · Recepción digital y cadena de custodia

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M13 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Registrar qué entrega el cliente, en qué estado, cuándo cambia de custodio y quién lo acepta.

## Flujo objetivo

> Cliente y contacto identificados → crear acta de recepción → registrar uno o varios equipos con su estado físico y funcional → motivo, garantía aplicable, accesorios y evidencia fotográfica → el cliente firma en tableta → generar código y etiqueta → recepción marca “Entregado a técnica” → técnica marca “Recibido por técnica” → inicia la orden y el diagnóstico

## Derivación a proveedor externo desde la custodia

El cliente pidió expresamente que la cadena de custodia contemple una bifurcación que hoy no existe. Además de aceptar el equipo y repararlo, **el técnico debe poder enviar uno o varios equipos a un proveedor externo desde el mismo flujo**:

> Técnica recibe → diagnostica → decide derivar → selecciona un proveedor externo previamente registrado, que puede ser un técnico independiente o una empresa → emite acta de salida con el problema detectado y la fecha comprometida con el cliente → el proveedor ejecuta o informa que no pudo repararlo → los equipos regresan **al área técnica o directamente a recepción**, con los datos que el proveedor indique sobre lo que ocurrió → control de calidad interno → entrega al cliente

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| REC-001 | Acta digital compatible con tableta y firma manuscrita del cliente. | Confirmado | P1 |
| REC-002 | Los datos del cliente y del contacto se reutilizan desde la ficha; no se vuelven a escribir. | Confirmado | P1 |
| REC-003 | Cada equipo o lote recibe un código que permite identificar cliente y acta sin exponer datos personales. | Confirmado + propuesto | P1 |
| REC-004 | Se registran estado, accesorios, falla declarada, garantía aplicable y evidencia fotográfica. | Confirmado | P1 |
| REC-005 | “Entregado a técnica” solo lo marca recepción. “Recibido por técnica” solo lo marca técnica. | Confirmado | P1 |
| REC-006 | Las marcas de tiempo y los responsables son inmutables; una corrección genera un evento nuevo. | Confirmado + propuesto | P0 |
| REC-007 | Toda diferencia entre lo entregado y lo recibido abre una excepción formal. | Propuesto | P0 |
| REC-008 | El acta emitida se envía al cliente por su canal preferido —WhatsApp o correo— y se archiva automáticamente. | Confirmado · ajustado v4 | P1 |
| REC-009 | Desde la custodia se puede derivar uno o varios equipos a un proveedor externo registrado. | Confirmado — nota del cliente | P1 |
| REC-010 | El retorno del proveedor puede dirigirse al área técnica o a recepción, según se decida. | Confirmado — nota del cliente | P1 |
| REC-011 | El catálogo extensible permite recibir equipos que no son radios. | Confirmado | P1 |
| REC-012 | El tiempo de diagnóstico no empieza a correr hasta que técnica confirme la recepción. | Confirmado | P1 |
| REC-013 | La firma del acta captura, además del trazo manuscrito, el nombre y la cédula del firmante y la fecha y hora. Todo lo demás se completa desde datos ya registrados. | Confirmado — T2 · nuevo v4 | P1 |
| REC-014 | Cada equipo recibido registra su condición —nuevo o usado— y su propiedad: del cliente o de OMNITRONEC, por ejemplo un equipo en renta. | Confirmado — T1 · nuevo v4 | P1 |
| REC-015 | Si el cliente no existe, se crea en el momento de la recepción con los datos mínimos, sin salir del flujo. | Confirmado — T2 · nuevo v4 | P1 |

## Reglas

- La firma en tableta no convierte por sí sola el documento en firma electrónica con valor legal pleno. Su alcance debe definirse y comunicarse.
- El identificador visible en la etiqueta no puede codificar RUC, nombre ni datos sensibles.

## Pendientes

- **FALTA INFORMACIÓN:** FORMATO OFICIAL DEL ACTA Y TEXTO DE ACEPTACIÓN DE CONDICIONES.
- **FALTA INFORMACIÓN:** ETIQUETAS, IMPRESORAS, TAMAÑO Y MATERIAL.
- **FALTA INFORMACIÓN:** VALOR PROBATORIO DE LA FIRMA EN TABLETA.
- **FALTA INFORMACIÓN:** ¿SE PRESTAN EQUIPOS DE REEMPLAZO AL CLIENTE MIENTRAS SE REPARAN LOS SUYOS?
