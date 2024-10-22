# Events

- Validating Forms with JS
- Have code that reacts to **events**

```js
const nameEl = document.querySelector('.register__name');

nameEl.addEventListener('input', () => { //fat arrow function
 console.log("typing happened");
});
```
