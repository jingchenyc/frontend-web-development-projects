# What to use as href?

- Avoid problem: **only use links for navigation**
  - Use buttons for controls
  - Better accessibility!
- When existing href is there
  - Such as Progressive Enhancement
    - Making a page work without/with JS
  - Just leave existing href
  - It is a valid url to visit
- If you MUST use link AND there is no existing href
  - Use `#` to match all the sites that break a11y
  - But `e.preventDefault()` to stop navigation
