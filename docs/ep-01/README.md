# EP-01. Catálogo de animales

## Objetivo

Permitir que las personas interesadas conozcan los animales disponibles para adopción.

## Alcance funcional

| Funcionalidad | Descripción | Historias de usuario |
| --- | --- | --- |
| `F-01` | Consultar animales disponibles. | [`HU-01-01`](hu-01-01-consultar-animales-disponibles.md) |
| `F-02` | Filtrar animales por especie y características. | [`HU-01-02`](hu-01-02-filtrar-animales.md) |
| `F-03` | Consultar la ficha de un animal. | [`HU-01-03`](hu-01-03-consultar-ficha-animal.md) |
| `F-04` | Consultar fotografías y características relevantes del animal. | [`HU-01-04`](hu-01-04-consultar-fotografias-caracteristicas.md) |
| `F-05` | Consultar necesidades especiales o requisitos específicos de adopción. | [`HU-01-05`](hu-01-05-consultar-necesidades-requisitos.md) |

## Actores

- **Persona interesada:** visitante que consulta el catálogo para conocer los animales que puede adoptar.
- **Personal de la protectora:** mantiene la información y la disponibilidad de los animales mediante `EP-05. Administración de animales`. Su operativa queda fuera del alcance de esta épica.

## Relación entre funcionalidades

La persona interesada comienza consultando los animales disponibles (`F-01`) y puede acotar los resultados (`F-02`). Desde un resultado accede a la ficha del animal (`F-03`), que reúne sus fotografías y características relevantes (`F-04`) y sus necesidades especiales o requisitos específicos de adopción (`F-05`).

## Fuera del alcance

- Crear o gestionar solicitudes de adopción, cubierto por `EP-02`.
- Evaluar candidaturas, cubierto por `EP-03`.
- Formalizar o realizar el seguimiento de una adopción, cubierto por `EP-04`.
- Crear, modificar, publicar o retirar animales, cubierto por `EP-05`.

## Trazabilidad

`EP-01 → F-01…F-05 → HU-01-01…HU-01-05`
