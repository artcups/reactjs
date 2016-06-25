import { combineReducers, createStore } from "redux";

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case "CHANGE_NAME" : {
			state = {...state, name: action.payload}
			break;
		}
		case "CHANGE_AGE" : {
			state = {...state, age: action.payload}
			break;
		}
	}
	return state;
}

const tweetsReducer = (state = [], action) => {
 return state;
}


const reducers = combineReducers({
	//Vilken data skall vi hantera och vilken reducer skall hantera den
	//När reducern kör och får state kommer userReducern endast att få in user
	// från state objektet
	user: userReducer,
	tweets: tweetsReducer
})
const store = createStore(reducers);

store.subscribe(()=> {
	console.log("store changed", store.getState());
})

store.dispatch({type: "CHANGE_NAME", payload: "Seb"})
store.dispatch({type: "CHANGE_AGE", payload: 35})

