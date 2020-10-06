import React, { Component } from "react";
import { hot } from "react-hot-loader";
import BackgroundSlider from 'react-background-slider'
import Michael1 from "../../assets/img/Michael1.jpg";
import Michael2 from "../../assets/img/Michael2.jpg";
import Michael3 from "../../assets/img/Michael3.jpg";


class WelcomeSection extends Component {
	render() {
		return(
			<div id="welcome">
				<BackgroundSlider
	  				images={[Michael1, Michael2, Michael3]} duration={6} transition={2} />
	  		</div>
		);
	}
}

export default hot(module)(WelcomeSection);