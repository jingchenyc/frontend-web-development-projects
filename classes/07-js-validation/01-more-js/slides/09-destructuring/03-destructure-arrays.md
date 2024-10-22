# Destructuring Arrays

- Destructure using `[]`
  - Less common than objects
  - Will be used in React

```js
const cats = [ 'Jorts', 'Jean', 'Nyancat' ];

const [ first, second ] = cats; // Declares and assigns

console.log( cats ); // same as above
console.log( first ); // "Jorts"
console.log( second ); // "Jean"
// There is no variable for "Nyancat"
```
