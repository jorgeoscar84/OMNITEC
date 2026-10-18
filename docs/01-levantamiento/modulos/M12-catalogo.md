# M12 · Catálogo de productos, servicios y repuestos

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M12 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Ofrecer una taxonomía compartida, flexible y gobernada para vender, reparar, documentar y analizar.

## Taxonomía inicial

```text
Radiocomunicaciones
├─ Equipos de usuario
│  ├─ Portátiles
│  ├─ Móviles
│  └─ Bases
├─ Infraestructura
│  ├─ Repetidoras
│  ├─ Duplexores
│  ├─ Antenas
│  ├─ Fuentes de poder y energía
│  ├─ Cables, conectores y arneses
│  └─ Caseta, torre y elementos asociados
└─ Servicios
   ├─ Diagnóstico
   ├─ Reparación
   ├─ Calibración y ajuste
   ├─ Confección
   ├─ Mantenimiento
   ├─ Ingeniería e instalación
   └─ Renta de radiofrecuencia

Otras categorías de equipos atendidos
├─ Impresoras
├─ Controles de acceso
└─ Las demás que la empresa defina
```

Esta taxonomía es una **semilla**, no el catálogo definitivo. El principio que la gobierna es que **cualquier usuario autorizado debe poder crear nuevas categorías y nuevos productos dentro de ellas**, sin esperar a un cambio de software.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| CAT-001 | Categorías jerárquicas y extensibles. Está prohibido usar una categoría “varios” como solución permanente. | Confirmado | P1 |
| CAT-002 | Se distinguen producto, repuesto, servicio y trabajo técnico como entidades separadas. | Confirmado | P1 |
| CAT-003 | Los servicios distinguen reparación, calibración, ajuste, confección, mantenimiento y renta de radiofrecuencia. | Confirmado — nota del cliente | P1 |
| CAT-004 | Al seleccionar un producto o servicio se puede filtrar por categoría o por servicio específico. | Confirmado — nota del cliente | P1 |
| CAT-005 | La compatibilidad entre repuesto y modelo se establece por identificador, nunca por coincidencia de texto. | Observado — brecha | P0 |
| CAT-006 | Marcas ilimitadas. La restricción actual a dos marcas desaparece. | Observado + confirmado | P1 |
| CAT-007 | En modo integrado, el código, la descripción, el precio base y la tarifa de impuesto provienen de UpConta y se referencian por identificador; en modo autónomo los administra OMNITRONEC 360 con tarifas configurables. | Confirmado + propuesto · ajustado v4 | P0 |
| CAT-008 | Las listas de precio por categoría de cliente o distribuidor las administra OMNITRONEC 360, porque el sistema contable maneja un solo precio por producto. | Observado en la API | P1 |
| CAT-009 | Un producto creado en OMNITRONEC 360 puede escribirse hacia UpConta; si la escritura no está disponible, queda en una cola de pendientes y el catálogo sigue operando. | Confirmado — cliente | P1 |
| CAT-010 | Importación masiva con simulación previa y auditoría. | Confirmado + propuesto | P1 |
| CAT-011 | Los elementos referenciados se desactivan; nunca se borran físicamente. | Propuesto | P0 |
| CAT-012 | Imagen, ficha técnica y atributos comerciales reutilizables en catálogo y documentos. | Confirmado | P2 |
| CAT-013 | Ningún elemento del catálogo global puede llevar el nombre de un cliente concreto. | Observado — brecha | P1 |
| CAT-014 | La estructura de categorías macro y micro de todos los equipos atendidos —radiocomunicación, impresoras, controles de acceso y demás— se entrega como plantilla semilla y el cliente la valida antes de cargarla. | Confirmado — T1 · nuevo v4 | P1 |
| CAT-015 | Productos y repuestos registran por separado su costo y su precio de venta al cliente final; el costo solo es visible con permiso. | Confirmado — T1 · nuevo v4 | P1 |
| CAT-016 | Lista de precios de repuestos por marca y modelo, editable en línea, cuyo precio se propone automáticamente al agregar el repuesto a un equipo de ese modelo (relación por identificador, CAT-005). | Observado — app actual, oct 2026 | P1 |

> **Brechas observadas en el catálogo actual.** El catálogo de repuestos rápidos del informe incluye el elemento BATERÍA TIA, que corresponde a un cliente específico y no a una pieza genérica. La misma pieza figura como Carry Holder (Clip) en el formulario y como Harry Holder (Clip) en el catálogo de precios. Y de las 228 piezas que el sistema declara, solo 218 son visibles: **hay 2 modelos y 10 piezas sin marca asignada**, invisibles bajo ambas pestañas.

## Pendientes

- **FALTA INFORMACIÓN:** VALIDAR LA ESTRUCTURA SEMILLA DE CATEGORÍAS MACRO Y MICRO (ARCHIVO `data/semillas/categorias-producto.csv`, P-16).
- **FALTA INFORMACIÓN:** ¿«IMPRESORAS HEBRAS» (T1) SE REFIERE A IMPRESORAS ZEBRA? CONFIRMAR MARCAS Y TIPOS DE EQUIPOS QUE NO SON RADIOS.
- **FALTA INFORMACIÓN:** MARCAS ADICIONALES A MOTOROLA Y KENWOOD.
