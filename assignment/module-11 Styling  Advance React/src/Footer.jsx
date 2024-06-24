import React from 'react'
import m1 from './image/m1.jpg'
import m2 from './image/m2.jpg'
import m3 from './image/m3.jpg'
import m4 from './image/m2.jpg'
import m5 from './image/m5.jpg'
import m6 from './image/m6.jpg'
function Footer(){
    return(
        <>
            <div className="container-fluid footer py-6 my-6 mb-0 bg-light wow ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                    <h1 className="" style={{color:"#D4A762"}}>Cater<span className="text-dark">Serv</span></h1>
                                    <p className="lh-lg mb-4">There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
                                <div className="footer-icon d-flex">
                                    <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href=""><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href=""><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href=""><i className="fab fa-instagram" /></a>
                                    <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href=""><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                    <h4 className="mb-4">Special Facilities</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <a className="text-body mb-3" href=""><i className="fa fa-check me-2" style={{color:"#D4A762"}} />Cheese Burger</a>
                                    <a className="text-body mb-3" href=""><i className="fa fa-check  me-2" style={{color:"#D4A762"}} />Sandwich</a>
                                    <a className="text-body mb-3" href=""><i className="fa fa-check  me-2" style={{color:"#D4A762"}} />Panner Burger</a>
                                    <a className="text-body mb-3" href=""><i className="fa fa-check  me-2" style={{color:"#D4A762"}} />Special Sweets</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="mb-4">Contact Us</h4>
                            <div className="d-flex flex-column align-items-start">
                                <p><i className="fa fa-map-marker-alt  me-2" style={{color:"#D4A762"}}/> 123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt  me-2" style={{color:"#D4A762"}}/> (+012) 3456 7890 123</p>
                                <p><i className="fas fa-envelope  me-2" style={{color:"#D4A762"}}/>{" "}info@example.com</p>
                                <p><i className="fa fa-clock  me-2" style={{color:"#D4A762"}}/> 24/7 HoursService</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                    <h4 className="mb-4">Social Gallery</h4>
                                <div className="row g-2">
                                    <div className="col-4"><img src={m1} className="img-fluid rounded-circle border border-dark p-2" alt=""/></div>
                                    <div className="col-4"><img src={m2} className="img-fluid rounded-circle border border-dark p-2" alt=""/></div>
                                    <div className="col-4"><img src={m3} className="img-fluid rounded-circle border border-dark p-2" alt=""/></div>
                                    <div className="col-4"><img src={m4} className="img-fluid rounded-circle border border-dark p-2" alt=""/></div>
                                    <div className="col-4"><img src={m5} className="img-fluid rounded-circle border border-dark p-2" alt=""/></div>
                                    <div className="col-4"><img src={m6} className="img-fluid rounded-circle border border-dark p-2" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Copyright Start */}
            <div className="container-fluid copyright bg-black py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <span className="text-light"><a href="#"><i className="fas fa-copyright text-light me-2" />Your Site Name</a>, All right reserved.</span>
                        </div>
                        <div className="col-md-6 my-auto text-center text-md-end text-white">Designed By HTML Codex Distributed By ThemeWagon</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer