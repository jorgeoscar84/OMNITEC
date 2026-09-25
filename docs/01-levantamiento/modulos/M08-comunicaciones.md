# M08 · Comunicaciones individuales y asistencia comercial

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M08 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Permitir que el asesor converse desde la ficha del cliente, con el canal correcto, con contexto completo y con registro auditable.

## Paneles y acciones

- **Conversación:** Responder, Usar plantilla, Adjuntar, Programar envío, Transferir.
- **Correo individual:** Redactar, Generar borrador con IA, Previsualizar, Enviar.
- **WhatsApp individual:** plantilla o mensaje permitido, borrador con IA, adjuntos, respuesta e historial.
- **Actividad fuera de línea:** Registrar llamada, visita, acuerdo o nota.
- **Historial:** filtrado por canal, usuario, fecha, oportunidad o servicio.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| COM-001 | Envío de correo y WhatsApp desde el contexto del cliente, sin cambiar de pantalla. | Confirmado | P1 |
| COM-002 | Registro de los mensajes enviados y recibidos, con estado de entrega y responsable. | Confirmado + propuesto | P1 |
| COM-003 | Distinción explícita entre comunicación manual y campaña automatizada. | Confirmado | P1 |
| COM-004 | Notas manuales ilimitadas con autor, fecha, edición y auditoría. | Confirmado | P1 |
| COM-005 | Registro del resultado de llamadas y reuniones que no dejan rastro en el chat. | Confirmado | P1 |
| COM-006 | Las plantillas insertan variables de cliente, contacto, oportunidad y asesor. | Confirmado | P1 |
| COM-007 | Los adjuntos se almacenan una sola vez y se relacionan con la conversación y el documento. | Propuesto | P1 |
| COM-008 | La IA propone texto usando el contexto autorizado; una persona aprueba antes de enviar. | Confirmado + propuesto | P1 |
| COM-009 | Transferir una conversación conserva el historial y notifica al nuevo responsable. | Propuesto | P1 |
| COM-010 | Se respetan horario, preferencias, consentimiento y canal permitido de cada contacto. | Propuesto | P0 |
| COM-011 | El historial no mezcla conversaciones de distintos contactos de una misma organización sin identificar al destinatario. | Propuesto | P1 |
| COM-012 | La IA identifica la intención del mensaje —saludo, envío de información, seguimiento comercial o recompra— y la combina con el enfoque que indica el asesor. | Confirmado — T3 · nuevo v4 | P2 |

## Contexto que la IA puede utilizar

Cliente y contacto, oportunidad, etapa, notas, acuerdos, productos, proforma, objeciones, speech aprobado y tono corporativo. La información económica o personal solo entra en el contexto cuando el rol y la finalidad lo autorizan de forma expresa.

## Reglas

- Un mensaje generado por IA nunca se envía de forma automática.
- Una nota editada conserva su versión anterior; corregir una nota no borra el historial.
- Todo adjunto pasa validación de tipo, tamaño y seguridad.
