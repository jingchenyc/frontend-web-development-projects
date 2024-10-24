"use strict";

(function() {
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');;

    // Toggle the 'open' class when the menu button is clicked or activated by keyboard
    function toggleMenu() {
        dropdownMenu.classList.toggle('open');
    }

    // Add event listener for mouse click
    menuButton.addEventListener('click', toggleMenu);
})();
