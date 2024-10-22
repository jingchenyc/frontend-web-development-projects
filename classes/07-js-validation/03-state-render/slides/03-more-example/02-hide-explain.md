# Important element things to notice

- The `<div>` is present when `showExample === true`
    - And not otherwise
    - Not hidden with CSS
- The `<button>` text changes
- All elements are replaced on each `render()`
    - Even if nothing changed
    - Can't listen for clicks on the button!
        - Different `<button>` each render!

