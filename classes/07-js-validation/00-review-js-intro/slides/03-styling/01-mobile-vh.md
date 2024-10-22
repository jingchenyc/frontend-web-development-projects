# Using 100vh

Many assignments using `min-height: 100vh;`
- Not required, but fine
- BUT mobile can have issues with 100vh
    - I taught in same lesson I taught vh
- TL;DR: Mobile browsers can have virtual controls
    - Cover part of the viewport
    - Fixed by using 100dvh
    - Not all browsers support dvh
```css
min-height: 100vh; /* Fallback if no dvh */
min-height: 100dvh; /* Overrides if understood */
```
