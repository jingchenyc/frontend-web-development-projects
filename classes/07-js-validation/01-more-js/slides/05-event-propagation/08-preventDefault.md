# Prevent Default Action

- Navigation is the "default" for a link
- Form Submit is the "default" for a submit button
- Defaults happen AFTER other event handlers
  - Including on event ancestors
- event object has a `.preventDefault()` method

```js
whateverEl.addEventListener('click', (e) => { 
  // Any other code
  e.preventDefault(); 
});
```
