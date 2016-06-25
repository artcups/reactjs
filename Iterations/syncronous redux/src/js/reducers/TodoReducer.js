import * as ActionType from "../actions/Todo";

const initialState = {
	todos: []
};

const TodoReducer = function(state = initialState, action) {

	switch(action.type) {

		case ActionType.GET_TODOS:
			return Object.assign({}, state, { todos: action.todos });

		/*case types.DELETE_USER_SUCCESS:

			// Use lodash to create a new user array without the user we want to remove
			const newUsers = _.filter(state.users, user => user.id != action.userId);
			return Object.assign({}, state, { users: newUsers });

		case types.USER_PROFILE_SUCCESS:
			return Object.assign({}, state, { userProfile: action.userProfile });*/

	}

	return state;

};

export default TodoReducer;