# 09 · Experiencia de uso y requisitos no funcionales

[← Índice del levantamiento](README.md)

Principios de interfaz, patrones por dispositivo, estados obligatorios, seguridad, privacidad y continuidad.

## 12. Experiencia de uso

### 12.1 Principios

1. **Mi trabajo primero.** Cada rol entra viendo lo pendiente y lo urgente.
2. **Cliente 360 progresivo.** Resumen antes que detalle, con pestañas especializadas.
3. **Una acción primaria por pantalla.** Siempre queda claro cómo avanzar.
4. **Contexto persistente.** Cliente, oportunidad, orden y estado permanecen visibles.
5. **Errores accionables.** Explicar qué ocurrió, qué se conservó y cómo continuar.
6. **Móvil para ejecutar.** No se encogen tablas: se convierten en tarjetas y pasos cortos.
7. **Accesibilidad como objetivo declarado**, con navegación por teclado, foco visible y respeto a la preferencia de movimiento reducido.
8. **Configurable no significa sin control.** Agregar un elemento a un catálogo global pasa por aprobación.

### 12.2 Patrones

- **Escritorio:** lista a la izquierda, detalle a la derecha cuando eso reduzca la navegación.
- **Tableta:** contenido principal con panel deslizable, firma y captura fotográfica.
- **Móvil:** tarjetas, barra inferior contextual y estado de conexión siempre visible.
- **Formularios:** por pasos, con guardado automático, validación por campo y resumen lateral de total y estado.
- **Tablas:** filtros persistentes, columnas configurables, selección masiva explícita y acciones poco frecuentes recogidas en menú.

### 12.3 Estados obligatorios de cada componente

Cargando · vacío con acción sugerida · error con vía de recuperación · sin permiso · deshabilitado con explicación · guardado · conflicto de versión · sin conexión y sincronizando.

### 12.4 Notificaciones

Centro único con severidad, origen y acción · preferencias por usuario y canal dentro de los límites corporativos · agrupación para evitar fatiga · escalamiento de vencimientos críticos · las celebraciones se mantienen separadas de las alertas operativas y respetan la preferencia de movimiento reducido.

## 13. Requisitos no funcionales, seguridad y privacidad

| Área | Requisito |
| --- | --- |
| Disponibilidad | Objetivos por módulo y por horario, acordados y medidos. |
| Rendimiento | Las listas principales responden por debajo de dos segundos en la red corporativa objetivo. |
| Escalabilidad | Paginación, búsqueda y agregación en el servidor. **Nunca se carga una colección completa en el navegador para buscar o calcular.** |
| Seguridad | Doble factor, control de acceso por rol y atributo, auditoría, cifrado, límite de peticiones y gestión de secretos. |
| Privacidad | Consentimiento, finalidad, mínimo privilegio, enmascarado, retención, exportación y anonimización. |
| Integridad | Transacciones, identificadores, instantáneas, sumas de verificación, control de concurrencia e idempotencia. |
| Accesibilidad | Contraste suficiente, navegación por teclado, foco visible, compatibilidad con lectores de pantalla y alternativas tabulares a los gráficos. |
| Sin conexión | Formularios, listas de verificación, fotografías y firma con cola local cifrada y resolución visible de conflictos. |
| Recuperación | Objetivos de punto y tiempo de recuperación aprobados, respaldos cifrados, pruebas de restauración y procedimientos escritos. |
| Observabilidad | Registros estructurados, métricas, trazas y alertas, sin datos personales innecesarios. |
| Compatibilidad | Navegadores corporativos vigentes; aplicación instalable en móvil si el trabajo de campo lo requiere. |
| Idioma | Español de Ecuador de forma consistente, con la arquitectura preparada para internacionalización. |
| Archivos | Límites, validación, antivirus, enlaces temporales, retención y limpieza de archivos huérfanos. |

### 13.1 Privacidad específica

- La base completa de clientes es información sensible de negocio, no solo un listado.
- Cédula, fecha de nacimiento, comunicaciones y documentos exigen finalidad declarada y acceso limitado.
- El uso de la fecha de cumpleaños para comunicaciones comerciales respeta consentimiento y exclusiones.
- No se envían datos personales innecesarios a proveedores de IA, mensajería o analítica.
- Se registran las exportaciones, las descargas masivas y los accesos a información especialmente sensible.

### 13.2 Operaciones peligrosas

- **Importaciones masivas:** simulación previa, validación y reversión.
- **Exportaciones:** alcance, justificación, doble factor, marca de agua o registro, y límites.
- **Cambios de permisos:** doble revisión cuando el riesgo lo justifique.
- **Restauración de respaldos:** fuera de la interfaz cotidiana, en entorno aislado, con respaldo previo y doble aprobación.
- **Eliminaciones:** papelera, retención y efecto declarado sobre entidades relacionadas.

### 13.3 Continuidad

Modo degradado cuando falle contabilidad, mensajería, calendario o IA · cola local y del servidor para reintentar sin duplicar operaciones · procedimiento manual documentado para recepción y servicio cuando la plataforma no esté disponible · conciliación posterior obligatoria y visible.
