import React, { createContext, useContext, useState } from 'react'
let Auth = createContext()
const AllContext = ({children}) => {
    const [regUser, setRegUser] = useState(JSON.parse(localStorage.getItem("reg-user"))||[])
    const [logUser, setLogUser] = useState(JSON.parse(localStorage.getItem("log-user"))||null)
    const [Blog, setBlog] = useState(JSON.parse(localStorage.getItem("blog"))||[])
    const [Publish, setPublish] = useState(JSON.parse(localStorage.getItem("publish"))||[])
    const [Draft, setDraft] = useState(JSON.parse(localStorage.getItem("draft"))||[])
    const [toggle, setToggle] = useState(false)
    const [date, setdate] = useState(new Date().toLocaleDateString());
    // console.log(logUser);
    
  return <Auth.Provider value={{regUser, setRegUser, logUser, setLogUser, Blog, setBlog , Publish, setPublish, date, Draft, setDraft , toggle, setToggle}}>
    {children}
    </Auth.Provider>
}

export default AllContext
export let GetAuth = ()=> useContext(Auth)