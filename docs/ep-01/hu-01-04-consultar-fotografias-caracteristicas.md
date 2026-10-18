# HU-01-04. Consultar fotografías y características relevantes

## Enunciado

**Como** persona interesada en adoptar,  
**quiero** consultar las fotografías y características relevantes de un animal  
**para** conocerlo mejor y valorar si encaja en mi entorno.

## Objetivo y valor

Proporcionar información visual y descriptiva suficiente para que la persona comprenda las características conocidas del animal sin confundir datos ausentes con datos confirmados.

## Trazabilidad

- **Épica:** `EP-01. Catálogo de animales`.
- **Funcionalidad:** `F-04. Consultar fotografías y características relevantes del animal`.

## Actor principal

- Persona interesada.

## Precondiciones

- La persona está consultando la ficha de un animal disponible.
- El personal autorizado ha registrado las fotografías y características conocidas del animal.

## Flujo principal

1. El sistema recupera las fotografías publicadas del animal.
2. El sistema muestra una fotografía principal y permite consultar las demás fotografías disponibles, si las hay.
3. El sistema recupera las características relevantes registradas para el animal.
4. El sistema presenta cada característica con un nombre y un valor comprensibles.

## Información contemplada

Las características concretas dependen de los datos definidos para el catálogo. Pueden incluir, cuando estén registradas, especie, raza o mestizaje, sexo, edad o etapa vital, tamaño y otros rasgos relevantes para la adopción. Esta relación orienta la presentación y no amplía por sí misma el modelo de datos.

## Flujos alternativos y excepciones

- Si el animal no tiene fotografías publicadas, el sistema informa de que no hay fotografías disponibles y evita mostrar imágenes rotas o pertenecientes a otro animal.
- Si una característica no está registrada, el sistema la omite o la identifica como desconocida, sin inventar un valor.
- Si una fotografía no puede cargarse, el resto de la ficha y de las fotografías disponibles sigue siendo consultable.

## Reglas de negocio

- `RN-01-11`: solo se muestran fotografías publicadas y asociadas al animal consultado.
- `RN-01-12`: las características mostradas proceden de la información registrada para ese animal.
- `RN-01-13`: un dato no registrado no se presenta como un dato confirmado.
- `RN-01-14`: las fotografías y características se consultan dentro de la ficha del animal.

## Criterios de aceptación

### CA-01. Consulta de fotografías

**Dado** que un animal tiene una o más fotografías publicadas  
**cuando** la persona consulta su ficha  
**entonces** el sistema muestra una fotografía principal  
**y** permite consultar las demás fotografías disponibles.

### CA-02. Ausencia de fotografías

**Dado** que un animal no tiene fotografías publicadas  
**cuando** la persona consulta su ficha  
**entonces** el sistema indica que no hay fotografías disponibles  
**y** no muestra imágenes rotas ni fotografías de otro animal.

### CA-03. Consulta de características

**Dado** que un animal tiene características relevantes registradas  
**cuando** la persona consulta su ficha  
**entonces** el sistema muestra esas características con sus valores correspondientes.

### CA-04. Datos no registrados

**Dado** que una característica no está registrada para el animal  
**cuando** se muestra la ficha  
**entonces** el sistema no atribuye al animal un valor no confirmado.

### CA-05. Correspondencia de la información

**Dado** que la persona consulta la ficha de un animal  
**cuando** se muestran fotografías y características  
**entonces** toda la información presentada corresponde al animal consultado.

## Dependencias

- Forma parte de la ficha definida en `HU-01-03`.
- La información es mantenida mediante `F-25. Modificar la información de un animal`.

## Fuera del alcance

- Añadir, modificar o eliminar fotografías y características, perteneciente a `EP-05`.
- Mostrar necesidades especiales o requisitos específicos de adopción, cubierto por `HU-01-05`.
