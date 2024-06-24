import React from 'react'
import s1 from './image/s1.jpg'
import s2 from './image/s2.jpg'
import s3 from './image/s3.jpg'
import s4 from './image/s4.jpg'

function Team(){
    return(
        <>
            <div id='team' className="container-fluid team py-6">
                <div className="container">
                    <div className="text-center wow " >
                        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-dark rounded-pill px-4 py-1 mb-3">Our Team</small>
                        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow " >
                            <div className="team-item rounded">
                                    <img className="img-fluid rounded-top " src={s1} alt="" />
                                <div className="team-content text-center py-3 bg-black rounded-bottom">
                                    <h4 className=""style={{color:"#D4A762"}}>Henry</h4>
                                    <p className="text-white mb-0">Decoration Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow " >
                            <div className="team-item rounded">
                                    <img className="img-fluid rounded-top " src={s2} alt="" />
                                <div className="team-content text-center py-3 bg-black rounded-bottom">
                                    <h4 className="" style={{color:"#D4A762"}}>Adam Smith</h4>
                                    <p className="text-white mb-0">Head Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow " >
                            <div className="team-item rounded">
                                    <img className="img-fluid rounded-top " src={s3} alt="" />
                                <div className="team-content text-center py-3 bg-black rounded-bottom">
                                    <h4 className="" style={{color:"#D4A762"}}>Martin Hill</h4>
                                    <p className="text-white mb-0">Kitchen Porter</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow " >
                            <div className="team-item rounded">
                                    <img className="img-fluid rounded-top " src={s4} alt="" />
                                <div className="team-content text-center py-3 bg-black rounded-bottom">
                                    <h4 className="" style={{color:"#D4A762"}}>Jemes Born</h4>
                                    <p className="text-white mb-0">Executive Chef</p>
                                </div>
                                <div className="team-icon d-flex flex-column justify-content-center m-4">
                                    <a className="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fas fa-share-alt" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-facebook-f" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-twitter" /></a>
                                    <a className="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i className="fab fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Team