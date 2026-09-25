# M07 · Marketing, segmentos y campañas

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M07 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Organizar audiencias y secuencias de comunicación por correo y WhatsApp, medir la respuesta y promover contactos al pipeline cuando exista intención real.

## Paneles y acciones

- **Segmentos:** Nuevo segmento, Duplicar, Previsualizar integrantes, Exportar con autorización.
- **Campañas:** Nueva campaña, elegir canal, audiencia, secuencia y calendario de envío.
- **Plantillas:** Crear, Versionar, Aprobar, Archivar, Probar variables.
- **Resultados:** enviados, entregados, abiertos, clics, respuestas, bajas, fallos y conversiones.
- **Bases frías:** Importar, Validar, Usar solo para campaña o enviar al inbox.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| MKT-001 | Segmentación por industria, provincia, relación, producto, contrato, fechas y comportamiento. | Confirmado | P1 |
| MKT-002 | Campañas de correo y WhatsApp con varios pasos y tiempos configurables entre ellos. | Confirmado | P1 |
| MKT-003 | Plantillas reutilizables con campos fijos que se completan solos: nombre del contacto, empresa y cualquier otro campo de la ficha. | Confirmado | P1 |
| MKT-004 | Programación por fecha y hora exactas, por intervalo en días, por día de la semana o por recurrencia mensual. | Confirmado | P1 |
| MKT-005 | Las plantillas admiten texto, imagen, audio, vídeo y documento. Los documentos se limitan a PDF. | Confirmado | P2 |
| MKT-006 | El formato de WhatsApp usa párrafos breves y admite negritas y emojis, con una llamada a la acción clara. | Confirmado | P2 |
| MKT-007 | El correo admite asunto, banner de encabezado, cuerpo, llamada a la acción y remitente configurado. | Confirmado | P1 |
| MKT-008 | Varios remitentes de correo y varios números de WhatsApp, cada uno con su propósito. | Confirmado | P1 |
| MKT-009 | El canal de marketing y el canal de atención se mantienen separados: un número para captación y otro para clientes existentes. | Confirmado | P1 |
| MKT-010 | Una respuesta o conversión puede crear un lead conservando origen y campaña. | Confirmado | P1 |
| MKT-011 | Aprobación, prueba, pausa, límites de envío y lista de exclusión antes de cualquier campaña. | Propuesto | P0 |
| MKT-012 | El consentimiento, la baja y la supresión prevalecen sobre cualquier automatización. | Propuesto | P0 |
| MKT-013 | Una plantilla publicada se versiona: editarla no altera las campañas ya enviadas. | Propuesto | P0 |
| MKT-014 | Una variable sin valor bloquea el envío o usa un texto alternativo aprobado. Nunca se muestra el marcador al destinatario. | Propuesto | P0 |
| MKT-015 | Biblioteca de **mensajes predeterminados** en administración —cumpleaños, vencimiento de contrato, renovación de póliza, estudio de ingeniería, mantenimiento y los que se agreguen—, cada uno como mensaje único o como cadena de mensajes con su programación. | Confirmado — T2 · nuevo v4 | P1 |
| MKT-016 | Las fechas de la ficha —cumpleaños del contacto y vencimientos de contrato, póliza, estudio, mantenimiento y compra— pueden disparar la secuencia configurada, siempre sujetas a consentimiento. | Confirmado — T2 · nuevo v4 | P1 |
| MKT-017 | Campañas, secuencias y plantillas se gestionan dentro de la plataforma; el envío se delega a un servicio de envío masivo configurable por API o SMTP. | Confirmado — T2 · nuevo v4 | P1 |

## Recomendaciones

- Frecuencia máxima de contacto por persona, para evitar fatiga.
- Centro de preferencias y exclusiones accesible para el destinatario.
- Pruebas comparativas solo cuando el volumen permita concluir algo.

## Pendientes

- **FALTA INFORMACIÓN:** PROVEEDOR DE WHATSAPP BUSINESS Y DE CORREO MASIVO, CON SUS LÍMITES Y COSTOS.
- **FALTA INFORMACIÓN:** POLÍTICA DE CONSENTIMIENTO Y DE CONSERVACIÓN DE DATOS DE CAMPAÑA.
- **FALTA INFORMACIÓN:** IDENTIDAD VISUAL Y PLANTILLAS APROBADAS POR CANAL.
- **FALTA INFORMACIÓN:** SERVICIO DE ENVÍO MASIVO DE CORREO (EL CLIENTE MENCIONÓ AWS) Y PROVEEDOR DE WHATSAPP BUSINESS API (D-08).
