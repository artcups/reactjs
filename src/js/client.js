import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
	constructor(){
		super();
		this.name = this.getVal();
	}
	getVal(){
		return "Seb";
	}
	render() {
		const name = "Seb";
		return (
			<h1>It's {this.name}!</h1>
		);
	}
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);