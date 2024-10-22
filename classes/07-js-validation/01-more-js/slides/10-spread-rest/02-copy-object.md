# Shallow Copy of Objects using Spread

- spread operator allows a **shallow copy** of object
  - Items that are collections remain references

```js
const cat = { 
  name: "Jorts",
  age: 3,
  toy: { 
    type: "pipe cleaner",
    condition: "poor",
  }
};

const copy = { ...cat };
copy.age = 4;
copy.toy.condition = "terrible";

console.log(cat); // age is 3, toy.condition is terrible
console.log(copy); // age is 4, toy.condition is terrible
```
