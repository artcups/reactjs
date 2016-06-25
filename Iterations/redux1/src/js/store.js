import { createStore } from 'redux';
import reducers from './reducers/Main';

const store = createStore(reducers);
export default store;