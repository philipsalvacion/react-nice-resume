import React, { Component } from 'react';

const redText = {
	color: 'red'
};

class Contact extends Component {
	render() {

		if(this.props.data){
			var name = this.props.data.name;
			var street = this.props.data.address.street;
			var city = this.props.data.address.city;
			var state = this.props.data.address.state;
			var zip = this.props.data.address.zip;
			var phone= this.props.data.phone;
			// var email = this.props.data.email;
			var message = this.props.data.contactmessage;
		}

		return (
			<section id="contact">

				<div className="row section-head">

					<div className="two columns header-col">

						<h1><span>Get In Touch.</span></h1>

					</div>

					<div className="ten columns">

						<p className="lead">{message}</p>

					</div>

				</div>

				<div className="row">
					<div className="eight columns">

						<form action="" method="post" id="contactForm" name="contactForm">
							<fieldset>

								<div>
									<label htmlFor="contactName">Name <span className="required">*</span></label>
									<input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
								</div>

								<div>
									<label htmlFor="contactEmail">Email <span className="required">*</span></label>
									<input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
								</div>

								<div>
									<label htmlFor="contactSubject">Subject</label>
									<input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
								</div>

								<div>
									<label htmlFor="contactMessage">Message <span className="required">*</span></label>
									<textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
								</div>

								<div>
									<button className="submit" disabled>Submit</button>
									<span id="image-loader">
										<img alt="" src="images/loader.gif" />
									</span>
								</div>
							</fieldset>
						</form>

						<div id="message-warning"> Error boy</div>
						<div id="message-success">
							<i className="fa fa-check"></i>Your message was sent, thank you!<br />
						</div>
					</div>


					<aside className="four columns footer-widgets">
						<div className="widget widget_contact">

							<h4>Address and Phone</h4>
							<p className="address">
								{name}<br />
							{street} <br />
						{city}, {state} {zip}<br />
					<span>{phone}</span>
				</p>
			</div>

			<div className="widget widget_tweets">
				<h4 className="widget-title">Latest Updates</h4>
				<ul id="twitter">
					<li>
						<span>
							This website is still under development, work portfolio and testimonials will be added soon!
							<br></br>
								<i style={redText}>*Email feature still under development, kindly contact me throught my email or phone number</i>
							</span>
							<b><a href=".">July 22, 2020</a></b>
						</li>
						<li>
							<span>
								Web resume has been published!
							</span>
							<b><a href=".">July 20, 2020</a></b>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	</section>
);
}
}

export default Contact;
