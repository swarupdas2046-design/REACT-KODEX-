import React from "react";
import { Link } from "react-router";
import {useForm} from 'react-hook-form'
const Register = () => {
    let {register,handleSubmit,reset,formState:{errors}} = useForm()
       
  return (
 
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative z-10">
        
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
            reset()
            
        })} className="flex flex-col gap-4">
          
          {/* Name */}
          <input 
            {...register('name')}
            type="text"
            placeholder="Enter your name"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Email */}
          <input {...register('email')}
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Password */}
          <input {...register('password')}
            type="password"
            placeholder="Create password"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Confirm Password */}
          <input {...register('confirm')}
            type="password"
            placeholder="Confirm password"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Button */}
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Register
          </button>
        </form>

        {/* Bottom line */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link to="/auth" className="text-indigo-600 font-medium hover:underline">
            Go to Login
          </Link>
        </p>

      </div>
  
  );
};

export default Register;