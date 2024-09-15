import React from "react";
import lines from '../assets/images/lines.png'
import f1 from '../assets/images/f1.png'
import f2 from '../assets/images/f2.png'
import f3 from '../assets/images/f3.png'

const Contact = () => {
  return (
    <div className="pt-6">
    <div  className="contact">
			<div  className="container">
				<div  className="contact__content">
					<div  className="row">
						<div  className="col-md-5">
							<h1  className="contact__content-title">Send Us A Message</h1>
							<p>We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form.</p>
							<p> If you have any questions, please feel free to drop us a line. If you don't get an immediate answer, we might be in the middle of something. We'll get back to you as soon as we can, that's a promise!</p>
						</div>
						<div  className="col-md-7">
							<form id="contact-form" name="contact-form" method="POST">
								<div  className="row">
									<div  className="col-md-6">
										<div  className="md-form mb-0">
											<input type="text" id="name" name="name"  className="form-control" placeholder="Name"/>
										</div>
									</div>
									<div  className="col-md-6 mt-3 mt-md-0">
										<div  className="md-form mb-0">
											<input type="text" id="phone" name="phone"  className="form-control" placeholder="Phone"/>
										</div>
									</div>
								</div>
								<div  className="row mt-3">
									<div  className="col-md-12">
										<div  className="md-form mb-0">
											<input type="text" id="email" name="email"  className="form-control" placeholder="Email"/>
										</div>
									</div>
								</div>
								<div  className="row mt-3">
									<div  className="col-md-12">
										<div  className="md-form">
											<textarea type="text" id="message" name="message" rows="2"  className="form-control md-textarea" placeholder="Message"></textarea>
										</div>
									</div>
								</div>
								<div  className="row mt-3">
									<div  className="col-md-12">
										<div  className="md-form text-right">
											<input type="submit"  className="btn btn-primary px-5 cont-form-btn 	border: #5f5f60" name="" style={{backgroundColor: '#000000'}}    
										/>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<img   src={lines}  className=" lines_graph w-100 mt-3"/>
		</div>

    <div  className="subfooter">
			<div  className="container">
				<h4  className="green_heading text-center">We love green city!</h4>
				<div  className="whatwedo row mt-0 text-center">
					<div  className="col-md-4 mt-4 mt-md-0 px-md-5 flex flex-col items-center justify-center">
						<img  className="icon " src={f1} alt=""/>
						<h3>Meet Us at</h3>
						<span>Level 7, Tower C, 7C, Green Boulevard, B9/A, Sector-62, Noida-201309, UP</span>
					</div>
					<div  className="col-md-4 mt-4 mt-md-0 px-md-5 flex flex-col items-center justify-center">
						<img  className="icon " src={f2} alt=""/>
						<h3>Call Us</h3>
						<span>p. <a href="tel:(0)120-4730534" title=""> (0) 120-4730534</a></span>
					</div>
					<div  className="col-md-4 mt-4 mt-md-0 px-md-5 flex flex-col items-center justify-center">
						<img  className="icon " src={f3} alt=""/>
						<h3>Email Us </h3>
						<span><a href="mailto:info@brainsterra.com" title=""> info@brainsterra.com</a></span>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
};

export default Contact;
