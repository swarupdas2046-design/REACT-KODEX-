import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { useAuth } from '../context/AllContext'

const Navbar = () => {
  let {setLoggedUser} = useAuth()
  return (
    <div className='py-3.5 px-5 flex flex-col justify-between   bg-amber-100 border-r-2 border-black'>
      <div className='px-1.5'>
          <p className='text-3xl font-bold text-black mb-20'>logo</p>

        <div className='flex flex-col gap-4 '>
            <NavLink to='/dashboard' className='font-semibold text-2xl text-pink-500'>Home</NavLink>
            <NavLink to='/dashboard/about' className='font-semibold text-2xl text-green-500'>About</NavLink>
            <NavLink to='/dashboard/contact' className='font-semibold text-2xl text-blue-500'>Contact</NavLink>
        </div>
      </div>

        <button onClick={()=>{
          localStorage.removeItem('logged-user')
          setLoggedUser(null)
        }} className='bg-black py-3 border-none active:scale-95 text-white cursor-pointer rounded-2xl'>Logout</button>
    </div>
  )  
}

export default Navbar
