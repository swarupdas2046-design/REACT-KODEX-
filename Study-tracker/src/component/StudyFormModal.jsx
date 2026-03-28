import React from 'react'
import { useContext } from 'react'
import { AllDataContext } from '../context/UserContext'
import {useForm} from 'react-hook-form'
import { nanoid } from 'nanoid'

const StudyFormModal = () => {
  let {setToggel,maindata,setMaindata}  = useContext(AllDataContext)
    let {register,handleSubmit,reset,formState:{errors}} = useForm()
      let HandleFormSubmit = (data)=>{
          let givendata = [...maindata,{...data,id:nanoid()}]
          localStorage.setItem('study',JSON.stringify(givendata))
          setMaindata(givendata)
          reset()
          setToggel(true)
      }
        return(
                <div className=" z-50 h-full fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md shadow-2xl text-white ">
        <h2 className="text-xl font-semibold mb-4">Add Study Session</h2>

        <form onSubmit={handleSubmit(HandleFormSubmit)} 
        className="flex flex-col gap-2.5">
        
            <input {...register("name",{required:"Please enter name"})}
            type="text"
            placeholder="Swarup Das"
            className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className='text-amber-300'>{errors.name.message}</p>}

          <input {...register("topic",{required:"Please add Topic Name"})}
            type="text"
            placeholder="Topic"
            className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.topic && <p className='text-amber-300'>{errors.topic.message}</p>}
            <select {...register("subject",{required:"Please choose Subject"})} 
            defaultValue={""}
            className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">select Subject</option>
            <option value={"Frontend"}>Frontend</option>
            <option value={"Backend"}>Backend</option>
            <option value={"DSA"}>DSA</option>
            <option value={"DBMS"}>DBMS</option>
            <option value={"OS"}>OS</option>
          </select>
          {errors.subject && <p className='text-amber-300'>{errors.subject.message}</p>}

          {/* Priority Select */}
          <select {...register("difficulty",{required:"Select difficulty"})} 
          defaultValue={""}
          className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">select Difficulty</option>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
          {errors.difficulty && <p className='text-amber-300'>{errors.difficulty.message}</p>}
          {/* Date */}
          <input {...register("date",{required:"Select difficulty"})}
            type="date"
            className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.date && <p className='text-amber-300'>{errors.date.message}</p>}
          
          <textarea {...register("description",{required:"Add description"})}
            placeholder="Description"
            className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <p className='text-amber-300'>{errors.description.message}</p>}
          
          <input {...register("duration",{required:"enter duraction", min:{value:10,message:'minimum 10 munites required'}})}
            type="number"
            placeholder="Duration (e.g. 60 minutes)"
            className="bg-gray-800 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.duration && <p className='text-amber-300'>{errors.duration.message}</p>}
          <div className="flex gap-3 mt-2">
            <button 
              onClick={()=>{
                setToggel(true)
              }}
              type="button"
              className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-xl transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-xl transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
        ) 
}

export default StudyFormModal
