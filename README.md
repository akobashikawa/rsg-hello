# Hello SetState (is async)

Print Hello.

Change state of a Component class.

---

`setState()` is an async function. Use a callback to access to changed state.

```javascript
// NO:
// this.setState({greeting: event.target.value});
// console.log(this.state.greeting);

// YES: setSate is async, set next access via callback
this.setState({greeting: event.target.value}, () => {
	console.log(this.state.greeting);
});
```

---

`setState()` es una función asícrona. Use un callback para acceder al state que ha cambiado.  

```javascript
// NO:
// this.setState({greeting: event.target.value});
// console.log(this.state.greeting);

// YES: setSate is async, set next access via callback
this.setState({greeting: event.target.value}, () => {
	console.log(this.state.greeting);
});
```
