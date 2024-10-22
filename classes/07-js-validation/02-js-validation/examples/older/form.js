"use strict";
(function() {

  const formEl = document.querySelector('.register');
  const emailGroupEl = document.querySelector('.register-email');
  const confirmGroupEl = document.querySelector('.register-confirm');
  const emailInputEl = document.querySelector('.register-email__input');
  const confirmInputEl = document.querySelector('.register-confirm__input');

  formEl.addEventListener('submit', (event) => {
    let isInvalid = false
    emailGroupEl.classList.remove('register-email--invalid');
    confirmGroupEl.classList.remove('register-confirm--invalid');

    if( !emailInputEl.value ) {
      emailGroupEl.classList.add('register-email--invalid');
      isInvalid = true;
    }

    if( confirmInputEl.value !== emailInputEl.value ) {
      confirmGroupEl.classList.add('register-confirm--invalid');
      isInvalid = true;
    }

    if( isInvalid ) {
      event.preventDefault();
    }

  });
})();
