import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AllContext'

const ProtectedAuth = () => {

    const {loggedUser} = useAuth()

    if (loggedUser) {
        return <Navigate to='/dashboard'/>
    }

  return <Outlet/>
}

export default ProtectedAuth
