import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../features/dashboard/components/Navbar'
import BreadCrums from '../../shared/components/BreadCrums'

const DashboardLayout = () => {
  return (
    <div className='h-screen grid grid-cols-[1fr_7fr] '>
    <Navbar/>
    <div className='p-4 overflow-auto'>
      <BreadCrums/>
    <Outlet/>
    </div>
    </div>
  )
}

export default DashboardLayout
