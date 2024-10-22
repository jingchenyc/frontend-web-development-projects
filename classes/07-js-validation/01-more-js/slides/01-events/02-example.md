# Events Example

```html
<button class="toggle-active">Toggle</button>
<div class="example">Example</div>
```
```css
.example { 
  display: none;
}

.example.shown { 
  display: block;
}
```

```js
const buttonEl = document.querySelector('.toggle-active');
const exampleEl = document.querySelector('.example');

buttonEl.addEventListener('click', function() { 
  exampleEl.classList.toggle('shown');
});
```
  
