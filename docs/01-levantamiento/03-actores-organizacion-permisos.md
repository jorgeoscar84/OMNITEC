# 03 · Actores, organización y permisos

[← Índice del levantamiento](README.md)

Quién usa la plataforma, cómo se organiza la empresa y cómo se expresa un permiso. La matriz de permisos al detalle de cada acción la produce el PRD.

## 5. Actores, organización y permisos

### 5.1 Actores

| Actor | Responsabilidad principal |
| --- | --- |
| Superadministrador | Configuración global, integraciones, seguridad, recuperación y gobierno. |
| Gerencia general | Visión transversal, KPI, políticas, aprobaciones y excepciones. |
| Jefatura o supervisor de departamento | Gestión de su equipo, asignaciones, control y KPI de su área. |
| Asesor comercial | Prospectos, oportunidades, comunicaciones, agenda, proformas y postventa. |
| Marketing | Fuentes, campañas, segmentos, plantillas y medición de canal. |
| Atención y recepción | Cliente, acta digital, equipos recibidos, firma y traspaso a técnica. |
| Técnico de laboratorio | Recepción técnica, diagnóstico, reparación, mediciones, evidencia y control de calidad. |
| Técnico de campo e ingeniería RF | Visitas, sitios, infraestructura, mediciones, estudios, frecuencias y mantenimiento. |
| Coordinador de servicio | Cola de trabajo, prioridades, repuestos, proveedores, SLA y cierre. |
| Inventario y compras | Disponibilidad, reservas, compras, recepción de mercadería y devoluciones. |
| Administración y contabilidad | Cliente fiscal, impuestos, facturación, pagos y costos. |
| Proveedor técnico externo | Recepción de equipos derivados, informe técnico, costos, avance y devolución. |
| Cliente firmante | Entrega y recepción de equipos, aceptación de documentos. |
| Cliente aprobador | Aprobación o rechazo de propuesta, presupuesto o trabajo. |

### 5.2 Estructura organizativa

```text
Gerencia general
├─ Área comercial
│  ├─ Jefatura / supervisor
│  └─ Asesores comerciales
├─ Marketing
├─ Atención y recepción
├─ Área técnica
│  ├─ Coordinación
│  ├─ Laboratorio
│  └─ Campo / ingeniería RF
├─ Inventario y compras
└─ Administración y contabilidad
```

La estructura debe ser configurable: departamentos, cargos, supervisores, horarios, sedes y sustituciones temporales se definen desde administración, nunca en código.

### 5.3 Cómo se define un permiso

Un permiso es siempre la combinación de **acción + entidad + alcance + condición**.

No basta con decir “el asesor puede ver clientes”. Hay que decir si puede ver *los clientes asignados a él* o *todos los de su sede*; si puede *leerlos* o *exportarlos*; y bajo qué condición. Leer un cliente asignado y exportar la base completa son dos permisos distintos, y la diferencia entre ambos es exactamente el riesgo que el cliente señaló como crítico.

### 5.4 Matriz mínima de permisos

| Capacidad | Asesor | Supervisor | Gerencia | Técnica | Recepción | Superadmin |
| --- | --- | --- | --- | --- | --- | --- |
| Ver clientes asignados | Sí | Su equipo | Sí | Contexto necesario | Sí | Sí |
| Exportar la base completa de clientes | No | Según política | Según política | No | No | Sí |
| Importar bases de contactos para campaña *(nuevo v4 — T4)* | Sí, a campaña o a su inbox | Sí | Sí | No | No | Sí |
| Reasignar leads | Solicitud | Su equipo | Sí | No | No | Sí |
| Ver costos y márgenes | Según política | Según política | Sí | Limitado | No | Sí |
| Crear acta de recepción | No | No | Lectura | Lectura | Sí | Sí |
| Diagnosticar y reparar | No | No | Lectura | Sí | No | Sí |
| Aplicar una garantía a un caso | No | Sí | Sí | Sí | Sí | Sí |
| Crear o editar el catálogo de garantías | No | No | Aprobar | Proponer | No | Sí |
| Cambiar catálogos globales | No | Proponer | Aprobar | Proponer técnico | No | Sí |
| Configurar integraciones y agentes de IA | No | No | Autorizar | No | No | Sí |
| Restaurar datos | No | No | Doble aprobación | No | No | Operación aislada |

### 5.5 Disponibilidad del personal

La disponibilidad del personal —horarios, ausencias, sustituciones— se especifica, con sus requisitos DISP-001 a DISP-006, en [M01 · Identidad, organización y acceso](modulos/M01-identidad-organizacion-acceso.md#disponibilidad-del-personal).
