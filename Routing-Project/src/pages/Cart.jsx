import React, { useContext } from 'react'
import { ProductContext } from '../context/Cartcontext'
import ProductCard from '../components/ProductCard';

const Cart = () => {
    let {cart} = useContext(ProductContext)
    console.log(cart);
    
  return (
    <div className=' mt-20 sm:mt-0 sm:p-5  grid grid-cols-1 sm:grid-cols-4 gap-3'>
            {cart.map((elem)=>{
                return <ProductCard key={elem.id} product={elem}  qnty={elem.qnty}  />
            })}
    </div>
  )
}

export default Cart
