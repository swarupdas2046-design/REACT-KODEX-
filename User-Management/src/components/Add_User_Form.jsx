import React from 'react'
import {useForm} from 'react-hook-form'
import { nanoid } from 'nanoid'
const Add_User_Form = ({setUserData,userData,setToggel,edit,setEdit}) => {
    // console.log('rendering');  
    
    let {register,handleSubmit,reset,formState:{errors,isValid}} = useForm({mode:'onChange',defaultValues:edit})
    let HandelFormSubmit = (data)=>{

        if (edit) {
            // here this is update logic ....
        setUserData((prev)=>{
            let editData =  prev.map((elem)=>{
                return elem.id === edit.id ? {...elem,...data}:elem
            })
            localStorage.setItem('users',JSON.stringify(editData))
            return editData
        }) 
        setEdit(null)
        }
        else{
            // here this is new user logic 
            let givenData = [...userData,{...data,id:nanoid()}]
            setUserData(givenData)
            localStorage.setItem('users',JSON.stringify(givenData))
        }
        setToggel(true)
        reset(); // after form submit the form will be reset 
    }
return (
    <div className='text-white h-fit w-full flex items-center justify-center flex-col gap-3'>
        <h1 className='text-4xl font-semibold text-amber-100'>Add  User</h1>


        <form onSubmit={handleSubmit(HandelFormSubmit)} className='border-2 bg-black border-amber-400 p-4 flex flex-col gap-4 w-[30%] rounded-2xl'>

            <input {...register("name",{required:'User Name is required'})} 
            className='border px-2 py-2 rounded-xl outline-0 font-medium text-xl' type="text" placeholder='Name' />
            {errors.name&&<p className='text-red-800'>{errors.name.message}</p>}

            <input {...register("email",{required:'User email is  required'})} className='border px-2 py-2 rounded-xl outline-0 font-medium text-xl' type="email" placeholder='Email' />
            {errors.email&&<p className='text-red-800'>{errors.email.message}</p>}

            <input {...register("number",{required:'User number is  required',minLength:{value:10,message:'minimum 10 digit required'},maxLength:{value:10,message:'maximum 10 digit required'}})} className='border px-2 py-2 rounded-xl outline-0 font-medium text-xl' type="number" placeholder='Mobile-No' />
            {errors.number&&<p className='text-red-800'>{errors.number.message}</p>}

            <input {...register("Designation",{required:'User Designation is  required'})} className='border px-2 py-2 rounded-xl outline-0 font-medium text-xl' type="text" placeholder='Designation' />
            {errors.Designation&&<p className='text-red-800'>{errors.Designation.message}</p>}

            <input {...register("empid",{required:'User Employee ID  is required'})} className='border px-2 py-2 rounded-xl outline-0 font-medium text-xl' type="text" placeholder='Employee ID' />
            {errors.empid&&<p className='text-red-800'>{errors.empid.message}</p>}

            <input {...register("url",{required:'User Image Url is required'})} className='border px-2 py-2 rounded-xl outline-0 font-medium text-xl' type="url" placeholder=' Image Url' />
            {errors.url&&<p className='text-red-800'>{errors.url.message}</p>}

            <div className='flex gap-6 items-center'>
                <div className='flex items-center'>
                <p>Manager</p>
                <input {...register("role",{required:'please select'})} type="radio" value="manager"/>
            </div>
            {errors.role&&<p className='text-red-800'>{errors.role.message}</p>}
            <div className='flex items-center'>
                <p>Employee</p>
                <input {...register("role")} type="radio" value="Employee"/>
            </div>
            </div>
        
            <button disabled={!isValid} className={`py-2 rounded-2xl ${isValid?"bg-blue-700 active:scale-95 hover:bg-blue-800 cursor-pointer":"bg-gray-500 cursor-not-allowed hover:bg-gray-400"}`}>Add User</button>
        </form>
    </div>
)
}

export default Add_User_Form
