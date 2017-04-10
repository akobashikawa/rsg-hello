import React, { Component } from 'react';

class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'Hello'
		};

		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(event) {
		this.setState({greeting: event.target.value});
	}

	render() {
		return (
			<div>
				<div>
					state.greeting: 
					<input type="text"
						value={this.state.greeting}
						onChange={this.onChangeHandler}/>
				</div>
				<hr/>
				<div>{this.state.greeting} {this.props.name}!</div>
			</div>
		);
	}
}

export default Hello;