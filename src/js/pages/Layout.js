import React from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
	navigate(){
		this.props.history.pushState(null, "/");
	}
	render() {
		const { location } = this.props;
		const { history } = this.props;
		return (
			<div>
				<Nav location={ location } history={ history } />
				<h1>Sebbes sida</h1>
				{this.props.children}

				<Footer />
			</div>

		);
	}
}