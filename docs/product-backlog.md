# Backlog de producto

Este documento recoge la estructura funcional de alto nivel de la web de adopción de mascotas. En esta etapa, el alcance se organiza en épicas y funcionalidades, sin descomponerlas todavía en historias de usuario ni tareas técnicas.

Los identificadores `EP-XX` y `F-XX` son estables y permiten mantener la trazabilidad del producto.

## Resumen y trazabilidad

| Épica | Capacidad del producto | Funcionalidades |
| --- | --- | --- |
| `EP-01` | Catálogo de animales | `F-01`–`F-05` |
| `EP-02` | Solicitudes de adopción | `F-06`–`F-11` |
| `EP-03` | Gestión de candidaturas | `F-12`–`F-17` |
| `EP-04` | Seguimiento de la adopción | `F-18`–`F-23` |
| `EP-05` | Administración de animales | `F-24`–`F-28` |

## EP-01. Catálogo de animales

Permitir que las personas interesadas conozcan los animales disponibles para adopción.

Desarrollo detallado: [EP-01. Catálogo de animales](ep-01/README.md).

- `F-01`. Consultar animales disponibles.
- `F-02`. Filtrar animales por especie y características.
- `F-03`. Consultar la ficha de un animal.
- `F-04`. Consultar fotografías y características relevantes del animal.
- `F-05`. Consultar necesidades especiales o requisitos específicos de adopción.

## EP-02. Solicitudes de adopción

Permitir que una persona interesada pueda iniciar y gestionar una solicitud para adoptar un animal.

- `F-06`. Crear una solicitud de adopción.
- `F-07`. Proporcionar información sobre el posible adoptante.
- `F-08`. Revisar y enviar una solicitud.
- `F-09`. Consultar el estado de una solicitud.
- `F-10`. Recibir información sobre cambios de estado.
- `F-11`. Retirar una solicitud abierta.

## EP-03. Gestión de candidaturas

Permitir que el personal de la protectora evalúe y resuelva las solicitudes recibidas.

- `F-12`. Consultar solicitudes recibidas.
- `F-13`. Examinar los datos de una candidatura.
- `F-14`. Registrar observaciones durante la evaluación.
- `F-15`. Gestionar el estado de una candidatura.
- `F-16`. Aprobar o rechazar candidaturas.
- `F-17`. Comparar candidaturas asociadas a un mismo animal.

## EP-04. Seguimiento de la adopción

Permitir completar el proceso de adopción y realizar un seguimiento posterior.

- `F-18`. Formalizar una adopción.
- `F-19`. Registrar que un animal ha sido adoptado.
- `F-20`. Proporcionar información de la adopción al adoptante.
- `F-21`. Programar seguimientos posteriores.
- `F-22`. Registrar información sobre la adaptación del animal.
- `F-23`. Mantener el historial de seguimiento de una adopción.

## EP-05. Administración de animales

Permitir que el personal autorizado mantenga actualizado el catálogo de animales.

- `F-24`. Registrar un nuevo animal.
- `F-25`. Modificar la información de un animal.
- `F-26`. Gestionar su estado.
- `F-27`. Publicar un animal para adopción.
- `F-28`. Retirar temporalmente un animal del catálogo.

## Evolución del backlog

Este backlog es un artefacto vivo. Cualquier división, fusión, dependencia o cambio de alcance deberá justificarse funcionalmente y conservar la trazabilidad:

`Épica → Funcionalidad`

En etapas posteriores, la trazabilidad podrá ampliarse a:

`Épica → Funcionalidad → Historia de usuario → Tarea técnica → Código → Prueba → Release`

Las necesidades que no estén justificadas por las cinco épicas actuales se presentarán primero como propuestas antes de incorporarse al backlog.
