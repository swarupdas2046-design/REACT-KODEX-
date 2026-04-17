import React from 'react'
import { Upload, Briefcase, User, Mail } from 'lucide-react'
import UseRHF from '../../../shared/hooks/UseRHF'
import { data } from 'react-router'
import { UseEmployeeContext } from '../../../shared/hooks/UseAuthContext'
import { nanoid } from 'nanoid'
import { LocalStore } from '../../../utils/LocalStorage'

const RegistrationPage = () => {
  let { register,handleSubmit,reset,errors} = UseRHF()
  let {registeredEmployee, setRegisteredEmployee} = UseEmployeeContext()
  let HandleFormSubmit = (data)=>{
    console.log(data);
    let EmployeeData = [...registeredEmployee, {...data, id:nanoid() }]
    LocalStore.set('reg-employee',EmployeeData)
    setRegisteredEmployee(EmployeeData)
    reset()
    
  }
  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <form onSubmit={handleSubmit(HandleFormSubmit)}>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Employee Registration</h1>
          <p className="text-gray-500 text-sm">
            Onboard new architectural talent into the system.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow">
            Save Employee
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT CARD */}
        <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col items-center">

          <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-4 relative">
            <User size={40} className="text-gray-400" />
            <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full">
              <Upload size={16} />
            </button>
          </div>

          <h2 className="font-semibold">Employee Photograph</h2>
          <p className="text-xs text-gray-500 text-center mt-1">
            Upload a high-resolution portrait for identification cards and profile.
          </p>

          {/* Progress */}
          <div className="w-full mt-6">
            <div className="flex justify-between text-xs mb-1">
              <span>Profile Status</span>
              <span className="text-blue-600 font-semibold">INCOMPLETE</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-600 h-2 w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-span-2 flex flex-col gap-6">

          {/* PERSONAL DETAILS */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold flex items-center gap-2 mb-4">
              <User size={18} /> Personal Details
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input  {...register('personal-info.first-name')} className="input" placeholder="First Name" />
              <input {...register('personal-info.last-name')} className="input" placeholder="Last Name" />
              <input  {...register('personal-info.dob')}  type="date" className="input" />
              <select {...register('personal-info.gender')} className="input">
                <option disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </select>
            </div>
          </div>

          {/* JOB INFO */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold flex items-center gap-2 mb-4">
              <Briefcase size={18} /> Job Information
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input {...register('employee-details.id')} className="input" placeholder="Employee ID" />
              <input  {...register('employee-details.job-role')} className="input" placeholder="Job Role" />
              <select {...register('employee-details.department')} className="input">
                <option disabled>Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Admin">Admin</option>
                <option value="Customer Service">Customer Service</option>
              </select>
              <input  {...register('employee-details.hire-date')} type="date" className="input" />
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold flex items-center gap-2 mb-4">
              <Mail size={18} /> Contact Information
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <input className="input" placeholder="Work Email" />
              <input className="input" placeholder="Phone Number" />
            </div>

            {/* Location */}
            {/* <div className="flex gap-3 mt-4">
              <button value="NY HQ" className="location-btn">NY HQ</button>
              <button value="London" className="location-btn">London</button>
              <button value="Remote" className="location-btn">Remote</button>
            </div> */}
          </div>

        </div>

      </div>

      </form>
    </div>
  )
}

export default RegistrationPage