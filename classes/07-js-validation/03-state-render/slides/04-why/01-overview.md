# Why use the state-render cycle?

Pros: 
- HTML in one place
  - Class names changes in HTML (one place)
- Scales better as app gets more complex

Cons:
- Many elements are replaced
  - Often without change
  - Can cause problems with form fields
- Must use event delegation to listen for events
