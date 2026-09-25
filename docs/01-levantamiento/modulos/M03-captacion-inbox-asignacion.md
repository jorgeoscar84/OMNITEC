# M03 · Captación, importación, inbox y asignación

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M03 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Recibir contactos de múltiples orígenes, identificar su procedencia, evitar duplicados y repartirlos de forma equitativa entre usuarios disponibles.

## Orígenes contemplados

Formulario web y páginas de campaña · WhatsApp · correo · redes sociales y mensajería conectada · campañas y webinars · carga masiva mediante plantilla · creación directa por un usuario · referidos y fuentes configurables.

## Paneles y acciones

- **Inbox común:** Tomar, Asignar, Reasignar, Convertir, Descartar, Marcar como spam.
- **Importador:** Descargar plantilla, Validar, Previsualizar, Importar a campaña o al inbox.
- **Reglas de asignación:** por turno rotativo, equipo, industria, zona, producto, carga de trabajo y horario.
- **Monitor:** no asignados, vencidos, duplicados, errores y cumplimiento de primera respuesta.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| LEAD-001 | Inbox unificado que preserva fuente, campaña, parámetros de atribución y canal de entrada. | Confirmado | P1 |
| LEAD-002 | Plantilla de importación con validación de columnas, duplicados y consentimiento. | Confirmado | P1 |
| LEAD-003 | Una base fría puede destinarse exclusivamente a campañas, sin entrar al pipeline ni saturar a los asesores. | Confirmado | P1 |
| LEAD-004 | Una interacción configurable convierte un contacto de campaña en lead atendible y lo hace entrar al pipeline con su origen preservado. | Confirmado | P1 |
| LEAD-005 | **La importación permite seleccionar qué contactos se cargan: todos, una selección manual o un rango numérico** —por ejemplo del contacto 1 al 500 de una base de 2.000— para destinarlos a una campaña concreta con plantillas preconfiguradas. | Confirmado — nota del cliente | P1 |
| LEAD-006 | Reparto equitativo entre los asesores disponibles. | Confirmado | P1 |
| LEAD-007 | Exclusión automática de ausentes, de quienes están fuera de horario y de quienes agotaron su capacidad. | Confirmado | P1 |
| LEAD-008 | Medición de primera respuesta, aceptación, abandono y reasignación. | Confirmado | P1 |
| LEAD-009 | La reasignación traslada el historial completo: etapa, archivos, notas y eventos. | Confirmado | P1 |
| LEAD-010 | Resolución de identidad antes de crear un nuevo cliente o contacto. | Propuesto | P0 |
| LEAD-011 | El administrador puede exportar; el asesor solo dentro de su alcance autorizado. | Confirmado | P0 |
| LEAD-012 | Registro del motivo de descarte: spam, inválido, no interesado u otro. | Propuesto | P1 |
| LEAD-013 | La importación muestra una simulación previa: válidos, duplicados, incompletos, sin consentimiento y rechazados. | Propuesto | P0 |
| LEAD-014 | El asesor comercial puede importar bases de contactos con destino a campaña o a su propio inbox. No puede exportar la base de clientes, que queda reservada al administrador. | Confirmado — T4 · nuevo v4 | P1 |
| LEAD-015 | Integración con plataformas externas de agendamiento y de webinars: una cita o una inscripción registrada fuera crea o vincula el lead y lo ingresa al pipeline con su origen. | Confirmado — T4 · nuevo v4 | P2 |

## Reglas

- Un contacto de campaña no es una oportunidad mientras no cumpla la regla de activación configurada.
- La asignación automática nunca envía dos asesores al mismo contacto.
- Debe existir protección contra la apropiación manual masiva de leads por un solo usuario.

## Pendientes

- **FALTA INFORMACIÓN:** FUENTES INICIALES A CONECTAR Y SUS INTERFACES DISPONIBLES.
- **FALTA INFORMACIÓN:** REGLA EXACTA QUE CONVIERTE UNA INTERACCIÓN DE CAMPAÑA EN LEAD.
- **FALTA INFORMACIÓN:** POLÍTICA DE CONSENTIMIENTO APLICABLE A BASES IMPORTADAS O ADQUIRIDAS.
- **FALTA INFORMACIÓN:** PLATAFORMA EXTERNA DE AGENDAMIENTO Y DE WEBINARS A INTEGRAR, Y FLUJO EXACTO DE CITA → PIPELINE (T4: «HAY QUE DESCIFRAR BIEN CUÁL SERÍA EL FLUJO MÁS IDÓNEO»).
