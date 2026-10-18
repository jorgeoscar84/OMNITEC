# M11 · Documentos comerciales: cartas, proformas, catálogos, contratos y certificados

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M11 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Generar documentos consistentes reutilizando datos ya registrados, y conservar su ciclo de vida completo.

## Familias documentales

1. Carta de presentación personalizada, a partir de una plantilla diseñada externamente.
2. Proforma o cotización, para cliente final o para distribuidor.
3. Proforma técnica, derivada del diagnóstico de laboratorio. Es el documento que hoy se llama «informe técnico»; el cliente pidió en T1 llamarlo proforma técnica «porque lo que estamos haciendo es una proforma técnica» (decisión DEC-008).
4. Contratos y adendas.
5. Certificados comerciales, de garantía y de frecuencia.
6. Informes y estudios de ingeniería.
7. Catálogo de productos para un cliente, generado desde el catálogo existente con la plantilla de marca (COT-018). *(nuevo v4 — T1)*

## Qué pasa con la proforma si no hay integración contable

La proforma funciona entera en modo autónomo: se arma, se versiona, se envía, se acepta y se cierra dentro de OMNITRONEC 360. Lo único que cambia con UpConta activo es el último paso: en modo integrado, «solicitar la facturación» crea la factura en UpConta (COT-012); en modo autónomo, registra la venta con su documento interno y deja la emisión fiscal como tarea pendiente para contabilidad, con todos los datos listos. *(aclaración v4, derivada del principio de autonomía funcional)*

## Carta de presentación: qué es y qué no es

El cliente fue explícito en este punto y conviene dejarlo escrito para evitar malentendidos en el PRD: **la plataforma no es un editor gráfico y no diseña cartas de presentación.** El diseño se hace una vez, en una herramienta especializada, y se importa como plantilla. Lo que la plataforma aporta es la personalización y el envío:

> Seleccionar cliente y contacto → elegir plantilla vigente → completar variables desde la ficha → validar datos obligatorios → generar vista previa y PDF → enviar por el canal activo, incluido el WhatsApp donde transcurre la conversación → registrar el documento y la actividad

El valor está en eliminar los cinco minutos que hoy consume cambiar a mano el nombre, el RUC, la fecha y el destinatario, y luego convertir a PDF.

## Proforma: reutilización entre sucursales

Situación real que el cliente describió y que debe resolverse de forma explícita: una empresa grande tiene sucursales en todo el país, cada una con su encargado de compras, y todas compran los mismos equipos o equipos muy similares.

Volver a escribir todos los ítems para cada sucursal es trabajo desperdiciado. Por tanto:

> La proforma debe poder duplicarse conservando íntegramente sus líneas, cantidades, precios y condiciones, cambiando únicamente el destinatario —la sucursal y su encargado de compras— y los datos particulares de esa unidad de negocio.

Esto exige una lógica de guardado propia: la proforma se comporta como una plantilla reutilizable dentro de la misma organización, sin que ello rompa el versionado ni la trazabilidad de cada documento emitido.

## Ciclo de la proforma

> Oportunidad → seleccionar cliente y lista de precios → agregar productos, servicios, logística y condiciones → calcular impuestos y descuentos en el servidor → revisión y aprobación interna cuando aplique → emitir versión numerada → enviar → el cliente acepta, rechaza o pide cambios → duplicar en nueva versión sin borrar la anterior → cerrar negociación → solicitar la facturación a UpConta

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| COT-001 | Plantillas versionadas con variables y vigencia. | Confirmado + propuesto | P1 |
| COT-002 | La carta se genera desde la ficha sin volver a escribir ningún dato del cliente. | Confirmado | P1 |
| COT-003 | La carta resultante se envía por el canal activo y queda archivada en el repositorio. | Confirmado | P1 |
| COT-004 | La proforma admite productos, servicios, mano de obra, transporte y logística, y condiciones comerciales. | Confirmado | P1 |
| COT-005 | La proforma se puede duplicar hacia otra sucursal o contacto conservando todas sus líneas. | Confirmado — nota del cliente | P1 |
| COT-006 | Se diferencia plantilla y tono entre cliente final y distribuidor. | Confirmado | P2 |
| COT-007 | El texto comercial persuasivo es opcional, se aplica solo a cliente final y nunca altera precios ni hechos. | Confirmado | P2 |
| COT-008 | Se conservan todas las versiones con sus comentarios, totales y resultado. | Confirmado | P0 |
| COT-009 | Editar un documento emitido genera una revisión nueva; nunca se sobrescribe. | Propuesto | P0 |
| COT-010 | Se calcula la diferencia entre la propuesta inicial y la final, el descuento aplicado y la erosión de valor. | Confirmado | P2 |
| COT-011 | La aceptación o el rechazo registran identidad, fecha, comentario y evidencia. | Confirmado + propuesto | P1 |
| COT-012 | En modo integrado, la conversión a factura se ejecuta contra UpConta con clave de idempotencia para no emitir dos veces. En modo autónomo se registra la venta con su documento interno y la emisión fiscal queda marcada como pendiente. | Confirmado · ajustado v4 | P0 |
| COT-013 | Impuestos, moneda, garantía y términos son políticas versionadas —tomadas de UpConta en modo integrado o de la configuración propia en modo autónomo— y se congelan al emitir. | Observado — brecha · ajustado v4 | P0 |
| COT-014 | La numeración es transaccional y se genera en el servidor, por documento, sede y año. | Observado — brecha | P0 |
| COT-015 | El PDF se genera en el servidor a partir del mismo conjunto de datos aprobado, nunca recalculado en el navegador. | Propuesto | P0 |
| COT-016 | Una proforma puede emitirse a un prospecto con datos mínimos —nombre y un medio de contacto—; los datos fiscales completos solo se exigen al solicitar la factura. | Confirmado — T1 · nuevo v4 | P1 |
| COT-017 | La proforma lleva la identidad de marca de OMNITRONEC: presentación cuidada y profesional, sin convertirse en pieza publicitaria. | Confirmado — T1, T3 · nuevo v4 | P1 |
| COT-018 | **Generador de catálogo de productos**: a partir del catálogo existente —descripciones, imágenes y fichas— el usuario elige productos o categorías y la lista de precios del cliente, y obtiene un PDF con la plantilla de marca. | Confirmado — T1 · nuevo v4 | P2 |
| COT-019 | La proforma técnica admite mano de obra calculada por cantidad de equipos y descuentos específicos para un cliente, con su motivo. | Confirmado — T1 · nuevo v4 | P1 |
| COT-020 | El documento técnico se emite en varios formatos desde los mismos datos: consolidado, separado (mano de obra, repuestos y combinado), solo mano de obra, solo repuestos, solo inventario de equipos y solo resumen; por ubicación o de todas a la vez. | Observado — app actual, oct 2026 | P1 |
| COT-021 | El mantenimiento en sitio puede emitirse como informe técnico o como proforma a partir de los mismos datos. | Observado — app actual, oct 2026 | P1 |

> **Brecha observada.** En la aplicación actual el número de informe se sugiere consultando el último registro, de modo que dos usuarios pueden recibir el mismo número. Además el documento emitido declara “IVA 15 %” como texto fijo. Ambas cosas deben resolverse en el servidor.

## Pendientes

- **FALTA INFORMACIÓN:** FORMATO OFICIAL DE CARTA, CONTRATO Y CERTIFICADO.
- **FALTA INFORMACIÓN:** REGLAS DE DESCUENTO, MATRIZ DE AUTORIZACIÓN Y POLÍTICA DE FIRMA.
- **FALTA INFORMACIÓN:** FORMATO DE LA PROFORMA COMERCIAL, INCLUIDOS TRANSPORTE Y LOGÍSTICA PARA OTRAS PROVINCIAS (P-20, TAREA DE JOSÉ).
- **FALTA INFORMACIÓN:** PLANTILLA DE MARCA DEL CATÁLOGO DE PRODUCTOS EN PDF.

*Nota: el formato del informe técnico —ahora «proforma técnica»— ya no está pendiente; se documenta en el [anexo A](../anexos/A-aplicacion-actual.md).*
