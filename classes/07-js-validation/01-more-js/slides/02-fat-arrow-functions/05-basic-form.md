# Basic Fat Arrow function
- No `function`
- No name
- Parameters in `()`
- Then fat arrow `=>`
- Then function body ` { ... }`
- Not a block

```js
const greet = function ( message, target ) { 
  return `${message}, ${target}`;
};
```
vs
```js
const greet = (message, target) => { 
  return `${message}, ${target}`;
};
```
