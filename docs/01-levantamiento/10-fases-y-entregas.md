# 10 · Priorización, fases y entregas

[← Índice del levantamiento](README.md)

Qué se construye primero y por qué. Las secciones 14.1 a 14.3 vienen de la v3; las secciones 14.4 a 14.6 son nuevas en la v4.

## 14. Priorización y fases

### 14.1 Criterio de la primera entrega

Una primera entrega no es “copiar la aplicación técnica y agregarle un pipeline”. Debe **cerrar un ciclo operativo completo con datos confiables**. Se recomienda que incluya:

1. Identidad, departamentos, roles, permisos, disponibilidad, auditoría y configuración base.
2. Clientes, contactos, sitios, etiquetas, consentimientos y deduplicación.
3. Catálogo propio de productos, servicios y repuestos, con tarifas de impuesto configurables. La integración de lectura con UpConta —clientes, productos, servicios, precios e impuestos— se suma en cuanto exista el ambiente de pruebas, **sin bloquear nada de lo anterior**. *(ajustado v4: principio de autonomía funcional)*
4. Inbox, asignación, oportunidad, actividades y calendario.
5. Proforma con versionado y solicitud de facturación.
6. Recepción digital, orden técnica, estados, relojes separados, repuestos y entrega.
7. Módulo de garantías con su catálogo y su aplicación en el flujo técnico.
8. Documentos básicos, notificaciones y paneles operativos.
9. Migración inicial y conciliación con la aplicación técnica actual.

### 14.2 Fases

**Fase 0 — Decisiones, formatos y datos.** Contratar el ambiente de pruebas de UpConta y validar la escritura. Aprobar organigrama, permisos, estados, SLA y catálogo de garantías. Entregar los formatos documentales pendientes. Depurar duplicados de cliente y de sitio con los archivos del paquete de datos. Definir consentimiento, retención y alcance de la firma.

**Fase 1 — Plataforma y cliente 360.** Identidad, organización, roles, disponibilidad y auditoría. Clientes, contactos, sitios, etiquetas y documentos básicos. Catálogo y configuración versionada. Importación controlada. *(M01, M02, M10, M12, M23)*

**Fase 2 — CRM comercial y productividad.** Inbox, asignación, pipelines configurables y oportunidades. Actividades, notas por contacto, calendario y comunicaciones individuales. Habilitación comercial. Proforma y solicitud de facturación. Núcleo de IA con el agente de redacción comercial. Paneles individual y de supervisión. Conector UpConta de lectura. *(M03, M04, M06, M08, M09, M11, M21 operativo, M22 núcleo, INT)*

**Fase 3 — Operación técnica.** Recepción digital y cadena de custodia, incluida la derivación a proveedor externo. Laboratorio con relojes separados, aprobación, repuestos, reparación, calidad y entrega. Garantías aplicadas al flujo. Reservas de repuestos. Escritura hacia UpConta si D-01 quedó verificada. Migración de informes y activos. *(M13, M14, M15, M18, M20, proforma técnica de M11)*

**Fase 4 — Postventa, campo e infraestructura.** Contratos, renovaciones y mantenimiento preventivo. Sitios, componentes extensibles, visitas, estudios e incidencias. Plan de frecuencias y pólizas ARCOTEL. Modo sin conexión. *(M05, M16, M17, M19)*

**Fase 5 — Marketing, analítica e inteligencia artificial.** Segmentos y campañas con importación por rangos. Indicadores gerenciales y rentabilidad conciliada. Scoring, base de conocimiento y el resto de agentes especializados. Paneles a petición. Automatizaciones avanzadas y portal de proveedores. *(M07, M21 gerencial, M22 completo, portal de M15)*

Las fases 1 a 3 forman el **primer lanzamiento a producción**. Las fases 4 y 5 son el segundo y el tercero.

### 14.3 Estrategia de transición

- Mantener una sola fuente de escritura por dominio durante cada corte.
- Ejecutar las migraciones de forma repetible en un entorno de ensayo antes de producción.
- Conciliar conteos, estados, totales, archivos y una muestra de documentos.
- Conservar los documentos ya emitidos como instantáneas inmutables.
- Mantener redirecciones seguras para los códigos QR y enlaces históricos.
- No migrar contraseñas: migrar identidades a través de un proveedor seguro.
- Definir la reversión de cada fase y la fecha de retiro de la aplicación anterior.

### 14.4 Ajustes de la v4 a las fases

| Ajuste | Motivo |
| --- | --- |
| El conector de UpConta deja de ser requisito de la fase 1 y pasa a la fase 2, en paralelo y sin bloquear. | Principio de autonomía funcional (sección 3.3) y mandato de la sección 18.1: ninguna carencia externa detiene la construcción. Además, la API no se pudo volver a verificar en la v4. |
| El núcleo de IA —proveedores, registro de agentes, bitácora de ejecuciones, límites de gasto— y el agente de redacción comercial pasan a la fase 2. | El cliente pidió «encarecidamente» (T3) que el correo del asesor esté vinculado con IA, y la sección 18.3 exige que la IA sea parte del núcleo y no un añadido. El resto de agentes se mantiene en la fase 5. |
| La habilitación comercial (M09) entra en la fase 2. | Es lo que permite a un asesor junior sostener una negociación (T2); sin ella el pipeline de la fase 2 queda incompleto. El análisis de objeciones puede esperar a la fase 5. |
| La proforma técnica se construye en la fase 3, con el laboratorio. | Depende del diagnóstico y de la aprobación por línea (M14). |

### 14.5 Entregas demostrables al cliente

Cada fase termina con una demostración en el entorno de pruebas (*staging*), con datos ficticios o migrados de ensayo, y con un guion escrito desde los criterios de aceptación del PRD. Propuesta:

| Entrega | Al cierre de | Qué puede hacer el cliente al probarla |
| --- | --- | --- |
| E1 | Fase 1 | Entrar con su usuario, ver solo lo que su rol permite, cargar clientes con varios contactos y sitios, subir documentos a la ficha, crear categorías y productos, agregar elementos a cualquier catálogo e importar una base por plantilla. |
| E2 | Fase 2 | Recibir un lead, verlo asignado al asesor disponible, llevarlo por el pipeline, agendar una visita con tiempo de viaje sin cruces, ver el speech del producto, redactar un correo con IA, emitir y versionar una proforma, duplicarla para otra sucursal y marcarla como aceptada. |
| E3 | Fase 3 | Recibir equipos en tableta con firma, pasarlos a técnica, diagnosticar, emitir la proforma técnica, aprobar por línea, reservar repuestos, derivar un equipo a un proveedor externo, aplicar una garantía y entregar con firma, viendo los relojes separados. **Con E3 el sistema está listo para el primer lanzamiento.** |
| E4 | Fase 4 | Gestionar contratos y renovaciones con alertas en secuencia, sitios con sus componentes, el plan de frecuencias y las pólizas ARCOTEL, e incidencias con SLA. |
| E5 | Fase 5 | Ejecutar campañas por correo y WhatsApp, ver paneles gerenciales, pedir un panel en lenguaje natural y usar los agentes especializados. |

**Qué ciclo cerrar primero (decisión D-12).** La v3 recomienda el ciclo comercial (fase 2) antes que el técnico (fase 3), y esta versión mantiene la recomendación: la aplicación técnica actual sigue funcionando mientras tanto, mientras que el área comercial hoy no tiene ninguna herramienta. Si el cliente prioriza eliminar el acta en papel, se pueden invertir las fases 2 y 3 sin rehacer nada, porque ambas dependen solo de la fase 1.

### 14.6 Tamaño del alcance y consecuencias para costo y plazo

El plan maestro de desarrollo con IA (25 sep 2026) estimó **110 a 310 USD en tokens y 12 a 14 semanas** para un «CRM intermedio» de unas 10 áreas y 60 a 80 funciones, y advirtió que su alcance se redactó **sin conocer este levantamiento**. Este levantamiento describe **24 módulos y 339 requisitos**, entre ellos piezas que por sí solas son productos grandes: bandeja multicanal, campañas por correo y WhatsApp, motor de automatizaciones configurable, campos personalizados, agentes de IA con paneles a petición, modo sin conexión en campo y portal de proveedores.

Consecuencias, con **confianza baja** porque son estimaciones de orden de magnitud y no mediciones:

- El alcance completo equivale a unas **2,5 a 3,5 veces** el volumen que presupuestó el plan maestro. Con el mismo método, eso sitúa el costo de tokens en el orden de **300 a 1.000 USD** y el plazo en el orden de **30 a 45 semanas** para las cinco fases.
- El **primer lanzamiento (fases 1 a 3)** es comparable en volumen al alcance completo que presupuestó el plan maestro: del orden de **12 a 16 semanas** después de aprobar PRD y arquitectura.
- La cifra que vale es la que saldrá del **plan de tareas** (fase de planificación), cuando cada requisito tenga tareas atómicas contadas. Hasta entonces, estos números sirven para decidir el alcance del primer lanzamiento, no para comprometer fechas con el cliente (D-14).
