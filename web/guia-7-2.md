# Pruebas automatizadas con GitHub Actions

## 1. Incorporar el workflow

Copia `.github/workflows/pruebas-e2e.yml` **en la raíz del repositorio**
(no dentro de `web`). Este archivo nuevo es lo único que necesitas agregar
si ya existen `web/tests/test_contacto.py` y `web/requirements-test.txt`.

Comprueba que `web/contacto.html` incluye `#comments` y el patrón de teléfono
corregido. El workflow usa la versión de los archivos presente en la rama o PR.

## 2. Publicar una rama de demostración

Desde la raíz del repositorio:

```bash
git switch pruebas-e2e
git add .github/workflows/pruebas-e2e.yml
git commit -m "ci: automatizar pruebas E2E del formulario"
git push origin pruebas-e2e
```

En GitHub abre **Actions** y selecciona «Pruebas E2E - Huellas».
El workflow se ejecutará al hacer push a `pruebas-e2e` o `main`, abrir/actualizar
un pull request contra `main`, o al lanzarlo manualmente (Run workflow).

## 3. Qué realiza GitHub Actions

1. Descarga el código del repositorio.
2. Instala Python 3.12, pytest, Playwright y Chromium.
3. Inicia un servidor local de la web en el puerto 8000.
4. Espera a que responda `contacto.html`.
5. Ejecuta las siete pruebas E2E en Chromium.
6. Si hay errores, conserva las trazas como artefacto cuando existan.

No requiere base de datos ni API: la web es estática y el formulario no envía datos.

## 4. Demostración en vivo: introducir una regresión

Trabaja en una **rama distinta de `main`**. Antes de grabar, verifica que
las siete pruebas son satisfactorias.

1. En `web/contacto.html` cambia **solo** `type="email"` por `type="text"`.
2. Haz commit y push a tu rama (o a la rama del pull request).
3. Abre **Actions** o los checks del pull request. El test
   `test_correo_invalido_se_rechaza` debería fallar.
4. Consulta el registro del job `Probar formulario con Playwright` y localiza
   `FAILED`.
5. Revierte el cambio, haz commit y push de nuevo.
6. Comprueba que ahora el workflow es satisfactorio.

**Nota:** GitHub muestra el estado de cada ejecución. Un check fallido no impide
por sí solo integrar un pull request, a menos que se configure su obligatoriedad
en las reglas de protección de la rama.

## 5. Comprobaciones y solución de problemas

- `File not found`: verifica que el workflow está en `.github/workflows/`.
- Error de instalación: revisa los pasos «Preparar Python» e «Instalar pytest y Playwright».
- Servidor no disponible: revisa la fase «Iniciar servidor y comprobar disponibilidad».
- Prueba incorrecta: abre el log y compara los resultados esperados con el
  código que se ha publicado en esa rama.
- Para descargar una traza, abre la ejecución y busca `trazas-playwright`
  en la sección de artefactos (solo si existieron archivos).

## 6. Preguntas para el alumnado

- ¿Qué diferencia existe entre ejecutar pytest localmente y hacerlo mediante CI?
- ¿Por qué el workflow debe arrancar un servidor HTTP?
- ¿Qué información aporta un check fallido en una pull request?
- ¿Qué pasaría si una prueba falla de manera intermitente?
