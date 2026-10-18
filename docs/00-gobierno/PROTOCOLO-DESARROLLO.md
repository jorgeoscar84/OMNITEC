# Protocolo de desarrollo · OMNITRONEC 360

**Versión:** 1.0 · **Fecha:** 18 oct 2026 · **Rige desde:** la fase F0 del [plan maestro](PLAN-MAESTRO.md) · **Decisiones:** DEC-014, DEC-020, DEC-023, DEC-024

Este documento dice **cómo se trabaja**: quién hace qué, por dónde pasa cada cambio y qué controles debe superar antes de entrar. El **qué** y el **cuándo** están en el plan maestro.

---

## 1. Los repositorios

| Repositorio | Qué es | Quién escribe |
| --- | --- | --- |
| **DeskcommCRM** (original, público) | Fuente de la plataforma. Lo seguimos por versión publicada | Nadie de nuestro lado. El envío está bloqueado en la copia local |
| **omnitronec-360** (privado, nuestro) | El producto: el código del original más lo nuestro. Es donde se programa | Agentes y desarrolladores, siempre por *pull request* |
| **OMNITEC** (este) | La especificación: levantamiento, PRD, decisiones, plan | Hasta F0.4. Después se traslada a `omnitronec-360/omnitronec/` con su historia y este queda archivado |

En `omnitronec-360` los remotos son dos: `origin` (nuestro, privado) y `upstream` (el original, solo lectura).

## 2. Principio rector: sumar sin romper el núcleo

El original recibe unos 200 cambios al día. Cada línea suya que modifiquemos es un conflicto potencial en cada actualización. Por eso:

1. **Lo nuestro vive en archivos nuevos**, en carpetas propias:
   - `omnitronec/`: especificación, plan y protocolo.
   - `lib/omx/`, `app/app/omx/`, `components/omx/` y `app/api/v1/omx/`: código de los módulos técnicos.
   - `tests/omx/`: pruebas.
   - `supabase/omnitronec/`: esquema propio.
2. **Los módulos con tablas propias siguen el camino oficial del original** (su ADR-0002: función provisionadora, tablas que nacen al instalar el módulo, protecciones de organización).
3. **Cambios de esquema (DEC-024):**
   - La migración va en `supabase/migrations/` con número del rango reservado **9000–9999** y la marca `omx` en el nombre (`AAAAMMDDHHMMSS_9001_omx_<qué>.sql`), con su línea `-- manifest:`.
   - Su apéndice idempotente va en `supabase/omnitronec/baseline-omx.sql`, **no** en `baseline.sql`.
   - Nuestro despliegue aplica los dos archivos en ese orden.
4. **Tocar el núcleo es la excepción.** Cuando no hay otra salida (por ejemplo, el modelo de varios roles de DEC-021):
   - el cambio se hace en la tarea más pequeña posible;
   - se anota en `omnitronec/NUCLEO-MODIFICADO.md` (archivo, motivo, tarea, cómo revertirlo);
   - si sirve a todos, se propone al original para no cargarlo solos.
5. **Las reglas del original rigen el código.** `AGENTS.md` y `CLAUDE.md` del original, con su receta de *route handler*, la triple de migraciones, la marca blanca, el multiempresa y su definición de terminado, no se discuten. Nuestras reglas se suman a las suyas, no las reemplazan.
6. **Español de Ecuador en pantalla**, a través del diccionario del original (`t()`). Nunca se escribe «Deskcomm» en nada que vea el usuario (su prueba `branding` lo bloquea). El código nuevo nuestro se escribe en español. Los archivos del original conservan su idioma.

## 3. Roles

Los roles son de trabajo, no de modelo (DEC-014). Qué modelo ocupa cada rol se configura en la herramienta y se revisa cada dos semanas.

| Rol | Quién | Hace | No hace |
| --- | --- | --- | --- |
| **Dueño del producto** | El consultor | Prioriza; aprueba levantamiento, PRD, arquitectura y cada entrega visible; decide lo que es del negocio | Programar |
| **Cliente y área técnica** | La empresa | Valida reglas, estados y valores iniciales (P-21, P-22); prueba en *staging* | — |
| **Arquitecto** | Modelo frontera | Redacta PRD y arquitectura; descompone en tareas; revisión final; resuelve fallos difíciles; actualiza desde el original | Programar tareas rutinarias |
| **Programador** | Modelo principal de código | Implementa una tarea a la vez, con prueba primero | Cambiar alcance, tocar archivos fuera de la tarea, aprobar su propio trabajo |
| **Simple** | Modelo económico | Tareas aisladas: pruebas, traducciones, datos semilla, documentación | Esquema, permisos, seguridad |
| **Revisor** | Modelo de **otra familia** que el Programador | Revisa cada PR con la lista de la sección 7; corre `/code-review` y, si aplica, `/security-review` | Corregir el PR que revisa |
| **QA** | Agente con navegador | Recorre la pantalla como un usuario, deja capturas y valida los criterios de aceptación | Dar por bueno sin evidencia |

Regla de escalamiento: si una tarea falla dos veces, sube al rol superior (Programador → Arquitecto → Dueño del producto). Nunca se insiste una tercera vez con el mismo enfoque.

## 4. Unidad de trabajo: la tarea

Cada tarea tiene un identificador `T-nnn` (permanente, nunca se reutiliza) y vive como *issue* en `omnitronec-360` dentro del tablero del proyecto.

**Lista para empezar** (*Definition of Ready*), todo debe cumplirse:

- Cita los requisitos que cubre (`LAB-020`…) y la historia del PRD aprobado (`HU-LAB-03`).
- Lista los criterios de aceptación que debe hacer pasar.
- Declara los archivos o carpetas que puede tocar y si toca el núcleo.
- Es pequeña: una historia o una pieza técnica. Si pasa de un día de trabajo de agente, se parte.
- No depende de algo sin terminar.

**Ciclo:** pendiente → lista → en curso → en revisión → aprobada → integrada.

## 5. El paso a paso de una tarea

1. **Leer** el `AGENTS.md` del original y el de `omnitronec/`, la tarea, la historia del PRD y los archivos que toca. Antes de usar una API de Next.js 16, leer su guía en `node_modules/next/dist/docs/`, como pide el original.
2. **Rama:** `git switch -c omx/T-nnn-descripcion-corta main`.
3. **Prueba primero:** escribir la prueba que falla para cada criterio de aceptación (unitaria al lado del código, invariante de base en `tests/omx/` si toca RLS, Playwright si toca pantalla).
4. **Código** mínimo que la hace pasar, con la receta del original: Zod, guard de rol, organización de fuente confiable, auditoría y `ok()`/`fail()`.
5. **Compuerta local:**
   - `pnpm gov:verify`
   - más `pnpm test:db` si tocó esquema
   - más `pnpm test:e2e` de las pruebas afectadas si tocó pantalla
   - más `node omnitronec/scripts/requisitos.mjs --check`
6. **Prueba visual** con la habilidad `run`: abrir la pantalla, recorrer el flujo completo y guardar capturas en la descripción del PR.
7. **Commit:** `[T-nnn] descripción corta (LAB-020, LAB-021)`, con las líneas de atribución que pida el entorno.
8. **PR** hacia `main` con la plantilla (sección 6). El CI debe quedar verde.
9. **Revisión** (sección 7): el Revisor aprueba o pide cambios; el Programador corrige en la misma rama.
10. **Aprobación del dueño del producto** si la tarea cambia algo visible.
11. **Integración** con *squash merge*; se borra la rama y se actualiza la tarea y `omnitronec/PROGRESS.md`.

## 6. Ramas, commits y PR

- `main` está protegida: solo entra por PR con CI verde y una aprobación. Nada de empujar directo ni forzar.
- Ramas: `omx/T-nnn-…` para tareas, `omx/sync-vX.Y.Z` para actualizaciones del original y `omx/hotfix-…` para urgencias.
- Etiquetas propias: `omx-vA.B.C` sobre `main` cuando se publica a producción. Nunca se reutiliza una etiqueta del original.
- La plantilla de PR del original se conserva. Nuestros PR agregan arriba: tarea, requisitos, criterios cubiertos, capturas, si toca el núcleo y si toca esquema.

## 7. Revisión

Lista del Revisor, que responde cada punto sí o no, con evidencia:

1. ¿Cada criterio de aceptación de la tarea tiene prueba y pasa?
2. ¿Algo del PR no sale de un requisito? Eso es alcance inventado.
3. ¿Respeta la receta del original (Zod, guard, organización de fuente confiable, auditoría, `ok`/`fail`)?
4. ¿Toda tabla nueva tiene `organization_id`, RLS y una prueba de aislamiento entre empresas?
5. ¿El esquema va con número 9xxx, `-- manifest:` y apéndice en `baseline-omx.sql`?
6. ¿Cada permiso se verificó con un usuario autorizado y uno no autorizado?
7. ¿Los textos están en español y pasan por `t()`? ¿Hay «Deskcomm» en pantalla?
8. ¿Hay dinero o impuestos calculados en el navegador? Deben calcularse en el servidor (LAB-015, COT-015).
9. ¿Toca el núcleo? ¿Está anotado en `NUCLEO-MODIFICADO.md`?
10. ¿Hay secretos, datos de clientes reales o direcciones internas en el diff?
11. ¿La pantalla contempla los ocho estados obligatorios del PRD?

Herramientas: `/code-review` siempre; `/security-review` si toca autenticación, permisos, RLS, secretos, archivos subidos o webhooks; `/simplify` antes de aprobar si el PR creció más de lo previsto.

## 8. Controles automáticos (CI)

El CI del original corre en nuestro repositorio privado y consume minutos de GitHub Actions. Se configura así (F0.3):

| Flujo del original | En nuestro repositorio |
| --- | --- |
| `ci.yml` (`verify`, `invariants`) | Activo. Es obligatorio |
| `e2e.yml` | Activo en PR que tocan pantallas. Es obligatorio |
| `perf.yml` (`build-and-size`) | Activo. Es obligatorio |
| `publish-image.yml`, `release.yml`, `relogio.yml`, `acolhida.yml`, `vigia-de-colisao.yml` | Desactivados desde la configuración de GitHub (sin editar los archivos, para no crear conflictos) |
| Nuestro `omx.yml` | Nuevo: requisitos, pruebas `tests/omx/` y aplicación de `baseline-omx.sql` sobre el `baseline.sql` |

## 9. Actualizar desde el original

**Cuándo:** con cada versión menor publicada, o como mínimo cada dos semanas. Nunca desde su `main`: solo desde etiquetas `vX.Y.Z`.

**Quién:** el Arquitecto, con el rol de integrador.

**Cómo:**

1. `git fetch upstream --tags` y leer su `CHANGELOG.md`, con atención a «⚠️ Requer atenção».
2. `git switch -c omx/sync-vX.Y.Z main && git merge vX.Y.Z`. Siempre *merge*, nunca *rebase*.
3. Resolver conflictos empezando por la lista de `NUCLEO-MODIFICADO.md`. Si una migración del original choca con una nuestra, se renumera la nuestra (dentro del rango 9xxx).
4. Correr toda la compuerta: `gov:verify`, `test:db`, `test:e2e` y `omx.yml`.
5. Abrir un PR y anotar en `omnitronec/SINCRONIZACIONES.md` la versión, los conflictos y las decisiones.

## 10. Datos, secretos y entornos

| Entorno | Para qué | Datos |
| --- | --- | --- |
| Local | Programar y probar | Supabase local (Docker) con datos ficticios |
| CI | Controles | Base efímera |
| *Staging* (VPS, Dokploy) | Que el cliente pruebe | Copia anonimizada |
| Producción (VPS, Dokploy) | Uso real | Reales, con respaldo nocturno fuera del VPS (DEC-013) |

- Nunca se abren ni se copian archivos `.env` (regla del original). Los secretos viven en el gestor de Dokploy y en los *secrets* de GitHub.
- Ningún dato real de clientes en pruebas, capturas ni PR.
- El agente no tiene acceso SSH a producción. Desplegar a producción exige aprobación escrita del dueño del producto.

## 11. Herramientas de cada rol

| Herramienta | Uso |
| --- | --- |
| Habilidades del original: `deskcomm-doutrina`, `sistema-vivo`, `deskcomm-extensao`, `deskcomm-contribuir` | Leerlas antes de programar; la de contribuir sirve para conflictos y PR |
| Agentes del original: `gov-implementer`, `gov-verifier` | Modelo para nuestros agentes `omx-programador` y `omx-revisor` |
| `/code-review`, `/security-review`, `/simplify` | Revisión (sección 7) |
| `run` | Prueba visual de cada pantalla |
| Agente `Plan` | El Arquitecto lo usa para descomponer un PRD en tareas |
| Agente `Explore` | Ubicar código del original antes de tocarlo |
| `session-start-hook` | Que las sesiones en la nube instalen dependencias y puedan correr pruebas (F0.5) |
| `omnitronec/scripts/requisitos.mjs` | Trazabilidad de requisitos y cobertura del PRD |

## 12. Definición de terminado

Una tarea está terminada cuando:

- Cumple la *Definition of Done* del `CLAUDE.md` del original.
- Todos los criterios de aceptación citados tienen prueba y pasan.
- El CI está verde y el Revisor aprobó.
- La prueba visual tiene capturas, si cambió pantalla.
- El dueño del producto aprobó, si es visible.
- No hay nada sensible en el diff.
- La tarea, `PROGRESS.md` y, si corresponde, `DECISIONS.md` y `NUCLEO-MODIFICADO.md` están al día.
