import React, { Component } from 'react';

class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'Hello'
		};

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler() {
		const greeting = this.greeting.value;
		this.setState({greeting});
	}

	render() {
		return (
			<div>
				<div>
					state.greeting: 
					<input type="text" ref={input => this.greeting = input} />
					<button onClick={this.onClickHandler}>Change greeting</button>
				</div>
				<hr/>
				<div>{this.state.greeting} {this.props.name}!</div>
			</div>
		);
	}
}

export default Hello;