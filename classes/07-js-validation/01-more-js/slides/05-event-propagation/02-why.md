# Event Propagation has benefits

- If you have multiple targets
  - Ex: Many buttons for dropdown menus
- Can add one listener
  - On a common ancestor element
- When event triggers `event.target` is actual button
  - ...or some other descendant element
  - You are getting ALL the clicks
  - Want to filter out targets you don't care about
  - Check for a class identifying the category
