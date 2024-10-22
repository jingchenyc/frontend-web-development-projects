# `keydown` event

- Fires on keypress
- BEFORE key is added to field
- Fires even if key is modifier (Shift, Ctrl, etc)
- `event.preventDefault()` - key is not added to field
- Event object has info about the key pressed
  - `.key` - which key is pressed
  - `.shiftKey`, `.altKey`, `.ctrlKey`, `.metaKey`
  - `.isComposing` - translation inputs (Ex: Pinyin)
  - Event object, not `event.target`

