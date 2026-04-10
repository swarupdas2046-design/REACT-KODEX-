import React from 'react'
import { GetAuth } from '../context/AllContext'
import { Navigate } from 'react-router'

const ProtectedAuth = () => {
    let {logUser} = GetAuth()
        if (logUser) {
            return <Navigate />
        }

  return 
}

export default ProtectedAuth
