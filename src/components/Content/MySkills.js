import React, { Component } from "react";
import { hot } from "react-hot-loader";
import computer from "../../assets/img/computer.svg";


class MySkills extends Component {
	render() {
		return(
			<section className="subcontent wow fadeIn" data-wow-duration="3s">
				<div className="imagecontainer">
					<img src={ computer } className="icon" />
				</div>
				<div className="textcontainer">
					<h1>My Skills</h1>
					<p>Although my current major leans more towards web-based programming, I am well-versed in many other programming languages as well. These include C#, Java, and C++. However, my main focus currently are languages such as HTML, CSS, Javascript, PHP, and SQL. I am also familiar with frameworks and libraries such as Bootstrap, JQuery, and React.</p>
				</div>
			</section>
		)
	}
}

export default hot(module)(MySkills);