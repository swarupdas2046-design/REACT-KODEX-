import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-full px-5 flex items-center justify-between bg-amber-100 h-[10%]'>
        <p className='text-3xl font-bold text-green-600'>logo</p>

        <div className='flex gap-3'>
            <NavLink to='/' className='font-semibold text-2xl text-pink-500'>Home</NavLink>
            <NavLink to='/about' className='font-semibold text-2xl text-green-500'>About</NavLink>
            <NavLink to='/contact' className='font-semibold text-2xl text-blue-500'>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar
