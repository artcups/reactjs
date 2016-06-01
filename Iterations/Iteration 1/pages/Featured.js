import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {

	render() {
		const Articles = [
		 "Some Article",
		 "Some other Article",
		 "Yeat another Article",
		 "Still More"
		].map((title, i) => <Article key={i} title={title} /> );
		/*const Articles = [
			<Article key={1} title={"some title"}/>,
			<Article key={2} title={"some title"}/>,
			<Article key={3} title={"some title"}/>,
			<Article key={4} title={"some title"}/>,
			<Article key={5} title={"some title"}/>

		];*/

		const adText = [
			"Ad spot #1",
			"Ad spot #2",
			"Ad spot #3",
			"Ad spot #4",
			"Ad spot #5"
		];
		const randomAd = adText[Math.round(Math.random() * (adText.length-1))];

		return (
			<div>
				<div class="row">
					<div class="col-md-12">
						<div class="well text-center">
							{randomAd}
						</div>
					</div>
				</div>
				<div class="row">{Articles}</div>
			</div>
		);
	}
}