# 11 · Pendientes, decisiones abiertas y riesgos

[← Índice del levantamiento](README.md)

Todo lo que falta para avanzar, en un solo lugar. Por instrucción del cliente (T3), **lo que requiere más información está en MAYÚSCULAS**. Cada módulo repite sus propios pendientes en su sección «Pendientes».

La novedad principal de la v4 está en la sección 16.2: separa **lo que bloquea el PRD** de lo que solo bloquea la carga inicial o la salida a producción. La v3 exigía resolver casi todo antes de empezar el PRD, lo que en la práctica lo congelaba.

## 15. Decisiones abiertas y riesgos

### 15.1 Decisiones que siguen abiertas

| ID | Tema | Riesgo si no se resuelve | Decisión requerida |
| --- | --- | --- | --- |
| D-01 | ESCRITURA EFECTIVA HACIA UPCONTA | La conversión de proforma a factura no funciona y el asesor vuelve a pedirla por otro canal | Validar en el ambiente de pruebas antes de comprometer fechas |
| D-02 | MOVIMIENTOS DE INVENTARIO POR API | La custodia no se refleja en contabilidad y se concilia a mano | Solicitar la capacidad a UpConta ([documento 07](07-integraciones.md)) o definir la conciliación alterna |
| D-03 | CATÁLOGO DE GARANTÍAS REAL | El módulo se construye sin los tipos que la empresa usa | Que la empresa entregue sus garantías por producto, servicio y repuesto |
| D-04 | VALOR PROBATORIO DE LA FIRMA EN TABLETA | Documentos sin fuerza legal ante un reclamo | Revisión legal del alcance, la identidad del firmante y la conservación |
| D-05 | CONSENTIMIENTO PARA CORREO Y WHATSAPP | Riesgo legal y reputacional en campañas | Definir captura, base legal, baja y retención |
| D-06 | FORMATOS DOCUMENTALES PENDIENTES | No se puede cerrar la generación de documentos | Entregar carta de presentación, proforma comercial, contrato y certificados |
| D-07 | CATÁLOGO DE INDUSTRIAS, PRODUCTOS Y SERVICIOS | Filtros, speech y documentos quedan incompletos | Validar las plantillas semilla de `data/semillas/` y completarlas |
| D-08 | PROVEEDORES DE WHATSAPP, CORREO Y CALENDARIO | Funciones centrales quedan sin cimiento | Seleccionar proveedores y conocer sus límites. Hay una propuesta en `docs/00-gobierno/DECISIONS.md` (DEC-012) |
| D-09 | CONTINUIDAD DE LA NUMERACIÓN DE INFORMES | Duplicidad o pérdida de referencia con el histórico | Decidir si se continúa la serie actual o se abre una nueva |
| D-10 | POLÍTICA DE COSTO POR HORA Y VISIBILIDAD SALARIAL | Indicadores de productividad injustos o que violan la privacidad | Definir fórmula, tratamiento de la complejidad y permisos |
| D-11 | RATIFICAR QUE LA PROFORMA COMERCIAL VIVE EN OMNITRONEC 360 *(nuevo v4)* | Reabrir la discusión cuando el módulo ya esté construido | En T1 se afirmó que el sistema contable hace la proforma y la convierte en factura con un clic; en T3 el cliente dejó la disyuntiva «para después». La v3 la cerró porque la API pública de UpConta no tiene proforma. Confirmar: ¿UPCONTA TIENE COTIZACIONES O PROFORMAS EN SU INTERFAZ, AUNQUE NO EN LA API? Aun si las tuviera, el versionado, la duplicación entre sucursales y el texto condicional (COT-005, COT-007, COT-008) exigen que la proforma comercial viva en la plataforma |
| D-12 | QUÉ CICLO SE CONSTRUYE PRIMERO: COMERCIAL O TÉCNICO *(nuevo v4)* | Invertir el orden a mitad de camino | Se recomienda el comercial primero (ver [documento 10](10-fases-y-entregas.md), sección 14.5); ambas opciones son viables sin rehacer nada |
| D-13 | ETAPAS DE LOS PIPELINES Y ESTADOS DE LA ORDEN TÉCNICA *(nuevo v4)* | Los agentes inventan estados o se reconstruyen máquinas de estado | Validar las etapas de M04 y los estados de M14, incluida la definición de «aprobado parcial» |
| D-14 | ALCANCE DEL PRIMER LANZAMIENTO FRENTE A PRESUPUESTO Y PLAZO *(nuevo v4)* | Comprometer fechas imposibles: el alcance total es de 339 requisitos | Acordar qué entra en las fases 1 a 3 y qué prioridades se aceptan |

### 15.2 Riesgos de producto

| ID | Riesgo | Mitigación |
| --- | --- | --- |
| R-01 | Que los módulos de infraestructura, frecuencias e incidencias vuelvan a quedar sin uso, como hoy | Reducir al mínimo el esfuerzo de registro y alimentarlos desde los flujos que ya se ejecutan |
| R-02 | Que la IA envíe, apruebe o facture sin intervención humana | Toda salida es borrador; ninguna acción irreversible se automatiza |
| R-03 | Que los catálogos editables por cualquiera fragmenten los datos | Flujo de proponer, aprobar y publicar para los maestros globales |
| R-04 | Que la celebración de ventas exponga montos sensibles | Umbral, contenido y audiencia configurables; respeto al movimiento reducido |
| R-05 | Que el calendario corporativo pise compromisos personales | Regla de conflicto con decisión humana; nunca se borra un evento externo |
| R-06 | Que la migración arrastre los duplicados actuales | Depuración previa obligatoria con los archivos del paquete de datos |
| R-07 | Que la ficha del cliente se vuelva abrumadora | Revelación progresiva: resumen primero, detalle bajo demanda |
| R-08 | Que el alcance total desborde el presupuesto y el plazo estimados en el plan maestro *(nuevo v4)* | Acordar el primer lanzamiento (D-14); recalcular costo y plazo con el plan de tareas antes de comprometer fechas |
| R-09 | Que la documentación pública de UpConta no coincida con lo contratado *(nuevo v4)* | Verificar cada capacidad en el ambiente de pruebas; el modo autónomo garantiza que nada se detenga |
| R-10 | Que información confidencial del cliente quede publicada *(nuevo v4)* | El repositorio de GitHub es público: hacerlo privado; mientras tanto, no subir datos de clientes, transcripciones ni hallazgos de seguridad |
| R-11 | Que 42 requisitos no puedan rastrearse hasta su fuente *(nuevo v4)* | Incorporar las notas del cliente citadas por la v3 (P-15) o validar esos requisitos en taller |

### 15.3 Contradicciones que no deben ocultarse

- “Todo configurable y borrable” frente a la necesidad de conservar la integridad histórica. **Se resuelve** desactivando en lugar de borrar, y versionando en lugar de sobrescribir.
- “Evitar un CRM abrumador” frente a una lista muy amplia de funciones en la ficha del cliente. **Se resuelve** con revelación progresiva y navegación por rol.
- “Contabilidad como origen de clientes y productos” frente a la existencia de prospectos que todavía no son clientes fiscales. **Se resuelve** manteniendo el prospecto en la plataforma y creando el cliente fiscal solo al convertirse.
- *(nuevo v4)* “La proforma debe estar en el sistema contable” (T1) frente a “la proforma se hace en el CRM sin salir de la ficha” (T1, T2, T3). **Se resuelve** a favor de la plataforma por un hecho verificable en la API, **pendiente de ratificación** (D-11).
- *(nuevo v4)* “Los movimientos de bodega se controlan en el sistema contable, no en el CRM” (T1) frente a la cadena de custodia en la plataforma. **Se resuelve** separando dos cosas: quién tiene físicamente el equipo y cuándo cambió de manos (custodia técnica, siempre en la plataforma) y el asiento de bodega (en UpConta cuando su API lo permita, D-02).
- *(nuevo v4)* “Los catálogos ya deben venir configurados y seleccionables” (T3) frente a “mejor que no vengan por defecto y haya una plantilla para subirlos” (T4). **Se resuelve** con ADM-014: el producto trae los catálogos vacíos y la implementación los carga desde las plantillas semilla con los datos de este levantamiento. Para el usuario, el sistema llega configurado y todo sigue siendo editable.
- *(nuevo v4)* “El sistema no puede permitir que se crucen eventos” frente a “o que al menos salte una alerta” (T2). **Se resuelve** con CAL-013: bloqueo por defecto y excepción justificada solo para roles autorizados.
- *(nuevo v4)* “El acta de recepción se hace por ahora en el sistema contable” (T1) frente al acta digital en tableta dentro de la plataforma (T2). **Prevalece T2**, posterior e inequívoca.

## 16. Insumos pendientes y criterio para pasar al PRD

### 16.1 Entregables solicitados a la empresa

La columna **Bloquea** dice qué se detiene si el insumo no llega. Los responsables con nombre son los que el cliente asignó en la reunión.

| ID | Insumo | Responsable | Uso | Bloquea |
| --- | --- | --- | --- | --- |
| P-01 | FORMATO COMPLETO DEL ACTA DE RECEPCIÓN Y ENTREGA | José (T2: «es una tarea de José») | M13 | La plantilla del acta (fase 3). No el PRD: los campos ya se conocen |
| P-02 | Formato del informe técnico | — | M11, M14 | **Resuelto.** Capturado del sistema en producción, se documenta en el [anexo A](anexos/A-aplicacion-actual.md) |
| P-03 | FORMATO DE CARTA DE PRESENTACIÓN Y SUS VARIABLES | Área comercial (T1: Bibi tiene los formatos de cartas) | M11 | La puesta en producción de la carta |
| P-04 | CONTRATOS, CERTIFICADOS Y ESTUDIOS MODELO | Administración, legal y técnica (T1: Bibi tiene formatos de contratos y garantías) | M05, M10, M11 | Las plantillas de la fase 4 |
| P-05 | CATÁLOGO DE GARANTÍAS POR PRODUCTO, SERVICIO Y REPUESTO | Técnica y administración | M18 | La carga inicial de M18 (fase 3) |
| P-06 | CATEGORÍAS DE CLIENTE E INDUSTRIAS | José (T2) | M02, M07, M09 | La carga inicial. Hay semilla propuesta en `data/semillas/industrias.csv` |
| P-07 | CATÁLOGO COMPLETO DE PRODUCTOS, MODELOS, PARTES Y REPUESTOS, INCLUIDOS LOS QUE HOY NO TIENEN MARCA ASIGNADA | Técnica, inventario y contabilidad (T3) | M12 | La carga inicial (fase 1) |
| P-08 | LISTA DETALLADA DE SERVICIOS | Técnica y comercial (T3) | M12, M14 | La carga inicial |
| P-09 | ORGANIGRAMA, ROLES, HORARIOS Y PERMISOS | Gerencia | M01 | La configuración inicial. El PRD trabaja con los roles base |
| P-10 | ESTADOS, SLA, METAS, COMISIONES Y DEFINICIONES DE INDICADORES | Gerencia y jefaturas | M04, M14, M19, M21 | **Los estados bloquean el PRD de M04 y M14 (D-13).** Lo demás es configurable |
| P-11 | CREDENCIALES DEL AMBIENTE DE PRUEBAS DE UPCONTA | Administración | INT | La construcción del conector (fase 2) |
| P-12 | EXPORTACIÓN DE LA BASE DE DATOS DE LA APLICACIÓN ACTUAL | Área técnica, con quien mantiene la aplicación actual | Migración | La migración (fase 3) |
| P-13 | PROVEEDORES DE COMUNICACIÓN, CALENDARIO Y ALMACENAMIENTO | Gerencia | INT, M06, M07, M08 | La arquitectura de esos conectores |
| P-14 | POLÍTICAS DE CONSENTIMIENTO, RETENCIÓN Y FIRMA | Legal y administración | M07, M10, M13 | La salida a producción de campañas y firma |
| P-15 | NOTAS Y ACLARACIONES POSTERIORES DEL CLIENTE CITADAS POR LA V3 *(nuevo v4)* | Consultor (Oscar) | Trazabilidad de 42 requisitos | La aprobación de la v4 como documento trazable |
| P-16 | VALIDACIÓN DE LA TAXONOMÍA SEMILLA DE CATEGORÍAS DE EQUIPOS *(nuevo v4)* | José y área técnica (T1: «necesito que tú hagas esa estructura») | M12 | La carga inicial |
| P-17 | CAMPOS PERSONALIZADOS INICIALES DE LA FICHA *(nuevo v4)* | Área comercial | M02 | La configuración inicial |
| P-18 | TEXTOS DE LOS MENSAJES PREDETERMINADOS *(nuevo v4)* | Comercial y marketing | M07, M23 | La puesta en producción de automatizaciones |
| P-19 | CONTENIDO INICIAL DE SPEECH, PUNTOS FUERTES Y OBJECIONES *(nuevo v4)* | Jefatura comercial | M09 | La puesta en producción de M09 |
| P-20 | FORMATO DE LA PROFORMA COMERCIAL, CON TRANSPORTE Y LOGÍSTICA *(nuevo v4)* | José (T2 y T3) | M11 | La plantilla de proforma (fase 2) |

### 16.2 Qué bloquea el PRD y qué no *(reescrita en la v4)*

**A. Bloquea el inicio del PRD.** Sin esto no conviene escribir ningún módulo:

1. Aprobación de este levantamiento v4 por el consultor.
2. Validación del cliente de visión, alcance y módulos (taller 1), con las prioridades y el alcance del primer lanzamiento (D-14) y el orden de los ciclos (D-12).
3. Ratificación de la ubicación de la proforma comercial (D-11).

**B. Bloquea el PRD de un módulo concreto.** Los demás módulos avanzan mientras tanto:

| Módulo | Qué necesita antes de su PRD |
| --- | --- |
| M04 Oportunidades | Etapas de los pipelines validadas (D-13) |
| M14 Laboratorio | Estados de la orden y definición de «aprobado parcial» validados (D-13) |
| M13 Recepción | Alcance de la firma en tableta (D-04), para cerrar los criterios de aceptación de la firma |
| INT Conector UpConta | Verificación de la API contra la documentación y el ambiente de pruebas (D-01, D-11) |

**C. No bloquea el PRD; bloquea la carga inicial o la salida a producción.** El PRD especifica el mecanismo configurable y la carga llega después: formatos (P-01, P-03, P-04, P-20), contenidos de catálogos (P-05 a P-08, P-16 a P-19), proveedores (D-08, P-13), políticas (D-05, P-14) y migración (P-12, D-09).

### 16.3 Criterio para la salida a producción del primer lanzamiento

Lo que la v3 llamaba «criterio de listo para el PRD» es, en realidad, el criterio para salir a producción:

- Visión, alcance y módulos de la primera entrega aprobados.
- Escritura hacia UpConta verificada en el ambiente de pruebas, o decisión de salir en modo autónomo.
- Organigrama, roles y permisos aprobados.
- Pipelines, etapas y criterios de transición definidos.
- Catálogo de garantías entregado.
- Formatos de acta, carta, proforma, contrato y certificados entregados.
- Taxonomía de industrias, productos, servicios y repuestos entregada.
- Política de numeración, descuentos y aprobaciones definida.
- SLA, pausas y definiciones de indicadores firmadas.
- Consentimiento, retención, firma y exportación resueltos.
- Proveedores de correo, WhatsApp, calendario, mapas y modelos de IA seleccionados.
- Depuración de duplicados de cliente y de sitio ejecutada.
- Plan de migración, conciliación, corte y reversión aprobado.
- Criterios de aceptación y prioridad por módulo acordados.

### 16.4 Talleres recomendados

1. Visión, alcance y priorización ejecutiva.
2. De lead a factura, con la integración contable sobre la mesa.
3. Cliente 360, contactos, sitios y documentos.
4. De recepción a entrega, con técnicos y personal de atención.
5. Garantías: catálogo real, plazos y casos de tercerización.
6. Campo, sitios, infraestructura, frecuencias e incidencias.
7. Catálogo, precios, inventario y conciliación contable.
8. Marketing, canales y automatizaciones.
9. Roles, permisos, indicadores y privacidad.

Cada taller debe cerrar decisiones con responsable y fecha. No basta con recoger opiniones. El taller 1 y las decisiones D-11 a D-14 son los únicos que bloquean el inicio del PRD.

### 16.5 Preguntas sueltas que surgieron al contrastar las transcripciones *(nuevo v4)*

- ¿«ROL DEL CLIENTE» (T1) ES EL TIPO DE CLIENTE —FINAL O DISTRIBUIDOR— O ES OTRO ATRIBUTO?
- ¿«IMPRESORAS HEBRAS» (T1) SON IMPRESORAS ZEBRA? ¿QUÉ OTROS EQUIPOS QUE NO SON RADIOS SE REPARAN?
- ¿SE PRESTAN EQUIPOS DE REEMPLAZO MIENTRAS SE REPARAN LOS DEL CLIENTE?
- ¿SE GESTIONAN GARANTÍAS DE FABRICANTE (MOTOROLA, KENWOOD) CON RECLAMO AL FABRICANTE O A SU DISTRIBUIDOR?
- ¿QUÉ SIGNIFICA «POC» EN LA RENTA DE EQUIPOS?
- ¿POR QUÉ CANAL SE AVISA AL CELULAR DEL ASESOR ANTES DE UN VIAJE: SMS, WHATSAPP O NOTIFICACIÓN DE LA APLICACIÓN?
- ¿QUÉ PLATAFORMA DE AGENDAMIENTO O WEBINARS SE USARÁ Y CÓMO ENTRA UNA CITA AL PIPELINE (T4)?
