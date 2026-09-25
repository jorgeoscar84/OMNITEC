# M10 · Repositorio documental por cliente

[← Índice de módulos](README.md) · [Índice del levantamiento](../README.md)

> Módulo M10 · Dependencias y entregas en [04 · Mapa de módulos](../04-mapa-de-modulos.md) · Origen de cada requisito: ver leyenda en el [índice de módulos](README.md).

**Propósito.** Conservar contratos, certificados, estudios, propuestas, informes y evidencias en una estructura localizable, versionada y con permisos.

## Estructura inicial de carpetas

Contratos, separados por frecuencia, caseta, infraestructura, equipos y mixtos · estudios de ingeniería · ARCOTEL y certificados de frecuencia · certificados comerciales y de garantía · proformas y aprobaciones · actas de recepción y entrega · informes técnicos y de sitio · enlaces a documentos fiscales según permiso · evidencias y fotografías · carpetas personalizadas.

## Requisitos

| ID | Requisito | Origen | Prioridad |
| --- | --- | --- | --- |
| DOC-001 | Repositorio dentro de la ficha del cliente, con estructura inicial y carpetas que el usuario pueda crear. | Confirmado | P1 |
| DOC-002 | Búsqueda por cliente, RUC, contacto, teléfono, tipo, etiqueta, fecha y texto indexado cuando sea posible. | Confirmado | P1 |
| DOC-003 | Formatos admitidos: PDF, DOCX, XLSX, TXT, PPTX, HTML, JPG y PNG. | Confirmado | P2 |
| DOC-004 | Exportación individual o masiva, sujeta a permiso y con registro. | Confirmado | P1 |
| DOC-005 | Versionado con suma de verificación, propietario, fecha, origen y política de retención. | Propuesto | P0 |
| DOC-006 | Un archivo puede relacionarse con varias entidades sin duplicar el binario. | Propuesto | P1 |
| DOC-007 | Enlaces compartidos temporales, revocables y con alcance limitado. | Propuesto | P0 |
| DOC-008 | Validación antivirus y límites de tamaño y tipo. | Propuesto | P0 |
| DOC-009 | Borrado lógico con papelera y retención legal. | Propuesto | P0 |
| DOC-010 | Migración o coexistencia controlada con los documentos que hoy viven en Google Drive. | Confirmado | P1 |

## Reglas

- La carpeta organiza; las relaciones de negocio determinan el contexto real de un documento.
- El documento emitido conserva la plantilla y los datos con los que se generó, aunque después cambien.
- Ninguna exportación masiva ocurre sin autorización, doble factor y registro de auditoría.

## Pendientes

- **FALTA INFORMACIÓN:** VOLUMEN ACTUAL, CRECIMIENTO MENSUAL Y POLÍTICA DE RETENCIÓN.
- **FALTA INFORMACIÓN:** DECISIÓN ENTRE MANTENER DRIVE, MIGRAR A ALMACENAMIENTO PROPIO O USAR AMBOS.
