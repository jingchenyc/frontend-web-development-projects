# Why did our card use a button?

- This is semantically correct
  - Button for controls
  - Link for navigation
- What if we are styling HTML someone else made?
  - Okay, use card with link

```html
<div class="cards">
  <div class="card">
    <h2 class="card__title">Title</h2>
    <img class="card__pic" src="http://placekitten.com/100/" alt="real text here">
    <p class="card__text">Dolor sunt soluta suscipit praesentium perferendis. Expedita pariatur</p>
    <a class="card__link" href="/fake">Activate</a>
  </div>
  <!-- more cards -->
</div>
```
