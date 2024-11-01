"use strict";
(function() {
    const form = document.querySelector("#registration-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        validateForm();
    });

    form.name.addEventListener("input", () => validateName());
    form.email.addEventListener("input", () => clearError("email-error"));
    form["confirm-email"].addEventListener("input", () => clearError("confirm-email-error"));

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isConfirmEmailValid = validateConfirmEmail();

        if (isNameValid && isEmailValid && isConfirmEmailValid) {
            form.submit();
        }
    }

    function validateName() {
        const nameField = form.name;
        if (!nameField.value.trim()) {
            showError("name-error", "Name is required");
            return false;
        } else {
            clearError("name-error");
            return true;
        }
    }

    function validateEmail() {
        const emailField = form.email;
        if (!emailField.value.trim()) {
            showError("email-error", "Email is required");
            return false;
        } else {
            clearError("email-error");
            return true;
        }
    }

    function validateConfirmEmail() {
        const emailField = form.email;
        const confirmEmailField = form["confirm-email"];
        if (confirmEmailField.value.trim() !== emailField.value.trim()) {
            showError("confirm-email-error", "Confirm Email must match");
            return false;
        } else {
            clearError("confirm-email-error");
            return true;
        }
    }

    function showError(id, message) {
        const errorElement = document.querySelector(`#${id}`);
        errorElement.innerText = message;
    }

    function clearError(id) {
        const errorElement = document.querySelector(`#${id}`);
        errorElement.innerText = "";
    }
})();
