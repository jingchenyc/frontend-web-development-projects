# Fat Arrow Function with optional parens
- If exactly 1 parameter
  - `()` becomes optional

```js
const greet = (target) => { 
  return `Hello, ${target}`;
};

const sayHello = target => {    // () optional w/1 param
  return `Hello, ${target}`;
};

const greetWorld = () => { // not 1 param, () required
  return `Hello World!`;
};
```

