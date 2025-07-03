// import React from 'react'
import Couch from '../../asset/images/couch.png';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
                            <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <p><Link to="/shop" className="btn btn-secondary me-2">Shop Now</Link></p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={Couch} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner