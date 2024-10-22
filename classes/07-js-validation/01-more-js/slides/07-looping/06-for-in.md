# for...in works with objects

- Easy to confuse `for...in` with `for...of`
- Will iterate over inherited properties
  - But most objects don't inherit
- Much old advice: problems that don't happen
- `for...in` is rare
  - `for...of` Object.keys() more common

```js
const cat = { 
  name: 'Jorts',
  age: 3,
  color: "orange tabby",
};

for( const key in cat ) {
  console.log( `${key}: ${ cat[key] }` );
}
```
