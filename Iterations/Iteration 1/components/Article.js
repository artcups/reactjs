import React from "react";

export default class Article extends React.Component {
	render(){
		const { title } = this.props;
		return(
			<div class="col-md-4">
				<h2>{title}</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed malesuada libero, sit amet posuere ex. Pellentesque lobortis risus non convallis semper. Fusce interdum metus sed urna tempor sodales.</p>
				<a class="btn btn-default" href="#">More info</a>
			</div>
		)
	}
}