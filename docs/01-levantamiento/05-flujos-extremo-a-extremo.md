# 05 · Flujos de extremo a extremo

[← Índice del levantamiento](README.md)

Los flujos que atraviesan varios módulos. Cada flecha es un evento con fecha, usuario y responsable.

## 8. Flujos de extremo a extremo

Cada flecha de estos flujos representa un **evento con fecha, usuario y responsable**, no un simple cambio de texto en una columna.

### 8.1 De lead a factura

> Ingreso por canal o importación → deduplicación y verificación de consentimiento → asignación según disponibilidad real → primera respuesta → calificación → oportunidad y descubrimiento → evento o visita → proforma versionada → negociación y aprobación → cierre ganado → creación de la factura en UpConta → postventa, contrato o servicio

**Excepciones que el flujo debe contemplar:** contacto duplicado, dato inválido, ausencia de consentimiento, asesor no disponible, proforma rechazada, fallo de la integración contable y cierre perdido.

### 8.2 De base fría a oportunidad

> Importar plantilla, total o por rango de contactos → validar y segmentar → destinar solo a campaña → ejecutar la secuencia autorizada → el contacto interactúa según la regla configurada → crear o vincular el lead → entrar al inbox conservando el origen

### 8.3 De recepción a devolución al cliente

> Acta y firma en tableta → código y etiqueta → entrega a técnica → recepción técnica → diagnóstico → propuesta técnica → espera y aprobación del cliente → verificación de garantía aplicable → disponibilidad y reserva de repuesto → reparación o calibración → control de calidad → acta de entrega y firma → activación de la garantía del servicio

### 8.4 Reparación con proveedor externo

> Diagnóstico interno → decisión de derivar → acta de salida y cambio de custodia → el proveedor recibe → cotiza, ejecuta y actualiza, o informa que no pudo repararlo → retorno al área técnica o a recepción → validación de diferencias → control de calidad interno → entrega o retrabajo → registro de la garantía que otorga el proveedor

### 8.5 Renovación y mantenimiento preventivo

> Evento de compra, mantenimiento, contrato, estudio o póliza → calcular la siguiente fecha según la política → crear alerta y tarea → segmentar campaña si existe consentimiento → contacto y negociación → renovar y programar, o registrar la pérdida → iniciar el nuevo ciclo

### 8.6 Visita comercial o técnica

> Crear desde cliente, oportunidad u orden → elegir sitio y tipo → duración más preparación más viaje → comprobar horario y conflictos → notificar → ejecutar con lista de verificación y evidencia → registrar resultado y próximos pasos

### 8.7 Estudio de ingeniería

> Necesidad comercial o técnica → definir alcance y visita → mediciones y levantamiento → diseño de equipos e infraestructura → documento y propuesta → aprobación, venta y ejecución → registro de vigencia y alerta de renovación

### 8.8 Reclamo de garantía

> El cliente reporta una falla → la plataforma identifica si existe garantía vigente sobre el equipo, el servicio o el repuesto → determina si es interna o tercerizada → si es tercerizada, identifica al proveedor obligado y abre el reclamo → si es interna, abre la orden sin costo de servicio → decisión pieza por pieza sobre los repuestos → ejecución → cierre con actualización del historial de garantía

### 8.9 Comunicación asistida por IA

> El usuario elige intención y canal → el sistema arma el contexto autorizado → el agente genera un borrador → se validan variables y políticas → el usuario revisa y modifica → envío → registro de la versión y del resultado
