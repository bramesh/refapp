import React from 'react';
import ReactDOM from 'react-dom';

import BaseButton from './components/BaseButton.jsx'
import TodoList from './components/TodoList.jsx';


class App extends React.Component {
	constructor() {
		super();
		this.state = {standard: 0}
		//this.buttonTextHandler = this.buttonTextHandler.bind(this);
	}

	buttonTextHandler() {
		this.setState((prevState) => ({
			standard: prevState.standard + 1
		}));
	}


	componentDidMount() {
		this.interval = setInterval(() => this.buttonTextHandler(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return(
			<div>
				<BaseButton kind="standard" className="hello" data-test="test" slim>
					Hello world
				</BaseButton>
				<br />
				<BaseButton kind="standard" className="test" data-test="ere" label={this.state.standard} slim />
				<br />
				<BaseButton kind="standard" className="hello" data-test="txtes" slim>
					Nothing
				</BaseButton>
				<TodoList />
			</div>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('element'));