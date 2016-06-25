import store from '../store';
import { getTodosSuccess } from './../actions/Todo';

export function getTodos() {

	const todos = [
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
	]
	store.dispatch(getTodosSuccess(todos));
	return todos;

}