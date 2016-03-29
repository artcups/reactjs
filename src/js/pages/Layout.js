import React from "react";
import { Link } from "react-router";
export default class Layout extends React.Component {
	navigate(){
		this.props.history.pushState(null, "/");
	}
	render() {
		return (
			<div>
				<h1>Sebbes sida</h1>
				{this.props.children}
				<Link to="archives"><button class="btn">Archived</button></Link>
				<Link to="settings"><button class="btn">Settings</button></Link>
				<button onClick={this.navigate.bind(this)}>featured</button>
			</div>

		);
	}
}