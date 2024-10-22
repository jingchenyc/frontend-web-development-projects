# C-Style For Loop 

Rarely a good choice!
- But very common despite better options

```js
const cats = ['Jorts', 'Jean', 'Nyancat'];

for ( let i = 0; i < cats.length; i++ ) { 
  console.log( cats[i] );
}
```

- A lot going on
- Creates an **index variable** (`i`)
  - But we don't care about `i`
  - We just want the element of the array
