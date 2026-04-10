import React from 'react'
import { LuPenLine } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import { GetAuth } from '../context/AllContext';
import { Bounce, toast } from 'react-toastify';
const Login = () => {
    let navigate = useNavigate();
    let {regUser, setRegUser, logUser, setLogUser} = GetAuth()
    let { register,handleSubmit,reset,formState:{errors}} = useForm()
    let HandleFormSubmit = (data) => {
        console.log(data);
        
        let FindUser = regUser.find((elem)=> elem.password === data.password)
        if (FindUser) {
            localStorage.setItem('log-user',JSON.stringify(FindUser))
            setLogUser(FindUser)
            navigate('/')
            toast.success('Login successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
        } else {
            toast.error('Invalid password!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        reset()
    }
    errors.email || errors.password ? toast.error('Please fill all the required fields!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    }) : ''

return (
    <div className="h-[90%] flex items-center justify-center bg-black text-white">
    
    <div className=" w-100 lg:w-105  bg-[#0A0E11] border border-gray-800 rounded-2xl p-6 shadow-lg">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#03927a] flex items-center justify-center">
            <span className=" text-xl"><LuPenLine size={26} className='text-black' /></span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">
          Welcome Back
        </h2>
        <p className="text-gray-400 text-sm text-center mt-1 mb-6">
          Sign in to your account to continue
        </p>

        {/* Form */}
        <form  onSubmit={handleSubmit(HandleFormSubmit)} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input {...register("email",{required:true})}
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input {...register("password",{required:true})}
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-[#03927a] hover:bg-[#007E69] transition rounded-lg py-2 font-medium">
            Sign In
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")} className="text-[#007E69] hover:underline cursor-pointer">
              Sign up
            </span>
          </p>

        </form>
    </div>
    
    </div>
)
}

export default Login
