# HU-01-03. Consultar la ficha de un animal

## Enunciado

**Como** persona interesada en adoptar,  
**quiero** consultar la ficha de un animal  
**para** conocer su información antes de decidir si inicio una solicitud de adopción.

## Objetivo y valor

Reunir en una única consulta la información disponible de un animal y permitir que la persona valore si puede ofrecerle un hogar adecuado.

## Trazabilidad

- **Épica:** `EP-01. Catálogo de animales`.
- **Funcionalidad:** `F-03. Consultar la ficha de un animal`.

## Actor principal

- Persona interesada.

## Precondiciones

- El animal está publicado y disponible en el catálogo.
- La persona ha seleccionado el animal desde una consulta del catálogo.

## Flujo principal

1. La persona selecciona un animal del catálogo.
2. El sistema identifica el animal seleccionado.
3. El sistema muestra su ficha con la información disponible.
4. La ficha incorpora sus fotografías y características relevantes según `HU-01-04`.
5. La ficha incorpora sus necesidades especiales o requisitos específicos según `HU-01-05`.

## Flujos alternativos y excepciones

- Si el animal ya no está disponible, el sistema informa de ello y evita presentarlo como adoptable.
- Si el animal no existe o no está publicado, el sistema informa de que la ficha no está disponible.
- Si la ficha no puede recuperarse, el sistema informa de que la consulta no se ha podido completar.

## Reglas de negocio

- `RN-01-08`: la ficha consultada debe corresponder inequívocamente al animal seleccionado.
- `RN-01-09`: la ficha solo se ofrece como ficha adoptable mientras el animal esté publicado y disponible.
- `RN-01-10`: la consulta de una ficha no modifica la información ni el estado del animal.

## Criterios de aceptación

### CA-01. Consulta de una ficha disponible

**Dado** que un animal está publicado y disponible  
**cuando** la persona lo selecciona en el catálogo  
**entonces** el sistema muestra la ficha correspondiente a ese animal  
**y** presenta la información que esté registrada para él.

### CA-02. Correspondencia del animal

**Dado** que la persona ha seleccionado un animal concreto  
**cuando** se muestra la ficha  
**entonces** la identificación, fotografías, características, necesidades y requisitos presentados corresponden a ese mismo animal.

### CA-03. Animal que deja de estar disponible

**Dado** que un animal ha dejado de estar disponible después de aparecer en el catálogo  
**cuando** la persona intenta abrir su ficha  
**entonces** el sistema informa de que ya no está disponible  
**y** no lo presenta como adoptable.

### CA-04. Ficha inexistente o no publicada

**Dado** que el animal solicitado no existe o no está publicado  
**cuando** la persona intenta consultar su ficha  
**entonces** el sistema informa de que la ficha no está disponible  
**y** no revela información interna del animal.

## Dependencias

- Parte de los resultados de `HU-01-01` o `HU-01-02`.
- Integra la información definida en `HU-01-04` y `HU-01-05`.

## Fuera del alcance

- Modificar los datos o el estado del animal, perteneciente a `EP-05`.
- Crear una solicitud de adopción, perteneciente a `EP-02`.
