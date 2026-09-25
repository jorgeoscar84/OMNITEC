# Diario de progreso

Memoria entre sesiones. Cada sesión agrega una entrada al principio: qué se hizo, qué falta y qué debe decidir el consultor. Las entradas antiguas no se borran.

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
