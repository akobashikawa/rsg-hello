import React, { Component } from 'react';

class Hello extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: 'Hello',
			counter: 0
		};

		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler(event) {

		// NO:
		// this.setState({greeting: event.target.value});
		// this.setState({counter: this.state.counter + 1});

		// YES: setSate is async, use a function to access previous state
		this.setState({greeting: event.target.value});
		this.setState( (prevState, props) => ({
			counter: prevState.counter + 1
		}) );

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
				<div>{this.state.counter} {this.state.greeting} {this.props.name}!</div>
			</div>
		);
	}
}

export default Hello;