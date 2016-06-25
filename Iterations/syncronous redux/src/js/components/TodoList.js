import React, { PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		const { todos } = this.props;
		debugger;

		<ul>
			{ todos.map((item, index) => <p key={index}>{ item.text }</p>) }
			/*{todos.map(todo =>
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			)}*/
		</ul>
	}
	/*TodoList.propTypes = {
		todos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired).isRequired,
		onTodoClick: PropTypes.func.isRequired
	}*/
}

/*const TodoList = ({ todos, onTodoClick }) => (

)*/



//export default TodoList