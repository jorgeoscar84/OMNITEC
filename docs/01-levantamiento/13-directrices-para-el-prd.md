# 13 · Directrices para la fase PRD

[← Índice del levantamiento](README.md)

Condiciones bajo las cuales se redacta el PRD y la arquitectura. Las secciones 18.8 y 18.9 son nuevas en la v4.

## 18. Directrices para la fase PRD

Este capítulo no describe el producto: fija las condiciones bajo las cuales debe redactarse el documento técnico de la siguiente fase.

### 18.1 El mandato arquitectónico que gobierna todo lo demás

**Cada módulo debe poder gestionarse de forma completa desde dentro de OMNITRONEC 360.** Ninguna carencia de un sistema externo puede detener la construcción.

La razón es de calendario y de riesgo. Si se le solicita al proveedor contable que abra una capacidad de su API, eso puede tomar días o semanas, y ese plazo no puede gobernar el cronograma del desarrollo. Se construye la funcionalidad nativa completa y los ajustes se hacen después.

Lo que esto exige del PRD, de forma explícita:

1. **Patrón de adaptadores.** La lógica de negocio no conoce al proveedor externo. Conectar o desconectar el conector contable es configuración, nunca desarrollo.
2. **Ningún módulo importa código del conector.** La dependencia apunta siempre hacia adentro: el conector conoce el dominio, el dominio no conoce al conector.
3. **Referencias externas opcionales.** Toda entidad compartida admite un identificador externo que puede estar vacío. Un cliente sin identificador contable es un cliente válido.
4. **Los ajustes futuros no rompen lo construido.** Cuando una capacidad externa se habilite, se activa sin migración destructiva y sin reescribir el módulo.
5. **Una sola excepción, y es legal.** La emisión de comprobantes electrónicos autorizados por el organismo tributario requiere un sistema habilitado. En modo autónomo la plataforma registra la venta y su documento interno, y deja la emisión fiscal marcada como pendiente. No la simula.

### 18.2 Identidad visual y calidad del diseño

El PRD debe definir la capa visual como parte del producto, no como un acabado posterior:

- **Paleta de marca** derivada de la identidad de OMNITRONEC, con sus colores primarios, secundarios y de estado, definidos como fichas reutilizables y no como valores dispersos.
- **Tipografía, escala y espaciado** consistentes en toda la plataforma.
- **Tema claro y oscuro**, capacidad que la aplicación actual ya ofrece y que no debe perderse.
- **Sistema de componentes propio**: botones con jerarquía clara, tablas, fichas, formularios por pasos, estados vacíos y de error.
- **Densidad adecuada al oficio.** El técnico trabaja con muchos equipos por pantalla y el asesor con conversaciones. No es la misma densidad y no debe forzarse una sola.
- **Accesibilidad verificada**, no declarada: contraste medido, navegación por teclado probada y respeto a la preferencia de movimiento reducido.

El objetivo declarado es que la plataforma se vea y se sienta cuidada. Una herramienta que la gente disfruta usar se adopta; una que no, termina como la actual, con módulos completos sin uso.

### 18.3 Selección de la solución técnica

El PRD debe elegir la solución concreta, cumpliendo las condiciones de la sección 18.7 y estas dos adicionales:

- **La inteligencia artificial es parte del núcleo, no un añadido.** La arquitectura debe contemplar desde el diseño la ejecución de agentes, el gobierno de su contexto, el registro de cada ejecución, la evaluación de su calidad y el control del gasto. Los agentes no se acoplan encima de un sistema terminado.
- **Los paneles generados a petición imponen requisitos propios.** Consulta analítica sobre datos vigentes, resolución de permisos antes de consultar, persistencia del panel generado y exportación. Esto condiciona el modelo de datos y debe decidirse temprano, no al final.

### 18.4 Qué debe producir el PRD, por dominio

1. Problema, resultado esperado y alcance del dominio.
2. Personas, escenarios y supuestos.
3. Flujo principal y sus excepciones.
4. Requisitos con criterios de aceptación verificables.
5. **Máquina de estados completa**: estados, transiciones, quién dispara cada una, condiciones previas y efectos.
6. Modelo de datos y contrato de interfaz.
7. Permisos, privacidad y auditoría.
8. Diseño de interfaz, comportamiento adaptable, accesibilidad y estados de cada componente.
9. Indicadores e instrumentación.
10. Migración, pruebas, despliegue y definición de terminado.

### 18.5 Qué ya está decidido y qué decide el PRD

| Ya decidido en este levantamiento | Lo decide el PRD |
| --- | --- |
| Alcance, módulos y sus límites | Máquinas de estado con sus guardas |
| Actores, roles y modelo de permisos | Matriz de permisos al detalle de cada acción |
| Propiedad del dato en sus dos modos | Modelo físico y contratos de interfaz |
| Requisitos con origen y prioridad | Criterios de aceptación de cada requisito |
| Flujos de extremo a extremo | Diagramas de secuencia y casos de excepción |
| Qué expone y qué no expone el contable | Diseño del adaptador y su conciliación |
| Reglas de negocio de garantía, custodia y reserva | Su expresión ejecutable y sus pruebas |
| Que los pipelines y las automatizaciones son configurables | **El alcance exacto de esa configurabilidad** |
| Que habrá agentes especializados | Su catálogo, su contexto y su política de datos |
| Que habrá paneles a petición | Su motor, su persistencia y su exportación |

### 18.6 La única decisión que conviene acotar antes de empezar

De todo lo anterior, hay un punto que puede crecer sin fondo si nadie le pone borde: **hasta dónde llega “configurable”**.

Un motor de automatizaciones por etapa, con disparadores, condiciones y acciones libres, es un producto en sí mismo. Lo mismo ocurre con la configuración de agentes y con el catálogo de garantías. La recomendación es abrir el PRD de cada uno con una **lista cerrada** —los disparadores que existen, las condiciones que se pueden evaluar, las acciones que se pueden ejecutar— y ampliarla por versiones. Una lista corta que funciona vale más que un motor universal que nunca se termina.


### 18.7 Condiciones que la solución técnica debe cumplir (antes anexo D)

Este documento no selecciona herramientas: esa decisión corresponde al PRD y a la fase de arquitectura. Lo que sí fija son las condiciones que cualquier solución debe satisfacer, derivadas de los requisitos de negocio.

**Sobre los datos.** Relaciones por identificador y no por texto. Transacciones que garanticen que una operación se completa entera o no se completa. Control de concurrencia por versión. Numeración generada en el servidor. Capacidad de consulta geográfica para los sitios y su cobertura. Borrado lógico y auditoría de solo agregado.

**Sobre los cálculos.** Todo cálculo económico ocurre en el servidor y una sola vez. El documento emitido y la pantalla muestran el mismo resultado porque provienen del mismo origen. Ningún importe se recalcula en el navegador.

**Sobre los documentos.** La generación de PDF ocurre en el servidor, a partir del conjunto de datos aprobado y congelado. Las plantillas son versionadas y editables sin desplegar software.

**Sobre los archivos.** Almacenamiento con enlaces firmados y temporales, miniaturas, ciclo de vida y suma de verificación. Las fotografías se comprimen antes de subirse.

**Sobre los procesos pesados.** La generación de documentos, el procesamiento de imágenes, los envíos masivos y las importaciones se ejecutan en segundo plano, con estado visible, reintentos y cola de errores.

**Sobre el acceso.** Autenticación individual con doble factor, control de acceso por rol y por atributo, y restricción a nivel de registro cuando el alcance lo exija. Identidades de servicio separadas para las integraciones.

**Sobre el trabajo en campo.** Funcionamiento sin conexión para formularios, listas de verificación, fotografías y firma, con cola local cifrada y resolución visible de conflictos al sincronizar.

**Sobre la operación.** Entornos separados de desarrollo, pruebas y producción. Despliegue automatizado y reversible. Registros estructurados, métricas y trazas correlacionadas. Respaldos cifrados con pruebas periódicas de restauración. Procedimientos escritos para caída de integraciones, recuperación e incidentes.

**Sobre la evolución.** Arquitectura modular con dominios separados y un modelo de datos compartido. Se recomienda comenzar con un sistema único bien modularizado antes que con servicios distribuidos, porque el equipo y el volumen no justifican la complejidad operativa de estos últimos.

### 18.8 Consecuencias técnicas detectadas al contrastar el levantamiento con el plan maestro *(nuevo v4)*

El plan maestro propuso un stack antes de conocer este levantamiento. Varios requisitos obligan a ajustarlo o a completarlo. La arquitectura (fase siguiente al PRD) debe resolver cada fila; el registro está en `docs/00-gobierno/DECISIONS.md`.

| Requisito que lo exige | Qué implica | Consecuencia para la arquitectura |
| --- | --- | --- |
| Plantillas versionadas y editables sin desplegar software (COT-001, IA-010, sección 18.7) | Las plantillas de documentos son datos, no código | Plantillas HTML guardadas y versionadas en la base de datos, con conversión a PDF en el servidor mediante un navegador sin interfaz. Descarta generar PDF con componentes compilados, como proponía el plan maestro (DEC-010) |
| Consulta geográfica de sitios y cobertura (CAM-005, FREQ-007, sección 18.7) | Distancias, zonas y conflictos por ubicación | PostgreSQL con extensión geográfica además de la vectorial (DEC-009) |
| Validación antivirus de archivos (DOC-008) | Todo archivo subido se analiza antes de quedar disponible | Servicio de análisis en la cola de subida |
| Modo sin conexión en campo (CAM-013, sección 18.7) | Formularios, fotos y firma sin señal, con cola local cifrada | Aplicación web instalable con almacenamiento local; es de lo más costoso, se construye en la fase 4, pero las operaciones deben ser idempotentes desde la fase 1 |
| Paneles a petición en lenguaje natural (IA-011 a IA-015, BI-002) | El agente no puede saltarse permisos ni inventar cifras | Capa semántica de indicadores con definiciones versionadas; el agente elige indicadores y dimensiones de un catálogo y los permisos se aplican antes de consultar. No se genera SQL libre |
| Bandeja multicanal y varios números de WhatsApp (LEAD-001, COM-001, MKT-008, MKT-009) | Mensajes entrantes en tiempo casi real | Puntos de recepción de notificaciones públicos, cola de procesamiento y API oficial de WhatsApp Business (DEC-012) |
| Automatizaciones configurables (VEN-002, ADM-005, ADM-006) | Riesgo de construir un motor universal | Lista cerrada de disparadores, condiciones y acciones (sección 18.6) sobre la cola de trabajos, con simulación y registro |
| Doble factor e identidades de servicio (IAM-002, IAM-011) | Autenticación más exigente que usuario y contraseña | La librería de autenticación debe traer doble factor de forma nativa y admitir cuentas de servicio |
| Numeración transaccional (COT-014) | Dos usuarios nunca reciben el mismo número | Secuencias en la base de datos dentro de la transacción de emisión; nunca «último número más uno» |
| IA como parte del núcleo (sección 18.3) | Registro, evaluación y control de gasto de cada ejecución | Módulo de IA propio desde la fase 2, con proveedores intercambiables y límites de gasto |

### 18.9 Formato del PRD

La plantilla por módulo, el orden de redacción y las compuertas de la fase PRD están en [`docs/02-prd/`](../02-prd/README.md). Cada archivo del PRD toma como entrada el archivo del módulo correspondiente en `modulos/` y conserva sus identificadores de requisito.
