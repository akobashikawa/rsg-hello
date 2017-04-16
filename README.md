# Hello SetState (with function)

Print Hello.

Change state of a Component class.

---

`setState()` is an async function. Instead an object, pass a function to access to previous state.

```javascript
// NO:
// this.setState({greeting: event.target.value});
// this.setState({counter: this.state.counter + 1});

// YES: setSate is async, use a function to access previous state
this.setState({greeting: event.target.value});
this.setState( (prevState, props) => ({
	counter: prevState.counter + 1
}) );
```

https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly

---

`setState()` es una función asícrona. En lugar de un objeto, pásele una función para acceder al state previo.  

```javascript
// NO:
// this.setState({greeting: event.target.value});
// this.setState({counter: this.state.counter + 1});

// YES: setSate is async, use a function to access previous state
this.setState({greeting: event.target.value});
this.setState( (prevState, props) => ({
	counter: prevState.counter + 1
}) );
```

https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly