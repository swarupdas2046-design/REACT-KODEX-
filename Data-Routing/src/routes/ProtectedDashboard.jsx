import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AllContext'
import { toast } from 'react-toastify'

const ProtectedDashboard = () => {
    let {loggedUser} = useAuth()
    if (!loggedUser) {
        toast.error(' Please Login First')
    return <Navigate to='/'/>
    }

return <Outlet/>
}

export default ProtectedDashboard
