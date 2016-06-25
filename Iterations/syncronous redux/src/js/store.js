import { createStore } from 'redux';
import todoApp from './reducers/Main';

let store = createStore(todoApp);
export default store;
