import React, { Component } from "react";
import { hot } from "react-hot-loader";
import person from "../../assets/img/person.svg";


class AboutMe extends Component {
	render() {
		return(
			<section className="subcontent wow fadeIn" data-wow-duration="3s" id="aboutme">
				<div className="imagecontainer">
					<img src={ person } className="icon" />
				</div>
				<div className="textcontainer">
					<h1>A Little Bit About Myself</h1>
					<p>Hello there! My name is Michael D'Avino and I am Web App Developer from Rock Hill, South Carolina! From a young age, I had always had a love for technology and science. I really began to consider coding as a career choice when I took my first web design course in high school and completely fell in love. Today, my love for coding and computer science is still burning just as brightly and has deeply shaped who I am as a person. Come find me coding at your local pizza joint!</p>
				</div>
			</section>
		)
	}
}

export default hot(module)(AboutMe);