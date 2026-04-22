import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { axiosInstance } from '../config/axiosInstance'
import { useSelector } from 'react-redux'

const Shop = () => {
    const [ProductData, setProductData] = useState([])
    let {cartItems,Theme} = useSelector((store)=>store.HoleCart)
    console.log('from cart items at shop file --->',cartItems);
    
    useEffect(()=>{
        (async()=>{
            try {
                let response = await axiosInstance.get('/products')
                console.log(response.data);
                setProductData(response.data)
            } catch (error) {
                console.error(error);
            }
        })()
    },[])
  return (
     <div className={`${Theme?'bg-black text-white':'bg-white text-black'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4`}>
        {ProductData.map((elem)=>{
            let isAdded = cartItems.find((item)=>item.id===elem.id)
            return <Product key={elem.id} product={elem} quantity={isAdded?.quantity}/>
        })}
    </div>
  )
}

export default Shop
