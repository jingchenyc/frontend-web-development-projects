# `keydown` example

```js
// prevent "-" from being entered

inputEl.addEventListener('keydown', (event) => { 
  if( event.key === "-" ) { 
    event.preventDefault();
  }
});
```
- Cut and Paste/autofill can bypass
- Do not assume too much
  - Users enter data in many ways
