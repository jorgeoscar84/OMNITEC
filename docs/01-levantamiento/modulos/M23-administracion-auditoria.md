# M23 · Administración, catálogos, automatizaciones y auditoría

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M23 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Permitir que el producto evolucione mediante configuración gobernada, no mediante cambios improvisados de código.

## El principio del botón “Agregar”

El cliente lo calificó como una de las cosas más importantes del sistema: **en todo debe existir la posibilidad de agregar algo más.** Las listas vienen preconfiguradas y son editables, renombrables y desactivables, pero además siempre debe poder añadirse un elemento nuevo, porque el negocio cambia y porque este levantamiento no puede haberlo previsto todo.

Esto convive con una segunda exigencia suya: que los catálogos se puedan **cargar de forma masiva mediante plantillas exportables e importables**, de modo que si algo varía se corrija en bloque y no registro por registro.

Y con una tercera, que aporta este levantamiento: que “agregar” no signifique que cualquiera modifique un maestro global. Los catálogos globales siguen un flujo de proponer, aprobar y publicar.

## Catálogos configurables

Departamentos, roles, horarios y sedes · industrias, provincias, segmentos y etiquetas · etapas de pipeline, resultados, severidades, motivos y SLA · categorías de producto, servicio y repuesto · componentes de infraestructura · tipos de garantía · tipos de contrato, documento, visita, mantenimiento y proveedor · plantillas, remitentes, canales y secuencias · impuestos, numeraciones y políticas documentales · agentes de IA, notificaciones y celebraciones.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| ADM-001 | Todo catálogo extensible ofrece la acción de agregar, con el permiso y el gobierno apropiados. | Confirmado | P1 |
| ADM-002 | Todo catálogo admite plantilla de importación y exportación para carga masiva. | Confirmado | P1 |
| ADM-003 | Los cambios críticos se versionan, se prueban y se publican. No se guardan por perder el foco de un campo. | Observado — brecha | P0 |
| ADM-004 | Los maestros referenciados no se borran: se desactivan y conservan su historial. | Observado + propuesto | P0 |
| ADM-005 | Las automatizaciones se definen con disparador, condiciones, acciones, horario, límites y propietario. | Confirmado + propuesto | P1 |
| ADM-006 | Toda automatización ofrece simulación, prueba, pausa y registro de ejecución. | Propuesto | P0 |
| ADM-007 | Los secretos se cifran, se rotan y nunca se muestran completos. | Propuesto | P0 |
| ADM-008 | Auditoría de solo agregado sobre datos, permisos, documentos, precios, estados y exportaciones. | Propuesto | P0 |
| ADM-009 | La restauración de respaldos no se ejecuta desde la interfaz de uso diario. | Observado — riesgo | P0 |
| ADM-010 | La restauración usa entorno aislado, simulación, respaldo previo, doble aprobación y plan de reversión. | Propuesto | P0 |
| ADM-011 | Las integraciones exponen su estado, última sincronización, errores y reintentos. | Propuesto | P1 |
| ADM-012 | La configuración distingue borrador, publicada, retirada y versión efectiva. | Propuesto | P1 |
| ADM-013 | Identidad corporativa central —logotipo, colores y datos de la empresa— que se aplica a documentos, plantillas y campañas sin repetir la configuración. | Confirmado — T2 · nuevo v4 | P1 |
| ADM-014 | Los catálogos se entregan vacíos en el producto y se cargan con plantillas semilla preparadas desde este levantamiento; tras la carga, todo es editable, desactivable y ampliable. | Confirmado — T3, T4 · nuevo v4 | P1 |

> **Operaciones de restauración.** En OMNITRONEC 360 la restauración de respaldos nunca se ejecuta desde la interfaz de uso diario (ADM-009 y ADM-010). El motivo está documentado en el informe de auditoría de la aplicación actual, que se conserva fuera de este repositorio por ser público.

## Pendientes

- **FALTA INFORMACIÓN:** LISTA INICIAL DE MENSAJES PREDETERMINADOS Y SUS TEXTOS (P-18).
