# M16 · Servicio en campo, sitios e infraestructura

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M16 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Gestionar visitas, mantenimiento e ingeniería sobre los sistemas de radiocomunicación instalados en los sitios del cliente.

## Modelo del sitio

```text
Cliente
└── Sitio
    ├── Dirección, geografía, accesos y responsables
    ├── Componentes de infraestructura  ← lista extensible
    ├── Sistemas de repetición
    │   ├── Repetidora
    │   ├── Duplexor
    │   ├── Antena
    │   ├── Línea, conectores y arneses
    │   └── Plan de frecuencias y canales
    ├── Energía, UPS, baterías y ventilación
    ├── Enlaces y cobertura
    ├── Mantenimientos e inspecciones
    ├── Incidencias y alarmas
    └── Documentos, fotografías y estudios
```

## Los componentes de infraestructura no son una lista cerrada

El levantamiento anterior fijaba “torre, caseta, gabinete y seguridad” como si fueran los únicos elementos posibles. El cliente corrigió esto: **un administrador debe poder agregar cualquier otro componente** —un regulador de voltaje, por ejemplo, o lo que la operación requiera— sin esperar un cambio de software.

Además, cada componente instalado:

- Se registra como un elemento identificable asociado al sitio del cliente, idealmente vinculado al producto del catálogo que se le vendió o instaló.
- Lleva una descripción de sus características técnicas.
- **Sirve como base para las auditorías de sitio**, permitiendo constatar que los equipos no fueron cambiados, retirados ni vulnerados.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| CAM-001 | Cliente, Sitio, Sistema y Activo son entidades separadas, relacionadas por identificador. | Observado — brecha | P0 |
| CAM-002 | El catálogo de componentes de infraestructura es extensible por un administrador. | Confirmado — nota del cliente | P1 |
| CAM-003 | Cada componente instalado admite descripción de características técnicas y queda ligado al sitio. | Confirmado — nota del cliente | P1 |
| CAM-004 | Existe una auditoría de sitio que compara lo instalado contra lo registrado y reporta diferencias. | Confirmado — nota del cliente | P1 |
| CAM-005 | El sitio registra coordenadas, accesos, riesgos, contactos y documentación. | Inferido + propuesto | P1 |
| CAM-006 | La visita se liga a orden, calendario, cuadrilla, viaje, lista de verificación y firma. | Confirmado + propuesto | P1 |
| CAM-007 | Listas de verificación configurables por tipo de trabajo y tipo de sitio. | Propuesto | P1 |
| CAM-008 | Mantenimiento preventivo con periodicidad, activos cubiertos y próxima fecha. | Confirmado + propuesto | P1 |
| CAM-009 | Estudios de ingeniería con inicio, vigencia, alcance, mediciones y documento. | Confirmado | P1 |
| CAM-010 | El vencimiento del estudio alimenta alertas, tareas y campañas autorizadas. | Confirmado | P1 |
| CAM-011 | La cobertura circular se etiqueta explícitamente como aproximación, nunca como estudio de radiofrecuencia. | Observado | P1 |
| CAM-012 | La herramienta de cálculo de arneses guarda su resultado asociado a un sitio o a una orden. | Observado + propuesto | P2 |
| CAM-013 | Modo sin conexión para listas de verificación, fotografías, mediciones y firma. | Propuesto | P1 |
| CAM-014 | Historial por activo: mantenimientos, incidencias, cambios y mediciones. | Propuesto | P1 |
| CAM-015 | Informe de mantenimiento en sitio para un cliente con varias ubicaciones —fincas o sucursales—, cada una con su fecha, sus equipos, repuestos, subtotal e impuesto, más un total general. | Observado — app actual, oct 2026 | P1 |
| CAM-016 | Mapa de repetidoras con ubicación, banda, frecuencias, modelo, altura y radio de cobertura aproximado (CAM-011), con herramienta para medir distancias entre puntos. | Observado — app actual, oct 2026 | P1 |

> **Contexto de adopción.** El módulo de infraestructura actual contiene cinco repetidoras, una de ellas de prueba, mientras el parque instalado supera los 660 canales en 227 clientes. El problema no es que falte la funcionalidad: es que no se usa. La nueva plataforma debe reducir a lo mínimo el esfuerzo de registrar un sitio, o repetirá el mismo resultado.

## Pendientes

- **FALTA INFORMACIÓN:** COMPONENTES DE INFRAESTRUCTURA INICIALES A CARGAR (LA SEMILLA PROPONE UNA LISTA).
