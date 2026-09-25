# Módulos del levantamiento

[← Índice del levantamiento](../README.md)

Un archivo por módulo, para que el PRD y los agentes carguen solo el módulo que necesitan. El orden, las dependencias y las fases están en [04 · Mapa de módulos](../04-mapa-de-modulos.md).

## Esquema de cada módulo

Cada módulo sigue el mismo esquema: propósito, estructura y paneles, acciones disponibles, requisitos numerados y trazables, lógica y reglas, y pendientes propios.

## Cómo leer la columna «Origen»

| Valor | Significado |
| --- | --- |
| **Confirmado** | El cliente lo pidió explícitamente en la conversación o en sus notas. |
| **Confirmado — T1 … T4** | Además se indica la grabación de donde sale: T1 (12:38), T2 (14:32), T3 (16:16), T4 (16:55). |
| **Confirmado — nota del cliente** | Sale de las notas y aclaraciones posteriores del cliente citadas por la v3 (ver pendiente P-15). |
| **Observado** | Se verificó en la aplicación actual, en producción (auditoría de la v3). |
| **Propuesto** | Lo aporta el levantamiento como buena práctica; requiere validación del cliente. |
| **· nuevo v4** | Requisito incorporado en esta versión al contrastar de nuevo las transcripciones. |
| **· ajustado v4** | Requisito de la v3 cuya redacción se corrigió; el motivo está en [CAMBIOS-v4](../CAMBIOS-v4.md). |

## Cómo leer la columna «Prioridad»

| Valor | Significado |
| --- | --- |
| **P0** | Condición de integridad, seguridad o legalidad. Sin esto no se entrega nada, aunque el módulo sea pequeño. |
| **P1** | Necesario para que el módulo cumpla su propósito en su fase. |
| **P2** | Mejora importante; entra en la fase del módulo si el plan lo permite o en la siguiente. |
| **P3** | Deseable; se agenda cuando lo anterior está estable. |

Las prioridades son del levantamiento y **el cliente debe validarlas** (D-14).

## Cómo leer «FALTA INFORMACIÓN»

Por instrucción expresa del cliente (T3), todo lo que necesita más información está escrito en **MAYÚSCULAS** con el prefijo **FALTA INFORMACIÓN**. El listado consolidado, con responsable y con lo que bloquea cada pendiente, está en [11 · Pendientes, decisiones y riesgos](../11-pendientes-decisiones-riesgos.md).

## Índice

| Código | Módulo |
| --- | --- |
| [M01](M01-identidad-organizacion-acceso.md) | Identidad, organización, roles y acceso (incluye disponibilidad) |
| [M02](M02-clientes-contactos-sitios.md) | Clientes 360, contactos y sitios |
| [M03](M03-captacion-inbox-asignacion.md) | Captación, importación, inbox y asignación |
| [M04](M04-oportunidades-pipelines.md) | Oportunidades, pipelines y negociación |
| [M05](M05-postventa-contratos-renovaciones.md) | Postventa, contratos y renovaciones |
| [M06](M06-calendario-tareas-viajes.md) | Calendario, tareas, disponibilidad y viajes |
| [M07](M07-marketing-campanas.md) | Marketing, segmentos y campañas |
| [M08](M08-comunicaciones.md) | Comunicaciones individuales y asistencia comercial |
| [M09](M09-habilitacion-comercial.md) | Habilitación comercial: speech, puntos fuertes y objeciones *(nuevo v4)* |
| [M10](M10-repositorio-documental.md) | Repositorio documental por cliente |
| [M11](M11-documentos-comerciales.md) | Documentos comerciales: cartas, proformas, catálogos, contratos y certificados |
| [M12](M12-catalogo.md) | Catálogo de productos, servicios y repuestos |
| [M13](M13-recepcion-custodia.md) | Recepción digital y cadena de custodia |
| [M14](M14-laboratorio.md) | Servicio técnico de laboratorio |
| [M15](M15-proveedores-externos.md) | Proveedores técnicos externos |
| [M16](M16-campo-sitios-infraestructura.md) | Servicio en campo, sitios e infraestructura |
| [M17](M17-frecuencias-espectro.md) | Plan de frecuencias y espectro |
| [M18](M18-garantias.md) | Garantías |
| [M19](M19-incidencias-sla.md) | Incidencias, SLA y acciones correctivas |
| [M20](M20-inventario-reservas-compras.md) | Inventario, reservas y compras |
| [M21](M21-analitica-kpi.md) | Analítica y KPI |
| [M22](M22-inteligencia-artificial.md) | Inteligencia artificial y agentes especializados |
| [M23](M23-administracion-auditoria.md) | Administración, catálogos, automatizaciones y auditoría |

Los requisitos de la integración contable (API-001 a API-011) están en [07 · Integraciones](../07-integraciones.md). El índice completo de requisitos, generado por script, está en [indice-requisitos.csv](../indice-requisitos.csv).
