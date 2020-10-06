import React, { Component } from "react";
import { hot } from "react-hot-loader";
import emailjs from 'emailjs-com';

const normalizePhoneInput = (value, previousValue) => {
  if (!value) return value;

  const onlyNums = value.replace(/[^\d]/g, ''); // only allows 0-9

  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 3) return `(${onlyNums})`;
    if (onlyNums.length === 6) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}-`

    if (onlyNums.length <= 3) return onlyNums;
    if (onlyNums.length <= 6) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;

    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
  }
};

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = { emailAttempt:false, emailSent: false, phone: "", pageHead: "Contact me!", pageMsg: "Thank you so much for your interest in me! There are several ways you can get in touch with me. You can either use the phone number or e-mail provided, or you may fill out the form below." };
		this.sendEmail = this.sendEmail.bind(this);

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_o81em1h', 'contact_form', e.target, 'user_rWJT085WHjczVioeKsHIJ')
		.then((result) => {
			this.setState({
				emailAttempt: true,
				emailSent: true,
				pageHead: "Message Sent.",
				pageMsg: "Thank you for the inquiry. I will get back to you as soon as possible. If you have any other questions or more pressing concerns, feel free to contact me at"
			});
		}, (error) => {
			this.setState({
				emailAttempt: true,
				emailSent: false,
			});

			alert("Sorry. Something went wrong. Please try again or use contact information provided.");
		});
	}

	handleChange({ target: { value } }) {
    const { phone } = this.state;
    const normalized = normalizePhoneInput(value, phone);
    
    this.setState({ phone: normalized });
  };
  
  handleSubmit(e) {
    e.preventDefault();
    
    alert(JSON.stringify(this.state, null, 4));
  }

	render() {
		return(
			<section id="contact" className="wow fadeIn" data-wow-duration="3s">
				<div id="contactcontainer">
					<div id="contacthead" className = { this.emailSent }>
						<h1>{ this.state.pageHead }</h1>
						<p>{ this.state.pageMsg }</p>
						<p><a href="tel:8034127444">803-412-7444</a></p>
						<p><a href="mailto:mdavino132@gmail.com">mdavino132@gmail.com</a></p>
					</div>
					<div className={ this.state.emailSent ? "contact-form hidden" : "contact-form" }>
						<form method="post" onSubmit={ this.sendEmail }>
							<div className="formblock">
								<div className="formitem">
									<label for="fullName" className="label">Full name: </label><br />
						  			<input type="text" name="fullName" placeholder="John Doe" required />
						  		</div>
					  			<div className="formitem">
						  			<label for="conpanyName" className="label">Company name: </label><br />
						  			<input type="text" name="companyName" placeholder="John's Grocery Store" className="input-size" />
						  		</div>
						  	</div>
						  	<div className="formblock">
						  		<div className="formitem">
						  			<label for="phoneNumber" className="label">Phone number: </label><br />
						  			<input type="tel" name="phoneNumber" value={this.state.phone} onChange={this.handleChange} placeholder="(xxx) xxx-xxxx" className="input-size" required />
						  		</div>
						  		<div className="formitem">
				  					<label for="e-mail" className="label">E-mail: </label><br />
				  					<input type="email" name="e-mail" placeholder="JohnDoe@example.com" className="input-size" required />
				  				</div>
				  			</div>
				  			<div className="formblock">
						  		<div className="formitem fullformitem">
						  			<label for="description" className="label"> Please leave a brief description of the project or service that you are interested in: </label><br />
						  			<textarea name="description" rows="5" required></textarea>
					  			</div>
					  		</div>
					  		<div className="formblock">
					  			<div className="formitem fullformitem">
					  				<input type="submit" value="Submit" id="submit" />
					  			</div>
					  		</div>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default hot(module)(Contact);