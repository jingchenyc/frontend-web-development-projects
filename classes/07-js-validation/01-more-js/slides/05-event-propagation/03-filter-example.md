# Propagation and Filtering Example

```html
<div class="cards">
  <div class="card">
    <h2 class="card__title">Title</h2>
    <img class="card__pic" src="http://placekitten.com/100/" alt="real text here">
    <p class="card__text">Dolor sunt soluta suscipit praesentium perferendis. Expedita pariatur</p>
    <button class="card__link" type="button">Activate</button>
  </div>
  <!-- more cards -->
</div>
```

```js
const cardsEl = document.querySelector('.cards'); // ancestor
cardsEl.addEventListener('click', (e) => { 
  if( e.target.classList.contains('card__link') ) { 
    console.log('an activate button was clicked');
  } else { 
    console.log('something else inside .cards was clicked');
  }
});

```


