import React from 'react';

import TodoList from './TodoList.js'

export default class TodoApp extends React.Component {
	constructor() {
		super();
		this.changeHandler = this.changeHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
		this.state = {items:[], text: ''};
	}

	changeHandler(e) {
		this.setState({
			text: e.target.value
		})
	}

	submitHandler(e) {
		e.preventDefault();
		var newItem = {
			text: this.state.text,
			id: Date.now()
		}
		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			text: ''
		}))
	}

	render() {
		return(
			<div>
				<TodoList items={this.state.items} />
				<form onSubmit={this.submitHandler}>
					<input type="text" onChange={this.changeHandler} value={this.state.text} />
					<button>Add</button>
				</form>
			</div>
		)
	}
}