# `submit` event
- Fires on `<form>` when submitted
  - On `<form>` element, not on button!
  - Even though submit likely from a button
- `event.preventDefault()` stops submit

```js
const formEl = document.querySelector('.register');
formEl.addEventListener('submit', (event) => { 
  // event.target is the form, not the fields
  const isFormInvalid = true; // Put code to decide here
  if( isFormInvalid ) { 
    // Put code to tell user what to fix here
    event.preventDefault();
  }
});
```

