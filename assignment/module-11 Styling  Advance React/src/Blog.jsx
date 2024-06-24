import React from 'react'
import blog1 from './image/blog1.jpg'
import blog2 from './image/blog2.jpg'
import blog3 from './image/blog3.jpg'
function Blog(){
    return(
        <>
        {/* Blog Start */}
            <div id='blog' className="container-fluid blog py-6">
                <div className="container">
                    <div className="text-center wow " >
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-dark rounded-pill px-4 py-1 mb-3">Our Blog</small>
                        <h1 className="display-5 mb-5">Be First Who Read News</h1>
                    </div>
                    <div className="row gx-4 justify-content-center">
                        <div className="col-md-6 col-lg-4 wow " >
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src={blog1} className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark rounded-start" style={{backgroundColor:"#D4A762"}}>
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                        <a href="#" className="h5 lh-base my-auto h-100 p-3 text-black">How to get more test in your food from</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow " >
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src={blog2} className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark rounded-start" style={{backgroundColor:"#D4A762"}}>
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                        <a href="#" className="h5 lh-base my-auto h-100 p-3 text-black">How to get more test in your food from</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow " >
                            <div className="blog-item">
                                <div className="overflow-hidden rounded">
                                    <img src={blog3} className="img-fluid w-100" alt="" />
                                </div>
                                <div className="blog-content mx-4 d-flex rounded bg-light">
                                    <div className="text-dark rounded-start" style={{backgroundColor:"#D4A762"}}>
                                        <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                                            <p className="fw-bold mb-0">16</p>
                                            <p className="fw-bold mb-0">Sep</p>
                                        </div>
                                    </div>
                                        <a href="#" className="h5 lh-base my-auto h-100 p-3 text-black">How to get more test in your food from</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog