# Anexo E · Paquete de datos extraídos

Junto a este documento se entrega un conjunto de archivos con los datos maestros extraídos de la aplicación en producción, verificados contra los totales que ella misma declara. Están destinados a la carga inicial de la nueva plataforma.

| Archivo | Contenido | Registros |
| --- | --- | --- |
| 01-clientes.csv | Maestro de clientes con identificación fiscal, teléfono y correo | 823 |
| 02-frecuencias-canales.csv | Plan de canales por cliente, con todos sus parámetros técnicos | 669 |
| 03-repuestos-por-modelo.csv | Repuestos con precio unitario, por marca y modelo | 218 |
| 05-sitios-cliente.csv | Sitios de cliente reconstruidos desde el campo libre de los informes | 47 |
| 06-duplicados-y-fusiones.csv | Grupos de registros que son la misma entidad, con el nombre canónico propuesto | 16 |
| 07-repetidoras-y-tecnicos.csv | Infraestructura de repetición y catálogo de técnicos | 8 |
| LEEME-datos-extraidos.md | Advertencias de calidad y método de extracción | — |

**Antes de cargar cualquiera de estos archivos** debe leerse el documento de advertencias. Contiene tres avisos que condicionan la migración: no existe ningún contacto comercial registrado; el catálogo de repuestos tiene diez piezas y dos modelos que la interfaz no muestra; y los sitios de cliente están registrados como clientes independientes en el módulo de frecuencias.

El histórico de los 169 informes de laboratorio con su detalle de equipos, series, diagnósticos, líneas de servicio y evidencias fotográficas **no se incluye deliberadamente**: extraerlo desde la interfaz perdería información. Debe solicitarse una exportación de la base de datos de origen, para lo cual la aplicación actual dispone de una función en su panel de administración.

**Fin del levantamiento. Documento listo para validación con el cliente y para dar inicio al PRD.**

> **Ubicación de los archivos.** Los CSV del paquete contienen datos de clientes reales (identificación fiscal, teléfonos, correos, frecuencias). **No deben subirse a este repositorio mientras sea público.** Se entregan por un canal privado y se cargan directamente en el entorno de ensayo de la migración.
