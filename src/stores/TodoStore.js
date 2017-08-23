import {EventEmitter} from 'events';

import dispatcher from '../dispatcher/dispatcher.js'

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todoList = [
			{
				id: 12122121,
				text: 'Learn React',
				complete: false
			},
			{
				id: 334234234,
				text: 'JUST Learn React',
				complete: false
			}
		]
	}

	createTodo(text) {
		const id = Date.now();

		this.todoList.push({
			id,
			text,
			complete: false
		});

		this.emit('change');
	}

	deleteTodo(id) {
		const deleteTodo = id;
		let todoList = this.todoList;
		for(let i = 0; i < todoList.length; i++) {
			let todo = todoList[i];
			if (deleteTodo === todo.id.toString()) {
				todoList.splice(i, 1);
				console.log('deleted');
			}
		}
	}



	getAll() {
		return this.todoList;
	}

	handleActions(action) {
		switch(action.type) {
			case 'CREATE_TODO': 
				console.log('received create event');
				this.createTodo(action.text);
				break;
			case 'DELETE_TODO': 
				this.deleteTodo(action.id);
				break;			
		}
	}
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
window.todoStore = todoStore;
export default todoStore;