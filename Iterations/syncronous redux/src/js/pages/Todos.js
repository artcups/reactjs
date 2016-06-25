import React from "react";
import { connect } from 'react-redux';
import Todo from "../components/Todo";
import store from './../store';
import * as todoApi from '../api/Todos';
import { getTodos } from './../actions/Todo';


class Todos extends React.Component {
	constructor(){
		super();
	}

	componentDidMount(){
		todoApi.getTodos()
		//store.dispatch(getTodos)
		//store.dispatch();
	}
	render() {
		return (
			<Todo todos={this.props.todos} />
		);
	}
}

const mapStateToProps = function(store) {
	return{
		todos: store.todoState.todos
	};
};

/*/!*Om man vill göra grejer i componeneten*!/
const mapDispatchToProps = function(dispatch, ownProps) {
	return {
		toggleActive: function() {
		}
	}
};*/

export default connect(mapStateToProps)(Todos);