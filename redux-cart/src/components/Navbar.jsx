import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { TbMenuDeep } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { themeChange } from '../features/CartSlice';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  let dispatch = useDispatch()
 let {Theme} = useSelector((store)=>store.HoleCart)
  return (
    <div className=' bg-gray-700 text-white h-20  px-7 flex items-center justify-between'>
        <h1 className='font-bold text-3xl'>Logo</h1>
        <div className='hidden md:flex gap-8'>
            <NavLink className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/'>Home</NavLink>
            <NavLink className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/about'>About</NavLink>
            <NavLink className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/shop'>Shop</NavLink>
            <NavLink className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/cart'>Cart</NavLink>
        </div>
        
        <TbMenuDeep size={30} className='lg:hidden md:hidden' onClick={()=>{setToggle(!toggle)}} />
          {toggle&& <div className='absolute top-[10%] flex flex-col items-center p-6 gap-4 z-30 right-0 w-[70%] h-full bg-pink-400 transform-translate-x-0 ease-in-out duration-300'> 

            {Theme?<MdDarkMode size={30} onClick={()=>{dispatch(themeChange(false))}}/>:<CiLight size={30} onClick={()=>{dispatch(themeChange(true))}} />}

            <NavLink onClick={()=>{setToggle(false)}} className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/'>Home</NavLink>
            <NavLink onClick={()=>{setToggle(false)}} className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/about'>About</NavLink>
            <NavLink onClick={()=>{setToggle(false)}} className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/shop'>Shop</NavLink>
            <NavLink onClick={()=>{setToggle(false)}} className={({isActive})=>isActive?'text-2xl font-semibold hover:underline text-amber-400':'text-2xl font-semibold'} to='/cart'>Cart</NavLink>
        <button className=' bg-amber-400 px-4 py-2 rounded active:scale-95 font-bold cursor-pointer'>Sign up</button>
        
        </div>}
      
      <div className='hidden md:flex items-center gap-4'>
      {Theme?<MdDarkMode size={30} onClick={()=>{dispatch(themeChange(false))}}/>:<CiLight size={30} onClick={()=>{dispatch(themeChange(true))}} />}

        <button className=' bg-amber-400 px-4 py-2 rounded active:scale-95 font-bold cursor-pointer'>Sign up</button>
      </div>
       
    </div>
  )
}

export default Navbar
