import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  let navigate = useNavigate()
    const [singleproduct, setSingleproduct] = useState({})
    let {id} = useParams()
    console.log(id);
    
    useEffect(()=>{
        if (id) {
            (async()=>{
        try {
            let res = await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(res.data)
            setSingleproduct(res.data)
        } catch (error) {
            console.log('error massege',error);
        }
    })() 
        }

},[id])

  return (
     <div className="h-full mt-6 p-6 flex justify-center items-center">
      
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl p-6 grid md:grid-cols-2 gap-8">
        
        {/* 🔥 Image Section */}
        <div className="w-full">
          <img
            src={singleproduct.thumbnail}
            alt={singleproduct.title}
            className="w-full h-87.5 object-cover rounded-xl"
          />
        </div>

        {/* 🔥 Details Section */}
        <div className="flex flex-col gap-4">
          
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800">
            {singleproduct.title}
          </h1>

          {/* Discount */}
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full w-fit">
            {singleproduct.discountPercentage}% OFF
          </span>

          {/* Description */}
          <p className="text-gray-600 text-sm">
            {singleproduct.description}
          </p>

          {/* Weight */}
          <p className="text-sm text-gray-500">
            ⚖️ Weight: <span className="font-medium">{singleproduct.weight}</span>
          </p>

          {/* Stock */}
          <p
            className={`text-sm font-medium ${
              singleproduct.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {singleproduct.stock > 0 ? "In Stock" : "Out of Stock"} ({singleproduct.stock})
          </p>

          {/* Minimum Order */}
          <p className="text-sm text-gray-500">
            Minimum Order: {singleproduct.minimumOrderQuantity}
          </p>

          {/* ⭐ Reviews */}


          {/* Buttons */}
          <div className="w-full mt-4 flex items-center">
            {/* <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              Buy Now
            </button>

            <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition">
              Add to Cart
            </button> */}
            <button onClick={()=>{navigate('/')}} className="flex-1 w-[80%] cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
              Back to home
            </button>

          </div>
        </div>
      </div>
    </div>
  )

}

export default ProductDetails
