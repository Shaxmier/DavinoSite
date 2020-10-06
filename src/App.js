import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Header from "./components/Header/Header.js";
import Content from "./components/Content/Content.js";
import { WOW } from 'wowjs';

class App extends Component{
	componentDidMount() {
		const wow = new WOW({ live: true });
		wow.init();
	}

	render(){
	    return(
	    	<div>
	    		<Header />
	    		<Content />
	    	</div>
		);
	}
}

export default hot(module)(App);