import React, { Component } from "react";
import { hot } from "react-hot-loader";
import guitar from "../../assets/img/guitar.svg";


class Hobbies extends Component {
	render() {
		return(
			<section className="subcontent flipOver wow fadeIn" data-wow-duration="3s">
			<div className="textcontainer">
				<h1>Hobbies</h1>
				<p>In my free time, I like to explore and learn about a variety of differents things and activities. I have always had a natural tendency to want to branch and understand all the wonderful things life has to offer. Aside from keeping up with new technology and coding, I also enjoy playing and writing music, playing video games, watching Star Wars, going out with friends, and eating pizza!</p>
			</div>
			<div className="imagecontainer">
				<img src= { guitar } className="icon" />
			</div>
		</section>
		)
	}
}

export default hot(module)(Hobbies);