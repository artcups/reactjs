import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// Layouts
import DefaultLayout from './layouts/Default';

// Pages
import Todos from './pages/Todos';
import Settings from './pages/Settings';
import Archives from './pages/Archives';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={DefaultLayout}>
			<IndexRoute component={Todos}></IndexRoute>
			<Route path="archives(/:article)" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>
);