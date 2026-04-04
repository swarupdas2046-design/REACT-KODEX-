import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { ProductContext } from '../context/Cartcontext'

const ProductCard = ({product,qnty}) => {
    let {setCart,cart,IncrementLogic,DecrementLogic,AddtoCart} = useContext(ProductContext)


      let okay = cart.find((elem) => elem.id===product.id)

    let navigate = useNavigate()
  return (
    <div className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div
        >
            <img  onClick={()=>navigate(`/productdetails/${product.id}`)}
          src={product.images[0]}
          alt={product.title}
          className="w-full h-52 object-cover " 
        />
        </div>
      

        {/* Availability Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
            product.availabilityStatus === "In Stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        {/* Brand + Category */}
        <p className="text-sm text-gray-500">
        <span className='font-bold text-gray-600'>{product.brand}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-indigo-600">
            ₹{product.price}
          </span>
        </div>

        {/* Warranty */}
        <p className="text-xs text-gray-400 mt-1">
          🛡️ {product.warrantyInformation}
        </p>
        <div className="flex gap-2 mt-4">
          {/* <button onClick={AddtoCart} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            Add to Cart
          </button> */}
            {okay?<div className='flex gap-3'>
              <p onClick={()=>{IncrementLogic(product.id)}} className='px-3 font-bold h-fit pb-1.5 rounded bg-green-600'>+</p> 
              <p>{qnty || 0}</p>
              <p onClick={()=>{DecrementLogic(product.id)}} className='px-3 font-bold h-fit pb-1.5 rounded bg-red-600'>-</p>
            </div>:<button onClick={()=>{AddtoCart(product)}} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">
            Add to Cart
          </button>}
         
        </div>
      </div>
    </div>
  )
}

export default ProductCard
