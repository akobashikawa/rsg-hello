# Hello Refs

Print Hello.

Use refs to get input value.

---

`Component` class has `refs` to reference html elements.

```javascript
const greeting = this.refs.greeting.value;
```

```html
<input type="text" ref="greeting" />
```

NOTICE: String refs are deprecated; use callback refs instead.

---

La clase `Component` tiene `refs` para referenciar elementos html.

```javascript
const greeting = this.refs.greeting.value;
```

```html
<input type="text" ref="greeting" />
```

NOTA: Las refs con strings están desaconsejadas; usar refs con callbacks en su lugar.