// import React from 'react'

import AboutBanner from "../Component/About/AboutBanner"
import AboutTeam from "../Component/About/AboutTeam"
import Testimonial from "../Component/Testimonial"
import ChooseUs from "../Component/ChooseUs"
import Footer from "../Component/Footer"
import Header from "../Component/Header"

const AboutPage = () => {
    return (
        <>
            <Header/>
            <AboutBanner/>
            <ChooseUs/>
            <AboutTeam/>
            <Testimonial/>
            <Footer/>
        </>
    )
}

export default AboutPage