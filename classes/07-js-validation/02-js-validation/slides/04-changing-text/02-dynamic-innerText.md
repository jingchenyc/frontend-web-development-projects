# Using `innerText` dynamically

```html
<div class="demo"></div>
<button class="button__add">Add</button>
```

```js
let count = 0;

const buttonEl = document.querySelector('.button__add');
const demoEl = document.querySelector('.demo');
buttonEl.addEventListener('click', () => { 
  count += 1;
  demoEl.innerText = count;
});
```
