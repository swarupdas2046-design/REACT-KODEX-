import React from 'react'
import { useNavigate } from 'react-router'

const ProductCard = ({product}) => {
    let navigate = useNavigate()
return (
    <div className="max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
    
      {/* Product Image */}
    <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img onClick={()=>{navigate(`prodeuctdetails/${product.id}`)}}
        src={product.images[0]} 
        alt={product.title} 
        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
    </div>

      {/* Product Details */}
    <div className="p-5">
        {/* Category */}
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
        {product.category}
        </span>
        
        {/* Title */}
        <h3 className="mt-1 text-lg line-clamp-1 font-bold text-gray-900 truncate">
        {product.title}
        </h3>
        
        {/* Price */}
        <p className="mt-2 text-xl font-extrabold text-gray-900">
        $ {product.price}
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
        <button 
        
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm shadow-sm"
        >
            Add to Cart
        </button>
        
        <button 
            className="flex-1 bg-white hover:bg-red-50 text-red-600 font-medium py-2.5 px-4 rounded-lg border border-red-200 transition-colors duration-200 text-sm"
        >
            Remove
        </button>
        </div>
    </div>

    </div>
)
}

export default ProductCard