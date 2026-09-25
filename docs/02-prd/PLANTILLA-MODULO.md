# PRD · Mxx · [Nombre del módulo]

<!--
Plantilla del PRD por módulo (DEC-015). Reglas:
- Conserva los identificadores del levantamiento (XXX-001). No inventes identificadores de requisito nuevos:
  si falta un requisito, regístralo primero en el levantamiento y en DECISIONS.md.
- Cada criterio de aceptación debe poder comprobarse con una prueba automática o con un paso concreto en el navegador.
- Lo que falte se escribe en MAYÚSCULAS con el prefijo FALTA INFORMACIÓN (DEC-016).
- Borra estos comentarios al usar la plantilla.
-->

| | |
| --- | --- |
| **Estado** | Borrador · En revisión · Aprobado |
| **Versión y fecha** | 1.0 · AAAA-MM-DD |
| **Aprobado por** | Consultor: … · Cliente (reglas y estados): … |
| **Fuente** | `docs/01-levantamiento/modulos/Mxx-….md` — requisitos XXX-001 a XXX-0nn |
| **Fase de producto** | n |
| **Depende de** | Mxx, Myy |
| **Alimenta a** | Mzz |

## 1. Problema y resultado esperado

Qué problema de la operación actual resuelve el módulo y cómo se nota que quedó resuelto. Dos o tres frases, en lenguaje de negocio.

## 2. Alcance

### Dentro de este PRD

XXX-001, XXX-002, …

### Fuera o diferido

| ID | Motivo | Fase en que entra |
| --- | --- | --- |
| XXX-0nn | … | n |

## 3. Personas y escenarios

| Rol | Qué necesita de este módulo | Escenario típico |
| --- | --- | --- |
| … | … | … |

## 4. Flujo principal y excepciones

Flujo principal paso a paso, con el rol de cada paso. Después, cada excepción con su tratamiento: dato inválido, duplicado, falta de permiso, integración caída, conflicto de versión, sin conexión.

## 5. Historias y criterios de aceptación

### HU-XXX-01 · [Título corto]

- **Cubre:** XXX-001, XXX-004
- **Historia:** Como [rol] quiero [acción] para [beneficio].
- **Criterios de aceptación:**
  - **CA-XXX-01-1** · Dado [situación], cuando [acción], entonces [resultado verificable].
  - **CA-XXX-01-2** · Dado [caso de error], cuando [acción], entonces [mensaje o comportamiento exacto].
  - **CA-XXX-01-3** · Dado [usuario sin permiso], cuando [acción], entonces [la acción no está disponible o se rechaza y queda registro].

## 6. Máquina de estados

Solo si el módulo gestiona objetos con ciclo de vida. Toda transición no listada está prohibida.

| Estado actual | Evento o acción | Estado siguiente | Quién puede | Condiciones previas | Efectos |
| --- | --- | --- | --- | --- | --- |
| … | … | … | … | … | Evento de auditoría, notificación, reloj que inicia o pausa |

## 7. Reglas de negocio

- **RN-XXX-01** · Regla exacta, sin ambigüedad, con su requisito de origen.

## 8. Datos

### Entidades y campos

| Entidad | Campo | Tipo | Obligatorio | Validación | Origen del dato | Sensible |
| --- | --- | --- | --- | --- | --- | --- |
| … | … | texto, número decimal, fecha y hora UTC, identificador, lista del catálogo… | sí/no | … | captura, catálogo, cálculo en servidor, integración | sí/no |

### Relaciones

Cardinalidades, siempre por identificador (nunca por texto visible).

### Referencias externas

Qué identificadores externos admite cada entidad en modo integrado. Deben poder estar vacíos.

## 9. Permisos

| Acción | Entidad | Alcance | Condición | Roles |
| --- | --- | --- | --- | --- |
| Leer, crear, editar, exportar, aprobar… | … | propios, su equipo, su sede, todos | … | … |

## 10. Interfaz

### Pantallas

| Pantalla | Propósito | Acción primaria | Contenido | Dispositivo |
| --- | --- | --- | --- | --- |
| … | … | una sola | … | escritorio, tableta, móvil |

### Estados obligatorios

Para cada pantalla o componente: cargando, vacío con acción sugerida, error con vía de recuperación, sin permiso, deshabilitado con explicación, guardado, conflicto de versión, sin conexión.

### Accesibilidad y adaptación

Navegación por teclado, foco visible, estados con texto e icono (no solo color), movimiento reducido, comportamiento en tableta y móvil.

## 11. Auditoría y notificaciones

| Evento | Qué se registra | A quién se notifica | Canal |
| --- | --- | --- | --- |
| … | quién, cuándo, antes, después, motivo | … | … |

## 12. Integraciones

| Capacidad | Modo autónomo | Modo integrado | Si la integración falla |
| --- | --- | --- | --- |
| … | … | … | cola de excepciones, reintento, aviso visible |

## 13. Indicadores e instrumentación

Qué indicadores del documento 08 del levantamiento alimenta el módulo, con qué eventos y con qué ficha de indicador (BI-002).

## 14. Migración y datos iniciales

Qué datos se migran de la aplicación actual, qué plantillas de `data/semillas/` se cargan y cómo se concilia.

## 15. Pruebas de recorrido

Recorridos de extremo a extremo que la fase de pruebas debe automatizar en el navegador, escritos desde los criterios de aceptación.

## 16. Definición de terminado del módulo

- Todos los criterios de aceptación tienen prueba y pasan.
- La máquina de estados rechaza toda transición no listada.
- Los permisos se verificaron con al menos un usuario autorizado y uno no autorizado por acción.
- Funciona en modo autónomo.
- Revisión cruzada sin hallazgos abiertos.

## 17. FALTA INFORMACIÓN

- **FALTA INFORMACIÓN:** …

## Trazabilidad

| Requisito | Historias y criterios que lo cubren |
| --- | --- |
| XXX-001 | HU-XXX-01 (CA-XXX-01-1, CA-XXX-01-2) |
