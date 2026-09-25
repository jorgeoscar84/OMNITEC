# 06 · Modelo conceptual de información

[← Índice del levantamiento](README.md)

Entidades, relaciones y reglas de modelado no negociables. El modelo físico lo define la fase de arquitectura.

## 9. Modelo conceptual de información

### 9.1 Agregados principales

| Dominio | Entidades |
| --- | --- |
| Identidad | Usuario, Rol, Permiso, Departamento, Equipo, Horario, Ausencia, Delegación, Sesión |
| Relación con clientes | Organización, Contacto, Dirección, Sitio, Consentimiento, Etiqueta, Nota, Propietario de cuenta, Scoring |
| Captación | Lead, Fuente, Atribución de campaña, Trabajo de importación, Elemento de inbox, Asignación, Calificación |
| Ventas | Pipeline, Etapa, Oportunidad, Evento de etapa, Línea de oportunidad, Objeción, Competidor, Proforma, Versión de proforma, Aprobación |
| Automatización | Regla, Disparador, Condición, Acción, Ejecución, Registro |
| Calendario | Calendario, Evento, Asistente, Margen de viaje, Margen de preparación, Tarea, Recordatorio, Enlace externo |
| Marketing | Segmento, Campaña, Secuencia, Paso, Plantilla, Identidad de remitente, Evento de entrega, Supresión |
| Documentos | Documento, Versión, Carpeta, Vínculo, Firma, Enlace temporal, Política de retención |
| Catálogo | Categoría, Marca, Modelo, Producto, Servicio, Repuesto, Compatibilidad, Lista de precios, Versión de precio, Proveedor |
| Activos | Activo, Radio, Sistema de repetición, Repetidora, Duplexor, Antena, Línea, Sistema de energía, Componente de infraestructura, Accesorio |
| Espectro | Plan de frecuencias, Canal, Póliza ARCOTEL, Programación de equipo |
| Garantías | Tipo de garantía, Garantía aplicada, Reclamo, Proveedor obligado |
| Recepción | Acta, Línea de acta, Condición, Evento de custodia, Etiqueta, Firma del cliente |
| Servicio | Solicitud, Orden de trabajo, Asignación, Diagnóstico, Presupuesto, Acción de reparación, Medición, Resultado de calidad, Entrega |
| Campo | Visita, Lista de verificación, Inspección de sitio, Estudio de ingeniería, Plan de mantenimiento, Ejecución |
| Externo | Orden externa, Cotización de proveedor, Estado, Evento de custodia externa, Calificación de proveedor |
| Incidentes | Incidencia, Impacto, Reloj de SLA, Causa raíz, Acción correctiva, Tarea, Comunicación |
| Integración | Referencia externa, Trabajo de sincronización, Error, Mapeo, Conciliación |
| Gobierno | Evento de auditoría, Política, Versión de configuración, Secuencia de numeración, Automatización, Respaldo |
| Inteligencia artificial | Definición de agente, Fuente de conocimiento, Versión de instrucciones, Ejecución, Sugerencia, Decisión humana, Evaluación |

### 9.2 Relaciones fundamentales

```text
Organización 1─N Contacto
Organización 1─N Sitio
Organización 1─N Contrato
Organización 1─N PlanDeFrecuencias
Sitio        1─N Activo
Sitio        1─N ComponenteDeInfraestructura
Sitio        1─N Visita / Mantenimiento / Incidencia
Oportunidad  1─N VersiónDeProforma
Acta         1─N LíneaDeActa ──→ Activo
OrdenTrabajo 1─N LíneaDeOrden ──→ Activo
OrdenTrabajo 1─N EventoDeEtapa / Medición / Documento
GarantíaAplicada N─1 TipoDeGarantía
GarantíaAplicada ──→ Producto vendido | Servicio prestado | Repuesto instalado
Campaña      N─N Contacto  (a través de Audiencia y EventoDeEntrega)
Evento       N─1 Organización / Contacto, opcionalmente Oportunidad u Orden
```

### 9.3 Reglas de modelado no negociables

1. Las relaciones se establecen por identificador interno y por referencia externa. **Nunca por texto visible.**
2. El cliente fiscal y el prospecto pueden tener ciclos distintos, pero convergen sin perder historial.
3. El dinero se representa con decimal exacto, moneda explícita e impuestos explícitos.
4. Las fechas se almacenan en tiempo universal y se presentan en la zona horaria configurada.
5. Precios, impuestos, garantías, términos y plantillas se **congelan por versión emitida**.
6. Los estados se gobiernan mediante máquinas de transición y eventos.
7. Se usa control de concurrencia por versión para impedir sobrescrituras simultáneas.
8. Las numeraciones son transaccionales y se generan en el servidor.
9. Los archivos llevan suma de verificación, clasificación, propietario y retención.
10. El borrado es lógico; la anonimización se define por entidad y política.
11. La auditoría es de solo agregado y vive separada del texto de actividad visible al usuario.
12. El scoring y las salidas de IA conservan sus factores, su modelo y la decisión humana asociada.
