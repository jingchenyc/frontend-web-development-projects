# The State-Render Cycle

- We react to events
- We read form fields (as needed)
- Use `.classList` to change classes on elements
- Use `.innerText`/`.innerHTML` to change text/HTML

This works, but:
- HTML/text/classes scattered among HTML & JS
- Grows more complex as app grows
- Too complex at large sizes

Addressed by **state-render cycle**
