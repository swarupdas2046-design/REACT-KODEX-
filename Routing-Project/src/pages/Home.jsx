import  { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard';
import React, { useContext } from 'react'
import { ProductContext } from '../context/Cartcontext'

const Home = () => {
   let {cart} = useContext(ProductContext)
    const [product, setProduct] = useState([])
    console.log(product);
    console.log(cart);
    
useEffect(()=>{
    (async()=>{
        try {
            let res = await axios.get("https://dummyjson.com/products")
            setProduct(res.data.products)
        } catch (error) {
            console.log('error massege',error);
        }
    })()
},[])


    return (
    <div className=' grid grid-cols-1 mt-15 sm:mt-0 sm:grid-cols-4 gap-2.5 p-5 '>
        {product.map((elem)=>{

        let Productqantity = cart.find((val)=> val.id == elem.id)
        return <ProductCard key={elem.id} product={elem}  qnty={Productqantity ? Productqantity.qnty : 0}  />
        })}
    </div>
  ) 
} 

export default Home