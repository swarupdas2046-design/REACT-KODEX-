import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayouts = () => {
  return (
    <div className='h-screen'>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default MainLayouts
