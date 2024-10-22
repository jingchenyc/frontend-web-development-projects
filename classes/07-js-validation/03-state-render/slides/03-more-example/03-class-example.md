# An example with class names

```js
const contentEl = document.querySelector('.content');
let isActive = false;
render();

contentEl.addEventListener('click', (e) => {
  if(!e.target.classList.contains('activator')) {
    return;
  }
  isActive = !isActive;
  render();
});

function render() {
  contentEl.innerHTML = `
    <div class="example ${isActive ? 'active' : ''}" >
      Example
    </div>
    <button class="activator" type="button" >Toggle</button>
  `;
}
```

