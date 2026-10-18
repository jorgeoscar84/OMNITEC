# Registro de decisiones

Cada decisión del proyecto, con su motivo, para que ninguna persona ni ningún agente la revierta sin saber por qué se tomó. Se agregan al final; nunca se borran. Si una decisión cambia, se registra una nueva que la reemplaza y la anterior pasa a «Reemplazada por DEC-xxx».

**Estados.** *Aceptada*: vigente. *Propuesta*: recomendada, se ratifica en la fase indicada. *Ratificación pendiente*: vigente como base de trabajo, pero el cliente debe confirmarla.

Las **decisiones abiertas del producto** (D-01 a D-14) y los **insumos pendientes** (P-01 a P-20) viven en el levantamiento: [`docs/01-levantamiento/11-pendientes-decisiones-riesgos.md`](../01-levantamiento/11-pendientes-decisiones-riesgos.md). Aquí se registra lo ya decidido y las propuestas técnicas.

---

## DEC-001 · Desarrollo dirigido por especificaciones, por fases y con compuertas

- **Estado:** Aceptada · 25 sep 2026
- **Decisión:** El proyecto avanza por fases (levantamiento, PRD, arquitectura, plan de tareas, construcción por módulos, pruebas, QA, despliegue). Ninguna fase empieza sin que el documento de la anterior esté aprobado, y cada fase termina con algo verificable por una máquina o por el cliente, no con «el agente dice que terminó».
- **Motivo:** La construcción la harán agentes de IA dirigidos por una persona no programadora. Lo que no está escrito, el agente lo inventa.
- **Consecuencias:** El repositorio es la memoria del proyecto: `AGENTS.md`, `docs/` y los registros de decisiones y progreso. Ver [METODOLOGIA.md](METODOLOGIA.md).
- **Fuente:** Plan maestro, secciones 1 a 3.

## DEC-002 · El levantamiento y el PRD se organizan por módulo, con identificadores estables

- **Estado:** Aceptada · 25 sep 2026
- **Decisión:** Un archivo por módulo. Los identificadores de requisito (CLI-001, COT-012…) nunca se renumeran ni se reutilizan; los nuevos se agregan al final de su prefijo. El PRD conserva los identificadores del levantamiento.
- **Motivo:** Que un agente cargue solo el módulo que trabaja y que cada línea de código, prueba y criterio pueda rastrearse hasta el requisito y su fuente.
- **Consecuencias:** `scripts/requisitos.mjs` valida unicidad y formato, genera el índice y mide la cobertura del PRD.

## DEC-003 · Jerarquía de fuentes

- **Estado:** Aceptada · 25 sep 2026
- **Decisión:** Ante un conflicto prevalece, en este orden: (1) las transcripciones literales del cliente, con la regla de que una rectificación inequívoca posterior prevalece sobre lo dicho antes; (2) las notas y aclaraciones posteriores del cliente; (3) el levantamiento; (4) la auditoría de la aplicación actual; (5) la documentación de UpConta; (6) el plan maestro, que solo gobierna el método de trabajo y las recomendaciones técnicas, nunca el alcance funcional.
- **Excepción:** El principio de autonomía funcional (DEC-007) manda sobre los demás principios del producto, como fija el propio levantamiento.
- **Detalle:** [FUENTES.md](FUENTES.md).

## DEC-004 · Repositorio público: publicar solo contenido saneado

- **Estado:** Aceptada · 25 sep 2026
- **Contexto:** El repositorio de GitHub `jorgeoscar84/OMNITEC` es público. El levantamiento está clasificado como «uso interno y confidencial».
- **Decisión:** Mientras el repositorio sea público no se suben transcripciones, documentos originales del cliente, datos de clientes finales (incluidos los CSV del paquete de migración), hallazgos de seguridad de la aplicación en producción, direcciones de sistemas internos ni credenciales. Los documentos del repositorio son versiones saneadas.
- **Recomendación:** Hacer privado el repositorio. Después, las fuentes pueden agregarse en `fuentes/` para mejorar la trazabilidad.
- **Consecuencias:** `.gitignore` excluye `confidencial/` y `fuentes/`, además de documentos Word y audios, para guardar localmente material sensible sin riesgo de subirlo. Cuando el repositorio sea privado, se quita `fuentes/` de `.gitignore` y se suben las fuentes originales.

## DEC-005 · Sistema contable: UpConta

- **Estado:** Aceptada (levantamiento v3) · verificación técnica pendiente
- **Decisión:** El sistema contable es UpConta, integrado por su API REST.
- **Pendiente:** Toda capacidad atribuida a la API se leyó en su documentación pública para la v3 y no se pudo volver a verificar en la v4 (D-01, R-09).

## DEC-006 · La proforma comercial vive en OMNITRONEC 360

- **Estado:** Ratificación pendiente (D-11)
- **Decisión:** La proforma se arma, se versiona, se duplica entre sucursales y se envía desde la plataforma. Al aceptarse, en modo integrado se solicita la factura a UpConta; en modo autónomo se registra la venta y la emisión fiscal queda pendiente.
- **Motivo:** Según la documentación leída para la v3, UpConta no tiene la proforma entre sus comprobantes. Aun si su interfaz la tuviera, el versionado, la duplicación entre sucursales y el texto condicional por tipo de cliente exigen tenerla en la plataforma.
- **Por qué falta ratificar:** En T1 se afirmó que el sistema contable hace la proforma y la convierte en factura con un clic, y en T3 el cliente dejó la disyuntiva «para después».

## DEC-007 · Autonomía funcional por módulo; integraciones como adaptadores

- **Estado:** Aceptada (levantamiento, confirmada por el cliente)
- **Decisión:** Todo módulo funciona completo sin integraciones externas (modo autónomo, el modo con el que se construye). Las integraciones son adaptadores: el conector conoce el dominio, el dominio no conoce al conector. Activar o desactivar un conector es configuración.
- **Consecuencias:** En la v4 se corrigieron doce requisitos que suponían a UpConta siempre presente (ver `CAMBIOS-v4.md`, sección 3). La única excepción es legal: la factura electrónica autorizada ante el SRI solo la emite un sistema habilitado.

## DEC-008 · El «informe técnico» pasa a llamarse «proforma técnica»

- **Estado:** Aceptada · pedida por el cliente en T1
- **Decisión:** En la interfaz, los documentos y el código, el documento que resulta del diagnóstico se llama «proforma técnica».
- **Motivo:** «Lo que estamos haciendo es una proforma técnica» (T1).
- **Consecuencia:** La migración conserva el número y el nombre histórico de los informes ya emitidos (D-09).

## DEC-009 · PostgreSQL con extensiones geográfica y vectorial

- **Estado:** Propuesta · se ratifica en la fase de arquitectura
- **Decisión:** Base de datos PostgreSQL con extensión geográfica (PostGIS) para sitios, distancias y conflictos de frecuencia por zona, y extensión vectorial (pgvector) para la búsqueda semántica de los agentes.
- **Motivo:** El levantamiento exige consulta geográfica (sección 18.7; CAM-005; FREQ-007). El plan maestro solo previó la extensión vectorial.
- **A resolver en arquitectura:** Cómo maneja el ORM elegido los tipos geográficos y vectoriales. Es un criterio que puede inclinar la elección entre Prisma y Drizzle, que el plan maestro dejó abierta.

## DEC-010 · Documentos PDF desde plantillas HTML versionadas

- **Estado:** Propuesta · se ratifica en la fase de arquitectura
- **Decisión:** Las plantillas de documentos (proforma, proforma técnica, actas, cartas, certificados, catálogo) se guardan como HTML versionado en la base de datos y se convierten a PDF en el servidor con un navegador sin interfaz. Se descarta la librería de componentes compilados que proponía el plan maestro.
- **Motivo:** El levantamiento exige plantillas editables sin desplegar software (COT-001, sección 18.7) y que los agentes de IA puedan crear o modificar plantillas (IA-010). Una plantilla compilada en el código no cumple ninguna de las dos cosas.

## DEC-011 · Stack de partida: el del plan maestro, sujeto a las condiciones del levantamiento

- **Estado:** Propuesta · se ratifica en la fase de arquitectura
- **Decisión de partida:** Aplicación única y modular en Next.js con TypeScript, Tailwind CSS y shadcn/ui; PostgreSQL; autenticación propia alojada en el servidor (Better Auth); cola de trabajos sobre PostgreSQL (pg-boss); pruebas con Vitest y Playwright; despliegue en el VPS con Dokploy.
- **Condiciones que la arquitectura debe comprobar antes de ratificar:** doble factor nativo e identidades de servicio (IAM-002, IAM-011); tipos geográficos y vectoriales en el ORM (DEC-009); generación de PDF desde HTML (DEC-010); modo sin conexión en campo (CAM-013); análisis antivirus de archivos (DOC-008); recepción de notificaciones de WhatsApp y correo (DEC-012). Ver sección 18.8 del documento 13 del levantamiento.

## DEC-012 · Canales de mensajería y correo

- **Estado:** Propuesta · la decisión final es del cliente (D-08, P-13)
- **WhatsApp:** API oficial de WhatsApp Business (Cloud API de Meta), con al menos dos números: uno de marketing y captación, otro de atención a clientes (MKT-009). Se descartan las soluciones no oficiales porque un número bloqueado deja a la empresa sin canal y sin apelación.
- **Correo:** campañas, secuencias y plantillas se gestionan dentro de la plataforma (MKT-017) y el envío se delega a un servicio especializado por API o SMTP, con dominio autenticado. Opción preferente: Amazon SES, que el cliente mencionó (T2) y que cobra por volumen. Alternativa: Resend, la que proponía el plan maestro. No enviar correo masivo desde el propio VPS.
- **Sin verificar:** tarifas vigentes de ambos servicios y de los mensajes de WhatsApp en Ecuador.

## DEC-013 · Despliegue en el VPS propio con Dokploy

- **Estado:** Propuesta (plan maestro) · se ratifica en la fase de arquitectura
- **Decisión:** Un proyecto en Dokploy con dos entornos separados, *staging* y producción, cada uno con su base de datos; despliegue automático de `main` a *staging* y a producción solo con aprobación; copias de seguridad nocturnas a un almacenamiento S3 externo, con restauración probada antes de salir a producción; el agente de IA sin acceso SSH a producción.

## DEC-014 · Modelos de IA para construir el software: por rol, no por nombre

- **Estado:** Aceptada · 25 sep 2026
- **Decisión:** Los documentos del repositorio asignan trabajo a **roles**: *Arquitecto* (modelo frontera, para PRD, arquitectura, revisión final y depuración difícil), *Programador* (modelo chino principal), *Simple* (modelo chino económico, para tareas aisladas y pruebas) y *Revisor* (modelo de una familia distinta a la del Programador). Qué modelo ocupa cada rol se configura en la herramienta del agente, siguiendo la tabla del plan maestro.
- **Motivo:** Precios y modelos cambian en semanas; el plan maestro recomienda revisarlos cada dos semanas. Si el repositorio nombra roles, cambiar de modelo no obliga a tocar el proyecto.
- **Regla de escalamiento:** Si una tarea falla dos veces, se escala al rol superior en lugar de insistir.

## DEC-015 · Formato del PRD

- **Estado:** Aceptada · 25 sep 2026
- **Decisión:** Un archivo por módulo en `docs/02-prd/modulos/`, con la plantilla de [`docs/02-prd/PLANTILLA-MODULO.md`](../02-prd/PLANTILLA-MODULO.md): criterios de aceptación en formato Dado / Cuando / Entonces, máquina de estados completa, permisos, datos, interfaz, eventos e indicadores. Cada archivo cita los identificadores del levantamiento que cubre.
- **Compuerta:** `node scripts/requisitos.mjs --cobertura docs/02-prd` no debe listar ningún requisito de los módulos del lanzamiento en curso.
- **Compatibilidad:** Cada archivo de módulo del PRD puede convertirse sin reescritura en la especificación de una funcionalidad de Spec Kit en la fase de construcción.

## DEC-016 · Lo que falta se escribe en MAYÚSCULAS

- **Estado:** Aceptada · pedida por el cliente en T3
- **Decisión:** Todo apartado que requiere información adicional se escribe en MAYÚSCULAS con el prefijo **FALTA INFORMACIÓN**, en el levantamiento y en el PRD.

## DEC-017 · Catálogos vacíos en el producto y cargados desde plantillas semilla

- **Estado:** Aceptada · T3 y T4 (ADM-014)
- **Decisión:** El producto no trae datos de negocio fijos. Cada catálogo tiene plantilla de importación y exportación, y la implementación lo carga desde `data/semillas/` con los datos del levantamiento. Tras la carga, todo es editable, desactivable y ampliable.

## DEC-018 · Paneles a petición mediante una capa semántica de indicadores

- **Estado:** Propuesta · se ratifica en la fase de arquitectura
- **Decisión:** El agente que construye paneles en lenguaje natural elige indicadores y dimensiones de un catálogo con definiciones versionadas (BI-002) y los permisos se aplican antes de consultar. No se genera SQL libre.
- **Motivo:** Es la única forma de cumplir IA-014 (nunca exceder los permisos del solicitante) e IA-015 (toda cifra muestra su definición) sin depender del cuidado del modelo.

## DEC-019 · Orden de los ciclos del primer lanzamiento

- **Estado:** Reemplazada por DEC-025 (18 oct 2026)
- **Recomendación:** Ciclo comercial (fase 2) antes que el técnico (fase 3). La aplicación técnica actual sigue operando mientras tanto; el área comercial hoy no tiene ninguna herramienta. Invertir el orden es posible sin rehacer nada.

## DEC-020 · Base de partida: copia propia de DeskcommCRM

- **Estado:** Propuesta · el consultor aceptó construir sobre esta base (18 oct 2026); se ratifica en la fase de arquitectura
- **Decisión:** OMNITRONEC 360 parte de una copia propia y privada del repositorio original de DeskcommCRM (licencia MIT), actualizada por versión publicada. No se usa la copia atiendo-crm. La parte técnica (M13 a M20) y el conector de UpConta se construyen como módulos con tablas propias, por el camino de módulos del original (sus ADR-0002 y ADR-0005).
- **Motivo:** Licencia sin obligaciones de publicar ni funciones de pago; tecnología moderna; ya cubre total o parcialmente el 49 % de los requisitos, el 69 % de los comerciales (M01–M12). El original tiene más español que atiendo-crm y sigue activo; la copia quedó congelada en septiembre y su numeración de cambios de base de datos choca con la del original. Detalle en [`evaluaciones/EVALUACION-BASE-DESKCOMM.md`](evaluaciones/EVALUACION-BASE-DESKCOMM.md).
- **Reemplaza en parte:** DEC-011 (autenticación y cola de trabajos pasan a ser las del original). **Ajusta:** DEC-012 (se desactiva WAHA; WhatsApp por la API oficial o Zernio). **Queda abierto:** DEC-010 (el original genera PDF con componentes compilados; las plantillas editables de COT-001 e IA-010 siguen siendo requisito).
- **Condición:** Antes del primer módulo técnico, la instalación en el VPS debe demostrar instalación y actualización sin pérdida de datos, interfaz en español, un mensaje real por canal oficial y un módulo de prueba con tabla propia.

## DEC-021 · Varios roles por usuario y permisos por capacidad

- **Estado:** Propuesta · pedida por el consultor (18 oct 2026); se ratifica en el PRD de M01
- **Decisión:** Un usuario puede tener varios roles a la vez, y sus permisos efectivos son la suma de los roles asignados. Los roles base de IAM-004 son plantillas de permisos; un administrador puede además activar o quitar capacidades sueltas por usuario (por ejemplo «recepción de equipos» y «facturación» en la misma persona), siempre dentro del modelo por acción, entidad, alcance y condición de IAM-005, con el acceso económico separado (IAM-006) y con auditoría y motivo en todo cambio (IAM-007).
- **Motivo:** En la práctica una misma persona cubre funciones de varias áreas: quien recibe equipos también lleva facturación y temas contables. Un rol único obligaría a crear un rol a la medida por persona.
- **Consecuencia:** Agranda la brecha con DeskcommCRM, que asigna un solo rol por organización ordenado por rango (DEC-020, sección 4 de la evaluación). El modelo de permisos se diseña antes de la parte técnica.

## DEC-022 · Reglas de cobro y plazos de garantía configurables

- **Estado:** Aceptada · decidida por el consultor (18 oct 2026)
- **Decisión:** Ningún plazo de garantía ni regla de cobro se fija en el código. Las garantías se configuran con plazo, unidad (días calendario, días laborables, meses, años) y alcance (GAR-001, GAR-014). Las reglas de cobro de la orden (qué se cobra en garantía, en baja técnica y qué estados de línea suman) también se configuran (LAB-026). Cada documento emitido congela la regla vigente.
- **Valores iniciales:** 60 días laborables en repuestos instalados (aplicación actual) y 90 días en reparación (GAR-013), cargados como semillas en `data/semillas/tipos-garantia.csv` y pendientes de confirmación del área técnica (P-22).

## DEC-023 · Repositorio de código propio, privado, que sigue al original por versión

- **Estado:** Aceptada · consultor (18 oct 2026)
- **Decisión:** El producto vive en un repositorio privado nuevo, `omnitronec-360`, creado desde DeskcommCRM v1.85.0 con su historia completa. El original queda como remoto `upstream`, de solo lectura (el envío está bloqueado), y se incorpora por etiqueta publicada con *merge*, nunca con *rebase* ni desde su `main`. La especificación de este repositorio se traslada a `omnitronec-360/omnitronec/` conservando su historia.
- **Motivo:** Un *fork* de GitHub de un repositorio público no puede ser privado, y el proyecto maneja información confidencial (DEC-004). Seguir por versión publicada da actualizaciones probadas sin la inestabilidad de unos 200 cambios diarios.
- **Detalle:** [PROTOCOLO-DESARROLLO.md](PROTOCOLO-DESARROLLO.md), secciones 1, 2 y 9.

## DEC-024 · Capa propia separada del núcleo, incluido el esquema

- **Estado:** Propuesta · se ratifica en la fase F1 (arquitectura)
- **Decisión:** El código propio vive en archivos y carpetas nuevos (`omnitronec/`, `lib/omx/`, `app/app/omx/`, `tests/omx/`). Las migraciones propias usan el rango reservado 9000–9999 con `omx` en el nombre, y su apéndice idempotente va en `supabase/omnitronec/baseline-omx.sql`, que nuestro despliegue aplica después del `baseline.sql` del original. Cada modificación del núcleo se registra en `omnitronec/NUCLEO-MODIFICADO.md`.
- **Motivo:** El propio original midió en sus 1.029 copias públicas que el costo real de mantener una copia es el trabajo de *merge* y la renumeración de migraciones (su ADR-0005). Separar la capa reduce los conflictos de cada actualización a la lista del registro.

## DEC-025 · El ciclo técnico va primero

- **Estado:** Aceptada por el consultor (18 oct 2026) · informar al cliente (D-12)
- **Decisión:** El primer lanzamiento construye la base compartida (T0) y la paridad técnica (T1) sobre DeskcommCRM. Lo comercial arranca con lo que la base ya trae y se completa en la fase F7.
- **Motivo:** La base ya resuelve buena parte de lo comercial (DEC-020, evaluación de cobertura), mientras que lo técnico no existe en ella y el área técnica depende hoy de una aplicación frágil.
- **Reemplaza:** la recomendación de DEC-019.

## DEC-026 · Automatización externa con n8n por la API de la plataforma

- **Estado:** Propuesta · se diseña en F1 y se construye en F8
- **Decisión:** n8n se conecta por la API `/api/v1` con tokens de servicio (IAM-011), los webhooks de entrada y los webhooks de salida firmados del original, que traen un identificador de entrega para deduplicar. Ningún módulo depende de n8n para funcionar (DEC-007): n8n solo automatiza.
