# People set style properties

I said **three** times AND called out:
- Do not set `style` attributes/properties
- Requirement said: 
- **Don't use JS to set or change the style attribute**
```html
<div style="display: none;">THIS IS BAD</div>
```
```js
someEl.style = "display: none;"; // SO IS THIS
```

Examples WILL do it!  It does "work"!
- But makes editing harder for humans!
    - Where is CSS? In the CSS and js files!

