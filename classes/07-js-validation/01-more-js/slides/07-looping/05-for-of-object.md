# for...of with objects

```js
const cat = { 
  name: 'Jorts',
  age: 3,
  color: "orange tabby",
};

for( const key of Object.keys(cat) ) { 
  console.log( `${key}: ${ cat[key] }` );
}
```
