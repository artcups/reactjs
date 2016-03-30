import React from "react";
import { IndexLink, Link } from "react-router";


export default class Nav extends React.Component {
	constructor(){
		super();
		this.state = {
			collapsed: true
		}
	}

	toggleCollapse(){
		const collapsed = !this.state.collapsed;
		this.setState({collapsed});
	}
	collapse(){
		const collapsed = true;
		this.setState({collapsed});
	}
	render(){
		const { location }= this.props;
		const { history } = this.props;
		const { collapsed } = this.state;
		const navClass = collapsed ? "collapse" : "";
		return(
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" onClick={this.toggleCollapse.bind(this)} data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
				 	<div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class={location.pathname === "/" ? "active" : ""} onClick={this.collapse.bind(this)}>
								<IndexLink activeClassName="active" to="/">Featured</IndexLink>
							</li>
							<li class={location.pathname === "/archives" ? "active" : ""} onClick={this.collapse.bind(this)}>
								<Link activeClassName="active" to="archives">Archives</Link>
							</li>
							<li class={location.pathname === "/settings" ? "active" : ""} onClick={this.collapse.bind(this)}>
								<Link activeClassName="active" to="settings">Settings</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}