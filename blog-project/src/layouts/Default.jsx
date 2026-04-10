import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const Default = () => {
  return (
    <div className='w-full h-full bg-black'>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Default
