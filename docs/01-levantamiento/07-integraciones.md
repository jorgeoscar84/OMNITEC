# 07 · Integración con UpConta y servicios externos

[← Índice del levantamiento](README.md)

> **Verificación pendiente.** Todo lo que este documento afirma sobre la API de UpConta proviene de la lectura de su documentación pública hecha para la v3. En la v4 no se pudo volver a consultar ([docs.upconta.com](https://docs.upconta.com/) está bloqueado en el entorno de trabajo). **ANTES DE COMPROMETER FECHAS DEBE VERIFICARSE CADA FILA DE LA MATRIZ 10.2 CONTRA LA DOCUMENTACIÓN Y EL AMBIENTE DE PRUEBAS (D-01, D-11).**

## 10. Integración con UpConta y servicios externos

### 10.1 Qué es UpConta y qué expone

UpConta es el sistema contable elegido. Ofrece una API REST versionada, con **ambientes de prueba y de producción separados**, autenticación por token asociado a la empresa y a la aplicación, y convenciones uniformes de consulta: selección de campos, paginación, ordenamiento y búsqueda exacta o por coincidencia parcial.

Sus tres dominios relevantes son la facturación electrónica autorizada ante el SRI, la gestión de inventario con productos, servicios, categorías y bodegas, y la administración de personas: clientes, proveedores, transportistas y vendedores.

### 10.2 Matriz de capacidades

| Capacidad | Lectura | Escritura | Observación |
| --- | --- | --- | --- |
| Clientes | Sí | Sí — crear, editar y eliminar | Únicos por identificación y tipo. RUC de 13 dígitos, cédula de 10. Incluye un campo de vendedor asignado, útil para reflejar al asesor responsable. |
| Productos | Sí | Sí — crear, editar y eliminar | Un solo precio por producto. |
| Servicios | Sí | Sí | Mismo modelo que productos, en endpoint propio. |
| Categorías | Sí | Sí | — |
| Bodegas | Sí | Sí — crear, editar y eliminar | Se administra la bodega como entidad. |
| Impuestos y tarifas de IVA | Sí | No aplica | Se obtienen de un endpoint de opciones. Hoy publica ocho tarifas vigentes. **Debe consultarse siempre, nunca fijarse en código.** |
| Formas de pago | Sí | No aplica | Catálogo oficial del SRI más formas locales. |
| Facturas | Sí | **Sí — crear** | Admite además guardarla como borrador antes de emitir. |
| Envío de factura al cliente | — | Sí | UpConta envía el PDF y el XML por correo al emitirse. |
| PDF de la factura | Sí | — | — |
| Eliminación de comprobantes | — | Solo los fallidos | Un comprobante autorizado es inmutable. |
| Notas de crédito y débito, retenciones, guías de remisión | Sí | Sí | — |
| **Proformas o cotizaciones** | **No existen** | **No existen** | No figuran entre los tipos de comprobante. **Por eso la proforma vive en OMNITRONEC 360.** |
| **Listas de precio por categoría de cliente** | **No** | **No** | El producto tiene un único precio. Las listas comerciales las administra OMNITRONEC 360. |
| **Movimientos de inventario** | **No documentado** | **No documentado** | Se administran bodegas, pero la API pública no expone entrada, salida ni transferencia. |
| **Contactos múltiples por cliente** | **No** | **No** | El modelo de persona admite un solo teléfono y un solo correo. Los contactos los administra OMNITRONEC 360. |
| **Webhooks** | **No documentados** | — | La sincronización debe ser por consulta periódica. |

### 10.3 Consecuencias de diseño

Cinco decisiones se derivan directamente de la matriz anterior:

1. **La proforma es del CRM.** No es una preferencia: el sistema contable no tiene dónde guardarla.
2. **Las listas de precio son del CRM.** El cliente pidió precios diferenciados entre cliente final y distribuidor; UpConta guarda un precio por producto. La plataforma mantiene sus listas y envía el precio final en cada línea de factura.
3. **Los contactos son del CRM.** El requisito de varias personas por empresa, con cargo y departamento, no cabe en el modelo contable.
4. **La custodia es del CRM.** Mientras no existan movimientos de inventario por API, la cadena de custodia se lleva completa en la plataforma y se concilia por otro medio.
5. **La sincronización es por consulta.** Sin webhooks, se requiere un proceso periódico con marca de última conciliación y una cola de excepciones.

### 10.4 Requisitos de la integración

| ID | Requisito | Prioridad |
| --- | --- | --- |
| API-001 | Toda entidad compartida guarda el identificador de UpConta como referencia externa estable. | P0 |
| API-002 | Las tarifas de impuesto se obtienen del catálogo de opciones y se congelan en el documento emitido. | P0 |
| API-003 | La creación de factura usa clave de idempotencia: un reintento nunca produce dos comprobantes. | P0 |
| API-004 | Los estados del comprobante se reflejan en la ficha del cliente y en la oportunidad. | P0 |
| API-005 | El modo sin conexión del SRI y sus reintentos automáticos se muestran al usuario, sin bloquear el flujo comercial. | P1 |
| API-006 | La sincronización periódica conserva la fecha de última conciliación por entidad. | P0 |
| API-007 | Todo error crea una excepción visible y accionable; nunca una inconsistencia silenciosa. | P0 |
| API-008 | Las credenciales se guardan cifradas, son rotables y nunca llegan al navegador. | P0 |
| API-009 | La integración se desarrolla y se prueba contra el ambiente de pruebas antes de tocar producción. | P0 |
| API-010 | Toda función que dependa de UpConta define su comportamiento cuando la integración no responde. | P0 |
| API-011 | Panel de salud de la integración con estado, última sincronización, errores y reintentos. | P1 |

### 10.5 Otros servicios externos

| Integración | Función | Requisitos mínimos |
| --- | --- | --- |
| WhatsApp Business | Inbox, mensajes individuales, plantillas y campañas | Notificaciones entrantes, estados de entrega, baja del destinatario, varios números y control de límites |
| Correo transaccional y masivo | Envío individual y campañas | Remitentes verificados, rebotes, bajas, autenticación del dominio y eventos de entrega |
| Calendario corporativo | Sincronización de disponibilidad y eventos | Autorización delegada, resolución de conflictos, privacidad y renovación de permisos |
| Videollamada | Reuniones | Creación de enlace, invitados y registro del resultado |
| Formularios web y redes | Captación | Atribución de origen, consentimiento, deduplicación y protección contra spam |
| Almacenamiento de documentos | Documentos y evidencias | Versionado, permisos, enlaces firmados y retención |
| Proveedores de modelos de lenguaje | Agentes especializados | Aislamiento, registro, límites de consumo, evaluación y privacidad |
| Mapas | Sitios, distancias y rutas | Geocodificación, cuotas, precisión declarada y funcionamiento sin conexión |

### 10.6 Solicitudes de desarrollo a UpConta (antes anexo C)

UpConta admite desarrollos a medida y la apertura de funciones adicionales de su API según los requerimientos de un cliente. Este anexo recoge, ordenadas por impacto, las capacidades cuya ausencia obliga hoy a compensar desde OMNITRONEC 360 o a trabajar de forma manual.

Cada solicitud indica qué se pide, por qué se necesita y qué ocurre si no se concede. **Ninguna de ellas es bloqueante**: la plataforma está especificada para funcionar sin todas ellas. Pero cada una que se conceda elimina trabajo manual y reduce el riesgo de descuadre contable.

#### C.1 Prioridad alta

**1. Movimientos de inventario por API: entrada, salida y transferencia entre bodegas.** *Por qué.* Es la solicitud más importante. Toda la cadena de custodia de OMNITRONEC consiste en movimientos entre bodegas: el equipo del cliente entra a la bodega de recepción, pasa a la bodega técnica, puede salir a la bodega de un proveedor externo y regresa. UpConta permite administrar las bodegas, pero su API pública no expone las operaciones de movimiento. *Si no se concede.* La custodia se lleva íntegramente en OMNITRONEC 360 y la conciliación con contabilidad se hace por otro medio, con riesgo de descuadre y trabajo manual recurrente.

**2. Notificaciones automáticas de cambios (webhooks).** *Por qué.* Sin ellas, la plataforma debe consultar periódicamente para enterarse de que una factura fue autorizada, rechazada o anulada, o de que un precio cambió. Eso implica latencia y consumo innecesario. *Si no se concede.* Sincronización por consulta programada, con marca de última conciliación y una cola de excepciones.

**3. Listas de precio por categoría de cliente.** *Por qué.* El negocio distingue cliente final y distribuidor, con precios distintos para el mismo producto. Hoy el modelo de UpConta admite un solo precio por producto. *Si no se concede.* OMNITRONEC 360 administra sus propias listas comerciales y envía el precio ya resuelto en cada línea de la factura. Funciona, pero el precio comercial deja de estar en contabilidad.

**4. Consulta de existencias por bodega y producto.** *Por qué.* La orden técnica necesita mostrar disponibilidad real antes de comprometer una reparación o una fecha. *Si no se concede.* El técnico consulta el stock fuera del sistema, que es exactamente lo que se quiere eliminar.

#### C.2 Prioridad media

**5. Documento de proforma o cotización.** *Por qué.* Si UpConta incorporara la proforma como tipo de documento con conversión directa a factura, se simplificaría el flujo comercial. Conviene señalarlo aunque la decisión ya esté tomada. *Nota.* Aun así, la proforma de OMNITRONEC necesita versionado, historial de negociación, texto persuasivo condicional y duplicación entre sucursales. Es probable que la proforma comercial deba seguir viviendo en la plataforma incluso si UpConta la incorpora. Lo verdaderamente necesario es la creación de factura, que ya existe.

**6. Varios contactos por cliente, con cargo, departamento, correo y teléfono propios.** *Por qué.* El modelo actual admite un solo teléfono y un solo correo por persona. El negocio necesita registrar al representante legal y a varios encargados por área. *Si no se concede.* Los contactos son propiedad de OMNITRONEC 360, que es la decisión ya adoptada.

**7. Campos personalizados o información adicional en el cliente.** *Por qué.* Industria, provincia operativa, categoría comercial y tipo de cliente son la base de la segmentación. Los productos ya admiten información adicional; sería coherente extenderlo a las personas. *Si no se concede.* La segmentación vive solo en la plataforma y no está disponible para reportes contables.

**8. Consulta de pagos y estado de cobro de una factura.** *Por qué.* El cliente definió que la venta pueda marcarse como ganada al facturar **o al recibir el pago**. Esa segunda regla exige conocer el estado de cobro. *Si no se concede.* La regla de cierre por cobro no puede automatizarse y debe marcarse a mano.

#### C.3 Prioridad baja

**9. Endpoint de conciliación por lote.** *Por qué.* Permitiría contrastar en una sola llamada los identificadores y las fechas de modificación de un conjunto de registros, en lugar de recorrer páginas completas.

**10. Ampliación de la vigencia del token o credenciales de servicio renovables.** *Por qué.* El token actual tiene una fecha de fin de sesión. Una integración desatendida necesita renovación automática y previsible.

**11. Registro de auditoría consultable por API.** *Por qué.* El historial de cambios existe dentro de cada registro; exponerlo de forma consultable permitiría conciliar quién modificó un precio o un cliente desde cada lado.

**12. Ambiente de pruebas con datos de ejemplo cargados.** *Por qué.* Acelera el desarrollo y permite probar casos límite sin construir primero un catálogo completo a mano.

#### C.4 Preguntas a resolver con el proveedor antes de firmar

1. ¿Cuáles son los límites de peticiones por minuto y por día, y qué ocurre al superarlos?
2. ¿Cuál es la vigencia real del token y cuál es el procedimiento de renovación desatendida?
3. ¿Se puede crear un usuario de servicio con permisos restringidos, distinto de un usuario humano?
4. ¿La eliminación de un producto o de un cliente es física o lógica? ¿Qué ocurre si está referenciado en un comprobante?
5. ¿Qué sucede exactamente cuando el SRI está fuera de servicio y el comprobante queda en modo diferido? ¿Cómo se notifica el desenlace?
6. ¿Existe control de concurrencia al editar un mismo registro desde dos sistemas?
7. ¿Los establecimientos y puntos de emisión pueden mapearse a las sedes de OMNITRONEC?
8. ¿Cuál es el compromiso de disponibilidad del servicio y cómo se comunican las ventanas de mantenimiento?
9. ¿LA INTERFAZ DE UPCONTA TIENE COTIZACIONES O PROFORMAS QUE NO ESTÉN EXPUESTAS EN LA API? ¿SE PUEDEN CONVERTIR EN FACTURA DESDE FUERA? *(nuevo v4, D-11)*
10. ¿LA DOCUMENTACIÓN PÚBLICA COINCIDE CON LO QUE INCLUYE EL PLAN CONTRATADO: CREACIÓN DE CLIENTES, PRODUCTOS Y FACTURAS, Y FACTURAS EN BORRADOR? *(nuevo v4, D-01, R-09)*
11. ¿EXPONE LA API EL ESTADO DE COBRO DE UNA FACTURA? SIN ESO NO SE PUEDE AUTOMATIZAR EL CIERRE «AL COBRAR» (VEN-003). *(nuevo v4)*
