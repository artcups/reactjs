import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
	return (
		<ul className="data-list">
			{props.todos.map(todo => {
				return (
					<li key={todo.id}>
						{todo.text}
					</li>
				);
			})}
		</ul>
	);
}