import * as actionTypes from './actionTypes';

export function getTodosSuccess(todos) {
	return {
		type: actionTypes.GET_TODOS,
		todos
	};
}