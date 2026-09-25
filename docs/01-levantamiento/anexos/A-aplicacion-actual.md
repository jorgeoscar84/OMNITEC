# Anexo A · Estado actual de la aplicación técnica

Auditoría realizada el 6 de septiembre de 2026 sobre la aplicación en producción, con un perfil técnico autenticado, en modo consulta y sin modificar ningún registro. Este anexo conserva únicamente lo que aporta información no disponible en el cuerpo del documento. Todo el análisis de rediseño ya está incorporado en los módulos (carpeta `modulos/`) y no se repite aquí.

## A.1 Qué es hoy la aplicación

Una **herramienta interna de documentación técnica**. Su valor real está en que reúne en un solo lugar los informes de reparación de laboratorio, los mantenimientos en sitio, el catálogo de precios de repuestos, el plan de frecuencias de los clientes, un mapa de repetidoras, la calculadora de arneses, los tickets de incidencia y las estadísticas operativas.

Lo que no hace, y es la razón del proyecto: no administra el trabajo. No existen recepción, cola técnica, asignación, tiempos por etapa, reserva de repuestos, aprobación formal del cliente ni cierre como objetos de negocio. Tampoco existe nada comercial.

## A.2 Volúmenes reales

| Dato | Cantidad | Observación |
| --- | --- | --- |
| Clientes en el maestro | 823 | Sin ningún contacto comercial registrado |
| Clientes en el módulo de frecuencias | 227 | Maestro independiente, sin relación con el anterior |
| Canales de frecuencia configurados | 669 | El conjunto de datos más valioso del sistema |
| Informes de laboratorio | 169 | Numerados del 2198 al 2372: serie heredada con saltos |
| Repuestos con precio | 218 visibles | El sistema declara 228: hay 10 sin marca asignada |
| Modelos de radio | 23 visibles | El sistema declara 25: hay 2 sin marca asignada |
| Marcas admitidas | 2 | Kenwood y Motorola, como restricción del programa |
| Repetidoras registradas | 5 | Una es un registro de prueba |
| Tickets de incidencia | 3 | Todos de un mismo cliente, todos cerrados |
| Técnicos activos | 3 | — |
| Clientes con actividad técnica | 48 | De 823 registrados |

## A.3 Módulos

| Módulo | Qué hace |
| --- | --- |
| Inicio | Ingresos del mes, pendientes, tasa de aprobación, ticket promedio, gráfico mensual, pendientes urgentes, producción por técnico y principales clientes |
| Informe de reparación en laboratorio | Tres pasos: encabezado, equipos y vista previa. Admite varios radios por informe |
| Historial de laboratorio | Búsqueda, contadores por estado, cambio de estado en línea, PDF y códigos QR por equipo |
| Mantenimiento general en sitio | Varios equipos agrupados por ubicación, con seis formatos de PDF |
| Historial de mantenimientos | Búsqueda, duplicación y exportación |
| Estadísticas | Ingresos, volumen, rotación de repuestos, modelos, productividad por técnico, principales clientes y tiempo de respuesta |
| Clientes | Maestro y ficha con historial de laboratorio |
| Frecuencias de clientes | Plan de canales por cliente |
| Ubicación de repetidoras | Mapa con capas, medición de distancias y tabla filtrable por banda |
| Precios de repuestos | Catálogo por marca y modelo, con edición del precio en línea |
| Utilidades | Cálculo de arneses entre repetidora y duplexor |
| Tickets de incidencia | Lista con severidad, estado y tiempo fuera de servicio |
| Administración | Técnicos, modelos, frases de diagnóstico, datos de empresa y utilidades de respaldo |

## A.4 El formato del informe técnico

Este formato figuraba como pendiente por entregar. Se documenta aquí tal como el sistema lo emite hoy, de modo que ya no hay que solicitarlo.

**Encabezado.** Logotipo, ciudad y fecha en texto extendido, número de informe. Bloque de empresa o cliente, y línea de “Presente”.

**Tabla de equipos.** Columnas: número de orden, falla reportada, marca y modelo, número de serie, mantenimiento preventivo o servicio, cambio, valor, y observaciones o diagnóstico. Cada equipo cierra con su total individual.

**Totales.** Subtotal, IVA y total. El IVA aparece rotulado con una tarifa fija dentro del documento.

**Recomendaciones.** Tres bloques de texto fijo sobre buenas prácticas de carga de batería, actuación ante filtración de líquidos, y manejo de la antena y del sellado del equipo.

**Garantía técnica.** Texto fijo que declara una garantía de 90 días —tres meses— desde la fecha de entrega de los equipos, con una cobertura acotada: aplica exclusivamente sobre la mano de obra realizada y los componentes o repuestos sustituidos indicados en el reporte, ante la reaparición del mismo síntoma o de la misma causa raíz de falla.

**Cierre.** Despedida, nombre del técnico responsable, departamento, teléfonos, correo y sitio web. Dos espacios de firma: técnico responsable y conformidad del cliente.

> Todos los textos fijos anteriores están escritos dentro del programa. Para cambiar una recomendación o un plazo de garantía hay que modificar el software. En la nueva plataforma son plantillas versionadas.

## A.5 Reglas y fórmulas verificadas

**Cálculo del informe de laboratorio.** Por equipo: si está marcado en garantía, el subtotal es cero; si está marcado como baja técnica, solo suma las líneas de diagnóstico; en caso normal suma todas las líneas aprobadas. El informe suma los equipos, aplica un IVA fijo y totaliza.

**Estados del informe.** Pendiente, aprobado, parcial y rechazado. El cambio se hace desde un desplegable en la propia lista, con efecto inmediato, sin motivo y sin registro de quién lo hizo.

**Marcas por equipo.** Garantía y baja técnica son excluyentes entre sí. La baja técnica admite marcar solo algunos equipos de una orden, y así se refleja en la lista.

**Clasificación del tiempo de respuesta.** Hasta cinco días, rápido; de cinco a doce, regular; más de doce, lento. Umbrales fijos. Con los datos actuales, todos los clientes quedan clasificados como lentos.

**Cálculo de arneses.** Longitud en centímetros igual a trescientos dividido entre la frecuencia en megahercios, multiplicado por la fracción de onda y por el factor de velocidad del cable, por cien. Calcula un cuarto, un medio, tres cuartos y una longitud de onda para transmisión y recepción, y sugiere los conectores según los extremos. Incluye siete tipos de cable con su factor de velocidad, seis modelos de repetidora y cuatro tipos de conector.

**Sesión.** Cierre por inactividad con aviso previo y sincronización entre pestañas. No hay administración de usuarios dentro del producto.

## A.6 Hallazgos priorizados

| Prioridad | Hallazgo |
| --- | --- |
| P0 | El impuesto se declara y se calcula con una tarifa fija dentro del programa, pese a existir un campo configurable en administración. |
| P0 | El número de informe se sugiere consultando el último registro, de modo que dos usuarios pueden recibir el mismo número. |
| P0 | No hay bitácora funcional: no se registra quién cambió un estado, un precio, un diagnóstico, un total o un cliente. |
| P1 | Las relaciones se establecen comparando el nombre normalizado del cliente. Un cambio de razón social rompe el historial y las estadísticas. |
| P1 | Existen dos maestros de clientes sin relación entre sí, con 823 y 227 registros. |
| P1 | En el módulo de frecuencias los sitios están registrados como si fueran clientes distintos. |
| P1 | El sitio del cliente vive como texto libre en el campo de ubicación, con variantes del mismo lugar escritas de formas distintas. |
| P1 | El indicador de tiempo de respuesta mide creación contra aprobación, con umbrales fijos, y clasifica a todos los clientes como lentos. |
| P1 | El gráfico anual agrupa por número de mes sin separar los años. |
| P1 | Los mantenimientos en sitio se fuerzan al estado aprobado para las estadísticas, sin tener un ciclo real de aprobación. |
| P1 | La infraestructura y las incidencias no están unidas: el ticket usa un campo libre pese a existir el catálogo de repetidoras. |
| P2 | La misma pieza figura con nombres distintos según el módulo, lo que impide resolver la compatibilidad por texto. |
| P2 | El catálogo global contiene un elemento nombrado por un cliente concreto. |
| P2 | Diez piezas y dos modelos no tienen marca asignada y no son visibles en la interfaz. |
| P2 | La exportación se ofrece como un formato y entrega otro. |
| P2 | Hay datos de prueba en producción. |

## A.7 Qué debe conservarse

La aplicación actual demuestra conocimiento real del oficio, y hay capacidades que sería un error perder en la reconstrucción:

- El informe con **varios equipos** y el mantenimiento con **varias ubicaciones**.
- La **carga por lote** y la **clonación de equipos** dentro de un informe.
- Los **accesos rápidos de repuestos** por modelo, que ahorran búsquedas al técnico.
- La **detección de series repetidas** dentro del informe y contra informes anteriores.
- El **autoguardado** del borrador.
- La **compresión de fotografías** antes de subirlas.
- Los **códigos QR por equipo**, con el contenido que exige REC-003.
- Los **seis formatos de PDF** del mantenimiento en sitio, que responden a necesidades comerciales distintas.
- La **calculadora de arneses**, con sus factores de velocidad y su sugerencia de conectores.
- El **mapa con capas y medición de distancias**.
- El **plan de frecuencias por cliente**, que es el activo de datos más valioso.
- La **asistencia de redacción** en diagnósticos y en los campos narrativos de incidencias.
- El **tema oscuro y claro** y la navegación móvil.

> **Nota de publicación.** Este repositorio es público. Se omitieron del anexo los hallazgos de seguridad de la aplicación en producción; constan en el informe de auditoría completo, que se conserva fuera del repositorio. Sus consecuencias ya están incorporadas como requisitos (IAM-002, IAM-005, REC-003, ADM-009, ADM-010).
