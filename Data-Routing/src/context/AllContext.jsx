import React, { createContext, useContext, useState } from 'react'
  let UserContext = createContext()
const AllContext = ({children}) => {
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem('reg-user'))||[])

  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('logged-user'))||null)
  
  return <UserContext.Provider value={{registeredUser, setRegisteredUser,loggedUser, setLoggedUser}}>
    {children}
  </UserContext.Provider>
  
}

export default AllContext

export let useAuth = ()=> useContext(UserContext);