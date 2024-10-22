# `input` event

- Typing on a text/textarea
- Changed selection on `<select>`
- Inconsistent on checkbox/radio
  - Use change event instead

```js
const nameEl = document.querySelector('.register__name');

nameEl.addEventListener('input', (event) => {
 // Can decide if value is okay as they type
 console.log(event.target.value);
});
```


