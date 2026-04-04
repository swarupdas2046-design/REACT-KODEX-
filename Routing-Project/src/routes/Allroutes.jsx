import React from 'react'
import {Routes,Route} from 'react-router'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Auth from '../pages/Auth'
import Login from '../pages/Login'
import Register from '../pages/Register'
const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/productdetails/:id' element={<ProductDetails/>} />

            <Route path='/auth' element={<Auth/>}>

            <Route index path='' element={<Login/>} />
            <Route path='register' element={<Register/>} />

            </Route>

        </Routes>
    </div>
  )
}

export default Allroutes
