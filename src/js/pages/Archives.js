import React from "react";

export default class Archives extends React.Component {

	render() {

		const { query } = this.props.location;
		const { params } = this.props;
		const { date, filter } = query;
		return (
			<div>
				<h1>Archives</h1>
			</div>

		);
	}
}