import React, { useState } from 'react'
import Nav from './components/Nav'
import User_Card from './components/User_Card'
import Add_User_Form from './components/Add_User_Form'
  const App = () => {
  const [toggel, setToggel] = useState(true)
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('users'))||[])
  const [edit, setEdit] = useState(null)
  // console.log(userData);
  
    let DeleteData=(id)=>{
      // console.log(id);
      let filterUser = userData.filter((elem)=>elem.id !==id)
        // setUserData((prev)=>prev.filter((elem)=>elem.id!==id))
        setUserData(filterUser)
        localStorage.setItem('users',JSON.stringify(filterUser))
    }
  
  return (
    <div className='min-h-full w-full pt-[7%] bg-black p-5 flex flex-col'>
        {/* <h1 className='text-2xl font-bold '>Hello Shivani...</h1> */}
        <Nav setToggel={setToggel} toggel={toggel}/>

        {toggel?<div className='grow p-3 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-3.5'> 
          {userData.map((elem)=>{
            return <User_Card key={elem.id} user={elem} DeleteData={DeleteData} setEdit={setEdit} setToggel={setToggel} />
          })}
          
          </div>
            :<Add_User_Form setUserData={setUserData} userData={userData} setToggel={setToggel} edit={edit} setEdit={setEdit}/>}
        
    </div>
  )
}

export default App
