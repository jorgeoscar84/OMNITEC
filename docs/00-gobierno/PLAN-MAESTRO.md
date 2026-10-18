# Plan maestro de implementación · OMNITRONEC 360

**Versión:** 1.0 · **Fecha:** 18 oct 2026 · **Base:** DeskcommCRM v1.85.0 (17 oct 2026) · **Cómo se trabaja:** [PROTOCOLO-DESARROLLO.md](PROTOCOLO-DESARROLLO.md)

Este es el mapa de todo el proyecto, de hoy al lanzamiento y después. Cada fase tiene un entregable, un responsable y una **compuerta**: no se pasa a la siguiente sin cumplirla. Así no hay que volver atrás.

## Resumen

| Fase | Qué se logra | Compuerta de salida |
| --- | --- | --- |
| **F0** Repositorio y entorno | El código del original en nuestro repositorio privado, con reglas, roles y controles listos | Línea base verde y repositorio configurado |
| **F1** Arquitectura | Cómo encaja cada módulo nuestro en la plataforma, sin romperla | Aprobación del consultor |
| **F2** PRD de la oleada técnica | Qué hace exactamente cada pantalla, con criterios comprobables | Aprobación del consultor y validación del área técnica |
| **F3** Construcción T0 · base | Roles múltiples, sitios, catálogo técnico, Ecuador, reglas configurables | Criterios de T0 en verde |
| **F4** Construcción T1 · paridad técnica | Todo lo que hace hoy la aplicación técnica, mejorado | Criterios de T1 en verde y recorrido del área técnica |
| **F5** Migración y lanzamiento 1 | Datos actuales migrados, *staging*, capacitación, producción | El área técnica deja la aplicación actual |
| **F6** T2 · custodia y garantías | Recepción con acta, cadena de custodia, garantías calculadas, reservas | Criterios de T2 en verde |
| **F7** Comercial a la medida y UpConta | Funciones comerciales del levantamiento que la base no trae, e integración contable | Criterios de la oleada comercial en verde |
| **F8** T3, automatización e IA | Operación completa, n8n e inteligencia artificial | Según su PRD |

En todo momento corre la **actualización desde el original**, cada versión menor o cada dos semanas (protocolo, sección 9).

## F0 · Repositorio y entorno

| Paso | Qué | Responsable | Estado |
| --- | --- | --- | --- |
| F0.1 | Copia local del original en v1.85.0, con historia completa y envío al original bloqueado | Arquitecto | ✅ 18 oct |
| F0.2 | Crear el repositorio privado vacío `omnitronec-360` en GitHub y darle acceso a Claude | **Consultor** | Pendiente |
| F0.3 | Subir `main` (v1.85.0) y la etiqueta `omx-base-v1.85.0`; proteger `main`; desactivar los flujos de CI que no aplican; crear el tablero y la plantilla de tareas | Arquitecto (y consultor en la configuración de GitHub) | Pendiente |
| F0.4 | Trasladar esta especificación a `omnitronec-360/omnitronec/` conservando su historia; archivar OMNITEC | Arquitecto | Pendiente |
| F0.5 | Capa propia: `omnitronec/AGENTS.md`, una línea en el `CLAUDE.md` raíz que lo importa, agentes `omx-programador`, `omx-revisor` y `omx-qa`, flujo `omx.yml`, `supabase/omnitronec/baseline-omx.sql`, registro `NUCLEO-MODIFICADO.md`, *hook* de sesión en la nube | Arquitecto | Pendiente |
| F0.6 | Línea base: `pnpm gov:verify` y `pnpm test:db` del original en verde, anotados | Arquitecto | En curso |

## F1 · Arquitectura

Resultado: `omnitronec/03-arquitectura/`. Responsable: Arquitecto. Aprueba: consultor.

1. **Mapa de encaje:** por cada módulo del levantamiento, qué se reutiliza tal cual, qué se extiende y qué se construye. Parte de [la evaluación](evaluaciones/EVALUACION-BASE-DESKCOMM.md).
2. **Permisos:** varios roles por usuario y capacidades sueltas sobre el sistema de roles del original (DEC-021, IAM-004 a IAM-014). Es la pieza más delicada: se diseña antes que cualquier pantalla técnica.
3. **Ecuador:** RUC y cédula con validación, provincias, ley de datos (LOPDP), dólares, política de IVA y zona horaria.
4. **Modelo de datos técnico:** cliente, sitio, activo, catálogo técnico, proforma técnica, mantenimiento en sitio, incidencia, plan de canales, reglas de cobro y garantías configurables (DEC-022).
5. **Documentos PDF:** cómo cumplir plantillas editables sin desplegar (DEC-010, COT-001) con el motor que trae el original.
6. **Fotos y archivos:** en el almacenamiento propio de la plataforma.
7. **Integraciones:** UpConta reescrita desde su documentación oficial, más n8n por API y webhooks (DEC-026).
8. **Ratificar** DEC-009 a DEC-013 frente a lo que trae la base.

## F2 · PRD de la oleada técnica

Plantilla y método de `docs/02-prd/`. Responsable: Arquitecto. Aprueba: consultor. Valida: área técnica.

| Orden | PRD | Requisitos principales |
| --- | --- | --- |
| 1 | `PRD.md` general | Reglas transversales y requisitos no funcionales |
| 2 | M01 · permisos y organización | IAM-001 a IAM-014, DISP |
| 3 | M02 · clientes, sitios, RUC | CLI-001 a CLI-004, CLI-011 |
| 4 | M12 · catálogo técnico y precios | CAT-002, 005, 006, 016 |
| 5 | M23 · configuración, reglas de cobro y garantías | ADM-004, 008, 013 · LAB-026 · GAR-001, GAR-014 |
| 6 | M14 · proforma técnica de laboratorio | LAB-002 a 004, 009, 010, 015, 016, 018, 020 a 025 |
| 7 | M16 · mantenimiento en sitio, repetidoras y arneses | CAM-001, 003, 005, 011, 012, 015, 016 · COT-019 a 021 |
| 8 | M19 · incidencias | INC-001, 003, 006, 008, 010, 012, 013 |
| 9 | M17 · planes de canales | FREQ-001 a 003, 009, 010, 012 |
| 10 | M21 · panel y estadísticas técnicas | BI-014, 016, 017 |

F1 y F2 se solapan: el PRD de M01 alimenta el diseño de permisos. Ningún módulo se programa sin su PRD aprobado.

## F3 y F4 · Construcción

El Arquitecto descompone cada PRD aprobado en tareas `T-nnn` (con el agente Plan). El Programador las ejecuta una por una con el protocolo. Orden:

- **F3 · T0 base:** permisos múltiples → localización de Ecuador → clientes con sitios → catálogo técnico → configuración, reglas de cobro y garantías.
- **F4 · T1 paridad técnica:**
  - T1.1 proforma técnica de laboratorio;
  - T1.2 mantenimiento en sitio;
  - T1.3 incidencias;
  - T1.4 sitios, repetidoras y planes de canales;
  - T1.5 panel y estadísticas;
  - T1.6 utilidades y «Mejorar texto».

  El detalle está en [PLAN-AREA-TECNICA.md](evaluaciones/PLAN-AREA-TECNICA.md).

## F5 · Migración y lanzamiento 1

1. Exportación de la aplicación actual (P-21) y guion de migración con fusión de sitios duplicados (FREQ-010) y números históricos (D-09). Se ensaya en *staging*.
2. *Staging* en el VPS con Dokploy (DEC-013) y recorrido del área técnica con sus casos reales.
3. Capacitación corta por rol.
4. Producción, con respaldo nocturno verificado y restauración probada. Desplegar a producción exige aprobación escrita del consultor.

No se lanza «para ver si funciona»: se lanza cuando los criterios están en verde.

## F6 a F8 · Después del lanzamiento 1

- **F6 · T2:** recepción con acta y firma, cadena de custodia, etapas y relojes del laboratorio, garantías calculadas, reservas de repuestos (M13, M14, M18, M20).
- **F7 · Comercial y UpConta:** PRD de la oleada comercial (M03 a M11) sobre lo que ya trae la base, e integración con UpConta (proforma → factura, catálogo, clientes).
- **F8 · T3, n8n e IA:** proveedores externos, campo sin conexión, ARCOTEL y conflictos de frecuencia, SLA por contrato, indicadores avanzados, automatizaciones con n8n y agentes de IA.

## Ideas para después, fuera del alcance hasta que las apruebes

Salen de lo que ya trae la base y de la aplicación actual. No entran sin requisito y PRD aprobados:

1. **«¿Cómo va mi equipo?»:** el QR de cada equipo (LAB-024) abre una página pública y limitada con el estado de su orden. Ahorra llamadas a recepción.
2. **Aprobación por WhatsApp:** el cliente recibe la proforma técnica y responde «apruebo». La línea queda aprobada con evidencia (COT-011).
3. **n8n:**
   - una proforma aprobada avisa al técnico y crea la tarea;
   - el vencimiento ARCOTEL dispara la campaña de renovación;
   - un informe diario llega a gerencia;
   - las incidencias críticas avisan al responsable de guardia.
4. **Agente técnico:** propone el diagnóstico a partir de la falla reportada, el modelo y el historial de equipos iguales. El técnico acepta o corrige (IA-004, IA-005).

## Qué necesito del consultor, por fase

| Fase | Necesito |
| --- | --- |
| F0 | Crear el repositorio privado `omnitronec-360` vacío y conectarlo a la sesión |
| F1 | Aprobar la arquitectura |
| F2 | Aprobar cada PRD y conseguir la validación del área técnica (P-22) |
| F3–F4 | Aprobar cada entrega visible (unos minutos por pantalla) |
| F5 | Exportación de datos (P-21), acceso al VPS para Dokploy y aprobación del pase a producción |
| Siempre | D-11, D-14 y el resto de decisiones del cliente cuando lleguen a su fase |
