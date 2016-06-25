import { combineReducers } from 'redux';

// Reducers
import TodoReduceser from './TodoReducer';

var reducers = combineReducers({
	todoState: TodoReduceser
});

export default reducers;