# Rest Operator

- Uses `...`
  - but is not spread operator
- Collects "remaining" elements into array
  - "the rest" 
- Used for function arguments
- Used when spreading arrays
- Not used in this course
  - Good to recognize as different than spread

```js
const cats = [ "Jorts", "Jean", "Maru" ];
const [ first, ...otherCats ] = cats;

console.log( otherCats ); // [ "Jean", "Maru" ]
```
