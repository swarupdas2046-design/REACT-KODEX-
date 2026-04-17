import React, { createContext, useEffect, useState } from 'react'
import { Children } from 'react'
import { LocalStore } from '../utils/LocalStorage'
export let Auth = createContext()
const AuthContext = ({children}) => {
    const [registerAdmins, setRegisterAdmins] = useState([])
    const [loggedAdmins, setLoggedAdmins] = useState(null)
    console.log('register data ->',registerAdmins);
    console.log('login user ->',loggedAdmins)
    
    useEffect(()=>{
        let data = LocalStore.get('reg-admins')
        setRegisterAdmins(data)
        let LoginData = LocalStore.get('log-admins')
        setLoggedAdmins(LoginData)
    },[])



return <Auth.Provider value={{registerAdmins, setRegisterAdmins,loggedAdmins, setLoggedAdmins}}>
    {children}
</Auth.Provider>
}

export default AuthContext
