# HU-01-02. Filtrar animales por especie y características

## Enunciado

**Como** persona interesada en adoptar,  
**quiero** filtrar los animales disponibles por especie y características  
**para** encontrar los que se ajustan a mis circunstancias y preferencias.

## Objetivo y valor

Facilitar la exploración del catálogo reduciendo los resultados mediante los datos relevantes que estén registrados para los animales.

## Trazabilidad

- **Épica:** `EP-01. Catálogo de animales`.
- **Funcionalidad:** `F-02. Filtrar animales por especie y características`.

## Actor principal

- Persona interesada.

## Precondiciones

- La persona ha accedido al catálogo de animales disponibles.
- Los animales poseen información estructurada sobre su especie y, cuando corresponda, sobre otras características habilitadas como filtros.

## Flujo principal

1. La persona consulta las opciones de filtrado del catálogo.
2. Selecciona una especie o una o varias características.
3. El sistema aplica todos los filtros seleccionados sobre los animales disponibles.
4. El sistema actualiza los resultados y mantiene visibles los filtros aplicados.
5. La persona puede modificar o eliminar filtros para obtener un nuevo conjunto de resultados.

## Flujos alternativos y excepciones

- Si ningún animal cumple los filtros, el sistema informa de que no hay coincidencias.
- Si la persona elimina todos los filtros, el sistema vuelve a mostrar todos los animales disponibles.
- Si un filtro no puede aplicarse, el sistema informa de que la consulta filtrada no se ha podido completar.

## Reglas de negocio

- `RN-01-04`: los filtros solo se aplican sobre animales publicados y disponibles.
- `RN-01-05`: al seleccionar varios criterios, un resultado debe cumplir todos los criterios aplicados.
- `RN-01-06`: las opciones de filtro deben corresponder a información definida para el catálogo; esta historia no crea ni modifica características de los animales.
- `RN-01-07`: aplicar o retirar filtros no modifica los datos de los animales.

## Criterios de aceptación

### CA-01. Filtro por especie

**Dado** que el catálogo contiene animales de distintas especies  
**cuando** la persona selecciona una especie  
**entonces** el sistema muestra únicamente los animales disponibles de esa especie.

### CA-02. Filtro por características

**Dado** que existen animales con distintas características registradas  
**cuando** la persona selecciona una característica habilitada  
**entonces** el sistema muestra únicamente los animales disponibles que cumplen esa característica.

### CA-03. Combinación de filtros

**Dado** que la persona ha seleccionado varios criterios  
**cuando** el sistema aplica los filtros  
**entonces** cada resultado mostrado cumple todos los criterios seleccionados  
**y** los filtros activos permanecen identificables.

### CA-04. Sin coincidencias

**Dado** que ningún animal disponible cumple los filtros seleccionados  
**cuando** el sistema actualiza los resultados  
**entonces** informa de que no hay coincidencias  
**y** permite modificar o eliminar los filtros.

### CA-05. Eliminación de filtros

**Dado** que hay filtros aplicados  
**cuando** la persona elimina todos los filtros  
**entonces** el sistema vuelve a mostrar el conjunto completo de animales disponibles.

## Dependencias

- Requiere el catálogo de animales disponibles definido en `HU-01-01`.
- Utiliza las características de los animales consultables mediante `HU-01-04`.

## Fuera del alcance

- Definir o modificar las características de un animal, perteneciente a `EP-05`.
- Ordenar o recomendar animales, capacidades no incluidas actualmente en el backlog.
- Guardar búsquedas o filtros, capacidad no incluida actualmente en el backlog.
