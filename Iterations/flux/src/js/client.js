import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Todos";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="archives(/:article)" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
app);