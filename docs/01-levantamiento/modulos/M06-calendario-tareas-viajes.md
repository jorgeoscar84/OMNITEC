# M06 · Calendario, tareas, disponibilidad y viajes

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M06 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Convertir acuerdos en compromisos ejecutables, sin solapamientos y con tiempos reales de preparación y desplazamiento.

## Tipos de evento

Llamada · reunión presencial · videollamada (el cliente nombró Zoom y Google Meet, T2) · visita técnica o comercial · tarea interna · viaje interprovincial · recordatorio o vencimiento automático.

## Campos mínimos

Título, cliente y contacto opcionales, oportunidad o servicio opcional, tipo, ubicación o enlace, responsable, invitados, inicio, fin o duración, tiempo de preparación, tiempo de viaje, recordatorios, privacidad, recurrencia, estado y resultado.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| CAL-001 | Los eventos se crean desde la ficha del cliente o de la oportunidad y se reflejan en el calendario. | Confirmado | P1 |
| CAL-002 | Detección de conflictos que contemple duración, preparación y viaje, no solo la hora del evento. | Confirmado | P1 |
| CAL-003 | La reunión presencial exige tiempo de viaje y admite tiempo de preparación, ambos editables por cliente y ubicación. | Confirmado | P1 |
| CAL-004 | La visita registra ubicación, duración estimada y si es local o interprovincial. | Confirmado | P1 |
| CAL-005 | Aviso para visitas locales: tiempo de viaje más dos horas. Regla configurable. | Confirmado | P2 |
| CAL-006 | Aviso para viajes interprovinciales: tiempo de viaje más cuarenta y ocho horas. Regla configurable. | Confirmado | P2 |
| CAL-007 | Notificación al móvil del responsable para los viajes que lo requieran, además del aviso en pantalla. | Confirmado | P2 |
| CAL-008 | Sincronización con calendarios externos —Google Calendar y Microsoft Outlook, los que nombró el cliente— sin duplicar eventos ni perder al propietario. | Confirmado · ajustado v4 | P2 |
| CAL-009 | El horario laboral y los eventos corporativos se consideran al asignar leads y al agendar citas. | Confirmado | P1 |
| CAL-010 | Un evento de calendario personal externo nunca tiene prioridad sobre un compromiso corporativo, pero tampoco se borra: se resuelve como conflicto con decisión humana. | Confirmado | P0 |
| CAL-011 | Cambiar o cancelar una cita registra motivo y notifica según la política definida. | Propuesto | P1 |
| CAL-012 | Los recordatorios se calculan en la zona horaria de Ecuador continental. | Propuesto | P1 |
| CAL-013 | Por defecto el sistema impide crear un evento que se cruce con un bloque ocupado —preparación, viaje y permanencia con el cliente, en minutos, horas o días—. Solo un rol autorizado puede forzarlo, registrando el motivo. | Confirmado — T2 · nuevo v4 | P1 |
| CAL-014 | Vistas de día, semana y mes, más una lista de pendientes ordenada por fecha y filtrable por cliente. | Confirmado — T2 · nuevo v4 | P1 |
| CAL-015 | Un evento ligado a un cliente puede enviar invitación o recordatorio al contacto por el canal permitido. | Confirmado — T2 · nuevo v4 | P2 |

## Recomendaciones

- Cálculo del tiempo de viaje mediante servicio de mapas, ofrecido como sugerencia editable y nunca como valor impuesto.
- Lista de verificación de preparación asociada al tipo de visita.
- Acción “Registrar resultado” al finalizar cada reunión.

## Pendientes

- **FALTA INFORMACIÓN:** PROVEEDORES DE CALENDARIO, VIDEOLLAMADA Y NOTIFICACIÓN AL MÓVIL, Y DIRECCIÓN DE LA SINCRONIZACIÓN.
- **FALTA INFORMACIÓN:** POLÍTICA DE PRIVACIDAD APLICABLE A LOS EVENTOS PERSONALES SINCRONIZADOS.
- **FALTA INFORMACIÓN:** CANAL DEL AVISO AL CELULAR DEL ASESOR PARA VIAJES: SMS, WHATSAPP O NOTIFICACIÓN PUSH.
