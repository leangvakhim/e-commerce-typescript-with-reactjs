// import React from 'react'
import Sofa from "../asset/images/sofa.png";
import Envelop from "../asset/images/envelope-outline.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-section">
			<div className="container relative">

				<div className="sofa-img">
					<img src={Sofa} alt="Image" className="img-fluid"/>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src={Envelop} alt="Image" className="img-fluid"/></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Enter your name"/>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Enter your email"/>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary">
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul className="list-unstyled custom-social">
							<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

                    <div className="col-lg-8 d-flex justify-content-center justify-content-lg-end">
                        <div className="links-wrap text-center text-md-end">
                            <div className="col-12 col-sm-6 col-md-3 mx-auto mx-sm-4 ms-lg-auto">
                                <ul className="list-unstyled px-4">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							<p className=" text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. Modified By <a href="https://leang-vakhim-portfolio.vercel.app/">Leang Vakhim</a>
                            </p>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer