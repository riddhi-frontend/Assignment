import React from 'react'
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            {/* Navbar start */}
            <div className="container-fluid nav-bar">
                <nav className="navbar navbar-light navbar-expand-lg">
                    <a href="/" className="navbar-brand ps-4"><h1 className="fw-bold mb-0" style={{color:"#D4A762"}}>Cater<span className="text-dark">Serv</span>{" "}</h1></a>
                        <button className="navbar-toggler py-2 px-3"type="button"data-bs-toggle="collapse"data-bs-target="#navbarCollapse"><span className="fa fa-bars" style={{color:"#D4A762"}} /></button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">

                            <li><a href="/" className="nav-item nav-link active">Home</a></li>
                            <li><a href="about-us" className="nav-item nav-link active">About</a></li>
                            <li><a href="our-service" className="nav-item nav-link active">Services</a></li>
                            <li><a href="ourlatest-events" className="nav-item nav-link active">Events</a></li>

                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu bg-light">
                                            <a href="booking" className="dropdown-item">Booking</a>
                                            <a href="404.html" className="dropdown-item">404 Page</a>
                                        </div>
                                </div>
                            <li><a href="contact-us" className="nav-item nav-link">Contact</a></li>
                        </div>
                        <button className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search" /></button>
                        <a href=""  className="btn btn-primary py-2 me-4 px-4 d-none d-xl-inline-block rounded-pill">Book Now</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar