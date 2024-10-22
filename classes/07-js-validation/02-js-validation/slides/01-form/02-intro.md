# Working with Forms with JS

- JS offers a lot of options base HTML/CSS does not
- Let's create an example form

```html
<form class="register" action="/register" method="POST">
  <label class="register__label">
    <span class="register__name-label">Name</span>
    <input name="name" class="register__name">
  </label>
  <label class="register__label">
    <span class="register__email-label">Email</span>
    <input name="email" type="email" class="register__email">
  </label>
  <label class="register__label">
    <span class="register__confirm-label">Confirm Email</span>
    <input name="confirm" type="email" class="register__confirm">
  </label>
  <button type="submit" class="register__submit">Register</button>
</form>
```


