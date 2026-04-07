import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div className='h-screen grid grid-cols-[1fr_6fr]'>
    <Navbar/>
    <div className='p-6 overflow-auto h-full'>
    <Outlet/>
    </div>
    </div> 
  )
}

export default MainLayouts
