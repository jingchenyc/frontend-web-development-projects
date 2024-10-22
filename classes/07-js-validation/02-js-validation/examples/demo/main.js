"use strict";
(function() {

  const registrationFormEl = document.querySelector('.registration-form');
  registrationFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log( new FormData(e.target) );
  });

})();

