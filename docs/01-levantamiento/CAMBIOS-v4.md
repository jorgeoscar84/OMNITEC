# Cambios de la v3 a la v4

[← Índice del levantamiento](README.md)

La v3 («consolidada y depurada», 6 sep 2026) se generó a partir de las transcripciones, de notas del cliente, de una auditoría de la aplicación en producción y de la documentación de UpConta. La v4 (25 sep 2026) la conserva casi entera y hace cinco cosas: la divide por módulos, la vuelve a contrastar con las cuatro transcripciones completas, corrige contradicciones internas, separa lo que bloquea el PRD de lo que no, y la sanea para un repositorio público.

## 1. Nueva estructura

| v3 | v4 |
| --- | --- |
| Un documento Word de unas 2.400 líneas | Un archivo por capítulo y uno por módulo en `docs/01-levantamiento/`, para que el PRD y los agentes carguen solo lo necesario |
| Capítulos 1 a 3 | [01 · Visión, alcance y principios](01-vision-alcance-principios.md) |
| Capítulo 4 | [02 · Ecosistema y propiedad del dato](02-ecosistema-y-propiedad-del-dato.md) |
| Capítulo 5 | [03 · Actores, organización y permisos](03-actores-organizacion-permisos.md); la disponibilidad (5.5) pasa a M01 |
| Capítulo 6 | [04 · Mapa de módulos](04-mapa-de-modulos.md), con índice, **dependencias entre módulos y reglas de interconexión (nuevo)** |
| Capítulo 7 (22 módulos) | [`modulos/`](modulos/README.md): 23 archivos. **M09 Habilitación comercial es nuevo** y los demás se renumeran desde M10 |
| Capítulos 8, 9, 11, 12 y 13 | Documentos 05, 06, 08 y 09 |
| Capítulo 10 y anexo C | [07 · Integraciones](07-integraciones.md) |
| Capítulo 14 | [10 · Fases y entregas](10-fases-y-entregas.md), con ajustes, entregas demostrables y tamaño del alcance (nuevo) |
| Capítulos 15 y 16 | [11 · Pendientes, decisiones y riesgos](11-pendientes-decisiones-riesgos.md), con la sección 16.2 reescrita |
| Capítulo 17 | [12 · Historias de usuario semilla](12-historias-de-usuario-semilla.md), con siete historias nuevas |
| Capítulo 18 y anexo D | [13 · Directrices para el PRD](13-directrices-para-el-prd.md), con la sección 18.8 nueva |
| Anexo B | [14 · Glosario](14-glosario.md), con doce términos nuevos |
| Anexos A y E | [`anexos/`](anexos/) |

## 2. Requisitos nuevos (39)

Todos salen de volver a leer las transcripciones completas. Llevan la marca «nuevo v4» en la columna Origen.

| ID | Resumen | Fuente |
| --- | --- | --- |
| CLI-018 | Campos personalizados definidos por administración | T2 |
| LEAD-014 | El asesor importa bases para campaña; solo el administrador exporta clientes | T4 |
| LEAD-015 | Integración con plataformas de agendamiento y webinars | T4 |
| VEN-015 | La celebración de un cierre se difunde a todos, sin montos no autorizados | T4 |
| POST-011 | Avisos de vencimiento en secuencia hasta resolver la renovación | T2 |
| POST-012 | Acciones de fidelización en postventa | T1 |
| CAL-013 | Bloqueo de cruces por defecto; excepción solo con rol autorizado y motivo | T2 |
| CAL-014 | Vistas de día, semana y mes y lista de pendientes por fecha | T2 |
| CAL-015 | Invitación o recordatorio al contacto desde el evento | T2 |
| MKT-015 | Biblioteca de mensajes predeterminados | T2 |
| MKT-016 | Fechas de la ficha como disparadores de secuencias | T2 |
| MKT-017 | Campañas gestionadas dentro; envío delegado a un servicio masivo | T2 |
| COM-012 | La IA identifica la intención del mensaje | T3 |
| COT-016 | Proforma a prospecto con datos mínimos | T1 |
| COT-017 | Proforma con identidad de marca, profesional y no publicitaria | T1, T3 |
| COT-018 | Generador de catálogo de productos en PDF | T1 |
| COT-019 | Mano de obra por cantidad de equipos y descuentos por cliente en la proforma técnica | T1 |
| CAT-014 | Estructura de categorías macro y micro como plantilla semilla validada | T1 |
| CAT-015 | Costo y precio de venta separados; costo visible solo con permiso | T1 |
| REC-013 | La firma captura nombre, cédula, fecha y hora | T2 |
| REC-014 | Condición (nuevo o usado) y propiedad del equipo recibido | T1 |
| REC-015 | Crear el cliente en el momento de la recepción | T2 |
| LAB-019 | Registro de la solicitud de repuesto al proveedor o *dealer* | T1 |
| EXT-010 | Acta de salida digital e imprimible con las solicitudes del cliente | T1 |
| FREQ-011 | Vigencia de la póliza ARCOTEL configurable por póliza | T2 |
| BI-014 | Reporte diario y semanal por técnico | T1 |
| BI-015 | Valor producido frente a costo por colaborador técnico | T1 |
| IA-019 | Agente de campañas | T2 |
| IA-020 | Factores de cierre a partir de la evolución de las proformas | T3 |
| ADM-013 | Identidad corporativa central | T2 |
| ADM-014 | Catálogos vacíos cargados desde plantillas semilla | T3, T4 |
| HAB-001 a HAB-008 | Módulo nuevo M09: speech, puntos fuertes, objeciones, jerarquía de edición y versiones | T2 (y v3) |

## 3. Requisitos ajustados (12)

| ID | Qué cambió | Por qué |
| --- | --- | --- |
| INV-001 | UpConta es fuente maestra solo en modo integrado; en modo autónomo la plataforma lleva disponibilidad y ubicación | Contradecía el principio de autonomía funcional, que la propia v3 declara superior a los demás, y su matriz 4.2 |
| INV-002 | La consulta por API aplica en modo integrado | Misma razón |
| INV-003 | La disponibilidad se toma de la fuente vigente según el modo | Misma razón: «nunca inventa existencias locales» impedía el modo autónomo |
| CAT-007 | Código, precio base e impuesto vienen de UpConta solo en modo integrado | Misma razón |
| CLI-017 | La conversión de prospecto crea el cliente fiscal en la plataforma y lo vincula con UpConta solo en modo integrado | Misma razón |
| COT-012 | En modo autónomo, «solicitar facturación» registra la venta y deja la emisión fiscal pendiente | Misma razón; ya lo decía la sección 18.1, pero no el requisito |
| COT-013 | Impuestos y términos vienen de UpConta o de la configuración propia, según el modo | Misma razón |
| CLI-014 | Se explicita el precio histórico por producto y el monto y la fecha de cada factura | T2: «a qué precio he comprado un producto determinado» |
| CAL-008 | Se nombran Google Calendar y Microsoft Outlook | T2 |
| REC-008 | El acta se envía por el canal preferido: WhatsApp o correo | T2 |
| VEN-014 | Prioridad de P3 a P2; se describen las animaciones | El cliente lo pidió con énfasis (T4) |
| IA-016 | Remite al módulo M09 | Reorganización |

También se ajustaron, por la misma razón de autonomía, el paso 2 del orden de construcción (1.5) y el punto 3 del criterio de la primera entrega (14.1).

## 4. Decisiones, pendientes y riesgos nuevos

- **Decisiones abiertas:** D-11 (ratificar dónde vive la proforma), D-12 (qué ciclo va primero), D-13 (etapas y estados) y D-14 (alcance del primer lanzamiento).
- **Insumos pendientes:** P-15 a P-20, entre ellos el formato de proforma comercial (P-20), que la v3 no listaba aunque el cliente lo asignó dos veces a José.
- **Riesgos:** R-08 (alcance frente a presupuesto), R-09 (API de UpConta no verificada), R-10 (repositorio público) y R-11 (requisitos sin fuente disponible).
- **Contradicciones que no deben ocultarse:** cinco nuevas en la sección 15.3.
- **Responsables con nombre** en la tabla de insumos, tal como los asignó el cliente en la reunión.
- **Columna «Bloquea»** en la tabla de insumos y **sección 16.2 reescrita**: solo el taller 1 y las decisiones D-11 a D-14 bloquean el inicio del PRD. La lista de la v3 pasa a ser el criterio para salir a producción (16.3).

## 5. Convención de MAYÚSCULAS

El cliente pidió en T3: «busca la manera de poner en letras mayúsculas totalmente cualquier apartado en el cual tú requieras más información». La v3 no lo aplicaba. En la v4, todos los pendientes de los módulos, los temas de las decisiones abiertas y los insumos solicitados están en MAYÚSCULAS con el prefijo **FALTA INFORMACIÓN**.

## 6. Otros ajustes

- M11 incorpora el catálogo de productos como familia documental y aclara qué ocurre con la proforma sin integración contable.
- El informe técnico pasa a llamarse **proforma técnica**, como pidió el cliente en T1 (DEC-008).
- M06 nombra Zoom y Google Meet como proveedores de videollamada citados por el cliente.
- El documento 07 advierte que la API de UpConta debe volver a verificarse antes de comprometer fechas.
- Se corrigió un encabezado que en la v3 había quedado fusionado dentro de un párrafo (M22, «Paneles de indicadores construidos a petición»).

## 7. Saneamiento por repositorio público

El repositorio de GitHub del proyecto es **público**. Para no exponer información del cliente:

- Se reemplazaron los nombres de cuatro clientes finales que la v3 citaba como ejemplo de registros duplicados (M17, FREQ-010).
- Se retiraron del anexo A y de M23 los hallazgos de seguridad explotables de la aplicación en producción. Sus consecuencias siguen como requisitos (IAM-002, IAM-005, REC-003, ADM-009, ADM-010).
- No se incluyen en el repositorio las transcripciones, el documento v3 original ni los archivos CSV del paquete de datos, que contienen datos reales de clientes.
- No se incluyen la dirección de la aplicación actual ni credenciales de ningún tipo.

Si el repositorio pasa a ser privado, se pueden agregar las fuentes originales en una carpeta `fuentes/` para mejorar la trazabilidad (ver `docs/00-gobierno/FUENTES.md`).

## 8. Lo que no se pudo verificar en la v4

- **La aplicación actual en producción**: el entorno de trabajo bloquea su dirección, así que no se repitió la auditoría. El anexo A refleja la auditoría de la v3 del 6 de septiembre de 2026.
- **La documentación de la API de UpConta** ([docs.upconta.com](https://docs.upconta.com/)): también bloqueada en el entorno y no indexada por los buscadores. Toda afirmación sobre UpConta sigue siendo la lectura de la v3 (R-09).
- **Las notas y aclaraciones del cliente** citadas por 42 requisitos de la v3: no se entregaron (P-15).
