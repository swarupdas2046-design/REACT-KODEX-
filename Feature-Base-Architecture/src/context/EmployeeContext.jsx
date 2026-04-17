import React, { createContext, useEffect, useState } from 'react'
import { Children } from 'react'
import { LocalStore } from '../utils/LocalStorage'
export let Employee = createContext()
const EmployeeContext = ({children}) => {
    const [registeredEmployee, setRegisteredEmployee] = useState([])
    useEffect(()=>{
    let data = LocalStore.get('reg-employee')
    setRegisteredEmployee(()=>(data ? data : []))
    },[])
  return <Employee.Provider value={{registeredEmployee, setRegisteredEmployee}}>
    {children}
  </Employee.Provider>
}

export default EmployeeContext
