import React from 'react'
import e1 from '../src/image/e1.jpg'
import e2 from '../src/image/e2.jpg'
import e3 from '../src/image/e3.jpg'
import e4 from '../src/image/e4.jpg'
import e5 from '../src/image/e5.jpg'
import e6 from '../src/image/e6.jpg'
import e7 from '../src/image/e7.jpg'
import e8 from '../src/image/e8.jpg'

function Events(){
    return(
        <>
        <div className="container-fluid event py-6">
            <div className="container">
                <div className="text-center wow " >
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-dark rounded-pill px-4 py-1 mb-3">Latest Events</small>
                    <h1 className="display-5 mb-5">Our Social &amp; Professional Events Gallery</h1>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow " >
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-dark bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1"><span className="text-dark" style={{ width: 150 }}>All Events</span></a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-dark bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2" ><span className="text-dark" style={{ width: 150 }}>Wedding</span></a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-dark bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3"><span className="text-dark" style={{ width: 150 }}>Corporate</span></a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-dark bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4"><span className="text-dark" style={{ width: 150 }}>Cocktail</span></a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex mx-2 py-2 border border-dark bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5"><span className="text-dark" style={{ width: 150 }}>Buffet</span></a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e2} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e2} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e3} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e3} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e4} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e4} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e5} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Cocktail</h4>
                                                    <a href={e5} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e6} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e6} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e7} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e7} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e8} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e8} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e2} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e2} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e3} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e3} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e4} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Cocktail</h4>
                                                    <a href={e4} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e6} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e6} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e5} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e5} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                        <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e7} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e7} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e3} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e3} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e8} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e8} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e5} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Cocktail</h4>
                                                    <a href={e5} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e6} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e6} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e4} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e4} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade show p-0">
                        <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e2} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e2} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e3} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e3} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e4} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e4} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e5} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Cocktail</h4>
                                                    <a href={e5} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e6} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e6} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e7} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e7} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e8} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e8} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" className="tab-pane fade show p-0">
                        <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e1} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e1} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="{e2" alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e2} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e3} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e3} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e4} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e4} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e5} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Cocktail</h4>
                                                    <a href={e5} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src="{6}" alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Wedding</h4>
                                                    <a href={e6} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e7} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Buffet</h4>
                                                    <a href={e7} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 wow " >
                                            <div className="event-img position-relative">
                                                <img className="img-fluid rounded w-100" src={e8} alt=""/>
                                                <div className="event-overlay d-flex flex-column p-4">
                                                    <h4 className="me-auto">Corporate</h4>
                                                    <a href={e8} data-lightbox="event-1" className="my-auto"><i className="fas fa-search-plus text-dark fa-2x" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Events