# Differences when using state-render

- We replace a chunk of HTML
  - In extreme cases, entire `<body>` contents
- Write HTML with or without classes
  - Instead of `.classList.add/remove/toggle`
- Attach event listener to ancestor
  - Possibly listen for multiple events
  - Make sure event is on correct element!


