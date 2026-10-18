const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const year = document.querySelector("#current-year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const contactForm = document.querySelector("#contact-form");

if (contactForm instanceof HTMLFormElement) {
  const isValidatableControl = (control) =>
    control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement;

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

  const setFieldState = (fieldName) => {
    const field = fields[fieldName];
    const error = document.querySelector(`#${fieldName}-error`);

    if (!isValidatableControl(field.input) || !error) {
      return true;
    }

    const isValid = field.input.checkValidity();
    field.input.setAttribute("aria-invalid", String(!isValid));
    error.textContent = isValid ? "" : field.message;
    return isValid;
  };

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
    event.preventDefault();

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

    const status = document.querySelector("#form-status");

    if (status) {
      status.textContent =
        "Datos validados correctamente. Al ser una maqueta, no se ha enviado información.";
      status.classList.add("is-visible");
    }

    contactForm.reset();
    Object.keys(fields).forEach((fieldName) => {
      const input = fields[fieldName].input;
      if (isValidatableControl(input)) {
        input.removeAttribute("aria-invalid");
      }
    });
  });
}
