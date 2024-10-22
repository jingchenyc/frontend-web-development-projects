# `focus` and `blur` events

- Fires when element gains/loses focus
- Does NOT propagate/"bubble"
  - This can complicate things later! (only a little)
- Used to validate a field after user LEAVES the field
  - Good UX because only complains after done
  - Poor UX because fixes require they go back
- Can get `blur` AND `submit` if they click submit
