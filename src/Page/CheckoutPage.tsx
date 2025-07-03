// import React from 'react'

import CheckoutBanner from "../Component/Checkout/CheckoutBanner"
import CheckoutForm from "../Component/Checkout/CheckoutForm"
import Footer from "../Component/Footer"
import Header from "../Component/Header"

const CheckoutPage = () => {
    return (
        <>
            <Header/>
            <CheckoutBanner/>
            <CheckoutForm/>
            <Footer/>
        </>
    )
}

export default CheckoutPage