// import React from 'react'

import CartBanner from "../Component/Cart/CartBanner"
import CartListProduct from "../Component/Cart/CartListProduct"
import Footer from "../Component/Footer"
import Header from "../Component/Header"

const CartPage = () => {
    return (
        <>
            <Header/>
            <CartBanner/>
            <CartListProduct/>
            <Footer/>
        </>
    )
}

export default CartPage