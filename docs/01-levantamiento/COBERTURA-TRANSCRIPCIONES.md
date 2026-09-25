# Cobertura de las transcripciones

[← Índice del levantamiento](README.md)

El cliente pidió en T3 un consolidado «sin dejar nada, absolutamente nada de los detalles por fuera». Esta tabla es la prueba: recorre las cuatro grabaciones en orden y dice dónde quedó cada punto. Los textos están resumidos, no citados, salvo cuando la frase exacta importa.

**Cómo usarla.** Para validar con el cliente, basta con leer la segunda columna: si algo que dijo no aparece, falta. Para rastrear un requisito hacia su origen, se busca su identificador en la última columna.

Fuentes: **T1** = 12:38 · **T2** = 14:32 · **T3** = 16:16 · **T4** = 16:55.

## T1 — Área técnica, productos, reportes e integración contable

| # | Qué dijo o pidió el cliente | Dónde quedó |
| --- | --- | --- |
| 1 | Los clientes tienen rol, provincia, categoría e industria: florícolas, alimentos, petroleras, constructoras, seguridad | M02 campos maestros, CLI-005, `data/semillas/industrias.csv` |
| 2 | Todo cliente que entrega equipos firma un acta de recepción con el estado de cada equipo | REC-001, REC-004 |
| 3 | Distinguir cuándo llegó el equipo a la empresa y cuándo llegó al área técnica, para medir ese tiempo | REC-005, REC-012, LAB-005 |
| 4 | Tras el diagnóstico se envía al cliente el informe técnico con partes, piezas y repuestos necesarios | LAB-002, LAB-003, M11 (proforma técnica) |
| 5 | El presupuesto incluye mano de obra según la cantidad de equipos y descuentos para un cliente específico | LAB-003, COT-019 |
| 6 | Si no hay repuestos en almacén se piden a los *dealers*; ese tiempo se mide aparte | LAB-005, LAB-019, M20 |
| 7 | La reparación empieza cuando llegan los repuestos; el técnico no responde por esas esperas | LAB-006, LAB-008 |
| 8 | Al final se muestra al cliente que todo funciona y firma que recibe en orden | LAB-014 |
| 9 | El indicador macro es lo que ve el cliente: desde que entregó hasta que recibió | Indicador «tiempo total percibido» (08, sección 11.2) |
| 10 | Subdividir el proceso para saber si falló atención, diagnóstico, compras o el cliente al aprobar | LAB-005, LAB-006, BI-009 |
| 11 | Poder demostrar al cliente que tardó dos semanas en responder | LAB-005, REC-006 |
| 12 | Radiocomunicación: portátiles, móviles y bases; infraestructura: repetidoras, duplexores, antenas, fuentes de poder; conectores y arneses | M12 taxonomía, `data/semillas/categorias-producto.csv` |
| 13 | Distinguir confección, reparación, calibración y ajuste | CAT-003, LAB-004, `data/semillas/tipos-servicio.csv` |
| 14 | Otros equipos que se reparan: impresoras, controles de acceso y más, con categoría macro y micro. «Necesito que tú hagas esa estructura» | CAT-014, P-16, semilla de categorías. Pregunta sobre «impresoras hebras» en 16.5 |
| 15 | Hay reparaciones externas: se registran proveedores técnicos externos y siguen el mismo flujo | M15, EXT-001 |
| 16 | El área técnica decide derivar lo que no puede reparar, con una plantilla de envío: fecha, equipos y problema detectado | REC-009, EXT-002, EXT-003 |
| 17 | El acta de salida es digital e imprimible e incluye las solicitudes del cliente, como la fecha en que lo necesita | EXT-010 |
| 18 | Controlar cuándo vuelve a ingresar el equipo | EXT-003, REC-010 |
| 19 | Los movimientos de bodega (recepción, técnica, externa) son del sistema contable y no generan costo | INV-008, D-02, contradicción en 15.3 |
| 20 | «Si en el punto B hay un informe, en el punto A alguien ya introdujo esos datos»: no se vuelve a escribir nada | Principio «una sola captura» (3.3), REC-002, COT-002 |
| 21 | Definir la estructura exacta del informe técnico, «hasta con un dibujito en una hoja A4» | P-02 resuelto, anexo A (A.4) |
| 22 | Reporte diario y semanal de técnicos: revisados, reparados, informes emitidos, aprobados, por empresa y por equipo | BI-014 |
| 23 | Costo del repuesto y precio de venta al cliente final, para conocer la rentabilidad por equipo | CAT-015, BI-010 |
| 24 | Con salario fijo, comparar lo producido por cada colaborador con lo que cuesta | BI-015, D-10 |
| 25 | Reportes por día, semana, mes, año y rango libre de fechas | BI-001 |
| 26 | Qué producto se repara más, cuál es más rentable y cuáles fallan más en 2 o 3 años | BI-010 |
| 27 | Lo financiero y contable lo lleva el sistema contable; esta plataforma es complementaria | Fuera de alcance (2.4), matriz 4.2 |
| 28 | Estado del equipo: nuevo o usado, de qué cliente es o si es de la empresa | REC-014 |
| 29 | Consultar productos y servicios del sistema contable por API | INV-002, CAT-007, API-001 |
| 30 | Dos pipelines: captación y postventa | VEN-001, POST-001 |
| 31 | En postventa: venta cruzada, *upselling*, descuentos, ofertas, un regalo | POST-010, POST-012 |
| 32 | Medir quiénes son clientes y quiénes están por serlo | M21, BI-011 |
| 33 | Un inbox común donde entran los leads de correo, WhatsApp, redes y formulario web | LEAD-001 |
| 34 | Medir el origen de cada lead («UTP», es decir, UTM) para saber qué canal funciona | LEAD-001, BI-008, glosario |
| 35 | El CRM lee productos, categorías y lo facturado para saber qué se vendió | VEN-007, CLI-014 |
| 36 | Estadística complementaria por cliente: cada cuánto compra y qué compra | CLI-014, BI-011 |
| 37 | Definir los paneles y KPI de cada proceso | M21, documento 08 |
| 38 | Debate: la proforma en el sistema contable, convertible en factura con un clic, o en el CRM | 4.3, D-11, COT-012 |
| 39 | El asesor no debería salir del CRM ni necesitar acceso al sistema contable | 4.3, COM-001, D-11 |
| 40 | Listas de precio por categoría de cliente: final y distribuidor | CAT-008 |
| 41 | Generador de catálogo con la marca de la empresa, desde los productos y sus imágenes | COT-018 |
| 42 | Proforma a cliente final con texto persuasivo; a distribuidor, solo valores y garantía, y la IA no genera texto | COT-006, COT-007 |
| 43 | Carta de presentación: plantilla hecha fuera e importada; se completa con los datos del cliente de la conversación y se envía por el mismo WhatsApp | M11 (carta), COT-002, COT-003 |
| 44 | Proforma rápida desde el cliente: cantidad, modelo, precio ajustable; decorosa, no publicitaria | COT-004, COT-017 |
| 45 | Poder hacer la proforma aunque falten datos del posible cliente | COT-016 |
| 46 | Flujo corto: crear posible cliente, elegir productos y servicios, enviar | M11, ciclo de la proforma |
| 47 | Ejemplo de pipeline: lead, negociación, proforma enviada, cierre y acuerdos, ganado con factura | M04 etapas iniciales, D-13 |
| 48 | Que el CRM ordene al sistema contable «facture esto» | COT-012, API-003 |
| 49 | Guardar también los contratos en la plataforma | M10, M05 |

## T2 — Actas, documentos, ficha del cliente, campañas, calendario, roles y KPI

| # | Qué dijo o pidió el cliente | Dónde quedó |
| --- | --- | --- |
| 50 | El formato completo del acta de entrega es tarea de José | P-01 |
| 51 | En tableta: firma, nombre, cédula y hora; lo demás, digital; el cliente existe o se crea en el momento | REC-001, REC-013, REC-015 |
| 52 | Que el acta llegue al WhatsApp del cliente | REC-008 |
| 53 | Salir con un código que se pone en el radio y con el que se sabe de qué cliente es | REC-003 |
| 54 | Recepción marca «entregado» sin poder quitarlo; técnica marca «recibido»; vistas por departamento | REC-005, REC-006 |
| 55 | Lo ingresado en recepción (por garantía, «no se escucha») lo ve técnica | REC-002, REC-004 |
| 56 | Terminar con el papel en original y copia que se pierde y no se puede tabular | Problema 2 (1.2), REC-001 |
| 57 | Documentos por cliente: contratos de renta de frecuencia, caseta, infraestructura y equipos, hoy en Google Drive, en carpetas ordenadas | DOC-001, DOC-010, M10 carpetas |
| 58 | Buscar por nombre, correo, RUC o teléfono del cliente | DOC-002, CLI-011 |
| 59 | Carpetas de estudios de ingeniería, ARCOTEL y certificados comercial, de garantía y de frecuencia | M10 estructura inicial |
| 60 | Crear carpetas; admitir PDF, Word, txt, Excel, HTML, PowerPoint, JPG y PNG | DOC-001, DOC-003 |
| 61 | Importar y exportar documentos uno por uno o en bloque | DOC-004 |
| 62 | Contratos mixtos | POST-003 |
| 63 | La proforma a veces lleva transporte y logística a otras provincias; José debe pasar el formato | COT-004, P-20 |
| 64 | Campos personalizados en la ficha: fecha de inicio y caducidad del contrato y tipo de contrato | CLI-018, M02 (grupo Contrato), POST-002 |
| 65 | Tipos de contrato: frecuencia (tradicional o datos), caseta, infraestructura, equipos (POC o tradicional) | M05, `data/semillas/tipos-contrato.csv` |
| 66 | Estudio de ingeniería con inicio y caducidad; alerta un mes antes y en secuencia; el asesor ve lo que vence y lo vencido | CAM-009, CAM-010, POST-004, POST-011 |
| 67 | Póliza ARCOTEL: suele renovarse cada año aunque puede ser a cinco; avisar un mes antes por correo o WhatsApp | FREQ-004, FREQ-005, FREQ-011, POST-007 |
| 68 | Fecha de compra de equipos, que puede repetirse; aviso de mantenimiento al año | CLI-009, POST-005, POST-006 |
| 69 | Fecha de mantenimiento, que puede repetirse, contada desde la entrega; aviso un mes antes del año | POST-006, CLI-009 |
| 70 | Historial de lo que compra cada cliente: productos, ticket, precio, facturas | CLI-014 |
| 71 | Todo esto exige integración con el sistema contable por API | Documento 07, API-001 a API-011 |
| 72 | Campos de siempre: provincia, categoría, RUC, correo, teléfono, WhatsApp, nombre comercial y contactos | M02 campos maestros, CLI-002 |
| 73 | Filtrar por categoría en el CRM y en los gráficos del panel gerencial | BI-006, M21 |
| 74 | Historial de conversación y notas importantes de lo acordado | CLI-006, CLI-007, COM-004 |
| 75 | «Proponme lo que falte», sin un CRM abrumador y con buena experiencia de uso | Principios 12.1, M02 recomendaciones, R-07 |
| 76 | Representante legal, cédula, teléfono de la empresa y varios contactos con departamento, cargo, teléfono y correo | CLI-002, CLI-003 |
| 77 | Fecha de nacimiento para felicitar en el cumpleaños con un mensaje preconfigurado | M02 (Contacto), MKT-016 |
| 78 | Mensajes predeterminados configurables (cumpleaños, caducidad de contrato…), también en cadena, cada cierto tiempo, a una hora, un día de la semana o al mes | MKT-015, MKT-004 |
| 79 | Recomendar cómo integrar el envío por SMTP o un servicio masivo como AWS | MKT-017, D-08, DEC-012 |
| 80 | Varios correos y varios números de WhatsApp: uno de marketing y otro de atención; todos los asesores en un inbox común | MKT-008, MKT-009, LEAD-001 |
| 81 | Agendar eventos desde la ficha en cualquier etapa, sin que se crucen | CAL-001, CAL-002, CAL-013 |
| 82 | Presenciales, llamadas y videollamadas (Zoom o Google Meet) | M06 tipos de evento |
| 83 | En visitas presenciales, tiempo de viaje obligatorio y tiempo de preparación, por cliente o ubicación; local o interprovincial | CAL-003, CAL-004 |
| 84 | Interprovincial: aviso en pantalla y al celular, 48 horas más el viaje; local: 2 horas más el viaje | CAL-005, CAL-006, CAL-007 |
| 85 | El tiempo con el cliente (minutos, horas o días) también bloquea la agenda o al menos alerta | CAL-002, CAL-013 |
| 86 | Roles: asesor, supervisor (jefe de departamento) y administrador general; estructura configurable; permisos granulados | IAM-003, IAM-004, IAM-005 |
| 87 | El supervisor observa y controla a su equipo; gerencia y jefaturas tienen panel de KPI | IAM-009, BI-006 |
| 88 | KPI del asesor: ticket promedio, clientes atendidos, conversión, productos y categorías que más vende | BI-007 |
| 89 | Reparto equitativo de leads por rondas, sabiendo el origen de cada uno | LEAD-006, LEAD-001 |
| 90 | Medir el tiempo de respuesta del asesor | LEAD-008, indicador «primera respuesta» |
| 91 | El asesor ve su meta y su plan de compensación | VEN-011 |
| 92 | Marcar vacaciones o ausencias por fechas u horas para que los leads vayan a otro asesor | DISP-002, DISP-003 |
| 93 | Reasignar leads y citas del ausente con todo su historial y su etapa | DISP-004, LEAD-009 |
| 94 | Notas de llamadas y acuerdos, tantas como hagan falta y persistentes | COM-004, COM-005 |
| 95 | Puntuación de clientes (*scoring*) para priorizar | CLI-013, M22 (agente de scoring) |
| 96 | Considerar el tipo de producto y el tamaño de la proforma para priorizar | CLI-013 (señal de valor) |
| 97 | Semáforo manual: verde, naranja o rojo | CLI-013, M02 lógica funcional |
| 98 | Objeciones y sugerencias por producto o categoría, tabulables por jefatura y gerencia | HAB-003, HAB-004 |
| 99 | Speech por categoría de producto y tipo de cliente; lo nutren los asesores; jefatura y gerencia editan y fijan | HAB-001, HAB-005, HAB-008 |
| 100 | Puntos fuertes a comunicar por producto y categoría de cliente | HAB-002 |
| 101 | Todo esto de forma minimalista y práctica | Principios 12.1 |
| 102 | IA configurable con agentes especializados por área (speech, objeciones, campañas) y varias API de LLM; nunca un agente que lo sepa todo | IA-001, IA-002, IA-019 |
| 103 | Plantillas de campaña con campos que se completan solos (nombre, empresa) y reutilizables | MKT-003 |
| 104 | Archivos en campañas: imagen, audio, video y texto; documentos solo en PDF | MKT-005 |
| 105 | Formato con emojis y negritas, muy comercial y visual; logotipo cargado a nivel central | MKT-006, ADM-013 |
| 106 | Los eventos se crean desde el panel del cliente; lista de pendientes por fecha; vista de calendario por día, semana y mes | CAL-001, CAL-014 |
| 107 | Un evento creado en el calendario puede ligarse a un cliente para que le llegue la notificación | CAL-015 |
| 108 | Vincular Google o Outlook para trabajo extraordinario; detectar choques; lo externo nunca tiene prioridad sobre el horario laboral | CAL-008, CAL-010 |
| 109 | Horarios laborales configurables por asesor, ligados al reparto de leads | DISP-001, CAL-009 |

## T3 — Paneles gerenciales, correo con IA, orden del documento y proformas

| # | Qué dijo o pidió el cliente | Dónde quedó |
| --- | --- | --- |
| 110 | Todo KPI gerencial debe haberse registrado antes en una ficha o por un usuario | BI-002, BI-003, principio «KPI con evidencia» |
| 111 | Proformas enviadas por asesor, número de ventas, ticket y monto, por asesor y total, con rango de fechas | BI-007, BI-001 |
| 112 | Llamadas realizadas y correos enviados, distinguiendo los manuales de los de campaña | COM-003, indicador «actividad» (08) |
| 113 | Desde la ficha, enviar WhatsApp o correo con plantillas y adjuntos | COM-001, COM-006 |
| 114 | Correo con banner, asunto y cuerpo, conectado a un servicio SMTP, y también escrito a mano | MKT-007, COM-001 |
| 115 | Correo vinculado «sí o sí» con IA, que lea la ficha, las notas, el historial, los acuerdos, los eventos, el producto de interés, la proforma, las objeciones y el speech | COM-008, M08 (contexto de la IA), fase 2 (14.4) |
| 116 | Que la IA detecte la intención: saludo, envío de información, seguimiento o recompra | COM-012 |
| 117 | WhatsApp breve, lo mejor al inicio, llamada a la acción profesional, párrafos cortos, negritas y emojis | MKT-006 |
| 118 | Ordenar todo y ubicar cada detalle en su módulo, aunque se haya dicho tarde; no dejar nada fuera | Estructura v4, este documento |
| 119 | Pendiente: lista de categorías, productos, partes, piezas, repuestos y servicios | P-07, P-08 |
| 120 | Pendiente: nichos e industrias (construcción, minería, seguridad, educación…) como listas seleccionables | P-06, `data/semillas/industrias.csv` |
| 121 | Todo preconfigurado, editable, borrable, y con un botón «+» en todas partes | ADM-001, ADM-004, ADM-014 |
| 122 | Recordar la lógica de las cotizaciones y de la carta de presentación | M11 |
| 123 | Escribir en MAYÚSCULAS todo apartado en el que falte información | Convención «FALTA INFORMACIÓN» |
| 124 | La proforma en el CRM o en el sistema contable: «después decidiremos» | D-11 |
| 125 | Si va en el CRM, proformas con la marca y un estilo gráfico muy bonito | COT-017 |
| 126 | El formato de proforma es otra tarea de José | P-20 |
| 127 | Marcar en la etapa del pipeline que el cliente aprobó la proforma | VEN-002, COT-011 |
| 128 | Que el sistema contable acepte escritura por API para convertir la proforma en factura | D-01, COT-012 |
| 129 | Historial de proformas: la primera y la final, sin borrar la anterior | COT-008, VEN-008 |
| 130 | Duplicar la proforma para editar el duplicado | COT-005, COT-009 |
| 131 | Ver cuánto se pierde en la oferta, por producto o servicio | COT-010 |
| 132 | Detectar lo que hace que un cliente cierre | IA-020, M09 |
| 133 | Organizar el documento: visión, estructura macro, detalle por módulo con botones y funciones, lógica funcional e interconexión entre módulos | Estructura v4, 04 · Mapa de módulos (6.5 y 6.6) |
| 134 | El levantamiento debe dejar una preestructura que facilite el PRD | 13 · Directrices para el PRD, `docs/02-prd/` |

## T4 — Importación, bases frías, catálogos por plantilla y celebraciones

| # | Qué dijo o pidió el cliente | Dónde quedó |
| --- | --- | --- |
| 135 | Importar y exportar plantillas de bases de leads y clientes; exportar clientes solo el administrador | LEAD-002, LEAD-011, CLI-016, LEAD-014 |
| 136 | La plantilla incluye industria y provincia | LEAD-002 |
| 137 | Al subir una base fría, elegir si va al inbox o solo a campañas; el asesor sí puede subirla | LEAD-003, LEAD-014 |
| 138 | Cuando el contacto interactúa o responde, entra al pipeline | LEAD-004, MKT-010 |
| 139 | Campañas para webinars o reuniones con agendamiento, integradas con plataformas externas | LEAD-015 |
| 140 | La API preparada para conectar plataformas externas | 4.4, documento 07 |
| 141 | Catálogos sin datos por defecto, con plantillas exportables para cargarlos y corregirlos en bloque | ADM-002, ADM-014, contradicción en 15.3 |
| 142 | «Si ya te di los datos, haces la plantilla con los datos» | `data/semillas/` |
| 143 | Todo editable, borrable y modificable | ADM-004 (se desactiva en lugar de borrar), 15.3 |
| 144 | Al cerrar una venta, felicitación con confeti o fuegos artificiales, de intensidad según el tamaño de la venta, configurable y visible para todo el personal | VEN-014, VEN-015 |
