# Huellas - Adopción de Mascotas: tutorial de pruebas automatizadas con Python y Playwright

Este tutorial utiliza la web existente de adopción de mascotas, **Huellas**, para aprender a ejecutar pruebas automáticas sobre un formulario real.

## Objetivos

Al terminar podrás:

1. Identificar reglas verificables en un formulario.
2. Automatizar interacciones de usuario con **Python**, **pytest** y **Playwright**.
3. Ejecutar pruebas satisfactorias y fallidas.
4. Introducir temporalmente una regresión, detectar el fallo y corregirla.
5. Relacionar los resultados con la revisión de cambios antes de integrarlos.

## 1. ¿Qué vamos a probar?

Abre `contacto.html` y observa que todos los campos son obligatorios. El JavaScript de `scripts/script.js` usa `checkValidity()` del navegador para validar los campos y mostrar errores.

| Regla | Resultado esperado |
| --- | --- |
| Nombre vacío o de un carácter | Se muestra el error del nombre. |
| Teléfono demasiado corto | Se muestra el error de teléfono. |
| Correo sin formato válido | Se muestra el error de correo. |
| Comentario de menos de 10 caracteres | Se muestra el error de comentarios. |
| Consentimiento sin marcar | Se solicita aceptar el consentimiento. |
| Todos los campos correctos | Se muestra la confirmación (sin envío real). |

Estas son **pruebas funcionales end-to-end (E2E)**: el programa controla un navegador y verifica el comportamiento observable de la web. **No son pruebas unitarias** de JavaScript.

## 2. Requisitos previos

- Python 3.10 o superior.
- Git (recomendado) y una copia local del repositorio.
- Conexión a Internet la primera vez para instalar dependencias y el navegador de Playwright.

Clona el repositorio (si aún no lo tienes):

```bash
git clone https://github.com/jarturomora/demo-adopcion-mascotas.git
cd demo-adopcion-mascotas/web
```

Los comandos siguientes se ejecutan **desde `web/`**. Si ya tienes el repositorio clonado, actualiza tu rama de trabajo antes de comenzar.

## 3. Preparar el entorno Python

Crea el entorno virtual desde **Git Bash** en Windows. Sitúate en el directorio `web/` y llámalo `huellas-env`:

```bash
python -m venv huellas-env
```

Actívalo desde Git Bash:

```bash
source huellas-env/Scripts/activate
```

Cuando esté activo, `(huellas-env)` aparecerá al principio de la línea de comandos. Ejecuta con el entorno activo todos los comandos Python de los pasos siguientes.

Instala las dependencias y el navegador Chromium controlado por Playwright:

```bash
python -m pip install -r requirements-test.txt
python -m playwright install chromium
```

Para salir del entorno virtual cuando termines:

```bash
deactivate
```

## 4. Iniciar el servidor local

Abre **una primera terminal**, sitúate en `web/` y ejecuta:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Mantén esta terminal abierta. Comprueba que puedes visitar:

`http://127.0.0.1:8000/contacto.html`

**¿Por qué un servidor?** Playwright interactúa con la aplicación desde un navegador. Aquí basta un servidor HTTP de archivos estáticos; no requiere base de datos, API ni backend.

## 5. Ejecutar las pruebas

Abre **una segunda terminal**, también dentro de `web/`, activa el mismo entorno virtual y ejecuta:

```bash
python -m pytest tests/test_contacto.py -v
```

Se ejecutan siete pruebas independientes, cada una abre una página nueva. Si el código de la web no ha cambiado, se espera que todas terminen con el estado `PASSED`.

Para **ver el navegador** durante la ejecución:

```bash
python -m pytest tests/test_contacto.py -v --headed --slowmo 350
```

Para ejecutar **solo el caso del correo inválido**:

```bash
python -m pytest tests/test_contacto.py -v -k correo_invalido --headed
```

En cada prueba distinguimos:

- **Arrange:** abrir la página e introducir los datos.
- **Act:** pulsar el botón «Enviar datos».
- **Assert:** comprobar el mensaje de error o de confirmación.

Por ejemplo, la prueba `test_correo_invalido_se_rechaza` rellena el formulario con datos correctos salvo el correo y comprueba que aparece `Introduce un correo electrónico válido.`.

## 6. Provocar una regresión controlada

**Haz este experimento solamente en una rama de práctica. No subas el defecto a `main`.**

1. Ejecuta la prueba del correo inválido y comprueba que pasa.
2. Abre `contacto.html` y localiza el campo `<input id="email" ... type="email" ...>`.
3. Cambia temporalmente **solo** `type="email"` por `type="text"`.
4. Guarda el fichero y vuelve a ejecutar:

   ```bash
   python -m pytest tests/test_contacto.py -v -k correo_invalido --headed
   ```

5. Observa el resultado `FAILED`. Con ese cambio el navegador deja de aplicar la validación de formato de correo y la prueba detecta el comportamiento incorrecto.
6. Restaura `type="email"` y ejecuta otra vez la prueba: debe volver a pasar.

Este experimento ilustra una **regresión**: un cambio aparentemente pequeño rompe una regla de negocio que antes se cumplía. La prueba ya existente nos avisa.

> Si modificas otros campos, el resultado puede variar. Para reproducir exactamente la demostración, modifica únicamente el atributo indicado y luego restáuralo.

## 7. Leer e interpretar las pruebas

El código se encuentra en [`tests/test_contacto.py`](tests/test_contacto.py).

- `page.goto(...)` abre la web.
- `page.locator("#email").fill(...)` introduce un valor en el campo.
- `page.get_by_role("button", name="Enviar datos").click()` reproduce el clic.
- `expect(...).to_have_text(...)` espera y verifica un mensaje visible en el DOM.

Playwright permite esperar automáticamente ciertos cambios de la página, reduciendo comprobaciones manuales y esperas fijas.

## 8. Preguntas para reflexionar

1. ¿Por qué la prueba de correo inválido no necesita un servicio de correo real?
2. ¿Qué diferencia existe entre comprobar una función aislada y controlar un navegador?
3. ¿Por qué tiene sentido repetir estas pruebas después de cada cambio?
4. ¿Qué limitación tiene validar el formulario sin comprobar que el servidor recibe y guarda la información?

## 9. Solución de problemas

- **`Connection refused` o `ERR_CONNECTION_REFUSED`:** verifica que el servidor del paso 4 sigue ejecutándose y que abriste el terminal en `web/`.
- **`No module named pytest` o Playwright:** vuelve a activar `huellas-env` con `source huellas-env/Scripts/activate` e instala `requirements-test.txt`.
- **No se encuentra el ejecutable de Chromium:** ejecuta `python -m playwright install chromium`.
- **El puerto 8000 está ocupado:** cierra el servidor anterior o usa otro puerto y define `HUELLAS_BASE_URL` con la URL correspondiente antes de ejecutar pytest.
- **Git Bash no activa el entorno:** comprueba que estás en `web/` y que existe `huellas-env/Scripts/activate`. También puedes ejecutar directamente `./huellas-env/Scripts/python.exe -m pytest tests/test_contacto.py -v`.
