# The link will navigate!

- Leaving the page resets our page state
  - JS has to start over on reload
- If link doesn't navigate
  - Should not BE a link (semantically)
  - Can style a button as a link appearance
- But if we MUST use a link:
  - Could use `href="#"`
    - But this has complications!
    - Alters url
    - Considered an in-page scroll-to-element

