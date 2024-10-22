# An example of removing/adding elements

```js
const contentEl = document.querySelector('.content');
let showExample = false;
render();

contentEl.addEventListener('click', (e) => {
  if(!e.target.classList.contains('toggle')) {
    return;
  }
  showExample = !showExample;
  render();
});

function render() {
  contentEl.innerHTML = `
    ${ showExample ? "<div>Some Text</div>" : "" }
    <button 
      class="toggle" 
      type="button"
    >${showExample ? "Hide" : "Show"}</button>
  `;
}
```
