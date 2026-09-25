# 02 · Ecosistema, límites y propiedad del dato

[← Índice del levantamiento](README.md)

Qué sistemas intervienen, quién es dueño de cada dato en **modo autónomo** (sin integración contable, el modo con el que se construye) y en **modo integrado** (con UpConta activo), y qué exige cualquier integración.

## 4. Ecosistema, límites y fuentes maestras

### 4.1 Sistemas involucrados

```text
      Canales de captación y comunicación
   web · formularios · redes · correo · WhatsApp · carga de bases
                           │
                           ▼
              ┌────────────────────────────┐
              │     OMNITRONEC 360         │
              │  CRM · servicio técnico    │
              │  frecuencias · documentos  │
              │  calendario · analítica    │
              └────────────────────────────┘
                ↙          ↓           ↘
        UpConta      Almacenamiento    Servicios externos
   clientes fiscales   documentos      calendario · video
   productos/precios   evidencias      mensajería · mapas · IA
   bodegas · facturas
```

### 4.2 Matriz de propiedad del dato, en sus dos modos

Esta matriz es normativa y se lee en dos columnas porque **la plataforma debe operar exista o no exista la integración contable**.

- **Modo autónomo** es el comportamiento por defecto: OMNITRONEC 360 administra el dato de forma completa, con su propia interfaz de alta, edición y consulta. Es el modo con el que se construye y con el que se entrega la primera versión.
- **Modo integrado** es el comportamiento cuando el conector contable está activo y la capacidad concreta está disponible. Añade sincronización y evita la doble captura, pero no habilita ninguna función que antes no existiera.

Activar o desactivar el conector **no puede requerir cambios en los módulos de negocio**. Es una decisión de configuración, no de desarrollo.

| Dato | Modo autónomo | Modo integrado |
| --- | --- | --- |
| Identidad, roles, permisos y estructura interna | OMNITRONEC 360 | Sin cambio |
| Disponibilidad: horarios, ausencias y sustituciones | OMNITRONEC 360 | Sincroniza con el módulo de personal si existe |
| Prospectos aún no convertidos | OMNITRONEC 360 | Sin cambio |
| Contactos, notas, etiquetas y consentimientos | OMNITRONEC 360 | Sin cambio: el modelo contable no los admite |
| Segmentación: industria, provincia, categoría | OMNITRONEC 360 | Sin cambio |
| Cliente fiscal | OMNITRONEC 360 lo crea y lo administra | UpConta pasa a ser fuente preferente; se enlaza por identificador externo y se concilia |
| Productos, servicios y códigos | OMNITRONEC 360 mantiene su catálogo completo | Lee de UpConta y escribe hacia él lo creado localmente |
| Precio base e impuesto por producto | OMNITRONEC 360, con tarifas configurables | Toma la tarifa vigente del catálogo contable |
| Listas de precio comerciales por categoría de cliente | OMNITRONEC 360 | Sin cambio: la capacidad no existe en el contable |
| Existencias y bodegas | OMNITRONEC 360 lleva su propio control de disponibilidad y ubicación | Consulta y concilia contra el contable |
| Reservas de repuesto con vencimiento | OMNITRONEC 360 | Sin cambio |
| Cadena de custodia y movimientos entre bodegas | OMNITRONEC 360 | Publica el movimiento al contable cuando la capacidad exista |
| Sitios, activos e infraestructura | OMNITRONEC 360 | Sin cambio |
| Plan de frecuencias y canales | OMNITRONEC 360 | Sin cambio |
| Garantías: catálogo y vigencias | OMNITRONEC 360 | Sin cambio |
| **Proforma y sus versiones** | **OMNITRONEC 360** | Sin cambio: no existe en el contable |
| Factura y documentos fiscales | OMNITRONEC 360 emite un documento interno de venta y deja la emisión fiscal como tarea pendiente | Crea el comprobante en UpConta y refleja su estado |
| Comunicaciones, eventos y tareas | OMNITRONEC 360 | Sincroniza con calendario externo |
| Documentos y evidencias | Repositorio de OMNITRONEC 360 | Sin cambio |

> **Única excepción, y es legal, no técnica.** La emisión de comprobantes electrónicos autorizados ante el organismo tributario solo puede realizarla un sistema habilitado para ello. En modo autónomo la plataforma registra la venta, genera su documento interno y deja constancia de que la facturación fiscal está pendiente; no simula ni sustituye una factura electrónica. Esta es la única capacidad del producto que no puede resolverse por completo desde dentro.

### 4.3 Decisión sobre la proforma

La versión anterior de este documento registraba una contradicción entre dos posturas: generar la proforma en el sistema contable para convertirla en factura de un clic, o generarla en el CRM para que el asesor no cambie de contexto y conserve versiones, plantillas y seguimiento.

**La decisión está cerrada a favor del CRM**, y no por preferencia sino por un hecho verificable: UpConta no contempla la proforma entre sus tipos de comprobante. Su catálogo publica factura, nota de venta, liquidación de compra, nota de crédito, nota de débito, guía de remisión, comprobante de retención y ticket aéreo. La proforma no existe allí, de modo que no puede vivir allí.

El flujo queda así:

> El asesor arma la proforma en OMNITRONEC 360, sobre la ficha del cliente y sin cambiar de aplicación → la plataforma consulta a UpConta el catálogo, el código, el precio base y la tarifa de IVA de cada línea → aplica la lista de precios comercial que corresponda a la categoría del cliente → calcula totales en el servidor y emite una versión numerada → envía la proforma al cliente por el canal activo → el cliente acepta, rechaza o pide cambios; cada cambio genera una nueva versión sin borrar la anterior → al aceptarse, la plataforma solicita a UpConta la creación de la factura, referenciando los identificadores de cliente y de producto → UpConta emite ante el SRI y envía el PDF y el XML al cliente → el resultado de la emisión regresa al CRM y marca la oportunidad como ganada según la regla configurada

> **Riesgo que debe vigilarse.** Todo el flujo anterior depende de que la escritura hacia UpConta funcione con el contrato contratado y con los permisos del usuario de servicio. La documentación pública indica que la creación de facturas, clientes y productos está soportada, pero eso debe confirmarse en el ambiente de pruebas **antes** de comprometer fechas de entrega. Si la escritura no estuviera disponible, la plataforma debe seguir emitiendo y versionando proformas con normalidad y ofrecer una acción de “enviar a facturar” que genere una tarea para contabilidad con todos los datos listos. La proforma nunca deja de funcionar por una limitación de la integración.

### 4.4 Qué exige una integración, más allá de copiar tablas

Toda integración de esta plataforma debe definir, sin excepción:

- El identificador externo estable con el que se relaciona cada entidad.
- El propietario del dato y la dirección permitida de escritura.
- La frecuencia y el disparador de sincronización.
- El mapeo de estados y catálogos entre ambos sistemas.
- El tratamiento de duplicados y de conflictos.
- Reintentos, idempotencia y conciliación.
- El registro de errores y las acciones manuales de recuperación.
- **El comportamiento cuando la integración no está disponible.**
