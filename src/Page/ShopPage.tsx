// import React from 'react'

import Footer from "../Component/Footer"
import Header from "../Component/Header"
import ShopBanner from "../Component/Shop/ShopBanner"
import ShopProduct from "../Component/Shop/ShopProduct"

const ShopPage = () => {
    return (
        <>
		    <Header/>
            <ShopBanner/>
            <ShopProduct/>
            <Footer/>
        </>
    )
}

export default ShopPage