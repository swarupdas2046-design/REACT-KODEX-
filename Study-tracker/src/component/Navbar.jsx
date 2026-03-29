import React from "react";
import { Plus, BookOpen } from "lucide-react";
import { useContext } from "react";
import { AllDataContext } from "../context/UserContext";

 const Navbar = () => {
  let {setToggel,toggel} = useContext(AllDataContext)
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-950 shadow-lg fixed top-0 left-0 w-full z-10">
      <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2 text-white">
        <BookOpen className="text-blue-400" /> Study Tracker 
      </h1>

      <button  onClick={()=>{
          setToggel((prev)=>!prev)
      }}
       className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl transition-all duration-300 shadow-md text-white active:scale-95 cursor-pointer">
        <Plus size={18} /> Add Session
      </button>
    </div>
  );
};

export default Navbar