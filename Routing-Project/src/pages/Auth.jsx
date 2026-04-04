import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div className="h-125 flex flex-col gap-3.5 items-center justify-center mt-35 sm:mt-5 px-4 ">
      

    <Outlet/>
    </div>
  )
}

export default Auth
