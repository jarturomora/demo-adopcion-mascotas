# Documentación del proyecto

## Descripción general

Este proyecto desarrolla una aplicación web para facilitar la adopción responsable de mascotas, inicialmente perros y gatos. La aplicación permitirá que las personas interesadas conozcan los animales disponibles y gestionen sus solicitudes de adopción, mientras que el personal de la protectora podrá evaluar candidaturas, formalizar adopciones, realizar su seguimiento y mantener actualizado el catálogo.

El repositorio tiene también una finalidad didáctica para la asignatura **Procesos en Ingeniería del Software**. La documentación y el producto evolucionarán de forma incremental para mostrar la trazabilidad entre las necesidades funcionales, el desarrollo técnico y las entregas.

## Objetivo del producto

Centralizar el proceso de adopción desde la publicación de un animal hasta el seguimiento posterior a su adopción, ofreciendo información clara a las personas interesadas y herramientas de gestión al personal de la protectora.

## Actores principales

- **Persona interesada:** consulta el catálogo e inicia y gestiona solicitudes de adopción.
- **Persona adoptante:** participa en la formalización de la adopción y recibe la información asociada al proceso.
- **Personal de la protectora:** evalúa candidaturas, resuelve solicitudes y gestiona el proceso y seguimiento de las adopciones.
- **Personal autorizado:** especialización del personal de la protectora responsable de mantener los animales y su publicación en el catálogo.

## Alcance funcional

El producto se organiza en cinco épicas:

| Épica | Capacidad principal | Funcionalidades |
| --- | --- | --- |
| `EP-01` | Catálogo de animales | `F-01`–`F-05` |
| `EP-02` | Solicitudes de adopción | `F-06`–`F-11` |
| `EP-03` | Gestión de candidaturas | `F-12`–`F-17` |
| `EP-04` | Seguimiento de la adopción | `F-18`–`F-23` |
| `EP-05` | Administración de animales | `F-24`–`F-28` |

La definición vigente de todas las épicas y funcionalidades se encuentra en el [backlog de producto](product-backlog.md). El desarrollo funcional detallado de `EP-01` está disponible en [Catálogo de animales](ep-01/README.md).

## Diagrama de casos de uso

El [diagrama de casos de uso](use-cases.puml) está escrito en PlantUML y representa las funcionalidades `F-01`–`F-28`, agrupadas por épica, junto con los actores que interactúan con ellas.

El diagrama muestra el alcance funcional general. Las relaciones indican la participación de cada actor en un caso de uso, pero no sustituyen la descripción detallada del backlog ni de las historias de usuario.

## Organización de la documentación

```text
docs/
├── README.md                 # Descripción general e índice
├── product-backlog.md        # Épicas y funcionalidades
├── use-cases.puml            # Diagrama general de casos de uso
└── ep-01/
    ├── README.md             # Alcance y trazabilidad de EP-01
    └── hu-*.md               # Historias de usuario de EP-01
```

Las demás épicas se incorporarán progresivamente siguiendo la misma estructura cuando se desarrolle su detalle.

## Trazabilidad

La documentación mantiene la siguiente jerarquía:

`Épica → Funcionalidad → Historia de usuario → Tarea técnica → Código → Prueba → Release`

En la etapa actual, el backlog general llega hasta el nivel de funcionalidad y `EP-01` está descompuesta en historias de usuario.
