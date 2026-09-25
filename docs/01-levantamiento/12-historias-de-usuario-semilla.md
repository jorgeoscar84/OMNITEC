# 12 · Historias de usuario semilla

[← Índice del levantamiento](README.md)

Historias que el PRD convertirá en criterios de aceptación verificables. Las marcadas *(nuevo v4)* salen de requisitos incorporados en esta versión.

## 17. Historias de usuario semilla

1. Como asesor comercial, quiero recibir leads solo cuando estoy disponible y ver de dónde vienen, para responder rápido sin perder la atribución.
2. Como supervisor, quiero reasignar una oportunidad con todo su historial, para mantener la continuidad durante una ausencia.
3. Como asesor, quiero crear una proforma desde la ficha del cliente con el catálogo y el precio ya sincronizados, para no volver a escribir nada.
4. Como asesor, quiero duplicar una proforma hacia otra sucursal del mismo cliente cambiando solo el destinatario, para no rehacer treinta líneas iguales.
5. Como cliente aprobador, quiero aceptar o pedir cambios sobre una versión concreta, para que no haya ambigüedad sobre qué aprobé.
6. Como recepción, quiero registrar los equipos y la firma en tableta, para entregar una constancia inmediata y trazable.
7. Como técnico, quiero que el sistema separe la espera del cliente y la del repuesto de mi tiempo de trabajo, para que mi desempeño se mida con justicia.
8. Como técnico, quiero ver al recibir un equipo si tiene garantía vigente y cuánto le queda, para no cobrar lo que no corresponde.
9. Como técnico, quiero enviar un equipo a un proveedor externo sin salir del flujo de custodia, para no perder la trazabilidad.
10. Como coordinador, quiero saber qué órdenes están detenidas y por qué, para eliminar los cuellos de botella.
11. Como técnico de campo, quiero ejecutar la lista de verificación y tomar fotografías sin señal, para no perder el trabajo en una caseta remota.
12. Como ingeniero, quiero consultar el plan de canales de un cliente antes de ir al sitio, para llegar con la programación correcta.
13. Como asesor, quiero recibir alertas de renovación de contrato, póliza y mantenimiento, para contactar al cliente antes de que venza.
14. Como gerente, quiero abrir un indicador y ver los registros que lo componen, para poder confiar en la cifra.
15. Como marketing, quiero importar los primeros quinientos contactos de una base solo para campaña, para no saturar a los asesores con contactos fríos.
16. Como administrador, quiero probar una automatización antes de publicarla, para no provocar un envío masivo incorrecto.
17. Como asesor junior, quiero que el sistema me muestre el speech y las objeciones típicas del producto y de la industria del cliente, para sostener la negociación con apoyo.
18. Como asesor, quiero que un agente arme una propuesta comparativa con lo que hay en inventario y luego poder editarla, para responder rápido sin enviar algo que no revisé.
19. Como inventario, quiero reservar repuestos por un plazo definido que se libere solo, para no bloquear existencias indefinidamente.
20. Como proveedor externo, quiero recibir la orden con el diagnóstico y la fecha requerida y poder cargar mi informe, para no empezar desde cero ni generar trabajo al técnico interno.

### Criterios transversales de aceptación

- Ningún documento emitido cambia cuando después cambia un precio, un impuesto, una garantía o una plantilla.
- Ninguna transición crítica ocurre sin usuario, fecha, motivo y estado anterior y nuevo.
- Ningún usuario accede a un cliente, un costo, un documento o una exportación fuera de su alcance.
- Ninguna automatización envía a un contacto suprimido o sin permiso aplicable.
- Ningún indicador se publica sin su definición y un conjunto de registros verificables.
- Ningún fallo de integración o de IA destruye trabajo manual ni duplica operaciones.
- Ninguna reserva de existencias queda activa más allá de su plazo configurado.

## Historias añadidas en la v4

- Como asesor, quiero generar un catálogo en PDF con los productos que le interesan al cliente y su lista de precios, para enviarlo sin armarlo a mano. *(nuevo v4 — COT-018)*
- Como asesor, quiero emitir una proforma a un prospecto del que solo tengo el nombre y el WhatsApp, para no perder la oportunidad por falta de datos fiscales. *(nuevo v4 — COT-016)*
- Como recepción, quiero crear al cliente en el mismo momento en que trae sus equipos, para no hacerle esperar ni salir del acta. *(nuevo v4 — REC-015)*
- Como gerente, quiero ver cada día y cada semana qué revisó, reparó y cotizó cada técnico, y para qué cliente, para conocer la productividad real del área. *(nuevo v4 — BI-014)*
- Como administrador, quiero crear campos nuevos en la ficha del cliente sin pedir un cambio de software, para registrar lo que el negocio necesite mañana. *(nuevo v4 — CLI-018)*
- Como asesor, quiero que el sistema me impida agendar una reunión encima de un viaje ya programado, para no incumplir con ningún cliente. *(nuevo v4 — CAL-013)*
- Como cualquier usuario, quiero ver cuando un compañero cierra una venta, para celebrarla sin conocer montos que no me corresponden. *(nuevo v4 — VEN-015)*
