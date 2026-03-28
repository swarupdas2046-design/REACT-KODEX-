import React from 'react'
import User_Form from './component/User_Form'
import StudyCard from './component/StudyCard'
import StudyFormModal from './component/StudyFormModal'
import  Navbar  from './component/Navbar'
import { useContext } from 'react'
import { AllDataContext } from './context/UserContext'
import { Search, SearchIcon } from "lucide-react";
const App = () => {
  let {toggel,maindata} = useContext(AllDataContext)
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937,_#020617)] pt-15 ">
      <Navbar /> 


      {toggel? <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {maindata.map((elem)=>{
          return <StudyCard key={elem.id} elem={elem}/>
        })}

      </div>:<StudyFormModal />}

     

      
    </div>
  )
}

export default App
