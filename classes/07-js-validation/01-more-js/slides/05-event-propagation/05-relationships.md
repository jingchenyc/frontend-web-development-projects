# Can further select elements based on relationship

- Each element has `.querySelector()`
  - Will search descendants
- Each element has `.closest()`
  - Will search ancestors
- `~` and `+` selectors can search siblings

```js
const cardsEl = document.querySelector('.cards'); // ancestor
cardsEl.addEventListener('click', (e) => { 
  if( e.target.classList.contains('card__link') ) { 
    // e.target is the button element
    const cardEl = e.target.closest('.card');
    cardEl.classList.toggle('card--active');
  }
 }
});
```
