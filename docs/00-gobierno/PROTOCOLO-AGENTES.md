# Protocolo de trabajo para agentes · OMNITRONEC 360

> **⚠ AVISO (18 oct 2026):** Para la construcción manda [`PROTOCOLO-DESARROLLO.md`](PROTOCOLO-DESARROLLO.md). Este documento sigue sirviendo como guía de redacción del PRD, pero sus ejemplos son ilustrativos: algunos identificadores (CLI-009, IAM-003 y otros) no corresponden a los requisitos reales. Verifica siempre el identificador en `docs/01-levantamiento/indice-requisitos.csv`.


**Versión:** 1.0 · **Fecha:** 2026-09-27 · **Audiencia:** Agentes de IA y desarrolladores humanos

---

## 1. Principios rectores

1. **No inventes.** Si falta un dato, una regla o un requisito, escríbelo en MAYÚSCULAS con prefijo `FALTA INFORMACIÓN`. Detente. No continúes.
2. **Cita siempre.** Identificador de requisito (`CLI-018`), decisión (`D-11`, `DEC-006`), grabación (`T1`-`T4`), o sección de documento.
3. **Un commit por tarea o módulo.** Mensaje en español; incluir identificadores.
4. **Verifica antes de empezar.** Lee `AGENTS.md`, lee la tarea asignada, lee `PROGRESS.md`.
5. **Respeta los límites.** Solo toca los archivos que la tarea permite. No agregues alcance.
6. **Repositorio público.** Nunca subas: credenciales, direcciones internas, transcripciones, datos de clientes (nombres, RUC, teléfono, email, frecuencias), detalles de seguridad de la app actual. Sensible → `confidencial/` (excluido de git).

---

## 2. Antes de empezar cualquier sesión

### 2.1 Lectura obligatoria (5 min)

1. `AGENTS.md` — este archivo + reglas de la fase.
2. `PROGRESS.md` — qué se hizo, qué falta, qué debe decidir el consultor.
3. Tarea asignada — identificadores de requisitos, archivos permitidos.

### 2.2 Lectura bajo demanda (si toca un módulo)

1. El capítulo del levantamiento de ese módulo (ej: `docs/01-levantamiento/modulos/M01-personas.md`).
2. Documentos que cite: flujos (cap. 05), integraciones (cap. 07), modelo conceptual (cap. 06), pendientes (cap. 11).
3. PRD del módulo (si fase > 0): `docs/02-prd/modulos/M<XX>-nombre.md`.
4. Decisiones vigentes: `DECISIONS.md` (si toca algo que mencionan).

### 2.3 Verifica el estado de aprobaciones

```bash
# En tu shell, dentro del repo
node scripts/requisitos.mjs --check
```

Si hay error: **no continúes.** El índice de requisitos está desactualizado. Ejecuta:

```bash
node scripts/requisitos.mjs
```

Haz un commit:

```bash
git add docs/01-levantamiento/indice-requisitos.csv
git commit -m "Regenerar índice de requisitos"
```

---

## 3. Fases y procedimientos

### Fase 0 · Levantamiento (aprobación)

**Estado actual:** v4 lista para aprobación · **Siguiente:** taller 1 con cliente, aprobar D-11/D-12/D-14.

**Procedimiento si tienes tarea en fase 0:**

1. **Leer el capítulo o módulo del levantamiento.**
2. **Contrastar con requisitos citados** (T1-T4) o documentación de la app actual (`confidencial/`).
3. **Si encuentras discrepancia:**
   - No editorialices ni corrijas sin verificar.
   - Registra en capítulo 11 (Pendientes) con `FALTA INFORMACIÓN` y guión (D-###).
   - Nótalo en `PROGRESS.md`.
4. **Si añades requisito nuevo:**
   - Usa el siguiente número de su prefijo (ej: CLI-007 si CLI-006 es el último).
   - Incluye origen (T1/T2/T3/T4/v3/público), prioridad (P0-P3).
   - Cita la transcripción o fuente.
5. **Ejecuta `node scripts/requisitos.mjs --check`.**
6. **Un commit:** "M<XX>: actualización del levantamiento (IDs: XXX-001, XXX-002)".

### Fase 1 · PRD (en curso de inicio)

**Orden de redacción por oleada 1 (fases 1-3):**
- Primero: `PRD.md` (documento general).
- Luego módulos en orden de dependencias: M01 → M23 → M12 → M02 → M10.

**Decisiones que deben estar aprobadas ANTES de empezar fase 1:**
- **D-11:** ¿Dónde vive la proforma (UpConta o OMNITRONEC)?
- **D-12:** ¿Qué ciclo va primero (comercial o técnico)?
- **D-14:** ¿Cuál es el alcance del primer lanzamiento?

#### 3.1 Procedimiento: Redactar PRD.md (general)

**Archivos permitidos:**
- `docs/02-prd/PRD.md` (crear si no existe).

**Pasos:**

1. **Leer el documento 01 (visión) del levantamiento** (`docs/01-levantamiento/01-vision.md`).
2. **Leer el documento 06 (modelo conceptual)** — entidades principales, ciclos de vida.
3. **Redactar PRD.md con estas secciones:**

   ```markdown
   # PRD general · OMNITRONEC 360
   
   | | |
   | --- | --- |
   | **Estado** | Borrador · En revisión · Aprobado |
   | **Versión y fecha** | 1.0 · AAAA-MM-DD |
   | **Aprobado por** | Consultor: … · Cliente: … |
   
   ## 1. Objetivo del lanzamiento
   
   Qué se entrega en el primer lanzamiento (fases 1-3).
   Fuente: `D-14` (alcance del primer lanzamiento).
   
   ## 2. Roles transversales
   
   Tabla de roles del sistema (superadmin, gerente, asesor, etc.);
   fuente: `docs/01-levantamiento/modulos/M24-usuarios.md` (o sección de IAM).
   
   ## 3. Reglas transversales
   
   - **Auditoría:** Quién, cuándo, qué (antes/después), motivo. Requisito: AUD-001.
   - **Versionado de objetos:** Toda actualización crea versión (si requisito VERSION-001 existe).
   - **Estados de interfaz:** Cargando, vacío, error, sin permiso, deshabilitado, guardado, conflicto, sin conexión.
   - **Idioma:** Español (Ecuador).
   - **Zona horaria:** America/Guayaquil (requisito: TZ-001 o similar).
   - **Moneda:** USD con 2 decimales (requisito: CUR-001).
   
   ## 4. Requisitos no funcionales
   
   | Atributo | Meta | Fuente |
   | --- | --- | --- |
   | Disponibilidad | 99.5% uptime | D-### |
   | Latencia (p95) | < 500 ms | D-### |
   | Almacenamiento | 50 GB año 1 | D-### |
   | Usuarios concurrentes | < 50 | D-### |
   
   ## 5. Módulos en fase 1
   
   Tabla: M01, M23, M12, M02, M10 · fuente: `D-14`.
   
   ## 6. Integraciones
   
   UpConta API v3 · fuente: `PROTOCOLO-UPCONTA.md`.
   ```

4. **Ejecuta `node scripts/requisitos.mjs --cobertura docs/02-prd`.**
   - Si hay requisitos del PRD general, cítalos.
5. **Commit:** "PRD: documento general y roles transversales (DEC-###)".

#### 3.2 Procedimiento: Redactar PRD de un módulo (M<XX>-nombre)

**Duración estimada:** 4 horas por módulo.

**Archivos permitidos:**
- `docs/02-prd/modulos/M<XX>-nombre.md` (crear si no existe).

**Pasos:**

1. **Preparar (30 min):**
   - Leer `docs/01-levantamiento/modulos/M<XX>-nombre.md` completo.
   - Leer módulos de los que depende (sección "Depende de").
   - Leer flujos del cap. 05 en los que participa.
   - Leer pendientes del cap. 11 que lo bloqueen. Si hay bloqueador, **DETENTE** y comunica al consultor.

2. **Redactar con plantilla** (3.5 horas):
   - Usar `docs/02-prd/PLANTILLA-MODULO.md`.
   - Guardar como `docs/02-prd/modulos/M<XX>-nombre.md`.
   - Llenar cada sección (17 en total). Ver guía detallada en sección 3.3.
   - **Regla de oro:** Cada requisito del levantamiento → al menos un criterio de aceptación (CA) O diferido en "Fuera o diferido" con motivo y fase.

3. **Verificar cobertura (10 min):**
   ```bash
   node scripts/requisitos.mjs --cobertura docs/02-prd --prefijos <PREFIJO_MODULO>
   ```
   - Ej: para M01 (CLI, IAM, PER): `node scripts/requisitos.mjs --cobertura docs/02-prd --prefijos CLI,IAM,PER`
   - Si falta alguno: volver a redactar y agregar CA.

4. **Revisión cruzada** (1 hora):
   - Tú mismo verifica la lista de la sección 3.4.
   - O pide a otro agente que revise (si hay múltiples).

5. **Registra en PROGRESS.md:**
   - Una línea: qué módulos, qué criterios, qué requiere aprobación.

6. **Un commit:** "M<XX>: PRD del módulo (XXX-001 a XXX-0nn)".

#### 3.3 Guía detallada de secciones del PRD

**Sección 1. Problema y resultado esperado (2-3 frases)**

Lenguaje de negocio, no técnico. Ej:

```markdown
## 1. Problema y resultado esperado

Actualmente la empresa capta leads manualmente (email, WhatsApp, formulario web) 
y los ingresa a mano en una hoja de cálculo. Resultado: duplicados, pérdidas, 
demora de 2 días antes de que asesor reciba.

Módulo M03 centraliza todos los leads en un solo lugar, valida duplicados en tiempo real,
y notifica al asesor al instante. Asesor ve que "lead de Juan Pérez llegó hace 5 minutos".
```

**Sección 2. Alcance (dentro vs. fuera)**

Tabla: requisitos dentro; tabla: requisitos diferidos con motivo y fase.

```markdown
### Dentro de este PRD
CLI-001, CLI-002, CLI-004  // del levantamiento

### Fuera o diferido
| ID | Motivo | Fase en que entra |
| --- | --- | --- |
| CLI-003 | Validación de RUC via SRI; requiere integración (DEC-006) | 4 |
| CLI-006 | Fotos de cliente; requiere M02 | 2 |
```

**Sección 3. Personas y escenarios**

Tabla: rol, qué necesita, escenario típico.

```markdown
| Rol | Qué necesita de este módulo | Escenario típico |
| --- | --- | --- |
| Asesor | Capturar lead, buscar duplicado, asignar etapa | Recibe llamada de cliente → abre M03 → ingresa nombre/RUC → sistema dice "¡Ya existe!" |
| Supervisor | Ver pipeline (leads por etapa), reasignar | 9 AM: revisa 12 leads nuevos, reasigna 3 a otro asesor |
| Gerente | Indicadores de captación (leads/día, tasa conversión) | Reporte: "Esta semana 48 leads, 30% conversión" |
```

**Sección 4. Flujo principal y excepciones**

Paso a paso, con rol. Luego excepciones (dato inválido, duplicado, sin permiso, integración caída, conflicto de versión, sin conexión).

```markdown
### Flujo principal
1. **Asesor** abre módulo M03, ve lista de leads.
2. **Asesor** clic "Nuevo lead".
3. **Sistema** muestra formulario (nombre, email, teléfono, origen, empresa).
4. **Asesor** ingresa datos.
5. **Sistema** valida: RUC no está vacío; si país=Ecuador, aplica validación RUC-001.
6. **Sistema** consulta UpConta: ¿Cliente con este RUC ya existe? Si sí → duplicado (ver excepción).
7. **Asesor** clic "Guardar".
8. **Sistema** crea lead en etapa "Nuevo", notifica a asesor.

### Excepciones
- **RUC inválido:** Error: "RUC debe tener 13 dígitos". No se guarda.
- **Lead duplicado:** Aviso: "Este lead existe desde hace 3 días; asignado a [Otro Asesor]". Opción: "Ver duplicado" o "Crear de todas formas".
- **Sin permiso:** Si rol != Asesor: "No tienes permiso para crear leads". Requisito: IAM-003.
- **Integración UpConta caída:** Modo autónomo (DEC-007): crea lead localmente, marca "Pendiente sincronización con UpConta". Cuando red vuelve, sincroniza automáticamente.
- **Conflicto de versión:** Si otro usuario edita mismo lead mientras tú editas: "Este lead fue editado por [Usuario] a las 10:23. ¿Descartar mis cambios o sobrescribir?" Requisito: VERSION-001 (si existe).
- **Sin conexión:** Formulario se guarda en localStorage; cuando red vuelve, envía al servidor.
```

**Sección 5. Historias y criterios de aceptación**

**Estructura por historia:**

```markdown
### HU-CLI-01 · Capturar lead

- **Cubre:** CLI-001, CLI-002
- **Historia:** Como asesor quiero capturar un lead (nombre, email, teléfono, origen) 
  para que el sistema registre y notifique en tiempo real.
- **Criterios de aceptación:**
  - **CA-CLI-01-1** · Dado que estoy en M03 sin leads, cuando clic "Nuevo", 
    entonces veo formulario con campos: nombre (obligatorio), email (opcional), 
    teléfono (opcional), origen (obligatorio, select con opciones de `origenes-lead.csv`).
  - **CA-CLI-01-2** · Dado nombre="Juan" y email="", cuando clic "Guardar", 
    entonces el sistema guarda y muestra "Lead creado" (sin errores por email vacío).
  - **CA-CLI-01-3** · Dado email="juan@empresa.ec" y email ya existe en UpConta, 
    cuando clic "Guardar", entonces aviso: "¿Este email ya está en UpConta. 
    ¿Crear de todas formas o ver existente?"
  - **CA-CLI-01-4** · Dado que soy usuario sin rol Asesor (ej: Recepción), 
    cuando abro M03, entonces no veo botón "Nuevo lead" ni opción de crear.
```

**Notas sobre CA:**
- Usar formato: "Dado X, cuando Y, entonces Z" (Given-When-Then).
- Cada CA debe poder comprobarse con una prueba automática (Selenium, Playwright) o paso en navegador.
- **Nunca escribas:** "rápido", "intuitivo", "adecuado" (no comprobables).
- Si CA es imposible de comprobar, reescribir.

**Sección 6. Máquina de estados (solo si módulo gestiona ciclo de vida)**

Tabla: estado actual → evento → estado siguiente → quién puede → condiciones → efectos.

Ej: lead con ciclos (Nuevo → Contactado → Calificado → Propuesta → Ganado/Perdido/Suspendido).

```markdown
| Estado actual | Evento o acción | Estado siguiente | Quién puede | Condiciones previas | Efectos |
| --- | --- | --- | --- | --- | --- |
| Nuevo | Asesor clic "Contactar" | Contactado | Asesor asignado | Lead es del asesor | Auditoría; notificación |
| Contactado | Asesor avanza a "Calificado" | Calificado | Asesor asignado | Lead > 1 día en Contactado | Auditoría; email a supervisor si presupuesto > $10k |
| Calificado | Asesor envía propuesta | Propuesta | Asesor asignado | Propuesta creada en M23 | Auditoría; SLA de 3 días inicia |
| Propuesta | Cliente acepta → Factura emitida en M23 | Ganado | Sistema | Factura.status = 'emitida' | Auditoría; cierre de SLA; notificación a Gerencia |
| Propuesta | SLA vence (3 días) sin interacción | Suspendido | Sistema | SLA expire | Auditoría; notificación a asesor |
| Suspendido | Asesor reactivar | Contactado | Asesor asignado | Lead no tiene 30+ días suspendido | Auditoría |
| Ganado | Cambio manual a Perdido | Perdido | Supervisor+ | Cambio requiere motivo | Auditoría con motivo |
| Perdido | Cambio manual a Nuevo | Nuevo | Supervisor+ | Cambio requiere motivo | Auditoría con motivo |

**Nota:** Toda transición no listada está prohibida.
```

**Sección 7. Reglas de negocio**

Lista: regla exacta, sin ambigüedad, con origen.

```markdown
- **RN-CLI-01** · Un lead puede tener solo un asesor asignado a la vez (CLI-005, asesor requiere permisos de M01).
- **RN-CLI-02** · Email debe ser único por empresa (DEC-011: un negocio = una OMNITRONEC).
- **RN-CLI-03** · Si cliente existe en UpConta, su RUC es de solo lectura en OMNITRONEC (DEC-007).
- **RN-CLI-04** · Origen de lead debe ser de la lista `data/semillas/origenes-lead.csv` (CLI-009).
```

**Sección 8. Datos**

Tabla: entidad, campo, tipo, obligatorio, validación, origen, sensible.

```markdown
### Entidades y campos

| Entidad | Campo | Tipo | Obligatorio | Validación | Origen del dato | Sensible |
| --- | --- | --- | --- | --- | --- | --- |
| Lead | id | identificador UUID | sí | — | generado servidor | no |
| Lead | nombre | texto | sí | no vacío; < 200 caracteres | captura | no |
| Lead | email | email | no | formato email válido | captura | sí |
| Lead | teléfono | texto | no | formato Ecuador (10 dígitos, comienza con 0) | captura | sí |
| Lead | empresa | texto | no | < 200 caracteres | captura | no |
| Lead | ruc | texto | no | 13 dígitos (si Ecuador); validación RUC-001 | captura o UpConta | no |
| Lead | origen | identificador lista | sí | FK a `origenes-lead.csv` | captura | no |
| Lead | etapa | identificador lista | sí | FK a `etapas-pipeline.csv` | sistema (default: "Nuevo") | no |
| Lead | asesor_id | identificador | sí | FK a tabla Usuarios; solo Asesor+ | sistema (asignación) | no |
| Lead | fecha_creacion | fecha/hora UTC | sí | — | sistema (NOW) | no |
| Lead | fecha_modificacion | fecha/hora UTC | sí | — | sistema (NOW en cada edición) | no |
| Lead | upconta_cliente_id | identificador | no | FK a cliente en UpConta | integración | no |

### Relaciones

- Lead.asesor_id → Usuarios.id (N:1, obligatoria).
- Lead.etapa → catálogo etapas_pipeline (N:1, obligatoria).
- Lead.origen → catálogo origenes_lead (N:1, obligatoria).
- Lead.upconta_cliente_id → UpConta API (opcional, para sincronización).

### Referencias externas

- Lead.ruc: puede venir de formulario web (externo) o de UpConta (sincronización).
- Lead.upconta_cliente_id: permite buscar/actualizar cliente en UpConta sin duplicar.
```

**Sección 9. Permisos**

Tabla: acción, entidad, alcance, condición, roles.

```markdown
| Acción | Entidad | Alcance | Condición | Roles |
| --- | --- | --- | --- | --- |
| Crear | Lead | propios | Ninguna | Asesor, Supervisor, Gerencia |
| Leer | Lead | propios, su equipo, todos | Gerencia ve todos; Supervisor ve su equipo; Asesor ve propios | Asesor, Supervisor, Gerencia |
| Editar | Lead | propios, su equipo | Asesor edita propio; Supervisor edita su equipo | Asesor, Supervisor, Gerencia |
| Cambiar etapa | Lead | propios, su equipo | No se permite retroceso de etapa a "Nuevo" (solo Supervisor+) | Asesor, Supervisor, Gerencia |
| Asignar a otro | Lead | su equipo | Supervisor+ solo | Supervisor, Gerencia |
| Exportar | Lead | su equipo, todos | Gerencia exporta todos; Supervisor exporta su equipo | Supervisor, Gerencia |
| Eliminar | Lead | propios solo | Solo si etapa = "Nuevo" (requisito IAM-010) | Asesor, Supervisor |
| Aprobar cambios | Lead | — | Requisito VERSION-001 (si existe) | Supervisor+ |
```

**Sección 10. Interfaz**

Tabla: pantalla, propósito, acción primaria, contenido, dispositivo.

```markdown
### Pantallas

| Pantalla | Propósito | Acción primaria | Contenido | Dispositivo |
| --- | --- | --- | --- | --- |
| M03 · Lista de leads | Visión general de leads, búsqueda, filtrado | "Nuevo lead" | Tabla: nombre, empresa, origen, etapa, asesor, fecha. Filtros: etapa, asesor, rango fecha | Escritorio, tableta |
| M03 · Detalle de lead | Ver/editar lead, historial | "Editar", "Cambiar etapa" | Formulario: nombre, email, teléfono, empresa, RUC, origen, asesor. Historial de cambios (auditoría). Acciones. | Escritorio, tableta, móvil |
| M03 · Formulario nuevo | Crear lead | "Guardar" | Campos: nombre, email, teléfono, empresa, RUC, origen (obligatorios marcados) | Escritorio, tableta, móvil |

### Estados obligatorios

Para cada pantalla o componente:
- **Cargando:** Spinner; tabla vacía con 3 filas grises.
- **Vacío:** Ícono; texto "No hay leads. [Botón: Crear primero]".
- **Error con recuperación:** Ícono de error; mensaje "No se pudo cargar leads. [Botón: Reintentar]".
- **Sin permiso:** Ícono candado; "No tienes permiso para ver leads".
- **Deshabilitado con explicación:** Botón gris; tooltip "Debes asignar asesor antes de cambiar etapa".
- **Guardado:** Toast verde: "Lead guardado a las 10:23".
- **Conflicto de versión:** Modal: "Este lead fue editado por otro usuario. Descartar mis cambios o sobrescribir?"
- **Sin conexión:** Banner gris en tope: "Sin conexión. Los cambios se guardarán cuando vuelva la red."
```

**Sección 11. Auditoría y notificaciones**

Tabla: evento, qué se registra, a quién notifica, canal.

```markdown
| Evento | Qué se registra | A quién se notifica | Canal |
| --- | --- | --- | --- |
| Lead creado | Quién, cuándo, datos nuevos | Asesor asignado | In-app (bell icon) |
| Lead modificado (campo) | Quién, cuándo, campo, antes, después | Asesor asignado | Auditoría (log); In-app si cambio crítico |
| Etapa cambiada | Quién, cuándo, etapa anterior, nueva etapa | Asesor, Supervisor | In-app |
| Lead asignado a otro | Quién cambió, de quién, a quién, cuándo | Asesor nuevo, Asesor anterior, Supervisor | In-app + Email |
| SLA vence | Etapa, días transcurridos | Asesor, Supervisor | In-app + Email (requisito SLA-001) |
```

**Sección 12. Integraciones**

Tabla: capacidad, modo autónomo, modo integrado, si falla.

```markdown
| Capacidad | Modo autónomo | Modo integrado | Si la integración falla |
| --- | --- | --- | --- |
| Verificar duplicado por RUC | Búsqueda local en OMNITRONEC | Consulta UpConta primero; si duplicado, aviso | Cola de excepciones (ver PROTOCOLO-UPCONTA.md); modo autónomo sigue |
| Crear cliente en UpConta | No aplica (lead es pre-cliente) | POST /clients en UpConta; guarda upconta_cliente_id | Lead se crea localmente; queued para sync cuando red vuelve |
```

**Sección 13. Indicadores e instrumentación**

Qué indicadores del documento 08 del levantamiento se alimentan.

```markdown
- **IND-001:** "Leads captados por día" → evento "Lead.created" en M03.
- **IND-002:** "Tasa de conversión lead → propuesta" → eventos "Lead.etapa_changed" a "Propuesta".
- **IND-003:** "Tiempo promedio en cada etapa" → cálculo de (fecha_cambio_a_siguiente - fecha_ingreso_etapa).
```

**Sección 14. Migración y datos iniciales**

Qué se trae de aplicación actual, qué plantillas de `data/semillas/` se cargan.

```markdown
- **Leads actuales:** Importar de hoja de cálculo (upload CSV). Mapear: nombre → Lead.nombre, email → Lead.email, etc.
  Script: `scripts/migracion-leads.mjs` (pendiente crear).
- **Catálogos:** Cargar desde `data/semillas/origenes-lead.csv` y `data/semillas/etapas-pipeline.csv`.
- **Conciliación:** Después de importar leads, verificar en UpConta si cliente existe (query por RUC o email). Si existe, poblar upconta_cliente_id.
```

**Sección 15. Pruebas de recorrido (E2E)**

Recorridos que la fase de pruebas debe automatizar.

```markdown
### Recorrido 1: Capturar lead nuevo
1. Ir a M03.
2. Clic "Nuevo lead".
3. Ingresar: nombre="Juan Pérez", email="juan@empresa.ec", teléfono="0987654321", origen="Formulario web".
4. Clic "Guardar".
5. Verificar: Lead aparece en lista; auditoría registra creación; asesor recibe notificación.

### Recorrido 2: Duplicado por email
1. Ir a M03.
2. Clic "Nuevo lead".
3. Ingresar email que ya existe en UpConta.
4. Clic "Guardar".
5. Verificar: Aviso "Este cliente ya existe en UpConta. ¿Ver?" aparece; opción para crear de todas formas.

### Recorrido 3: Sin permiso (Recepción no puede crear)
1. Iniciar sesión como Recepción.
2. Ir a M03.
3. Verificar: Botón "Nuevo lead" no existe; mensaje "Sin permiso".

### Recorrido 4: Cambiar etapa de lead
1. Ir a M03; seleccionar lead en "Nuevo".
2. Cambiar a "Contactado".
3. Verificar: Auditoría, notificación a supervisor; SLA timer inicia si regla RN-CLI-02 lo define.
```

**Sección 16. Definición de terminado del módulo**

Checklist final.

```markdown
- ☐ Todos los criterios de aceptación (CA-***) tienen prueba automática (Playwright/Selenium) y PASAN.
- ☐ Máquina de estados rechaza toda transición no listada en sección 6.
- ☐ Permisos verificados: usuario Asesor VE el botón "Nuevo", usuario Recepción NO lo VE.
- ☐ Funciona en modo autónomo (sin UpConta; integración es graceful degradation).
- ☐ Revisión cruzada sin hallazgos abiertos (lista de sección 3.4).
```

**Sección 17. Trazabilidad**

Tabla: requisito → historias/criterios que lo cubren.

```markdown
| Requisito | Historias y criterios que lo cubren |
| --- | --- |
| CLI-001 | HU-CLI-01 (CA-CLI-01-1, CA-CLI-01-2) |
| CLI-002 | HU-CLI-01 (CA-CLI-01-3) |
| CLI-005 | HU-CLI-02 (CA-CLI-02-1, CA-CLI-02-2) |
| IAM-003 | HU-IAM-01 (CA-IAM-01-1) |
```

---

### 3.4 Revisión cruzada (verificación antes de aprobar)

Tú mismo verifica (o pide a otro agente):

- ☐ ¿Hay algún requisito del levantamiento sin CA ni motivo de diferimiento?
- ☐ ¿Hay algún CA sin origen en requisito? (alcance inventado)
- ☐ ¿Algún CA es imposible de comprobar? ("rápido", "intuitivo", "adecuado")
- ☐ ¿Máquina de estados cubre todos los estados, quién dispara cada transición, qué pasa si se intenta transición no permitida?
- ☐ ¿Cada acción tiene su permiso (acción, entidad, alcance, condición)?
- ☐ ¿Se definió qué pasa en modo autónomo y si integración falla? (DEC-007)
- ☐ ¿Toda pantalla contempla 8 estados obligatorios (cargando, vacío, error, sin permiso, deshabilitado, guardado, conflicto, sin conexión)?
- ☐ ¿Se respetan reglas de interconexión del mapa de módulos?
- ☐ ¿Hay algo con "FALTA INFORMACIÓN" que bloquea construcción?

---

### Fase 2-3 · Arquitectura, plan de tareas (futuro)

**Procedimiento** (genérico; se detallarán cuando sea momento):

1. Leer `docs/03-arquitectura/` (no existe aún).
2. Respeta decisiones técnicas tomadas.
3. Diseña modelo de datos, APIs, estructura de componentes.
4. Una decisión nueva → registrar en `DECISIONS.md`.
5. Commit: "Arquitectura: [componente] ([DEC-###])".

---

### Fase 4-5 · Construcción (futuro)

**Procedimiento** (genérico; se detallarán cuando código esté aprobado):

1. Repite: tarea, requisitos, archivos permitidos (máximo 5 archivos).
2. **Prueba primero:** escribe test que falla, luego código que lo hace pasar.
3. **Verifica:** tipo, estilo, pruebas unitarias. Nada en rojo.
4. **Prueba en navegador:** si toca UI, recorre flujo completo. ¿Funciona? ¿No rompió otro módulo?
5. **Un commit por tarea:** `[TAREA-nnn] descripción (ID-001, ID-002)`.

---

## 4. Protocolo de sincronización con GitHub

### 4.1 Antes de cualquier cambio

```bash
git status  # ¿Hay cambios sin commitear?
git fetch origin  # ¿Está rama al día?
```

Si hay cambios sin commitear: **stash o commit** (no pierdas trabajo).

### 4.2 Workflow en rama designada

**Tu rama de trabajo:**
```
Consultor te dice: "Trabaja en rama `claude/nombre-de-tarea`"
```

**Crea rama** (primera vez):
```bash
git fetch origin main  # trae última versión de main
git checkout -b claude/nombre-de-tarea origin/main
```

**O usa rama existente:**
```bash
git fetch origin claude/nombre-de-tarea
git checkout claude/nombre-de-tarea
git pull origin claude/nombre-de-tarea
```

### 4.3 Staging y commit

**Revisa qué cambios tienes:**
```bash
git status
```

**Agrega solo archivos permitidos:**
```bash
git add docs/02-prd/modulos/M01-personas.md
git add data/semillas/clientes.csv
```

**Verifica el diff antes de commitear:**
```bash
git diff --cached  # qué va a commitear
```

**Si vez algo sensible (credenciales, datos de cliente, emails), NO COMMITES. Revisa.**

**Commit con mensaje en español:**
```bash
git commit -m "M01: PRD del módulo de personas (CLI-001 a CLI-006, IAM-001 a IAM-003)"
```

**Incluye al final:**
```
Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_...
```

(El sistema lo agrega automático si usas la herramienta de commit.)

### 4.4 Push

```bash
git push -u origin claude/nombre-de-tarea
```

**Si falla por red:**
- Reintenta 4 veces con backoff: espera 2s, 4s, 8s, 16s.
- Si sigue fallando después de 16s, **DETENTE**. Comunica al consultor.

### 4.5 Crear PR (solo si te lo pide el consultor)

```bash
gh pr create --title "M01: PRD del módulo de personas" \
  --body "$(cat <<'EOF'
## Resumen
- PRD completo con 17 secciones
- 9 historias (HU-CLI-01 a HU-CLI-09)
- 32 criterios de aceptación
- Requisitos CLI-001 a CLI-006 + IAM-001 a IAM-003 cubiertos

## Checklist
- [x] Todos los requisitos tienen criterio
- [x] Máquina de estados completada
- [x] Permisos al detalle
- [x] Estados de interfaz documentados
- [x] Prueba de cobertura: `node scripts/requisitos.mjs --cobertura docs/02-prd --prefijos CLI,IAM,PER`

---
Generated with [Claude Code](https://claude.ai/code)
EOF
)"
```

---

## 5. Definición de hecho

Marcas un módulo/tarea como HECHA cuando:

1. ✅ **Criterios de aceptación:** Todos tienen prueba y PASAN (fase 4+).
2. ✅ **Scripts:** `node scripts/requisitos.mjs` pasa. En fase PRD: `node scripts/requisitos.mjs --cobertura docs/02-prd --prefijos <PREFIJO>` sin faltantes.
3. ✅ **Otros módulos:** No rompiste nada. Verifica que PRD de módulos dependientes no estén afectados.
4. ✅ **Archivos:** Solo editaste los permitidos. Nada fuera de alcance.
5. ✅ **Secretos:** Nada sensible en el diff. Revisa dos veces.
6. ✅ **Documentación:** `PROGRESS.md` y `DECISIONS.md` (si hay decisión nueva) actualizados.
7. ✅ **Idioma:** Textos en español (Ecuador), no jerga.
8. ✅ **Commit:** Mensaje claro, en español, con IDs de requisitos.

---

## 6. Si algo falla

### 6.1 El script `requisitos.mjs` da error

**Error típico:** "CLI-001 duplicado: docs/01-levantamiento/modulos/M01.md:45 y docs/02-prd/modulos/M01.md:120"

**Solución:**
- Requisito no debe definirse en PRD. Solo se CITA.
- Edita PRD: cambia `| CLI-001 |` a `CLI-001` (en texto, no en tabla de requisitos).
- Reintenta: `node scripts/requisitos.mjs`.

### 6.2 Un criterio de aceptación es imposible de comprobar

**Ejemplo:** "El sistema debe ser intuitivo".

**Solución:**
- Reescribe en formato Given-When-Then comprobable.
- ❌ Antes: "Debe ser intuitivo".
- ✅ Después: "Dado que usuario abre M01 por primera vez, cuando ve campos de formulario, entonces cada campo tiene label clara y botón [Ayuda] muestra tooltip".

### 6.3 Hay contradición entre documentos

**Ejemplo:** Levantamiento dice "cliente puede tener múltiples RUCs", pero PROTOCOLO-UPCONTA dice "RUC es único por cliente".

**Solución:**
- No elijAs tú. Registra como decisión abierta en `DECISIONS.md`: "D-###: ¿Un cliente puede tener múltiples RUCs en OMNITRONEC si UpConta los trata como únicos?"
- Comenta en PR o `PROGRESS.md`.
- Detente y espera respuesta del consultor.

### 6.4 Hay requisito sin origen claro

**Ejemplo:** PRD de M03 menciona "etapa Ganado en pipeline", pero no aparece en levantamiento.

**Solución:**
- Busca en capítulos 05 (flujos) y 06 (modelo conceptual).
- Si no está, es alcance inventado.
- Reescribe CA para que referencie requisito real, o elimina CA.
- Si el alcance es legítimo (cliente lo pidió en taller), agrega requisito nuevo al levantamiento con origen "Taller 1" o la fecha en que se definió.

---

## 7. Esquema de decisiones

Cuando una decisión es nueva, regístrala en `DECISIONS.md`:

```markdown
## D-### · Título corto de la decisión

**Contexto:** Por qué surge.

**Opción A:** … (ventajas, desventajas).
**Opción B:** … (ventajas, desventajas).

**Decisión:** Opción [A|B], porque …

**Impacto:** Qué módulos, qué requisitos, qué código/PRD cambia.

**Fecha:** 2026-09-27 · **Aprobado por:** Consultor
```

---

## 8. Formato estándar de reporte final

Cuando termines una tarea, reporta:

```
Hecho: [Qué se completó, módulos, requisitos cubiertos]
Archivos: [Lista de archivos tocados, máximo 5]
Verificación: [Resultado de scripts: ✅ todos pasan]
Falta información: [Bloqueadores, preguntas sin respuesta]
Necesito que decidas: [Decisiones pendientes, aprobaciones requeridas]
```

**Ejemplo:**
```
Hecho: M01 PRD completo (9 historias, 32 criterios de aceptación, CLI-001 a CLI-006, IAM-001 a IAM-003)
Archivos: docs/02-prd/modulos/M01-personas.md (417 líneas)
Verificación: ✅ node scripts/requisitos.mjs: Índice al día. ✅ node scripts/requisitos.mjs --cobertura docs/02-prd --prefijos CLI,IAM,PER: Cobertura completa.
Falta información: CLI-009 requiere decisión de Seguridad (¿Validar email con OTP?)
Necesito que decidas: ¿Apruebo M01 PRD? ¿Empieza M23 PRD (depende de decisión D-11)?
```

---

## 9. Escalada al rol superior

Si después de **dos intentos** algo no funciona:

1. Describe el problema exacto.
2. Indica qué intentaste.
3. Pasa al rol superior (DEC-014): Revisor (código) o Consultor (decisiones).

**Nunca:**
- Ignores un error esperando que se resuelva.
- Hagas workaround que debilite controles ("deshabilito esta prueba").
- Subas cambios que sabes están incompletos.

---

## 10. Glosario

| Término | Definición |
| --- | --- |
| **CA** | Criterio de aceptación (comprobable, Given-When-Then) |
| **DEC-###** | Decisión registrada en `DECISIONS.md` |
| **HU** | Historia de usuario ("Como X quiero Y para Z") |
| **ID** | Identificador de requisito (ej: CLI-001, IAM-002) |
| **RUC** | Registro Único de Contribuyente (Ecuador, 13 dígitos) |
| **M01, M23, …** | Módulo del producto (ej: M01 = Personas) |
| **Oleada** | Conjunto de módulos que se redactan/construyen juntos |
| **Requisito** | Qué el sistema DEBE hacer (fuente: levantamiento) |

---

## Historial de cambios

| Versión | Fecha | Cambios |
| --- | --- | --- |
| 1.0 | 2026-09-27 | Protocolo inicial: 5 fases, 10 secciones, templates PRD detallados, escalada, glosario |
