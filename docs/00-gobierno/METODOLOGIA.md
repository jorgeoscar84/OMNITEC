# Metodología de trabajo

Cómo se construye OMNITRONEC 360 con agentes de IA, fase por fase, y cómo se evita que los agentes inventen, olviden requisitos o rompan lo que ya funciona. Resume y adapta el plan maestro (ver [FUENTES.md](FUENTES.md)). Las reglas operativas para los agentes están en [`AGENTS.md`](../../AGENTS.md).

## 1. Fases y compuertas

Una fase no empieza hasta que la anterior pasa su compuerta. La compuerta la verifica una máquina (un script, una prueba) o el cliente; nunca basta con que el agente diga que terminó.

| Fase | Objetivo | Entregable en el repositorio | Compuerta para pasar a la siguiente | Rol principal |
| --- | --- | --- | --- | --- |
| **0. Levantamiento** ← *estamos aquí* | Saber qué necesita el cliente, sin ambigüedades | `docs/01-levantamiento/` (v4) | Lista de aprobación del [README del levantamiento](../01-levantamiento/README.md) completa | Arquitecto |
| **1. PRD** | Convertir cada requisito en comportamiento verificable | `docs/02-prd/` | Cada módulo del lanzamiento con criterios Dado / Cuando / Entonces y máquina de estados; `node scripts/requisitos.mjs --cobertura docs/02-prd` sin faltantes para esos módulos; revisión cruzada; alcance firmado por el cliente | Arquitecto + Revisor |
| **2. Arquitectura** | Decidir stack, modelo de datos, permisos y estructura del código | `docs/03-arquitectura/` (arquitectura, modelo de datos, convenciones) y DEC ratificadas | Ninguna historia del PRD sin entidad o contrato que la soporte; DEC-009 a DEC-013 ratificadas o reemplazadas; revisión cruzada | Arquitecto + Revisor |
| **3. Plan de tareas** | Partir el trabajo en tareas atómicas ordenadas por dependencia | Tareas por módulo (formato de Spec Kit) | Cada tarea toca como máximo 5 archivos, cita sus requisitos, tiene criterio de hecho y prueba asociada | Programador, revisado por Arquitecto |
| **4. Construcción por módulos** | Programar tarea por tarea, en el orden de fases del documento 10 | Código, pruebas, commits por tarea | Todas las tareas del módulo en verde y el módulo desplegado en *staging* | Programador y Simple |
| **5. Pruebas de recorrido** | Probar flujos completos como un usuario | Pruebas de navegador | Los flujos del documento 05 pasan sin intervención | Simple, revisado por Revisor |
| **6. QA y pulido visual** | Diseño, accesibilidad, textos, estados vacíos y de error | Correcciones | Revisión visual sin pendientes graves; el cliente probó en *staging* | Programador |
| **7. Despliegue** | Producción con dominio, SSL, respaldos y monitoreo | Configuración en Dokploy | Se restauró un respaldo en un entorno de prueba | Arquitecto |
| **8. Mantenimiento** | Correcciones y mejoras en ciclos cortos | Registro de cambios | — | Según la tarea |

Las fases de construcción (4 a 7) se recorren una vez por cada fase de producto del [documento 10](../01-levantamiento/10-fases-y-entregas.md): primero plataforma y cliente 360, luego CRM comercial, luego operación técnica, y así sucesivamente, con una entrega demostrable al final de cada una.

## 2. Roles de modelo

El trabajo se asigna a roles, no a modelos concretos (DEC-014). La asignación de modelos y precios vigentes está en el plan maestro y se configura en la herramienta del agente; se revisa cada dos semanas.

| Rol | Para qué | Cuándo vale la pena pagar más |
| --- | --- | --- |
| **Arquitecto** | Levantamiento, PRD, arquitectura, modelo de datos, revisión final antes de producción y errores que resisten dos intentos | Siempre en estas tareas: un error aquí lo heredan todos los módulos |
| **Programador** | Código con dependencias entre módulos: órdenes, inventario, permisos, integraciones | — |
| **Simple** | Pantallas y formularios aislados, pruebas, documentación | Nunca |
| **Revisor** | Revisión cruzada de cada módulo contra el PRD y el modelo de datos | Debe ser de una familia de modelos distinta a la del Programador: modelos distintos fallan en cosas distintas |

**Escalamiento:** si una tarea falla dos veces, pasa al rol superior. Insistir con el mismo modelo es lo que gasta tokens en bucles.

## 3. Protocolo anti-alucinación en las fases de documentos (levantamiento y PRD)

1. **Toda afirmación nueva cita su fuente**: la grabación (T1 a T4), el identificador de requisito o la decisión (D-xx, DEC-xxx).
2. **Nada se inventa.** Lo que falta se escribe en MAYÚSCULAS con el prefijo FALTA INFORMACIÓN y se suma al documento 11 del levantamiento.
3. **Los identificadores son estables.** Nunca se renumeran ni se reutilizan; los nuevos se agregan al final de su prefijo (DEC-002).
4. **Un módulo por sesión.** El agente carga `AGENTS.md`, `PROGRESS.md`, el archivo del módulo y lo que este cite; nada más.
5. **El script manda.** Antes de cada commit se ejecuta `node scripts/requisitos.mjs`; si falla, no hay commit. En la fase PRD se añade `--cobertura docs/02-prd`.
6. **Revisión cruzada.** Cada módulo del PRD lo revisa un modelo de otra familia contra el levantamiento, con la pregunta: «¿qué requisito no tiene criterio verificable, y qué criterio no sale de ningún requisito?».
7. **Los cambios de alcance se registran.** Cualquier cambio respecto del levantamiento aprobado entra como decisión en `DECISIONS.md` con su motivo y su aprobación.

## 4. Protocolo en la fase de construcción

Resumen del plan maestro; las reglas exactas estarán en `AGENTS.md` cuando la arquitectura esté aprobada.

1. **Tareas atómicas**: como máximo 5 archivos y 15 líneas de descripción; si no cabe, se parte.
2. **Orden**: base de datos y permisos, luego lógica de negocio, luego interfaz.
3. **Prueba primero**: el agente escribe la prueba que falla y después el código que la hace pasar.
4. **Compuerta automática**: un solo comando (`pnpm verify`: tipos, estilo y pruebas) antes de cada commit.
5. **Un commit por tarea**, citando la tarea y los requisitos.
6. **Revisión cruzada** por el Revisor al terminar cada módulo.
7. **Definición de hecho**: criterios del PRD cubiertos y probados, compuerta en verde, sin `TODO` ni datos falsos, progreso y tareas actualizados.
8. **Aislamiento entre módulos**: se comunican solo por sus servicios públicos, nunca leyendo tablas ajenas; las pruebas de los módulos anteriores corren siempre.
9. **Documentación vigente de librerías** consultada con Context7 antes de usar una API que el agente no conozca.
10. **Ante la duda, detenerse**: la pregunta va a `PROGRESS.md` y el agente para.

## 5. Herramientas previstas para la construcción

Recomendación del plan maestro, a instalar cuando empiece la fase 4: VS Code con Kilo Code (o su alternativa, OpenCode), conectado a OpenRouter con tope de gasto; Spec Kit para especificaciones y tareas; Context7 para documentación de librerías; Playwright MCP para probar en el navegador; Impeccable como skill de diseño. El repositorio no depende de ninguna de ellas: todo el conocimiento del proyecto vive en archivos, de modo que cambiar de agente es cambiar de programa. Solo se instalan skills desde su repositorio oficial y después de revisarlas.

## 6. Intervención humana

El consultor no necesita leer código. Su trabajo es: validar el alcance con el cliente, aprobar cada documento de fase, probar cada entrega como si fuera usuario y decidir cuando un agente se detiene con una pregunta. Antes de la primera salida a producción conviene pagar una revisión puntual de seguridad a un desarrollador humano (plan maestro, riesgos).
