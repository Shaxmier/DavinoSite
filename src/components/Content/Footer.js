import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Footer extends Component {
	render() {
		return(
			<footer>
			<div id="socials">
				<a href="https://www.facebook.com/michael.davino.52/" className="fa fa-facebook wow fadeIn" data-wow-duration="1s" data-wow-delay=".25s"></a>
				<a href="https://twitter.com/Shaxmier" className="fa fa-twitter wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s"></a>
				<a href="https://www.linkedin.com/in/michael-d-avino-6a3bb8116/" className="fa fa-linkedin wow fadeIn" data-wow-duration="1s" data-wow-delay=".75s"></a>
				<a href="https://www.instagram.com/shaxmier/" className="fa fa-instagram wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"></a>
			</div>
			<div id="credits">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
		</footer>
		);
	}
}

export default hot(module)(Footer);