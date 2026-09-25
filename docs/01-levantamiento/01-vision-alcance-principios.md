# 01 · Visión, alcance y principios

[← Índice del levantamiento](README.md)

Resumen ejecutivo, alcance, fuentes y principios rectores del producto. Todo lo demás se lee a la luz de este documento; en particular, el principio de **autonomía funcional por módulo** manda sobre los demás cuando entran en conflicto.

## 1. Resumen ejecutivo

### 1.1 Qué es OMNITRONEC 360

OMNITRONEC 360 no es una modernización de la aplicación técnica actual. Es una **plataforma empresarial integrada** que cubre el ciclo completo del negocio, desde que un contacto entra por cualquier canal hasta que un equipo reparado vuelve al cliente y comienza su siguiente ciclo de mantenimiento, renovación o recompra.

El ciclo que la plataforma debe sostener sin rupturas es:

> origen del contacto → calificación y asignación → oportunidad comercial → propuesta y negociación → venta o pérdida → recepción de equipos o ejecución en sitio → diagnóstico, repuestos y aprobación → reparación, calibración o servicio → control de calidad y entrega → garantía, postventa, contratos y renovaciones → analítica gerencial

El centro conceptual del producto no es “el informe técnico” ni “la proforma”. Es la relación:

> **Cliente → Contacto → Sitio → Activo → Frecuencia → Oportunidad o Servicio → Documento**

con trazabilidad de personas, tiempos, costos, decisiones y comunicaciones en cada eslabón.

### 1.2 Los problemas que debe resolver

La operación actual sufre nueve problemas concretos, todos verificados en la conversación con el cliente o en la aplicación en producción:

1. **La identidad del cliente está fragmentada.** Incluso dentro de la aplicación técnica actual conviven dos maestros de clientes distintos y sin relación entre sí: 823 registros en el módulo de Clientes y 227 en el de Frecuencias. Ninguno se relaciona con el sistema contable por identificador.
2. **Los traspasos de custodia son informales.** El paso de recepción a área técnica, de área técnica a proveedor externo y de vuelta al cliente ocurre en papel, con original y copia, y se pierde.
3. **No se puede separar la responsabilidad de cada demora.** Hoy el único tiempo medido es “creación del informe hasta aprobación”, lo que produce que todos los clientes aparezcan clasificados como “lento” —entre 12 y 46 días— sin distinguir si la espera fue del técnico, del cliente o del proveedor de repuestos.
4. **No existe CRM.** No hay pipeline, ni inbox, ni atribución de origen, ni seguimiento comercial, ni historial de conversación.
5. **Los documentos se rehacen a mano** aunque los datos ya existan en otro punto del sistema.
6. **Las renovaciones dependen de la memoria de las personas.** Contratos, pólizas ARCOTEL, estudios de ingeniería y mantenimientos anuales no generan ninguna alerta.
7. **Las reglas económicas y legales están codificadas dentro del programa.** El IVA se calcula al 15 % de forma fija aunque exista un campo configurable, y los textos de garantía viven dentro del código.
8. **Los catálogos son rígidos.** Solo se admiten dos marcas de radio, y la lista de repuestos rápidos contiene elementos de un cliente concreto.
9. **No hay bitácora.** No se registra quién cambió un estado, un precio, un diagnóstico o un total.

### 1.3 Qué debe entregar la plataforma

1. Una ficha 360 de cada organización, contacto, sitio, activo y frecuencia.
2. Dos pipelines separados y configurables: captación/venta y postventa/renovación.
3. Un inbox multicanal con atribución de origen y reparto controlado por disponibilidad real.
4. Calendario con detección de conflictos que contemple duración, preparación y viaje.
5. Documentos generados desde datos ya existentes, versionados y congelados al emitirse.
6. Recepción digital, cadena de custodia, diagnóstico, aprobación, reparación, control de calidad y entrega, con relojes separados por tipo de espera.
7. Un módulo de garantías configurable que cubra productos, servicios y repuestos, incluida la garantía tercerizada a proveedores externos.
8. El plan de frecuencias del parque instalado, ligado a cliente, sitio y póliza ARCOTEL.
9. Integración con UpConta como fuente fiscal, sin que ninguna de sus limitaciones bloquee la operación del CRM.
10. Paneles por rol, con KPI que permitan abrir los registros que los explican.
11. Configuración administrativa extensible, sin necesidad de tocar código para agregar una categoría, una etapa o una regla.
12. Inteligencia artificial especializada por función, que asista y proponga, pero que nunca envíe, apruebe, facture ni cierre por su cuenta.

### 1.4 Decisiones cerradas en esta versión

La versión anterior de este levantamiento arrastraba seis decisiones marcadas como bloqueantes. La revisión directa de la aplicación en producción y de la documentación de la API de UpConta las resuelve:

> **Nota de la v4.** Las resoluciones que dependen de UpConta se apoyan en la lectura de su documentación pública hecha para la v3, que no se pudo repetir en la v4. Siguen siendo válidas como base de trabajo, pero deben verificarse contra la documentación y el ambiente de pruebas (D-01) y el cliente debe ratificar la ubicación de la proforma (D-11).

| Decisión | Estado | Resolución |
| --- | --- | --- |
| **Sistema contable definitivo** | **Cerrada** | UpConta. API REST v3, con ambientes de prueba y producción diferenciados. |
| **Dónde vive la proforma** | **Cerrada** | En OMNITRONEC 360. UpConta no contempla la proforma entre sus tipos de comprobante; solo emite factura, nota de venta, notas de crédito y débito, guía de remisión y retención. La proforma no puede vivir en contabilidad porque allí no existe. |
| **Conversión de proforma a factura** | **Cerrada** | Técnicamente viable. UpConta admite creación de facturas por API, y también guardarlas como borrador antes de emitir. |
| **IVA fijo al 15 %** | **Cerrada** | El porcentaje se obtiene del catálogo de UpConta, que hoy publica ocho tarifas vigentes. Nunca se codifica en el programa. |
| **Garantía de 60 frente a 90 días** | **Cerrada** | La contradicción ya no existe en la aplicación: el documento vigente declara 90 días desde la entrega. Pero 90 días es solo una de varias garantías posibles, por lo que se especifica un módulo de garantías configurable. |
| **Ambiente de pruebas para integrar** | **Cerrada** | Existe. UpConta publica endpoints de prueba y producción separados. |

Permanecen abiertas las decisiones sobre valor probatorio de la firma en tableta, política de consentimiento de comunicaciones, proveedores de mensajería y calendario, y el registro contable de las bodegas de custodia. Se detallan en [11 · Pendientes, decisiones y riesgos](11-pendientes-decisiones-riesgos.md).

### 1.5 Recomendación de construcción

Construir una plataforma modular sobre un modelo de datos compartido. El primer lanzamiento debe **cerrar ciclos completos de extremo a extremo aunque incluya menos funciones**, en lugar de entregar muchos módulos desconectados. El orden recomendado:

1. Identidad, permisos, clientes, contactos, sitios y configuración maestra.
2. Catálogo propio de productos, servicios y repuestos; la integración de lectura con UpConta se suma en paralelo, sin bloquear. *(ajustado v4)*
3. CRM comercial: inbox, oportunidad, calendario, comunicaciones y proforma.
4. Recepción, custodia y servicio técnico con trazabilidad y garantías.
5. Documentos, postventa, renovaciones y frecuencias.
6. Campañas, analítica avanzada, agentes de IA y automatizaciones.

El detalle por fases, las entregas demostrables y el efecto del tamaño del alcance en costo y plazo están en [10 · Fases y entregas](10-fases-y-entregas.md).

## 2. Alcance, fuentes y método

### 2.1 Fuentes de este levantamiento

| Fuente | Qué aportó | Estado en la v4 |
| --- | --- | --- |
| Cuatro transcripciones literales de conversaciones con el cliente (T1 a T4) | Visión de negocio, necesidades, ejemplos, rectificaciones y pendientes. **Es la fuente primaria.** | Releídas completas para la v4. Cada diferencia con la v3 está en [CAMBIOS-v4.md](CAMBIOS-v4.md) y la cobertura, punto por punto, en [COBERTURA-TRANSCRIPCIONES.md](COBERTURA-TRANSCRIPCIONES.md). |
| Notas y aclaraciones posteriores del cliente | Precisiones sobre garantías, automatizaciones, agentes de IA, reservas de stock, proveedores externos e infraestructura extensible. | Citadas por la v3 en 42 requisitos («Confirmado — nota del cliente»). **No se entregaron para la v4**: se conservan por confianza en la v3 y figuran como pendiente P-15. |
| Aplicación técnica en producción, auditada en modo consulta | Estado real de la operación: pantallas, campos, cálculos, documentos emitidos, volúmenes y brechas. | Auditoría de la v3 (6 sep 2026). No se repitió en la v4: la red del entorno de trabajo bloqueó el acceso. |
| Documentación pública de la API de UpConta | Capacidades reales y límites de la integración contable. | Lectura de la v3. No se volvió a verificar en la v4 por el mismo bloqueo de red; queda como verificación obligatoria (D-01, D-11). |
| Plan maestro de desarrollo con IA (25 sep 2026) | Método de trabajo, protocolo anti-alucinación, estrategia de modelos, stack y despliegue propuestos. | Usado solo para método y para las directrices técnicas; su alcance funcional se descartó porque se redactó sin este levantamiento. Ver `docs/00-gobierno/FUENTES.md`. |

Las transcripciones se citan así: **T1** = grabación de las 12:38 (su nombre de archivo no lleva fecha); **T2** = 14-08-2026, 14:32; **T3** = 14-08-2026, 16:16; **T4** = 14-08-2026, 16:55.

### 2.2 Cómo se trató la transcripción

Se leyó completa y de forma literal. Se eliminaron muletillas y repeticiones, conservando todos los detalles funcionales. Cuando el cliente rectificó una idea, prevalece la rectificación si es inequívoca; si quedaron dos posturas sostenidas, se registra como decisión abierta en el documento 11 y no se resuelve por cuenta propia. Los nombres propios se usan únicamente cuando identifican al responsable de un pendiente.

En la v4 se aplicaron además dos reglas que el cliente pidió de forma expresa en T3:

1. **Cada detalle se ubica en el módulo al que pertenece**, aunque en la conversación haya aparecido mucho después, y se explicita la lógica que conecta unos módulos con otros ([04 · Mapa de módulos y dependencias](04-mapa-de-modulos.md)).
2. **Todo apartado que necesita más información está escrito en MAYÚSCULAS**, para que se vea de un vistazo dónde falta algo.

### 2.3 Dentro del alcance

Relación con clientes y prospectos. Captación, atribución, inbox y asignación. Ventas, negociación, proforma y cierre. Postventa, contratos, renovaciones y recompra. Marketing por correo y WhatsApp. Calendario, tareas, visitas y disponibilidad. Repositorio documental. Recepción, custodia, laboratorio, campo, infraestructura, frecuencias e incidencias. Garantías. Proveedores técnicos externos. Catálogo de productos, servicios y repuestos. KPI comerciales, técnicos y gerenciales. Inteligencia artificial, configuración, seguridad, auditoría e integraciones.

### 2.4 Fuera del alcance

| Capacidad | Dónde vive |
| --- | --- |
| Contabilidad general, impuestos oficiales y estados financieros | UpConta. |
| Facturación electrónica y autorización ante el SRI | UpConta, que gestiona estados, reintentos y envío del PDF y XML al cliente. |
| Valoración contable de inventario y costos | UpConta es la fuente maestra; la plataforma consume y complementa con el contexto técnico. |
| Diseño gráfico de piezas de marketing | Herramienta especializada de diseño. La plataforma administra la plantilla, las variables, la generación y el envío, no el diseño. |
| Simulación profesional de cobertura de radiofrecuencia | Servicio o herramienta especializada. La cobertura circular de la aplicación actual es una aproximación y debe etiquetarse como tal. |
| Nómina y gestión de recursos humanos | Sistema contable, si dispone del módulo. La plataforma administra únicamente la disponibilidad operativa. |

### 2.5 Limitaciones de este levantamiento

- La auditoría de la aplicación actual se realizó desde un perfil técnico autenticado, en modo consulta y sin modificar ningún registro. No se verificó cada permiso con un usuario administrador ni se auditó la autorización real del servidor.
- No se dispuso del repositorio de código ni del esquema de base de datos del sistema actual.
- Las capacidades de UpConta se establecieron a partir de su documentación pública. Deben confirmarse contra el contrato y el ambiente de pruebas antes de comprometer fechas.
- Las reglas legales de firma electrónica, conservación documental, trámites ARCOTEL y consentimiento de comunicaciones deben ser revisadas por los responsables competentes de la empresa.

## 3. Definición del producto y principios rectores

### 3.1 Definición

**OMNITRONEC 360** es una plataforma interna, con portales externos limitados para clientes y proveedores, que gestiona la relación comercial y la operación técnica de una empresa de radiocomunicaciones y de los demás equipos que la organización atiende.

### 3.2 Objetivos de negocio

- Aumentar la conversión y la velocidad de respuesta comercial.
- Evitar la pérdida de oportunidades, tareas, renovaciones y acuerdos.
- Reducir los tiempos muertos entre recepción, diagnóstico, aprobación, repuestos y reparación.
- Identificar responsabilidades sin penalizar al técnico por esperas que no controla.
- Mejorar la experiencia y la confianza del cliente con documentos y estados claros.
- Conocer la rentabilidad por cliente, servicio, equipo, producto y colaborador con datos conciliados.
- Convertir el historial operativo en decisiones comerciales y de portafolio.
- Eliminar la digitación repetida mediante integración y reutilización de datos.

### 3.3 Principios de producto

1. **Una sola captura, múltiples usos.** Si un dato ya existe, se reutiliza. Nunca se vuelve a escribir.
2. **Fuente maestra explícita.** Cada dato tiene un sistema propietario definido y documentado.
3. **Trazabilidad por evento.** Los estados no se sobrescriben: se registra quién, cuándo y por qué.
4. **Experiencia por rol.** Cada persona ve lo que su trabajo y su responsabilidad requieren.
5. **Configuración antes que código.** Catálogos, etapas, plantillas, garantías y reglas se editan bajo permisos, sin desplegar software.
6. **Automatización visible.** El usuario siempre sabe qué se envió, qué se calculó y qué quedó pendiente.
7. **La IA asiste, no decide.** Toda salida de un agente es revisable, atribuible y reversible.
8. **Privacidad mínima.** El acceso a datos personales y económicos existe solo cuando el rol lo requiere.
9. **Móvil y tableta reales.** Firma, fotografías y trabajo en sitios con conectividad irregular.
10. **KPI con evidencia.** Toda cifra abre los registros que la componen y explica su definición.
11. **Autonomía funcional por módulo.** Ningún módulo depende de un sistema externo para existir. Cada módulo se construye para **gestionarse de forma completa desde dentro de OMNITRONEC 360**, y la integración es una capa opcional que enriquece, nunca un requisito que habilita. Si mañana no existiera ninguna integración contable, la plataforma seguiría operando entera. Este principio manda sobre todos los demás cuando entren en conflicto.

### 3.4 Criterios de éxito iniciales

- El 100 % de los equipos recibidos tiene acta digital, código de identificación y cadena de custodia completa.
- Ninguna oportunidad activa queda sin responsable ni próxima acción.
- Ningún evento de calendario se solapa sin una excepción explícita y justificada.
- Los tiempos de espera de cliente, repuesto y proveedor se reportan separados del tiempo efectivo del técnico.
- Toda proforma emitida conserva versión, total, responsable y resultado.
- Toda garantía vigente muestra su tiempo restante sin que nadie tenga que calcularlo.
- Toda renovación genera alerta y seguimiento antes de su vencimiento.
- Los documentos emitidos reproducen datos maestros congelados, no cálculos del navegador.
- Ningún usuario exporta información fuera de su alcance autorizado.
