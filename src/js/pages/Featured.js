import React from "react";
import Article from "../components/Todo";

export default class Featured extends React.Component {
	constructor(){
		super();
		this.state = {
			todos: [
				{
					id: 123413123,
					text: "Go Shopping",
					complete: false
				},
				{
					id: 312412312,
					text: "Pay bills",
					complete: false
				}
			]
		}
	}
	render() {
		const { todos } = this.state;

		const TodoComponents = todos.map((todo) => { <Todo key={todo.id} {...todo} />; });

		return (
			<div>
				<h1>Todos</h1>
				<ul>{TodoComponents}</ul>
			</div>
		);
	}
}