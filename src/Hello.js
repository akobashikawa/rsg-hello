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
			<div>
				<div>
					state.greeting: 
					<input type="text"
						value={this.state.greeting}
						onChange={event => this.setState({greeting: event.target.value})}/>
				</div>
				<hr/>
				<div>{this.state.greeting} {this.props.name}!</div>
			</div>
		);
	}
}

export default Hello;