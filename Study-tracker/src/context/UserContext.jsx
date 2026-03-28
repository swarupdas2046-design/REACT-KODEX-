import React, { Children, createContext, useState } from 'react'
export let AllDataContext = createContext()
const UserContext = ({children}) => {
    const [toggel, setToggel] = useState(true)
    const [maindata, setMaindata] = useState(JSON.parse(localStorage.getItem('study')) ||[])
    
    let afterDelete = (elem)=>{
        let filterData = maindata.filter((data)=> data.id !== elem.id)
        console.log(filterData);
            localStorage.setItem('study',JSON.stringify(filterData))
            setMaindata(filterData)
        }
    return (
        <AllDataContext.Provider value={{maindata,setMaindata,toggel, setToggel,afterDelete}}>
            {children}
        </AllDataContext.Provider>
)
}
 
export default UserContext
