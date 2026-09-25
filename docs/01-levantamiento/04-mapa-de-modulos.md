# 04 · Mapa de módulos y dependencias

[← Índice del levantamiento](README.md)

Qué módulos tiene la plataforma, cómo se agrupan, qué necesita existir antes de cada uno y qué alimenta cada uno. El cliente pidió en T3 que el documento hiciera explícita esta **concatenación**: «las categorías de productos deben existir previamente… hay una lógica de interconectividad entre módulos». Esta es la referencia que usarán el PRD y el plan de tareas para ordenar la construcción.

## 6. Arquitectura funcional y mapa de módulos

### 6.1 Dominios del producto

| Dominio | Módulos |
| --- | --- |
| Plataforma | Identidad, organización, permisos, disponibilidad, configuración, auditoría e integraciones. |
| Relación con clientes | Clientes 360, contactos, sitios, etiquetas, documentos, notas y consentimientos. |
| Captación y ventas | Inbox, leads, oportunidades, pipelines configurables, proforma, cierre y motivos de pérdida. Habilitación comercial: speech, puntos fuertes y objeciones. |
| Postventa | Renovaciones, mantenimiento, recompra, contratos, garantías y satisfacción. |
| Productividad | Calendario, tareas, rutas, carta Gantt, disponibilidad, notificaciones y metas. |
| Marketing y comunicación | Segmentos, campañas, correo, WhatsApp, plantillas y atribución. |
| Servicio técnico | Recepción, cadena de custodia, entrega, laboratorio, proveedores externos, campo e incidencias. |
| Ingeniería e infraestructura | Sitios, sistemas de repetición, activos, componentes extensibles, estudios y mapas. |
| Espectro | Plan de frecuencias, canales, programación de equipos y pólizas ARCOTEL. |
| Comercial y operativo | Catálogo, listas de precio, documentos, inventario y facturación. |
| Inteligencia | KPI, analítica, scoring, recomendaciones y agentes de IA. |

### 6.2 Navegación por rol

La navegación no muestra todos los módulos a todos los usuarios. Esquema base:

```text
Inicio
├─ Mi trabajo ......... inbox, tareas, calendario, alertas
├─ Clientes ........... organizaciones, contactos, sitios
├─ Ventas ............. oportunidades, proformas, pipeline, speech y objeciones
├─ Marketing .......... segmentos, campañas, plantillas
├─ Servicio ........... recepción, órdenes, laboratorio, campo, incidencias
├─ Infraestructura .... sitios, activos, frecuencias, mapas, ingeniería
├─ Garantías .......... catálogo, vigencias, próximas a vencer
├─ Documentos
├─ Analítica
└─ Administración
```

### 6.3 Reglas transversales de pantalla

- Una sola acción primaria visible por panel.
- Las acciones peligrosas viven en menú contextual y exigen confirmación que explique la consecuencia.
- Los formularios largos se dividen en etapas, con resumen y validación por campo.
- Las listas tienen búsqueda, filtros persistentes, vistas guardadas y exportación sujeta a permiso.
- Las fichas presentan resumen superior y pestañas: actividad, datos, documentos, oportunidades, servicios, garantías y analítica.
- Los estados se comunican con texto e icono, nunca solo con color.
- Toda pantalla contempla los estados de carga, vacío, error, sin permiso, éxito, conflicto de versión y sin conexión.

### 6.4 Índice de módulos

La columna **Fase** remite a las fases de construcción del [documento 10](10-fases-y-entregas.md). «v3» indica la sección del levantamiento anterior, para quien necesite rastrear un requisito.

| Código | Módulo | Prefijo de requisitos | Fase | v3 |
| --- | --- | --- | --- | --- |
| [M01](modulos/M01-identidad-organizacion-acceso.md) | Identidad, organización, roles y acceso (incluye disponibilidad) | IAM, DISP | 1 | 7.1 y 5.5 |
| [M02](modulos/M02-clientes-contactos-sitios.md) | Clientes 360, contactos y sitios | CLI | 1 | 7.2 |
| [M03](modulos/M03-captacion-inbox-asignacion.md) | Captación, importación, inbox y asignación | LEAD | 2 | 7.3 |
| [M04](modulos/M04-oportunidades-pipelines.md) | Oportunidades, pipelines y negociación | VEN | 2 | 7.4 |
| [M05](modulos/M05-postventa-contratos-renovaciones.md) | Postventa, contratos y renovaciones | POST | 4 | 7.5 |
| [M06](modulos/M06-calendario-tareas-viajes.md) | Calendario, tareas, disponibilidad y viajes | CAL | 2 | 7.6 |
| [M07](modulos/M07-marketing-campanas.md) | Marketing, segmentos y campañas | MKT | 5 | 7.7 |
| [M08](modulos/M08-comunicaciones.md) | Comunicaciones individuales y asistencia comercial | COM | 2 | 7.8 |
| [M09](modulos/M09-habilitacion-comercial.md) | Habilitación comercial: speech, puntos fuertes y objeciones *(nuevo v4)* | HAB | 2 | parte de 7.21 |
| [M10](modulos/M10-repositorio-documental.md) | Repositorio documental por cliente | DOC | 1 | 7.9 |
| [M11](modulos/M11-documentos-comerciales.md) | Documentos comerciales: cartas, proformas, catálogos, contratos y certificados | COT | 2 y 3 | 7.10 |
| [M12](modulos/M12-catalogo.md) | Catálogo de productos, servicios y repuestos | CAT | 1 | 7.11 |
| [M13](modulos/M13-recepcion-custodia.md) | Recepción digital y cadena de custodia | REC | 3 | 7.12 |
| [M14](modulos/M14-laboratorio.md) | Servicio técnico de laboratorio | LAB | 3 | 7.13 |
| [M15](modulos/M15-proveedores-externos.md) | Proveedores técnicos externos | EXT | 3 (portal en 5) | 7.14 |
| [M16](modulos/M16-campo-sitios-infraestructura.md) | Servicio en campo, sitios e infraestructura | CAM | 4 | 7.15 |
| [M17](modulos/M17-frecuencias-espectro.md) | Plan de frecuencias y espectro | FREQ | 4 | 7.16 |
| [M18](modulos/M18-garantias.md) | Garantías | GAR | 3 | 7.17 |
| [M19](modulos/M19-incidencias-sla.md) | Incidencias, SLA y acciones correctivas | INC | 4 | 7.18 |
| [M20](modulos/M20-inventario-reservas-compras.md) | Inventario, reservas y compras | INV | 3 | 7.19 |
| [M21](modulos/M21-analitica-kpi.md) | Analítica y KPI | BI | 2 (operativo) y 5 (gerencial) | 7.20 |
| [M22](modulos/M22-inteligencia-artificial.md) | Inteligencia artificial y agentes especializados | IA | 2 (núcleo y redacción) y 5 (resto) | 7.21 |
| [M23](modulos/M23-administracion-auditoria.md) | Administración, catálogos, automatizaciones y auditoría | ADM | 1 (automatizaciones en 2) | 7.22 |
| [INT](07-integraciones.md) | Conector UpConta y servicios externos | API | 2 (lectura) y 3 (escritura) | 10 |

### 6.5 Dependencias entre módulos

«Necesita antes» significa que el módulo no puede funcionar, ni siquiera en su versión mínima, sin que el otro exista. «Alimenta a» indica qué módulos consumen sus datos o sus eventos. Las integraciones externas nunca aparecen como «necesita antes»: por el principio de autonomía funcional, ningún módulo depende de un sistema externo para existir.

| Módulo | Necesita antes | Alimenta a |
| --- | --- | --- |
| M01 Identidad y organización | — | Todos: usuarios, roles, alcance de datos, horarios y ausencias |
| M23 Administración y auditoría | M01 | Todos: catálogos configurables, plantillas, numeración, auditoría, automatizaciones |
| M12 Catálogo | M01, M23 | M04, M09, M11, M13, M14, M16, M18, M20 |
| M02 Clientes 360 | M01, M23 | Prácticamente todos: organización, contacto y sitio son la referencia común |
| M10 Repositorio documental | M01, M02 | M05, M11, M13, M14, M15, M16 |
| M06 Calendario y tareas | M01, M02 | M03 (disponibilidad para el reparto), M04, M05, M16 |
| M03 Captación e inbox | M01, M02, M06, M23 | M04, M07, M21 |
| M08 Comunicaciones | M02, M23 | M03, M04, M05, M21 |
| M09 Habilitación comercial | M12, M23 | M04, M08, M22 |
| M04 Oportunidades y pipelines | M02, M03, M12, M23 | M05, M11, M21 |
| M11 Documentos comerciales | M02, M10, M12, M23 | M04 (proforma), M14 (proforma técnica), INT (factura) |
| M18 Garantías | M02, M12 | M13, M14, M15, M05 |
| M20 Inventario y reservas | M12 | M04, M14 |
| M13 Recepción y custodia | M02, M10, M12, M18 | M14, M15 |
| M14 Laboratorio | M11, M12, M13, M18, M20 | M05, M18, M21 |
| M15 Proveedores externos | M13, M18 | M14, M21 |
| M16 Campo, sitios e infraestructura | M02, M06, M10, M12 | M17, M19, M05 |
| M17 Frecuencias y espectro | M02, M16 | M05, M19 |
| M19 Incidencias y SLA | M02, M16 | M21 |
| M05 Postventa y renovaciones | M02, M04 | M07, M04 |
| M07 Marketing y campañas | M02, M03, M23 | M03, M05, M21 |
| M21 Analítica | Los módulos cuyos eventos mide | M22 (paneles a petición) |
| M22 Inteligencia artificial | M01, M23 | M08, M09, M11, M21 |
| INT Conector UpConta | M01, M23 | M02, M11, M12, M20 (solo en modo integrado) |

### 6.6 Reglas de interconexión que el PRD debe respetar

Cada regla es una consecuencia funcional entre módulos. Todas deben tener al menos un criterio de aceptación en el PRD.

1. **Un evento creado desde la ficha del cliente o desde la oportunidad aparece en el calendario del responsable** y en la línea de tiempo del cliente (M02/M04 → M06). CAL-001.
2. **Lo que se puede seleccionar existe antes en su catálogo.** Productos y servicios de una proforma salen de M12; industrias, provincias, tipos de contrato, motivos y etapas salen de M23. Si algo falta, el usuario autorizado lo agrega en su catálogo sin salir del flujo (ADM-001) y queda disponible para todos.
3. **Ganar una oportunidad convierte al contacto en cliente y lo pasa al pipeline de postventa** sin duplicarlo como lead (M04 → M05). VEN-004.
4. **La recepción de un equipo consulta si tiene garantía vigente** y la propone (M13 → M18). GAR-009.
5. **La entrega de un equipo reparado activa la garantía del servicio y el reloj del recordatorio de mantenimiento** (M14 → M18 y M05). GAR-005, POST-006.
6. **Las fechas de la ficha alimentan el motor de renovaciones**: contrato, estudio, póliza, compra y mantenimiento (M02, M16, M17 → M05 → M07). CLI-010, MKT-016.
7. **La ausencia registrada de un usuario lo saca del reparto y reasigna sus pendientes** conservando el historial (M01 → M03, M04, M06). DISP-003, DISP-004.
8. **Toda comunicación enviada o recibida queda en el historial del contacto y de su organización** (M08 → M02). COM-002, CLI-007.
9. **La aprobación de la proforma técnica habilita la reserva de repuestos**, y la reserva vence sola (M14 → M20). LAB-007, INV-005.
10. **La derivación a un proveedor externo sale de la custodia y vuelve a ella** (M13 ↔ M15). REC-009, REC-010.
11. **Una respuesta o conversión de campaña crea o vincula un lead en el inbox** conservando origen y campaña (M07 → M03). MKT-010, LEAD-004.
12. **En modo integrado, la emisión de la factura en UpConta actualiza la oportunidad** según la regla de cierre configurada (INT → M04). VEN-003, API-004.
13. **Un agente de IA solo ve lo que el usuario que lo invoca puede ver** (M01 → M22). IA-003, IA-014.
14. **Toda cifra de un panel abre los registros que la componen** (M21 ← todos). BI-003.
15. **El cambio de estado de cualquier objeto con ciclo de vida es un evento auditable**, nunca la sobrescritura de un campo (M23 ← todos). VEN-013, LAB-016, INC-003.
