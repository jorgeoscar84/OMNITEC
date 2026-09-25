# M22 · Inteligencia artificial y agentes especializados

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M22 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Ayudar a priorizar, redactar, resumir, comparar y aconsejar, usando contexto gobernado y sin tomar decisiones irreversibles.

## El principio: agentes especializados, no un agente que lo sabe todo

El cliente fue categórico: **no debe existir un único módulo donde la inteligencia artificial conozca toda la empresa.** El conocimiento se segmenta por propósito, y cada agente recibe solo el contexto, las herramientas y la política que su función requiere. La razón que dio es directa: evitar que los agentes divaguen, alucinen o pierdan contexto.

La conexión se realiza por API mediante los proveedores estándar del mercado, y debe admitir más de un proveedor y más de un modelo configurados simultáneamente.

## Agentes previstos

| Agente | Función |
| --- | --- |
| Redacción comercial | Borradores de correo y WhatsApp con el contexto del cliente y de la oportunidad. |
| Speech de venta | Discurso por producto, categoría y tipo de industria del cliente. |
| Objeciones | Agrupación y sugerencia de respuesta a partir de las objeciones registradas. |
| Propuesta comparativa | Descrito en detalle más abajo. |
| Documentos | Creación y modificación de plantillas de documentos, con aprobación previa. |
| Paneles y gráficos | Generación de paneles de indicadores bajo demanda, sobre datos reales. |
| Asistencia técnica | Mejora de la redacción de diagnósticos, conservando hechos y mediciones. |
| Scoring | Puntuación de propensión, explicable y auditable. |
| Campañas | Secuencias y textos según el tipo de campaña. *(nuevo v4 — T2)* |

## El agente de propuesta comparativa

Es el caso de uso que el cliente describió con más detalle, y merece especificarse aparte porque combina varias capacidades.

Situación: un asesor está enviando una propuesta y el cliente pide otra alternativa de equipo o de solución.

El agente debe entonces:

1. **Consultar el inventario**, sus precios y las descripciones técnicas existentes.
2. **Buscar en internet** las características técnicas de aquellos productos que no las tengan registradas.
3. **Construir una propuesta comparativa** entre lo que se está ofreciendo y las alternativas disponibles en la empresa.
4. Comparar los **aspectos técnicos principales** y cerrar con la **relación de precios**.
5. Redactar con **enfoque comercial y persuasivo**.

Y una exigencia que el cliente subrayó: **el documento resultante debe ser editable.** El panel se diseña para que el asesor pueda modificar lo que el agente generó antes de enviarlo al cliente. La IA produce un borrador, no un documento final.

## Documentos y paneles generados por IA

- Los agentes pueden **crear o modificar plantillas de documentos** ya existentes —cartas de presentación, proformas y similares—, o recrearlas. La plantilla resultante **requiere aprobación previa** antes de quedar publicada.
- Las plantillas pueden expresarse en HTML y convertirse a PDF.

## Paneles de indicadores construidos a petición

Este es el segundo caso de uso que el cliente desarrolló con detalle, y define buena parte del carácter del producto.

La plataforma incorpora una **ventana de solicitud de paneles** donde un usuario —un asesor comercial sobre su propia información, una jefatura sobre su equipo, la gerencia sobre toda la operación, o el área técnica sobre la suya— **describe en lenguaje natural el panel que necesita**, y un agente lo construye en tiempo real sobre los datos realmente registrados en el sistema.

El panel resultante no es una imagen desechable:

- **Se guarda** con nombre y propietario, y queda disponible para volver a abrirlo.
- **Se gestiona**: se edita, se duplica, se comparte con los usuarios autorizados y se retira.
- **Se exporta** como informe, con los datos que lo componen, según lo que solicite quien lo pidió.
- **Se refresca** contra los datos vigentes cada vez que se abre.

El propósito declarado por el cliente es permitir análisis dinámicos según la necesidad comercial de cada momento, sin depender de que alguien programe un tablero. Es la diferencia entre una analítica fija y una analítica que responde preguntas.

Dos límites que este levantamiento añade y que el PRD debe respetar: el agente **solo puede consultar los datos que el rol del solicitante ya tiene autorizados** —un panel no es una vía para eludir permisos—, y todo panel muestra **la definición de cada indicador que presenta**, de modo que la cifra siempre se pueda auditar.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| IA-001 | Agentes separados por función, cada uno con su contexto, herramientas y política. | Confirmado | P1 |
| IA-002 | Uno o varios proveedores y modelos configurables, sin exponer credenciales al navegador. | Confirmado + propuesto | P1 |
| IA-003 | El contexto se limita a los datos autorizados y relevantes para la tarea. | Confirmado + propuesto | P0 |
| IA-004 | La IA nunca inventa una medición, un trabajo, un precio, una aprobación, una causa raíz ni un acuerdo. | Propuesto | P0 |
| IA-005 | Toda salida se presenta como borrador editable y exige aceptación humana antes de usarse. | Confirmado + propuesto | P0 |
| IA-006 | Se registra modelo, versión, agente, política, usuario y resultado aceptado. | Propuesto | P0 |
| IA-007 | El agente de propuesta comparativa consulta inventario, precios y fichas técnicas del sistema. | Confirmado — nota del cliente | P1 |
| IA-008 | Ese mismo agente puede buscar en internet las características que falten en el catálogo. | Confirmado — nota del cliente | P2 |
| IA-009 | La propuesta comparativa resultante es editable por el asesor antes de enviarse. | Confirmado — nota del cliente | P1 |
| IA-010 | Los agentes pueden crear o modificar plantillas de documento; su publicación exige aprobación. | Confirmado — nota del cliente | P2 |
| IA-011 | Existe una ventana donde el usuario describe en lenguaje natural el panel de indicadores que necesita, y un agente lo construye sobre datos reales. | Confirmado — nota del cliente | P2 |
| IA-012 | El panel generado se guarda, se edita, se duplica, se comparte y se retira, con propietario identificado. | Confirmado — nota del cliente | P2 |
| IA-013 | El panel se exporta como informe con los datos que lo componen. | Confirmado — nota del cliente | P2 |
| IA-014 | El alcance de datos del panel nunca excede los permisos del usuario que lo solicita. | Propuesto | P0 |
| IA-015 | Todo panel generado muestra la definición de cada indicador que presenta. | Propuesto | P1 |
| IA-016 | El speech y los puntos fuertes publicados tienen propietario y versión. El detalle está en M09. | Confirmado · ajustado v4 | P1 |
| IA-017 | El scoring explica sus factores, su fecha y su confianza, y no discrimina por atributos sensibles. | Propuesto | P0 |
| IA-018 | Un fallo del proveedor de IA no bloquea ningún flujo manual. | Propuesto | P1 |
| IA-019 | Agente de campañas: propone secuencias y textos según el tipo de campaña, con la misma política de borrador y aprobación humana. | Confirmado — T2 · nuevo v4 | P2 |
| IA-020 | El análisis de la evolución de las proformas —primera frente a final— propone los factores que llevaron al cierre, como sugerencia para la habilitación comercial. | Confirmado — T3 · nuevo v4 | P3 |

## Speech y objeciones: quién manda

El detalle funcional está en [M09 · Habilitación comercial](M09-habilitacion-comercial.md).

Tanto el administrador como cada asesor comercial pueden crear plantillas de speech, por producto y para un cliente específico. Pero la jerarquía es clara: **la jefatura de departamento y la gerencia tienen capacidad de edición y de fijar una versión para que no pueda seguir modificándose**, porque el speech define cómo se comunica la empresa, en qué tono y desde qué ángulo. El propósito de todo esto, en palabras del cliente, es que **un asesor comercial junior pueda sostener una negociación con apoyo**.

## Pendientes

- **FALTA INFORMACIÓN:** PROVEEDORES Y MODELOS DE IA PARA LOS AGENTES DEL PRODUCTO Y PRESUPUESTO MENSUAL DE CONSUMO.
