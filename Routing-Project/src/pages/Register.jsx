import React from "react";
import { Link, useNavigate } from "react-router";
import {useForm} from 'react-hook-form'
import { toast } from "react-toastify";
const Register = () => {
  let navigate = useNavigate()
    let {register,handleSubmit,reset,formState:{errors}} = useForm()
      
  return (

      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative z-10">
        
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit((data)=>{
            console.log(data);
            toast.success("Registration successful! Welcome to the family.")
            reset()
            
        })} className="flex flex-col gap-4">
          
          {/* Name */}
          <input 
            {...register('name',{required:'please enter your name'})}
            type="text"
            placeholder="Enter your name"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
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
            placeholder="Create password"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          {/* Confirm Password */}
          <input {...register('confirm',{required:'please Confirm your password'})}
            type="password"
            placeholder="Confirm password"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.confirm && <p className='text-red-500'>{errors.confirm.message}</p>}
          {/* Button */}
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Register
          </button>
        </form>

        {/* Bottom line */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <span onClick={()=>{
            navigate('/auth')
            console.log('okay ji ');
            
          }} className="text-indigo-600 font-medium hover:underline cursor-pointer">
            Go to Login
          </span>
        </p>

      </div>
  
  );
};

export default Register;