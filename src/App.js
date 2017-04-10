import React, { Component } from 'react';

const Hello = () => (
	<div>Hello Sub Component!</div>
);

class App extends Component {
	render() {
		return (
			<Hello />
		);
	}
}

export default App;