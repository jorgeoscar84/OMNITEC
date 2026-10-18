# M14 · Servicio técnico de laboratorio

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M14 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Controlar diagnóstico, aprobación, repuestos, reparación, mediciones, calidad, garantía y entrega, separando cada tipo de espera.

## Etapas objetivo

> Recibido por técnica → triaje y asignación → diagnóstico → propuesta técnica → esperando aprobación del cliente → aprobado total, parcial o rechazado → esperando stock, compra o proveedor → listo para reparar → en reparación o calibración → control de calidad → listo para entrega → entregado y cerrado

## La garantía dentro del flujo

Este es uno de los vacíos más importantes del levantamiento anterior. No todos los equipos que entran vienen a una reparación normal: **algunos entran en garantía**, y eso cambia el resultado económico de la orden.

Las reglas que el cliente definió:

- Cuando el equipo está en garantía, **el servicio de reparación no tiene costo** para el cliente.
- Los repuestos se deciden **pieza por pieza**: por cada repuesto necesario se selecciona si la garantía lo cubre o no. Un daño causado por el cliente sobre una pieza concreta puede facturarse aunque el resto esté cubierto.
- La garantía puede ser **interna**, otorgada por OMNITRONEC, o **tercerizada**: cuando la empresa compró el equipo a un proveedor externo o le encargó una reparación previa, esa garantía se extiende al proveedor, que queda obligado a reparar. Ese control se lleva desde la plataforma.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| LAB-001 | La orden se liga a la recepción, al cliente, a los activos y a los custodios. | Confirmado + propuesto | P1 |
| LAB-002 | Diagnóstico por equipo, con falla, hipótesis de causa, mediciones y evidencia. | Confirmado | P1 |
| LAB-003 | Servicios y repuestos se registran por línea, con aprobación independiente cuando aplique. | Confirmado + observado | P1 |
| LAB-004 | Se distinguen reparación, calibración, ajuste, confección y mantenimiento. | Confirmado | P1 |
| LAB-005 | Relojes separados: recepción, traspaso, diagnóstico, espera del cliente, espera de repuesto, espera de proveedor, reparación, control de calidad y entrega. | Confirmado | P1 |
| LAB-006 | Las esperas externas no penalizan la productividad del técnico y se reportan por separado. | Confirmado | P1 |
| LAB-007 | La reserva de repuesto ocurre después de la aprobación, según la política configurada. | Confirmado | P1 |
| LAB-008 | La reparación inicia cuando la orden está autorizada y los recursos están disponibles. | Confirmado | P1 |
| LAB-009 | **Un equipo puede entrar en garantía. En ese caso el servicio no se cobra.** | Confirmado — nota del cliente | P1 |
| LAB-010 | **Por cada repuesto se indica si la garantía lo cubre o si se factura al cliente.** | Confirmado — nota del cliente | P1 |
| LAB-011 | La orden muestra la garantía aplicable y su tiempo restante sin que nadie tenga que calcularlo. | Confirmado — nota del cliente | P1 |
| LAB-012 | Una garantía tercerizada identifica al proveedor obligado y permite reclamarle desde la plataforma. | Confirmado — nota del cliente | P1 |
| LAB-013 | El control de calidad exige pruebas configurables por categoría, modelo y tipo de servicio. | Propuesto | P1 |
| LAB-014 | La entrega registra el equipo funcionando, las excepciones y la firma del cliente. | Confirmado | P1 |
| LAB-015 | Impuestos y totales se calculan una sola vez, en el servidor, y el PDF usa ese mismo resultado. | Observado — brecha del 15 % fijo | P0 |
| LAB-016 | El historial de estados, montos y responsables es de solo agregado: nada se sobrescribe. | Propuesto | P0 |
| LAB-017 | Una misma orden soporta reparación interna y derivación externa. | Confirmado | P1 |
| LAB-018 | La baja técnica se registra con su motivo —no reparable o no rentable— y admite baja parcial de algunos equipos dentro de una misma orden. | Observado | P1 |
| LAB-019 | Cuando un repuesto no está en almacén se registra la solicitud al proveedor o *dealer* con su fecha, para medir la espera de repuesto por separado. | Confirmado — T1 · nuevo v4 | P1 |
| LAB-020 | Cada línea de servicio o repuesto lleva su estado de aprobación —aprobado, no aprobado o recomendado—; solo las aprobadas suman al total y las no aprobadas se muestran tachadas en el documento. | Observado — app actual, oct 2026 | P1 |
| LAB-021 | Al registrar una serie, el sistema avisa si ya existe en otro equipo de la misma orden o en otra orden, e indica cuál. | Observado — app actual, oct 2026 | P1 |
| LAB-022 | Biblioteca administrable de frases de diagnóstico por pieza o servicio: al agregar el repuesto, la observación del equipo se arma con la frase correspondiente y el técnico puede editarla. | Observado — app actual, oct 2026 | P1 |
| LAB-023 | Una orden con varios equipos permite clonar un equipo con sus líneas cambiando solo la serie, y reordenar los equipos. | Observado — app actual, oct 2026 | P2 |
| LAB-024 | Cada equipo del documento técnico lleva un código QR que abre su resumen. | Observado — app actual, oct 2026 | P2 |
| LAB-025 | El borrador de la orden se guarda automáticamente y se recupera si se cierra la ventana o se pierde la conexión. | Observado — app actual, oct 2026 | P1 |
| LAB-026 | Las reglas de cobro de la orden son configurables por un rol autorizado: qué se cobra en garantía, qué se cobra en baja técnica (hoy, solo el diagnóstico) y qué estados de línea suman al total; cada documento emitido congela la regla vigente (DEC-022). | Confirmado — consultor, 18 oct 2026 | P1 |

## Indicadores del módulo

Tiempo total percibido por el cliente · tiempo hasta el traspaso a técnica · tiempo de diagnóstico · espera de aprobación · espera de stock, compra o proveedor · tiempo efectivo de reparación y control de calidad · equipos revisados, reparados, dados de baja y entregados · retrabajo, garantía y reincidencia · productividad y valor generado por técnico, con reglas de costo aprobadas.

## Pendientes

- **FALTA INFORMACIÓN:** PRUEBAS Y MEDICIONES OBLIGATORIAS POR FAMILIA DE EQUIPO.
- **FALTA INFORMACIÓN:** DEFINICIÓN EXACTA DE “APROBADO PARCIAL”.
- **FALTA INFORMACIÓN:** MÉTODO AUTORIZADO DE CÁLCULO DE COSTO POR HORA Y VISIBILIDAD DE LA INFORMACIÓN SALARIAL.
