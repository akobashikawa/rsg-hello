# Hello Handler binding

Print Hello.

Change state of a Component class.

---

A handler binding can be done in several ways:

## In constructor

```javascript
constructor(props) {
	//...
	this.onChangeHandler = this.onChangeHandler.bind(this);
}
//...
onChangeHandler(event) {
	this.setState({greeting: event.target.value});
}
```

## In line, binding a callback

```javascript
onChange={function(event) {
	return this.setState({greeting: event.target.value});
}.bind(this)}
```

## Same of previous but using ES6

```javascript
onChange={ event => this.setState({greeting: event.target.value}) }
```

---

Un event handler se puede _bindear_ de varias maneras:

## En el constructor

```javascript
constructor(props) {
	//...
	this.onChangeHandler = this.onChangeHandler.bind(this);
}
//...
onChangeHandler(event) {
	this.setState({greeting: event.target.value});
}
```

## En línea, bindeando el callback

```javascript
onChange={function(event) {
	return this.setState({greeting: event.target.value});
}.bind(this)}
```

## Igual que el ejemplo previo, pero usando ES6

```javascript
onChange={ event => this.setState({greeting: event.target.value}) }
```