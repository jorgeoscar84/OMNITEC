# Plantillas semilla de catálogos

El producto se entrega con los catálogos vacíos y se cargan desde estas plantillas (DEC-017, ADM-014). Así lo pidió el cliente en T4: «si ya yo te di los datos, pues simplemente haces la plantilla con los datos para después poder subirla al apartado que corresponda». Tras la carga, todo es editable, desactivable y ampliable desde administración.

**Estado: borrador para validar.** Contienen solo lo que el cliente dijo en la reunión, lo que traía el levantamiento v3 y datos públicos. Nada es definitivo hasta que el responsable de cada insumo lo valide (ver la columna «Valida» abajo y el documento 11 del levantamiento).

## Reglas

- **Sin datos de clientes finales.** El repositorio es público (DEC-004). Los datos de migración (clientes, frecuencias, repuestos con precio) viajan por un canal privado.
- **Cada fila dice de dónde sale**: columna `origen` (Confirmado, Observado, Propuesto, Levantamiento v3, Dato público) y, cuando aplica, `fuente` (T1 a T4 o sección del levantamiento).
- **Lo que falta dice FALTA INFORMACIÓN**, en mayúsculas, dentro de la celda.
- **Formato:** CSV en UTF-8 separado por comas. Para abrirlo en Excel sin romper las tildes: *Datos → Desde texto/CSV → Origen del archivo: 65001 (UTF-8)*.
- El formato definitivo de cada plantilla de importación lo fija el PRD de M23; estas columnas son el punto de partida.

## Archivos

| Archivo | Catálogo | Requisitos | Valida |
| --- | --- | --- | --- |
| `industrias.csv` | Industrias o categorías de empresa del cliente | CLI-005, P-06 | José |
| `provincias.csv` | Las 24 provincias del Ecuador; falta definir cuáles son operativas | CLI-005 | Área comercial |
| `tipos-cliente.csv` | Cliente final y distribuidor | COT-006, CAT-008 | Área comercial |
| `categorias-producto.csv` | Categorías macro y micro de equipos y productos | CAT-001, CAT-014, P-16 | José y área técnica |
| `tipos-servicio.csv` | Diagnóstico, reparación, calibración, ajuste, confección, mantenimiento… | CAT-003, LAB-004, P-08 | Área técnica |
| `marcas.csv` | Marcas; hoy solo las dos que admite la aplicación actual | CAT-006, P-07 | Área técnica |
| `tipos-contrato.csv` | Tipos de contrato con sus variantes | POST-002, POST-003 | Administración |
| `carpetas-documentales.csv` | Estructura inicial del repositorio de cada cliente | DOC-001 | Administración |
| `tipos-evento.csv` | Tipos de evento y si exigen tiempo de viaje | CAL-003, CAL-004 | Área comercial |
| `origenes-lead.csv` | Orígenes de los leads | LEAD-001 | Marketing |
| `motivos-descarte-lead.csv` | Motivos para descartar un lead | LEAD-012 | Marketing |
| `etapas-pipeline.csv` | Etapas iniciales del pipeline de captación; **falta el de postventa** | VEN-001, POST-001, D-13 | Jefatura comercial |
| `estados-orden-laboratorio.csv` | Estados de la orden técnica y qué reloj corre en cada uno | LAB-005, D-13 | Coordinación técnica |
| `estados-incidencia.csv` | Estados de incidencia y cuáles pausan el SLA | INC-005 | Coordinación técnica |
| `componentes-infraestructura.csv` | Componentes iniciales de un sitio | CAM-002 | Ingeniería |
| `departamentos.csv` | Organigrama base | IAM-003, P-09 | Gerencia |
| `roles.csv` | Roles base | IAM-004, P-09 | Gerencia |
| `tipos-garantia.csv` | La garantía de reparación vigente hoy: 90 días desde la entrega | GAR-013, P-05 | Técnica y administración |
| `mensajes-predeterminados.csv` | Disparadores de los mensajes predeterminados; **faltan los textos** | MKT-015, MKT-016, P-18 | Comercial y marketing |
| `parametros.csv` | Parámetros iniciales: avisos de viaje, antelación de renovaciones, zona horaria, moneda | CAL-005, CAL-006, POST-004 | Gerencia |

## Lo que todavía no tiene plantilla

- **Catálogo de productos, modelos, partes y repuestos** (P-07): sale de UpConta y de la migración de la aplicación actual, con datos que no se publican aquí.
- **Speech, puntos fuertes y tipos de objeción** (P-19): el cliente aún no los entregó.
- **Campos personalizados iniciales** (P-17).
