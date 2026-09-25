# M09 · Habilitación comercial: speech, puntos fuertes y objeciones

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M09 · **Nuevo en la v4.** Reúne lo que el cliente describió en T2 y que la v3 repartía entre la ficha del cliente y el módulo de IA (IA-016 y la sección «Speech y objeciones: quién manda» de M22). Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md).

**Propósito.** Dar al asesor, en el momento en que lo necesita, **qué decir, qué destacar y cómo responder** según el producto que ofrece y el tipo de empresa que tiene enfrente, y convertir las objeciones reales de los clientes en información para la jefatura y la gerencia.

El objetivo lo formuló el cliente: que un asesor comercial nuevo o junior pueda sostener una negociación con apoyo, y que la empresa hable con un solo tono y un solo ángulo comunicacional.

## Qué contiene

| Pieza | Qué es | Se define por |
| --- | --- | --- |
| **Speech de venta** | Discurso sugerido para presentar un producto o servicio. | Categoría o producto del catálogo **×** industria del cliente (florícola, petrolera, minera, seguridad…). |
| **Puntos fuertes** | Lista corta y concreta de lo que hay que comunicar «sí o sí»: los dolores del cliente y cómo el producto los resuelve. No es un discurso, son viñetas. | Producto o categoría **×** categoría de cliente. |
| **Objeciones y sugerencias** | Lo que el cliente pone como reparo o propone, registrado de forma estructurada durante la negociación. | Producto o categoría **×** oportunidad **×** cliente. |
| **Respuestas a objeciones** | Respuesta sugerida para una objeción frecuente, aprobada por la jefatura. | Objeción tipificada **×** producto o categoría. |

## Dónde aparece para el asesor

- **En la ficha del cliente y en la oportunidad**: al seleccionar un producto, una categoría o un paquete, el panel lateral muestra automáticamente el speech y los puntos fuertes que corresponden a ese producto y a la industria del cliente. No hay que buscarlos.
- **Al registrar una conversación o una nota**: acción «Registrar objeción o sugerencia», con el producto o la categoría preseleccionados desde la oportunidad.
- **En los borradores de IA** (M08 y M22): el agente de redacción y el de objeciones usan como base este contenido publicado y las objeciones ya registradas.

## Paneles y acciones

- **Biblioteca de speech**: Nuevo speech, Duplicar, Proponer cambio, Publicar, Fijar versión, Retirar, Ver historial.
- **Puntos fuertes**: Nuevo, Editar, Publicar, Fijar versión, Retirar.
- **Objeciones**: Registrar, Tipificar, Vincular respuesta, Ver frecuencia.
- **Análisis de objeciones** (asesor sobre lo suyo; jefatura sobre su equipo; gerencia sobre todo): tabulación por producto, categoría, industria, etapa del pipeline y asesor.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| HAB-001 | El speech de venta se define por categoría o producto y por industria del cliente, y se muestra automáticamente en la ficha y en la oportunidad según lo seleccionado. | Confirmado — T2 · nuevo v4 | P1 |
| HAB-002 | Los puntos fuertes a comunicar —dolores del cliente y cómo los resuelve el producto— se configuran por producto y por categoría de cliente, como lista breve y separada del speech. | Confirmado — T2 · nuevo v4 | P1 |
| HAB-003 | Las objeciones y sugerencias del cliente se registran de forma estructurada, vinculadas a producto o categoría del catálogo, a la oportunidad y al cliente. | Confirmado — T2 · nuevo v4 | P1 |
| HAB-004 | Las objeciones se pueden filtrar y tabular por producto, categoría, industria, etapa y asesor en los paneles del asesor, de la jefatura y de la gerencia. | Confirmado — T2 · nuevo v4 | P1 |
| HAB-005 | Los asesores y la administración pueden crear speech; la jefatura del departamento y la gerencia pueden editar cualquiera y fijar una versión para que no se modifique más. | Confirmado — T2 · nuevo v4 | P1 |
| HAB-006 | Cada pieza —speech, puntos fuertes y respuesta a objeción— tiene propietario, versión, estado (borrador, publicada, fijada, retirada) e historial. Una versión fijada solo la cambia quien la fijó o un rol superior. | Propuesto · nuevo v4 | P1 |
| HAB-007 | Los agentes de speech y de objeciones (M22) usan como base de conocimiento solo el contenido publicado de este módulo y las objeciones registradas a las que el usuario tiene acceso. | Propuesto · nuevo v4 | P1 |
| HAB-008 | Un asesor puede crear speech por producto y para un cliente específico. El de cliente específico queda para su uso; el general queda en borrador hasta que la jefatura lo publique para todos. | Confirmado (v3, T2) + propuesto · nuevo v4 | P2 |

## Lógica funcional y conexión con otros módulos

- Los productos y categorías vienen de **M12 Catálogo**; las industrias y categorías de cliente, de los catálogos de **M23 Administración**. Si un producto o una industria no existe allí, no se le puede asociar speech: primero se crea en su catálogo. *(concatenación que el cliente pidió explicitar en T3)*
- La industria del cliente se toma de su ficha (**M02**). Si la ficha no la tiene, el panel lo indica y ofrece completarla.
- Registrar una objeción en una oportunidad (**M04**) crea un evento en la línea de tiempo del cliente.
- La evolución de las proformas (**M11**, COT-010) puede sugerir factores de cierre (IA-020); la sugerencia entra como borrador, nunca se publica sola.

## Reglas

- El speech y los puntos fuertes definen cómo se comunica la empresa: **la última palabra es de la jefatura y la gerencia** (HAB-005).
- La IA puede proponer texto para esta biblioteca, pero **no publica ni fija** nada por su cuenta (IA-005).
- Una objeción registrada no se borra; se puede corregir su tipificación, y la corrección queda en el historial.

## Pendientes

- **FALTA INFORMACIÓN:** CONTENIDO INICIAL DE SPEECH, PUNTOS FUERTES Y OBJECIONES FRECUENTES POR INDUSTRIA Y POR CATEGORÍA DE PRODUCTO (P-19).
- **FALTA INFORMACIÓN:** LISTA DE TIPOS DE OBJECIÓN CON LOS QUE SE ARRANCA (PRECIO, PLAZO DE ENTREGA, COBERTURA, COMPETENCIA…) PARA PODER TABULARLAS DESDE EL PRIMER DÍA.
- **FALTA INFORMACIÓN:** ¿QUIÉN, ADEMÁS DE LA JEFATURA COMERCIAL Y LA GERENCIA, PUEDE FIJAR VERSIONES?
