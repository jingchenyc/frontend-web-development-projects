# That doesn't seem so bad

- But we aren't done
- If exactly 1 parameter
  - `()` becomes optional
- If body is exactly 1 statement
  - AND you return that value
  - `{}` for body become optional

```js
const greet = (message, target) => { 
  return `${message}, ${target}`;
};

const sayHello = target => {    // () optional w/1 param
  return `${message}, ${target}`;
};




```
