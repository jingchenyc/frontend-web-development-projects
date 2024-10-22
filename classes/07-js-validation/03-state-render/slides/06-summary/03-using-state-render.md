# Summary - Using State-Render Cycle

- Have state variables
- Listen on ancestor for events
  - Filter out irrelevant events
  - Change state as user indicates
  - Call a render-style function
- Render-style functions replace block(s) of HTML
  - Write HTML contents based on state
  - Write HTML class names based on state
  - Can fully replace rather than change
    - Usually but not always easier to replace
- DO NOT use unsanitized user data in output
