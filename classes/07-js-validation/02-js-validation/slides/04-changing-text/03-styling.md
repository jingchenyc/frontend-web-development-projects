# Styling elements that use innerText

- Often you want errors to have styling
  - borders, padding, etc
- Don't want this visible when text is empty

```css
.demo { 
  padding: 1rem;  
  background-color: #FF000033; /* red w/transparency */
}

.demo:empty {  /* Only applies when element is empty */
  display: none;
}
```
