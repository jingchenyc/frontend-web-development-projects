// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-menu-visible');
        const expanded = navMenu.classList.contains('nav-menu-visible');
        navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close mobile menu when focus moves away
    navMenu.addEventListener('focusout', function(event) {
        if (!navMenu.contains(event.relatedTarget)) {
            navMenu.classList.remove('nav-menu-visible');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Modal functionality
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    const modal = document.querySelector('#subscribe-modal');
    const cancelButton = document.querySelector('#cancel-button');
    const emailInput = document.querySelector('#email');
    const confirmEmailInput = document.querySelector('#confirm-email');
    const form = document.querySelector('#subscribe-modal form');

    subscribeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.showModal();
        });
    });

    cancelButton.addEventListener('click', function() {
        modal.close();
    });

    // Close modal on Esc key
    modal.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.close();
        }
    });

    // Form validation
    function validateEmail() {
        const emailInput = document.querySelector('#email');
        const confirmEmailInput = document.querySelector('#confirm-email');
        const emailError = document.querySelector('#email-error');
        const confirmEmailError = document.querySelector('#confirm-email-error');

        const emailValue = emailInput.value;
        const confirmEmailValue = confirmEmailInput.value;

        let valid = true;

        if (emailValue.trim() === '') {
            emailError.innerText = 'This field is required';
            valid = false;
        } else if (!emailValue.includes('@')) {
            emailError.innerText = 'This field must be a valid email address including a "@"';
            valid = false;
        } else {
            emailError.innerText = '';
        }

        if (confirmEmailValue !== emailValue) {
            confirmEmailError.innerText = 'This field must match the provided email address';
            valid = false;
        } else {
            confirmEmailError.innerText = '';
        }

        return valid;
    }

    emailInput.addEventListener('input', validateEmail);
    confirmEmailInput.addEventListener('input', validateEmail);

    form.addEventListener('submit', function (event) {
        if (!validateEmail()) {
            event.preventDefault();
        }
    });
});