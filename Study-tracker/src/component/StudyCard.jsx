import React from 'react'
import { CalendarDays, Clock, User } from "lucide-react";
import { useContext } from 'react';
import { AllDataContext } from '../context/UserContext';
const StudyCard = ({elem}) => {
    let {afterDelete} = useContext(AllDataContext)

    return ( 
      <div className="bg-gray-800 rounded-2xl p-5 shadow-lg hover:scale-105 transition-all duration-300 text-white relative">
      {/* Remove Button */}
      <button  onClick={()=>{
        afterDelete(elem)
      }}
      className="absolute bottom-1.5 right-5 text-xs font-bold cursor-pointer active:scale-95 bg-red-700/20 hover:bg-red-500/40 text-red-400 px-2.5 py-1 rounded-lg transition">
        remove
      </button>

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">{elem.topic}</h2>
        <span className="text-xs bg-blue-500 px-2 py-1 rounded-lg">{elem.subject}</span>
      </div>

      {/* Priority Badge */}
      <div className="mb-2">
        <span className={`text-xs px-2 py-1 rounded-lg ${elem.difficulty=="High" && 'bg-red-500'}  ${elem.difficulty=="Medium" && 'bg-orange-500'}  ${elem.difficulty=="Low" && 'bg-blue-500'}`}>{elem.difficulty}</span>
      </div>

      <p className="text-gray-400 text-sm mb-4">
        {elem.description}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
        <div className="flex items-center gap-1">
          <Clock size={14} /> {elem.duration} minutes
        </div>
        <div className="flex items-center gap-1">
          <User size={14} /> {elem.name}
        </div>
      </div>

      {/* Date */}
      <div className="flex items-center gap-1 text-sm text-gray-400">
        <CalendarDays size={14} /> {elem.date}
      </div>
    </div>
  )
}

export default StudyCard
