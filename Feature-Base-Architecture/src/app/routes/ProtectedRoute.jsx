import React from 'react'
import { UseAuthContext } from '../../shared/hooks/UseAuthContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    let {loggedAdmins} = UseAuthContext()
    if (!loggedAdmins) {
    return  <Navigate to='/' />
    }
return <Outlet/>
}

export default ProtectedRoute
