# Diario de progreso

Memoria entre sesiones. Cada sesión agrega una entrada al principio: qué se hizo, qué falta y qué debe decidir el consultor. Las entradas antiguas no se borran.

---

## 2026-10-18 (noche) · Plan maestro, protocolo y repositorio de código

**Hecho**

- Decisión del consultor: plazos de garantía y reglas de cobro configurables (DEC-022, GAR-014, LAB-026); semilla de 60 días laborables en repuestos agregada junto a la de 90 días en reparación.
- Plan maestro F0 a F8 con compuertas (`PLAN-MAESTRO.md`) y protocolo de desarrollo con roles, tarea paso a paso, revisión, CI y actualización desde el original (`PROTOCOLO-DESARROLLO.md`).
- Decisiones DEC-023 (repositorio privado que sigue al original por versión), DEC-024 (capa propia y esquema separados), DEC-025 (ciclo técnico primero; reemplaza DEC-019) y DEC-026 (n8n por API y webhooks).
- Copia local de DeskcommCRM v1.85.0 con historia completa y envío al original bloqueado. Esta especificación ya se trasladó a `omnitronec/` en la rama `omx/T-001-capa-base`, junto con agentes `omx-programador`, `omx-revisor` y `omx-qa`, el registro de modificaciones al núcleo y el control `omx.yml`.
- Aviso de borrador no verificado en `PROTOCOLO-UPCONTA.md` (tenía suposiciones sin respaldo en la documentación de UpConta) y en los ejemplos de `PROTOCOLO-AGENTES.md`.

**No se pudo hacer**

- Crear el repositorio `omnitronec-360` en GitHub: la integración no tiene permiso para crear repositorios. Lo crea el consultor (F0.2).

**Necesito que decidas**

1. Crear el repositorio privado vacío `omnitronec-360` y conectarlo a la sesión.
2. Revisar `PLAN-MAESTRO.md` y aprobar el arranque de F1 (arquitectura).

---

## 2026-10-18 (tarde) · Revisión de la aplicación técnica actual y plan del área técnica

**Hecho**

- Se leyó el código público de la aplicación técnica actual (13 pantallas, sus campos, estados, reglas de cobro y PDF), sin iniciar sesión ni tocar datos. El inventario detallado quedó en `confidencial/app-actual/` (fuera de git).
- Se agregaron 18 requisitos con origen «Observado — app actual» (IAM-014, LAB-020 a 025, CAM-015 y 016, COT-020 y 021, CAT-016, FREQ-012, INC-012 y 013, BI-016 y 017, IA-021). Total: 357.
- Se registró DEC-021 (varios roles por usuario) y los pendientes P-21 (exportación de datos) y P-22 (validar reglas y plazo de garantía).
- Plan del área técnica por etapas en `docs/00-gobierno/evaluaciones/PLAN-AREA-TECNICA.md`: T0 base compartida, T1 paridad mejorada, T2 custodia y garantías, T3 operación completa.

**Falta información**

- EXPORTACIÓN DE LOS DATOS ACTUALES (P-21) Y VALIDACIÓN DE REGLAS CON EL ÁREA TÉCNICA (P-22).
- RECORRIDO CON SESIÓN INICIADA: LA RED DEL ENTORNO BLOQUEA EL DOMINIO DE LA APLICACIÓN.

**Necesito que decidas**

1. Aprobar el orden de etapas T0 → T1 → T2 → T3.
2. Pedir al área técnica la exportación de datos y la validación de P-22.
3. Cambiar la contraseña de la cuenta compartida en el chat.

---

## 2026-10-18 · Evaluación de DeskcommCRM como base

**Hecho**

- Se comparó atiendo-crm con su original, DeskcommCRM. Se recomienda el original: más español (7.945 textos contra 6.256), proformas, empresas y plataforma de módulos, y sigue activo. La copia quedó en septiembre y su numeración de base de datos choca con la del original.
- Se clasificaron los 339 requisitos contra el código del original: 46 los trae, 118 en parte y 175 no. La parte técnica (M13–M20) y UpConta se construyen casi completas.
- Se registró DEC-020 (propuesta) y la evaluación en `docs/00-gobierno/evaluaciones/`.

**Falta información**

- ADAPTACIÓN A ECUADOR (RUC, CÉDULA, LOPDP, IMPUESTOS) Y MODELO DE PERMISOS: SU ALCANCE SE FIJA EN EL PRD DE M01 Y M02.
- DEC-010 (PLANTILLAS DE PDF EDITABLES) QUEDA ABIERTA FRENTE A LO QUE TRAE EL ORIGINAL.

**Necesito que decidas**

1. Confirmar el original DeskcommCRM como base (DEC-020) y crear la copia privada bajo la cuenta del proyecto.
2. Aceptar que la primera instalación en el VPS sea la prueba (sección 7 de la evaluación).
3. Las decisiones del cliente D-11, D-12 y D-14 siguen pendientes.

---

## 2026-09-27 · Protocolos de integración y trabajo para agentes

**Hecho**

- Se creó `PROTOCOLO-UPCONTA.md`: integración con UpConta API v3 (11 módulos, flujos de creación cliente/producto/proforma/factura, patrones de deduplicación y sincronización, 8 restricciones de diseño con soluciones, 8 preguntas pendientes para UpConta, estructura backend/frontend).
- Se creó `PROTOCOLO-AGENTES.md`: procedimientos detallados de trabajo para todas las fases, con secciones específicas para redacción de PRD (template de 17 secciones, ejemplos concretos de historias y criterios de aceptación), revisión cruzada, workflow GitHub (branching, staging, commit, push), definición de "hecho", escalada.
- Se validó que ambos protocolos cubren todos los bloqueadores identificados en sesión anterior (DEC-007 autonomía funcional, D-02 custodia, D-11 proforma location, deduplicación sin guardia nativa, sincronización incremental, integración fallida).

**Archivos creados/actualizados:**
- `docs/00-gobierno/PROTOCOLO-UPCONTA.md` (11 secciones, 600+ líneas)
- `docs/00-gobierno/PROTOCOLO-AGENTES.md` (10 secciones, 600+ líneas)
- Commit: fe5b6b4 "Protocolos de integración y trabajo para agentes"

**Falta información** (sigue siendo bloqueador)

- **DECISIONES D-11, D-12, D-14:** Aún esperan aprobación (determinar dónde vive proforma, cuál ciclo va primero, alcance primer lanzamiento).
- **INSUMOS P-01 a P-20:** Falta asignar responsables y fechas.
- **LEVANTAMIENTO V4:** Pendiente revisión formal del cliente (sesión anterior identificó que está listo; requiere taller 1).

**Necesito que decidas**

1. **Aprobación de protocolos:** ¿Sirven los dos documentos como manual de trabajo para agentes? ¿Falta algo?
2. **Siguiente paso:**  
   - Opción A: Empieza PRD del módulo M01 (requisito previo: D-11, D-12, D-14 aprobados).
   - Opción B: Revisar levantamiento v4 con cliente (taller 1), resolver D-11/D-12/D-14, luego empieza PRD.
   - Opción C: Crear documentos adicionales (ej: Guide de creación de tests, template de arquitectura).

**Recursos disponibles para próxima sesión**

- `PROTOCOLO-UPCONTA.md`: Copia y pega a agentes que trabajen en integración con UpConta.
- `PROTOCOLO-AGENTES.md`: Copia y pega a agentes que redacten PRD o código.
- `AGENTS.md`: Ya incluye importación de reglas base (no innoventes, citar, un commit por tarea).
- Rama de trabajo: `claude/confident-hawking-iajp0g` (lista para Pull Request o continuar).

---

## 2026-09-25 · Levantamiento v4 y estructura del proyecto

**Hecho**

- Se creó la estructura del repositorio: `AGENTS.md`, gobierno del proyecto (`docs/00-gobierno/`), levantamiento (`docs/01-levantamiento/`), preparación del PRD (`docs/02-prd/`), plantillas semilla (`data/semillas/`) y el script de requisitos.
- Se transformó el levantamiento v3 en la v4 modular: 23 módulos más el conector contable, 339 requisitos (39 nuevos y 12 ajustados), módulo nuevo M09 de habilitación comercial, mapa de dependencias entre módulos, pendientes en MAYÚSCULAS y sección 16.2 reescrita para que el PRD no quede congelado.
- Se releyeron las cuatro transcripciones completas y se documentó la cobertura punto por punto (144 puntos).
- Se definió cómo se usa cada fuente (`FUENTES.md`) y se registraron 19 decisiones (`DECISIONS.md`).
- Se prepararon las plantillas semilla de catálogos con los datos que el cliente dio en la reunión.

**No se pudo hacer**

- **Auditar de nuevo la aplicación actual** y **verificar la documentación de la API de UpConta**: la política de red del entorno de trabajo bloquea la dirección de la aplicación actual y los sitios de UpConta. Para hacerlo, hay que agregar esos dominios a la lista de permitidos del entorno.
- **Contrastar los 42 requisitos que la v3 atribuye a notas del cliente**: las notas no se entregaron (P-15).

**Falta información** (ver el documento 11 del levantamiento)

- LAS DECISIONES QUE BLOQUEAN EL INICIO DEL PRD: D-11 (DÓNDE VIVE LA PROFORMA), D-12 (QUÉ CICLO VA PRIMERO), D-14 (ALCANCE DEL PRIMER LANZAMIENTO).
- LOS INSUMOS P-01 A P-20, CON SUS RESPONSABLES.

**Necesito que decidas**

1. Hacer **privado** el repositorio de GitHub: hoy es público y el proyecto maneja información confidencial del cliente (DEC-004, R-10).
2. Revisar `docs/01-levantamiento/CAMBIOS-v4.md` y aprobar la v4.
3. Convocar el taller 1 con el cliente usando `COBERTURA-TRANSCRIPCIONES.md` como guion.
4. Entregar las notas del cliente citadas por la v3 (P-15), si las tienes.

**Siguiente paso**

Con las decisiones D-11, D-12 y D-14 tomadas y la v4 aprobada, empieza la fase 1 (PRD) por los módulos de la fase 1 del producto, en el orden de sus dependencias: M01, M23, M12, M02 y M10. El plan está en `docs/02-prd/README.md`.
