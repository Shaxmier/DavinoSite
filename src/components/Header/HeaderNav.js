import React, { Component } from "react";
import { hot } from "react-hot-loader";
import NavItem from './NavItem';
import { links } from '../../data/navLinks';

const navItems = links.map((links) =>
	<NavItem title={ links.title } slug={ links.slug } key={ links.title } />
);

class HeaderNav extends Component {
	render() {
		return(
			<nav className="wow fadeIn" data-wow-duration="3s">
				<ul>
					{ navItems }
				</ul>
			</nav>		
		);
	}
}

export default hot(module)(HeaderNav);