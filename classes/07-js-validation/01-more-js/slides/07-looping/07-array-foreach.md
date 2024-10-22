# Array forEach

Arrays have a `.forEach()` method
- Array-likes may NOT
- Pass a callback
- Callback is called for each element
  - Callback can ALSO get an index variable

```js
const cats = ['Jorts', 'Jean', 'Nyancat'];

cats.forEach( (cat) => { 
  console.log(cat);
});

cats.forEach( (cat, index) => { 
  console.log(`element ${index} is ${cat}`);
});
```
