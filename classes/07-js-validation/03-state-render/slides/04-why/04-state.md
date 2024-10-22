# Complex decisions MUST use state!

- If you are changing any values
  - AND need to make decision
  - Have variables that track current situation
    - This is **state**
- NEVER read text/classes of HTML to decide
  - This is a proven source of pain
- More than `.classList.add/remove/toggle`?
    - Should track current situation in variable
