// import React from 'react'
import Header from '../Component/Header'
import HomeBanner from '../Component/Home/HomeBanner'
import HomeProduct from '../Component/Home/HomeProduct'
import ChooseUs from '../Component/ChooseUs'
import Footer from '../Component/Footer'
import AboutTestimonial from '../Component/Testimonial'

const Homepage = () => {
    return (
        <>
		    <Header/>
            <HomeBanner/>
            <HomeProduct/>
            <ChooseUs/>
            <AboutTestimonial/>
            <Footer/>
        </>
    )
}

export default Homepage