import React from "react";
import '../styles/contact.scss'

function Contact() {
    return (
		<div className="contact-container">
        <div className="container">
	<div className="row">
			<h1>contact us</h1>
	</div>
	<div className="row">
			<h4 style={{textAlign:"center"}}>We'd love to hear from you!</h4>
	</div>
	<div className="row input-container">
			<div className="">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="">
				<div className="styled-input" style={{float:'right'}}>
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="">
				{/* <div className="btn-lrg submit-btn">Send Message</div> */}
                <button className="form-btn"> <b>Send Message</b> </button>
			</div>
	</div>
</div>
</div>


    );
}

export default Contact;