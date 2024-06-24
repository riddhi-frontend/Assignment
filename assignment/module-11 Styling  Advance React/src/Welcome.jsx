import React from 'react'
import main from '../src/image/main.png'
function Welcome(){
    return(
        <>
            {/* Hero Start */}
            <div className="container-fluid py-6 my-6 mt-0">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-dark rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to CaterServ</small>
                            <h1 className="display-1 mb-4 animated bounceInDown"> Book <span className="" style={{color:"#D4A762"}}>Cater</span>Serv For Your Dream Event</h1>
                            <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft">Book Now</a>
                            <a href="" className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft">Know More</a>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img src={main} className="img-fluid rounded animated zoomIn" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome