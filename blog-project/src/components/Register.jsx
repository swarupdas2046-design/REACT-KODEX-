import React, { useContext } from 'react'
import { LuPenLine } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import { GetAuth } from '../context/AllContext';
import { Bounce, toast } from 'react-toastify';
const Register = () => {
    let {regUser, setRegUser} = GetAuth()
    let navigate = useNavigate();
    let {register,handleSubmit,setValue,watch,formState:{errors},reset} = useForm({
        defaultValues: {
            Name: "John Doe",
            accountType: "reader",
        },
    })

    let HandleFormSubmit = (data) => {
        console.log(data);
        
        let UserData = [...regUser,data]
        setRegUser(UserData)
        localStorage.setItem("reg-user",JSON.stringify(UserData))
        toast.success('register successful!', {
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
        navigate('/login')
        reset();

    }
    errors.Name || errors.email || errors.password || errors.confirmPassword ? toast.error('All fields are required!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    }):"";

    let selectedType = watch("accountType");

return (
    <div className="min-h-full pt-9 flex items-center justify-center bg-black text-white">
    
    <div className=" w-100 lg:w-107.5 mb-10 bg-[#0A0E11] border border-gray-800 rounded-2xl p-6 shadow-lg">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-[#03927a] flex items-center justify-center">
            <span className="text-xl"><LuPenLine size={26} className='text-black' /></span>
        </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center">
        Create an Account
        </h2>
        <p className="text-gray-400 text-sm text-center mt-1 mb-6">
        Join Inkwell to start reading or writing
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(HandleFormSubmit)} className="space-y-4">
        
          {/* Name */}
        <div>
            <label className="text-sm text-gray-300">Name</label>
            <input {...register("Name",{required:true})}
            type="text"
            placeholder="John Doe"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400"
            />
        </div>

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
            placeholder="Create a password"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400"
            />
        </div>

          {/* Confirm Password */}
        <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input {...register("confirmPassword",{required:true})}
            type="password"
            placeholder="Confirm your password"
            className="w-full mt-1 px-3 py-2 rounded-lg bg-[#111519] border border-gray-700 focus:outline-none focus:border-green-400"
            />
        </div>

          {/* Account Type */}
        <div>
            <label className="text-sm text-gray-300 mb-2 block">
            Account Type
            </label>

            <div className="flex gap-3">
            
              {/* Reader */}
            <div onClick={()=>{
                setValue("accountType","reader")
            }} className={`flex-1 border border-[#03927a]  rounded-xl p-4 cursor-pointer transition-all ${
            selectedType === 'reader'
                ? 'border-[#00d084] bg-[#1a2e28]' // Selected state (Green border)
                : 'border-gray-700 bg-[#121212 hover:border-gray-500' // Unselected state
            }`}>
                <h3 className="font-semibold">Reader</h3>
                <p className="text-xs text-gray-400">Read articles</p>
            </div>

              {/* Author */}
            <div onClick={()=>{
            setValue("accountType","author")
            }}  className={`flex-1 border border-[#03927a] rounded-xl p-4 cursor-pointer ${
            selectedType === 'author'
                ? 'border-[#00d084] bg-[#1a2e28]' // Selected state (Green border)
                : 'border-gray-700  hover:border-gray-500' // Unselected state
            }`}>
                <h3 className="font-semibold">Author</h3>
                <p className="text-xs text-gray-400">Write & publish</p>
            </div>

            </div>
        </div>

          {/* Button */}
        <button className="w-full bg-[#03927a] hover:bg-[#007E69] transition rounded-lg py-2 font-medium">
            Create Account
        </button>

          {/* Footer */}
        <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="text-[#007E69] hover:underline cursor-pointer">
            Sign in
            </span>
        </p>

        </form>
    </div>
    </div>
)
}

export default Register
