# Fase 1 · PRD

**Estado: no iniciada.** Empieza cuando se cumpla la sección A de la sección 16.2 del levantamiento: v4 aprobada, taller 1 con el cliente y decisiones D-11, D-12 y D-14 tomadas.

## Objetivo

Convertir cada requisito del levantamiento en comportamiento verificable: historias con criterios de aceptación que una prueba pueda comprobar, máquinas de estado completas, permisos al detalle de cada acción, datos, pantallas, eventos e indicadores. Lo que el PRD no diga, los agentes lo inventarán en la construcción.

## Qué se produce

| Archivo | Contenido |
| --- | --- |
| `PRD.md` | Documento general y breve: objetivo del lanzamiento, roles, reglas transversales (auditoría, versionado, estados de interfaz, idioma, zona horaria, dinero), requisitos no funcionales con cifras medibles y enlaces al levantamiento. No repite lo que ya está en el levantamiento |
| `modulos/Mxx-nombre.md` | Un archivo por módulo, con la [plantilla](PLANTILLA-MODULO.md). Conserva los identificadores del levantamiento (DEC-002, DEC-015) |

## Orden de redacción: por oleadas y por dependencias

Escribir el PRD de los 24 módulos antes de programar retrasaría la primera demostración varios meses. Se trabaja en dos oleadas:

- **Oleada 1 — primer lanzamiento (fases 1 a 3).** Se redacta completa antes de la arquitectura. La arquitectura diseña el modelo de datos con esta oleada **y** con el modelo conceptual completo del levantamiento (documento 06), para que las fases 4 y 5 solo llenen lo que ya existe y nada se rehaga.
- **Oleada 2 — fases 4 y 5.** Se redacta mientras se construye el primer lanzamiento.

Dentro de cada fase, el orden sigue las dependencias del [mapa de módulos](../01-levantamiento/04-mapa-de-modulos.md):

| Fase de producto | Orden de redacción |
| --- | --- |
| 1 · Plataforma y cliente 360 | `PRD.md` → M01 → M23 → M12 → M02 → M10 |
| 2 · CRM comercial | M06 → M03 → M08 → M09 → M04 → M11 (proforma y carta) → M21 (paneles operativos) → M22 (núcleo y redacción) → INT (lectura) |
| 3 · Operación técnica | M18 → M20 → M13 → M14 → M15 (sin portal) → M11 (proforma técnica) → INT (escritura) |
| 4 · Postventa, campo e infraestructura | M16 → M17 → M19 → M05 |
| 5 · Marketing, analítica e IA | M07 → M21 (gerencial y paneles a petición) → M22 (resto de agentes) → M15 (portal) |

Si el cliente decide construir primero el ciclo técnico (D-12), se intercambian las filas 2 y 3.

## Protocolo por módulo

1. **Preparar.** Leer el módulo del levantamiento completo, los módulos de los que depende, los flujos del documento 05 en los que participa y sus pendientes. Si un pendiente bloquea el PRD del módulo (sección 16.2, apartado B), detenerse y avisar.
2. **Redactar** con la plantilla. Cada requisito del módulo termina en al menos un criterio de aceptación, o en la sección «Fuera o diferido» con el motivo y la fase.
3. **Verificar con el script.** `node scripts/requisitos.mjs --cobertura docs/02-prd` no debe listar requisitos del módulo.
4. **Revisión cruzada** por el rol Revisor (DEC-014), con la lista de abajo. Sus hallazgos se corrigen o se registran como pendientes.
5. **Revisión del consultor**, en lenguaje de negocio: ¿así trabaja la empresa?
6. **Validación del cliente** de las reglas de negocio y los estados, cuando el módulo los tenga.
7. **Marcar como aprobado** en el encabezado del archivo y registrar la entrada en `PROGRESS.md`.

## Lista de la revisión cruzada

- ¿Hay algún requisito del levantamiento sin criterio de aceptación ni motivo de diferimiento?
- ¿Hay algún criterio que no salga de ningún requisito? (alcance inventado)
- ¿Algún criterio es imposible de comprobar con una prueba? («rápido», «intuitivo», «adecuado»)
- ¿La máquina de estados cubre todos los estados, quién dispara cada transición y qué pasa si alguien intenta una transición no permitida?
- ¿Cada acción tiene su permiso con acción, entidad, alcance y condición?
- ¿Se definió qué pasa en modo autónomo y qué pasa si la integración falla (DEC-007)?
- ¿Toda pantalla contempla los estados obligatorios (carga, vacío, error, sin permiso, deshabilitado, guardado, conflicto de versión, sin conexión)?
- ¿Se respetan las reglas de interconexión del mapa de módulos (sección 6.6) que tocan a este módulo?
- ¿Quedó algo con «FALTA INFORMACIÓN» que en realidad bloquea la construcción?

## Compuerta de salida de la fase

- Oleada 1 completa y aprobada por el consultor.
- `node scripts/requisitos.mjs --cobertura docs/02-prd` sin faltantes de los módulos del primer lanzamiento.
- Estados y reglas de negocio validados por el cliente.
- Alcance del primer lanzamiento firmado por el cliente.
