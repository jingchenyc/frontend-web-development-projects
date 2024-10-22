# Extend/Merge Objects using Spread operator

- Objects created with repeated keys
  - Use "last" value for that key

```js
const cat = { 
  name: "Jorts", 
  age: 3,
  name: "Jean",
};

console.log(cat.name); // Jean
```
- This allows you to extend/merge objects

```js
const feline = { 
  sleeping: true, // a "default", can be overwritten by cat
  ...cat, 
  hungry: true, // will overwrite value in cat
};
```

