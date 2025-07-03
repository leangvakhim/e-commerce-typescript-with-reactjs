// import React from 'react'
import Cart from '../asset/images/cart.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
			<div className="container">
				<Link className="navbar-brand" to="/home">E-commerce<span>.</span></Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className={path === '/home' ? "nav-item active" : ""}><Link className="nav-link" to="/home">Home</Link></li>
						<li className={path === '/shop' ? "nav-item active" : ""}><Link className="nav-link" to="/shop">Shop</Link></li>
						<li className={path === '/about' ? "nav-item active" : ""}><Link className="nav-link" to="/about">About us</Link></li>
						<li className={path === '/contact' ? "nav-item active" : ""}><Link className="nav-link" to="/contact">Contact us</Link></li>
					</ul>

					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						{/* <li><a className="nav-link" href="#"><img src="images/user.svg"/></a></li> */}
						<li><Link className="nav-link" to="/cart"><img src={Cart} /></Link></li>
					</ul>
				</div>
			</div>
		</nav>
    )
}

export default Header