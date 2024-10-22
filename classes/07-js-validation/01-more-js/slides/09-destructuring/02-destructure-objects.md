# Destructuring Objects

- Destructure objects using `{}`

```js
const cat = { 
  name: "Jorts",
  age: 3,
  color: "Orange Tabby",
};

const { name, age } = cat; // Declares and assigns

console.log( cat ); // same as above
console.log( name ); // "Jorts"
console.log( age ); // 3
// there is no "color" variable
```
