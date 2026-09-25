# M01 · Identidad, organización, roles y acceso

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M01 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Controlar quién entra, qué puede hacer, sobre qué datos y durante qué periodo.

## Paneles y acciones

- **Usuarios:** Nuevo usuario, Invitar, Editar, Suspender, Restablecer acceso, Terminar sesiones.
- **Departamentos y equipos:** Crear departamento, Asignar supervisor, Mover usuario.
- **Roles y permisos:** Crear rol, Clonar, Comparar, Publicar versión, Retirar.
- **Horarios y ausencias:** Registrar ausencia, Aprobar, Asignar sustituto.
- **Sesiones y seguridad:** Ver dispositivos, Revocar sesión, Exigir doble factor.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| IAM-001 | Autenticación individual. Quedan prohibidas las cuentas compartidas. | Propuesto | P0 |
| IAM-002 | Doble factor obligatorio para administradores, exportaciones sensibles y operaciones destructivas. | Propuesto | P0 |
| IAM-003 | Organigrama configurable por departamentos, sedes, jefaturas y equipos. | Confirmado | P1 |
| IAM-004 | Roles base: superadministrador, gerencia, supervisor, asesor, marketing, recepción, técnico, coordinación, inventario y contabilidad. | Confirmado | P1 |
| IAM-005 | Permisos granulares por acción, entidad, alcance y condición. | Confirmado | P0 |
| IAM-006 | El acceso a información económica se otorga por separado del acceso operativo. | Propuesto | P0 |
| IAM-007 | Toda modificación de rol o permiso genera evento de auditoría y exige motivo. | Propuesto | P0 |
| IAM-008 | Suspender un usuario no elimina su historial ni sus registros. | Propuesto | P0 |
| IAM-009 | Un supervisor accede únicamente a los equipos y datos de su alcance. | Propuesto | P1 |
| IAM-010 | La gerencia consulta transversalmente sin heredar de forma automática permisos de edición. | Propuesto | P1 |
| IAM-011 | Las integraciones usan identidades de servicio, nunca cuentas de personas. | Propuesto | P0 |
| IAM-012 | Cierre de sesión por inactividad configurable, con aviso previo y sincronización entre pestañas. | Observado | P2 |
| IAM-013 | Recuperación de contraseña, hoy inexistente en la aplicación actual. | Observado — brecha | P1 |

## Recomendaciones

- Acceso empresarial mediante proveedor de identidad corporativo, con políticas de doble factor por nivel de riesgo.
- Comparador visual de roles antes de publicar un cambio.
- Revisión trimestral de permisos y reporte de privilegios sin uso.

## Disponibilidad del personal

La disponibilidad es un dato **propiedad de OMNITRONEC 360**, porque de ella dependen el reparto de leads, la agenda y la asignación técnica. Si el sistema contable dispone de un módulo de recursos humanos, la plataforma sincroniza con él para no duplicar la captura; si no lo dispone, la plataforma opera de forma completamente autónoma sin ninguna pérdida de funcionalidad.

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| DISP-001 | Horario laboral configurable por usuario, equipo y sede. | Confirmado — transcripción | P1 |
| DISP-002 | Registro de ausencias, vacaciones y permisos con fecha y hora de inicio y fin. | Confirmado — transcripción | P1 |
| DISP-003 | Un usuario ausente o fuera de horario queda excluido del reparto automático de leads y de nuevas asignaciones. | Confirmado — transcripción | P1 |
| DISP-004 | Las oportunidades y eventos activos de un usuario ausente se reasignan conservando el historial completo. | Confirmado — transcripción | P1 |
| DISP-005 | Toda sustitución registra responsable anterior, nuevo responsable, motivo y vigencia. | Confirmado — transcripción | P1 |
| DISP-006 | La disponibilidad puede sincronizarse con el sistema contable cuando este ofrezca módulo de personal; su ausencia no degrada ninguna función. | Confirmado — cliente | P2 |
