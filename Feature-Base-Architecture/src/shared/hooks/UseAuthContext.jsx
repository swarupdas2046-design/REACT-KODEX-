import React, { useContext } from 'react'
import { Auth } from '../../context/AuthContext'
import { Employee } from '../../context/EmployeeContext'

export const UseAuthContext = () => useContext(Auth)
export const UseEmployeeContext = () => useContext(Employee)
