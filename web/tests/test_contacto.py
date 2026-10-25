"""Pruebas E2E del formulario real de Huellas con Playwright y pytest."""
import os
from playwright.sync_api import Page, expect

BASE_URL = os.getenv("HUELLAS_BASE_URL", "http://127.0.0.1:8000")


def abrir_formulario(page: Page) -> None:
    page.goto(f"{BASE_URL}/contacto.html")


def rellenar_formulario(page: Page) -> None:
    page.locator("#name").fill("Ana García")
    page.locator("#phone").fill("+34 612345678")
    page.locator("#email").fill("ana@example.com")
    page.locator("#comments").fill("Quiero conocer el proceso de adopción.")
    page.locator("#consent").check()


def enviar(page: Page) -> None:
    page.get_by_role("button", name="Enviar datos").click()


def test_formulario_vacio_muestra_error_nombre(page: Page) -> None:
    abrir_formulario(page)
    enviar(page)
    expect(page.locator("#name-error")).to_have_text(
        "Introduce un nombre de al menos dos caracteres."
    )


def test_nombre_de_un_caracter_se_rechaza(page: Page) -> None:
    abrir_formulario(page)
    rellenar_formulario(page)
    page.locator("#name").fill("A")
    enviar(page)
    expect(page.locator("#name-error")).to_contain_text("al menos dos caracteres")


def test_correo_invalido_se_rechaza(page: Page) -> None:
    abrir_formulario(page)
    rellenar_formulario(page)
    page.locator("#email").fill("correo-incorrecto")
    enviar(page)
    expect(page.locator("#email-error")).to_have_text(
        "Introduce un correo electrónico válido."
    )
    expect(page.locator("#form-status")).to_be_empty()


def test_telefono_corto_se_rechaza(page: Page) -> None:
    abrir_formulario(page)
    rellenar_formulario(page)
    page.locator("#phone").fill("123")
    enviar(page)
    expect(page.locator("#phone-error")).to_contain_text("teléfono válido")


def test_comentario_corto_se_rechaza(page: Page) -> None:
    abrir_formulario(page)
    rellenar_formulario(page)
    page.locator("#comments").fill("Hola")
    enviar(page)
    expect(page.locator("#comments-error")).to_contain_text("al menos diez caracteres")


def test_sin_consentimiento_se_rechaza(page: Page) -> None:
    abrir_formulario(page)
    rellenar_formulario(page)
    page.locator("#consent").uncheck()
    enviar(page)
    expect(page.locator("#consent-error")).to_have_text(
        "Debes aceptar el uso de los datos para continuar."
    )


def test_formulario_valido_muestra_confirmacion(page: Page) -> None:
    abrir_formulario(page)
    rellenar_formulario(page)
    enviar(page)
    expect(page.locator("#form-status")).to_have_text(
        "Datos validados correctamente. Al ser una maqueta, no se ha enviado información."
    )
    expect(page.locator("#name")).to_have_value("")
