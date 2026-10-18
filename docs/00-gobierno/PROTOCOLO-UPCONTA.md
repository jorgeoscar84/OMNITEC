# Protocolo de integración · UpConta API v3

> **⚠ AVISO (18 oct 2026): BORRADOR NO VERIFICADO.** Este documento se escribió en la sesión del 27 sep y contiene suposiciones que la documentación de UpConta no respalda (por ejemplo, un endpoint para emitir una factura desde un borrador, o un campo `reference` para deduplicar). No es fuente de verdad. Mandan la documentación oficial de UpConta y el capítulo 07 del levantamiento. Se reescribe en la fase de arquitectura de la integración (plan maestro, etapa I1).


**Estado:** Borrador no verificado · **Versión:** 1.0 · **Fecha:** 2026-09-27 · **Fuente:** UpConta API docs v3 (convertidas 2026-09-27)

---

## 1. Alcance

Este documento define cómo OMNITRONEC 360 interactúa con UpConta v3, qué capacidades se usan, qué se evita y cómo resolver las restricciones de diseño que la API impone.

**Decisiones que este protocolo resuelve:**
- **DEC-007:** Autonomía funcional — OMNITRONEC funciona sin UpConta; la integración es opcional.
- **D-02** (Seguimiento de custodia): Los "movimientos" de UpConta no son movimientos de inventario, son cambios en el historial. La custodia la gestiona OMNITRONEC.
- **D-11** (Ubicación de la proforma): Se emite en UpConta; sincroniza en tiempo real con OMNITRONEC.

---

## 2. Módulos de UpConta disponibles

| Módulo | Endpoints | Uso en OMNITRONEC | Notas |
| --- | --- | --- |--- |
| **Negocios** | `GET /businesses`, `GET /business/{id}` | Validar punto de emisión y establecimiento antes de emitir proforma o factura | Leer solo; 1 negocio = 1 OMNITRONEC |
| **Clientes** | `POST /clients`, `GET /clients`, `GET /client/{id}`, `PUT /client/{id}`, `PATCH /client/{id}` | Crear cliente en OMNITRONEC → sincronizar a UpConta; M01-CLI-001 a M01-CLI-006 | Datos: nombre, email, teléfono, RUC, tipo (final/distribuidor), dirección, nota. Imagen: 1 por cliente |
| **Proveedores** | `POST /providers`, `GET /providers`, `GET /provider/{id}`, `PUT /provider/{id}` | Crear proveedor (M05) → sincronizar; compras de repuestos (M17) | Datos: nombre, email, teléfono, RUC, dirección |
| **Vendedores** | `GET /sellers`, `GET /seller/{id}` | Validar seller_id en factura contra lista de vendedores de UpConta | Leer solo; no crear desde OMNITRONEC |
| **Facturas** | `POST /invoice`, `GET /invoices`, `GET /invoice/{id}`, `PUT /invoice/{id}` (solo draft), `DELETE /invoice/{id}` (solo draft), `POST /invoice/{id}/emit` | Emitir factura desde OMNITRONEC → UpConta; obtener # correlativo y XML de autorización | Requerimientos: cliente y productos DEBEN existir en UpConta primero. Una vez emitida no se puede editar |
| **Categorías** | `GET /categories`, `GET /category/{id}` | Listar tipos de radio para permitir búsqueda en OMNITRONEC (COT-018) | Leer solo; categorías planas con "/" para jerarquía (ej: `Radios/Portátiles/2m`) |
| **Productos** | `POST /product`, `GET /products`, `GET /product/{id}`, `PUT /product/{id}`, `PATCH /product/{id}`, `DELETE /product/{id}` (soft-delete) | Crear catálogo de equipos (M06); cada radio = 1 producto en UpConta; soporta hasta 5 imágenes | No hay endpoint de búsqueda por "código de barras" o número de serie; búsqueda por nombre |
| **Almacenes** | `GET /warehouses`, `GET /warehouse/{id}` | Obtener punto de emisión para factura; validar existencia de bodega antes de emitir | Leer solo |
| **Autenticación** | `POST /auth/login` → token de sesión (7 días) | Llamar en cada nueva sesión de agente o cuando token expire | Token de integración es separado; NO expira (ver sección 3) |
| **Biblioteca de archivos** | `POST /library/upload`, `GET /library/files` | Subir documentos de cliente (contrato, cédula, RUC) si UpConta lo requiere | Opcional; OMNITRONEC es fuente de verdad de documentos (M02) |

---

## 3. Autenticación y permisos

### Token de sesión (7 días)
```
POST /auth/login
{ "ruc": "0123456789001", "password": "***" }
↓
{ "token": "eyJ...", "expiresIn": 604800 }  // 7 días = 604800 segundos
```

**Cómo usarlo:**
- Llamar una vez por sesión de agente (no en cada request).
- Guardar en variable de entorno de sesión: `UPCONTA_TOKEN`.
- Aplicar en cada request: `Authorization: Bearer <token>`.
- Cuando expire: volver a llamar `/auth/login`.

### Token de integración (nunca expira)
- Usar **solo en servidor** (backend de OMNITRONEC), nunca en navegador ni en cliente.
- No se regenera; si se pierde, crear uno nuevo en dashboard de UpConta.
- Permisos: emisión de facturas, lectura de clientes, escritura de productos.

---

## 4. Flujo de datos: OMNITRONEC → UpConta

### 4.1 Crear cliente (proforma o factura)

**Cuándo:**
- M01-CLI-001: Usuario crea cliente en OMNITRONEC (asesor comercial, módulo M01).

**Cómo:**
```
POST /clients
{
  "ruc": "1234567890123",
  "firstName": "Empresa",
  "lastName": "ABC Ltda.",
  "email": "contacto@empresa.ec",
  "phone": "0987654321",
  "address": "Calle Principal 123, Quito",
  "note": "[texto de M01-CLI-005 o vacío]"
}
↓
{ "id": "CLI-00123", "name": "Empresa ABC Ltda." }
```

**Validaciones:**
- RUC: formato 13 dígitos + código verificador (válido para Ecuador).
- Email: opcional; si existe, único en UpConta.
- Teléfono: opcional.
- Tipo (final/distribuidor): definido en `tipos-cliente.csv`; se usa para que UpConta cargue IVA diferente (CAT-008).

**Error handling:**
- `"RUC already exists"` → cliente ya existe; obtener su ID: `GET /clients?ruc=...` y usar ese.
- `"Invalid RUC"` → validar con cédula_ruc.py (script del levantamiento) antes de enviar.
- `"Email already used"` → pedirle al usuario otro email o dejar vacío.

### 4.2 Crear producto (catálogo de radios)

**Cuándo:**
- M06-CAT-001: Gerencia carga catálogo de equipos.

**Cómo:**
```
POST /product
{
  "code": "MOT-MR7600",  // FALTA: ¿es obligatorio? ¿debe ser único?
  "name": "Motorola MR7600 UHF",
  "description": "Radio portátil 450-470 MHz, 5 W, 16 canales",
  "category": "Radios/Portátiles/UHF",  // nota: "/" es separador; no existe endpoint para crear categoría
  "price": "180.50",
  "cost": "120.00",
  "images": [
    "https://cdn.example.com/mr7600-front.jpg",
    "https://cdn.example.com/mr7600-back.jpg"
  ],
  "inStock": true
}
↓
{ "id": "PROD-00456", "code": "MOT-MR7600" }
```

**Restricciones:**
- Máximo 5 imágenes por producto (COT-018).
- Categoría: debe existir en UpConta (leer con `GET /categories`). Si no existe, pedirle al cliente que la cree en UpConta manualmente o crear una via `POST /category` (FALTA: ¿existe endpoint?).
- Precio: en USD con 2 decimales.
- No hay campo "número de serie" ni "código de barras" → usar nombre + descripción.

**Actualizar producto:**
```
PUT /product/{id}  // reemplaza todos los campos
PATCH /product/{id}  // actualiza solo los campos enviados
```

### 4.3 Emitir proforma (borrador de factura en UpConta)

**Cuándo:**
- M23-PRO-001: Usuario crea proforma en OMNITRONEC.

**Requisitos previos:**
1. Cliente DEBE existir en UpConta (crear con flujo 4.1 si no existe).
2. Todos los productos DEBEN existir en UpConta (crear con flujo 4.2 si no existen).
3. Vendedor DEBE estar en lista de `GET /sellers`.
4. Punto de emisión y establecimiento DEBEN estar en negocio (validar con `GET /business/{id}`).

**Cómo:**
```
POST /invoice
{
  "client_id": "CLI-00123",
  "seller_id": "SELLER-005",
  "establishment": "001",  // punto de emisión
  "emissionPoint": "001",  // punto de emisión
  "documentType": "01",     // 01 = factura; 05 = nota de crédito (no emitible via API)
  "lines": [
    {
      "product_id": "PROD-00456",
      "quantity": 2,
      "unitPrice": "180.50"
    }
  ],
  "note": "Transporte incluido",
  "reference": "PRO-2026-00123"  // OMNITRONEC proforma ID (para deduplicación; ver sección 5)
}
↓
{ "id": "INV-2026-001-000001", "status": "draft" }
```

**Notas:**
- Status `"draft"` = factura guardada pero NO emitida. Se puede editar.
- FALTA: ¿hay endpoint para emitir desde borrador? ¿O se debe hacer via UI de UpConta?

### 4.4 Emitir factura (proforma → factura definitiva)

**Cuándo:**
- M23-PRO-003: Usuario confirma proforma → factura en UpConta y M11.

**Cómo:**
```
POST /invoice/{id}/emit
{
  "reference": "PRO-2026-00123"  // OMNITRONEC ID para trazabilidad
}
↓
{ "id": "INV-2026-001-000001", "status": "sent", "xml": "<...>", "number": "001-001-000000123" }
```

**Efectos:**
- UpConta decrementa stock automáticamente (para CADA línea).
- Genera XML de autorización SRI (si está integrado con SRI; FALTA: verificar).
- Factura NO se puede editar ni eliminar después de emitida.
- OMNITRONEC registra número de factura de UpConta en M23 para M11.

---

## 5. Patrones de sincronización

### 5.1 Deduplicación sin guardia nativa

**Problema:** UpConta NO tiene mecanismo de deduplicación (idempotency key, unique reference field). Si la red falla durante una emisión, no sabemos si llegó o no.

**Solución en OMNITRONEC:**
1. Antes de crear cliente/producto/factura, **consultar primero**:
   ```
   GET /clients?ruc=<ruc>  // busca cliente por RUC
   GET /products?code=<code>  // FALTA: ¿existe este endpoint?
   GET /invoices?reference=<OMNITRONEC_ID>  // FALTA: ¿se puede filtrar por campo personalizado?
   ```

2. Si existe, usar su ID en UpConta. Si no existe, crear.

3. **En cada creación exitosa**, guardar el ID de UpConta en OMNITRONEC:
   - Tabla `clientes`: columna `upconta_id` (ej: "CLI-00123")
   - Tabla `productos`: columna `upconta_id` (ej: "PROD-00456")
   - Tabla `proformas`: columna `upconta_invoice_id` (ej: "INV-2026-001-000001")

4. **En retry después de fallo**, verificar si `upconta_id` ya está poblado. Si sí, no reintentar creación.

### 5.2 Cola de excepciones (DEC-007 modo autónomo)

**Cuándo:** Red cae durante sincronización o UpConta no responde.

**Cómo:**
1. Guardar intento fallido en tabla `upconta_queue`:
   ```
   {
     "id": UUID,
     "tipo": "cliente|producto|factura",
     "entidad_id": ID de OMNITRONEC,
     "payload": { JSON original },
     "intento": 1,
     "siguiente_retry": NOW + 30 segundos,
     "estado": "pendiente"
   }
   ```

2. Worker de background (ejecuta cada 30 segundos):
   ```
   SELECT * FROM upconta_queue WHERE estado='pendiente' AND siguiente_retry <= NOW
   FOR EACH fila:
     TRY crear en UpConta
     IF éxito: UPDATE fila SET estado='sincronizado', upconta_id=<resultado>
     IF fallo:
       IF intento < 5:
         UPDATE fila SET intento = intento + 1, siguiente_retry = NOW + 60 * intento
       ELSE:
         UPDATE fila SET estado='bloqueado', error=<mensaje>
         NOTIFICAR a Gerencia (M21 · pendientes técnicos)
   ```

3. **En modo autónomo** (sin red):
   - Cliente/producto/factura se crea en OMNITRONEC solo (sin UpConta).
   - Marca como `pendiente_sincronización` en UI.
   - Cuando red vuelve, worker sincroniza automáticamente.

### 5.3 Sincronización de stock

**Problema:** UpConta decrementa stock al emitir. OMNITRONEC también controla stock (M18 · laboratorio, M20 · custodia).

**Solución:**
1. **OMNITRONEC es fuente de verdad de custodia** (D-02). UpConta solo refleja "reserva de venta".
2. Cuando se emite factura en UpConta, OMNITRONEC recibe webhook o consulta estado:
   ```
   GET /invoice/{id}
   { "id": "...", "status": "sent", "lines": [
       { "product_id": "PROD-00456", "quantity": 2, "status": "delivered" }
     ]
   }
   ```

3. OMNITRONEC descuenta de su propio stock en M18 (laboratorio) o M20 (custodia).
4. **Nunca usar stock de UpConta como único origen** (DEC-007).

---

## 6. Restricciones de diseño y cómo resolverlas

| Restricción | Impacto | Solución en OMNITRONEC |
| --- | --- | --- |
| No hay "dedup guard" (idempotency key) | Riesgo de duplicar cliente/producto si red falla | Ver sección 5.1 · consultar primero, guardar upconta_id |
| No se puede emitir borrador desde API | Proforma requiere confirmación manual en UpConta UI | FALTA: preguntar a UpConta si hay endpoint; mientras, documentar en M23 que "Emitir" abre UpConta en nueva pestaña |
| Cliente DEBE existir ANTES de facturar | No se puede crear cliente en tiempo de factura | M01 va ANTES que M23 (oleada 1 orden, DEC-015) · crear cliente en workflow comercial |
| Producto DEBE existir ANTES de facturar | No se puede agregar SKU nuevo en factura en vivo | M06 (catálogo) se alimenta primero · si cliente pide SKU nuevo, crear en M06 → UpConta → luego facturar |
| No hay categoría link a producto (flat) | No se puede asignar categoría a un producto | FALTA: verificar si PATCH /product/{id} acepta category; documentar en PRD de M06 |
| No hay "movimientos" de inventario en API | No se puede replicar historial de custodia de OMNITRONEC a UpConta | No es necesario · D-02 · OMNITRONEC gestiona custodia; UpConta solo ve "stock actual" |
| No hay query de "modificado desde" | No se puede sincronizar incrementalmente (full sync en cada worker) | Aceptable: pocos productos/clientes; full sync toma < 1 segundo |
| No hay "estado de pago" en factura | No se sabe si cliente pagó sin ir a UpConta UI | FALTA: preguntar a UpConta si hay endpoint; mientras, M11 registra pagos en OMNITRONEC solo |
| Máximo 5 imágenes por producto | COT-018: catálogo con imágenes | Límite aceptable para 16 categorías × 2-3 variantes (16 × 3 × 5 = 240 imágenes total) |

---

## 7. Flujo de UpConta a OMNITRONEC (consultas)

### 7.1 Listar clientes (lectura semanal)
```
GET /clients?limit=100&offset=0
{ "data": [ { "id": "CLI-...", "ruc": "...", "name": "..." } ], "total": 243 }
```

**Cuándo:** Sincronización nocturna o a demanda (Gerencia pide "traer clientes nuevos de UpConta").

**Resultado:** Importar a M01 (personas) como registros READONLY (marcados como "sincronizado de UpConta").

### 7.2 Obtener facturas emitidas (lectura diaria)
```
GET /invoices?status=sent&fromDate=YYYY-MM-DD
{ "data": [ { "id": "INV-...", "number": "001-001-000000123", "status": "sent" } ] }
```

**Cuándo:** Worker nocturno (12:00 AM) o a petición del usuario.

**Resultado:** Actualizar M23-PRO (proforma) con número de factura de UpConta; registrar en M11 (facturación).

---

## 8. Preguntas pendientes a UpConta

**Bloqueadores críticos:**
1. ¿Hay endpoint para emitir factura desde borrador (status draft → sent) via API?
2. ¿Cómo se asigna categoría a producto? ¿Endpoint PUT/PATCH /product/{id} con "category"?
3. ¿Existe deduplicación automática (idempotency key, unique reference field)?
4. ¿Hay query de "modificado desde fecha" para sync incremental?

**Mejoras futuras (post-lanzamiento fase 1):**
5. Query de "estado de pago" (recibido/pendiente/vencido) por factura.
6. ¿Soft delete vs. hard delete? (CFT-006: historial de auditoria)
7. Notas de crédito, débito, retenciones: ¿cuándo estarán en API?
8. Rate limit por minuto (para dimensionar worker de sincronización).

---

## 9. Procedimiento de integración en OMNITRONEC

### 9.1 Backend (Node.js/Python)

**Variables de entorno:**
```bash
UPCONTA_RUC=0123456789001
UPCONTA_PASSWORD=***
UPCONTA_API_URL=https://api.upconta.com/v3
UPCONTA_TOKEN_INTEGRATION=eyJ...  # nunca en navegador
```

**Librerías:**
- `axios` o `node-fetch` para HTTP.
- `jose` o `jsonwebtoken` para JWT (si es necesario parsear token de sesión).

**Estructura de módulo:**
```
src/
├── upconta/
│   ├── client.js          // cliente HTTP, manejo de token
│   ├── auth.js            // login, refresh
│   ├── sync-clientes.js   // worker que sincroniza clientes
│   ├── sync-productos.js  // worker que sincroniza productos
│   ├── sync-facturas.js   // worker que sincroniza facturas
│   └── queue.js           // manejo de cola de excepciones
├── models/
│   ├── Cliente.js         // modelo con campo upconta_id
│   ├── Producto.js        // modelo con campo upconta_id
│   └── Proforma.js        // modelo con campo upconta_invoice_id
```

### 9.2 API de OMNITRONEC (rutas)

**Crear cliente (POST /api/clientes):**
- Validar RUC.
- Consultar GET /clients?ruc=<ruc> en UpConta (si existe, obtener ID).
- POST /clients en UpConta (si no existe).
- Guardar upconta_id en OMNITRONEC.

**Crear proforma (POST /api/proformas):**
- Validar cliente existe en UpConta (upconta_id != null).
- Validar todos los productos existen en UpConta (upconta_id != null).
- POST /invoice en UpConta con reference = OMNITRONEC proforma ID.
- Guardar upconta_invoice_id.
- (FALTA: decidir si emitir automático o manual)

**Emitir factura (POST /api/proformas/{id}/emitir):**
- POST /invoice/{upconta_invoice_id}/emit en UpConta.
- Recibir número de factura y XML.
- Guardar número y XML en M23 (proforma).
- Crear registro en M11 (facturación).

### 9.3 Frontend (React/Vue)

**En M01 (clientes):**
- Campo: "¿Sincronizar a UpConta?" (checkbox, por defecto ON).
- Si está ON y cliente es nuevo, sincronizar automáticamente.
- Si falla: mostrar error + botón "Reintentar".

**En M23 (proformas):**
- Botón "Emitir factura en UpConta".
- Si falla: "Reintentando..." (worker de background).
- Cuando éxito: mostrar número de factura y link a XML.

---

## 10. Trazabilidad a requisitos

| Requisito | Sección | Decisión |
| --- | --- | --- |
| CAT-001, CAT-008 (tipo cliente) | 4.1 | Enviado a UpConta; UpConta maneja IVA diferente |
| CLI-001 a CLI-006 (cliente) | 4.1 | Sincronización en tiempo real con dedup |
| CAT-001, CAT-003 (producto) | 4.2 | Sincronización; máximo 5 imágenes |
| PRO-001 a PRO-003 (proforma) | 4.3, 4.4 | Borrador en UpConta; emisión manual (FALTA confirmar) |
| FAC-001 (factura) | 4.4 | Emitida en UpConta; decremento de stock automático |
| INV-001 (inventario) | 5.3 | OMNITRONEC es fuente de verdad; UpConta refleja stock |
| DEC-007 | 5.2 | Cola de excepciones; funciona sin UpConta |
| D-02 | 5.3 | Custodia en OMNITRONEC; UpConta solo ve stock |
| D-11 | 4.3, 4.4 | Proforma en UpConta; se sincroniza en M11 |

---

## 11. Glosario

| Término | Definición |
| --- | --- |
| **Deduplicación** | Evitar crear duplicado de cliente/producto si ya existe |
| **Idempotency key** | Campo único que UpConta garantiza no se duplicará (no está implementado; ver sección 5.1) |
| **Emisión** | Convertir factura de borrador (draft) a enviada (sent); genera XML de SRI |
| **Movimiento** | En UpConta = cambio en historial (edit/delete de factura, nota); NO es movimiento de inventario |
| **Punto de emisión (establishment)** | Número de sucursal donde se emite la factura (001, 002, etc.) |
| **Stock** | Cantidad de unidades en bodega; UpConta decrementa al emitir factura |

---

## Historial de cambios

| Versión | Fecha | Cambios |
| --- | --- | --- |
| 1.0 | 2026-09-27 | Protocolo inicial: 11 módulos, flujos 4.1-4.4, patrones de sync, restricciones, 8 preguntas pendientes |
