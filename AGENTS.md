# Reglas de trabajo para agentes · OMNITRONEC 360

## Quién eres y para quién trabajas

Trabajas en OMNITRONEC 360, la plataforma de CRM y servicio técnico de una empresa ecuatoriana que vende, renta, instala y repara radios de comunicación (Motorola, Kenwood y otros) y otros equipos. Quien te dirige es un consultor que **no es programador**: explícale en español simple, sin jerga, qué hiciste y qué necesita decidir.

## Fase actual

**Fase 0 · Levantamiento, en aprobación.** Siguiente: fase 1, PRD. Todavía no hay código ni stack aprobado: no crees código de la aplicación hasta que exista `docs/03-arquitectura/` aprobado. Las fases y sus compuertas están en `docs/00-gobierno/METODOLOGIA.md`.

## Reglas que nunca se rompen

1. **No inventes.** Si falta un dato, una regla o un requisito, escríbelo en MAYÚSCULAS con el prefijo `FALTA INFORMACIÓN`, anótalo en `docs/00-gobierno/PROGRESS.md` y detente.
2. **Cita siempre la fuente**: identificador de requisito (`CLI-018`), decisión (`D-11`, `DEC-006`) o grabación (T1 a T4).
3. **Los identificadores son permanentes.** No renumeres ni reutilices ninguno. Un requisito nuevo va al final de su prefijo, con origen y prioridad.
4. **Haz solo la tarea asignada** y toca solo los archivos que la tarea permite. No agregues alcance que no esté en el levantamiento o el PRD aprobados.
5. **El repositorio es público.** Nunca subas credenciales, direcciones de sistemas internos, transcripciones, datos de clientes finales (nombres, RUC, teléfonos, correos, frecuencias) ni detalles de seguridad de la aplicación actual. Lo sensible va en `confidencial/`, que está excluido de git.
6. **Respeta la autonomía funcional**: ningún módulo depende de UpConta ni de otro sistema externo para funcionar (DEC-007).
7. **Nunca ejecutes comandos que borren datos, toquen producción o modifiquen servidores** sin aprobación escrita del consultor.
8. **No debilites los controles**: no desactives un chequeo, una prueba ni una regla para que algo «pase».

## Al empezar cada sesión, lee solo esto

1. Este archivo.
2. `docs/00-gobierno/PROGRESS.md` (qué se hizo y qué falta).
3. La tarea asignada y el archivo del módulo que la tarea cita.

Lo demás se lee bajo demanda. Las decisiones vigentes están en `docs/00-gobierno/DECISIONS.md`: consúltalas antes de proponer algo que parezca contradecirlas.

## Mapa del repositorio

| Ruta | Contenido |
| --- | --- |
| `docs/00-gobierno/` | Metodología, fuentes, decisiones (DEC) y diario de progreso |
| `docs/01-levantamiento/` | Levantamiento v4: capítulos, `modulos/M01…M23`, pendientes (D, P, R), cobertura de transcripciones, índice de requisitos |
| `docs/02-prd/` | PRD por módulo (fase 1): plantilla y plan de la fase |
| `data/semillas/` | Plantillas CSV para cargar los catálogos (DEC-017) |
| `scripts/requisitos.mjs` | Valida requisitos, genera el índice y mide la cobertura del PRD |

## Protocolo para trabajo con documentos (fases 0 y 1)

1. Di en tus palabras qué vas a hacer, qué módulo e identificadores cubre y qué archivos vas a tocar.
2. Lee el módulo del levantamiento completo y los documentos que cite (flujos, modelo conceptual, integraciones, pendientes).
3. Redacta con la plantilla que corresponda (`docs/02-prd/PLANTILLA-MODULO.md` en la fase PRD). Cada criterio de aceptación debe poder comprobarse con una prueba.
4. Ejecuta `node scripts/requisitos.mjs` (y en la fase PRD, `node scripts/requisitos.mjs --cobertura docs/02-prd`). Si falla, corrige antes de seguir.
5. Registra en `docs/00-gobierno/DECISIONS.md` cualquier decisión nueva y en el documento 11 del levantamiento cualquier pendiente nuevo.
6. Actualiza `docs/00-gobierno/PROGRESS.md` con tres líneas: qué hiciste, qué falta, qué debe decidir el consultor.
7. Un commit por módulo o por tarea, con mensaje en español que cite los identificadores.

## Protocolo para trabajo con código (desde la fase 4)

Se activa cuando la arquitectura esté aprobada; los comandos exactos se agregarán aquí entonces.

1. Repite qué vas a hacer, qué requisitos cubre y qué archivos tocarás (máximo 5).
2. Consulta la documentación vigente de cada librería antes de usar una función que no conozcas.
3. Escribe primero la prueba que falla y luego el código que la hace pasar.
4. Ejecuta la compuerta de verificación (tipos, estilo y pruebas). Debe terminar sin errores.
5. Si la tarea toca pantallas, recórrelas en el navegador y comprueba el flujo completo.
6. Un commit por tarea: `[TAREA-nnn] descripción corta (IDs de requisitos)`.
7. Marca la tarea como hecha y actualiza `PROGRESS.md`.

## Definición de hecho

- Los criterios de aceptación de los requisitos citados se cumplen y, en código, tienen prueba.
- `node scripts/requisitos.mjs` pasa; en código, también la compuerta de verificación.
- No rompiste nada de otros módulos ni cambiaste archivos fuera de los permitidos.
- Textos de la interfaz y de los documentos en español de Ecuador.
- `PROGRESS.md`, y si corresponde `DECISIONS.md` y el documento 11, actualizados.
- Nada sensible en el diff (regla 5).

## Si algo falla

- Intenta corregirlo hasta dos veces. A la tercera, detente, describe el problema y pide escalar al rol superior (DEC-014).
- Si encuentras una contradicción entre documentos, no elijas tú: regístrala como decisión abierta y pregunta.

## Formato de tu reporte final

**Hecho:** … · **Archivos:** … · **Verificación:** resultado de los scripts · **Falta información:** … · **Necesito que decidas:** …
