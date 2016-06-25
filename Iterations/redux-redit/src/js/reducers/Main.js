import { combineReducers } from 'redux'
import {
	SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
	REQUEST_POSTS, RECEIVE_POSTS
} from './../actions/Actions'

function selectedSubreddit(state = 'reactjs', action) {
	switch (action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit
		default:
			return state
	}
}

function posts(state = {
	isFetching: false,
	didInvalidate: false,
	items: []
}, action) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
			return Object.assign({}, state, {
				didInvalidate: true
			})
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

function postsBySubreddit(state = { }, action) {
	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				[action.subreddit]: posts(state[action.subreddit], action)
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	postsBySubreddit,
	selectedSubreddit
})

export default rootReducer;
/* http://redux.js.org/docs/advanced/AsyncActions.html
This part is often confusing to beginners, because it is not immediately clear what
information describes the state of an asynchronous application, and how to organize it in a single tree.

 We’ll start with the most common use case: lists. Web applications often show lists of things. For example,
 a list of posts, or a list of friends. You’ll need to figure out what sorts of lists your app can show.
 You want to store them separately in the state, because this way you can cache them and only fetch again if necessary.*/