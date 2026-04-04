import React from "react";
import { Link, NavLink } from "react-router";

const Login = () => {
  return (
   
    
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="flex flex-col gap-4">
          
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Button */}
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        {/* Bottom line */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <NavLink to="/auth/register" className="text-indigo-600 font-medium hover:underline">
            Go to Register
          </NavLink>
        </p>

      </div>
      

  );
};

export default Login;