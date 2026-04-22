import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product';

const Cart = () => {

    let {cartItems} = useSelector((store)=>store.HoleCart)
    console.log(cartItems);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
    {
        cartItems.map((elem)=>{
            return <Product key={elem.id} product={elem} quantity={elem.quantity}/>
        })
    }
    </div>
  )
}

export default Cart
