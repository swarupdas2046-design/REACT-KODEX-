import React, { createContext, useState } from 'react'
export let UserContext = createContext()
const AllContext = ({children}) => {
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem('reg-user'))||[])
  const [loggedUser, setLoggedUser] = useState(null)
  return <UserContext.Provider value={{registeredUser, setRegisteredUser,loggedUser, setLoggedUser}}>
    {children}
  </UserContext.Provider>
}

export default AllContext
