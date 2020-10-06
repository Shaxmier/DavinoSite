import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Nav from './HeaderNav';

class Header extends Component {
	render() {
		return(
			<header>
				<Nav />
			</header>
		);
	}
}

export default hot(module)(Header);