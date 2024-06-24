import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Contact(){
    return(
        <>
        <Navbar/>
        <div class="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="p-5 bg-light rounded contact-form">
                    <div class="col-12">
                        <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-dark rounded-pill px-4 py-1 mb-3">Get in touch</small>
                        <h1 class="display-5 mb-0">Contact Us For Any Queries!</h1>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <span style={{color:"#D4A762"}}>Download Now</span>.</p>
                            <form>
                                <input type="text" class="w-100 form-control p-3 mb-4 border-dark bg-light" placeholder="Your Name" />
                                <input type="email" class="w-100 form-control p-3 mb-4 border-dark bg-light" placeholder="Enter Your Email"/>
                                <textarea class="w-100 form-control mb-4 p-3 border-dark bg-light" rows="4" cols="10" placeholder="Your Message" />
                                <button class="w-100 btn btn-primary form-control p-3 border-dark rounded-pill" type="submit">Submit Now</button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div class="d-inline-flex w-100 border border-dark p-4 rounded mb-4">
                                <i class="fas fa-map-marker-alt fa-2x me-4" style={{color:"#D4A762"}} ></i>
                            <div class="">
                                <h4>Address</h4>
                                <p>123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div class="d-inline-flex w-100 border border-dark p-4 rounded mb-4">
                            <i class="fas fa-envelope fa-2x me-4" style={{color:"#D4A762"}}></i>
                            <div class="">
                                <h4>Mail Us</h4>
                                <p class="mb-2">info@example.com</p>
                                <p class="mb-0">support@example.com</p>
                            </div>
                        </div>
                        <div class="d-inline-flex w-100 border border-dark p-4 rounded">
                            <i class="fa fa-phone-alt fa-2x me-4" style={{color:"#D4A762"}}></i>
                            <div class="">
                                <h4>Telephone</h4>
                                <p class="mb-2">(+012) 3456 7890 123</p>
                                <p class="mb-0">(+704) 5555 0127 296</p>
                            </div>
                        </div>
                </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Contact