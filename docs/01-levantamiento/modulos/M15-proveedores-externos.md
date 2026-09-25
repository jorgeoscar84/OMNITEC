# M15 · Proveedores técnicos externos

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M15 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Derivar trabajos que no pueden ejecutarse internamente sin perder custodia, contexto, plazo, costo ni responsabilidad.

## Portal del proveedor externo

El cliente definió con precisión qué puede y qué no puede ver un proveedor externo. El objetivo declarado es que **el proveedor no genere carga de trabajo adicional al técnico interno**: que documente él mismo su trabajo en lugar de que alguien lo transcriba.

**El proveedor puede:** generar el informe técnico en el formato establecido por OMNITRONEC; seleccionar todas las partes, piezas, repuestos y servicios ejecutados; e introducir manualmente sus costos.

**El proveedor no puede ver, bajo ninguna circunstancia:** costos de la empresa, información de clientes, existencias, ni ningún otro dato del sistema.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| EXT-001 | Catálogo de proveedores técnicos con capacidades, contactos y condiciones. Un proveedor puede ser una persona independiente o una empresa. | Confirmado | P1 |
| EXT-002 | La orden externa incluye equipos, diagnóstico previo, trabajo requerido y la fecha comprometida con el cliente. | Confirmado | P1 |
| EXT-003 | Actas de salida y de retorno, con cambio de custodia firmado y responsable identificado. | Confirmado | P1 |
| EXT-004 | Los costos del proveedor se registran separados del precio al cliente y su visibilidad depende del permiso. | Confirmado | P1 |
| EXT-005 | El reloj del proveedor corre separado del tiempo interno. | Confirmado + propuesto | P1 |
| EXT-006 | Portal externo limitado con el alcance exacto descrito arriba. | Confirmado — nota del cliente | P1 |
| EXT-007 | El proveedor puede declarar que no pudo reparar, indicando qué ocurrió con cada equipo. | Confirmado — nota del cliente | P1 |
| EXT-008 | Indicadores de puntualidad, calidad, costo, retrabajo y garantías por proveedor. | Propuesto | P2 |
| EXT-009 | La garantía otorgada por el proveedor queda registrada y es reclamable desde la plataforma. | Confirmado — nota del cliente | P1 |
| EXT-010 | El acta de salida al proveedor externo es digital e imprimible, e incluye las notas y solicitudes del cliente —por ejemplo, la fecha en que necesita el equipo— separadas de las observaciones internas. | Confirmado — T1 · nuevo v4 | P1 |

## Pendientes

- **FALTA INFORMACIÓN:** LISTA DE PROVEEDORES ACTUALES, CATEGORÍAS QUE ATIENDEN Y ACUERDOS VIGENTES.
- **FALTA INFORMACIÓN:** TRATAMIENTO CONTABLE DE LA BODEGA EN CUSTODIA EXTERNA.
