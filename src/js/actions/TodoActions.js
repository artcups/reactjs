import dispatcher from "../dispatcher";

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text
	});
}
export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id
	});
}
export function reloadTodos(){
	dispatcher.dispatch({type: "FETCH_TODO"});

	setTimeout(() => {
		dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
		{
			id: 31233123,
			text: "Go Shopping again",
			complete: false
		},
		{
			id: 4324234,
				text: "Pay bills again",
			complete: true
		}
		]});
	}, 1000);
}