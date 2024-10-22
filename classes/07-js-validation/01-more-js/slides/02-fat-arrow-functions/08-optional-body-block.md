# Fat Arrow function with optional body block
- If body is exactly 1 statement
  - AND you return that value
  - `{}` for body become optional

```js
const greet = (message, target) => { 
  return `${message}, ${target}`;
};

const sayHello = (message, target) => `${message, ${target}`;
```
