import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  let navigate = useNavigate()
  const [menu, setmenu] = useState(false);

  return (
    <div className="w-full flex items-center justify-between text-white bg-gray-700/40 z-50 backdrop-blur-md h-[10%] px-5 fixed top-0 ">
      <h3 className="text-3xl font-bold text-amber-950 capitalize">
        Enterprice
      </h3>
      <div className=" hidden sm:flex gap-8 text-2xl font-semibold text-black">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-2xl text-red-600" : "text-2xl text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-2xl text-red-600" : "text-2xl text-black"
          }
        >
          Cart
        </NavLink>
      </div>

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setmenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>

      <div
        className={`  ${menu ? "opacity-100 transition-all ease-linear duration-300 rounded translate-y-2" : "opacity-0 transition-all ease-linear duration-300 rounded  -translate-y-2"} 
 
 absolute md-hidden flex gap-5 flex-col justify-center items-center pl-5  w-full h-125 top-20 left-0 bg-white`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-2xl font-semibold text-red-600" : "text-2xl font-semibold text-black"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-2xl font-semibold text-red-600" : "text-2xl font-semibold text-black"
          }
        >
          Cart 
        </NavLink>

       <NavLink
          to="/auth"
          className={({ isActive }) =>
            isActive ? "text-2xl font-semibold text-red-600" : "text-2xl font-semibold text-black"
          }
        >
          Login 
        </NavLink>


        
      </div>

      <div className=" hidden sm:flex gap-4">
        <button onClick={()=>{navigate('/auth')}} className="px-4 py-2 rounded-xl hover:border-2 hover:bg-transparent hover:text-black font-semibold bg-black text-amber-50 cursor-pointer">
          Login
        </button>
    
      </div>
    </div>
  );
};

export default Navbar;
