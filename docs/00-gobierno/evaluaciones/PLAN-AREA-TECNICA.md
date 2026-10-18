# Plan de diseño y construcción · área técnica

**Fecha:** 18 oct 2026 · **Base:** DeskcommCRM (DEC-020) · **Fuentes:** lectura del código de la aplicación técnica actual (18 oct 2026; detalle en `confidencial/`), levantamiento v4 (M13 a M20) y decisiones vigentes.

## 1. Qué hace hoy la aplicación técnica

La construyó el área técnica con herramientas básicas. Funciona, se usa a diario y contiene conocimiento del oficio que no estaba en el levantamiento. El rediseño **conserva cada función** y corrige su base.

| Función actual | Qué hace | Módulo destino | Requisitos |
| --- | --- | --- | --- |
| Informe de reparación en laboratorio | Varios equipos por informe; por equipo: falla, modelo, serie, servicios y repuestos con su estado (aprobado, no aprobado, recomendado), observación armada con frases por pieza, fotos, marca de garantía (sin costo) o baja técnica (solo se cobra el diagnóstico); estados del informe pendiente, aprobado, aprobado parcial y rechazado; aviso de series duplicadas; clonar equipo; borrador automático; PDF con fotos y QR por equipo | M14 y M11 (proforma técnica, DEC-008) | LAB-002, 003, 009, 010, 015, 016, 018, 020 a 025 |
| Mantenimiento en sitio | Un cliente con varias ubicaciones, cada una con equipos, repuestos y totales; seis formatos de PDF; emitir como informe o como proforma; duplicar | M16 y M11 | CAM-015, COT-019, 020, 021 |
| Incidencias | Ticket con cliente, sitio, severidad, estado, fechas de falla y resolución con tiempo fuera de servicio, descripción, diagnóstico, acciones, próximos pasos, fotos con descripción y reporte PDF; avisos de calidad del registro | M19 | INC-001, 003, 006, 008, 010, 012, 013 |
| Frecuencias por cliente | Plan de canales por cliente y sitio: canal, tipo, nombre, RX y TX, analógico o digital (tono y ancho de banda, o color, ranura y grupo), datos de acceso a la repetidora, ciudad, agenda y observaciones | M17 | FREQ-001, 002, 003, 009, 010, 012 |
| Ubicación de repetidoras | Mapa con repetidoras, banda, frecuencias, modelo, altura y cobertura aproximada; medir distancias | M16 y M17 | CAM-011, CAM-016 |
| Precios de repuestos | Lista por marca, modelo y pieza, editable en línea; el precio se propone al agregar la pieza | M12 | CAT-005, 006, 016 |
| Clientes | Ficha básica con servicios, total facturado y último servicio | M02 | CLI-001, 006 |
| Administración | Técnicos, modelos, frases de diagnóstico y datos de la empresa para los documentos | M23, M12, M14 | ADM-013, LAB-022 |
| Inicio y estadísticas | Ingresos, pendientes urgentes, tasa de aprobación, ticket promedio, producción por técnico, modelos y repuestos más frecuentes, tiempo de aprobación por cliente, exportación a hoja de cálculo | M21 | BI-014, 016, 017 |
| Utilidades | Cálculo de arneses de repetidora: largo del cable por fracción de onda y conectores sugeridos | M16 | CAM-012 |
| «Mejorar texto» con IA | Reescribe diagnósticos y acciones con lenguaje técnico | M22 | IA-021 |

Las funciones que el levantamiento no recogía se agregaron el 18 oct 2026 como requisitos nuevos, con origen «Observado — app actual» (18 requisitos; el total pasa de 339 a 357).

## 2. Qué se corrige al reconstruir

| Hoy | En OMNITRONEC 360 | Requisito |
| --- | --- | --- |
| El cliente se relaciona por su nombre escrito | Por identificador; el cliente es el mismo del CRM | CLI-001, FREQ-002 |
| Sitios, repetidoras y frecuencias viven en listas separadas | Cliente → sitio → activo (repetidora, radio) → plan de canales, todo enlazado | CAM-001, FREQ-002 |
| Totales, IVA y PDF se calculan en el navegador | Se calculan una vez en el servidor y el PDF usa ese resultado | LAB-015, COT-015, COT-013 |
| El número del informe lo propone el navegador | Numeración en el servidor, por documento, sede y año | COT-014 |
| El precio del repuesto se busca por parecido del texto | Pieza y modelo enlazados por identificador | CAT-005 |
| Marcas, técnicos y datos de la empresa fijos en el código | Catálogos y configuración administrables | CAT-006, ADM-013 |
| Los registros se borran definitivamente | Se anulan o desactivan y conservan su historia | ADM-004, DOC-009 |
| Un estado cambia sin nota ni rastro | Cada cambio exige nota y queda auditado | INC-003, ADM-008 |
| Solo existe «administrador / no administrador» | Varios roles por usuario y capacidades sueltas | IAM-014, DEC-021 |

## 3. Modelo de datos del área técnica

```
Cliente ─┬─ Sitio (dirección, coordenadas, acceso) ─┬─ Activo (repetidora, radio, antena…; marca, modelo, serie)
         │                                          └─ Plan de canales ─ Canal (RX, TX, analógico/digital…)
         ├─ Proforma técnica de laboratorio ─ Equipo de la orden (activo) ─ Línea (servicio o repuesto del catálogo,
         │                                                                   estado de aprobación, precio congelado)
         ├─ Mantenimiento en sitio ─ Ubicación (sitio) ─ Equipo ─ Línea
         └─ Incidencia (sitio y activos afectados, evidencias, historial de estados)

Catálogo: marca ─ modelo ─ pieza/servicio ─ precio por modelo · frases de diagnóstico por pieza
```

Cada documento emitido congela sus precios, impuestos y textos (COT-013). Editarlo crea una revisión nueva (COT-009).

**Ciclo de la proforma técnica (propuesto):** borrador → emitida (pendiente de aprobación) → aprobada, aprobada parcial o rechazada → cerrada. Toda transición no listada está prohibida. Las etapas finas del laboratorio (diagnóstico, espera de repuesto, reparación, control de calidad, entrega) llegan en la etapa T2 (LAB-005).

## 4. Plan por etapas

El criterio que fijó el consultor: **primero lo que ya existe, porque es indispensable, y después lo que se habló con el cliente.**

### Etapa T0 · Base compartida (prerrequisito)

Sin esto la parte técnica no puede construirse bien. Se hace sobre DeskcommCRM, una sola vez, y lo usa también el área comercial.

1. Permisos: varios roles por usuario, capacidades sueltas y roles técnico, recepción, inventario y solo lectura (IAM-004, IAM-005, IAM-014, DEC-021).
2. Clientes con sitios y contactos, con RUC y cédula (CLI-001, CLI-002, CLI-004, CLI-011).
3. Catálogo técnico: marcas, modelos, piezas, servicios y precios por modelo (CAT-002, CAT-005, CAT-006, CAT-016).
4. Datos de la empresa y política de impuestos para los documentos (ADM-013, COT-013).
5. Auditoría y anulación en lugar de borrado (ADM-004, ADM-008).

### Etapa T1 · Paridad mejorada (lo que ya existe)

Al terminar, el área técnica deja la aplicación actual.

| Orden | Entrega | Requisitos |
| --- | --- | --- |
| T1.1 | Proforma técnica de laboratorio: equipos, líneas con aprobación, garantía y baja técnica, fotos, frases, series duplicadas, borrador automático, numeración y PDF en el servidor, QR por equipo | LAB-002, 003, 004, 009, 010, 015, 016, 018, 020 a 025 · COT-014, 015 |
| T1.2 | Mantenimiento en sitio con varias ubicaciones, formatos de PDF y emisión como informe o proforma | CAM-015 · COT-019, 020, 021 |
| T1.3 | Incidencias enlazadas a cliente, sitio y activos, con historial de estados y reporte | INC-001, 003, 006, 008, 010, 012, 013 |
| T1.4 | Sitios, repetidoras y planes de canales unificados, con mapa y medición de distancias | FREQ-001, 002, 003, 009, 012 · CAM-001, 003, 005, 011, 016 |
| T1.5 | Panel técnico, estadísticas y reporte por técnico | BI-014, 016, 017 |
| T1.6 | Utilidades (cálculo de arneses guardado en el sitio o la orden) y «Mejorar texto» con IA | CAM-012 · IA-021 |
| T1.7 | Migración de los datos actuales, con fusión de sitios duplicados como clientes y conservación del número histórico de los informes | FREQ-010 · D-09 · P-21 |

### Etapa T2 · Cadena de custodia y garantías (lo conversado con el cliente)

1. Recepción con acta digital, firma, código por equipo y entrega a técnica (M13: REC-001 a REC-015).
2. Etapas y relojes del laboratorio, control de calidad y entrega firmada (LAB-001, 005 a 008, 011 a 014, 017, 019).
3. Garantías calculadas, propuestas al recibir el equipo y por pieza (M18: GAR-001 a GAR-013).
4. Reservas de repuestos con plazo y liberación automática (INV-003 a INV-007); el resto de M20 llega con la integración de UpConta.

### Etapa T3 · Operación completa

1. Proveedores externos, actas de salida y retorno, y portal limitado (M15).
2. Campo: listas de verificación, mantenimiento preventivo, estudios de ingeniería y modo sin conexión (CAM-002, 004, 006 a 010, 013, 014).
3. Frecuencias: pólizas ARCOTEL y su vigencia, conflictos de frecuencia por zona, exportación a software de programación (FREQ-004 a 008, 011).
4. SLA por contrato, pausas, causa raíz y recurrencias (INC-002, 004, 005, 007, 009, 011).
5. Indicadores técnicos avanzados (BI-009, BI-013, BI-015).

## 5. Diseño de pantallas

- Se usa el sistema visual de DeskcommCRM con la marca de OMNITRONEC (ADM-013).
- **Tableta primero** para recepción y laboratorio; escritorio para administración; móvil para incidencias y campo.
- Cada pantalla contempla los ocho estados obligatorios del PRD (carga, vacío, error, sin permiso, deshabilitado, guardado, conflicto de versión, sin conexión).
- Se conservan los atajos que hoy ahorran tiempo: botones de servicio rápido, frases por pieza, clonar equipo, vista previa antes del PDF.

## 6. Cómo se trabaja cada entrega

Cada entrega de T0 a T3 sigue `docs/02-prd/README.md`: PRD del módulo con la plantilla, revisión cruzada, aprobación del consultor y validación de reglas con el área técnica. Luego viene la construcción con prueba primero (`AGENTS.md`, protocolo de código). Ningún módulo técnico se construye antes de su PRD aprobado.

## 7. FALTA INFORMACIÓN

- **FALTA INFORMACIÓN:** EXPORTACIÓN COMPLETA DE LOS DATOS DE LA APLICACIÓN ACTUAL PARA LA MIGRACIÓN (P-21).
- **FALTA INFORMACIÓN:** VALIDACIÓN DE LAS REGLAS OBSERVADAS DE COBRO, APROBACIÓN POR LÍNEA Y PLAZO DE GARANTÍA (60 DÍAS LABORABLES EN LA APLICACIÓN FRENTE A 90 DÍAS EN GAR-013) (P-22).
- **FALTA INFORMACIÓN:** RECORRIDO EN VIVO DE LA APLICACIÓN CON SESIÓN INICIADA, PARA CONFIRMAR LO LEÍDO EN EL CÓDIGO; REQUIERE PERMITIR SU DOMINIO EN LA RED DEL ENTORNO DE TRABAJO.
