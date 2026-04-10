import React, { useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { LuPenLine } from "react-icons/lu";
import { NavLink, useNavigate } from 'react-router';
import { GetAuth } from '../context/AllContext';
import { MdOutlineDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    let {logUser, setLogUser} = GetAuth()
    
    let navigate = useNavigate();
return (
    <div className="sticky text-white top-0 z-50 w-full border-b border-border border-gray-400 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-4'>
        <NavLink className='flex items-center gap-2'>
            <LuPenLine size={26} className='text-[#007E69]' />
            <span className="text-xl font-semibold tracking-tight">Inkwell</span>
        </NavLink>
            
            <div className='flex items-center gap-2'>
                {/* <div className='mr-3 hover:bg-[#007E69]/50 px-3 py-3 rounded-2xl '>
                <IoSunnyOutline  />
                </div> */}
                <div className={` ${logUser ? 'hidden' : 'flex items-center gap-2.5'} `}>
                    <button onClick={() => navigate('/login')} className=' hover:bg-[#007E69]/50 hover:text-black rounded-xl font-medium py-2 px-4 border-none active:scale-95 cursor-pointer'>Login</button>
                <button onClick={() => navigate('/register')} className='bg-[#03927a] hover:bg-[#007E69] text-black  rounded-xl font-medium py-2 px-4 border-none active:scale-95 cursor-pointer'>Sign Up</button>
                </div>

            <div onClick={()=>{ 
                setToggle((prev)=> !prev)
            }} className={` ${logUser ?'flex items-center gap-2.5 hover:bg-[#016b5a]' : 'hidden'} rounded-xl px-2.5 `}>
                <p className='px-4 py-2 rounded-full bg-[#02705e]'>{ logUser? logUser.Name.charAt(0).toUpperCase():''}</p>
                {logUser ? <p className='font-sans'>{logUser.Name}</p>:''}
            </div>

            </div>


        </div>
        <div className={`${toggle?'h-35 w-60 bg-[#0a0e11] rounded-xl absolute bottom-0 translate-y-35 right-0 lg:right-50 ease-linear duration-300 ':'hidden'}`}>

            <div className='px-4 py-1 border-b border-gray-400'>
                <p className='font-sans'>{ logUser &&  logUser.Name}</p>
                <p className='font-sans text-gray-400 text-[13px]'>{logUser && logUser.email}</p>
                <p className='text-gray-400 text-[13px]'>{ logUser && logUser.accountType}</p>
            </div>
            <div onClick={() => navigate('/dashboard')} className={`${logUser && logUser.accountType=='author'?'py-2 px-4 flex items-center gap-1.5 hover:bg-[#007E69]/50 border-b border-gray-400':'hidden'}  `}>
                <MdOutlineDashboard /> Dashboard
            </div>
            <div onClick={()=>{
                localStorage.removeItem('log-user')
                setLogUser(null)
                navigate('/')
                setToggle(false)
            }} className='py-2 px-4 flex items-center rounded-2xl gap-1.5 hover:bg-[#007E69]/50 border-b border-gray-400'>
                <MdLogout /> <p className='text-red-700'>Logout</p>
            </div>
        </div>
    </div>
)
}

export default Navbar
