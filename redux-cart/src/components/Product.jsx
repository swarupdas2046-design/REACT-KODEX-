import React from "react";
import {useDispatch} from 'react-redux'
import { AddToCart, RemoveCart, DecrementQuantity } from "../features/CartSlice";
import { toast } from "react-toastify";
import { useLocation } from "react-router";
const Product = ({ product , quantity }) => {
  let {pathname} = useLocation()
  // console.log(pathname);
  
  let dispatch = useDispatch()
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-linear-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          {product.category}
        </span>
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-500 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2 group-hover:text-pink-600 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
           <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill={
                  i < Math.round(product.rating?.rate || 4)
                    ? "currentColor"
                    : "none"
                }
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-2">
            ({product.rating?.count || 0})
          </span>
         
          </div>
          {pathname=='/cart'&&<p className="text-gray-500 text-sm font-medium mr-3.5">Quantity: {quantity}</p>}
        
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          {pathname=='/cart'?<button onClick={()=>{dispatch(RemoveCart(product))
          toast.success('cart removed successful')

          }} className="bg-linear-to-r cursor-pointer from-red-500 to-purple-800 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            remove from Cart
          </button>: quantity? <div className="flex items-center gap-3">
            <p onClick={()=>{dispatch(AddToCart(product))}} className="px-4 py-1.5 active:scale-95 rounded-full bg-green-500 cursor-pointer  font-bold">+</p>
            <p className="px-4 py-1.5 rounded-full bg-white text-black font-bold">{quantity}</p>
            <p onClick={()=>{dispatch(DecrementQuantity(product))}} className="px-4 py-1.5 active:scale-95 rounded-full bg-red-500  cursor-pointer font-bold">-</p>
        </div> : <button onClick={()=>{dispatch(AddToCart(product))
          toast.success('cart added successful')

          }} className="bg-linear-to-r cursor-pointer from-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Product;
