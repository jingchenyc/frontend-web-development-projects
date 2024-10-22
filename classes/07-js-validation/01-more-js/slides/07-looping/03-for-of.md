# For...of loop

A `for...of` loop 
- Loops over elements of **iterable objects**
  - arrays, strings, NodeLists, etc 
  - Included arrays created on the spot
    - using `Object.keys()`, etc
- No index variable

```js
const cats = ['Jorts', 'Jean', 'Nyancat'];

for ( const cat of cats ) { 
  console.log(cat);
}
```

