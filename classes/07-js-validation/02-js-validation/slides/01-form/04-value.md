# Value
- Event object is passed to callback
- Event object `.target` is DOM Node of field
- `.value` property is current value of the field

```js
const nameEl = document.querySelector('.register__name');

nameEl.addEventListener('input', (event) => {
 // Can decide if value is okay as they type
 console.log(event.target.value);
});
```

