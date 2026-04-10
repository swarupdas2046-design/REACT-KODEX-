import React from 'react'
import { GetAuth } from '../context/AllContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedDashboard = () => {
let {logUser} = GetAuth()

// console.log(logUser);

if (logUser.accountType === 'author') {
    return <Outlet/>
}
else{
   return<Navigate to='/'/>
}

}

export default ProtectedDashboard
