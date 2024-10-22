# Explaining the simple example

- Our state is `catNum`
- User actions can change state
    - +1 to catNum, wrap around to 0
- When state changes, we call `render()`
- `render()` replaces innerHTML of `.content`
