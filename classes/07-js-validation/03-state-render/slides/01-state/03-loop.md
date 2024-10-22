# Core State-Render loop

- App has variables for current state
- Events can change state values
  - State changes trigger **render**
- "render" **replaces** HTML chunk
  - New HTML is based on current state 
