import React, { Component } from "react";
import { hot } from "react-hot-loader";

class NavItem extends Component {
	render() {
		return(
			<li className="NavItem">
				<a href={ this.props.slug } >{ this.props.title }</a>
			</li>
		);
	}
}

export default hot(module)(NavItem);