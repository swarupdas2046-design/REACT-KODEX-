import React from 'react'
import { UseAuthContext } from '../../shared/hooks/UseAuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    let {loggedAdmins} = UseAuthContext()
    if (loggedAdmins) {
        return <Navigate to='/dashboard' />
    }
  return <Outlet/> 
}

export default PublicRoute
