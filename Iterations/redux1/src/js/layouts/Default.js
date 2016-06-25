import React from "react";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
	navigate(){
		this.props.history.pushState(null, "/");
	}
	render() {
		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
		}
		return (
			<div>
				<Nav location={ location } />
				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-md-12">
							<h1>Sebbes sida</h1>
							{this.props.children}
						</div>
					</div>
					<Footer />
				</div>
			</div>

		);
	}
}