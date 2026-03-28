import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { AllDataContext } from '../context/UserContext'
const User_Form = () => {
 let {maindata,setMaindata} =  useContext(AllDataContext)
let {register,handleSubmit,reset,formState:{errors,isValid}} =  useForm()
let HandelFormSubmit = (data)=>{
    // console.log(data);
    setMaindata(data)
    reset() 
}
console.log(maindata);


return (
    <div className='flex flex-col items-center'>
        <h1>Form</h1>
    <form onSubmit={handleSubmit(HandelFormSubmit)} 
    className='flex flex-col items-center gap-3 p-10 mb-3.5 bg-violet-900 w-[85%] lg:w-[35%] rounded-2xl'>
        <input {...register('name',{required:'please enter name'})}
        className='border-2 rounded-xl outline-0 w-[90%] px-3.5 py-3 mb-1 ' type="text" placeholder="Shivani" />
        {errors.name && <p className='text-red-800'>{errors.name.message}</p> }
        
        <input {...register('email')} 
        className='border-2 rounded-xl outline-0 w-[90%] px-3.5 py-3 mb-1 ' type="email" placeholder="shivani@gmail.com" />
        <input {...register('password')} 
        className='border-2 rounded-xl outline-0 w-[90%] px-3.5 py-3 mb-1 ' type="password" placeholder="Password" />
        <button className='py-3.5 w-[75%] rounded-xl border-none outline-0 bg-cyan-600 text-white active:scale-95 font-semibold  mt-7 cursor-pointer'>Submit</button>
    </form>
    </div>
)
}

export default User_Form
