// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Page/HomePage'
import ShopPage from './Page/ShopPage'
import AboutPage from './Page/AboutPage'
import ContactPage from './Page/ContactPage'
import CartPage from './Page/CartPage'
import CheckoutPage from './Page/CheckoutPage'
import ThankYouPage from './Page/ThankYouPage'
import { CartProvider } from './Component/CartContext'

function App() {

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/thank-you' element={<ThankYouPage/>}/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
