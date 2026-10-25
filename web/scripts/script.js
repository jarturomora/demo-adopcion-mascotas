// -----------------------------------------------------------------------------
// 1. Menú de navegación adaptable
// -----------------------------------------------------------------------------

// querySelector devuelve el primer elemento que coincide con el selector CSS.
// Si el elemento no existe en la página, devuelve null.
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");

// Esta comprobación permite reutilizar el script en páginas que podrían no tener menú.
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    // toggle añade la clase si no existe y la elimina si ya estaba presente.
    // Además, devuelve un booleano que indica el nuevo estado del menú.
    const isOpen = navigation.classList.toggle("is-open");

    // aria-expanded comunica a las tecnologías de asistencia si el menú está abierto.
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Se escucha el clic en el contenedor de navegación en vez de añadir un evento
  // independiente a cada enlace. Esta técnica se denomina delegación de eventos.
  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// -----------------------------------------------------------------------------
// 2. Año actual del pie de página
// -----------------------------------------------------------------------------

const year = document.querySelector("#current-year");

if (year) {
  // El año se calcula en el navegador para no tener que actualizar el HTML manualmente.
  year.textContent = String(new Date().getFullYear());
}

// -----------------------------------------------------------------------------
// 3. Validación del formulario de contacto
// -----------------------------------------------------------------------------

const contactForm = document.querySelector("#contact-form");

// instanceof comprueba que el elemento encontrado es realmente un formulario HTML.
if (contactForm instanceof HTMLFormElement) {
  // Los campos de esta maqueta pueden ser <input> o <textarea>. La función evita
  // repetir esta comprobación cada vez que se trabaja con un control del formulario.
  const isValidatableControl = (control) =>
    control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement;

  // Cada propiedad relaciona el nombre del campo con su elemento del DOM y con el
  // mensaje didáctico que se mostrará cuando no cumpla las restricciones del HTML.
  // "comments" solo existe en contacto_bk.html; el código admite que esté ausente.
  const fields = {
    name: {
      input: contactForm.elements.namedItem("name"),
      message: "Introduce un nombre de al menos dos caracteres.",
    },
    phone: {
      input: contactForm.elements.namedItem("phone"),
      message: "Introduce un teléfono válido de entre 7 y 20 caracteres.",
    },
    email: {
      input: contactForm.elements.namedItem("email"),
      message: "Introduce un correo electrónico válido.",
    },
    comments: {
      input: contactForm.elements.namedItem("comments"),
      message: "Introduce un comentario de al menos diez caracteres.",
    },
    consent: {
      input: contactForm.elements.namedItem("consent"),
      message: "Debes aceptar el uso de los datos para continuar.",
    },
  };

  // Valida un campo usando checkValidity(), que aplica atributos HTML como required,
  // minlength, pattern y type="email". También actualiza el estado visual y accesible.
  const setFieldState = (fieldName) => {
    const field = fields[fieldName];
    const error = document.querySelector(`#${fieldName}-error`);

    // Un campo opcional para esta página, o sin contenedor de error, se ignora.
    if (!isValidatableControl(field.input) || !error) {
      return true;
    }

    const isValid = field.input.checkValidity();
    field.input.setAttribute("aria-invalid", String(!isValid));
    error.textContent = isValid ? "" : field.message;
    return isValid;
  };

  // Se añaden los mismos eventos a todos los campos existentes:
  // - blur: valida cuando el usuario abandona el campo.
  // - input: vuelve a validar mientras escribe, pero solo si ya había un error.
  Object.entries(fields).forEach(([fieldName, field]) => {
    if (isValidatableControl(field.input)) {
      field.input.addEventListener("blur", () => setFieldState(fieldName));
      field.input.addEventListener("input", () => {
        if (field.input.getAttribute("aria-invalid") === "true") {
          setFieldState(fieldName);
        }
      });
    }
  });

  contactForm.addEventListener("submit", (event) => {
    // La maqueta no tiene servidor: se impide el envío real del formulario.
    event.preventDefault();

    // Se validan todos los campos y se localiza el primero incorrecto para llevar
    // allí el foco. Esto ayuda tanto a usuarios de teclado como de lector de pantalla.
    const validity = Object.keys(fields).map(setFieldState);
    const firstInvalidField = Object.values(fields).find(
      (field) => isValidatableControl(field.input) && !field.input.checkValidity(),
    );

    if (validity.includes(false)) {
      if (isValidatableControl(firstInvalidField?.input)) {
        firstInvalidField.input.focus();
      }
      return;
    }

    // Si todos los datos son válidos, se muestra una confirmación simulada.
    const status = document.querySelector("#form-status");

    if (status) {
      status.textContent =
        "Datos validados correctamente. Al ser una maqueta, no se ha enviado información.";
      status.classList.add("is-visible");
    }

    // reset limpia los valores. Después se retiran los atributos de error que el
    // script había añadido para que el formulario vuelva a su estado inicial.
    contactForm.reset();
    Object.keys(fields).forEach((fieldName) => {
      const input = fields[fieldName].input;
      if (isValidatableControl(input)) {
        input.removeAttribute("aria-invalid");
      }
    });
  });
}
