"use strict";

(function() {
    const menuButton = document.querySelector('.menu-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');;

    // Toggle the 'open' class when the menu button is clicked or activated by keyboard
    function toggleMenu() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        dropdownMenu.classList.toggle('open');
    }

    // Add event listener for mouse click
    menuButton.addEventListener('click', toggleMenu);

    // Handle keyboard navigation for Enter and Space keys
    menuButton.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();  // Prevent space bar default scrolling behavior
            toggleMenu();
        }
    });
})();
