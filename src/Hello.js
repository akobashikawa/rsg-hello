import React, { Component } from 'react';

class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'Hello'
		};
	}

	render() {
		return (
			<div>{this.state.greeting} {this.props.name}!</div>
		);
	}
}

export default Hello;