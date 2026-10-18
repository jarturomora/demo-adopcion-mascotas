# HU-01-05. Consultar necesidades especiales y requisitos de adopción

## Enunciado

**Como** persona interesada en adoptar,  
**quiero** consultar las necesidades especiales y los requisitos específicos de adopción de un animal  
**para** valorar responsablemente si puedo proporcionarle los cuidados y el entorno que necesita.

## Objetivo y valor

Dar visibilidad a las condiciones relevantes para el bienestar del animal y evitar que una persona inicie el proceso sin conocer los compromisos particulares asociados a su adopción.

## Trazabilidad

- **Épica:** `EP-01. Catálogo de animales`.
- **Funcionalidad:** `F-05. Consultar necesidades especiales o requisitos específicos de adopción`.

## Actor principal

- Persona interesada.

## Precondiciones

- La persona está consultando la ficha de un animal disponible.
- El personal autorizado ha registrado las necesidades especiales y los requisitos específicos conocidos.

## Flujo principal

1. El sistema recupera las necesidades especiales registradas para el animal.
2. El sistema recupera los requisitos específicos establecidos para su adopción.
3. El sistema presenta ambos tipos de información de forma diferenciada dentro de la ficha.
4. La persona consulta la información para valorar su adecuación antes de iniciar una solicitud.

## Información contemplada

- **Necesidades especiales:** cuidados, atención o condiciones particulares que requiere el animal.
- **Requisitos específicos de adopción:** condiciones que debe cumplir el entorno o la persona adoptante para ese animal concreto.

Esta historia muestra la información registrada, pero no define nuevos requisitos ni decide si una candidatura los cumple.

## Flujos alternativos y excepciones

- Si no hay necesidades especiales registradas, el sistema lo indica sin afirmar que no existan necesidades aún desconocidas.
- Si no hay requisitos específicos registrados, el sistema lo indica y no inventa condiciones.
- Si esta información no puede recuperarse, el sistema advierte de que la sección no está disponible en lugar de mostrarla como vacía.

## Reglas de negocio

- `RN-01-15`: la información mostrada corresponde exclusivamente al animal consultado.
- `RN-01-16`: las necesidades especiales se distinguen de los requisitos específicos de adopción.
- `RN-01-17`: un dato no registrado no se presenta como confirmado.
- `RN-01-18`: consultar esta información no determina automáticamente la idoneidad de la persona interesada.

## Criterios de aceptación

### CA-01. Animal con necesidades especiales

**Dado** que un animal tiene necesidades especiales registradas  
**cuando** la persona consulta su ficha  
**entonces** el sistema muestra todas las necesidades publicadas para ese animal  
**y** las identifica como necesidades especiales.

### CA-02. Animal con requisitos específicos

**Dado** que un animal tiene requisitos específicos de adopción registrados  
**cuando** la persona consulta su ficha  
**entonces** el sistema muestra todos los requisitos publicados para ese animal  
**y** los diferencia de sus necesidades especiales.

### CA-03. Sin información especial registrada

**Dado** que no hay necesidades especiales o requisitos específicos registrados  
**cuando** la persona consulta la sección correspondiente  
**entonces** el sistema informa de que no hay información registrada  
**y** no inventa necesidades ni requisitos.

### CA-04. Información temporalmente no disponible

**Dado** que la información especial no puede recuperarse  
**cuando** la persona consulta la ficha  
**entonces** el sistema indica que esa sección no está disponible  
**y** no presenta el fallo como ausencia confirmada de necesidades o requisitos.

### CA-05. Consulta sin evaluación automática

**Dado** que la persona consulta los requisitos específicos  
**cuando** revisa la información del animal  
**entonces** el sistema no afirma que la persona sea apta o no apta basándose únicamente en esta consulta.

## Dependencias

- Forma parte de la ficha definida en `HU-01-03`.
- La información es mantenida mediante `F-25. Modificar la información de un animal`.
- La evaluación del cumplimiento de requisitos pertenece a `EP-03. Gestión de candidaturas`.

## Fuera del alcance

- Crear o modificar necesidades y requisitos, perteneciente a `EP-05`.
- Evaluar a la persona interesada o resolver una candidatura, perteneciente a `EP-03`.
- Crear una solicitud de adopción, perteneciente a `EP-02`.
