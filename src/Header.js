import React from 'react';

import Name from './Name.js'

export default class Header extends React.Component {

	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	handleAgeChange(e) {
		const age = e.target.value;
		this.props.personAge(age);
	}
	

	render() {
		return (
			<div>
				{<Name name={this.props.title} />}
				<h1>{this.props.title}'s age is {this.props.getAge}</h1>
				Name: <input value={this.props.title} type="text" onChange={this.handleChange.bind(this)} /><br />
				Age: <input type="text" value={this.props.getAge} onChange={this.handleAgeChange.bind(this)} />
			</div>
		)
	}
}
