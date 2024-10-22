# Array Spread operator

- Used to copy arrays
- Used to nest array contents
- Could use array methods
  - This does not mutate array
  - That becomes important for React

```js
const cats = [
  "Jorts", 
  "Jean", 
  "Nyancat",
];

console.log( [ "Maru", cats ] ); // Nested array :(
console.log( [ "Maru", ...cats ] );// New, "flat" array
```
