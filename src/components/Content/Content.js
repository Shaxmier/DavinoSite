import React, { Component } from "react";
import { hot } from "react-hot-loader";
import WelcomeSection from "./WelcomeSection.js";
import AboutMe from "./AboutMe.js";
import Education from "./Education.js";
import MySkills from "./MySkills.js";
import Hobbies from "./Hobbies.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

class Content extends Component {
	render() {
		return(
			<div id="content">
				<WelcomeSection />
				<AboutMe />
				<Education />
				<MySkills />
				<Hobbies />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default hot(module)(Content);