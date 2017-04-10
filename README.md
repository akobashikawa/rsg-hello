# Hello Handler

Print Hello.

Change state of a Component class.

---

`Component` `state` is changed through `setState()`.

An event handlers can be defined with a method:

```javascript
onChangeHandler(event) {
	this.setState({greeting: event.target.value});
}
```

If handler require access to `state`, `props` or other Component's parts,
it must be binded to the Component:

```javascript
this.onChangeHandler = this.onChangeHandler.bind(this);
```

---

El `state` de un `Component` es cambiado mediante `setState()`.

Un event handler se puede definir en un método:

```javascript
onChangeHandler(event) {
	this.setState({greeting: event.target.value});
}
```

Si el handler requiere acceso a `state`, `props` o alguna otra parte del Component,
debe ser _bindeado_ al Component:

```javascript
this.onChangeHandler = this.onChangeHandler.bind(this);
```

