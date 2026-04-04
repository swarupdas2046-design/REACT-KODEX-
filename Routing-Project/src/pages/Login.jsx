import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {useForm} from 'react-hook-form'
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate()
   let {register,handleSubmit,reset,formState:{errors}} = useForm()
  let handaleFormSubmit = (data)=>{
      console.log(data);
      reset()
      toast.success('Login Successful')
   }
  return (
   
    
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(handaleFormSubmit)} className="flex flex-col gap-4">
          
          {/* Email */}
          <input {...register('email',{required:'please enter your email'})}
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
           {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          {/* Password */}
          <input {...register('password',{required:'please enter your password'})}
            type="password"
            placeholder="Enter your password"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          {/* Button */}
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        {/* Bottom line */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <span onClick={()=>{
            navigate('/auth/register')
          }} className="text-indigo-600 font-medium hover:underline cursor-pointer">
            Go to Register
          </span>
        </p>

      </div>
      

  );
};

export default Login;