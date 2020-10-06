import React, { Component } from "react";
import { hot } from "react-hot-loader";
import education from "../../assets/img/education.svg";


class Education extends Component {
	render() {
		return(
			<section className="subcontent flipOver wow fadeIn" data-wow-duration="3s">
			<div className="textcontainer">
				<h1>My Education and Awards</h1>
				<p>Growing up in Rock Hill, I graduated from Northwestern High School in 2014 and earned a life scholarship. I always knew I wanted to continue my education so I enrolled at York Technical College immediately after high school and finished with my associate's degree in computer science with a focus in programming. During my time there, I entered a city-wide 24-hour programming event in which my team and I won first place with a grand prize of $5000. I eventually decided to go back to school to pursue my bachelor's degree and decided to major in digital information design with a focus in web app development at Winthrop University, where i currently study. After my first semester, I had earned a 3.7 GPA, earning a spot on the dean's list. I hope to continue my academic excellence and show the world my abilities!</p>
			</div>
			<div className="imagecontainer">
				<img src= { education } className="icon" />
			</div>
		</section>
		)
	}
}

export default hot(module)(Education);