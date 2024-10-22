# `.innerHTML` allows more than text

```js
const demoEl = document.querySelector('.demo');

demoEl.innerHTML = `<p>This is <b>Awesome!</b></p>`;
```

- As with `innerText`, set to "" to remove
- An element with child elements is not `:empty`
  - Even if those elements have no text



