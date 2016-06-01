import React from "react";

export default class Archives extends React.Component {

	render() {

		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		const { date, filter } = query;
		const Articles = [
			"Some Article",
			"Some other Article",
			"Yeat another Article",
			"Still More",
			"Some Article",
			"Some other Article",
			"Yeat another Article",
			"Still More"
		].map((title, i) => <Article key={i} title={title} /> );
		return (
			<div>
				<h1>Archives ({article})</h1>
				article: {article}, date: {date}, filter {filter}
				<div class="row">{Articles}</div>
			</div>

		);
	}
}