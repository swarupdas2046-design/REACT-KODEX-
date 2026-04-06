import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AllContext';
import { toast } from 'react-toastify';
const Register = () => {

    let {registeredUser, setRegisteredUser} = useAuth()

    let navigate = useNavigate()

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let HandelFormSubmit = (data) => {
    let AddUser = [...registeredUser,data]
    setRegisteredUser(AddUser)
    localStorage.setItem('reg-user',JSON.stringify(AddUser)) 
    toast.success('congratulation Registered successful')
    reset();
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us today! Please fill in your details.
          </p>
        </div>

        {/* Form */}
        <form  onSubmit={handleSubmit(HandelFormSubmit)} className="mt-8 space-y-5">
          <div className="rounded-md shadow-sm space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input {...register("name", { required: "Name required" })}
                id="name"
                type="text"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            {errors.name&&<p className="text-red-800 font-semibold">{errors.name.message}</p>}
            {/* Email Field */}
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input {...register("email", { required: "Email required" })}
                id="email-address"
                type="email"
                autoComplete="email"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="name@example.com"
              />
            </div>
            {errors.email&&<p className="text-red-800 font-semibold">{errors.email.message}</p>}
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input {...register("password", {
                required: "fill the Password",
                minLength: { value: 6, message: "minimum 6 Characters" },
                })}
                id="password"
                type="password"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
{errors.password&&<p className="text-red-800 font-semibold">{errors.password.message}</p>}
            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input {...register("confirm", {
                required: "confirm the Password",
                minLength: { value: 6, message: "minimum 6 Characters" },
                })}
                id="confirm-password"
                type="password"
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
              {errors.confirm&&<p className="text-red-800 font-semibold">{errors.confirm.message}</p>}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <span onClick={()=>{navigate('/')}} className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register