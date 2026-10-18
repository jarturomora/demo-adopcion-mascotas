# HU-01-01. Consultar animales disponibles

## Enunciado

**Como** persona interesada en adoptar,  
**quiero** consultar los animales disponibles para adopción  
**para** conocer qué animales puedo adoptar actualmente.

## Objetivo y valor

Ofrecer un punto de entrada al catálogo que permita descubrir las opciones de adopción vigentes sin incluir animales que no estén disponibles.

## Trazabilidad

- **Épica:** `EP-01. Catálogo de animales`.
- **Funcionalidad:** `F-01. Consultar animales disponibles`.

## Actor principal

- Persona interesada.

## Precondiciones

- El catálogo está accesible.
- La disponibilidad y publicación de los animales han sido gestionadas por personal autorizado.

## Flujo principal

1. La persona accede al catálogo de animales.
2. El sistema consulta los animales publicados que están disponibles para adopción.
3. El sistema presenta los animales encontrados de forma que puedan identificarse y seleccionarse.
4. La persona puede elegir un animal para consultar su ficha mediante `HU-01-03`.

## Flujos alternativos y excepciones

- Si no hay animales disponibles, el sistema informa de que no existen resultados en ese momento.
- Si un animal deja de estar disponible, no aparece en las consultas posteriores del catálogo.
- Si el catálogo no puede recuperarse, el sistema informa de que la consulta no se ha podido completar.

## Reglas de negocio

- `RN-01-01`: solo se muestran animales publicados y disponibles para adopción.
- `RN-01-02`: un animal retirado, reservado, adoptado o en cualquier otro estado no disponible no se presenta como disponible.
- `RN-01-03`: la consulta del catálogo no modifica la información ni el estado de los animales.

## Criterios de aceptación

### CA-01. Consulta con animales disponibles

**Dado** que existen animales publicados y disponibles  
**cuando** la persona consulta el catálogo  
**entonces** el sistema muestra esos animales  
**y** permite seleccionar cualquiera de ellos para consultar su ficha.

### CA-02. Exclusión de animales no disponibles

**Dado** que existen animales que no están disponibles para adopción  
**cuando** la persona consulta el catálogo  
**entonces** esos animales no aparecen entre los resultados disponibles.

### CA-03. Catálogo sin resultados

**Dado** que no existen animales publicados y disponibles  
**cuando** la persona consulta el catálogo  
**entonces** el sistema muestra un mensaje que indica que no hay animales disponibles  
**y** no presenta resultados incorrectos.

### CA-04. Error durante la consulta

**Dado** que el catálogo no puede recuperarse  
**cuando** la persona intenta consultarlo  
**entonces** el sistema informa de que la consulta no se ha podido completar  
**y** no muestra información parcial como si fuera completa.

## Dependencias

- La información de disponibilidad procede de `F-26. Gestionar su estado`.
- La visibilidad en el catálogo depende de `F-27. Publicar un animal para adopción` y `F-28. Retirar temporalmente un animal del catálogo`.

## Fuera del alcance

- Filtrar los resultados, cubierto por `HU-01-02`.
- Consultar el detalle de un animal, cubierto por `HU-01-03`.
- Iniciar una solicitud de adopción, perteneciente a `EP-02`.
