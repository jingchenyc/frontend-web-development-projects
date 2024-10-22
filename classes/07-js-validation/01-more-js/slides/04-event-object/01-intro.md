# Learning about the event

When the handler (the callback) is called
- Passed an "event object"
- Our examples so far have ignored it
  - JS fine with passing values that aren't used 
  - Only one function of a given name in scope
    - Nothing based on arguments

```js
function test( a, b ) { 
  console.log(a, b);
}

test("one", "two"); // one two
test("one"); // one undefined
test("one", "two", "three"); // one two
```
