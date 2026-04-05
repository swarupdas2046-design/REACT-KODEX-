import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='min-h-full'>
    <h1 className='text-3xl text-pink-600 font-bold'>This is Authentication Page</h1>
    <Outlet/>
    </div>
  )
}

export default AuthLayout
