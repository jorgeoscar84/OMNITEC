# M02 · Clientes 360, contactos y sitios

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M02 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Concentrar la información comercial, técnica, contractual y documental de cada organización sin convertir la ficha en una pantalla abrumadora.

> **Contexto de la operación actual.** La base de clientes existente proviene de contabilidad: 823 registros con razón social, identificación fiscal, teléfono y un correo que en la mayoría de los casos pertenece al área contable. La columna de contacto está vacía en la totalidad de los registros. Esto significa que **la empresa no tiene hoy ningún contacto comercial registrado**, y que la carga inicial de contactos es un trabajo de migración real, no una importación automática.

## Estructura de la ficha

1. **Resumen** — nombre comercial, razón social, estado, asesor responsable, scoring, semáforo, próxima acción y alertas.
2. **Contactos** — representante legal y múltiples personas por departamento y cargo.
3. **Sitios** — oficinas, plantas, casetas, direcciones y datos de acceso para visita.
4. **Actividad** — comunicaciones, notas, reuniones, tareas y cambios.
5. **Comercial** — oportunidades, proformas, ventas, productos y ticket.
6. **Servicio** — activos, recepciones, órdenes, mantenimientos e incidencias.
7. **Frecuencias** — plan de canales del cliente y estado de su póliza.
8. **Contratos y renovaciones** — vigencias, tipos y alertas.
9. **Garantías** — vigentes, por vencer y vencidas, con su tiempo restante.
10. **Documentos** — repositorio organizado con permisos.
11. **Analítica** — compras, frecuencia, rentabilidad y actividad.

## Campos maestros

| Grupo | Campos |
| --- | --- |
| Organización | Tipo persona o empresa, razón social, nombre comercial, RUC o cédula, industria, provincia, direcciones, estado y propietario de la cuenta. |
| Contacto | Nombres, cédula cuando corresponda, cargo, departamento, correo, teléfono, WhatsApp, fecha de nacimiento, condición de representante legal y canal preferido. |
| Cumplimiento | Consentimientos por canal, base legal, fecha, fuente, exclusiones y solicitudes de baja. |
| Segmentación | Industria, tamaño, categoría, tipo de cliente, condición de distribuidor o cliente final, productos de interés y etiquetas libres. |
| Relación | Asesor, etapa, scoring, semáforo, última interacción, próxima acción, origen y atribución de campaña. |
| Contrato | Tipo, inicio, fin, renovación, estado, alcance y documentos. |
| Técnico | Sitios, activos, frecuencias, compras, mantenimientos, garantías, estudios de ingeniería y póliza ARCOTEL. |

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| CLI-001 | Toda relación entre entidades se establece por identificador estable, nunca por el nombre del cliente. | Observado — brecha | P0 |
| CLI-002 | Varias personas de contacto por organización, cada una con cargo, departamento, correo, teléfono y WhatsApp propios. | Confirmado | P1 |
| CLI-003 | Identificación explícita del representante legal entre los contactos. | Confirmado | P1 |
| CLI-004 | Varios sitios y direcciones por cliente, con instrucciones de acceso para la visita. | Confirmado | P1 |
| CLI-005 | Industria, categoría de empresa y provincia configurables desde catálogo, no fijas en código. | Confirmado | P1 |
| CLI-006 | Historial cronológico unificado de conversaciones, notas, eventos, ventas y servicios a nivel de organización. | Confirmado | P1 |
| CLI-007 | **Cada contacto conserva además su propio historial de conversación y sus notas**, de modo que cualquier asesor sepa exactamente en qué quedó con esa persona. | Confirmado — nota del cliente | P1 |
| CLI-008 | Etiquetas libres creables por el propio asesor sobre contactos y organizaciones, con filtrado por etiqueta. | Confirmado — nota del cliente | P1 |
| CLI-009 | Las compras y los mantenimientos se registran como eventos repetibles, no como un campo único que se sobrescribe. | Confirmado | P1 |
| CLI-010 | Las fechas de contrato, estudio, póliza, compra y mantenimiento alimentan automáticamente el motor de renovaciones. | Confirmado | P1 |
| CLI-011 | Búsqueda por nombre, razón social, RUC, cédula, correo, teléfono y WhatsApp. | Confirmado | P1 |
| CLI-012 | Detección, revisión y fusión controlada de duplicados. | Propuesto | P1 |
| CLI-013 | Scoring automático y explicable, separado de un semáforo manual con motivo y fecha. | Confirmado + propuesto | P2 |
| CLI-014 | Ficha analítica con compras, ticket promedio, productos, precio histórico de cada producto, facturas con monto y fecha, y servicios; conciliada con UpConta cuando la integración está activa. | Confirmado · ajustado v4 | P2 |
| CLI-015 | Consentimientos y preferencias por canal registrados antes de automatizar cualquier comunicación. | Propuesto | P0 |
| CLI-016 | La exportación de la base completa queda restringida. Un asesor no puede descargar la base global. | Confirmado | P0 |
| CLI-017 | La conversión de prospecto a cliente crea el cliente fiscal en OMNITRONEC 360 y, en modo integrado, lo vincula o lo crea en UpConta, sin perder historial. | Confirmado · ajustado v4 | P1 |
| CLI-018 | Administración define **campos personalizados** para organización, contacto y oportunidad —tipo de dato, obligatoriedad, lista de valores y visibilidad por rol— utilizables en filtros, segmentos, plantillas, automatizaciones e informes. | Confirmado — T2 · nuevo v4 | P1 |

## Lógica funcional

- La fecha de nacimiento pertenece al contacto, nunca a la organización.
- El scoring se calcula con señales auditables —respuesta, reuniones, etapa, valor, actividad y resultado— y siempre muestra sus factores. Nunca es una caja negra.
- El semáforo verde, ámbar o rojo expresa la percepción del asesor y exige fecha y comentario.
- La ficha usa revelación progresiva: el resumen primero, el detalle solo cuando se pide.

## Recomendaciones

- Línea de tiempo filtrable por comercial, servicio, documento y sistema.
- Indicador de salud de datos por ficha: campos faltantes, duplicados, consentimientos y vencimientos.
- Modelado de relaciones entre empresas: matriz, sucursal, distribuidor y cliente final.

## Pendientes

- **FALTA INFORMACIÓN:** CATÁLOGO DEFINITIVO DE INDUSTRIAS Y DE PROVINCIAS OPERATIVAS.
- **FALTA INFORMACIÓN:** POLÍTICA DE TRATAMIENTO DE LA CÉDULA, LA FECHA DE NACIMIENTO Y LAS COMUNICACIONES DE CUMPLEAÑOS.
- **FALTA INFORMACIÓN:** ¿«ROL DEL CLIENTE» (T1) EQUIVALE A TIPO DE CLIENTE —FINAL O DISTRIBUIDOR— O ES OTRO ATRIBUTO?
- **FALTA INFORMACIÓN:** LISTA DE CAMPOS PERSONALIZADOS INICIALES QUE LA EMPRESA QUIERE EN LA FICHA (P-17).
