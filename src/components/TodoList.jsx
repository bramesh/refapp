import React from 'react';
import todoStore from '../stores/TodoStore.js';

import * as TodoActions from '../actions/TodoActions.js';


class List extends React.Component {
	constructor() {
		super();
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	deleteTodo(e) {
		const id = e.target.id;
		TodoActions.deleteTodo(id);
	}

	render() {
		return(
			<ul>
				{this.props.items.map(item => (
					<li key={item.id}>
						{item.text} 
						&nbsp;&nbsp;&nbsp; 
						<a href="#" id={item.id} onClick={this.deleteTodo}>[x]</a>
					</li>
				))}
			</ul>
		)
	}
}


export default class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {todos: todoStore.getAll(), text: ''}
		this.getTodos = this.getTodos.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		todoStore.on('change', this.getTodos)
	}

	componentWillUnmount() {
		todoStore.removeListener('change', this.getTodos);
	}

	getTodos() {
		this.setState({
			todos: todoStore.getAll()
		})
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		TodoActions.createTodo(this.state.text)
		this.setState({
			text: ''
		})
	}

	/*handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		var newItem = {
			text: this.state.text,
			id: Date.now()
		}
		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			text: ''
		})) 
	}*/

	render() {
		return(
			<div>
			<List items={this.state.todos} test="hello" />
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.text} onChange={this.handleChange} />
				<br />
				<button type="submit">Add</button>
			</form>
			</div>
		)
	}
}