# `.innerText`

- Change the text content of a DOM Node

```html
<div class="demo"></div>
```

```js
const demoEl = document.querySelector('.demo');

demoEl.innerText = "Hello World";
```

- Set to empty string to remove

```js
demoEl.innerText = "";
```

