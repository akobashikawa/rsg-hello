# Hello Callback Refs

Print Hello.

Use callback refs to get input value.

---

`Component` class has `refs` to reference html elements, and also another `Component`.

```javascript
const greeting = this.greeting.value;
```

```html
<input type="text" ref={input => this.greeting = input} />
```

---

La clase `Component` tiene `refs` para referenciar elementos html, y también otros `Component`.

```javascript
const greeting = this.greeting.value;
```

```html
<input type="text" ref={input => this.greeting = input} />
```