import React from 'react';

export default class Timer extends React.Component {
	constructor() {
		super();
		this.state = {secondsElapsed: 0}
	}

	tick() {
		this.setState((prevState) => ({
			secondsElapsed: prevState.secondsElapsed + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return(
			<div>Time Elapsed {this.state.secondsElapsed} seconds</div>
		)
	}
}