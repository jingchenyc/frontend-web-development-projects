# Many matching selectors

- `.querySelector()` returns first matching node
- `.querySelectorAll()` returns ALL matching nodes

```js
const nodes = document.querySelectorAll('.card');
```

- Returns a NodeList
  - Any **array-like** collection of Nodes
  - indexed like an array
  - Lacks many array methods
  - If you need an actual array


```js
const someArray = Array.from(arrayLike);
```

