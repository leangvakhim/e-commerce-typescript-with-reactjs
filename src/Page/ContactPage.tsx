// import React from 'react'

import ContactBanner from "../Component/Contact/ContactBanner"
import ContactForm from "../Component/Contact/ContactForm"
import Footer from "../Component/Footer"
import Header from "../Component/Header"

const ContactPage = () => {
    return (
        <>
		    <Header/>
            <ContactBanner/>
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default ContactPage