# Evaluación · DeskcommCRM como base de OMNITRONEC 360

**Fecha:** 18 oct 2026 · **Pedida por:** el consultor · **Decisión relacionada:** DEC-020 (propuesta) · **Tabla completa:** [`cobertura-deskcomm.csv`](cobertura-deskcomm.csv)

## 1. Qué se evaluó

Dos repositorios con el mismo código de origen:

| | **DeskcommCRM** (original) | **atiendo-crm** (copia) |
| --- | --- | --- |
| Autor | Rafael Melgaço (Brasil) y comunidad | Una persona («Manuel») |
| Licencia | MIT | MIT (conserva la del original) |
| Historia | 12.781 commits, 113 versiones publicadas; última versión v1.85.0 del 17 oct 2026 | 4 commits; la historia se aplastó en uno solo |
| Actividad | 9.438 commits desde el 1 sep 2026; varios colaboradores | Copia tomada hacia el 27 sep 2026 y sin seguimiento |
| Tamaño | ≈ 527.000 líneas de TypeScript, 523 cambios de base de datos | ≈ 395.000 líneas, 372 cambios de base de datos |
| Español en pantalla | **7.945 textos traducidos**, más una prueba automática (`i18n-espanhol-cobre-a-tela`) que impide publicar una pantalla con texto en portugués sin traducir | 6.256 textos traducidos, sin esa prueba |
| Módulos que la copia no tiene | Empresas, personas, **proformas** (`proposals`), importaciones, honorarios, plataforma de módulos (ADR-0002 y ADR-0005), guía de marca blanca en español | — |
| Lo único propio de la copia | — | Guion de demostración local, plantillas de instrucciones del agente en español, idioma por defecto de la instalación y tres cambios de base de datos (modelo por defecto, embudo en el idioma de la organización, *skills* en español) |

### Veredicto: usar el original

La copia no tiene más español que el original; tiene menos. Lo que agrega cabe en un día de trabajo y puede llevarse a nuestra copia del original. Usarla tiene además un costo oculto: sus tres cambios de base de datos llevan los números 0443 a 0445, que el original ya asignó a cambios distintos. Traer cualquier actualización del original a la copia chocaría desde el primer intento. Quedarse con la copia es quedarse congelado en septiembre.

## 2. Viabilidad técnica

- **Licencia:** MIT. Se puede renombrar, modificar, alojar y revender sin regalías; la única obligación es conservar el aviso de autoría. No existe versión de pago que bloquee funciones (lo confirma `docs/white-label.es.md` del propio proyecto).
- **Tecnología:** Next.js 16, React 19, TypeScript estricto, PostgreSQL en Supabase con aislamiento por organización (RLS), Tailwind 4, Zod 4, Vercel AI SDK 7, Vitest y Playwright. Es moderna y coincide con la que propone DEC-011 en lo esencial.
- **Calidad observable:** cero ciclos de importación, registro centralizado, casi nada de tipado débil, 56 pruebas de invariantes de base de datos y cinco controles obligatorios antes de unir cambios (según `docs/current-state.md`, medido en julio).
- **Canales:** WhatsApp oficial de Meta, Zernio (Instagram y Facebook por mensaje directo; WhatsApp en modo coexistencia) y WAHA (no oficial).
- **Agregar módulos propios:** el original tiene un camino oficial para módulos con tablas propias (ADR-0002; ya lo usan «honorarios» y «comandas») y está construyendo una plataforma de módulos de terceros (ADR-0005). Su propia medición sobre 1.029 copias públicas indica que el 76 % de lo que agregan las copias son archivos nuevos. Por ese camino se construiría la parte técnica.

## 3. Cobertura de nuestros 339 requisitos

Clasificación por lectura del código y del esquema de base de datos del original (v1.85.0). **Lo trae:** cumple el requisito tal como está. **Parcial:** existe una base que se adapta. **No lo trae:** hay que construirlo.

| Bloque | Módulos | Lo trae | Parcial | No lo trae | Total |
| --- | --- | ---: | ---: | ---: | ---: |
| Plataforma, cliente y comercial | M01–M12 | 38 | 83 | 54 | 175 |
| Analítica, IA y administración | M21–M23 | 8 | 22 | 19 | 49 |
| Operación técnica | M13–M20 | 0 | 9 | 95 | 104 |
| Integración con UpConta | 07 (API) | 0 | 4 | 7 | 11 |
| **Total** | | **46 (14 %)** | **118 (35 %)** | **175 (52 %)** | **339** |

Por módulo:

| Módulo | Lo trae | Parcial | No |
| --- | ---: | ---: | ---: |
| M01 Identidad, organización y acceso | 3 | 11 | 5 |
| M02 Clientes, contactos y sitios | 6 | 9 | 3 |
| M03 Captación, inbox y asignación | 4 | 10 | 1 |
| M04 Oportunidades y pipelines | 5 | 5 | 5 |
| M05 Postventa, contratos y renovaciones | 0 | 5 | 7 |
| M06 Calendario, tareas y viajes | 3 | 9 | 3 |
| M07 Marketing y campañas | 6 | 10 | 1 |
| M08 Comunicaciones | 7 | 5 | 0 |
| M09 Habilitación comercial | 0 | 2 | 6 |
| M10 Repositorio documental | 0 | 3 | 7 |
| M11 Documentos comerciales | 4 | 7 | 8 |
| M12 Catálogo | 0 | 7 | 8 |
| M13 Recepción y custodia | 0 | 3 | 12 |
| M14 Laboratorio | 0 | 2 | 17 |
| M15 Proveedores externos | 0 | 0 | 10 |
| M16 Campo, sitios e infraestructura | 0 | 1 | 13 |
| M17 Frecuencias y espectro | 0 | 0 | 11 |
| M18 Garantías | 0 | 0 | 13 |
| M19 Incidencias y SLA | 0 | 2 | 9 |
| M20 Inventario, reservas y compras | 0 | 1 | 10 |
| M21 Analítica y KPI | 0 | 6 | 9 |
| M22 Inteligencia artificial | 4 | 7 | 9 |
| M23 Administración y auditoría | 4 | 9 | 1 |

**Cómo leerlo.** El ahorro está en comunicaciones, captación, marketing por WhatsApp, embudos, agentes de IA, marca blanca y la plataforma (usuarios, auditoría, automatizaciones, despliegue y actualización). En la parte comercial, 7 de cada 10 requisitos tienen al menos una base. La parte técnica y la integración con UpConta se construyen completas, aunque reutilizan piezas del original (PDF en el servidor, auditoría de solo agregado, idempotencia, cola de eventos).

**Límites de esta clasificación.** Se hizo leyendo código, sin ejecutar el sistema. Las filas «Parcial» que dicen «falta confirmar» se cierran en la primera instalación. Los números de esta evaluación son una foto de la v1.85.0; el original cambia a diario.

## 4. Brechas que importan

1. **Adaptación a Ecuador:** RUC y cédula en lugar de CPF/CNPJ (unos 39 archivos); provincias e industrias como catálogo; ley ecuatoriana de datos (LOPDP), cercana a la LGPD que ya trae; impuestos y moneda en dólares.
2. **Permisos:** cinco roles fijos ordenados por rango. Nuestro modelo pide permisos por acción, entidad, alcance y condición, organigrama y acceso económico separado (IAM-003 a IAM-006). Es la brecha de plataforma más profunda y conviene resolverla antes de la parte técnica, porque recepción, técnica e inventario dependen de ella.
3. **Correo masivo:** solo trae correo transaccional (MKT-007, MKT-017, COM-001).
4. **Documentos:** no hay repositorio documental por cliente (M10).
5. **Catálogo:** categoría y marca son texto libre; no distingue producto, repuesto y servicio (M12).

## 5. Choques con decisiones vigentes

| Decisión | Qué dice | Qué trae DeskcommCRM | Propuesta |
| --- | --- | --- | --- |
| DEC-011 | Better Auth y pg-boss | Supabase Auth y cola propia sobre PostgreSQL (`event_log` y workers) | Adoptar lo que trae; DEC-020 reemplaza a DEC-011 en esto |
| DEC-010 | PDF desde plantillas HTML versionadas en la base | PDF con componentes compilados (`@react-pdf/renderer`) | Decidir en arquitectura: COT-001 e IA-010 siguen pidiendo plantillas editables sin desplegar |
| DEC-012 | Solo WhatsApp oficial | WAHA (no oficial) es el camino por defecto del instalador | Desactivar WAHA; usar la API oficial de Meta o Zernio |
| DEC-009 | PostGIS para sitios y frecuencias | No usa PostGIS; Supabase lo permite como extensión | Agregarla con los módulos M16 y M17 |
| DEC-013 | Dokploy en el VPS propio | Su instalador detecta y publica detrás de Dokploy | Compatible |
| DEC-007 | Ningún módulo depende de un sistema externo | Zernio y los proveedores de IA son servicios externos | Compatible: son canales y ayudas; el CRM funciona sin ellos |

## 6. Cómo trabajar sobre el original

1. **Copia propia del original** (*fork*), privada, bajo la cuenta del proyecto. Idioma de la instalación: español.
2. **Actualizar por versión publicada** (v1.85.0, v1.86.0…), no por la rama principal: el original recibe unos 200 commits diarios y la versión publicada es la que pasó sus controles.
3. **Lo nuestro, en archivos nuevos:** cada módulo técnico como módulo oficial con tablas propias (ADR-0002) y prefijo propio en los cambios de base de datos, para no chocar con la numeración del original.
4. **Modificar el núcleo solo cuando no haya otra salida**, y en ese caso proponer el cambio al original para no cargarlo solos.
5. **Llevar a nuestra copia lo útil de atiendo-crm:** plantillas del agente en español y guion de demostración.
6. **Sus reglas para agentes** (`AGENTS.md` y `CLAUDE.md` del original) rigen el código. Las nuestras siguen rigiendo el levantamiento, el PRD y la trazabilidad.

## 7. Sobre la prueba previa

El consultor propone no hacer una prueba aparte y construir directo sobre la base. Es razonable con una condición: **la primera instalación en el VPS es la prueba.** Antes de escribir el primer módulo técnico tiene que estar demostrado, en el servidor real:

- que instala y actualiza a la versión siguiente sin perder datos;
- que la interfaz sale en español;
- que entra y sale un mensaje real por WhatsApp oficial o Zernio;
- que se puede crear un módulo de prueba con una tabla propia por el camino de ADR-0002.

Son uno o dos días y no retrasan nada: es el mismo despliegue que haría falta de todos modos.
