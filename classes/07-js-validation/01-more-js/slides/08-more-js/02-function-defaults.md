# Function Defaults

- We already talked about "defaulting" a value
  - `name ||= "Jorts";` 
  - same as `name = name || "Jorts"`
- Functions have options to default arguments

```js
function greet( message = "Hello", target = "World" ) {
  console.log(`${message} ${target}`);
}

greet(); // Hello World
greet("Hi"); // Hi World
greet("Hi", "Class"); // Hi Class
greet(undefined, "Class"); // Hello Class
greet(null, "Class"); // null Class (!)
```
Only defaults on `undefined`, not nullish or falsy
