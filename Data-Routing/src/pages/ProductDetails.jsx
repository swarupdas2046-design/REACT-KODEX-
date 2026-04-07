import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AxiosInstance } from "../config/Axiosintence";

const ProductDetails = () => {
  let { id } = useParams();
  
  // Initialize as null to easily check if data has loaded
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  let getData = async () => {
    try {
      setLoading(true);
      let res = await AxiosInstance.get(`/products/${id}`);
      
      // Axios stores the JSON payload in the .data property
      setDetails(res.data); 
      setMainImage(res.data.images[0]); // Set the first image as the default
      
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  // Show a loading screen while fetching data
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Fallback if no product is found
  if (!details) {
    return <div className="text-center mt-20 text-xl font-semibold">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Left Column: Image Gallery */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="w-full bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center p-4 h-96">
            <img 
              src={mainImage} 
              alt={details.title} 
              className="max-h-full object-contain drop-shadow-xl"
            />
          </div>
          
          {/* Thumbnail row */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {details.images.map((img, index) => (
              <button 
                key={index} 
                onClick={() => setMainImage(img)}
                className={`w-24 h-24 shrink-0 bg-gray-50 rounded-xl p-2 border-2 transition-all ${
                mainImage === img ? "border-indigo-600" : "border-transparent hover:border-gray-300"
                }`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Information */}
        <div className="md:w-1/2 flex flex-col">
          <span className="text-sm text-indigo-600 font-semibold tracking-widest uppercase">
            {details.brand} • {details.category}
          </span>
          
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {details.title}
          </h1>
          
          {/* Rating & Stock */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1 text-yellow-400">
              <span className="text-lg font-bold text-gray-900">{details.rating}</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm text-gray-500">|</span>
            <span className={`text-sm font-medium ${details.stock > 0 ? "text-green-600" : "text-red-600"}`}>
              {details.availabilityStatus} ({details.stock} left)
            </span>
          </div>

          <p className="mt-6 text-3xl font-bold text-gray-900">
            ${details.price}
            {details.discountPercentage > 0 && (
              <span className="ml-3 text-lg font-medium text-gray-400 line-through">
                ${(details.price / (1 - details.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </p>

          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            {details.description}
          </p>

          {/* Additional Info Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-b border-gray-200 py-6">
            <div>
              <p className="text-sm text-gray-500">Shipping</p>
              <p className="font-medium text-gray-900">{details.shippingInformation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Warranty</p>
              <p className="font-medium text-gray-900">{details.warrantyInformation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">SKU</p>
              <p className="font-medium text-gray-900">{details.sku}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Return Policy</p>
              <p className="font-medium text-gray-900">{details.returnPolicy}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition duration-200 shadow-md shadow-indigo-200">
              Add to Cart
            </button>
            <button className="flex-1 bg-white hover:bg-gray-50 text-indigo-600 font-bold py-4 px-8 rounded-xl border-2 border-indigo-600 transition duration-200">
              Buy Now
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;